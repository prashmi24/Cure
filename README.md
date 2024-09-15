# Cure
 
Cure is a modern web application that helps users efficiently manage and track their health records, appointments, and medication schedules. It aims to provide a seamless experience for users to store, access, and share their medical information in a secure and organized manner.

Features
User Authentication: Secure user authentication system using JWT tokens.
Health Records Management: Easily store and manage medical records, prescriptions, and reports.
Appointment Scheduling: Track and manage upcoming appointments with reminders.
Medication Tracker: Set and manage medication reminders to stay on top of your prescriptions.
Responsive UI: Optimized for all screen sizes for a great user experience on any device.
Tech Stack
Frontend: ReactJS, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Token)
Getting Started
Prerequisites
Make sure you have the following installed on your system:

Node.js
MongoDB
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/prashmi24/Cure.git
Navigate into the project directory:

bash
Copy code
cd Cure
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory and add the necessary variables such as:

bash
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the server:

bash
Copy code
npm start
Visit http://localhost:3000 in your browser to access the application.

Running the Project
To start the backend server:

bash
Copy code
npm run dev
To run the React frontend:

bash
Copy code
npm start
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
License
This project is licensed under the MIT License.
