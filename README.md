# 🏢 SmartOffice — Office Visitor Management System

<p align="center">
  A web-based application for managing office visitors, registrations, approvals, and visit records.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
</p>

## 📌 Overview

**SmartOffice** is a college project designed to simplify office visitor management through a centralized web interface. It aims to organize visitor information and make visit tracking easier for office staff.

The application uses a web frontend, a Node.js and Express backend, and MongoDB for visitor data storage.

## ✨ Key Features

- 📝 **Visitor Registration** — Record visitor details and visit information.
- 📋 **Visitor History** — View and review visitor records.
- ✅ **Visitor Requests** — Manage visitor approval and rejection workflows.
- 🚪 **Check-In & Check-Out** — Track visitor entry and exit.
- 📊 **Dashboard & Reports** — Access visitor-management information.
- 🎫 **Visitor Pass** — View visitor pass information and QR-code functionality.

*Feature availability depends on the current implementation and configuration.*

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| HTML, CSS, JavaScript | Frontend interface |
| Node.js | JavaScript runtime for the backend |
| Express.js | Backend API and routing |
| MongoDB | Database for visitor records |
| Git & GitHub | Version control and source-code hosting |

## 📂 Project Structure

```text
office-visitor-management/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── .gitignore
│   ├── db.js
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── dashboard.html
│   ├── visitor-registration.html
│   ├── visitor-history.html
│   ├── visitor-requests.html
│   ├── visitor-pass.html
│   ├── check-in.html
│   ├── check-out.html
│   ├── reports.html
│   ├── staff-login.html
│   ├── script.js
│   └── style.css
├── .gitignore
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- A MongoDB database, either local or hosted
- Git installed

### 1. Clone the repository

```bash
git clone https://github.com/fathimamubarak/office-visitor-management.git
cd office-visitor-management
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Configure environment variables

Create a local `.env` file inside the `backend` folder and configure the MongoDB connection string and any other variables required by your backend.

**Never commit `.env` files, database passwords, or secret keys to GitHub.**

### 4. Start the backend

From the `backend` directory, run:

```bash
node server.js
```

Use the port configured in your backend. The frontend must be configured to send API requests to the correct backend address.

### 5. Open the frontend

Open the frontend using a local development server or another suitable static web server. Ensure its API URL points to the running backend.

## 📸 Screenshots

Screenshots of the dashboard, visitor registration, visitor history, and visitor pass can be added here as the project is documented.

## 🔐 Security Notes

- Keep database credentials in environment variables.
- Do not publish private visitor information.
- Configure appropriate authentication and access controls before using the application in a real office.
- Keep dependencies updated.

## 🚧 Project Status

This project is being developed as part of a college project. Features, screenshots, and deployment details will be updated as the implementation progresses.

## 👩‍💻 Author

**Fathima Mubarak**

- GitHub: [@fathimamubarak](https://github.com/fathimamubarak)
- Project: [SmartOffice — Office Visitor Management](https://github.com/fathimamubarak/office-visitor-management)

---

<p align="center">
  <i>Learning by building. Improving with every commit. ✨</i>
</p>
