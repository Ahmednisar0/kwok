'use client';

import React from 'react';

interface FoodCategoryProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function FoodCategory({ categories, activeCategory, setActiveCategory }: FoodCategoryProps) {
  return (
    <div className="w-full overflow-x-auto py-4 scrollbar-hide">
      <div className="flex space-x-4 px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`whitespace-nowrap px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === category
                ? 'bg-yellow-500 text-black shadow-lg scale-105'
                : 'bg-gray-700 text-white hover:bg-gray-600 hover:scale-105'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
