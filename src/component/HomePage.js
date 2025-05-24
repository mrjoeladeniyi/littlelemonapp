import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <section className="min-h-screen bg-white py-12 px-4 mt-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                    <img 
                        src="/logo512.png" 
                        alt="Little Lemon Restaurant" 
                        className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Little Lemon</h1>
                    <h2 className="text-2xl text-gray-700 mb-6">Chicago</h2>
                    <Link 
                        to="/reservations"
                        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full transition-colors duration-200"
                    >
                        Reserve a Table
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default HomePage;