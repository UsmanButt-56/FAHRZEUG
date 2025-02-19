import React from "react";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
function Contact_Us() {
  return (
    <div className="w-full bg-white">
      <div className="w-[94%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%]">
          <div className="flex items-center border-2 border-green-500">
            <div className="px-0 md:px-28 lg:px-0">
              <h1 className="text-center lg:text-start font-Roboto font-bold text-[32px] md:text-[36px] lg:text-[60px] leading-[37.5px] md:leading-[42.19px] lg:leading-[70.31px]">Contact Us Today!</h1>
              <p className="py-5 text-center font-Roboto text-[#696969] text-[16px] lg:text-[20px] leading-[18.75px] lg:leading-[23.44px]">
                Have questions or want to sell your car? Fill out the form
                below, and we’ll get back to you shortly!</p>
               <div className="flex flex-wrap justify-center gap-2">
                  <div className="h-[42.73px] lg:h-[72px] bg-[#FF6600] flex items-center justify-center px-7 rounded-full font-normal text-[13.73px] md:text-[15.11px] lg:text-[23.14px] leading-[16.09px] md:leading-[17.7px] lg:leading-[27.12px]">
                    <button className="flex items-center gap-1 text-white"><IoMdCall className="text-[12.21px] md:text-[20.14px] lg:text-[20.57px]" />Call Us Now</button>
                  </div>
                  <div className="h-[42.73px] lg:h-[72px] bg-[#FF6600] flex items-center justify-center px-7 rounded-full font-normal text-[13.73px] md:text-[15.11px] lg:text-[23.14px] leading-[16.09px] md:leading-[17.7px] lg:leading-[27.12px]">
                    <button className="flex items-center gap-1 text-white"><FaWhatsapp className="text-[12.21px] md:text-[20.14px] lg:text-[20.57px]" />WhatsApp Us</button>
                  </div>
                  <div className="h-[42.73px] lg:h-[72px] bg-[#FF6600] flex items-center justify-center px-7 rounded-full font-normal text-[13.73px] md:text-[15.11px] lg:text-[23.14px] leading-[16.09px] md:leading-[17.7px] lg:leading-[27.12px]">
                    <button className="flex items-center gap-1 text-white"><CgMail className="text-[12.21px] md:text-[20.14px] lg:text-[20.57px]" />Email Us</button>
                  </div>
               </div>
            </div>
          </div>
          <div>
            <div className="bg-white border-2 border-red-500 rounded-xl p-2 md:p-4 lg:p-6">
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
              <div className="w-full h-[72px] text-white bg-[#FF6600] rounded-full my-4 font-roboto font-normal text-[14px] md:text-[14.96px] lg:text-[23.14px] leading-[16.41px] md:leading-[17.53px] lg:leading-[27.12px]">
                <button className="w-full h-full">Send Message</button>
              </div>
              <div className="flex justify-center">
                <p className="text-[#707070] font-normal font-roboto text-[10px] md:text-[14px] lg:text-[16px] leading-[11.72px] md:leading-[16.41px] lg:leading-[18.75px] tracking-[0%]">
                  We respect your privacy. Your information is safe with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact_Us;
