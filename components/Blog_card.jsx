import React from 'react';
import Image from 'next/image';

const BlogCard = () => {
  return (
    <div
      className="bg-white shadow-md overflow-hidden"
      style={{
        width: '366.79px',
        height: '513px',
        borderRadius: '10px', // Proper rounding of the card corners
      }}
    >
      {/* Centered Image Section */}
      <div
        className="flex items-center justify-center"
        style={{
          width: '100%',
          height: '203.98px',
          padding: '14.98px',
          boxSizing: 'border-box',
        }}
      >
        <div
          className="relative"
          style={{
            width: '100%',
            height: '100%',
            maxWidth: '336.82px',
            maxHeight: '100%',
            borderRadius: '10px', // Matching corner radius for the image section
          }}
        >
          <Image
            src="/assests/card_img_01.png"
            alt="A descriptive image"
            layout="fill"
            style={{
              objectFit: 'cover',
              borderRadius: '10px', // Matching image border-radius with the card
            }}
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="px-6 py-4 flex-grow">
        <h2 className="text-xl font-bold text-gray-800 leading-tight">
          5 Reasons to Study MBBS in Russia
        </h2>
        <p className="mt-2 text-gray-600 text-sm">
          Discover why Uzbekistan is the perfect destination for aspiring doctors with affordable fees and globally recognized degrees.
        </p>

        {/* Profile Photo, Author Name, and Date on One Line */}
        <div className="flex items-center mt-4 space-x-3">
          <div className="flex-shrink-0">
            <Image
              src="/assests/author_img.png"
              alt="Tracey Wilson"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <p
              className="text-sm text-gray-900"
              style={{
                fontFamily: 'Work Sans, sans-serif',
                fontSize: '14.97px',
                fontWeight: 500,
                lineHeight: '22.46px',
              }}
            >
              Tracey Wilson
            </p>
          </div>
          <div className="text-sm text-gray-500">
            <p>Dec 26, 2024</p>
          </div>
        </div>
      </div>

      {/* Button Section (Centered) */}
      <div className="flex justify-center pb-4">
        <button
          className="font-bold text-white"
          style={{
            width: '134px',
            height: '40px',
            padding: '10px 17px',
            gap: '10px',
            borderRadius: '10px',
            backgroundColor: '#C7183A',
            opacity: 1,
          }}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;