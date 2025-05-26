import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ConfirmedBooking = () => {
    return (
        <div className="min-h-[500px] flex items-center justify-center bg-gray-100">
            <div className="flex flex-col items-center justify-center p-6 max-w-xl w-full mx-auto text-center">
                <FontAwesomeIcon 
                    icon={faCheckCircle} 
                    className="text-green-500 text-6xl mb-4"
                />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Booking Confirmed!
                </h2>
                <p className="text-gray-600 text-center max-w-md mb-8">
                    Thank you for choosing Little Lemon. Your reservation has been confirmed.
                    We look forward to serving you!
                </p>
                <button 
                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-[#EECD3E] transition-colors"
                    onClick={() => window.location.href = '/'}
                >
                    Return to Home
                </button>
            </div>
        </div>
    );
};

export default ConfirmedBooking;