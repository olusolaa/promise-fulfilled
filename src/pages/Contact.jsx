import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
      <div className="pt-10 pb-20">
        <div className="bg-primary py-16 mb-12">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100">We'd love to hear from you</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Whether you want to enroll your child or ask a question, our administrative office is always open to attend to you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Visit Us</h3>
                  <p className="text-gray-600">Promises Fulfilled Nursery & Primary School,<br/>Igoba, Akure North, Ondo State.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Call Us</h3>
                  <p className="text-gray-600">+234 800 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Email Us</h3>
                  <p className="text-gray-600">enquiries@promisesfulfilled.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none" placeholder="Phone Number" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition flex items-center justify-center gap-2">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Contact;