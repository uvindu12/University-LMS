import React from 'react';

const DashboardPage = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">User Dashboard</h1>
            <p className="mt-2">Welcome to your dashboard! Here you can manage your courses, assignments, and more.</p>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Your Courses</h2>
                {/* Placeholder for course list */}
                <ul className="list-disc list-inside">
                    <li>Course 1</li>
                    <li>Course 2</li>
                    <li>Course 3</li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardPage;