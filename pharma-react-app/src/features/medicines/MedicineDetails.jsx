import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import ProductCard from "../../components/ProductCard";

const MedicineDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const [med, setMed] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMed = async () => {
      try {
        const docRef = doc(db, "medicines", id);
        const snap = await getDoc(docRef);
        if (snap.exists()) setMed({ id: snap.id, ...snap.data() });
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchMed();
  }, [id]);

  if (loading) return <p className="p-4 text-center">Loading...</p>;
  if (!med) return <p className="p-4 text-center text-red-500">Not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded shadow">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={med.imageUrl}
          alt={med.name}
          className="w-full md:w-1/2 h-64 object-contain rounded"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{med.name}</h1>
          <p className="text-gray-500 mb-4">{med.brand}</p>
          <p className="text-xl font-semibold mb-4">₹{med.price}</p>
          <p className="mb-6">{med.description}</p>
          <button
            onClick={() => onAddToCart(med)}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetails;
