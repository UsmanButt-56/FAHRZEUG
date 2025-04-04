import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import car from "../../../assets/car.svg";
import accident from "../../../assets/accident-car.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrow from "./RightArrow";

function Carouselx() {
  const Cars = [
    {
      id: 1,
      image: car,
      info: "Used Car",
      description:
        "Sell your used car at the best price with a hassle-free process.",
    },
    {
      id: 2,
      image: accident,
      info: "Accident Car",
      description: "We buy accident-damaged vehicles, no matter the condition.",
    },
    {
      id: 3,
      image: car,
      info: "Total Loss Vehicles",
      description: "Insurance write-off? We’ll still make you an offer , no matter the condition.!",
    },
    {
      id: 4,
      image: accident,
      info: "Flooded Vehicles",
      description:
        "We buy flood-damaged cars, regardless of their condition, no matter the condition.",
    },
    {
      id: 5,
      image: car,
      info: "Used Car",
      description:
        "Sell your used car at the best price with a hassle-free process.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "40px",
    arrows : true,
    nextArrow: <RightArrow />,
    responsive: [
      {
        breakpoint: 1024, // For screens under 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // For screens under 600px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    // Optional custom arrows:
    // prevArrow: <SamplePrevArrow />,
  };

  // Custom arrow components (optional) //  bg-[#FFF3EC]
  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <button
  //       className={`${className}  rounded-full p-2 !w-[83px] !h-[83px] bg-green-500`}
      
  //       style={{ ...style, display: "block", right: "10px", zIndex: 2, width : "100px" , height : "100px" }}
  //       onClick={onClick}
  //     >
  //       <FaChevronRight className="text-3xl" />
  //     </button>
  //   );
  // }
  return (
    <div className="w-full pt-15">
      <div className="">
        {/* w-[94%] mx-auto */}
        <div className="px-4 md:px-48 ">
          <h1 className="font-roboto font-bold text-[32px] md:text-[36px] text-center py-5">
            We Buy All Types of Vehicles
          </h1>
        </div>
        <div className="relative overflow-hidden w-full shadow-2xl mb-20">
          {/* Slider */}
          <Slider {...settings}>
            {Cars.map((carItem) => (
              <div
                key={carItem.id}
                className="rounded-2xl shadow-2xl mx-2"
              >
                <div className="w-full h-[166.95px] lg:h-[272px]">
                  <img
                    className="rounded-t-2xl w-full h-full object-cover"
                    src={carItem.image}
                    alt={carItem.info}
                  />
                </div>
                <div className="px-4 py-2 flex flex-col items-center justify-center ">
                  <h5 className="text-center mb-1 lg:mb-2 font-bold font-roboto text-[19.64px] lg:text-[32px]">
                    {carItem.info}
                  </h5>
                  <p className="mb-1 lg:mb-3 text-center font-normal text-[#7A7A7A] text-[11.05px] lg:text-[18px] leading-[18px]">
                    {carItem.description}
                  </p>
                  <button className="mt-4 font-roboto text-[10.18px] lg:text-[16.59px] text-white w-[111px] lg:w-[181px] h-[31.68px] lg:h-[51.61px] bg-[#FF6600] rounded-full">
                    Sell Your Car
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Carouselx;