import React from "react";
import footerData from "../../Json/FooterContent.json"; // your JSON file

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* Company Logo Section */}
        <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
            <h1 className='text-2xl flex font-bold underline font-serif mb-5'><p className='text-orange-500'>D</p>haba</h1>
          <p className="text-gray-400 text-sm">
            Bringing you the best food from top restaurants with fast delivery.
          </p>
        </div>

        {/* Footer Links from JSON */}
        {footerData.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-4 capitalize">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.content.map((link, idx) => (
                <li key={idx} className="hover:underline cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Dhaba. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
