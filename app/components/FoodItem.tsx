// src/app/components/FoodItem.tsx
'use client';

import { FoodItem as FoodItemType } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

interface FoodItemProps {
  item: FoodItemType;
  onSelect: (item: FoodItemType) => void;
  onAddToCart: (item: FoodItemType) => void;
}

export default function FoodItem({ item, onSelect, onAddToCart }: FoodItemProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(item);
    
    // Add a subtle animation feedback
    const button = e.currentTarget;
    button.classList.add('animate-pulse');
    setTimeout(() => button.classList.remove('animate-pulse'), 300);
  };

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-amber-200"
      onClick={() => onSelect(item)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 w-full">
        <Image
          src={item.images[0]}
          alt={item.name}
          fill
          className={`object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-amber-50 animate-pulse"></div>
        )}
        
        {/* Price badge */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
          <span className="text-amber-700 font-semibold text-sm">Rs. {item.price}</span>
        </div>
        
        {/* Popular badge */}
       
       
        
        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-black flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'bg-opacity-20 opacity-100' : 'opacity-0'}`}>
          <span className="text-white font-bold bg-amber-600/90 px-4 py-2 rounded-full">
            View Details
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-1 text-lg">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 h-10">{item.description}</p>
        
        <div className="flex justify-end">
          <button 
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center"
            onClick={handleAddToCart}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 mr-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}