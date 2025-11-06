import React from "react";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } =
    useCart();

  // Empty cart state
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <ShoppingCart className="w-32 h-32 text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-gray-600 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-500">Add some products to get started!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">🛒 Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Clear Cart
          </button>
        </div>

        {/* Cart Items */}
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4"
            >
              {/* Product Image */}
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />

              {/* Product Info */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.title}
                </h3>
                <p className="text-green-600 font-semibold">${item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  <Minus className="w-4 h-4" />
                </button>

                <span className="font-semibold text-lg w-8 text-center">
                  {item.quantity}
                </span>

                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  <Plus className="w-4 h-4" />
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition ml-4"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              {/* Item Subtotal */}
              <div className="text-right min-w-24">
                <p className="text-gray-600 text-sm">Subtotal</p>
                <p className="font-bold text-lg text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Total & Checkout */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center text-2xl font-bold text-gray-800">
            <span>Total:</span>
            <span className="text-green-600">${cartTotal.toFixed(2)}</span>
          </div>
          <button className="w-full mt-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold text-lg">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
