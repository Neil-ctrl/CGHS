Backend Documentation - Chhattisgarh Hastkala Samriddhi (CGHS)

This document provides setup instructions, dependency requirements, database configuration details, and the planned enhancements for the backend component of the CGHS project.


Overview

The backend for Chhattisgarh Hastkala Samriddhi (CGHS) is built using FastAPI with PostgreSQL as the database layer. It currently supports:
-User registration
-Username conflict detection
-Basic login validation

Planned enhancements include secure password storage, environment-based configuration, and multi-endpoint expansion for artisan and marketplace features.


Required Python Packages:
-fastapi
-uvicorn
-psycopg2
-psycopg2-binary
-pydantic

All dependencies can be installed with:
    pip install requirements.txt
    [within this directory]


Database Setup (PostgreSQL)

Before running the backend server:

1. Ensure PostgreSQL is installed and running.
2. Create a database named "cghs"
3. Create the required user table:
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255)  UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );


Important Note:

The backend currently connects to PostgreSQL using hardcoded credentials inside the code.
You must manually update:
-host
-database
-user
-password

in main.py (connection section) to match your local PostgreSQL configuration.

This will be refactored in the future.



Running the Backend Server

From the backend/ directory, execute:
    python -m uvicorn main:app --reload

The backend will be available at http://127.0.0.1:8000


Current Endpoints:
Method	Endpoint	Description
POST	/register	Register a new user
POST	/login	    Validate user credentials
GET	    /	        Health-check endpoint



Planned Backend Enhancements:

1. Environment-Based Configuration
-Move PostgreSQL credentials (user, password, database, host) into a .env file.
-Load configuration using python-dotenv or FastAPI settings management.

2. Password Security Improvements
-Store hashed passwords instead of plaintext.
-Use a recommended hashing library (e.g., bcrypt, passlib).

3. Expanded API Endpoints
-User profile data
-User-created items/art pieces
-Artisan-specific dashboards
-Marketplace browsing endpoints
-Recent uploads feed for the Discover page

4. Item Upload System
-Image upload handling
-Product metadata storage (title, description, price, category)
-Publicly accessible item listing endpoints

5. Discover Page Support
-Endpoint serving recently added items
-Pagination
-Sorting and filtering support



Notes:

-This backend is currently an early-stage implementation.
-All upcoming changes will focus on improving security, scalability, and API richness.
-Once .env and hashing changes are introduced, the current login/registration logic will be updated accordingly.