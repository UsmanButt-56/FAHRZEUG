import React from "react";

function Personal_Details() {
  return (
    <div className="h-[660px] px-5 md:px-10 w-full">
      {/* -mt-30 z-50*/}
    <div className="bg-white rounded-md p-2 md:p-4 lg:p-6 ">
      {/* Personal Details */}
      <div>
        <h1 className="font-roboto font-semibold text-[20px] md:text-[28px] leading-[23.44px] md:leading-[32.81px] tracking-[0%] py-3">
          Personal Details
        </h1>
        <div className="grid grid-cols-2 gap-3">
          <div className="w-full h-[44px] md:h-[56px] lg:h-[81px] bg-[#E5E5E5CC] flex items-center px-2 md:px-4 rounded-md">
            <input
              type="text"
              className="w-full h-full bg-transparent outline-none text-black font-roboto font-normal text-[12px] md:text-[14px] lg:text-[20px] leading-[14.06px] md:leading-[16.41px] lg:leading-[23.44px]"
              placeholder="Name (Required)"
            />
          </div>
          <div className="w-full h-[44px] md:h-[56px] lg:h-[81px] bg-[#E5E5E5CC] flex items-center px-2 md:px-4 rounded-md">
            <input
              type="text"
              className="w-full h-full bg-transparent outline-none text-black font-roboto font-normal text-[12px] md:text-[14px] lg:text-[20px] leading-[14.06px] md:leading-[16.41px] lg:leading-[23.44px]"
              placeholder="Phone Number (Required)"
            />
          </div>
          <div className="w-full h-[44px] md:h-[56px] lg:h-[81px] bg-[#E5E5E5CC] flex items-center px-2 md:px-4 rounded-md">
            <input
              type="text"
              className="w-full h-full bg-transparent outline-none text-black font-roboto font-normal text-[12px] md:text-[14px] lg:text-[20px] leading-[14.06px] md:leading-[16.41px] lg:leading-[23.44px]"
              placeholder="Email (Optional)"
            />
          </div>
        </div>
      </div>
      {/* Car Details */}
      <div>
        <h1 className="font-roboto font-semibold text-[20px] md:text-[28px] leading-[23.44px] md:leading-[32.81px] tracking-[0%] py-3">
          Car Details
        </h1>
        <div className="grid grid-cols-2 gap-3 pb-3">
          <div className="w-full h-[44px] md:h-[56px] lg:h-[81px] bg-[#E5E5E5CC] flex items-center px-2 md:px-4 rounded-md">
            <input
              type="text"
              className="w-full h-full bg-transparent outline-none text-black font-roboto font-normal text-[12px] md:text-[14px] lg:text-[20px] leading-[14.06px] md:leading-[16.41px] lg:leading-[23.44px]"
              placeholder="Car Brand (Required)"
            />
          </div>
          <div className="w-full h-[44px] md:h-[56px] lg:h-[81px] bg-[#E5E5E5CC] flex items-center px-2 md:px-4 rounded-md">
            <input
              type="text"
              className="w-full h-full bg-transparent outline-none text-black font-roboto font-normal text-[12px] md:text-[14px] lg:text-[20px] leading-[14.06px] md:leading-[16.41px] lg:leading-[23.44px]"
              placeholder="Car Model (Required)"
            />
          </div>
          <div className="w-full h-[44px] md:h-[56px] lg:h-[81px] bg-[#E5E5E5CC] flex items-center px-2 md:px-4 rounded-md">
            <input
              type="text"
              className="w-full h-full bg-transparent outline-none text-black font-roboto font-normal text-[12px] md:text-[14px] lg:text-[20px] leading-[14.06px] md:leading-[16.41px] lg:leading-[23.44px]"
              placeholder="Car Year (Required)"
            />
          </div>
          <div className="w-full h-[44px] md:h-[56px] lg:h-[81px] bg-[#E5E5E5CC] flex items-center px-2 md:px-4 rounded-md">
            <input
              type="text"
              className="w-full h-full bg-transparent outline-none text-black font-roboto font-normal text-[12px] md:text-[14px] lg:text-[20px] leading-[14.06px] md:leading-[16.41px] lg:leading-[23.44px]"
              placeholder="Car Condition (Required)"
            />
          </div>
        </div>
        <div className="w-full h-[102px] md:h-[150px] lg:h-[189px] bg-[#E5E5E5CC] px-4 pt-3 rounded-md">
          <textarea
            className="w-full h-full bg-transparent outline-none text-black resize-none font-roboto font-normal text-[12px] md:text-[14px] lg:text-[20px] leading-[14.06px] md:leading-[16.41px] lg:leading-[23.44px]"
            placeholder="Any additional details or questions? (Optional)"
          />
        </div>
      </div>
      {/*  */}
      <div className="flex items-center justify-center">
        <div className="w-[208px] h-[48px] lg:w-[331px] lg:h-[71px] text-white bg-[#FF6600] rounded-full my-4 font-roboto font-normal text-[14px] md:text-[14.96px] lg:text-[23.14px] leading-[16.41px] md:leading-[17.53px] lg:leading-[27.12px]">
          <button className="w-full h-full">Get My Free Quote Now</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Personal_Details;
