import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen bg-gray-100 flex items-center justify-center">
      {/* Main Hero Image */}
      <Image
        src="/assests/Hero.png" // Replace with your hero image path
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="absolute"
      />

      {/* Arrow Overlay */}
      <div
        className="absolute"
        style={{
          top: "13px", // Positioning the arrow partially within the hero image
          left: "50%", // Center horizontally
          transform: "translateX(-50%)", // Center alignment
        }}
      >

      </div>

      {/* Logo at the bottom center of Hero Section */}
      <div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
        style={{
          zIndex: 1, // Ensure the logo is on top
        }}
      >
        <Image
          src="/assests/Arrow.png" // Replace with your logo image path
          alt="Logo"
          width={34} // Adjust the size of the logo
          height={38} // Adjust the size of the logo
        />
      </div>
    </div>
  );
};

export default Hero;
