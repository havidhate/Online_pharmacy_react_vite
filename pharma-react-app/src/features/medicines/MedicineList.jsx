import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import FilterSidebar from "../../components/FilterSidebar";
import ProductCard from "../../components/ProductCard";
import useMedicineSearch from "./useMedicineSearch";

const MedicineList = ({ onAddToCart }) => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ category: "", price: 1000 });
  const { results, loading } = useMedicineSearch(search);

  // apply additional filters client-side
  const displayed = results.filter((med) => {
    return (
      (!filters.category || med.category === filters.category) &&
      med.price <= filters.price
    );
  });

  return (
    <div className="shop-page">
      <aside className="shop-sidebar">
        <FilterSidebar filters={filters} setFilters={setFilters} />
      </aside>

      <section className="shop-main">
        <div className="shop-search">
          <SearchBar onSearch={setSearch} />
        </div>

        {loading ? (
          <p className="shop-loading">Searching...</p>
        ) : (
          <div className="shop-grid">
            {displayed.map((med) => (
              <ProductCard
                key={med.id}
                product={med}
                onAddToCart={onAddToCart}
              />
            ))}
            {displayed.length === 0 && !loading && (
              <p className="shop-no-results">No medicines found.</p>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default MedicineList;
