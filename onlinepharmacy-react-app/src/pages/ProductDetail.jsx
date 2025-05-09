// src/pages/ProductDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMedicineById } from "../services/catalogService";
import CompareButton from "../components/ProductCard/CompareButton";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getMedicineById(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading…</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/3"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 text-xl text-green-700">${product.price}</p>
          <CompareButton product={product} />
          <div className="mt-6">
            {/* Tabbed layout can go here */}
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
