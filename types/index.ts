// src/types/index.ts
export interface FoodItem {
    id: number;
    
    name: string;
    price: number; // Price in PKR
    description: string;
    images: string[];
    category: string;
  }
  
  export interface CartItem extends FoodItem {
    quantity: number;
  }
  
  export interface Category {
    id: number;
    name: string;
  }