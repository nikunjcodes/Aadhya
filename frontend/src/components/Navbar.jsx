import { Link } from 'react-router-dom';
import { HomeIcon, ChatAlt2Icon, TicketIcon, InformationCircleIcon, PhoneIcon } from '@heroicons/react/outline';

const Navbar = () => {
  return (
    <nav className="bg-[#D2B48C] shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-white text-3xl font-extrabold hover:underline">AADHYA</Link>
        <div className="flex space-x-8">
          <Link to="/" className="text-white flex items-center space-x-2 hover:text-[#4B3D2D] transition duration-300">
            <HomeIcon className="w-6 h-6" /> <span className="font-medium">Home</span>
          </Link>
          <Link to="/chatbot" className="text-white flex items-center space-x-2 hover:text-[#4B3D2D] transition duration-300">
            <ChatAlt2Icon className="w-6 h-6" /> <span className="font-medium">Chatbot</span>
          </Link>
          <Link to="/bookings" className="text-white flex items-center space-x-2 hover:text-[#4B3D2D] transition duration-300">
            <TicketIcon className="w-6 h-6" /> <span className="font-medium">Bookings</span>
          </Link>
          <Link to="/about" className="text-white flex items-center space-x-2 hover:text-[#4B3D2D] transition duration-300">
            <InformationCircleIcon className="w-6 h-6" /> <span className="font-medium">About Us</span>
          </Link>
          <Link to="/contact" className="text-white flex items-center space-x-2 hover:text-[#4B3D2D] transition duration-300">
            <PhoneIcon className="w-6 h-6" /> <span className="font-medium">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
