import React from 'react';
import { CheckCircle, Target, Eye } from 'lucide-react';

const About = () => {
  return (
      <div className="pb-20">
        {/* Header Section */}
        <div className="bg-primary pt-20 pb-32 relative overflow-hidden">
          {/* Decorative Overlay */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-10 -mb-10"></div>

          <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Our School</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">Building a legacy of excellence in Igoba since our inception.</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 -mt-24 relative z-20">
            <div className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-secondary">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-100 p-3 rounded-full text-secondary">
                  <Eye size={32} />
                </div>
                <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be a leading educational institution in Ondo State that produces God-fearing, intelligent, and creative future leaders who will positively impact their generation.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-primary">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-full text-primary">
                  <Target size={32} />
                </div>
                <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide a supportive environment that identifies and nurtures the unique potential of every child through quality education, moral discipline, and spiritual guidance.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* NEW IMAGE: Clean, focused African child learning */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Decorative dots pattern */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary rounded-2xl"></div>

                <img
                    src="https://images.pexels.com/photos/5063442/pexels-photo-5063442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Student learning with excellence"
                    className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover bg-white"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-primary mb-6">Welcome to Promises Fulfilled</h2>
              <p className="text-gray-600 mb-6 leading-loose text-lg">
                Promises Fulfilled Nursery and Primary School was established with a burden to bridge the gap between quality education and moral decadence in our society. Located in the heart of Igoba, Akure North, we have grown from a humble beginning to becoming a household name for academic excellence.
              </p>
              <p className="text-gray-600 mb-6 leading-loose text-lg">
                Our curriculum is designed to challenge students to think critically. We don't just teach them to pass exams; we teach them to succeed in life.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="text-secondary" size={20} /> <span>Godliness & Integrity</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="text-secondary" size={20} /> <span>Academic Excellence</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="text-secondary" size={20} /> <span>Discipline & Hardwork</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="text-secondary" size={20} /> <span>Creativity & Innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;