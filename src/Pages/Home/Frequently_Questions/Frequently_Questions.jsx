import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
function Frequently_Questions() {
  const Questions = [
    {
      id: 1,
      question: "What types of car do you buy?",
      answer:
        "We buy all vehicles – running or not, damaged, accident, or scrap.",
    },
    {
      id: 2,
      question: "What types of vehicles do you buy?",
      answer:
        "We buy all vehicles, running or not—cars, vans, trucks, and SUVs.",
    },
    {
      id: 3,
      question: "What types of vehicles do you buy?",
      answer:
        "No, we offer free pickup. Our team will come to your location, inspect the car, and complete the transaction.",
    },
    {
      id: 4,
      question: "How long does the selling process take? ",
      answer:
        "No, we offer free pickup. Our team will come to your location, inspect the car, and complete the transaction.",
    },
    {
      id: 5,
      question: "What documents do I need to sell my car?",
      answer:
        "No, we offer free pickup. Our team will come to your location, inspect the car, and complete the transaction.",
    },
    {
      id: 6,
      question: "When and how will I receive my payment?",
      answer:
        "No, we offer free pickup. Our team will come to your location, inspect the car, and complete the transaction.",
    },
  ];
  const [openQuestionId, setOpenQuestionId] = useState(null);
  const handleanswer = (id) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };
  return (
    <div className="w-full bg-white py-10">
      <div className="w-[94%] mx-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-center font-bold font-roboto text-[32px] md:text-[36px] lg:text-[50px] leading-[37.5px] md:leading-[42.19px] lg:leading-[58.59px] tracking-[0%] text-black">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-2 space-y-3">
          {Questions.map((question) => (
            <div
              className={`px-2 py-3 rounded-lg ${
                openQuestionId === question.id ? "bg-[#FFF1E8]" : "bg-[#F8F8F8]"
              }`}
            >
              <div className="flex justify-between">
                <div>
                  <h1 className="font-roboto font-medium text-[16.25px] md:text-[15.7px] lg:text-[20px] leading-[19.04px] md:leading-[18.4px] lg:leading-[23.44px]">
                    {question.question}
                  </h1>
                </div>
                <div
                  className="w-[20px] h-[20px] bg-[#FF6600] rounded-full flex justify-center items-center text-white cursor-pointer"
                  onClick={() => handleanswer(question.id)}
                >
                  {openQuestionId === question.id ? <FaPlus /> : <FiMinus />}
                </div>
              </div>
              <div className="py-1">
                {openQuestionId === question.id && <p>{question.answer}</p>}
              </div>
            </div>
          ))}
        </div>
        <div>
            <button>Sell My Car Now</button>
        </div>
      </div>
    </div>
  );
}

export default Frequently_Questions;
