// src/components/Cart/CartSidePanel.jsx
import React from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";

const CartSidePanel = ({ items, total }) => (
  <div className="border rounded p-4">
    {items.map((i) => (
      <CartItem key={i.id} item={i} />
    ))}
    <div className="mt-4 font-bold">Total: ${total.toFixed(2)}</div>
  </div>
);

CartSidePanel.propTypes = {
  items: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
};

export default CartSidePanel;
