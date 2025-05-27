import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

function Chicago() {
    return (
        <div className="container mx-auto px-4 py-8 w-full sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 w-[90%] mx-auto">
                <div className="w-full md:w-1/2 space-y-3 md:space-y-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Little Lemon Chicago</h1>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        Little Lemon Chicago is a family owned Mediterranean restaurant located in the heart 
                        of the city. The restaurant is run by brothers Mario and Adrian, who have always 
                        had a passion for cooking and serving delicious food. Growing up in a Mediterranean 
                        household, the brothers were exposed to traditional recipes from an early age, and 
                        they decided to bring those recipes to the masses with a modern twist. At Little 
                        Lemon, you can expect to find a menu full of classic dishes with a creative twist 
                        that makes them stand out from the rest. Whether you're looking for a quick lunch 
                        or a leisurely dinner, Little Lemon Chicago is the perfect place to indulge in a 
                        delicious meal in a cozy and welcoming atmosphere.
                    </p>
                </div>
                <div className="w-full md:w-1/2 relative h-96">
                    <LazyLoadImage
                        src="./lemondessert.jpeg"
                        alt="Restaurant interior 1"
                        effect="opacity"
                        className="absolute top-0 left-0 w-3/5 h-[90%] object-cover rounded-lg shadow-md transform transition-all duration-500 hover:scale-110 hover:z-20"
                    />
                    <LazyLoadImage
                        src="./greek_salad.jpg"
                        alt="Restaurant interior 2"
                        effect="opacity"
                        className="absolute bottom-0 right-0 w-3/5 h-[90%] object-cover rounded-lg shadow-md transform transition-all duration-500 hover:scale-110 hover:z-20"
                    />
                </div>
            </div>
        </div>
    );
}

export default Chicago;