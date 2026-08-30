# Jobify – Job Management System

Jobify is a full-stack job management web application built using **Angular, ASP.NET Core Web API, C#, and MySQL**. It allows users to manage job listings through a clean and responsive dashboard.

## 🚀 Features

* 🔐 User Login
* 📊 Dashboard with total job count
* ➕ Add new jobs
* ✏️ Edit existing jobs
* 🗑️ Delete jobs
* 🔍 Search and manage jobs
* 👤 User profile section
* 🔌 REST API integration
* 🗄️ MySQL database integration
* 📱 Responsive user interface

## 🛠️ Tech Stack

### Frontend

* Angular
* TypeScript
* HTML5
* CSS3

### Backend

* C#
* ASP.NET Core Web API
* Entity Framework Core
* REST APIs

### Database

* MySQL

### Tools

* Visual Studio Code
* Swagger
* Git & GitHub

## 🏗️ Project Structure

```text
Jobify/
│
├── angular/
│   ├── src/
│   ├── public/
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
│
├── Backend/
│   ├── Controllers/
│   ├── Models/
│   ├── Data/
│   ├── Migrations/
│   ├── Program.cs
│   └── *.csproj
│
├── .gitignore
└── README.md
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Sohan12ss/Jobify.git
cd Jobify
```

### 2. Run the Backend

Navigate to the backend folder:

```bash
cd Backend
dotnet restore
dotnet run
```

The API will run locally using ASP.NET Core.

Swagger can be used to test the API endpoints.

### 3. Configure MySQL

Create a MySQL database named:

```text
jobify
```

Update the connection string in the backend configuration with your local MySQL credentials.

> Do not commit passwords or other sensitive credentials to GitHub.

### 4. Run the Angular Frontend

Open another terminal:

```bash
cd angular
npm install
ng serve
```

Then open the local Angular development URL shown in the terminal.

## 🔌 API Endpoints

| Method | Endpoint        | Description      |
| ------ | --------------- | ---------------- |
| GET    | `/api/job`      | Get all jobs     |
| GET    | `/api/job/{id}` | Get a job by ID  |
| POST   | `/api/job`      | Create a new job |
| PUT    | `/api/job/{id}` | Update a job     |
| DELETE | `/api/job/{id}` | Delete a job     |

## 📸 Screenshots

Add screenshots of the application here to showcase the UI.

### Login

*Add your login screenshot here.*

### Dashboard

*Add your dashboard screenshot here.*

### Add Job

*Add your Add Job screenshot here.*

### Profile

*Add your Profile screenshot here.*

## 🎯 What I Learned

While building Jobify, I worked with:

* Angular components and routing
* TypeScript
* REST API integration
* ASP.NET Core Web API
* Entity Framework Core
* MySQL database operations
* CRUD functionality
* API testing with Swagger
* Git and GitHub
* Frontend and backend integration

## 🔮 Future Improvements

* JWT-based authentication
* Role-based authorization
* Job application tracking
* Advanced job filtering
* Pagination
* Cloud deployment
* Improved validation and error handling

## 👨‍💻 Author

**Sohan Saini**

Full-Stack Developer | Angular | .NET | C# | MySQL

---

⭐ If you find this project useful, consider giving it a star!
