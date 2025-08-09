import React from "react";
import restaurantsData from "../../Json/CardContents.js"; // adjust path if needed

const ResturantsCards = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <h2 className="text-3xl font-extrabold text-center mb-10 relative text-gray-800">
        Restaurants
        <span className="block w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {restaurantsData.map((rest, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={rest.restaurant_image}
                  alt={rest.restaurant_name}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                {/* Restaurant Name */}
                <h3 className="text-xl font-bold text-orange-600 mb-1">
                  {rest.restaurant_name}
                </h3>

                {/* Address */}
                <p className="text-sm text-gray-500 italic mb-1">
                  📍 {rest.address}
                </p>

                {/* State */}
                <p className="text-sm font-medium text-gray-700">
                  🏙 {rest.state}
                </p>

                {/* Rating & Time */}
                <div className="flex justify-between items-center mt-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                    ⭐ {rest.rating}
                  </span>
                  <span className="text-orange-500 text-sm font-semibold">
                    ⏰ {rest.open_Time} - {rest.close_Time}
                  </span>
                </div>

                {/* Button */}
                <div className="flex gap-2" >
                  <button className="mt-5 w-full text-sm bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition">
                    🍽 Book Seat
                  </button>
                  <button className="mt-5 w-full text-sm  bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition">
                    🍽 Order Food
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResturantsCards;
