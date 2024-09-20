import { Link } from 'react-router-dom';
import { HomeIcon, ChatAlt2Icon, TicketIcon, InformationCircleIcon, PhoneIcon, UserIcon } from '@heroicons/react/outline';
import { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#D2B48C] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">AADHYA</Link>
        
        <div className="flex space-x-6">
          <Link to="/" className="text-white flex items-center space-x-1">
            <HomeIcon className="w-5 h-5" /> <span>Home</span>
          </Link>
          <Link to="/chatbot" className="text-white flex items-center space-x-1">
            <ChatAlt2Icon className="w-5 h-5" /> <span>Chatbot</span>
          </Link>
          <Link to="/bookings" className="text-white flex items-center space-x-1">
            <TicketIcon className="w-5 h-5" /> <span>Bookings</span>
          </Link>
          <Link to="/about" className="text-white flex items-center space-x-1">
            <InformationCircleIcon className="w-5 h-5" /> <span>About Us</span>
          </Link>
          <Link to="/contact" className="text-white flex items-center space-x-1">
            <PhoneIcon className="w-5 h-5" /> <span>Contact</span>
          </Link>
        </div>

        <div className="relative">
          <button onClick={toggleDropdown} className="text-white flex items-center space-x-2">
            <UserIcon className="w-6 h-6" />
            <span>Profile</span>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                View Profile
              </Link>
              <button
                onClick={() => console.log('Logout')}
                className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
