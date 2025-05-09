// src/api/fakeStoreApi.js
export const fetchFakeStoreProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch Fake Store products");
    return res.json();
  };
  