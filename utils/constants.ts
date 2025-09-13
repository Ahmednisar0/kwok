// src/utils/constants.ts
import { Category, FoodItem } from '@/types';

export const categories: Category[] = [
  { id: 1, name: 'Starters' },
  { id: 2, name: 'Soups' },
  { id: 3, name: 'Beef Items' },
  { id: 4, name: 'Chicken Items' },
  { id: 5, name: 'Rice' },
  { id: 6, name: 'Noodles' },
  { id: 7, name: 'Fries' },
];

export const foodItems: FoodItem[] = [
  { id: 1, name: 'Dynamite Prawns', price: 1099, description: 'Crispy prawns tossed in creamy dynamite sauce', images: ['/starter/1.jpg'], category: 'Starters' },
  { id: 2, name: 'Dynamite Chicken', price: 999, description: 'Crispy chicken bites with creamy dynamite sauce', images: ['/starter/2.jpg'], category: 'Starters' },
  { id: 3, name: "KK's Special Boneless Strips (6 pcs)", price: 899, description: 'Crispy boneless chicken strips with house special seasoning', images: ['/starter/3.jpg'], category: 'Starters' },
  { id: 4, name: 'Spicy Korean Wings (6 pcs)', price: 799, description: 'Korean-style spicy chicken wings', images: ['/starter/4.jpg'], category: 'Starters' },
  { id: 5, name: 'Spicy Korean Wings (8 pcs)', price: 999, description: 'Korean-style spicy chicken wings (8 pieces)', images: ['/starter/5.jpg'], category: 'Starters' },
  { id: 6, name: 'Honey Glazed Wings (6 pcs)', price: 699, description: 'Sweet and savory honey glazed wings', images: ['/starter/6.jpg'], category: 'Starters' },
  { id: 7, name: 'Honey Glazed Wings (8 pcs)', price: 899, description: 'Sweet and savory honey glazed wings (8 pieces)', images: ['/starter/7.jpg'], category: 'Starters' },
  { id: 8, name: 'Fish Crackers', price: 259, description: 'Crispy fried fish crackers', images: ['/starter/8.jpg'], category: 'Starters' },
  { id: 9, name: 'Chicken Spring Roll (4 pcs)', price: 499, description: 'Crispy chicken spring rolls (4 pieces)', images: ['/starter/9.jpg'], category: 'Starters' },
  { id: 10, name: 'Chicken Spring Roll (6 pcs)', price: 599, description: 'Crispy chicken spring rolls (6 pieces)', images: ['/starter/10.jpg'], category: 'Starters' },
  { id: 11, name: 'Vegetable Spring Roll (4 pcs)', price: 399, description: 'Crispy vegetable spring rolls (4 pieces)', images: ['/starter/11.jpg'], category: 'Starters' },
  { id: 12, name: 'Vegetable Spring Roll (6 pcs)', price: 499, description: 'Crispy vegetable spring rolls (6 pieces)', images: ['/starter/12.jpg'], category: 'Starters' },
  { id: 13, name: 'Chicken & Vegetable Dumpling with Chili Oil (6 pcs)', price: 599, description: 'Dumplings filled with chicken & veggies served with chili oil', images: ['/starter/13.jpg'], category: 'Starters' },
  { id: 14, name: 'Chicken & Vegetable Dumpling with Chili Oil (8 pcs)', price: 799, description: 'Dumplings filled with chicken & veggies with chili oil (8 pieces)', images: ['/starter/14.jpg'], category: 'Starters' },
  { id: 15, name: "KK's Special Chicken Chives Dumpling (6 pcs)", price: 799, description: 'Handmade dumplings filled with chicken and chives', images: ['/starter/15.jpg'], category: 'Starters' },
  { id: 16, name: "KK's Special Chicken Chives Dumpling (8 pcs)", price: 899, description: 'Handmade dumplings filled with chicken and chives (8 pieces)', images: ['/starter/16.jpg'], category: 'Starters' },
  { id: 17, name: 'Spicy Peanut Butter Dumpling (6 pcs)', price: 899, description: 'Unique spicy peanut butter dumplings', images: ['/starter/17.jpg'], category: 'Starters' },
  { id: 18, name: 'Spicy Peanut Butter Dumpling (8 pcs)', price: 999, description: 'Unique spicy peanut butter dumplings (8 pieces)', images: ['/starter/18.jpg'], category: 'Starters' },
  { id: 19, name: 'Korean Special Dumpling (6 pcs)', price: 799, description: 'Authentic Korean-style dumplings', images: ['/starter/19.jpg'], category: 'Starters' },
  { id: 20, name: 'Korean Special Dumpling (8 pcs)', price: 899, description: 'Authentic Korean-style dumplings (8 pieces)', images: ['/starter/20.jpg'], category: 'Starters' },
  { id: 21, name: 'Dumpling with Szechuan Sauce (6 pcs)', price: 799, description: 'Dumplings served with spicy Szechuan sauce', images: ['/starter/21.jpg'], category: 'Starters' },
  { id: 22, name: 'Dumpling with Szechuan Sauce (8 pcs)', price: 899, description: 'Dumplings with spicy Szechuan sauce (8 pieces)', images: ['/starter/22.jpg'], category: 'Starters' },
  { id: 23, name: 'Thai Sweet Chili Dumpling (6 pcs)', price: 799, description: 'Dumplings with Thai sweet chili flavor', images: ['/starter/23.jpg'], category: 'Starters' },
  { id: 24, name: 'Thai Sweet Chili Dumpling (8 pcs)', price: 899, description: 'Dumplings with Thai sweet chili sauce (8 pieces)', images: ['/starter/24.jpg'], category: 'Starters' },
// 🥣 Soups
{ id: 25, name: 'Thai Clear Soup (Single)', price: 549, description: 'Light and flavorful Thai clear soup (single serving)', images: ['/soups/1.jpg'], category: 'Soups' },
{ id: 26, name: 'Thai Clear Soup (Family)', price: 1099, description: 'Light and flavorful Thai clear soup (family serving)', images: ['/soups/2.jpg'], category: 'Soups' },
{ id: 27, name: 'Hot and Sour Soup (Single)', price: 399, description: 'Spicy and tangy hot and sour soup (single serving)', images: ['/soups/3.jpg'], category: 'Soups' },
{ id: 28, name: 'Hot and Sour Soup (Family)', price: 399, description: 'Spicy and tangy hot and sour soup (family serving)', images: ['/soups/4.jpg'], category: 'Soups' },
{ id: 29, name: 'Special B19 Soup (Single)', price: 549, description: 'Signature special B19 soup (single serving)', images: ['/soups/5.jpg'], category: 'Soups' },
{ id: 30, name: 'Special B19 Soup (Family)', price: 1049, description: 'Signature special B19 soup (family serving)', images: ['/soups/6.jpg'], category: 'Soups' },
{ id: 31, name: 'Chicken Corn Soup (Single)', price: 550, description: 'Classic chicken corn soup (single serving)', images: ['/soups/7.jpg'], category: 'Soups' },
{ id: 32, name: 'Chicken Corn Soup (Family)', price: 1050, description: 'Classic chicken corn soup (family serving)', images: ['/soups/8.jpg'], category: 'Soups' },
{ id: 33, name: 'Chicken Noodle Soup (Single)', price: 550, description: 'Comforting chicken noodle soup (single serving)', images: ['/soups/9.jpg'], category: 'Soups' },
{ id: 34, name: 'Chicken Noodle Soup (Family)', price: 999, description: 'Comforting chicken noodle soup (family serving)', images: ['/soups/10.jpg'], category: 'Soups' },
{ id: 35, name: 'Chicken Vegetable Soup (Single)', price: 399, description: 'Nutritious chicken vegetable soup (single serving)', images: ['/soups/11.jpg'], category: 'Soups' },
{ id: 36, name: 'Chicken Vegetable Soup (Family)', price: 999, description: 'Nutritious chicken vegetable soup (family serving)', images: ['/soups/12.jpg'], category: 'Soups' },

// 🍜 Noodles
{ id: 37, name: 'Chicken Chowmein (Medium)', price: 799, description: 'Stir-fried noodles with chicken and vegetables (medium)', images: ['/noodles/1.jpg'], category: 'Noodles' },
{ id: 38, name: 'Chicken Chowmein (Large)', price: 899, description: 'Stir-fried noodles with chicken and vegetables (large)', images: ['/noodles/2.jpg'], category: 'Noodles' },
{ id: 39, name: 'Vegetable Chowmein (Medium)', price: 699, description: 'Stir-fried noodles with mixed vegetables (medium)', images: ['/noodles/3.jpg'], category: 'Noodles' },
{ id: 40, name: 'Vegetable Chowmein (Large)', price: 799, description: 'Stir-fried noodles with mixed vegetables (large)', images: ['/noodles/4.jpg'], category: 'Noodles' },
{ id: 41, name: 'Spicy Peanut Butter Noodles', price: 899, description: 'Unique spicy peanut butter flavored noodles', images: ['/noodles/5.jpg'], category: 'Noodles' },
{ id: 42, name: 'Chicken Chilli Noodles', price: 899, description: 'Spicy noodles with chicken and chili flavor', images: ['/noodles/6.jpg'], category: 'Noodles' },
{ id: 43, name: 'Thai Sweet Chilli Noodles', price: 899, description: 'Thai-style sweet chili flavored noodles', images: ['/noodles/7.jpg'], category: 'Noodles' },
{ id: 44, name: 'Beef Chilli Noodles', price: 1099, description: 'Spicy stir-fried noodles with beef and chili flavor', images: ['/noodles/8.jpg'], category: 'Noodles' },
{ id: 45, name: 'Beef Chowmein', price: 1099, description: 'Stir-fried noodles with tender beef and vegetables', images: ['/noodles/9.jpg'], category: 'Noodles' },
{ id: 46, name: 'KK Special Dragon Noodles', price: 999, description: 'Signature house-special dragon style noodles', images: ['/noodles/10.jpg'], category: 'Noodles' },


// 🍚 Rice
// 🍚 Rice
{ id: 48, name: 'Egg Fried Rice (Medium)', price: 549, description: 'Classic egg fried rice (medium serving)', images: ['/rice/1.jpg'], category: 'Rice' },
{ id: 49, name: 'Egg Fried Rice (Large)', price: 699, description: 'Classic egg fried rice (large serving)', images: ['/rice/2.jpg'], category: 'Rice' },
{ id: 50, name: 'Vegetable Fried Rice (Medium)', price: 549, description: 'Fried rice with mixed vegetables (medium serving)', images: ['/rice/3.jpg'], category: 'Rice' },
{ id: 51, name: 'Vegetable Fried Rice (Large)', price: 699, description: 'Fried rice with mixed vegetables (large serving)', images: ['/rice/4.jpg'], category: 'Rice' },
{ id: 52, name: 'Masala Rice (Medium)', price: 599, description: 'Special masala flavored fried rice (medium)', images: ['/rice/5.jpg'], category: 'Rice' },
{ id: 53, name: 'Masala Rice (Large)', price: 749, description: 'Special masala flavored fried rice (large)', images: ['/rice/6.jpg'], category: 'Rice' },
{ id: 54, name: 'Steam Rice (Medium)', price: 449, description: 'Simple steamed rice (medium serving)', images: ['/rice/7.jpg'], category: 'Rice' },
{ id: 55, name: 'Steam Rice (Large)', price: 599, description: 'Simple steamed rice (large serving)', images: ['/rice/8.jpg'], category: 'Rice' },
{ id: 56, name: 'Chicken Fried Rice (Medium)', price: 699, description: 'Fried rice with chicken and vegetables (medium)', images: ['/rice/9.jpg'], category: 'Rice' },
{ id: 57, name: 'Chicken Fried Rice (Large)', price: 799, description: 'Fried rice with chicken and vegetables (large)', images: ['/rice/10.jpg'], category: 'Rice' },
{ id: 58, name: 'Garlic Fried Rice (Medium)', price: 549, description: 'Aromatic garlic flavored fried rice (medium)', images: ['/rice/11.jpg'], category: 'Rice' },
{ id: 59, name: 'Garlic Fried Rice (Large)', price: 699, description: 'Aromatic garlic flavored fried rice (large)', images: ['/rice/12.jpg'], category: 'Rice' },

// 🍗 Chicken Items
{ id: 60, name: 'Schezwan Chicken', price: 9999, description: 'Spicy and flavorful Schezwan-style chicken', images: ['/chicken/1.jpg'], category: 'Chicken Items' },
{ id: 61, name: 'Kampyo Chicken', price: 9999, description: 'House special Kampyo-style chicken', images: ['/chicken/2.jpg'], category: 'Chicken Items' },
{ id: 62, name: 'Korean Chicken', price: 9999, description: 'Authentic Korean-style chicken', images: ['/chicken/3.jpg'], category: 'Chicken Items' },
{ id: 63, name: 'Crispy Honey Crunch Chicken', price: 9999, description: 'Crispy chicken coated in sweet honey sauce', images: ['/chicken/4.jpg'], category: 'Chicken Items' },
{ id: 64, name: 'Sweet & Sour Chicken', price: 9999, description: 'Classic sweet and sour flavored chicken', images: ['/chicken/5.jpg'], category: 'Chicken Items' },
{ id: 65, name: 'Chicken Manchurian', price: 9999, description: 'Chinese-style chicken in Manchurian sauce', images: ['/chicken/6.jpg'], category: 'Chicken Items' },
{ id: 66, name: 'Chicken Shashlik', price: 9999, description: 'Grilled chicken skewers served with sauce', images: ['/chicken/7.jpg'], category: 'Chicken Items' },
{ id: 67, name: 'Chicken Chili Dry', price: 9999, description: 'Spicy dry chicken with chili flavor', images: ['/chicken/8.jpg'], category: 'Chicken Items' },
{ id: 68, name: 'KK Special Chicken', price: 9999, description: 'Signature house special chicken', images: ['/chicken/9.jpg'], category: 'Chicken Items' },
{ id: 69, name: 'Thai Sweet Chili Chicken', price: 9999, description: 'Chicken tossed in Thai sweet chili sauce', images: ['/chicken/10.jpg'], category: 'Chicken Items' },
{ id: 70, name: 'Hot Garlic Chicken', price: 9999, description: 'Spicy hot garlic flavored chicken', images: ['/chicken/11.jpg'], category: 'Chicken Items' },
{ id: 71, name: 'Chicken in Black Pepper Sauce', price: 9999, description: 'Chicken cooked in rich black pepper sauce', images: ['/chicken/12.jpg'], category: 'Chicken Items' },
// 🥩 Beef Items
{ id: 80, name: 'Special KK Korean Beef', price: 1299, description: 'Signature Korean-style beef with rich flavors', images: ['/beef/1.jpg'], category: 'Beef Items' },
{ id: 81, name: 'Beef in Black Pepper Sauce', price: 1199, description: 'Beef cooked in spicy black pepper sauce', images: ['/beef/2.jpg'], category: 'Beef Items' },
{ id: 82, name: 'Honey Crunchy Beef', price: 1199, description: 'Crispy beef coated in sweet honey sauce', images: ['/beef/3.jpg'], category: 'Beef Items' },
{ id: 83, name: 'Beef Chilli Dry', price: 1199, description: 'Dry chili-flavored beef with a spicy kick', images: ['/beef/4.jpg'], category: 'Beef Items' },
{ id: 84, name: 'Special Savory Beef', price: 1199, description: 'House special savory beef with unique spices', images: ['/beef/5.jpg'], category: 'Beef Items' },

// 🍟 Chicken & Chips + Veggie Fries
// 🍟 Fries
{ id: 90, name: "Special Dynamite Chicken & Chips", price: 899, description: "Spicy dynamite chicken served with crispy fries", images: ["/fries/1.jpg"], category: "Fries" },
{ id: 91, name: "KK Spicy Korean Chicken & Chips", price: 899, description: "Spicy Korean-style chicken with fries", images: ["/fries/2.jpg"], category: "Fries" },
{ id: 92, name: "Honey Sesame Chicken & Chips", price: 899, description: "Crispy chicken with honey sesame flavor served with fries", images: ["/fries/3.jpg"], category: "Fries" },
{ id: 93, name: "Honey Crunchy Chicken & Chips", price: 899, description: "Crunchy chicken coated in honey sauce with fries", images: ["/fries/4.jpg"], category: "Fries" },
{ id: 94, name: "Garlic Chicken & Chips", price: 899, description: "Garlic flavored chicken with crispy fries", images: ["/fries/5.jpg"], category: "Fries" },
{ id: 95, name: "Mushroom Chicken & Chips", price: 899, description: "Chicken tossed with mushrooms served with fries", images: ["/fries/6.jpg"], category: "Fries" },
{ id: 96, name: "Thai Sweet Chilli Chicken & Chips", price: 899, description: "Chicken coated in Thai sweet chilli sauce with fries", images: ["/fries/7.jpg"], category: "Fries" },
{ id: 97, name: "Chilli Dry Chicken & Chips", price: 899, description: "Dry chilli-flavored chicken with crispy fries", images: ["/fries/8.jpg"], category: "Fries" },
{ id: 98, name: "Veggie Fries in Garlic Sauce", price: 499, description: "Crispy fries topped with garlic sauce and veggies", images: ["/fries/9.jpg"], category: "Fries" },
{ id: 99, name: "Veggie Fries in Chilli Dry Sauce", price: 499, description: "Veggie fries topped with spicy chilli dry sauce", images: ["/fries/10.jpg"], category: "Fries" },
{ id: 100, name: "Veggie Fries in Mushroom Sauce", price: 499, description: "Veggie fries topped with creamy mushroom sauce", images: ["/fries/11.jpg"], category: "Fries" },


];
