import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Brand */}
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-secondary">Promises Fulfilled</h3>
                    <p className="text-gray-300 mb-4">
                        Nursery and Primary School, Igoba. <br/>
                        Nurturing the leaders of tomorrow with excellence and godliness.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 inline-block pb-1">Quick Links</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="/" className="hover:text-secondary transition">Home</a></li>
                        <li><a href="/about" className="hover:text-secondary transition">About Us</a></li>
                        <li><a href="/admissions" className="hover:text-secondary transition">Admissions</a></li>
                        <li><a href="/portal" className="hover:text-secondary transition">Student Portal</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 inline-block pb-1">Contact Us</h4>
                    <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-2">
                            <MapPin size={20} className="text-secondary shrink-0" />
                            <span>Igoba, Akure North, Ondo State, Nigeria.</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone size={20} className="text-secondary" />
                            <span>+234 800 123 4567</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={20} className="text-secondary" />
                            <span>info@promisesfulfilled.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-blue-800 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Promises Fulfilled Nursery & Primary School. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;