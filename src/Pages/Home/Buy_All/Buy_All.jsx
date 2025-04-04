import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import car from "../../../assets/car.svg";
import accident from "../../../assets/accident-car.svg";

function BuyAllCarousel() {
  const Cars = [
    {
      id: 1,
      image: car,
      info: "Used Car",
      description:
        "Sell your used car at the best price with a hassle-free process.",
    },
    {
      id: 2,
      image: accident,
      info: "Accident Car",
      description: "We buy accident-damaged vehicles, no matter the condition.",
    },
    {
      id: 3,
      image: car,
      info: "Total Loss Vehicles",
      description: "Insurance write-off? We’ll still make you an offer!",
    },
    {
      id: 4,
      image: accident,
      info: "Flooded Vehicles",
      description:
        "We buy flood-damaged cars, regardless of their condition.",
    },
    {
      id: 5,
      image: car,
      info: "Used Car",
      description:
        "Sell your used car at the best price with a hassle-free process.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // Default for large screens

  // Update visible cards based on window size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  // Calculate total slides
  const totalSlides = Math.max(Cars.length - visibleCards, 0);

  const nextSlide = () => {
    if (index < totalSlides) {
      setIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full py-10">
      <div className="w-[94%] mx-auto">
        <div className="px-4 md:px-48 lg:px-10">
          <h1 className="font-roboto font-bold text-[32px] md:text-[36px] text-center py-5">
            We Buy All Types of Vehiclesss
          </h1>
        </div>
        <div className="relative overflow-hidden w-full">
          {/* Carousel Container */}
          <div className="w-full flex items-center justify-between">
            {/* Left Button */}
            <button
              onClick={prevSlide}
              className={`absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full transition-all ${
                index === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
              }`}
            >
              <FaChevronLeft />
            </button>

            <motion.div
              className="flex gap-2 md:gap-4 w-full"
              animate={{ x: `-${index * (100 / visibleCards)}%` }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.3,
              }}
              style={{ width: `${(Cars.length / visibleCards) * 100}%` }}
            >
              {Cars.slice(index, index + visibleCards).map((carItem) => (
                <div
                  key={carItem.id}
                  className="bg-white border border-gray-200 rounded-2xl shadow-xl dark:bg-gray-800 dark:border-gray-700 relative" style={{ width: `calc(100% / ${visibleCards})` }}
                >
                  <div className="w-full h-[166.95px] lg:h-[272px]">
                    <img
                      className="rounded-t-2xl w-full h-full object-cover"
                      src={carItem.image}
                      alt={carItem.info}
                    />
                  </div>
                  <div className="px-4 py-2 flex flex-col items-center justify-center">
                    <h5 className="text-center mb-1 lg:mb-2 font-bold font-roboto text-[19.64px] lg:text-[32px]">
                      {carItem.info}
                    </h5>
                    <p className="mb-1 lg:mb-3 text-center font-normal text-[#7A7A7A] text-[11.05px] lg:text-[18px] leading-[18px]">
                      {carItem.description}
                    </p>
                    <button className="mt-4 font-roboto text-[10.18px] lg:text-[16.59px] text-white w-[111px] lg:w-[181px] h-[31.68px] lg:h-[51.61px] bg-[#FF6600] rounded-full">
                      Sell Your Car
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Right Button */}
            <button
              onClick={nextSlide}
              className={`absolute right-2 top-1/2 -translate-y-1/2 bg-[#FFF3EC] w-[44px] h-[44px] lg:w-[83px] lg:h-[83px] flex items-center justify-center rounded-full transition-all ${
                index >= totalSlides ? "opacity-50 cursor-not-allowed" : "opacity-100"
              }`}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyAllCarousel;