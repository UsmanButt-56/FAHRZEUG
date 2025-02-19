import React from "react";

function Ready() {
  return (
    <>
      <div className="w-full bg-[#FFF1E8]">
        <div className="w-11/12 mx-auto h-[166px] md:h-[158.93px] lg:h-[298px]">
          <div className="flex flex-col items-center justify-center h-full gap-y-5">
            <p className="text-center text-black font-bold text-[24px] md:text-[28px] lg:text-[50px] leading-[28.13px] md:leading-[32.81px] lg:leading-[58.59px] font-roboto">
              Ready to Sell Your Car?{" "}
              <span className="text-[#FF6600]">Get a Free Quote Now!</span>
            </p>
            <div>
              <button className="w-[208px] md:w-[197.47px] lg:w-[296px] h-[48px] md:h-[46.46px] lg:h-[69.65px] bg-[#FF6600] text-[#FFFFFF] rounded-full font-normal text-[14px] md:text-[14.93px] lg:text-[22.39px] leading-[16.41px] md:leading-[17.5px] lg:leading-[26.23px] font-roboto">
                Get My Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ready;
