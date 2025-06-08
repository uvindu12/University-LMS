import React from 'react';

const Sidebar = () => {
    return (
        <div className="w-64 h-full bg-gray-800 text-white">
            <h2 className="text-xl font-bold p-4">University LMS</h2>
            <ul className="mt-4">
                <li className="p-2 hover:bg-gray-700"><a href="/">Home</a></li>
                <li className="p-2 hover:bg-gray-700"><a href="/courses">Courses</a></li>
                <li className="p-2 hover:bg-gray-700"><a href="/dashboard">Dashboard</a></li>
                <li className="p-2 hover:bg-gray-700"><a href="/auth/login">Login</a></li>
                <li className="p-2 hover:bg-gray-700"><a href="/auth/register">Register</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;