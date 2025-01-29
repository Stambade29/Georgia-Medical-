import React from "react";
import Image from "next/image";

const Universities = () => {
    return (
        <div className="relative bg-gray-100 mx-auto max-w-full overflow-hidden min-h-[450px]">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/assests/partners.png"
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            {/* Left Side Ellipse */}
            <div className="absolute w-[404px] h-[404px] top-[95px] left-[-51px] opacity-30">
                <Image
                    src="/assests/Ellipse 11.png"
                    alt="Left Side Ellipse"
                    width={404}
                    height={404}
                />
            </div>

            {/* Right Side Ellipse */}
            <div className="absolute w-[404px] h-[404px] top-[-50px] right-[-51px] opacity-30">
                <Image
                    src="/assests/Ellipse 12.png"
                    alt="Right Side Ellipse"
                    width={404}
                    height={404}
                />
            </div>

            {/* Central Content */}
            <div className="relative w-full text-center pt-12 z-10">
                <Image
                    src="/assests/partner_txt.png"
                    alt="Decorative line"
                    width={797}
                    height={62}
                    className="mx-auto"
                />
                <p className="text-center font-roboto text-[18px] font-normal leading-[28px] tracking-[0.015em] mt-4 mx-auto w-[90%] max-w-[550px]">
                    We are affiliated with these medical universities
                </p>
            </div>

            {/* Logos */}
            <div className="relative flex justify-center gap-8 flex-wrap mt-12 px-4">
                {["partners1.png", "partners2.png", "partners3.png", "partners4.png", "partners5.png"].map((logo, index) => (
                    <Image
                        key={index}
                        src={`/assests/${logo}`}
                        alt={`Logo ${index + 1}`}
                        width={160}
                        height={160}
                        className="w-[160px] h-[160px] object-contain"
                    />
                ))}
            </div>
        </div>
    );
};

export default Universities;
