import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Nav = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo section - Responsive sizing */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <img 
                                src="/littlelemon_logo.png" 
                                alt="Little Lemon Logo"
                                className="h-8 w-auto sm:h-10 md:h-12"
                                loading="lazy"
                            />
                        </Link>
                    </div>

                    {/* Hamburger menu - Visible on small/medium screens */}
                    <div className="lg:hidden">
                        <button 
                            onClick={toggleMenu} 
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#495e57] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#495e57]"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg 
                                className="h-6 w-6" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop menu - Hidden on small screens */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-4 xl:space-x-8">
                        <Link to="/" className="px-3 py-2 text-sm sm:text-base text-[#495e57] hover:text-yellow-500 transition-colors">Home</Link>
                        <Link to="/bookings" className="px-3 py-2 text-sm sm:text-base text-[#495e57] hover:text-yellow-500 transition-colors">Bookings</Link>
                        <HashLink smooth to="/#specials" className="px-3 py-2 text-sm sm:text-base text-[#495e57] hover:text-yellow-500 transition-colors">Specials</HashLink>
                        <Link to="/reservations" className="px-3 py-2 text-sm sm:text-base text-[#495e57] hover:text-yellow-500 transition-colors">Reservations</Link>
                        <Link to="/order-online" className="px-3 py-2 text-sm sm:text-base text-[#495e57] hover:text-yellow-500 transition-colors">Order Online</Link>
                        <Link to="/login" className="px-3 py-2 text-sm sm:text-base text-[#495e57] hover:text-yellow-500 transition-colors">Login</Link>
                    </div>
                </div>

                {/* Mobile menu dropdown - Animated */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 mt-2 bg-white/90 backdrop-blur-md rounded-lg shadow-lg">
                        <Link to="/" className="block px-3 py-2 text-base text-[#495e57] hover:text-yellow-500 transition-colors">Home</Link>
                        <Link to="/bookings" className="block px-3 py-2 text-base text-[#495e57] hover:text-yellow-500 transition-colors">Bookings</Link>
                        <HashLink smooth to="/#specials" className="block px-3 py-2 text-base text-[#495e57] hover:text-yellow-500 transition-colors">Specials</HashLink>
                        <Link to="/reservations" className="block px-3 py-2 text-base text-[#495e57] hover:text-yellow-500 transition-colors">Reservations</Link>
                        <Link to="/order-online" className="block px-3 py-2 text-base text-[#495e57] hover:text-yellow-500 transition-colors">Order Online</Link>
                        <Link to="/login" className="block px-3 py-2 text-base text-[#495e57] hover:text-yellow-500 transition-colors">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;