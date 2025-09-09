// src/app/page.tsx
'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FoodItem from './components/FoodItem';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import { FoodItem as FoodItemType, CartItem } from '@/types';
import { categories, foodItems } from '@/utils/constants';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('Starters');
  const [selectedProduct, setSelectedProduct] = useState<FoodItemType | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState<boolean>(false);

  const filteredItems = foodItems.filter(item => item.category === activeCategory);

  const addToCart = (item: FoodItemType) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(itemId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar 
        categories={categories} 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        cartItemsCount={getTotalItems()}
        setShowCart={setShowCart}
      />
      
      <HeroSection />
      
      <main className="container mx-auto px-4 py-12">
        {/* Category Title */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-amber-500 pl-4">
            {activeCategory}
          </h2>
          <div className="text-sm text-gray-100">
            {filteredItems.length} items
          </div>
        </div>
        
        {/* Food Items Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map(item => (
            <FoodItem 
              key={item.id} 
              item={item} 
              onSelect={setSelectedProduct}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-amber-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No items found</h3>
            <p className="text-gray-500">We're preparing more delicious options for this category.</p>
          </div>
        )}
      </main>

      {/* Floating Order Button for Mobile - Fixed position */}
      {cartItems.length > 0 && (
        <div className="md:hidden fixed bottom-4 right-4 left-4 z-40">
          <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-600">Total</div>
                <div className="font-bold text-lg">Rs{getTotalPrice().toFixed(2)}</div>
              </div>
              <button 
                onClick={() => setShowCart(true)}
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                View Cart ({getTotalItems()})
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      {showCart && (
        <Cart 
          cartItems={cartItems}
          setCartItems={setCartItems}
          onClose={() => setShowCart(false)}
        />
      )}
    </div>
  );
}