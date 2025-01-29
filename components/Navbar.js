import React from "react";
import Link from "next/link";
import Image from "next/image";

const Frame = () => {
  return (
    <header className="w-full max-w-[1440px] h-[81px] bg-white shadow-md flex items-center mx-auto px-6 overflow-hidden">
      {/* Logo */}
      <div className="w-[223px] h-[31px]">
        <Image
          src="/Logo.png"
          alt="Georgia Medi Logo"
          width={223}
          height={31}
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-10 ml-auto">
        {[
          { name: "Home", href: "/", active: true },
          { name: "About Us", href: "/about-us" },
          { name: "Universities", href: "/universities" },
          { name: "Countries", href: "/countries" },
          { name: "Blogs", href: "/blogs" },
          { name: "Gallery", href: "/gallery" },
          { name: "Contact Us", href: "/contact-us" },
        ].map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`${
              link.active ? "text-red-500 font-bold" : "text-black"
            } hover:text-red-500 h-[31px] flex items-center`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Frame;
