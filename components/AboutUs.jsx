import React from "react";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <section className="relative h-screen bg-gray-100 flex items-center justify-center">
      {/* Main Container */}
      <div className="relative w-full h-full">
        {/* Header Text - Why Study MBBS in Georgia? */}
        <div
          className="absolute flex justify-center items-center"
          style={{
            width: "620px",
            height: "62px",
            top: "23px",
            left: "489px",
          }}
        >
          <h1 className="text-[40px] font-semibold leading-[62px] tracking-wide font-roboto">
            Why Study MBBS in{" "}
            <span
              style={{
                color: "rgba(199, 24, 58, 1)", // Color for "Georgia"
                textDecorationColor: "rgba(199, 24, 58, 1)", // Underline color
                textDecorationLine: "underline",
                textDecorationSkipInk: "none", // Ensures no gaps in underline
              }}
            >
              Georgia
            </span>
            ?
          </h1>
        </div>

        {/* Left Section - Image 1 */}
        <div
          className="absolute"
          style={{
            width: "366px",
            height: "398.99px",
            top: "135px",
            left: "123px",
          }}
        >
          <Image
            src="/assests/about1.png" // Replace with your first image path
            alt="About Us Main"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Left Section - Image 2 (Overlapping Image) */}
        <div
          className="absolute"
          style={{
            width: "245px",
            height: "115px",
            top: "448px",
            left: "234px",
          }}
        >
          <Image
            src="/assests/about2.png" // Replace with your second image path
            alt="About Us Overlay"
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>

        {/* Right Section - Content */}
        <div
          className="absolute flex flex-col"
          style={{
            top: "135px",
            bottom: "121px",
            left: "520px",
            right: "100px",
          }}
        >
          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            {/* First Column */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/assests/Quality Badge.png"
                alt="Quality Badge"
                width={40}
                height={40}
                className="mb-2 -ml-60" // Added negative margin-left to move it left
              />
              <p className="text-gray-600">
                Get the best of quality education in Georgia
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                src="/assests/contract.png"
                alt="Direct Admission"
                width={40}
                height={40}
                className="mb-2  -ml-60"
              />
              <p className="text-gray-600">
                Direct Admission Students will get direct admission to the
                medical university of Georgia
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/assests/Budget.png"
                alt="Low Tuition"
                width={40}
                height={40}
                className="mb-2  -ml-60"
              />
              <p className="text-gray-600">
                Low tuition fee Medical universities in Georgia offer low-cost
                education to foreign students.
              </p>
            </div>

            {/* Second Column */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/assests/Shield.png"
                alt="Safety"
                width={40}
                height={40}
                className="mb-2 -ml-60"
              />
              <p className="text-gray-600">
                100% Safety Georgia is the safest European country.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/assests/Vector.png"
                alt="Worldwide Acceptance"
                width={40}
                height={40}
                className="mb-2 -ml-60"
              />
              <p className="text-gray-600">
                Worldwide acceptance MBBS degree in Georgia is accepted
                worldwide.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/assests/Hotel.png"
                alt="Living Costs"
                width={40}
                height={40}
                className="mb-2 -ml-60"
              />
              <p className="text-gray-600">
                Living & Accommodation Cost of living in Georgia is low, around
                62 USD.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          style={{
            width: "134px", // Width
            height: "45px", // Height
            padding: "10px 17px", // Padding
            gap: "10px", // Gap
            borderRadius: "5px 5px 5px 5px", // Border radius
            opacity: "1", // Fully visible
            backgroundColor: "rgba(199, 24, 58, 1)", // Background color
            color: "white", // Text color
            position: "absolute", // Positioning
            top: "557px", // From top
            bottom: "35px", // From bottom
            left: "545px", // From left
            right: "762px", // From right
            textAlign: "center", // Center the text
            fontFamily: "Roboto", // Font family
            fontSize: "20px", // Font size
            fontWeight: "500", // Font weight
            lineHeight: "24px", // Line height
            cursor: "pointer", // Pointer cursor on hover
          }}
        >
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
