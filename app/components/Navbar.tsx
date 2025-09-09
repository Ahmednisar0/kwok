// src/app/components/Navbar.tsx
'use client';

import { Category } from '@/types';
import { useState, useEffect } from 'react';

interface NavbarProps {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  cartItemsCount: number;
  setShowCart: (show: boolean) => void;
}

export default function Navbar({ 
  categories, 
  activeCategory, 
  setActiveCategory,
  cartItemsCount,
  setShowCart
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`bg-gradient-to-r from-amber-900 to-amber-700 sticky top-0 z-50 shadow-lg transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-lg'}`}>
      {/* Curved bottom edge */}
      <div className="absolute -bottom-4 left-0 w-full h-5 bg-amber-700 rounded-tl-full rounded-tr-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo and brand name */}
          <div className="flex items-center space-x-2">
            <div className="relative w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-105">
              <div className="text-amber-900 font-bold text-lg">K&F</div>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-white">
              <span className="text-amber-300">Kkwok</span> 
              <span className="text-white"> & </span>
              <span className="text-amber-100">Fries</span>
            </h1>
          </div>
          
          {/* Desktop categories */}
          <div className="hidden md:flex space-x-1 bg-amber-800/30 backdrop-blur-sm rounded-full p-1 border border-amber-600/30">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.name
                    ? 'bg-amber-500 text-amber-900 shadow-md transform scale-105'
                    : 'text-amber-100 hover:bg-amber-700/50 hover:text-white'
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Right section with cart and mobile menu button */}
          <div className="flex items-center space-x-4">
            {/* Cart button */}
            <button 
              className="relative p-3 bg-amber-500/20 hover:bg-amber-500/30 rounded-full transition-all duration-300 group"
              onClick={() => setShowCart(true)}
              aria-label="Shopping cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-100 group-hover:text-white transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-amber-900 font-bold rounded-full text-xs w-5 h-5 flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md text-amber-100 hover:bg-amber-700 focus:outline-none transition-colors duration-300"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6 transition-transform duration-300 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 py-3' : 'max-h-0 py-0'}`}>
          <div className="flex flex-col space-y-2 px-1 bg-amber-800/90 backdrop-blur-sm rounded-lg p-2 border border-amber-600/30">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-3 rounded-lg text-left transition-all duration-300 transform ${
                  activeCategory === category.name
                    ? 'bg-amber-500 text-amber-900 shadow-md scale-[1.02]'
                    : 'text-amber-100 hover:bg-amber-700 hover:translate-x-1'
                }`}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile categories carousel (visible when menu is closed) */}
        <div className={`md:hidden pb-4 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0 max-h-0 overflow-hidden' : 'opacity-100 max-h-20'}`}>
          <div className="absolute -bottom-2 left-0 w-full h-3 bg-amber-700 rounded-tl-full rounded-tr-full"></div>
          <div className="flex space-x-2 overflow-x-auto py-3 px-1 hide-scrollbar">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                  activeCategory === category.name
                    ? 'bg-amber-500 text-amber-900 shadow-md transform scale-105'
                    : 'bg-amber-800/40 text-amber-100 hover:bg-amber-700'
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </nav>
  );
}