import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Star, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
      <div className="overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-[90vh] bg-gray-900 flex items-center justify-center text-center px-4">
          {/* Background Image - African Students */}
          <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: "url('https://images.pexels.com/photos/8926552/pexels-photo-8926552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
          ></div>

          <div className="relative z-10 max-w-5xl mx-auto text-white">
            <motion.div
                initial="hidden" whileInView="visible" variants={fadeIn} transition={{ duration: 0.5 }}
                className="bg-secondary/20 inline-block px-4 py-1 rounded-full mb-4 backdrop-blur-sm border border-secondary/30"
            >
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">Welcome to Igoba's Center of Excellence</span>
            </motion.div>

            <motion.h1
                initial="hidden" whileInView="visible" variants={fadeIn} transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Raising Leaders with <br/> <span className="text-secondary">Character & Knowledge</span>
            </motion.h1>

            <motion.p
                initial="hidden" whileInView="visible" variants={fadeIn} transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
            >
              Promises Fulfilled Nursery & Primary School provides a solid Christian and academic foundation for your child's future.
            </motion.p>

            <motion.div
                initial="hidden" whileInView="visible" variants={fadeIn} transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/admissions" className="px-8 py-4 bg-secondary text-white rounded-full font-bold text-lg hover:bg-yellow-600 transition transform hover:scale-105 shadow-lg">
                Enroll Your Child
              </Link>
              <Link to="/about" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-primary transition flex items-center justify-center gap-2">
                About Us <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-24 bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Parents Trust Us</h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard icon={<BookOpen size={32}/>} title="Academic Excellence" desc="A blend of Nigerian and Montessori curriculums for total development." />
              <FeatureCard icon={<Users size={32}/>} title="God-Fearing Staff" desc="Qualified educators who are passionate about child development." />
              <FeatureCard icon={<Star size={32}/>} title="Modern Facilities" desc="Conducive classrooms, ICT labs, and safe play areas." />
              <FeatureCard icon={<Heart size={32}/>} title="Moral Upbringing" desc="We prioritize discipline, integrity, and fear of God." />
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-tl-3xl -z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-br-3xl -z-0"></div>

              {/* NEW IMAGE: Happy African students in a clean classroom */}
              <img
                  src="https://images.pexels.com/photos/8923959/pexels-photo-8923959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Happy African students learning"
                  className="relative z-10 rounded-xl shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
            <div className="md:w-1/2">
              <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">Who We Are</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Nurturing the Next Generation</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At Promises Fulfilled, we believe every child is a unique project in the hands of God. Located in the serene environment of Igoba, we offer a distraction-free zone for learning.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                From Creche to Primary 6, our pupils are groomed to stand out in academics and character. Join our growing family today.
              </p>
              <Link to="/about" className="text-white bg-primary px-6 py-3 rounded-lg font-bold hover:bg-blue-900 transition inline-flex items-center gap-2">
                Read Principal's Message <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-secondary transition-all"
    >
      <div className="text-primary mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto md:mx-0">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center md:text-left">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-center md:text-left">{desc}</p>
    </motion.div>
);

export default Home;