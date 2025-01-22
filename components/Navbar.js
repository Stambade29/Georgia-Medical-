import React from "react";
import Link from "next/link";
import Image from "next/image";

const Frame = () => {
  return (
    <header className="w-[1440px] h-[81px] bg-white shadow-[0px_4px_9.9px_0px_rgba(0,0,0,0.2)] flex items-center">
      {/* Logo */}
      <div className="relative ml-[120px] w-[223px] h-[31px]">
        <Image
          src="/Logo.png" // Replace 'logo.png' with your actual logo file in the public folder
          alt="Georgia Medi Logo"
          width={223}
          height={31}
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-[50px] ml-[76px]">
        <Link
          href="/"
          className="text-red-500 font-bold hover:text-red-600 h-[31px] flex items-center"
        >
          Home
        </Link>
        <Link
          href="/about-us"
          className="text-black hover:text-red-500 h-[31px] flex items-center"
        >
          About Us
        </Link>
        <Link
          href="/universities"
          className="text-black hover:text-red-500 h-[31px] flex items-center"
        >
          Universities
        </Link>
        <Link
          href="/countries"
          className="text-black hover:text-red-500 h-[31px] flex items-center"
        >
          Countries
        </Link>
        <Link
          href="/blogs"
          className="text-black hover:text-red-500 h-[31px] flex items-center"
        >
          Blogs
        </Link>
        <Link
          href="/gallery"
          className="text-black hover:text-red-500 h-[31px] flex items-center"
        >
          Gallery
        </Link>
        <Link
          href="/contact-us"
          className="text-black hover:text-red-500 h-[31px] flex items-center"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Frame;
