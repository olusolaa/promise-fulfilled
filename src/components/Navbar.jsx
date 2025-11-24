import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-full text-white">
                  <GraduationCap size={28} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-primary leading-tight">Promises Fulfilled</span>
                  <span className="text-xs text-gray-500 font-semibold tracking-wider">IGOBA</span>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-primary font-medium transition">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary font-medium transition">About Us</Link>
              <Link to="/admissions" className="text-gray-700 hover:text-primary font-medium transition">Admissions</Link>
              <Link to="/contact" className="bg-secondary text-white px-5 py-2 rounded-full font-medium hover:bg-yellow-600 transition shadow-lg hover:shadow-xl">
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="md:hidden bg-white border-t"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Home</Link>
                <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">About Us</Link>
                <Link to="/admissions" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Admissions</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-primary font-bold">Contact Us</Link>
              </div>
            </motion.div>
        )}
      </nav>
  );
};

export default Navbar;