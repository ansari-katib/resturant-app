import React, { useState } from "react";
import { FaFilter, FaTimes, FaSearch } from "react-icons/fa";

const Filter_Content = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["Biryani/Rice", "Pizza", "Burger", "Starter"];
  const priceRanges = ["Under ₹100", "₹100 - ₹200", "₹200 - ₹500"];

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedPrice("");
    setSearchTerm("");
  };

  return (
    <div className="bg-orange-50 p-6 rounded-xl mt-5 shadow-lg w-full max-w-6xl mx-auto mb-5 transition-all duration-300 hover:shadow-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg md:text-xl font-bold flex items-center gap-2 text-orange-600">
          <FaFilter /> Filter Items
        </h2>
        {(selectedCategory || selectedPrice || searchTerm) && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-2 text-sm bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300 transition"
          >
            <FaTimes /> Clear All
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Search */}
        <div className="flex items-center w-full md:w-auto flex-1 border rounded-lg px-3 py-2 bg-white shadow-sm">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full focus:outline-none"
          />
        </div>

        {/* Category */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="">All Categories</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Price */}
        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="">All Prices</option>
          {priceRanges.map((range, index) => (
            <option key={index} value={range}>
              {range}
            </option>
          ))}
        </select>

        {/* Apply Button */}
        <button
          onClick={() =>
            alert(
              `Filtering by: ${searchTerm || "Any"} / ${
                selectedCategory || "All Categories"
              } / ${selectedPrice || "All Prices"}`
            )
          }
          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-400 transition font-medium shadow-md w-full md:w-auto"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filter_Content;
