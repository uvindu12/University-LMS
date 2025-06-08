# University Learning Management System (LMS) Backend

This is the backend part of the University Learning Management System (LMS) project. The backend is built using Node.js and Express, and it connects to a PostgreSQL database for data storage.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **app.ts**: Entry point for the application, setting up the Express server.
  - **config/**: Contains configuration files.
    - **db.config.ts**: Database configuration settings for connecting to PostgreSQL.
  - **controllers/**: Contains controller files for handling requests.
    - **auth.controller.ts**: Functions for handling authentication-related requests.
    - **course.controller.ts**: Functions for handling course-related requests.
    - **user.controller.ts**: Functions for handling user-related requests.
  - **models/**: Contains model files for interacting with the database.
    - **course.model.ts**: Defines the Course model.
    - **user.model.ts**: Defines the User model.
    - **assignment.model.ts**: Defines the Assignment model.
  - **routes/**: Contains route files for defining API endpoints.
    - **auth.routes.ts**: Routes for authentication-related endpoints.
    - **course.routes.ts**: Routes for course-related endpoints.
    - **user.routes.ts**: Routes for user-related endpoints.
  - **middleware/**: Contains middleware functions.
    - **auth.middleware.ts**: Middleware for protecting routes that require authentication.
    - **error.middleware.ts**: Middleware for handling errors.
  - **services/**: Contains business logic related to different functionalities.
    - **auth.service.ts**: Business logic related to authentication.
    - **notification.service.ts**: Business logic related to notifications.
  - **types/**: Contains TypeScript types and interfaces used throughout the backend.
  - **utils/**: Contains utility functions used across the backend.

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd university-lms/backend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Set up the database**:
   Ensure you have PostgreSQL installed and create a database for the application. Update the `db.config.ts` file with your database credentials.

4. **Run the application**:
   ```
   npm run start
   ```

## API Documentation

Refer to the individual route files in the `routes` directory for details on the available API endpoints.

## License

This project is licensed under the MIT License.