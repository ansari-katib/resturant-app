import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const faqData = [
    {
      question: "What is the best way to order food?",
      answer: "You can order directly from our website or mobile app. Just browse the menu, add items to your cart, and proceed to checkout."
    },
    {
      question: "Do you offer home delivery?",
      answer: "Yes! We provide fast and safe home delivery services in your area."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept UPI, credit/debit cards, net banking, and cash on delivery."
    },
    {
      question: "How can I track my order?",
      answer: "After placing an order, you can track it in real-time through your order history page."
    },
    {
      question: "Are there any discounts available?",
      answer: "Yes, we frequently offer discounts and coupons. Check our offers page for the latest deals."
    },
    {
      question: "Can I cancel my order?",
      answer: "You can cancel your order within 5 minutes of placing it. After that, it may be in preparation."
    },
    {
      question: "Do you offer vegetarian and vegan options?",
      answer: "Absolutely! We have a wide range of vegetarian and vegan-friendly meals."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100 transition"
            >
              {faq.question}
              <span className="text-purple-600 text-lg">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Animated Answer */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 py-4 text-gray-600 bg-white">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
