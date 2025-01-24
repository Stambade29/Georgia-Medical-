import React from "react";
import Image from "next/image";

// Card Component
const Card = ({ imageSrc, universityName, fee, duration }) => {
  return (
    <div
      className="relative rounded-lg overflow-hidden"
      style={{
        width: "281px", // Width
        height: "356px", // Height
        borderRadius: "10px", // Border radius for the entire card
        background: "rgba(253, 255, 255, 1)", // Background color
        boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.3)", // Drop shadow
      }}
    >
      {/* Image Section */}
      <div
        style={{
          position: "absolute",
          top: "-24px",
          left: "-44px",
          width: "355px",
          height: "201px",
        }}
      >
        <Image
          src={imageSrc} // Use the image passed as prop
          alt="Card Image"
          layout="intrinsic"
          width={355}
          height={201}
          className="rounded-t-lg object-cover"
        />
      </div>

      {/* Card Content */}
      <div style={{ position: "relative", top: "185px", padding: "16px" }}>
        <h2
          className="font-roboto text-[20px] font-semibold leading-[23.44px] tracking-[0.015em] text-left"
          style={{ color: "rgba(199, 24, 58, 1)" }} // Set color for university name
        >
          {universityName}
        </h2>
        <p className="text-gray-900">
          <span className="font-semibold">Fee Structure: </span>{fee}
        </p>
        <p className="text-gray-900">
          <span className="font-semibold">Duration: </span>{duration}
        </p>
        <div className="flex justify-between mt-1">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            style={{ backgroundColor: "rgba(199, 24, 58, 1)" }} // Set background for "Apply Now"
          >
            Apply Now
          </button>
          <button className="text-red-700 font-bold py-2 px-4 rounded border border-red-500">
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
    <div className="flex flex-wrap justify-center gap-6 mt-4" style={{ transform: "translateY(-48px)" }}>
      {/* Pass different data to each card */}
      <div className="flex items-center justify-center">
        <Card
          imageSrc="/assets/card.png"
          universityName="Tashkent Medical Academy"
          fee="₹5,22,111/-"
          duration="4 years"
        />
      </div>
      <div className="flex items-center justify-center">
        <Card
          imageSrc="/assets/card.png"
          universityName="Samarkand State Medical Institute"
          fee="₹5,22,111/-"
          duration="4 years"
        />
      </div>
      <div className="flex items-center justify-center">
        <Card
          imageSrc="/assets/card.png"
          universityName="Andijan State Medical Institute"
          fee="₹5,22,111/-"
          duration="4 years"
        />
      </div>
      <div className="flex items-center justify-center">
        <Card
          imageSrc="/assets/card.png"
          universityName="Bukhara State Medical Institute"
          fee="₹5,22,111/-"
          duration="4 years"
        />
      </div>
    </div>
  );
};

// Page Content
const PageContent = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      {/* Page Title Section */}
      <h1 className="font-roboto text-4xl font-semibold text-center decoration-red-500">
        Explore <span className="underline text-red-500 rounded-full">Medical Universities</span> in Georgia
      </h1>
      <h4 className="font-roboto w-[480px] h-28 mt-6 font-normal leading-7 tracking-tighter text-center text-lg">
        We are affiliated with these medical universities
      </h4>

      {/* Card Grid Section */}
      <CardGrid />
    </div>
  );
};

export default PageContent;
