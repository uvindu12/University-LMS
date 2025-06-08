import { Request, Response } from 'express';

export const sendResponse = (res: Response, statusCode: number, message: string, data?: any) => {
    res.status(statusCode).json({
        success: statusCode < 400,
        message,
        data,
    });
};

export const handleError = (res: Response, error: any) => {
    console.error(error);
    res.status(500).json({
        success: false,
        message: 'An unexpected error occurred.',
    });
};