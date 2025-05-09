// src/features/recommendations/useRecommendations.js
import { useState, useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import { fetchFakeStoreProducts } from "../../api/fakeStoreApi";

export default function useRecommendations() {
  const { items } = useCart();
  const [recs, setRecs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (!items.length) {
        setRecs([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        // Collect unique categories from cart items
        const cats = Array.from(new Set(items.map((i) => i.brand)));
        // Fetch all products once
        const all = await fetchFakeStoreProducts();
        // Recommend products in same categories NOT already in cart
        const recommended = all
          .map((p) => ({
            id: p.id,
            name: p.title,
            brand: p.category,
            price: p.price,
            imageUrl: p.image,
            description: p.description,
          }))
          .filter(
            (p) => cats.includes(p.brand) && !items.find((i) => i.id === p.id)
          );
        setRecs(recommended.slice(0, 12)); // cap at 12
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [items]);

  return { recs, loading };
}
