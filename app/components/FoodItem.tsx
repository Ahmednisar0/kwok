// src/app/components/FoodItem.tsx
'use client';

import { FoodItem as FoodItemType } from '@/types';
import Image from 'next/image';
import { useState } from 'react';
import { FaPlus, FaEye, FaFire, FaLeaf } from 'react-icons/fa';

interface FoodItemProps {
  item: FoodItemType;
  onSelect: (item: FoodItemType) => void;
  onAddToCart: (item: FoodItemType) => void;
}

export default function FoodItem({ item, onSelect, onAddToCart }: FoodItemProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Define which items should show discount badges
  const getDiscountInfo = () => {
    // Beef items with discount (IDs 1 se 150 tak)
    const beefDiscountItems = Array.from({ length: 150 }, (_, i) => i + 1);

    // Fries items with discount (specific IDs)
    const friesDiscountItems = [90, 91, 92, 93, 94, 95, 96, 97];

    if (beefDiscountItems.includes(item.id)) {
      return { text: "15% OFF", bgColor: "bg-red-600", icon: <FaFire className="inline mr-1" /> };
    }

    if (friesDiscountItems.includes(item.id)) {
      return { text: "10% OFF", bgColor: "bg-green-600", icon: <FaLeaf className="inline mr-1" /> };
    }

    return null;
  };

  const discountInfo = getDiscountInfo();

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
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-amber-300 relative group"
      onClick={() => onSelect(item)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Discount ribbon for specific items */}
      {discountInfo && (
        <div className={`absolute top-3 left-3 ${discountInfo.bgColor} text-white text-xs font-bold px-2 py-1 rounded-full z-10 flex items-center`}>
          {discountInfo.icon}
          {discountInfo.text}
        </div>
      )}

      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={item.images[0]}
          alt={item.name}
          fill
          className={`object-cover transition-all duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'} group-hover:scale-105`}
          onLoad={() => setImageLoaded(true)}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />

        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-orange-50 animate-pulse"></div>
        )}

        {/* Price badge */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm border border-amber-100">
          <span className="text-amber-700 font-bold text-sm">Rs. {item.price}</span>
        </div>

        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} p-4`}>
          <span className="text-white font-medium bg-amber-600/90 px-4 py-2 rounded-full flex items-center">
            <FaEye className="mr-2" />
            View Details
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-800 mb-1 text-lg truncate">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 h-10">{item.description}</p>

        <div className="flex justify-between items-center">
          <div className="flex items-center text-amber-600">
            <div className="w-2 h-2 bg-amber-500 rounded-full mr-1"></div>
            <span className="text-xs font-medium">Available</span>
          </div>

          <button
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center shadow-md hover:shadow-lg"
            onClick={handleAddToCart}
          >
            <FaPlus className="mr-2 text-xs" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
