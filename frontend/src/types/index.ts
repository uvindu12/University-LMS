// filepath: /Users/uvindukithmina/Desktop/LSM/university-lms/frontend/src/types/index.ts
export interface Course {
    id: string;
    title: string;
    description: string;
    instructor: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface User {
    id: string;
    username: string;
    email: string;
    role: 'student' | 'instructor' | 'admin';
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

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterCredentials {
    username: string;
    email: string;
    password: string;
}