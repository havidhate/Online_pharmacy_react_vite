// src/components/Cart/CartItem.jsx
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../contexts/CartContext";

const CartItem = ({ item }) => {
  const { updateItem, removeItem } = useContext(CartContext);
  return (
    <div className="flex justify-between items-center mb-2">
      <span>
        {item.name} x {item.qty}
      </span>
      <div className="space-x-2">
        <button onClick={() => updateItem(item.id, item.qty - 1)}>-</button>
        <button onClick={() => updateItem(item.id, item.qty + 1)}>+</button>
        <button onClick={() => removeItem(item.id)}>✕</button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;
