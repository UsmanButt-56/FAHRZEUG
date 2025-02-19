import React from "react";
import logo from '../../assets/CoreCodify.png';
import { FaArrowRight } from "react-icons/fa6";
function Footer() {
  const Quick = [
    {
      id : 1,
      name : "Home",
      path : "/"
    },
    {
      id : 2,
      name : "Vehicle purchase",
      path : "/vehicle/purchase"
    },
    {
      id : 3,
      name : "Used Car purchase",
      path : "/used/car"
    },
    {
      id : 4,
      name : "Engine damage purchase",
      path : "/engine/damage"
    }
  ]
  const Other = [
    {
      id : 1,
      name : "Accident car purchase",
      path : "/Accident/car"
    },
    {
      id : 2,
      name : "Total loss purchase",
      path : "/Total/loss"
    },
    {
      id : 3,
      name : "Gearbox damage purchase",
      path : "/Gearbox/damage"
    },
    {
      id : 4,
      name : "contact",
      path : "/contact"
    }
  ]
  return (
    <div className="w-full bg-[#262626]">
      <div className="w-11/12 mx-auto py-10 border-b border-white">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-5">
          <div className="flex flex-col gap-y-7">
             <div className="w-[274px] h-[106px]">
              <img src={logo} alt="" className="w-full h-full"/>
             </div>
             <div>
              <p className="font-normal text-[20.14px] leading-[23.6px] text-[#FFFFFF]">Sell Your Car Hassle-Free Today! – Get a free, no-obligation offer in minutes.</p>
             </div>
             <div className="w-[158px] md:w-[190px] lg:w-[235px] h-[48.53px] md:h-[58.36px] lg:h-[72.18px] text-[13.54px] md:text-[16.29px] lg:text-[20.14px] font-normal font-inter leading-[16.39px] md:leading-[19.71px] lg:leading-[24.38px] border-2 border-[#FF6600] rounded-full flex items-center justify-center text-[#FF6600]">
              <button>Get an Instant Offer</button>
             </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="text-white">
            <h2 className="font-semibold text-[24px] leading-[28.13px] py-7">Quick Links</h2>
            <ul className="space-y-3">
              {
                Quick.map((quick) => (
                  <li key={quick.id} className="flex items-center gap-2 font-normal text-[20px] leading-[23.44px] text-[#CFCFCF]">{quick.name} <FaArrowRight /></li>
                ))
              }
            </ul>
          </div>
          <div className="text-white">
            <h2 className="font-semibold text-[24px] leading-[28.13px] py-1 md:py-10"></h2>
            <ul className="space-y-3">
              {
                Other.map((other) => (
                  <li key={other.id} className="flex items-center gap-2 font-normal text-[20px] leading-[23.44px] text-[#CFCFCF]">{other.name} <FaArrowRight /></li>
                ))
              }
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;