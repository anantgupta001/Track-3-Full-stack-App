# Employee and Task Management Application

## Live Demo 🚀

Explore the deployed application here:
*   **Frontend (Netlify):** [https://phenomenal-monstera-a74bcb.netlify.app/](https://phenomenal-monstera-a74bcb.netlify.app/)
*   **Backend API (Render):** [https://track-3-full-stack-app.onrender.com](https://track-3-full-stack-app.onrender.com)

---

## Project Overview ✨

This is a robust full-stack Employee and Task Management application designed to streamline workforce management. Built with a modern tech stack, it provides a secure and intuitive platform for managing employee records and efficiently assigning and tracking tasks. The application features comprehensive user authentication, ensuring data integrity and access control for authenticated users.

## Key Features 📋

*   **User Authentication:** Secure registration, login, and logout functionalities with JSON Web Tokens (JWT) for session management.
*   **Employee Management:** CRUD (Create, Read, Update, Delete) operations for employee profiles, including names, emails, and roles.
*   **Task Management:** Comprehensive CRUD operations for tasks, allowing for creation, viewing, modification, and deletion of assignments.
*   **Task Assignment:** Seamlessly assign tasks to specific employees.
*   **Protected Routes:** Ensures that sensitive employee and task data is only accessible to authenticated users.

## Technologies Used 🛠️

### Frontend
*   **React.js:** A declarative, component-based JavaScript library for building user interfaces.
*   **React Router DOM:** For declarative routing within the React application.
*   **Material-UI (MUI):** A comprehensive suite of UI tools for building a responsive and aesthetically pleasing design.
*   **Axios:** A promise-based HTTP client for making API requests to the backend.

### Backend
*   **Node.js:** A JavaScript runtime for building scalable server-side applications.
*   **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
*   **Sequelize:** A powerful Object-Relational Mapper (ORM) for Node.js, providing easy interaction with MySQL.
*   **MySQL:** A robust relational database management system for storing application data.
*   **JSON Web Tokens (JWT):** For secure and stateless authentication.
*   **bcryptjs:** A library to hash passwords, enhancing security.
*   **dotenv:** For loading environment variables from a `.env` file.
*   **CORS:** Middleware to enable Cross-Origin Resource Sharing.

## Getting Started (Local Development) 🚀

Follow these instructions to set up the project on your local machine for development and testing purposes.

### Prerequisites
Ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (v14 or higher) & `npm`
*   [Git](https://git-scm.com/)
*   A MySQL Database (local or accessible hosted instance). This project uses an existing hosted database.

### 1. Clone the Repository
First, clone the project from GitHub:

```bash
git clone https://github.com/anantgupta001/Track-3-Full-stack-App.git
cd Track-3-Full-stack-App
```

### 2. Backend Setup

Navigate to the project's root directory:

```bash
cd Track-3-Full-stack-App
```

**Install Backend Dependencies:**

```bash
npm install
```

**Configure Backend Environment Variables:**
Create a `.env` file in the project root with your database credentials and a JWT secret. **Replace the placeholder values with your actual database and secret keys.**

```
JWT_SECRET=your_super_secret_jwt_key_here
PORT=5000
DATABASE_URL="mysql://your_username:your_password@your_host:your_port/your_database_name"
DATABASE_USERNAME="your_username"
DATABASE_PASSWORD="your_password"
DATABASE_HOST="your_host"
DATABASE_PORT=your_port
DATABASE_NAME="your_database_name"
```
*Note: For local development, `PORT` can be `5000`.*

**Run the Backend Server:**

```bash
npm start
# Or, to run both backend and frontend concurrently for development:
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
Create a `.env` file in the `frontend` directory. For local development, this should point to your local backend.

```
REACT_APP_API_URL=http://localhost:5000
```
*Note: This `REACT_APP_API_URL` must point to your backend server's URL. For local development, it's `http://localhost:5000`. For deployment, this will be updated to your deployed backend URL.*

**Run the Frontend Development Server:**

```bash
npm start
```

## Deployment Guide 🌐

This application is designed for independent deployment of its frontend and backend components.

### Frontend Deployment (Netlify)
1.  **Host:** Netlify
2.  **Connect Repository:** Link your frontend repository to Netlify.
3.  **Build Command:** `npm run build`
4.  **Publish Directory:** `frontend/build`
5.  **Environment Variables:**
    *   Set `REACT_APP_API_URL` to the **full URL of your deployed backend service** (e.g., `https://your-backend-app.onrender.com`).

### Backend Deployment (Render)
1.  **Host:** Render
2.  **Connect Repository:** Link your backend repository to Render as a new "Web Service".
3.  **Root Directory:** (Leave empty if your backend is at the repo root)
4.  **Build Command:** `npm install`
5.  **Start Command:** `npm start`
6.  **Environment Variables:** Add the following variables with your actual credentials:
    *   `JWT_SECRET`
    *   `DATABASE_URL`
    *   `DATABASE_USERNAME`
    *   `DATABASE_PASSWORD`
    *   `DATABASE_HOST`
    *   `DATABASE_PORT`
    *   `DATABASE_NAME`

## Contributing 🤝

Contributions are welcome! Please feel free to open issues or submit pull requests.

## License 📄

This project is licensed under the ISC License.

