Chhattisgarh Hastkala Samriddhi (CGHS)

Chhattisgarh Hastkala Samriddhi (CGHS) is a web application built to support local artisans by giving them a digital storefront to showcase, promote, and sell handmade art.
The platform aims to help buyers discover authentic, culturally significant artwork from Chhattisgarh, while enabling artisans to reach wider audiences.

This repository contains:

-A FastAPI backend with PostgreSQL storage
-A React (Vite) frontend with a simple component-based UI
-Early-stage login/registration features
-A scalable architecture for adding marketplace features in future phases


Current Status

This project is under active development.
Basic authentication is implemented, and the UI contains placeholders for pages that will be expanded into full marketplace features.


Features (Current)
✅ Backend

-FastAPI server
-CORS-enabled API
-PostgreSQL connection using psycopg2
-User registration with duplicate-username handling
-User login validation

✅ Frontend

-React (Vite) application
-Client-side routing using component state
-Login and Registration pages
-Basic Home, Discover, and Search placeholder pages
-Conditional rendering based on authentication status



Features (Planned / Upcoming)

🔜 Artisan Marketplace

-Artisan profile creation and management
-Artwork/product uploads with images, descriptions, and pricing
-Public storefront for artisans
-Category browsing and curated discovery pages

🔜 Buyer Experience

-Search functionality with filters (style, material, artisan, price)
-Product detail pages
-Cart and checkout integrations
-Order tracking

🔜 Platform Infrastructure

-Secure password hashing
-Token-based authentication (JWT)
-Image upload storage (Cloud / local)
-Admin panel for content moderation


Tech Stack
Layer	        Technology
Frontend	    React (Vite), JavaScript
Backend	        FastAPI, Python 3
Database	    PostgreSQL
Auth (Current)	Username/password (basic)
Auth (Future)	Username/password (hashed)


Repository Structure

CGHS/
│
├── backend/
│   ├── main.py
│   ├── README.md
│   ├── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── main.jsx
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Discover.jsx
│   │   │   ├── Search.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── assets/
│   ├── README.md
│
├── start/
│   ├── start.bat
│   ├── README.md
│
└── README.md              # (This file)


Prerequisites

You will need:
-Node.js (18+)
-Python 3.10+
-PostgreSQL
-Git

Backend Setup (FastAPI)
1. Navigate to Backend folder
2. Install dependencies:
    pip install requirements.txt
3. Configure database credentials inside main.py
4. Run the server:
    python -m uvicorn main:app --reload


Backend will be available at http://127.0.0.1:8000


Available API Endpoints

Method	Endpoint	Description

POST	/register	Register new users
POST	/login	    Authenticate existing users
GET     /	        Basic server status check



Frontend Setup (React + Vite)
1. Navigate to Backend folder
2. Install dependencies:
    npm install
3. Start development server:
    npm run dev

Frontend will be available at http://127.0.0.1:5173



Known Limitations (Current Phase)

-Passwords are stored in plaintext (needs hashing)
-UI is minimal; pages are placeholders
-Search/Discover lacks real data integration
-No image upload system yet

These will be addressed in the next development stages.
