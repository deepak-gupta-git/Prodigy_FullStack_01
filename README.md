# MERN Stack User Authentication (Login & Signup)

This project provides a full-stack user authentication system using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to sign up, log in, and access a protected route.

## Features

- **User Sign Up:** Users can create an account by providing their email and password.
- **User Login:** Users can log in with their credentials and receive a JWT (JSON Web Token) for authenticated requests.
- **Protected Routes:** Only authenticated users can access certain routes that are protected by JWT authentication.
- **Password Hashing:** Passwords are hashed using bcrypt to ensure security.
- **JWT Authentication:** Uses JSON Web Tokens to authenticate users for protected routes.

## Technologies Used

- **Frontend:**
  - React.js
  - React Router
  - Axios (for HTTP requests)

- **Backend:**
  - Node.js
  - Express.js
  - JWT (JSON Web Tokens)
  - bcryptjs (for password hashing)
  - dotenv (for environment variables)

- **Database:**
  - MongoDB (for storing user data)

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/mern-authentication.git
cd mern-authentication

