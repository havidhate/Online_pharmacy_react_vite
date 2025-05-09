// src/components/ProductCard.jsx
import { motion } from "framer-motion";
import React from "react";

const ProductCard = ({ product, onAddToCart }) => (
  <motion.div whileHover={{ scale: 1.03 }} className="card">
    {/* === IMAGE BOX === */}
    <div className="image-container">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-image"
      />
    </div>

    {/* === PRODUCT INFO === */}
    <h3 className="product-title">{product.name}</h3>
    <p className="product-brand">{product.brand}</p>
    <p className="product-price">₹{product.price}</p>

    {/* === ACTION BUTTON === */}
    <button onClick={() => onAddToCart(product)} className="btn-add">
      Add to Cart
    </button>
  </motion.div>
);

export default ProductCard;
