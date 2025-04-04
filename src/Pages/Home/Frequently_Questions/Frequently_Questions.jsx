import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

function Frequently_Questions() {
  const Questions = [
    { id: 1, question: "What types of car do you buy?", answer: "We buy all vehicles – running or not, damaged, accident, or scrap." },
    { id: 2, question: "What types of vehicles do you buy?", answer: "We buy all vehicles, running or not—cars, vans, trucks, and SUVs." },
    { id: 3, question: "Do I need to bring my car to you?", answer: "No, we offer free pickup. Our team will come to your location, inspect the car, and complete the transaction." },
    { id: 4, question: "How long does the selling process take?", answer: "The process is quick and can be completed within the same day." },
    { id: 5, question: "What documents do I need to sell my car?", answer: "You need a valid ID and proof of car ownership." },
    { id: 6, question: "When and how will I receive my payment?", answer: "Payments are made instantly via bank transfer or cash." },
  ];

  const [openQuestionIds, setOpenQuestionIds] = useState([]);
  const [maxOpen, setMaxOpen] = useState(1);

  // Function to update maxOpen based on screen size
  useEffect(() => {
    const updateMaxOpen = () => {
      let newMaxOpen = 1;
      if (window.innerWidth >= 1024) {
        newMaxOpen = 3; // Large screens: 3 questions open
      } else if (window.innerWidth >= 768) {
        newMaxOpen = 2; // Tablets: 2 questions open
      }
      setMaxOpen(newMaxOpen);
    };

    updateMaxOpen();
    window.addEventListener("resize", updateMaxOpen);

    return () => {
      window.removeEventListener("resize", updateMaxOpen);
    };
  }, []);

  // Open default questions when maxOpen updates
  useEffect(() => {
    setOpenQuestionIds(Questions.slice(0, maxOpen).map((q) => q.id)); // Open first `maxOpen` questions
  }, [maxOpen]);

  // Function to handle opening/closing of questions
  const handleAnswer = (id) => {
    setOpenQuestionIds((prevOpen) => {
      if (prevOpen.includes(id)) {
        return prevOpen.filter((qId) => qId !== id);
      } else {
        return prevOpen.length < maxOpen ? [...prevOpen, id] : [...prevOpen.slice(1), id];
      }
    });
  };

  return (
    <div className="w-full bg-white py-10">
      <div className="w-[94%] mx-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-center font-bold text-[32px] md:text-[36px] lg:text-[50px] text-black">
            Frequently Asked Questions
          </h1>
        </div>

        {/* FAQ Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-2">
          {Questions.map((question) => (
            <div
              key={question.id}
              className={`px-2 py-3 rounded-lg transition-all duration-300 ${
                openQuestionIds.includes(question.id) ? "bg-[#FFF1E8]" : "bg-[#F8F8F8]"
              }`}
            >
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-[16px] md:text-[20px]">{question.question}</h1>
                <div
                  className="w-[24px] h-[24px] bg-[#FF6600] rounded-full flex justify-center items-center text-white cursor-pointer"
                  onClick={() => handleAnswer(question.id)}
                >
                  {openQuestionIds.includes(question.id) ? <FiMinus /> : <FaPlus />}
                </div>
              </div>
              {openQuestionIds.includes(question.id) && <p className="py-2">{question.answer}</p>}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-4">
          <button className="text-white w-[186px] md:w-[277px] h-[48px] md:h-[71px] rounded-full flex items-center justify-center text-[14px] md:text-[22px] bg-[#FF6600] cursor-pointer">
            Sell My Car Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Frequently_Questions;