from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import psycopg2

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class LoginRequest(BaseModel):
    username: str
    password: str

class RegisterRequest(BaseModel):
    username: str
    password: str


def checkLogin(username: str, password: str):

    conn = psycopg2.connect(
        host="localhost",
        database="cghs",
        user="neil",
        password="pwd"
    )
    cursor = conn.cursor()

    query = """
        SELECT id FROM users
        WHERE username = %s AND password = %s;
    """
    cursor.execute(query, (username, password))
    user = cursor.fetchone()

    cursor.close()
    conn.close()

    if user:
        return {"success": True, "message": "Login successful"}
    else:
        return {"success": False, "message": "Invalid username or password"}


def registerUser(username: str, password: str):

    conn = psycopg2.connect(
        host="localhost",
        database="cghs",
        user="neil",
        password="pwd"
    )
    cursor = conn.cursor()


    cursor.execute("SELECT id FROM users WHERE username = %s;", (username,))
    existing = cursor.fetchone()

    if existing:
        cursor.close()
        conn.close()
        return {"success": False, "message": "Username already exists"}


    cursor.execute(
        "INSERT INTO users (username, password) VALUES (%s, %s);",
        (username, password)
    )
    conn.commit()

    cursor.close()
    conn.close()

    return {"success": True, "message": "Registration successful"}



@app.post("/login")
def login(req: LoginRequest):
    return checkLogin(req.username, req.password)

@app.post("/register")
def register(req: RegisterRequest):
    return registerUser(req.username, req.password)

@app.get("/")
def root():
    return {"message": "Backend running"}
