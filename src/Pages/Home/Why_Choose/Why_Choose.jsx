import React from "react";
import choose1 from "../../../assets/Capa_1.svg";
import choose2 from "../../../assets/Слой_1.svg";
import choose3 from "../../../assets/Group.svg";
import choose4 from "../../../assets/_x31_6.svg";
import { FaArrowRight } from "react-icons/fa6";
function Why_Choose() {
  const Choose = [
    {
      id: 1,
      image: choose1,
      title: "Fast & Easy Process",
      desc: "We make selling your car simple and hassle-free.",
    },
    {
      id: 2,
      image: choose2,
      title: "Fair Prices",
      desc: "Get the best value for your vehicle, no matter its condition.",
    },
    {
      id: 3,
      image: choose3,
      title: "Instant Payment",
      desc: "Get Paid quickly with a smooth and hassle-free process.",
    },
    {
      id: 4,
      image: choose4,
      title: "Free Pickup",
      desc: "We’ll pick up your car at no extra cost.",
    },
  ];
  return (
    <div className="w-full bg-white py-10 mt-[430px] md:mt-[500px] lg:mt-[750px]">
      <div className="w-[94%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex w-full justify-center lg:items-center lg:justify-start">
            <div className="font-roboto font-bold pb-5">
              <h1 className="text-[32px] md:text-[36px] lg:text-[60px] text-black text-center lg:text-start">
                Why Choose
                <br />
                <span className="text-[#FF6600]">Fahrzeug-Ankauf.NRW?</span>
              </h1>
              <div className="hidden lg:block">
                <div className=" text-white w-[186px] md:w-[277px] h-[48px] md:h-[71px] rounded-full flex items-center justify-center font-roboto font-normal text-[14px] leading-[16.41px] md:text-[22.82px] md:leading-[26.74px] bg-[#FF6600] my-2 cursor-pointer">
                  <button className="flex items-center gap-2 cursor-pointer">
                    Learn More <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-5">
            {Choose.map((choose) => (
              <div
                className="w-full h-[242px] bg-[#F5F5F5] relative overflow-hidden rounded-md"
                key={choose.id}
              >
                <div className="absolute -left-5 -top-5 w-[135px] h-[135px] bg-[#FF6600] rounded-full flex items-center justify-center">
                  <img src={choose.image} alt="" />
                </div>
                {/* Text container with top padding so it appears below the circle */}
                <div className="absolute bottom-5 left-0 w-full p-4 text-center">
                  <h1 className="font-bold text-xl">{choose.title}</h1>
                  <p className="text-sm text-gray-600">{choose.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:hidden block mt-3">
          <div className="flex justify-center">
            <div className=" text-white w-[186px] md:w-[277px] h-[48px] md:h-[71px] rounded-full flex items-center justify-center font-roboto font-normal text-[14px] leading-[16.41px] md:text-[22.82px] md:leading-[26.74px] bg-[#FF6600] my-2 cursor-pointer">
              <button className="flex items-center gap-2 cursor-pointer">
                Learn More <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why_Choose;
