"use client";
import { useEffect, useState } from "react";
import { CartItem } from "@/types";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty 🛒</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b py-3"
            >
              <span>
                {item.name} - {item.quantity} × Rs.{item.price}
              </span>
              <span>Rs. {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}

          <div className="mt-6 flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>Rs. {totalPrice.toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
}
