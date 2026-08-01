import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import ProuductCard from "../ShopComponents/ProuductCard";
import Filter from "../ShopComponents/Filter";
import { MyStore } from "../context/ContextApi";

const ShopPage = () => {
  const { productData } = useContext(MyStore);
  const location = useLocation();

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    if (location.state?.category) {
      setCategory(location.state.category);
    } else {
      setCategory("All");
    }
  }, [location.state]);

  const filteredProducts = productData.filter((item) => {
    const matchCategory = category === "All" || item.category === category;
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "rating-high") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  if (sortBy === "rating-low") {
    filteredProducts.sort((a, b) => a.rating - b.rating);
  }

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-black px-6 py-8 max-w-7xl flex flex-col mx-auto transition-colors">
      <Filter
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-5">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProuductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default ShopPage;
