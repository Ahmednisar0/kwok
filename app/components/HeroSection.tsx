// src/app/components/HeroSection.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      image: '/cover/cover11111.png', // Replace with your actual image path
      title: 'Crispy Fries & Tender Kebabs',
      subtitle: 'The perfect combination of crunch and flavor delivered to your door',
    },
    {
      image: '/cover/cover11.png', // Replace with your actual image path
      title: 'Freshly Prepared Daily',
      subtitle: 'Made with premium ingredients and authentic recipes',
    },
    {
      image: '/cover/cover111.png', // Replace with your actual image path
      title: 'Satisfy Your Cravings',
      subtitle: 'Quick, delicious meals whenever hunger strikes',
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt="Kkwok & Fries hero background"
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="px-4 text-white max-w-4xl mx-auto">
          {/* Restaurant Name */}
          <div className="mb-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-light text-amber-300">Welcome to</h2>
            <h1 className="text-5xl md:text-7xl font-bold mt-2">
              <span className="text-amber-400">Kkwok</span> 
              <span className="text-white"> & </span>
              <span className="text-amber-200">Fries</span>
            </h1>
          </div>
          
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6 animate-grow-width"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            {heroSlides[currentSlide].title}
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-300">
            {heroSlides[currentSlide].subtitle}
          </p>
          
          <div className="animate-fade-in-up delay-500">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Order Now
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-amber-500 text-white p-3 rounded-full transition-all duration-300 hidden md:block"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-amber-500 text-white p-3 rounded-full transition-all duration-300 hidden md:block"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-amber-500 scale-125' : 'bg-white bg-opacity-50 hover:bg-amber-300'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes grow-width {
          from {
            width: 0;
          }
          to {
            width: 5rem;
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s forwards;
        }
        .animate-grow-width {
          animation: grow-width 1s forwards;
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;