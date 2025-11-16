// import React from "react";
// import { ShoppingCart, House, RefreshCw } from "lucide-react";
// import { NavLink } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import SearchBar from "./SearchBar";

// const Navbar = () => {
//   const { cartCount } = useCart(); // ← Get cart count

//   return (
//     <header className="w-full bg-gray-200 sticky top-0 z-50">
//       <nav className="max-w-7xl mx-auto flex items-center justify-between py-4">
//         {/* Logo / Brand */}
//         <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
//           CartHub <span className="text-3xl">🛍️</span>
//         </h1>

//         {/* Search bar */}
//         {/* <div className="flex items-center justify-center flex-1 ">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="w-96 px-4 py-2 border border-gray-300 rounded-lg outline-none"
//           />
//         </div> */}

//         <SearchBar />

//         {/* Icons */}
//         <div className="flex items-center gap-2 text-gray-700">
//           <NavLink
//             to="/"
//             className="p-2 rounded-lg hover:bg-blue-200 transition-colors"
//           >
//             <House className="w-6 h-6" />
//           </NavLink>
//           <button className="p-2 rounded-lg hover:bg-blue-200 transition-colors">
//             <RefreshCw className="w-6 h-6" />
//           </button>
//           <NavLink
//             to="/cart"
//             className="relative p-2 rounded-lg hover:bg-blue-200 transition-colors"
//           >
//             <ShoppingCart className="w-6 h-6" />
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full">
//               {cartCount} {/* ← Dynamic cart count */}{" "}
//             </span>
//           </NavLink>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React from "react";
import { ShoppingCart, Home, RefreshCw } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const { cartCount, fetchProducts, setSearch } = useCart();

  const handleRefresh = () => {
    fetchProducts();
    setSearch("");
    console.log("🔄 Products refreshed!");
  };

  return (
    <header className="w-full bg-gray-50 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
          CartHub <span className="text-3xl">🛍️</span>
        </h1>

        {/* Search Bar */}
        <SearchBar />

        {/* Navigation Icons */}
        <div className="flex items-center gap-2 text-gray-700">
          {/* Home Button */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `p-2 rounded-lg hover:bg-blue-200 transition-colors ${
                isActive ? "bg-blue-200" : ""
              }`
            }
          >
            <Home className="w-6 h-6" />
          </NavLink>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            className="p-2 rounded-lg hover:bg-blue-200 hover:rotate-180 transition-transform duration-700"
          >
            <RefreshCw className="w-6 h-6" />
          </button>

          {/* Cart Button with Badge */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative p-2 rounded-lg hover:bg-blue-200 transition-colors ${
                isActive ? "bg-blue-200" : ""
              }`
            }
          >
            <ShoppingCart className="w-6 h-6" />
            {/* {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )} */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
