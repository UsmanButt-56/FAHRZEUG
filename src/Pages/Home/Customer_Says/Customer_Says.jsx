import React, { useState } from "react";
import car from "../../../assets/car.svg";
import accident from "../../../assets/accident-car.svg";
//import { FaComment } from "react-icons/fa6";
//import { FaArrowRightLong } from "react-icons/fa6";
//import { FaLongArrowAltLeft } from "react-icons/fa";
import Left from '../../../assets/Left-arrow.svg';
import Right from '../../../assets/Right-arrow.svg';
import commas from '../../../assets/Commass.png';
function Customer_Says() {
    const Customers = [
      {
        id: 1,
        image: car,
        name: "Jhon Doe",
        description:
          "I was able to sell my crashed BMW here for a good price after trying in vain for weeks to get rid of it via well-known portals. It was picked up promptly and even deregistered for me. I am satisfied.",
      },
      {
        id: 1,
        image: accident,
        name: "Mickey W.",
        description:
          "I was able to sell my crashed BMW here for a good price after trying in vain for weeks to get rid of it via well-known portals. It was picked up promptly and even deregistered for me. I am satisfied.",
      },
      {
        id: 1,
        image: car,
        name: "D. Watson",
        description:
          "I was able to sell my crashed BMW here for a good price after trying in vain for weeks to get rid of it via well-known portals. It was picked up promptly and even deregistered for me. I am satisfied.",
      },
    ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next review
  const nextSlide = () => {
    if (currentIndex < Customers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to move to the previous review
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentCustomer = Customers[currentIndex];

  return (
    <div className="w-full py-5 md:py-10">
      <div className="w-[94%] mx-auto">
        <h1 className="py-4 text-center font-roboto text-black font-bold text-[32px] md:text-[36px] lg:text-[60px]">
          What our customers say
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] md:gap-3 lg:gap-5 py-0 md:py-10">
          {/* Left side: Customer image */}
          <div className="w-full h-full">
            <img
              src={currentCustomer.image}
              alt={currentCustomer.name}
              className="rounded-xl w-full"
            />
          </div>
          {/* Right side: Customer review and navigation */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="flex items-end">
                    <h1 className="font-roboto font-semibold text-[24px] md:text-[28px] lg:text-[48px]">
                      {currentCustomer.name}
                    </h1>
                  </div>
                  <div className="flex items-start gap-2">
                    <div>
                      <img src={commas} alt="" />
                    </div>
                    {/* <FaComment className="text-[#FF6600] w-[20px] h-[20px] md:w-[35px] md:h-[35px] lg:w-[43px] lg:h-[43px]" />
                    <FaComment className="text-[#FF6600] w-[20px] h-[20px] md:w-[35px] md:h-[35px] lg:w-[43px] lg:h-[43px]" /> */}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className="w-[41.72px] h-[41.72px] lg:w-[83px] lg:h-[83px] bg-white rounded-full flex items-center justify-center drop-shadow-2xl shadow-[#7A7A7A] disabled:opacity-50"
                  >
                    {/* <FaLongArrowAltLeft /> */}
                    <img src={Left} alt="" />
                  </button>
                  <button
                    onClick={nextSlide}
                    disabled={currentIndex === Customers.length - 1}
                    className="w-[41.72px] h-[41.72px] lg:w-[83px] lg:h-[83px] bg-white rounded-full flex items-center justify-center drop-shadow-xl disabled:opacity-50"
                  >
                    {/* <FaArrowRightLong /> */}
                    <img src={Right} alt="" />
                  </button>
                </div>
              </div>
              <div>
                <p className="py-5 font-roboto font-regular text-[16px] md:text-[14px] lg:text-[24px] text-[#7A7A7A]">
                  {currentCustomer.description}
                </p>
              </div>
            </div>
            {/* Dots indicator */}
            <div className="flex gap-1">
              {Customers.map((customer, index) => (
                <div
                  key={customer.id}
                  className={`w-[14.02px] h-[14.02px] md:w-[9.98px] md:h-[9.98px] lg:w-[21.44px] lg:h-[21.44px] rounded-full ${
                    index === currentIndex ? "bg-[#FF6600]" : "bg-[#FFF1E8]"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer_Says;