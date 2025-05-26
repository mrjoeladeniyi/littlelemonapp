import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <section className="min-h-screen bg-white py-12 px-4 mt-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 perspective-1000">
                    <img 
                        src="/logo512.png" 
                        alt="Little Lemon Restaurant" 
                        className="w-full h-[400px] object-cover rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:rotate-y-12 hover:rotate-x-12 cursor-pointer"
                        onMouseMove={(e) => {
                            const card = e.currentTarget;
                            const box = card.getBoundingClientRect();
                            const x = e.clientX - box.left;
                            const y = e.clientY - box.top;
                            const centerX = box.width / 2;
                            const centerY = box.height / 2;
                            const cursorX = x;
                            const cursorY = y;
                            
                            // Create a radial gradient that follows the cursor
                            card.style.background = `radial-gradient(circle 20px at ${cursorX}px ${cursorY}px, rgba(255, 215, 0, 0.3), transparent)`;
                            const rotateX = (y - centerY) / 10;
                            const rotateY = -(x - centerX) / 10;
                            
                            // Calculate distance from cursor to edges
                            const distanceX = Math.min(x, box.width - x);
                            const distanceY = Math.min(y, box.height - y);
                            const distance = Math.min(distanceX, distanceY);
                            
                            // Add glow effect when cursor is near edges (within 50px)
                            const glowIntensity = Math.max(0, 50 - distance) / 50;
                            const glowColor = `rgba(255, 215, 0, ${glowIntensity * 0.5})`; // Golden glow
                            
                            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                            card.style.boxShadow = `0 0 ${20 + glowIntensity * 30}px ${glowColor}`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                            e.currentTarget.style.boxShadow = '';
                        }}
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