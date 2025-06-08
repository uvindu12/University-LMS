# University Learning Management System (LMS)

This project is a University Learning Management System (LMS) built using Next.js for the frontend, Node.js for the backend, PostgreSQL for the database, and styled with Tailwind CSS. 

## Project Structure

The project is organized into two main directories: `frontend` and `backend`.

### Frontend

The frontend is built with Next.js and includes the following key features:

- **Pages**: 
  - Home page
  - Course details page
  - Assignments page
  - User dashboard
  - Authentication pages (login and register)

- **Components**: 
  - UI components (Button, Card)
  - Layout components (Header, Footer, Sidebar)
  - Course-related components (CourseCard, AssignmentList)

- **Styles**: 
  - Global styles using Tailwind CSS

### Backend

The backend is built with Node.js and Express, featuring:

- **Controllers**: 
  - Authentication
  - Course management
  - User management

- **Models**: 
  - Course
  - User
  - Assignment

- **Routes**: 
  - Authentication routes
  - Course routes
  - User routes

- **Middleware**: 
  - Authentication middleware
  - Error handling middleware

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- Docker (optional, for containerization)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd university-lms
   ```

2. Navigate to the frontend directory and install dependencies:
   ```
   cd frontend
   npm install
   ```

3. Navigate to the backend directory and install dependencies:
   ```
   cd ../backend
   npm install
   ```

### Running the Application

To run the application, you can start both the frontend and backend servers:

1. Start the backend server:
   ```
   cd backend
   npm run start
   ```

2. Start the frontend server:
   ```
   cd ../frontend
   npm run dev
   ```

### Docker

If you prefer to use Docker, you can run the application using the provided `docker-compose.yml` file. Simply run:
```
docker-compose up
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.