// src/app/cart/page.tsx
'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cartItems, updateQuantity, removeItem, totalPrice, clearCart } = useCart();

  return (
    <div className="min-h-screen bg-amber-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <div className="flex items-center space-x-2 justify-center">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-amber-900 font-bold text-lg">K&F</span>
              </div>
              <h1 className="text-2xl font-bold">
                <span className="text-amber-600">Kkwok</span> 
                <span className="text-gray-800"> & </span>
                <span className="text-amber-500">Fries</span>
              </h1>
            </div>
          </Link>
          <h2 className="text-3xl font-bold text-gray-800">Your Cart</h2>
          <p className="text-gray-600">Review your order</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-amber-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">Add some delicious items to get started!</p>
              <Link 
                href="/"
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Browse Menu
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-amber-50 rounded-xl">
                    <div className="flex items-center flex-1">
                      <div 
                        className="h-16 w-16 bg-cover bg-center rounded-lg mr-4 shadow-md"
                        style={{ backgroundImage: `url(${item.images[0]})` }}
                      ></div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-amber-600 font-medium">Rs. {item.price}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center bg-amber-100 rounded-lg">
                        <button 
                          className="h-8 w-8 flex items-center justify-center text-amber-900 hover:bg-amber-200 rounded-l-lg transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        
                        <span className="h-8 w-10 flex items-center justify-center bg-white text-gray-900 font-medium">
                          {item.quantity}
                        </span>
                        
                        <button 
                          className="h-8 w-8 flex items-center justify-center text-amber-900 hover:bg-amber-200 rounded-r-lg transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                      </div>
                      
                      {/* Remove Button */}
                      <button 
                        className="h-8 w-8 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        onClick={() => removeItem(item.id)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Total and Actions */}
              <div className="border-t border-amber-200 pt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-semibold text-gray-700">Total:</span>
                  <span className="text-2xl font-bold text-amber-600">Rs. {totalPrice.toFixed(2)}</span>
                </div>
                
                <div className="flex space-x-4">
                  <button 
                    onClick={clearCart}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    Clear Cart
                  </button>
                  <Link 
                    href="/checkout"
                    className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-medium text-center transition-colors"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
                
                <Link 
                  href="/"
                  className="block text-center text-amber-600 hover:text-amber-700 mt-4 font-medium transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}