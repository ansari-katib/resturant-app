import React, { useState } from "react";
import { FaChevronDown, FaUser } from "react-icons/fa";

const Filter_Content = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [sortBy, setSortBy] = useState(SortByData[0].action[0]);

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  const handleSelectChange = (sectionTitle, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [sectionTitle]: value,
    }));
  };

  const applyFilters = () => {
    console.log("Filters:", selectedFilters);
    console.log("Sort By:", sortBy);
    setIsFilterOpen(false);
  };

  const removeFilterTag = (sectionTitle) => {
    setSelectedFilters((prev) => {
      const updated = { ...prev };
      delete updated[sectionTitle];
      return updated;
    });
  };

  return (
    <div className=" flex items-center justify-center my-5">

      {/* Sort By Dropdown */}
      <div className=" mx-3 md:flex md:items-center gap-4 mb-4">

        <div className="relative inline-block">
          {/* User icon */}
          <FaUser className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          {/* Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none border border-gray-400 text-gray-500 p-2 pl-8 pr-8 rounded"
          >
            {SortByData[0].action.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          {/* Down arrow */}
          <FaChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
        </div>


        {/* Filter Button */}
        <button
          onClick={toggleFilter}
          className="px-2 mt-2 md:mt-0 py-[10px] flex items-center gap-2 sm:px-3 sm:py-[10px] ml-1 bg-gray-100 rounded-xl text-gray-500 hover:bg-gray-200"
        >
          {Filterdata[0].dropdown}
          <FaChevronDown/>
        </button>


        {/* Static sort buttons row */}
        <div className="flex flex-wrap md:flex md:items-center gap-2 overflow-x-auto scrollbar-hide py-2">
          {sortBtn.map((item, index) => (
            <button
              key={index}
              className="bg-gray-100 px-3 py-2 md:px-4 md:py-3 rounded-xl text-xs md:text-sm text-gray-500 hover:bg-gray-200 whitespace-nowrap"
            >
              {item}
            </button>
          ))}
        </div>


      </div>

      {/* Selected Filter Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(selectedFilters).map(([title, value]) => (
          <span
            key={title}
            className="flex items-center gap-1 bg-gray-200 px-3 py-1 rounded-full text-sm"
          >
            {title}: {value}
            <button
              onClick={() => removeFilterTag(title)}
              className="text-red-500"
            >
              ✕
            </button>
          </span>
        ))}
      </div>

      {/* Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-96 p-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-lg font-semibold">
                {Filterdata[0].dropdown}
              </h2>
              <button onClick={toggleFilter} className="text-red-500">
                ✕
              </button>
            </div>

            {/* Filter Sections */}
            {Object.keys(Filterdata[0]).map((key) => {
              const section = Filterdata[0][key];
              if (!section?.title || !section?.data) return null;

              return (
                <div key={section.title} className="mb-4">
                  <h3 className="font-medium mb-2">{section.title}</h3>
                  {Array.isArray(section.data) ? (
                    <select
                      value={selectedFilters[section.title] || ""}
                      onChange={(e) =>
                        handleSelectChange(section.title, e.target.value)
                      }
                      className="border p-2 rounded w-full"
                    >
                      <option value="">Select</option>
                      {section.data.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  ) : (
                    <select
                      value={selectedFilters[section.title] || ""}
                      onChange={(e) =>
                        handleSelectChange(section.title, e.target.value)
                      }
                      className="border p-2 rounded w-full"
                    >
                      <option value="">{section.data}</option>
                    </select>
                  )}
                </div>
              );
            })}

            {/* Apply Button */}
            <button
              onClick={applyFilters}
              className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Filter_Content;

// JSON Data
const Filterdata = [
  {
    dropdown: "Filter",
    section1: {
      title: "Sort",
      data: [
        "Relevance",
        "Distance : Nearby to Far",
        "popularity : high to low",
        "cost of to : low to high",
        "cost of two : high to low",
      ],
    },
    section2: {
      title: "Book a table",
      data: "select tag",
    },
    section3: {
      title: "Cuisine",
      data: ["American", "Arabian", "Asian", "BBQ", "Bihari"],
    },
    section4: {
      title: "Distance",
      data: ["All", "Within 2km", "Within 5km", "Within 10km", "Within 15km"],
    },
    section5: {
      title: "Rating",
      data: ["Rating 4.5+", "Rating 4+", "Rating 3.5+"],
    },
    section6: {
      title: "cost of two",
      data: [
        "less than $1000",
        "1000 $2000",
        "2000 $3000",
        "3000 $4000",
      ],
    },
  },
];

const SortByData = [
  {
    dopdown: "Sort By",
    action: [
      "Distance : Nearby to Far",
      "popularity : high to low",
      "cost of to : low to high",
      "cost of two : high to low",
    ],
    btn: "apply",
  },
];

const sortBtn = [
  "Book a table",
  "Within 5km",
  "Rating 4+",
  "Pure veg",
  "server alcohol",
];