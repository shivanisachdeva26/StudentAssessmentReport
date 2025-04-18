import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md rounded-b-lg border-b-8 border-blue-600 mx-1 z-10 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/Title Section */}
          <div className="flex items-center mb-4 md:mb-0 w-full">
            <img
              src="https://www.prdrobotechsolutions.com/web/image/website/1/logo/prdrobotechsolutions?unique=9cca71a"
              alt="Logo"
              className="h-20 w-20"
            />
            <div className="w-full flex gap-4 items-center p-4">
              <Link className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                What We Do
              </Link>
              <Link className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Services
              </Link>
              <Link className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                AboutUs
              </Link>
            </div>
          </div>
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact us
            </Link>
            
             <FaLinkedinIn size={24} className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"/>
           
           
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
