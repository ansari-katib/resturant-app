import React from 'react';
import dhabaImage from '../assets/res_2.jpg';
import Footer from '../Components/Common/Footer';
import { Navbar } from '../Components/Common/Navbar';
import CustomerReview from '../Components/LandingPageComponents/CustomerReview';

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <div className="px-3 py-12 max-w-7xl mx-auto font-sans leading-relaxed">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-700">About Us</h1>
          <p className="text-lg text-gray-600 mt-2">
            Welcome to <strong>Apna Dhaba</strong> — where tradition meets taste.
          </p>
        </div>

        {/* Image & Story Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* Image */}
          <div className="flex-1">
            <img
              src={dhabaImage}
              alt="Our Dhaba"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Story Text */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-red-800 mb-4">Our Story</h2>
            <p className="mb-4 text-gray-700">
              Established in 1995, Apna Dhaba started as a small roadside eatery with the aim of bringing
              authentic Indian flavors to travelers and food lovers. Over the years, our dhaba has become
              a favorite stop for families, friends, and foodies from all walks of life.
            </p>
            <p className="mb-4 text-gray-700">
              We pride ourselves on serving dishes made from fresh ingredients, traditional recipes, and
              a whole lot of love. Whether it’s the smoky aroma of our tandoor, the rich flavors of our
              curries, or the crispness of our fresh rotis — every bite is a journey back to India’s roots.
            </p>
            <p className="text-gray-700">
              Our rustic setting, warm hospitality, and mouth-watering menu create the perfect environment
              to relax and enjoy your meal. At Apna Dhaba, we believe in keeping traditions alive while
              welcoming everyone like family.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-12 bg-orange-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-red-800 mb-2">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            To deliver authentic, high-quality, and affordable Indian food that warms the heart
            and satisfies the soul.
          </p>

          <h2 className="text-2xl font-semibold text-red-800 mb-2">Our Vision</h2>
          <p className="text-gray-700">
            To be the most loved dhaba in India, known for great taste, great service, and great memories.
          </p>
        </div>
      </div>
      <CustomerReview />
      <Footer />
    </>
  );
};

export default AboutUs;
