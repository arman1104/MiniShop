// import React from "react";
// import { useCart } from "../context/CartContext"; // ← Import useCart

// const ProductCard = ({ product }) => {
//   const { addToCart } = useCart(); // ← Get addToCart function

//   const handleAddToCart = () => {
//     addToCart(product);
//     console.log("✅ Added to cart:", product.title);
//   };

//   return (
//     <div className="bg-white w-64 shadow-md border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
//       <h2 className="text-lg font-semibold text-gray-800 text-center line-clamp-1">
//         {product.title}
//       </h2>
//       <img
//         src={product.images[0]}
//         alt={product.title}
//         className="w-28 h-28 object-contain mb-3 mt-3"
//       />
//       <p className="text-gray-600 text-sm text-center line-clamp-1">
//         {product.description}
//       </p>
//       <p className="mt-2 text-md font-semi-bold text-green-500 bg-gray-200 rounded-lg px-2">
//         ${product.price}
//       </p>
//       <button
//         onClick={handleAddToCart} // ← Add click handler
//         className="mt-3 px-3 py-[6px] bg-blue-400 text-white rounded-lg hover:bg-blue-600 transition"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductCard;

import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, cart } = useCart();

  // Check if product is already in cart
  const itemInCart = cart.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-white w-full sm:w-64 shadow-md border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <h2 className="text-lg font-semibold text-gray-800 text-center line-clamp-1">
        {product.brand}
      </h2>
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-56 h-36 sm:w-36 sm:h-28 object-contain mb-3 mt-3"
      />
      <p className="text-gray-600 text-sm text-center line-clamp-2 ">
        {product.title}
      </p>
      {/* <p className="text-gray-600 text-sm text-center line-clamp-2 ">
        {product.description}
      </p> */}
      <p className="mt-2 text-md font-semi-bold text-black">${product.price}</p>

      <button
        onClick={handleAddToCart}
        className="mt-3 px-3 py-[6px] bg-blue-400 text-white rounded-lg hover:bg-blue-600 transition"
      >
        {itemInCart ? `In Cart (${itemInCart.quantity})` : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
