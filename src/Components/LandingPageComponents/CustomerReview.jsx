import React from "react";
import f1 from '../../assets/food_1.jpg'
import f2 from '../../assets/food_2.jpg'
import f3 from '../../assets/food_3.webp'
import f4 from '../../assets/food_4.jpg'
import f5 from '../../assets/food_5.jpg'
import f6 from '../../assets/food_6.jpg'

const reviews = [
  {
    c_name: "John Doe",
    c_review:
      "Absolutely loved the food! The butter chicken was rich and flavorful, and the naan was fresh out of the tandoor.",
    c_rating: "5",
    c_image: f1
  },
  {
    c_name: "Priya Sharma",
    c_review:
      "Great ambiance and friendly staff. Perfect spot for a family dinner. Will definitely come again.",
    c_rating: "4.5",
    c_image: f2
  },
  {
    c_name: "Ahmed Khan",
    c_review:
      "The biryani was fantastic! Spices were perfectly balanced. Service was a bit slow, but worth the wait.",
    c_rating: "4",
    c_image: f3
  },
  {
    c_name: "Emily Davis",
    c_review:
      "I had the paneer tikka and it was delicious. Fresh ingredients and great presentation.",
    c_rating: "5",
    c_image: f4
  },
  {
    c_name: "Ravi Patel",
    c_review:
      "Food was tasty but slightly on the spicy side for me. Lassi was amazing though!",
    c_rating: "3.5",
    c_image: f5
  },
  {
    c_name: "Sophia Lee",
    c_review:
      "Loved the outdoor seating area. The tandoori fish was the highlight of the meal!",
    c_rating: "4.8",
    c_image: f6
  }
];

const CustomerReview = () => {
  return (
    <div className="py-12  bg-orange-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-600">
        Customer Reviews
      </h2>
      <div className="max-w-6xl mx-5 lg:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl md:rounded-4xl shadow-md p-6 flex flex-col text-left"
          >
            <div className="flex gap-5 items-center ">
                <img
              src={review.c_image}
              alt={review.c_name}
              className="w-10 h-10 md:w-15 md:h-15 rounded-full object-cover border-2 border-orange-400"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {review.c_name}
            </h3>
            </div>
            <p className="text-sm text-gray-600 mt-2">{review.c_review}</p>
            <span className="mt-3 text-orange-500 font-bold">
              ⭐ {review.c_rating} / 5
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
