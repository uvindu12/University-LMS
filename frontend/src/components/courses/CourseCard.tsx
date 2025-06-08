import React from 'react';

interface CourseCardProps {
    title: string;
    description: string;
    instructor: string;
    duration: string;
    onEnroll: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, instructor, duration, onEnroll }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-gray-700">{description}</p>
            <p className="text-gray-600">Instructor: {instructor}</p>
            <p className="text-gray-600">Duration: {duration}</p>
            <button 
                onClick={onEnroll} 
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Enroll Now
            </button>
        </div>
    );
};

export default CourseCard;