// src/pages/CartPage.jsx
import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartSidePanel from "../components/Cart/CartSidePanel";

const CartPage = () => {
  const { items, total } = useContext(CartContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <CartSidePanel items={items} total={total} />
    </div>
  );
};

export default CartPage;
