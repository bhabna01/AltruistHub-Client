# AltruistHub

AltruistHub is a volunteer management system designed to connect individuals with meaningful volunteer opportunities. The application allows users to add and manage volunteer posts, request to be a volunteer, and manage their own volunteer requests. It also features a modern design with dark and light theme options and integrates various front-end and back-end technologies.

## Live Link

https://email-pass-auth-97857.web.app/

## Features
- **User Authentication**: Secure authentication using Firebase with email/password and Google login.
- **Volunteer Management**: Add, manage, and view volunteer posts.
- **Volunteer Requests**: Request to be a volunteer and manage volunteer requests.
- **Testimonials Section**: Display testimonials from users.
- **Dark/Light Theme Toggle**: Switch between dark and light themes for a personalized experience.
- **Form Handling**: Use of react-hook-form for efficient form management.
- **Animations and Effects**: Integration of framer-motion for animations and react-awesome-reveal for revealing effects.
- **Date Pickers**: React-datepicker for selecting dates.
- **Toasts and Alerts**: React-toastify and sweetalert2 for notifications and alerts.
- **Styling**: Flowbite and Tailwind CSS for styling.

## Installation

To run this project locally, follow these steps:

### 1. Clone the Repository

git clone https://github.com/bhabna01/AltruistHub-Client.git
cd esthetica-beauty-salon

### 2. Install Dependencies

Make sure you have Node.js installed, then run:
npm install
This will install all the required dependencies.

### 3. Set Up MongoDB

Make sure you have MongoDB installed and running. Set up your MongoDB connection URI and add it to your environment variables.

### 4.Configuration
Create a .env.local file in the root directory of the project and add the following environment variables:

VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=our_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id


### 5. Run the Development Server

Start the application by running:
npm start
The app will be available at http://localhost:5173.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server for modern web projects.
- **Firebase**: Authentication service for user login and registration.
- **React Hook Form**: Library for managing form state and validation.
- **Axios**: HTTP client for making API requests.
- **Flowbite**: Component library for styling with Tailwind CSS.
- **Lottie React**: Library for adding animations with Lottie.
- **React Router DOM**: For routing and navigation in the application.
- **React Slick**: Carousel library for displaying banners and images.
- **React Tooltip**: Library for tooltips.
- **SweetAlert2**: Library for beautiful alerts.

## MongoDB Configuration
To use MongoDB in your project, make sure you have MongoDB set up and running. You need to configure your MongoDB URI in your environment variables.
## Contributing
Contributions are welcome! If you find a bug or want to add a feature, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact
For questions or support, please contact the project maintainer at abierhoque01@gmail.com.
