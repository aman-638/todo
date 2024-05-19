# Task Management Application

This is a simple task management application built with React, Vite, Tailwind CSS, and Firebase. The application allows users to create, update, and delete tasks, as well as filter tasks by their status. The application is responsive and works well on both desktop and mobile devices.

## Features

- Create a new task with a title, description, and status.
- Update the status of a task.
- Delete a task.
- Filter tasks by status.
- Responsive design for mobile and desktop devices.

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **Formik**: A library for building forms in React with easy-to-use validation.

### Backend

- **Firebase Firestore**: A flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform.
- **Firebase Authentication**: A service that can authenticate users using only client-side code.

## Installation and Setup

### Prerequisites

- Node.js and npm installed on your machine.
- A Firebase account.

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/task-management-app.git

   ```

2. **Install dependencies:**

   npm install

3. **Set up Firebase:**

   - Go to the Firebase Console and create a new project.

   - Add a web app to your Firebase project.

   - Copy the Firebase configuration details.

   - Create a .env file in the root of your project and add your Firebase configuration details:

   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id

4. **Run the application:**

   npm run dev
