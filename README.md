# University Learning Management System (LMS)

Welcome to the University Learning Management System (LMS) project. This project is designed to provide a comprehensive platform for managing learning and courses in a university setting.

## Project Structure

The project is divided into two main parts: the frontend and the backend.

### Frontend

The frontend is built using Next.js and styled with Tailwind CSS. It includes the following key features:

- **Home Page**: A welcoming page that introduces the LMS.
- **Course Management**: A section for managing courses, including viewing course details and assignments.
- **User Dashboard**: A personalized dashboard for users to access their courses and assignments.
- **Authentication**: Login and registration functionality for users.

#### Frontend Directory Structure

```
frontend
├── public
│   ├── favicon.svg
│   └── assets
│       └── images
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── courses
│   │   │   ├── [courseId]
│   │   │   │   ├── page.tsx
│   │   │   │   └── assignments
│   │   │   │       └── page.tsx
│   │   │   └── page.tsx
│   │   ├── dashboard
│   │   │   └── page.tsx
│   │   └── auth
│   │       ├── login
│   │       │   └── page.tsx
│   │       └── register
│   │           └── page.tsx
│   ├── components
│   │   ├── ui
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   ├── layout
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Sidebar.tsx
│   │   └── courses
│   │       ├── CourseCard.tsx
│   │       └── AssignmentList.tsx
│   ├── hooks
│   │   └── useAuth.ts
│   ├── lib
│   │   └── api.ts
│   ├── types
│   │   └── index.ts
│   └── styles
│       └── globals.css
├── tailwind.config.js
├── package.json
└── tsconfig.json
```

### Backend

The backend is built using Node.js and connects to a PostgreSQL database. It provides RESTful APIs for the frontend to interact with. Key features include:

- **User Authentication**: Secure login and registration processes.
- **Course Management**: APIs for creating, updating, and retrieving courses and assignments.
- **Error Handling**: Middleware for managing errors and protecting routes.

#### Backend Directory Structure

```
backend
├── src
│   ├── app.ts
│   ├── config
│   │   └── db.config.ts
│   ├── controllers
│   │   ├── auth.controller.ts
│   │   ├── course.controller.ts
│   │   └── user.controller.ts
│   ├── models
│   │   ├── course.model.ts
│   │   ├── user.model.ts
│   │   └── assignment.model.ts
│   ├── routes
│   │   ├── auth.routes.ts
│   │   ├── course.routes.ts
│   │   └── user.routes.ts
│   ├── middleware
│   │   ├── auth.middleware.ts
│   │   └── error.middleware.ts
│   ├── services
│   │   ├── auth.service.ts
│   │   └── notification.service.ts
│   ├── types
│   │   └── index.ts
│   └── utils
│       └── helpers.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository.
2. Navigate to the `frontend` directory and run `npm install` to install frontend dependencies.
3. Navigate to the `backend` directory and run `npm install` to install backend dependencies.
4. Set up the PostgreSQL database and configure the connection settings in `backend/src/config/db.config.ts`.
5. Run the backend server and the frontend application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.