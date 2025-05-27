import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <section className="py-8 md:py-12 px-4 bg-[#4a5e57] w-full relative overflow-visible mt-16">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
                <div className="text-center md:text-left px-4 md:px-0">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Little Lemon</h1>
                    <h2 className="text-xl md:text-2xl text-white mb-4 md:mb-6">Chicago</h2>
                    <p className="text-base md:text-lg text-white mb-4">
                        We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <Link 
                        to="/reservations"
                        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 md:py-3 px-6 md:px-8 rounded-full transition-colors duration-200 text-sm md:text-base"
                    >
                        Reserve a Table
                    </Link>
                </div>
                <div className="perspective-1000 relative" style={{ zIndex: 10, transform: 'translateY(25%)' }}>
                    <img 
                        src="/littlelemon_homepage.jpg" 
                        alt="Little Lemon Restaurant" 
                        className="w-full md:w-[80%] h-[250px] md:h-[400px] mx-auto object-cover rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:rotate-y-12 hover:rotate-x-12 cursor-pointer"
                        onMouseMove={(e) => {
                            const card = e.currentTarget;
                            const box = card.getBoundingClientRect();
                            const x = e.clientX - box.left;
                            const y = e.clientY - box.top;
                            const centerX = box.width / 2;
                            const centerY = box.height / 2;
                            const cursorX = x;
                            const cursorY = y;
                            
                            card.style.background = `radial-gradient(circle 20px at ${cursorX}px ${cursorY}px, rgba(255, 215, 0, 0.3), transparent)`;
                            const rotateX = (y - centerY) / 10;
                            const rotateY = -(x - centerX) / 10;
                            
                            const distanceX = Math.min(x, box.width - x);
                            const distanceY = Math.min(y, box.height - y);
                            const distance = Math.min(distanceX, distanceY);
                            
                            const glowIntensity = Math.max(0, 50 - distance) / 50;
                            const glowColor = `rgba(255, 215, 0, ${glowIntensity * 0.5})`;
                            
                            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                            card.style.boxShadow = `0 0 ${20 + glowIntensity * 30}px ${glowColor}`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                            e.currentTarget.style.boxShadow = '';
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default HomePage;