import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import seatImage from "../assets/res_3.jpg"; // Replace with your image
import Footer from "../Components/Common/Footer";
import { Navbar } from "../Components/Common/Navbar";

const BookYourSeat = () => {
  return (
    <>
    <Navbar />
    <section className="bg-orange-50 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-8">
        
        {/* Left: Image + Description Card */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <img
            src={seatImage}
            alt="Restaurant Seating"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          
          {/* Restaurant Info Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">Welcome to Apna Dhaba</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              At Apna Dhaba, we bring you the authentic flavors of India in a cozy, family-friendly
              atmosphere. Whether you're here for a quick bite or a full-course meal, our warm hospitality
              and mouth-watering dishes will make your visit unforgettable.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-100 text-orange-600 p-2 rounded-full hover:bg-orange-200 transition"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-100 text-orange-600 p-2 rounded-full hover:bg-orange-200 transition"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-100 text-orange-600 p-2 rounded-full hover:bg-orange-200 transition"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">Book Your Seat</h2>
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-orange-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-orange-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-gray-700 mb-1">Date</label>
              <input
                type="date"
                className="w-full border border-orange-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-gray-700 mb-1">Time</label>
              <input
                type="time"
                className="w-full border border-orange-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Guests */}
            <div>
              <label className="block text-gray-700 mb-1">Number of Guests</label>
              <input
                type="number"
                placeholder="e.g. 4"
                className="w-full border border-orange-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Reserve Now
            </button>
          </form>
        </div>

      </div>
    </section>
    <Footer />
    </>
  );
};

export default BookYourSeat;
