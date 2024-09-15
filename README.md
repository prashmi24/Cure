# Cure
Cure is a doctor's appointment web app built using the MERN (MongoDB, Express, React, Node.js) stack. It streamlines the process of booking and managing doctor appointments for both patients and healthcare providers. This project is designed to offer a seamless experience with user-friendly interfaces and robust backend functionalities.

📦 **Technologies**
- **MongoDB**: Database for storing appointment and user information.
- **Express.js**: Backend framework for handling API requests and server-side logic.
- **React.js**: Frontend framework for building interactive user interfaces.
- **Node.js**: Server-side environment for executing backend logic.
- **Mongoose**: MongoDB object modeling tool to manage data relationships.
- **Redux**: For state management on the frontend.
- **JWT (JSON Web Tokens)**: For secure authentication.

🦄 **Features**
- **User Registration & Login**: Patients and doctors can sign up, log in, and manage their profiles.
- **Role-Based Access**: Separate dashboards for patients and doctors.
- **Appointment Booking**: Patients can search for doctors, view availability, and book appointments.
- **Appointment Management**: Doctors can view, confirm, or cancel appointments.
- **Secure Authentication**: Password encryption and token-based authentication for secure access.
- **Notifications**: Email notifications for appointment confirmations and reminders.
- **Responsive Design**: The app is optimized for desktop and mobile devices.

🎯 **Key Functionalities**
- **Search Doctors**: Patients can filter doctors by specialization, location, and availability.
- **Manage Appointments**: View past and upcoming appointments, reschedule or cancel if necessary.
- **Doctor’s Dashboard**: Doctors can view their schedules, manage appointments, and update availability.
- **Payment Integration**: Add payment options for booking appointments online.
- **Feedback System**: Patients can leave feedback after appointments to help others make informed decisions.
  
👩🏽‍🍳 **Development Process**
The development started by setting up the backend using Express.js and MongoDB to handle appointments and user management. After structuring the database, the frontend was developed with React.js to create a seamless user interface. The use of JWT was incorporated for secure login sessions, while Redux helped in managing complex state across the application.

Special attention was given to ensure a responsive design, making it user-friendly across various devices. API routes were tested to ensure that user interactions were smooth, and error handling was implemented to provide better user experience. 

To enhance the user journey, features such as email notifications were added, ensuring users are always informed of their bookings and changes.

📚 **What I Learned**
- **Backend Development with Node.js & Express**: Building a RESTful API with proper routing and error handling.
- **Authentication with JWT**: Securing routes and managing user sessions.
- **State Management with Redux**: Handling global state efficiently in React applications.
- **Database Modeling with Mongoose**: Defining schemas and relationships between different data entities.
- **Responsive Design**: Ensuring the app is mobile-friendly.
  
💭 **Future Improvements**
- **Real-Time Notifications**: Integrate real-time notifications using WebSockets.
- **Doctor Availability Calendar**: A more detailed view of doctor availability with custom time slots.
- **In-App Chat**: Enable real-time chat between patients and doctors.

🚦 **Running the Project**
To run the project locally, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/prashmi24/Cure.git
