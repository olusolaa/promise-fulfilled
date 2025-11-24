import React from 'react';
import { Download, Calendar, PhoneCall, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Admissions = () => {
    return (
        <div className="pb-20">
            {/* Hero */}
            <div className="relative h-[50vh] flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/8422207/pexels-photo-8422207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
                ></div>
                <div className="absolute inset-0 bg-primary/80"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Admissions</h1>
                    <p className="text-xl text-gray-200">Join the family of stars.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">

                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">How to Apply</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="text-center p-6 bg-blue-50 rounded-xl">
                            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Pick a Form</h3>
                            <p className="text-gray-600">Visit the school premises at Igoba to purchase an admission form for a token fee.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center p-6 bg-yellow-50 rounded-xl">
                            <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Entrance Assessment</h3>
                            <p className="text-gray-600">The child will undergo a simple assessment test to determine their class placement.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center p-6 bg-blue-50 rounded-xl">
                            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Admission</h3>
                            <p className="text-gray-600">Successful candidates are issued admission letters and a list of requirements.</p>
                        </div>
                    </div>

                    {/* Requirements Section */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-secondary pl-4">Admission Requirements</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <CheckSquare className="text-green-600" size={20}/> <span>Completed Application Form</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <CheckSquare className="text-green-600" size={20}/> <span>2 Recent Passport Photographs</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <CheckSquare className="text-green-600" size={20}/> <span>Birth Certificate (Photocopy)</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <CheckSquare className="text-green-600" size={20}/> <span>Last Result from previous school (if applicable)</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary text-white p-8 rounded-xl flex flex-col justify-center items-center text-center">
                            <Calendar size={48} className="mb-4 text-secondary" />
                            <h3 className="text-2xl font-bold mb-2">Admissions are Open!</h3>
                            <p className="mb-6 text-gray-200">For the 2024/2025 Academic Session.</p>
                            <Link to="/contact" className="bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition w-full md:w-auto">
                                Contact Us Now
                            </Link>
                        </div>
                    </div>

                </div>

                {/* CTA Strip */}
                <div className="mt-12 flex flex-col md:flex-row items-center justify-between bg-secondary p-8 rounded-2xl text-white shadow-lg">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <PhoneCall size={32} />
                        <div>
                            <h4 className="text-xl font-bold">Have Questions?</h4>
                            <p className="text-white/90">Our admission officers are ready to help.</p>
                        </div>
                    </div>
                    <div className="text-2xl font-bold">+234 800 123 4567</div>
                </div>

            </div>
        </div>
    );
};

export default Admissions;