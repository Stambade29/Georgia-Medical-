import React from 'react';
import Image from 'next/image';

const App_form = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-[1197px] h-[470px] rounded overflow-hidden bg-gradient-to-b from-sky-50 to-sky-950 p-10 flex flex-col justify-center items-center">

        {/* Background Image */}
        <Image
          src="/assests/bg_vector.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-50"
        />

        {/* Main Heading (Centered) */}
        <h1 className="relative z-10 text-3xl font-bold text-sky-950 text-center mb-6">
          Get Personalized Guidance for Your MBBS Journey
        </h1>

        {/* Content Section */}
        <div className="relative z-10 flex w-full">

          {/* Left Side - Vector Image */}
          <div className="w-1/2 flex justify-center items-center relative">
            <Image
              src="/assests/vect_illu.png"
              alt="Vector Illustration"
              width={378} // Adjusted from 377.97px
              height={307} // Adjusted from 307.29px
              className="absolute " // Positioned 126px from the top
            />
          </div>

          {/* Right Side - Form */}
          <div className="w-1/2 flex flex-col justify-center items-start  p-6 rounded-xl ">
            <form className="w-full">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-500 rounded-lg mb-3"
              />
              <input
                type="text"
                placeholder="Your Mobile No."
                className="w-full p-3 border border-gray-500 rounded-lg mb-3"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-500 rounded-lg mb-3"
              />
              <input
                type="text"
                placeholder="Current City"
                className="w-full p-3 border border-gray-500 rounded-lg mb-4"
              />
              <button className="w-full p-3 bg-[#1A2F5A] text-white rounded-lg font-semibold transition duration-300 hover:bg-white hover:text-[#1A2F5A]  hover:border-[#1A2F5A]">
                Apply Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App_form;