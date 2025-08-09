// import React, { useState } from "react";
// import restaurantsData from "../../Json/CardContents.json"; // adjust path if needed

// const SearchResturant = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter restaurants based on search
//   const filteredRestaurants = restaurantsData.filter((rest) =>
//     rest.restaurant_name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="bg-gray-100 py-10">
//       {/* Search Bar */}
//       <div className="max-w-2xl mx-auto px-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search restaurant..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//       </div>

//       {/* Results */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
//         {filteredRestaurants.length > 0 ? (
//           filteredRestaurants.map((rest, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
//             >
//               <img
//                 src={rest.restaurant_image}
//                 alt={rest.restaurant_name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">
//                   {rest.restaurant_name}
//                 </h3>
//                 <p className="text-gray-600 text-sm">{rest.address}</p>
//                 <p className="text-gray-600 text-sm">{rest.state}</p>

//                 <div className="flex justify-between items-center mt-3">
//                   <span className="bg-yellow-400 text-white px-2 py-1 rounded text-sm">
//                     ⭐ {rest.rating}
//                   </span>
//                   <span className="text-gray-500 text-sm">
//                     {rest.open_Time} - {rest.close_Time}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">
//             No restaurants found.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchResturant;
