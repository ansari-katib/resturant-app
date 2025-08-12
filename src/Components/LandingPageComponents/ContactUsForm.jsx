import React, { useState } from "react";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-3 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left Section - Info */}
        <div>
          <h2 className="text-3xl font-bold text-orange-700 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            We’d love to hear from you! Whether you have a question about our menu,
            need assistance with an order, or just want to share feedback — we’re here to help.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>🍽️  Menu & Special Offers</li>
            <li>🚚  Delivery & Order Status</li>
            <li>💳  Payments & Refunds</li>
            <li>📝  Feedback & Suggestions</li>
          </ul>
          <p className="mt-4 text-gray-500 text-sm">
            Or email us directly at{" "}
            <a href="mailto:support@dhaba.com" className="text-orange-600 underline">
              support@dhaba.com
            </a>
          </p>
        </div>

        {/* Right Section - Form */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg w-full border border-purple-200"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-orange-700">
              Contact Us
            </h2>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-orange-700 mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-orange-700 mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-orange-700 mb-2 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="4"
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default ContactUsForm;
