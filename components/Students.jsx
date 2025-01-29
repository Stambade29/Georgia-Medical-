import React from "react";

const Students = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-6 mb-10"> {/* Flex column for center alignment */}
      {/* Centered Heading */}
      <div className="text-center mt-4">
        <h1
          className="font-roboto text-4xl font-semibold leading-[46.88px] tracking-[0.015em]"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Our Happy{" "}
          <span style={{ color: "rgba(199, 24, 58, 1)" }}>Students</span>
        </h1>
        {/* Line.png Image Moved to the Right */}
        <img
          src="/assests/Line.png"
          alt="Decorative line"
          className="mt-0 -mt-2 mb-15 ml-auto"
        />

        {/* New Subheading */}
        <p className="mt-1 font-roboto text-lg text-gray-600">
          Hear What Our Students Have to Say
        </p>
      </div>

      {/* Student Cards */}
      <div className="flex justify-center gap-10">
        {/* Card 1 */}
        <div className="card1 rounded-lg overflow-hidden w-80 h-72">
          <img
            src="/assests/student1.png"
            alt="Card 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 2 */}
        <div className="card2 rounded-lg overflow-hidden w-80 h-72">
          <img
            src="/assests/student2.png"
            alt="Card 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 3 */}
        <div className="card3 rounded-lg overflow-hidden w-80 h-72">
          <img
            src="/assests/student3.png"
            alt="Card 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Students;
