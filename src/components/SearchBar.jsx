// import React from "react";
// import { useCart } from "../context/CartContext";

// const SearchBar = () => {
//   const { search, setSearch } = useCart();
//   return (
//     <div>
//       {/* Search bar */}
//       <div className="flex items-center justify-center flex-1 ">
//         <input
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           type="text"
//           placeholder="Search products..."
//           className="w-96 px-4 py-2 border border-gray-300 rounded-lg outline-none"
//         />
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

import React from "react";
import { useCart } from "../context/CartContext";

const SearchBar = () => {
  const { search, setSearch } = useCart();

  return (
    <div className="flex items-center justify-center flex-1">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search products..."
        className="w-96 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-blue-400"
      />
    </div>
  );
};

export default SearchBar;
