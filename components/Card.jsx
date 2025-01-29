import React from "react";
import Image from "next/image";

// Card Component (unchanged except for content adjustments)
const Card = ({ imageSrc, universityName, fee, duration }) => {
  return (
    <div
      className="relative rounded-lg overflow-hidden"
      style={{
        width: "240px", // Reduced width
        height: "300px", // Reduced height
        borderRadius: "10px", // Border radius for the entire card
        background: "rgba(253, 255, 255, 1)", // Background color
        boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.3)", // Drop shadow
      }}
    >
      {/* Image Section */}
      <div
        style={{
          position: "absolute",
          top: "-20px", // Adjusted position
          left: "-30px", // Adjusted position
          width: "300px", // Adjusted width
          height: "170px", // Adjusted height
        }}
      >
        <Image
          src={imageSrc} // Use the image passed as prop
          alt="Card Image"
          layout="intrinsic"
          width={300}
          height={170}
          className="rounded-t-lg object-cover"
        />
      </div>

      {/* Card Content */}
      <div
        style={{
          position: "relative",
          top: "170px", // Content moved further down
          padding: "12px",
        }}
      >
        <h2
          className="font-roboto text-[16px] font-semibold leading-[20px] tracking-[0.015em] text-left"
          style={{ color: "rgba(199, 24, 58, 1)" }} // Set color for university name
        >
          {universityName}
        </h2>
        <p className="text-gray-900 text-sm">
          <span className="font-semibold">Fee Structure: </span>{fee}
        </p>
        <p className="text-gray-900 text-sm">
          <span className="font-semibold">Duration: </span>{duration}
        </p>
        <div className="flex justify-between mt-1">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm"
            style={{ backgroundColor: "rgba(199, 24, 58, 1)" }} // Set background for "Apply Now"
          >
            Apply Now
          </button>
          <button className="text-red-700 font-bold py-1 px-3 rounded border border-red-500 text-sm">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

// Card Grid Component
const CardGrid = () => {
  return (
    <div
      className="flex flex-wrap justify-center gap-6"
      style={{ transform: "translateY(30px)" }} // Cards moved slightly upwards
    >
      {/* Pass different data to each card */}
      <div className="flex items-center justify-center">
        <Card
          imageSrc="/assests/card.png"
          universityName="Tashkent Medical Academy"
          fee="₹5,22,111/-"
          duration="4 years"
        />
      </div>
      <div className="flex items-center justify-center">
        <Card
          imageSrc="/assests/card.png"
          universityName="Samarkand State Medical Institute"
          fee="₹5,22,111/-"
          duration="4 years"
        />
      </div>
      <div className="flex items-center justify-center">
        <Card
          imageSrc="/assests/card.png"
          universityName="Andijan State Medical Institute"
          fee="₹5,22,111/-"
          duration="4 years"
        />
      </div>
      <div className="flex items-center justify-center">
        <Card
          imageSrc="/assests/card.png"
          universityName="Bukhara State Medical Institute"
          fee="₹5,22,111/-"
          duration="4 years"
        />
      </div>
    </div>
  );
};

// Page Content with adjusted text placement
const PageContent = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      {/* Page Title Section */}
      <div className="flex flex-col items-center">
        {/* Title Image */}
        <Image
          src="/assests/explore.png"
          alt="Explore"
          width={500}
          height={200}
          className="mb-4"
        />
        {/* Subheading Text */}
        <p
          className="font-roboto text-center"
          style={{
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "27.9px",
            letterSpacing: "0.015em",
            color: "rgba(40, 40, 40, 1)", // Black text
            textDecorationSkipInk: "none",
            marginTop: "8px", // Spacing below the image
          }}
        >
          We are affiliated with these medical universities
        </p>
      </div>

      {/* Card Grid Section */}
      <CardGrid />
    </div>
  );
};

export default PageContent;
