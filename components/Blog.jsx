import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import BlogCard from "./Blog_card";
import BlogCard2 from "./Blog_card_2";

const Blogs = () => {
  return (
    <div className="bg-[#717171] flex flex-col items-center justify-start w-full relative overflow-hidden" style={{ height: "789px" }}>
      
      {/* Heading Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
        <h1 className="font-roboto text-4xl text-white font-semibold leading-[62px] tracking-[0.015em] text-center  mt-5 text-decoration-skip-ink-none ">
          Our Latest <span className=" text-rose-600 underline text-underline-position-from-font" >Blogs</span>
        </h1>
      </div>

      {/* Background image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/assests/blog_bg_img.png" // Ensure the path is correct
          alt="Background Image"
          layout="fill" // Ensures it covers the whole parent container
          objectFit="cover" // Maintains aspect ratio and covers the space
          className="opacity-100" // Ensures image is fully visible
        />
      </div>

      {/* Text */}
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[480px] text-white text-center font-roboto text-[18px] font-normal leading-[27.9px] tracking-[0.015em] z-10">
        Empowering Future Doctors with Valuable Information!
      </div>

      {/* Cards */}
      <div className="relative z-1 flex justify-center gap-6 mt-40 w-full px-4"> {/* Adjusted mt value */}
        <BlogCard />
        <BlogCard2 />
        <BlogCard />
      </div>

      {/* Navigation Buttons */}
      <div className="absolute flex items-center gap-4 bottom-8 left-1/2 -translate-x-1/2 z-10">
        {/* Left Arrow Button */}
        <button className="w-12 h-12 rounded-full bg-[#C7183A] flex justify-center items-center text-white">
          <FaChevronLeft size={20} />
        </button>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-gray-400 transition-colors duration-300" />
          ))}
        </div>

        {/* Right Arrow Button */}
        <button className="w-12 h-12 rounded-full bg-[#C7183A] flex justify-center items-center text-white">
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Blogs;
