import React from "react";
import img3 from "../../assets/res_3.jpg";

const Carousal = () => {
  return (
    <>
      <div className="relative mt-5 py-5 w-full max-w-7xl md:h-auto md:rounded-b-xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-500"
        >
          <div className="flex-shrink-0 w-full flex flex-col items-center justify-center">
            <img
              src={img3}
              alt="hero image"
              className="w-[90%] rounded-2xl sm:h-[20rem] md:h-[22rem] lg:h-[24rem] object-cover lg:rounded-xl shadow-lg"
            />
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <p className="w-3/4 border-1 border-gray-400 mt-10"></p>
        </div>
      </div>
    </>
  );
};

export default Carousal;
