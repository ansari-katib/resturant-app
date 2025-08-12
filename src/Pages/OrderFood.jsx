import React from "react";
import f1 from "../assets/food.jpg";
import f2 from "../assets/food_1.jpg";
import f3 from "../assets/food_2.jpg";
import f4 from "../assets/food_3.webp";
import f5 from "../assets/food_4.jpg";
import f6 from "../assets/food_5.jpg";
import f7 from "../assets/food_6.jpg";
import f8 from "../assets/food_7.jpg";
import Footer from "../Components/Common/Footer";
import { Navbar } from "../Components/Common/Navbar";
import { Link } from "react-router-dom";

const OrderFood = () => {
  const foodItems = [
    { id: 1, name: "Chicken Biryani", price: 250, img: f1, offer: "20% OFF" },
    { id: 2, name: "Veg Pizza", price: 300, img: f2, offer: "Buy 1 Get 1 Free" },
    { id: 3, name: "Burger Combo", price: 180, img: f3, offer: "15% OFF" },
    { id: 4, name: "Pasta Alfredo", price: 220, img: f4, offer: "Flat ₹50 OFF" },
    { id: 5, name: "Grilled Sandwich", price: 150, img: f5, offer: "Free Drink" },
    { id: 6, name: "Fried Rice", price: 200, img: f6, offer: "10% OFF" },
    { id: 7, name: "Tandoori Roti & Curry", price: 170, img: f7, offer: "Combo Deal" },
    { id: 8, name: "Paneer Tikka", price: 260, img: f8, offer: "₹30 OFF" },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-6">Order Food</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 relative"
            >
              {/* Offer Badge */}
              {item.offer && (
                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {item.offer}
                </span>
              )}
              
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">₹{item.price}</p>
                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                  <Link to={"/auth"}>Add to Cart</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderFood;
