"use client";

import { FoodItem } from '@/types';
import { useState } from 'react';

interface ProductDetailProps {
  product: FoodItem;
  onClose: () => void;
  onAddToCart: (product: FoodItem) => void;
}

export default function ProductDetail({ product, onClose, onAddToCart }: ProductDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const nextImage = () => {
    setCurrentImageIndex(prev =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    // ✅ Sirf modal close hoga
    onClose();
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 z-10 bg-amber-500 text-amber-900 rounded-full p-2 hover:bg-amber-600 transition-colors shadow-lg"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Image Gallery */}
        <div className="relative h-72 sm:h-80">
          <div 
            className="h-full w-full bg-cover bg-center rounded-t-2xl"
            style={{ backgroundImage: `url(${product.images[currentImageIndex]})` }}
          ></div>

          {product.images.length > 1 && (
            <>
              <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-amber-500 p-2 rounded-full">
                ◀
              </button>
              <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-amber-500 p-2 rounded-full">
                ▶
              </button>
            </>
          )}
        </div>

        {/* Product Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
            <span className="text-2xl font-bold text-amber-600">Rs. {product.price}</span>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

          {/* Quantity Selector */}
          <div className="mb-6 flex items-center gap-3 text-black">
            <button onClick={decreaseQuantity} className="w-10 h-10 bg-amber-200 rounded-full">-</button>
            <span className="text-xl font-bold text-black">{quantity}</span>
            <button onClick={increaseQuantity} className="w-10 h-10 bg-amber-200 rounded-full">+</button>
          </div>

          {/* ✅ Only Add to Cart button */}
          <button 
            className="w-full bg-amber-500 text-amber-900 font-bold py-4 px-6 rounded-xl hover:bg-amber-600 transition-all"
            onClick={handleAddToCart}
          >
            Add {quantity} to Cart - Rs. {(product.price * quantity).toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
}
