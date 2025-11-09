from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

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

@app.get("/")
def root():
    return {"message": "Backend is running"}

@app.post("/login")
def login(req: LoginRequest):
    if req.username == "admin" and req.password == "1234":
        return {"success": True, "message": "Login successful"}

    return {"success": False, "message": "Invalid credentials"}
