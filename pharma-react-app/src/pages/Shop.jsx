import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { fetchFakeStoreProducts } from "../api/fakeStoreApi";
import { useAuth } from "../features/auth/useAuth";
import { useCart } from "../contexts/CartContext";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { addToCart } = useCart(); // ← pull in addToCart

  // Fetch products from Fake Store API
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchFakeStoreProducts();
        const mapped = data.map((item) => ({
          id: item.id,
          name: item.title,
          brand: item.category,
          price: item.price,
          imageUrl: item.image,
          description: item.description,
        }));
        setProducts(mapped);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // When user clicks "Add to Cart"
  const handleAddToCart = (product) => {
    if (!user) {
      alert("Please login to add items to your cart.");
      return;
    }
    addToCart(product); // ← add to cart context
  };

  return (
    <main className="content">
      {loading ? (
        <p className="text-center">Loading…</p>
      ) : (
        <div className="grid grid-4">
          {products.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default Shop;
