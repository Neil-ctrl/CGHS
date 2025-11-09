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

@app.post("/login")
def login(req: LoginRequest):
    return checkLogin(req.username, req.password)

@app.get("/")
def root():
    return {"message": "Backend running"}
