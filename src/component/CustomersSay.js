import React from 'react';
import { FaStar } from 'react-icons/fa';

const CustomersSay = () => {
    const reviews = [
        {
            name: "Sarah M.",
            image: "https://randomuser.me/api/portraits/women/1.jpg",
            rating: 5,
            quote: "Little Lemon offers the most authentic Mediterranean cuisine I've ever tasted!"
        },
        {
            name: "Maria G.",
            image: "https://randomuser.me/api/portraits/women/3.jpg",
            rating: 4,
            quote: "Great service and amazing food. The lemon dessert is a must-try!"
        },
        {
            name: "Robert P.",
            image: "https://randomuser.me/api/portraits/men/4.jpg",
            rating: 5,
            quote: "Perfect spot for family dinner. The Greek salad is fresh and authentic."
        }
    ];

   

    const renderStars = (rating) => {
        return [...Array(rating)].map((_, index) => (
            <FaStar key={index} className="star-icon" />
        ));
    };

    return (
       <section className="py-16 px-4 bg-gray-100 w-full">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What our customers say!</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
             {reviews.map((review, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center min-h-[280px] w-full max-w-[350px] mx-auto">
                    <img src={review.image} alt={review.name} className="w-16 sm:w-20 h-16 sm:h-20 rounded-full mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{review.name}</h3>
                    <div className="flex text-yellow-400 mb-2 sm:mb-3">
                       {renderStars(review.rating)}
                    </div>
                    <p className="text-gray-600 text-center text-sm sm:text-base italic">{review.quote}</p>
                </div>
             ))}
          </div>
       </section>
    );
};

export default CustomersSay;