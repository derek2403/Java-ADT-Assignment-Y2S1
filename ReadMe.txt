Donation Management System

Overview

This repository contains the code for a Charity Management System, which includes both the backend and frontend components.

- Backend: Java Spring Boot application
- Frontend: Next application

Prerequisites

- Java 11 or higher
- Maven 3.6 or higher
- Node.js 14.x or higher
- npm (Node Package Manager)

Getting Started

Follow these steps to set up and run the project locally.

Backend

1. Navigate to the Backend Directory

   cd backend

2. Install Dependencies

   Make sure you have Maven installed. If not, install it from Maven's official site.

3. Run the Application

   Use Maven to run the application in development mode:

   mvn spring-boot:run -Dspring-boot.run.profiles=dev

   This command starts the backend application. The backend will be accessible at http://localhost:3001 (or the port specified in your application configuration).


Open another terminal
Frontend

1. Navigate to the Frontend Directory

   cd frontend

2. Install Dependencies

   Make sure you have Node.js and npm installed. If not, install them from Node.js's official site.

   Install the frontend dependencies using npm:

   npm install

3. Run the Application

   Start the frontend development server:

   npm run dev

   This command starts the frontend application. The frontend will be accessible at http://localhost:3000 (or the port specified in your package.json configuration).

Usage

- Backend API Endpoints: Refer to the backend controllers for available API endpoints and their usage.
- Frontend Interface: The React application provides a user interface for interacting with the backend services.

Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes and commit them (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature-branch).
5. Open a pull request.

License

This project is licensed under the MIT License - see the LICENSE file for details.

Contact

For any questions or issues, please contact derekliew0@gmail.com.

Feel free to adjust the paths, URLs, and other specifics to match your project's setup.