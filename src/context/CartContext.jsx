import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const CartContext = createContext();

// Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  //   const [loading, setLoading] = useState(true);

  // Fetch products from API
  //   const fetchProducts = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch("https://dummyjson.com/products?limit=30");
  //       const data = await response.json();
  //       setProducts(data.products);
  //       console.log("✅ Products loaded:", data.products.length);
  //     } catch (error) {
  //       console.error("❌ Error fetching products:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   // Fetch products on mount
  //   useEffect(() => {
  //     fetchProducts();
  //   }, []);

  const fetchProducts = () => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // Increase quantity if already in cart
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Add new item with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
    console.log("✅ Added to cart:", product.title);
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    console.log("🗑️ Removed from cart");
  };

  // Update product quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
    console.log("🗑️ Cart cleared");
  };

  // Calculate total cart count (sum of all quantities)
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Filter products based on search (show all if empty)
  const filteredProducts =
    search.trim() === ""
      ? products
      : products.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        );

  //   const filteredProducts = products.filter((product) =>
  //     product.title.toLowerCase().includes(search.toLowerCase())
  //   );
  // Context value
  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal,
    search,
    setSearch,
    products,
    filteredProducts,
    // loading, //
    fetchProducts,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
