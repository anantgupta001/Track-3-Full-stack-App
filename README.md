# Employee and Task Management Application

## Project Description
This is a full-stack Employee and Task Management application built using the MERN (MySQL, Express.js, React, Node.js) stack. It allows users to manage employees and assign tasks to them, with authentication to protect routes.

## Features
- User Authentication (Register, Login, Logout) with JWT
- Add, View, Update, and Delete Employees
- Add, View, Update, and Delete Tasks
- Assign Tasks to Employees
- Protected routes for authenticated users

## Technologies Used
**Frontend:**
- React.js
- React Router DOM
- Material-UI (MUI) for styling
- Axios for API requests

**Backend:**
- Node.js
- Express.js
- Sequelize (ORM)
- MySQL (Database) - *Currently using an external hosted MySQL database*
- JSON Web Tokens (JWT) for authentication
- bcryptjs for password hashing
- dotenv for environment variable management
- CORS for cross-origin requests

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)
- Git
- A MySQL Database (local or hosted - this project uses an existing hosted database)

### 1. Clone the Repository
```bash
git clone https://github.com/anantgupta001/Track-3-Full-stack-App.git
cd Track-3-Full-stack-App
```

### 2. Backend Setup
Navigate to the project root directory:

```bash
cd C:\Users\anant\OneDrive\Desktop\Track-3-Full-stack
```

**Install Backend Dependencies:**

```bash
npm install
```

**Configure Environment Variables:**
Create a `.env` file in the project root with the following content (replace with your actual hosted database credentials and a strong JWT secret):

```
JWT_SECRET=your_super_secret_jwt_key_here
PORT=5000
DATABASE_URL="mysql://your_username:your_password@your_host:your_port/your_database_name"
DATABASE_USERNAME="your_username"
DATABASE_PASSWORD="your_password"
HIS_HOST="your_host"
DATABASE_PORT=your_port
```
*Note: Replace `your_username`, `your_password`, `your_host`, `your_port`, and `your_database_name` with your actual hosted MySQL database credentials.*

**Run the Backend Server:**

```bash
npm start
# Or for development with frontend:
npm run dev
```

### 3. Frontend Setup
Navigate to the frontend directory:

```bash
cd frontend
```

**Install Frontend Dependencies:**

```bash
npm install
```

**Configure Frontend Environment Variables:**
Create a `.env` file in the `frontend` directory with the following content:

```
REACT_APP_API_URL=http://localhost:5000
```
*Note: This `REACT_APP_API_URL` should point to your backend server's URL. For local development, it's `http://localhost:5000`. For deployment, you'll change this to your deployed backend URL.*

**Run the Frontend Development Server:**

```bash
npm start
```

## Deployment Notes
This application can be deployed using services like Netlify/Vercel for the frontend and Render/Heroku for the backend. Ensure you configure environment variables on your hosting platforms.

