import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setItems(JSON.parse(stored));
  }, []);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addItem = (product) => {
    setItems((curr) => {
      const exists = curr.find((i) => i.id === product.id);
      if (exists) {
        return curr.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...curr, { ...product, qty: 1 }];
    });
  };

  const updateItem = (id, qty) => {
    setItems((curr) =>
      curr
        .map((i) => (i.id === id ? { ...i, qty: Math.max(qty, 1) } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const removeItem = (id) => {
    setItems((curr) => curr.filter((i) => i.id !== id));
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, updateItem, removeItem, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
