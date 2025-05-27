import React from 'react';

function Footer() {
    return (
        <footer className="bg-[#edf0ef] text-[#4a5e57] py-4 sm:py-6 md:py-8 w-full mt-auto">
            <div className="container mx-auto px-4 w-full sm:w-[85%] md:w-[75%] lg:w-[65%]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-start">
                    <div className="flex items-center justify-center h-[150px] sm:h-[175px] md:h-[200px]">
                        <img src="./little_lemon_footer_logo.png" alt="Little Lemon restaurant logo featuring a bright yellow lemon design with modern typography" className="h-full w-auto" />
                    </div>
                    <div className="flex flex-col h-auto sm:h-[175px] md:h-[200px]">
                        <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">Navigation</h4>
                        <ul className="space-y-1 sm:space-y-2">
                            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
                            <li><a href="/about" className="hover:text-yellow-400">About</a></li>
                            <li><a href="/menu" className="hover:text-yellow-400">Menu</a></li>
                            <li><a href="/reservations" className="hover:text-yellow-400">Reservations</a></li>
                            <li><a href="/order" className="hover:text-yellow-400">Order Online</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col h-auto sm:h-[175px] md:h-[200px]">
                        <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">Contact</h4>
                        <ul className="space-y-1 sm:space-y-2">
                            <li>123 Restaurant St.</li>
                            <li>Chicago, IL 60601</li>
                            <li>(555) 123-4567</li>
                            <li>info@littlelemon.com</li>
                        </ul>
                    </div>
                    <div className="flex flex-col h-auto sm:h-[175px] md:h-[200px]">
                        <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">Social Media</h4>
                        <ul className="space-y-1 sm:space-y-2">
                            <li><a href="https://facebook.com" className="hover:text-yellow-400">Facebook</a></li>
                            <li><a href="https://instagram.com" className="hover:text-yellow-400">Instagram</a></li>
                            <li><a href="https://twitter.com" className="hover:text-yellow-400">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;