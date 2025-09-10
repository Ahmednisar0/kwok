"use client";

import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import client from "../lib/sanity";

// ✅ Admin credentials (⚠️ replace with env variables in production)
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123",
};

// ✅ Sanity client

// ✅ Interfaces
interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface Customer {
  name: string;
  phone: string;
  address: string;
  instructions?: string;
}

interface Order {
  _id: string;
  customer: Customer;
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  createdAt: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ Handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      username === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid credentials");
    }
  };

  // ✅ Fetch orders after login
  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchOrders = async () => {
      try {
        const query = `*[_type == "order"] | order(_createdAt desc) {
          _id,
          customer,
          items,
          subtotal,
          deliveryFee,
          total,
          createdAt
        }`;
        const data = await client.fetch(query);
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [isAuthenticated]);

  // ✅ If not logged in, show login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-sm p-8 max-w-md w-full border border-gray-200">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center justify-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                🔒
              </span>
              Admin Login
            </h1>
            <p className="text-gray-500 mt-2">
              Please sign in to access orders
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ✅ Orders UI
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Orders</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-gray-500"></div>
        </div>
      ) : orders.length === 0 ? (
        <p className="text-gray-600">No orders found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100"
            >
              {/* Customer Info */}
              <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                <h2 className="font-semibold text-gray-800">
                  {order.customer.name}
                </h2>
                <p className="text-sm text-gray-500">
                  Order #{order._id.slice(-6).toUpperCase()}
                </p>
                <p className="text-sm text-gray-500">{order.customer.phone}</p>
                <p className="text-sm text-gray-500">{order.customer.address}</p>
                {order.customer.instructions && (
                  <p className="text-xs text-gray-400 italic">
                    {order.customer.instructions}
                  </p>
                )}
              </div>

              {/* Order Items */}
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-700 mb-4">
                  Order Items
                </h3>
                <ul className="divide-y divide-gray-200">
                  {order.items.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between py-2 text-sm"
                    >
                      <span>
                        {item.name} (x{item.quantity})
                      </span>
                      <span className="font-medium">Rs.{item.total}</span>
                    </li>
                  ))}
                </ul>

                {/* Price Summary */}
                <div className="mt-4 border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>Rs.{order.subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery Fee</span>
                    <span>Rs.{order.deliveryFee}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>Rs.{order.total}</span>
                  </div>
                </div>

                {/* Date */}
                <p className="mt-4 text-xs text-gray-400">
                  Placed on {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
