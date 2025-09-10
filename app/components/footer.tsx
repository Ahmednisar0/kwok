"use client";

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-900 to-amber-700 text-white relative mt-16">
      {/* Curved top section */}
      <div className="absolute -top-6 left-0 w-full h-12 bg-amber-50 rounded-tl-[60%] rounded-tr-[60%]"></div>
      
      <div className="container mx-auto px-4 pt-10 pb-8">
        {/* Website name with styling */}
        <h2 className="text-center text-3xl font-bold mb-8">
          <span className="text-amber-300 drop-shadow-md">Kkwok</span>
          <span className="text-white"> & </span>
          <span className="text-amber-100 drop-shadow-md">Fries</span>
        </h2>

        {/* Social media icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="bg-amber-600 hover:bg-amber-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
            <FaFacebookF className="text-white text-lg" />
          </a>
          <a href="#" className="bg-amber-600 hover:bg-amber-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
            <FaInstagram className="text-white text-lg" />
          </a>
          <a href="#" className="bg-amber-600 hover:bg-amber-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
            <FaTwitter className="text-white text-lg" />
          </a>
        </div>

        {/* Contact info with icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-amber-600/30 p-3 rounded-full mb-2">
              <FaMapMarkerAlt className="text-amber-200 text-xl" />
            </div>
            <p className="text-amber-100 font-medium">Location</p>
            <p className="text-amber-200 text-sm mt-1">Shop 3 farooq market opposite street 4 G 13 /3</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-amber-600/30 p-3 rounded-full mb-2">
              <FaPhone className="text-amber-200 text-xl" />
            </div>
            <p className="text-amber-100 font-medium">Phone</p>
            <p className="text-amber-200 text-sm mt-1">+92 346 3323775</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-amber-600/30 p-3 rounded-full mb-2">
              <FaEnvelope className="text-amber-200 text-xl" />
            </div>
            <p className="text-amber-100 font-medium">Email</p>
            <p className="text-amber-200 text-sm mt-1">support@kkwokfries.com</p>
          </div>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {['Home', 'Menu', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-amber-200 hover:text-white transition-colors duration-300 font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-6 text-center text-xs text-amber-300 border-t border-amber-600/40 pt-4">
          © {new Date().getFullYear()} Kkwok & Fries. All rights reserved.
        </div>
      </div>
    </footer>
  );
}