import React from 'react'; // You'll need to create this CSS file
import { Link } from 'react-router-dom';
const Nav = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="main-nav p-4 bg-white/80 backdrop-blur-md shadow-md">
            {/* Hamburger menu for small/medium screens */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-600 hover:text-yellow-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
                
                {/* Mobile menu */}
                {isOpen && (
                    <ul className="absolute left-0 right-0 mt-2 p-4 bg-white/90 backdrop-blur-md shadow-lg space-y-2">
                        <li><Link to="/" className="block hover:text-yellow-500 transition-colors">Home</Link></li>
                        <li><Link to="/bookings" className="block hover:text-yellow-500 transition-colors">Bookings</Link></li>
                        <li><Link to="/specials" className="block hover:text-yellow-500 transition-colors">Specials</Link></li>
                        <li><Link to="/reservations" className="block hover:text-yellow-500 transition-colors">Reservations</Link></li>
                        <li><Link to="/order-online" className="block hover:text-yellow-500 transition-colors">Order Online</Link></li>
                        <li><Link to="/login" className="block hover:text-yellow-500 transition-colors">Login</Link></li>
                    </ul>
                )}
            </div>

            {/* Desktop menu */}
            <ul className="hidden md:flex flex-wrap justify-center space-x-8">
                <li><Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link></li>
                <li><Link to="/bookings" className="hover:text-yellow-500 transition-colors">Bookings</Link></li>
                <li><Link to="/specials" className="hover:text-yellow-500 transition-colors">Specials</Link></li>
                <li><Link to="/reservations" className="hover:text-yellow-500 transition-colors">Reservations</Link></li>
                <li><Link to="/order-online" className="hover:text-yellow-500 transition-colors">Order Online</Link></li>
                <li><Link to="/login" className="hover:text-yellow-500 transition-colors">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;