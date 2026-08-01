import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";

const Filter = ({
  category,
  setCategory,
  search,
  setSearch,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="bg-[#111111] p-4 sm:p-6 rounded-2xl border border-gray-800">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            All Products
          </h1>

          <p className="text-gray-400 mt-1 text-sm sm:text-base">
            50 products found
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 w-full sm:w-auto text-black bg-lime-400 px-5 py-3 rounded-xl font-semibold hover:bg-lime-300 transition">
          <SlidersHorizontal size={18} />
          Filter
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] gap-4">
        {/* Search Box */}
        <div className="flex items-center gap-3 bg-[#1c1c1c] border border-gray-700 rounded-xl px-4 py-3 focus-within:border-lime-400 transition">
          <Search size={20} className="text-lime-400 shrink-0" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none text-white w-full placeholder-gray-500"
          />
        </div>

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-[#1c1c1c] text-white border border-gray-700 rounded-xl px-5 py-3 outline-none focus:border-lime-400 transition cursor-pointer"
        >
          <option value="All">All Category</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
          <option value="sport">Sport</option>
          <option value="home-decoration">Home Decoration</option>
          <option value="kitchen-accessories">Kitchen Accessories</option>
        </select>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-[#1c1c1c] text-white border border-gray-700 rounded-xl px-5 py-3 outline-none focus:border-lime-400 transition cursor-pointer"
        >
          <option value="">Featured</option>

          <option value="price-low">Price Low → High</option>

          <option value="price-high">Price High → Low</option>

          <option value="rating-high">Top Rated</option>

          <option value="rating-low">Lowest Rated</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
