Frontend Documentation - Chhattisgarh Hastkala Samriddhi (CGHS)

This document provides setup instructions, component descriptions, and development notes for the frontend of the CGHS web application.

The frontend is implemented using React (Vite) and currently provides a basic UI for authentication and simple navigation placeholders.



Overview

The frontend serves as the user-facing interface for the Chhattisgarh Hastkala Samriddhi (CGHS) platform. It communicates with the FastAPI backend to support:
-User login
-User registration
-Navigation between key pages

The app uses component-level state to manage navigation and authentication.



Requirements

Ensure the following are installed on your system:
-Node.js 18+
-npm
-Vite (installed automatically via npm scripts)

Install all project dependencies with:
    npm install


Run the Frontend server with:
    npm run dev


Frontend will be available at http://127.0.0.1:5173
The server auto-refreshes on file changes.



Current Functionality

✅ Authentication Flow
The frontend supports a simple login/registration flow by interacting with the backend API at:
    http://localhost:8000

1. Login.jsx
-Sends POST request to /login
-Displays server messages for success or failure
-Sets isLogin to true on successful login

2. Register.jsx
-Sends POST request to /register
-Checks password confirmation client-side
-Displays success/error messages from backend

✅ Navigation
Navigation is controlled using state in App.jsx

The available pages are:
-Home
-Discover
-Search
-Displayed only after a successful login.

✅ Conditional Rendering

Unauthenticated users see:
-Login page
-Option to switch to Register page
-Authenticated users see:
-Header navigation
-Content pages (Home, Discover, Search)




Planned Frontend Enhancements

The following improvements map directly to the backend roadmap and the intended features of the CGHS platform:

1. UI/UX Expansion
-Full visual redesign (colors, layout, branding) [very next planned commit and push]
-Grid-based product display for artisan items
-Dedicated item detail pages

2. Authentication Improvements
-Password Hashing

3. File Upload Support
-Image upload UI for artisan items
-Preview functionality
-File validation

4. Discover & Search Pages
-Integrate with backend fetch endpoints once available
-Display recent items, trending items, recommended art
-Search with filters (category, artisan, price)

5. Profile & Dashboard Pages
-Artisan profile management
-Item manager (add/edit/remove items)
-Order history & analytics (future)



Notes:

1. API URLs are currently hardcoded to http://localhost:8000. These will eventually move to environment variables (.env) for production builds.

2. The current UI is intentionally minimal, serving as a foundation for future instructional and design improvements.

3. The frontend relies on the backend being active during development, especially for login/registration flows.