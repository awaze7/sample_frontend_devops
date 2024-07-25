import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center mb-8">
                Welcome to the Swadify Employee Records
            </h1>
            <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center">
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 md:mb-0 md:mr-4"
                    onClick={() => navigate('/add-details')}
                >
                    Add your details
                </button>
                <hr className="mx-0 md:mx-4 border-2 border-gray-200 mb-4 md:mb-0" />
                <button 
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => navigate('/view-employees')}
                >
                    View all employees
                </button>
            </div>
        </div>
    );
}
