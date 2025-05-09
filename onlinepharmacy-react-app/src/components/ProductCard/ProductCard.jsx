// src/components/ProductCard/ProductCard.jsx
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { addItem } = useContext(CartContext);
  return (
    <div className="border rounded p-4 hover:shadow-lg">
      <img src={product.image} alt={product.name} className="h-32 mx-auto" />
      <h4 className="mt-2 font-semibold">{product.name}</h4>
      <p className="text-green-600">${product.price}</p>
      <button
        onClick={() => addItem(product)}
        className="mt-2 px-4 py-1 bg-teal-600 text-white rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
