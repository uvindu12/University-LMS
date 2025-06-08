// filepath: /university-lms/university-lms/backend/src/types/index.ts
export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Course {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Assignment {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    courseId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface CourseWithAssignments extends Course {
    assignments: Assignment[];
}