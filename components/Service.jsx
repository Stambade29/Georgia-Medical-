import React from 'react';
import Image from 'next/image';

const Service = () => {
  return (
    <div className="relative w-full max-w-[1440px] h-[400px] mx-auto overflow-hidden">
      {/* Darker overlay behind the background image */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Background image */}
      <Image
        src="/assests/service1.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="opacity-40"
      />

      {/* Image Container */}
      <div className="relative flex justify-center items-center gap-8 w-full mt-[50px] px-8">
        {["1.png", "2.png", "3.png", "4.png"].map((img, index) => (
          <div key={index} className="w-[204px] h-[245px]">
            <Image
              src={`/assests/${img}`}
              alt={`Image ${index + 1}`}
              width={204}
              height={245}
              className="w-full h-full object-cover rounded-[14px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
