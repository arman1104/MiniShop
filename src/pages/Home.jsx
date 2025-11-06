// import React, { useEffect, useState } from "react";
// import ProductCard from "../components/ProductCard";

// const Home = () => {
//   const [products, setProducts] = useState([]);

//   const fetchProducts = () => {
//     fetch(`https://dummyjson.com/products`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setProducts(data.products);
//       });
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       {/* <div className="min-h-screen bg-gray-100 p-8 border border-gray-200"> */}
//       <h1 className="text-3xl font-bold text-center mb-10 mt-5 text-gray-800 ">
//         🛍️ Product Gallery
//       </h1>

//       {/* <div className="flex flex-wrap justify-center gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white w-64 shadow-md border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
//           >
//             <h2 className="text-lg font-semibold text-gray-800 text-center line-clamp-1">
//               {product.title}
//             </h2>
//             <img
//               src={product.images[0]}
//               alt={product.title}
//               className="w-28 h-28 object-contain mb-3 mt-3 "
//             />

//             <p className="text-gray-600 text-sm text-center line-clamp-1">
//               {product.description}
//             </p>
//             <p className="mt-2 text-md font-semi-bold text-green-500 bg-gray-200 rounded-lg px-2">
//               ${product.price}
//             </p>

//             <button className="mt-3 px-3 py-[6px] bg-blue-400 text-white rounded-lg hover:bg-blue-600 transition">
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div> */}
//       <div className="flex flex-wrap justify-center gap-6">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} /> // ← Use ProductCard
//         ))}
//       </div>
//       {/* </div> */}
//     </>
//   );
// };

// export default Home;

import React from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

const Home = () => {
  const { filteredProducts, loading, search } = useCart();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🛍️ Product Gallery
      </h1>

      {search && (
        <p className="text-center text-gray-600 mb-4">
          Showing results for: <strong>"{search}"</strong> (
          {filteredProducts.length} products)
        </p>
      )}

      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-500 text-xl mt-20">
          {search
            ? `No products found for "${search}"`
            : "No products available"}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
