# TaskFlow - MERN Task Management Application

## Overview

TaskFlow is a full-stack Task Management Application built using the MERN stack. It allows users to register, log in, create tasks, update task status, edit tasks, delete tasks, and manage their daily workflow efficiently.

## Features

* User Authentication (Register/Login)
* JWT Authentication with Cookies
* Create New Tasks
* Edit Existing Tasks
* Delete Tasks
* Mark Tasks as Completed or Pending
* Dashboard with Task Statistics
* Responsive Design for Mobile and Desktop
* Protected Routes
* Task Status Visualization using Charts

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Recharts
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt.js
* Cookie Parser

## Project Structure

```bash
task_management_App
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── controller
│   ├── models
│   ├── routes
│   ├── Middleware
│   └── server.js
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd task_management_App
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the backend folder:

```env
\MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## API Endpoints

### Authentication

* POST /api/auth/register
* POST /api/auth/login
* GET /api/auth/logout

### Tasks

* POST /api/task/create
* GET /api/task/get
* PUT /api/task/update/:id
* DELETE /api/task/delete/:id

## Screenshots

Add screenshots of:

* Login Page
* Register Page
* Dashboard
* Task Management Page

## Deployment

### Frontend

* Vercel

### Backend

* Render

### Database

* MongoDB Atlas



## Author

Rohit

GitHub: https://github.com/rohit45634
