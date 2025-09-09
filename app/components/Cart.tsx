"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CartItem } from "@/types";

interface CartProps {
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void; // updated to update parent state
  onClose: () => void;
}

export default function Cart({ cartItems, setCartItems, onClose }: CartProps) {
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const onUpdateQuantity = (itemId: number, quantity: number) => {
    if (quantity < 1) return; // don't allow less than 1
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
  };

  const onRemoveItem = (itemId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50">
      <div className="w-full sm:w-96 bg-white h-full p-6 shadow-xl overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            ✕
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty 🛒</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="mb-4 flex justify-between items-center border-b pb-3"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    Rs. {item.price} × {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="ml-2 text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-6 flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>Rs. {totalPrice.toFixed(2)}</span>
            </div>

            <Link href="/checkout" className="mt-6 block">
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold">
                Checkout
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
