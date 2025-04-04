import React from "react";
import request from "../../../assets/Request.svg";
import sell from "../../../assets/Sell_Car.svg";
import offer from "../../../assets/Offer.svg";
import arrow from "../../../assets/hand-drawn-curly-arrows 1.svg";

function How_Works() {
  return (
    <div className="w-full bg-white">
      <div className="w-[94%] mx-auto">
        <div className="flex flex-col justify-center items-center font-roboto py-4">
          <h1 className="font-bold text-[32px] lg:text-[60px]">
            How It Works?
          </h1>
          <p className="font-regular text-[16px] lg:text-[20px] text-[#696969]">
            How It Works in 3 Simple Steps
          </p>
        </div>
        <div className="hidden md:block">
          <div className="flex justify-between">
            <div className=" w-[249.07px] xl:w-full flex flex-col items-center">
              <div className="md:w-[94px] md:h-[75px] lg:w-[141px] lg:h-[128px]">
                <img src={request} alt="" className="w-full h-full " />
              </div>
              <h1 className="font-roboto font-bold md:text-[16px] lg:text-[24px]">
                Request a Quote
              </h1>
              <p className="font-roboto font-normal text-[#696969] md:text-[16px] lg:text-[20px] text-center">
                Fill out our online form or call us.
              </p>
            </div>
            <div className="flex md:items-center lg:items-center xl:w-full">
              <img src={arrow} alt="" />
            </div>
            <div className=" w-[249.07px] xl:w-full flex flex-col items-center">
              <div className="md:w-[94px] md:h-[75px] lg:w-[141px] lg:h-[128px]">
                <img src={offer} alt="" className="w-full h-full " />
              </div>
              <h1 className="font-roboto font-bold md:text-[16px] lg:text-[24px]">
                Get an Offer
              </h1>
              <p className="font-roboto font-normal text-[#696969] md:text-[16px] lg:text-[20px] text-center">
                Receive a fair, no-obligation offer within minutes.
              </p>
            </div>
            <div className="flex md:items-center lg:items-center xl:w-full">
              <img src={arrow} alt="" />
            </div>
            <div className=" w-[249.07px] xl:w-full flex flex-col items-center">
              <div className="md:w-[94px] md:h-[75px] lg:w-[141px] lg:h-[128px]">
                <img src={sell} alt="" className="w-full h-full " />
              </div>
              <h1 className="font-roboto font-bold md:text-[16px] lg:text-[24px]">
                Sell Your Car
              </h1>
              <p className="font-roboto font-normal text-[#696969] md:text-[16px] lg:text-[20px] text-center">
                We handle all paperwork and pick up your car for free.
              </p>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <div className="flex flex-col justify-center items-center gap-6">
            <div className=" w-[249.07px] xl:w-full flex flex-col items-center">
              <div className="w-[146.66px] h-[117.5px]">
                <img src={request} alt="" className="w-full h-full " />
              </div>
              <h1 className="font-roboto font-bold text-[24px]">
                Request a Quote
              </h1>
              <p className="font-roboto font-normal text-[#696969] text-[16.54px] text-center">
                Fill out our online form or call us.
              </p>
            </div>
            <div className="w-[249.07px] xl:w-full flex flex-col items-center">
              <div className="w-[146.66px] h-[117.5px]">
                <img src={offer} alt="" className="w-full h-full " />
              </div>
              <h1 className="font-roboto font-bold text-[24px]">
                Get an Offer
              </h1>
              <p className="font-roboto font-normal text-[#696969] text-[16.54px] text-center">
                Receive a fair, no-obligation offer within minutes.
              </p>
            </div>
            <div className=" w-[249.07px] xl:w-full flex flex-col items-center">
              <div className="md:w-[94px] md:h-[75px] lg:w-[141px] lg:h-[128px]">
                <img src={sell} alt="" className="w-full h-full " />
              </div>
              <h1 className="font-roboto font-bold text-[24px]">
                Sell Your Car
              </h1>
              <p className="font-roboto font-normal text-[#696969] text-[16.54px] text-center">
                We handle all paperwork and pick up your car for free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default How_Works;