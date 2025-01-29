
"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ Data: Modify this array to include different questions and answers.
  const faqs = [
    {
      question: "Is an MBBS degree from Georgia recognized globally?",
      answer:
        "Yes, an MBBS degree from Georgia is recognized by many international bodies, subject to specific licensing examinations.",
    },
    {
      question: "What are the eligibility criteria for MBBS in Georgia?",
      answer:
        "Eligibility usually requires completing high school with a science background, including biology and chemistry.",
    },
    {
      question: "Are there English-taught MBBS programs in Georgia?",
      answer:
        "Yes, many universities in Georgia offer MBBS programs taught entirely in English.",
    },
    {
      question: "What is the cost of studying MBBS in Georgia?",
      answer:
        "The cost varies by university, but it is often more affordable than Western countries while maintaining quality education.",
    },
  ];

  // Toggles the FAQ dropdown.
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative flex flex-col items-center bg-white py-12 px-4">
      {/* Background Images */}
      <img
        src="/assests/faq_img.png"
        alt="Top Left Decoration"
        className="absolute top-[144px] left-[109px] w-[163.85px] h-[75px] object-contain"
      />
      <img
        src="/assests/faq_img.png"
        alt="Bottom Left Decoration"
        className="absolute top-[417.48px] left-[190px] w-[91.86px] h-[42.04px] object-contain"
      />
      <img
        src="/assests/faq_img.png"
        alt="Top Right Decoration"
        className="absolute top-[116px] left-[1051px] w-[91.86px] h-[42.04px] object-contain"
      />
      <img
        src="/assests/faq_img.png"
        alt="Bottom Right Decoration"
        className="absolute top-[366px] left-[1000px] w-[215.6px] h-[98.68px] object-contain"
      />

      {/* Header */}
      <h2 className="text-3xl font-bold mb-4 text-center">
        <span className="text-black">Frequently</span>{" "}
        <span className="text-red-600">Asked</span>{" "}
        <span className="text-black">Questions</span>
      </h2>
      <p className="text-gray-500 mb-6 text-center">
        Celebrating Achievements, One Click at a Time!
      </p>

      {/* FAQ List */}
      <div className="w-full max-w-2xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <button
              className={`w-full flex justify-between items-center py-4 px-6 text-left ${
                openIndex === index
                  ? "text-red-600 font-bold"
                  : "text-black font-semibold"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{`Q. ${faq.question}`}</span>
              {openIndex === index ? (
                <FaChevronDown className="text-red-600" />
              ) : (
                <FaChevronRight className="text-red-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}