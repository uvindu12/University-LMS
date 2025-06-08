import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <h1 className="text-xl font-bold">University LSM</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/courses" className="hover:underline">Courses</a></li>
                    <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
                    <li><a href="/auth/login" className="hover:underline">Login</a></li>
                    <li><a href="/auth/register" className="hover:underline">Register</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;