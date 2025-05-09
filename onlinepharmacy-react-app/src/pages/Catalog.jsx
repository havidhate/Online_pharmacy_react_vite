// src/pages/Catalog.jsx
import React, { useState, useEffect } from "react";
import SearchBox from "../components/Search/SearchBox";
import CategoryFilter from "../components/Filters/CategoryFilter";
import PriceSlider from "../components/Filters/PriceSlider";
import BrandCheckbox from "../components/Filters/BrandCheckbox";
import ProductCard from "../components/ProductCard/ProductCard";
import { fetchMedicines } from "../services/catalogService";

const Catalog = () => {
  const [medicines, setMedicines] = useState([]);
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    price: [0, 1000],
  });

  useEffect(() => {
    fetchMedicines(filters).then(setMedicines);
  }, [filters]);

  return (
    <div className="container mx-auto p-4">
      <SearchBox onSearch={(q) => setFilters((f) => ({ ...f, search: q }))} />
      <div className="flex mt-4 space-x-4">
        <aside className="w-1/4 space-y-4">
          <CategoryFilter
            onChange={(cats) => setFilters((f) => ({ ...f, category: cats }))}
          />
          <BrandCheckbox
            onChange={(brands) => setFilters((f) => ({ ...f, brand: brands }))}
          />
          <PriceSlider
            onChange={(range) => setFilters((f) => ({ ...f, price: range }))}
          />
        </aside>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
          {medicines.map((med) => (
            <ProductCard key={med.id} product={med} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Catalog;
