// context/CartContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { CartItem } from "@/types";

interface CartContextType {
  cartItems: CartItem[];
  totalPrice: number;
  addItem: (item: CartItem) => void;
  updateQuantity: (id: number, qty: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setCartItems((prev) => [...prev, item]);
  };

  const updateQuantity = (id: number, qty: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(qty, 1) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ cartItems, totalPrice, addItem, updateQuantity, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
