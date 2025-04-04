import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import about from '../../../assets/about.svg'
function About_Us() {
  return (
    <div className='w-full bg-[#FFF1E8] py-5'>
        <div className="w-[94%] mx-auto bg-white rounded-xl shadow-md px-2">
            <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] py-4 md:py-10 gap-4">
                <div className=''>
                    <div className='w-full lg:h-[641px] h-[230px] md:h-[460px] px-2'>
                        {/* lg:h-[641px] h-[230px] md:h-[460px]*/}
                        <img src={about} alt="" className='w-full h-full object-cover rounded-xl' />
                    </div>
                </div>
                <div>
                    <div className='font-roboto px-2 md:px-4 lg:px-0 md:pr-4'>
                        <h1 className='text-black font-bold text-[32px] md:text-[36px] leading-[37.5px] md:leading-[42.19px] tracking-[0%]'>We Buy <span className='text-[#FF6600]'>(Almost) Every Vehicle</span> – Since 1998</h1>
                        <p className='py-4 font-medium text-[#696969] text-[16px] lg:text-[20px] leading-[18.75px] lg:leading-[23.44px]'>Whether it’s a used vehicle, accident-damaged, engine failure, or even scrap – we offer top prices for all. With over 25 years of experience and strong partnerships, we make selling 
                            your vehicle simple and stress-free.</p>

                        <h1 className='py-1 text-[#454545] font-bold text-[22px] md:text-[24px] lg:text-[28px] leading-[25.78px] md:leading-[28.13px] lg:leading-[32.81px]'>25+ Years of Expertise</h1>
                        <p className='py-2 text-[#696969] font-normal text-[16px] leading-[18.75px] lg:text-[20px] lg:leading-[23.44px] tracking-[0%]'><span className='font-bold'>Since 1998,</span> we’ve been helping customers sell their vehicles quickly and easily. Our experience ensures you get the best deal.</p>

                        <h1 className='py-1 text-[#454545] font-bold text-[22px] md:text-[24px] lg:text-[28px] leading-[25.78px] md:leading-[28.13px] lg:leading-[32.81px]'>We Buy (Almost) Every Vehicle</h1>
                        <p className='py-2 text-[#696969] font-normal text-[16px] leading-[18.75px] lg:text-[20px] lg:leading-[23.44px] tracking-[0%]'>No matter the condition – used, accident-damaged, engine failure, or even scrap – we offer fair prices and hassle-free service.</p>

                        <h1 className='py-1 text-[#454545] font-bold text-[22px] md:text-[24px] lg:text-[28px] leading-[25.78px] md:leading-[28.13px] lg:leading-[32.81px]'>Why Choose Us?</h1>
                        <p className='py-2 text-[#696969] font-normal text-[16px] leading-[18.75px] lg:text-[20px] lg:leading-[23.44px] tracking-[0%]'>We combine decades of experience with a customer-first approach to make selling your vehicle simple and stress-free.</p>
                         
                        <div className='text-white w-[186px] md:w-[277px] h-[48px] md:h-[71px] rounded-full flex items-center justify-center font-roboto font-normal text-[14px] leading-[16.41px] md:text-[22.82px] md:leading-[26.74px] bg-[#FF6600] my-2 cursor-pointer'>
                            <button className='flex items-center gap-2 cursor-pointer'>Sell Your Car Today <FaArrowRight /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About_Us;