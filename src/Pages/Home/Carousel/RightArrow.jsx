import React from "react";
//import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function RightArrow(props) {
    const { onClick } = props;
  return (
    <div
      className="text-black absolute w-[44px] h-[44px] lg:w-[83px] lg:h-[83px] bg-[#FFF3EC] right-0 z-10 top-1/2 rounded-full -translate-y-1/2 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center justify-center h-full text-black">
        <MdOutlineKeyboardArrowRight className="text-3xl" />
      </div>
    </div>
  )
}

export default RightArrow;