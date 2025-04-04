// import React, { useState, useEffect } from "react";
// import { IoMdCall } from "react-icons/io";
// import men from "../../../assets/men.png";
// import whatsApp from "../../../assets/whatsApp.svg";
// function FixedBottom() {
//   const [isScroll, setIsScroll] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScroll(true);
//       } else {
//         setIsScroll(false);
//       }
//     };
//     window.addEventListener("scroll" , handleScroll);

//     return () => window.removeEventListener("scroll" , handleScroll);
//   }, []);
//   return (
//     <>
//     {
//       isScroll && 
//       (
//         <div className="fixed bottom-0 left-0  h-[62.91px] lg:h-[91px] w-full z-50 bg-[#FF6600]">
//         <div className="w-11/12 mx-auto h-full relative">
//           <div className="grid grid-cols-2 h-full text-white">
//             <div className=" flex justify-between">
//               <div className="md:flex items-center hidden">
//                 <h1>Bewertung & Ernennung:</h1>
//               </div>
//               <div className="flex items-center">
//                 <h1 className="flex flex-col items-center">
//                   <div className="flex items-center gap-1 text-[16.6px]">
//                     <IoMdCall /> 0800 / 800 5055
//                   </div>
//                   <span className="text-[10.9px]">
//                     Daily 08:00 - 19:00 - 24/7
//                   </span>
//                   {/* <IoMdCall /> 0800 / 800 5055 */}
//                   {/* <p>abcd</p> */}
//                 </h1>
//               </div>
//             </div>
//             <div className="flex items-center justify-end md:justify-center">
//               <div className="hidden lg:flex">
//                 <h1>Or 24/7 in – Wir melden uns umgehend bei Ihnen</h1>
//               </div>
//               <div className="md:flex lg:hidden pr-15 md:pr-0">
//                 <div className="w-[39px] h-[39px]">
//                   <img src={whatsApp} alt="" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Absolute */}
//           <div className="absolute bottom-7 md:bottom-4 lg:bottom-12 right-0 z-50 w-[58.47px] h-[58.47px] md:w-[98.75px] md:h-[98.75px] lg:w-[100px] lg:h-[100px]">
//             <img src={men} alt="" />
//           </div>
//         </div>
//       </div>
//       )
//     }
//     </>
//   );
// }


// export default FixedBottom;


import React, { useState, useEffect } from "react";
import { IoMdCall } from "react-icons/io";
// import men from "../../../assets/men.png";
// import whatsApp from "../../../assets/whatsApp.svg";
import men from "../../../assets/men.png";
import whatsApp from "../../../assets/whatsApp.svg";

function FixedBottom() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scrolling... window.scrollY:", window.scrollY);
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log("isScroll:", isScroll); // Debugging

  return (
    <>
      {isScroll && (
        <div className="fixed bottom-0 left-0 h-[62.91px] lg:h-[91px] w-full z-50 bg-[#FF6600]">
          <div className="w-11/12 mx-auto h-full relative">
            <div className="grid grid-cols-2 h-full text-white">
              <div className="flex justify-between">
                <div className="md:flex items-center hidden">
                  <h1>Bewertung & Ernennung:</h1>
                </div>
                <div className="flex items-center">
                  <h1 className="flex flex-col items-center">
                    <div className="flex items-center gap-1 text-[16.6px]">
                      <IoMdCall /> 0800 / 800 5055
                    </div>
                    <span className="text-[10.9px]">
                      Daily 08:00 - 19:00 - 24/7
                    </span>
                  </h1>
                </div>
              </div>
              <div className="flex items-center justify-end md:justify-center">
                <div className="hidden lg:flex">
                  <h1>Or 24/7 in – Wir melden uns umgehend bei Ihnen</h1>
                </div>
                <div className="md:flex lg:hidden pr-15 md:pr-0">
                  <div className="w-[39px] h-[39px]">
                    <img src={whatsApp} alt="WhatsApp Icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-7 md:bottom-4 lg:bottom-12 right-0 z-50 w-[58.47px] h-[58.47px] md:w-[98.75px] md:h-[98.75px] lg:w-[100px] lg:h-[100px]">
              <img src={men} alt="Men Icon" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FixedBottom;