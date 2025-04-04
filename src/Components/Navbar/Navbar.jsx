import React, { useState, useEffect } from "react";
//import Nav from "../../assets/Navbar_Image.svg";
import Logo from "../../assets/Logo.svg";
//import Personal_Details from "../../Pages/Home/Personal_Details/Personal_Details";
import { IoMdCall } from "react-icons/io";
import arrow from "../../assets/downarrow.svg";
import Humburger from "../../assets/Humburger.svg";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineWatchLater } from "react-icons/md";
import doc from "../../assets/doc.svg";
import doc1 from "../../assets/doc1.svg";
import trading from '../../assets/tradingt.svg';
import { FaSortDown } from "react-icons/fa";
import salam from "../../assets/salam.png";
//import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Personal_Details from "../../Pages/Home/Personal_Details/Personal_Details";
//import Layer from '../../assets/Rectanglen.png';
function Navbar() {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled , setIsScrolled] = useState(false);

  useEffect(() => {
     const handleScroll = () => {
      if(window.scrollY > 50)
      {
        setIsScrolled(true);
      }
      else
      {
        setIsScrolled(false);
      }
     };
     window.addEventListener("scroll" , handleScroll);

     return () => window.removeEventListener("scroll" , handleScroll);
  }, []);
  const handledropdown = () => {
    setIsDropdown(!isDropdown);
  };
  const [currentTime, setCurrentTime] = useState("");
  
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("en-GB").replace(/\//g, "."); // Convert to DD.MM.YYYY format
      const formattedTime = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      }); // HH:mm format
      setCurrentTime(`${formattedDate}, ${formattedTime}`);
    };

    updateDateTime(); // Initial call
    const interval = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center relative z-50"
        // z-100
        style={{ backgroundImage: `url(${salam})` }}
      >
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/60 via-gray-800/40 to-black/60"></div>

        {/* bg-gradient-to-b from-black/60 via-gray-800/40 to-black/60 style={{ backgroundImage: `url(${Layer})` }} */}
        <div
          className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled ? "bg-black shadow-lg" : "bg-transparent"
          }`}
        >
        {/* <div className="absolute inset-0 -z-50 bg-gradient-to-b from-black/60 via-gray-800/40 to-black/60" style={{ backgroundImage: `url(${Layer})` }}></div> */}
        {/* -z-50 */}
        {/*  style={{ backgroundImage: `url(${Nav})` }} className="bg-cover bg-center"*/}
        {/* <div className="bg-black"> */}
        <div className="w-[94%] mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="w-[108px] h-[44px] md:w-[138px] md:h-[53px] lg:w-[175px] lg:h-[68px]">
              <img src={Logo} alt="" />
            </div>
            {/* Links */}
            <div className="hidden lg:block relative">
              <ul className="text-white flex space-x-6 font-roboto text-[18px] font-regular">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer flex items-center gap-1 group">
                  Vehicle purchase
                  <span>
                    {" "}
                    <img src={arrow} alt="" />
                  </span>
                  <div className="mt-2 absolute top-10 bg-white text-black w-[265.56px] h-[194.11px] py-3 text-center rounded-md invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <ul className="space-y-2">
                      <li>Used Car purchased</li>
                      <li>Engine damage purchase</li>
                      <li>Accident car purchase</li>
                      <li>Total loss purchase</li>
                      <li>Gearbox damage purchase</li>
                    </ul>
                  </div>
                </li>
                <li className="cursor-pointer">Contact</li>
              </ul>
            </div>
            {/*  */}
            <div className="hidden md:block">
              <div className="flex gap-4 text-white ">
                <div>
                  <h1 className="flex items-center gap-2">
                    Last Request{" "}
                    <span className="w-[14.59px] h-[14.59px] bg-[#FF6600] flex items-center">
                      <MdOutlineWatchLater />
                    </span>
                  </h1>
                  <p className="font-bold">{currentTime}</p>
                </div>
                <div>
                  <h1 className="flex items-center gap-2">
                    Total Request
                    <span className="w-[14.59px] h-[14.59px] bg-[#FF6600] flex items-center">
                      {/* <MdOutlineWatchLater /> */}
                      <img src={trading} alt="" />
                    </span>
                  </h1>
                  <p>1,289,499</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex items-center gap-3">
              <div className="px-4 text-white w-auto h-[39px] md:h-[44px] lg:h-[56px] rounded-full flex items-center justify-center font-roboto font-normal text-[11.81px] md:text-[15.25px] lg:text-[18px] bg-[#FF6600] my-2 cursor-pointer">
                <button className="flex items-center gap-1 cursor-pointer">
                  {" "}
                  <IoMdCall />
                  Contact
                </button>
              </div>
              <div className="flex lg:hidden cursor-pointer" onClick={() => setIsOpen(true)}>
                <img src={Humburger} alt="" />
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        </div>

        {/* </div> */}

        {/* Hero Section */}
        <div className="flex flex-col justify-center w-full h-full">
          <div className="px-2 sm:px-4 md:px-10">
            <h1 className="text-center sm:text-start font-roboto font-bold text-[26px] sm:text-[32px] md:text-[36px] lg:text-[80px] leading-[38px]  md:leading-[36px] lg:leading-[69px] text-white">
              Sell Your Car Fast & Easy –
              <span className="text-[#FF6600]">Get Top Cash Today!</span>
            </h1>
            <p className="text-center sm:text-start md:pr-15 lg:pr-20 md:py-2 text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px]">
              We buy all types of vehicles, regardless of condition. Free,
              no-obligation valuation in minutes!
            </p>
            <div className="flex items-center justify-center sm:justify-start">
              <div className="w-[208px] lg:w-[331px] h-[46.78px] lg:h-[71px] text-white bg-[#FF6600] rounded-full my-4 font-roboto font-normal text-[14px] md:text-[14.96px] lg:text-[23.14px] leading-[16.41px] md:leading-[17.53px] lg:leading-[27.12px]">
                <button className="w-full h-full">Get My Free Quote Now</button>
              </div>
            </div>
            
          {/*  */}
           <div className="px-4 flex gap-2 sm:hidden mb-3">
              <div className="w-[173px] h-[95px] flex flex-col items-center justify-center  bg-white/16">
                <div className="">
                  <img src={doc} alt="" />
                </div>
                <h1 className="text-white font-medium text-[17.53px]">
                  Last Request
                </h1>
                <p className="font-bold text-[12.53px] text-[#CCCCCC]">
                  {currentTime}
                </p>
                <></>
              </div>
              <div className="w-[173px] h-[95px] flex flex-col items-center justify-center bg-[rgba(255,102,0,0.16)]">
                <div className="">
                  <img src={doc1} alt="" />
                </div>
                <h1 className="text-white font-medium text-[17.53px]">
                  Total Request
                </h1>
                <p className="font-bold text-[12.53px] text-[#CCCCCC]">
                  1,289,499
                </p>
                <></>
              </div>
            </div> 
            </div>
          {/*  */}
        </div>
        {/* End Hero Section */}

        

        {/* Orange Bar */}
        {/* <div className="absolute bottom-0 w-full h-[91px] text-white bg-[#FF6600]">
          abc
        </div> */}
        {/* End Orange Bar */}
         
        {/* Side 3 Buttons */}
          <div className="flex-col h-screen z-50 absolute right-0 top-1/2 text-white gap-1 hidden md:flex">
            <div className="w-[39px] h-[39px] flex items-center justify-center bg-[#FF6600] ">
              <IoMdCall className="w-[18.91px] h-[18.91px]"/>
            </div>
            <div className="w-[39px] h-[39px] flex items-center justify-center bg-[#FF6600] ">
              <FaWhatsapp className="w-[18.91px] h-[18.91px]"/>
            </div>
            <div className="w-[39px] h-[39px] flex items-center justify-center bg-[#FF6600] ">
              <CgMail className="w-[18.91px] h-[18.91px]"/>
            </div>
          </div>
        {/* End Side 3 Buttons */}

        {/* Side Bar */}
        <div
          className={`fixed top-0 right-0 w-[338px] h-screen shadow-lg bg-white z-100 transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } `}
        >
          {/* Close Button */}
          <div
            className="absolute right-4 top-4 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <RxCross2 size={30} />
          </div>
          {/* List */}
          <div className="mt-16 mx-4 py-2">
            <ul className="text-center space-y-4 font-roboto">
              <li className="w-full bg-[#EDEDED] py-2 rounded-md font-medium text-[18.02px] cursor-pointer">
                Home
              </li>
              <li
                className="flex justify-center gap-2 py-2 bg-[#EDEDED] font-normal text-[18.02px] rounded-md cursor-pointer"
                onClick={handledropdown}
              >
                Vehicle purchase
                <span>
                  <FaSortDown />
                </span>
              </li>
              {isDropdown && (
                <ul className="space-y-4 font-roboto font-normal text-[#6A6A6A]">
                  <li>User Car pusrchase</li>
                  <li>Engine damage purchase</li>
                  <li>Accident car purchase</li>
                  <li>Total loss purchase</li>
                  <li>Gearbox damage purchase</li>
                </ul>
              )}
              <li className="font-normal text-[18.02px] text-black cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
        </div>
        {/* End Side Bar */}

        <div className="-mt-26 sm:-mt-48 md:-mt-40 lg:-mt-25 xl:-mt-28 relative">
        <Personal_Details />
        </div>

      </div>
      
    </>
  );
}

export default Navbar;