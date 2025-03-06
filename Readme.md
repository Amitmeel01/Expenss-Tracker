# Expense Management System

Vercel Link: [Vercel Deployment](https://expenss-tracker-kvre.vercel.app/)

## 📌 Project Overview
The **Expense Management System** is a web-based application designed to help users track and manage their daily expenses efficiently. Built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js), this system provides a scalable, responsive, and user-friendly platform for personal and organizational expense management.

## 🎯 Objectives
1. Simplify expense tracking for individuals and organizations.
2. Provide detailed insights into spending patterns for better financial management.
3. Allow users to create, update, and delete expenses and categories.
4. Generate comprehensive reports based on user-defined time periods and categories.

## ✨ Features

### 🔐 User Authentication and Authorization
- Secure user sign-up and login using **JWT authentication**.
- Role-based access control (RBAC) for administrative tasks.

### 📊 Expense and Category Management
- Create, update, and delete expenses and categories.
- Track expenses by date, category, and description.
- Upload and attach receipts to expense entries.

### 📈 Dashboard and Reporting
- Intuitive dashboard displaying:
    - Total expenses
    - Expenses by category
    - Recent transactions
- Generate reports based on date ranges and categories.
- Visualize spending patterns using **pie charts** and **bar graphs**.

### 📱 Responsive User Interface
- Fully responsive UI compatible with desktop, tablet, and mobile devices.
- Built with **React.js**, **react-bootstrap**, and **Material-Icons**.
- Enhanced visuals using the **tsparticles** library.

## 🛠️ Technical Architecture

### Frontend
- **React.js** for building a modular and reusable user interface.
- State management with **Redux**.
- Used libraries: `tsparticles`, `unique-names-generator`, `react-datepicker`, and `moment`.
- Responsive design with **Bootstrap** and **Material-Icons**.

### Backend
- **Node.js** and **Express.js** to create a **RESTful API**.
- Secure endpoints using **JWT authentication** and middleware.

### Database
- **MongoDB** for storing user data, expenses, and categories.
- Schema definition and validation with **Mongoose ORM**.

### Deployment
- **Frontend** deployed on **AWS Amplify**.
- **Backend** deployed on **Render**.
- CI/CD pipelines for automated builds and deployments.

## 📌 Run Locally

1. Clone the project:
```bash
  git clone https://github.com/Amitmeel01/Expenss-Tracker.git
```

2. Navigate to the project directory:
```bash
  cd Expense-Tracker
```

### Frontend Setup

1. Go to the frontend directory:
```bash
  cd frontend
```

2. Install dependencies:
```bash
  npm install
```

3. Start the frontend server:
```bash
  npm start
```

### Backend Setup

1. Go to the backend directory:
```bash
  already in backend
```

2. Install dependencies:
```bash
  npm install
```

3. Set up environment variables:

Create a `config` folder inside `backend` and add a `config.env` file with the following content:

```
MONGO_URL=your_mongodb_connection_string
PORT=your_port_number
```

4. Start the backend server:
```bash
  nodemon app.js
```

## 📚 Tech Stack

- **Client**: React.js, Redux, react-bootstrap, Material Icons, tsparticles
- **Server**: Node.js, Express.js
- **Database**: MongoDB

## 📊 Future Improvements
- Implement user expense analytics using AI/ML algorithms.
- Add recurring expense tracking and notification features.
- Enable multi-currency support.

## 🤝 Contributing
Contributions are welcome! Feel free to submit a Pull Request or open an Issue if you have any ideas or improvements.

## 📄 License
This project is licensed under the **MIT License**.

---

🚀 **Start managing your expenses today with the Expense Management System!**

