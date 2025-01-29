import React from 'react';
import Image from 'next/image';

const PhotoGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8 relative">
      {/* Main Heading */}
      <h1 className="font-roboto text-4xl font-semibold leading-[62px] tracking-[0.015em] text-center decoration-from-font">
        Recent Photo <span className="text-red-500">Gallery</span>
      </h1>

      {/* Subheading */}
      <p className="text-center text-gray-600 mt-2 mb-8">
        Celebrating Achievements, One Click at a Time!
      </p>

      {/* Image Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {/* vect_1.png */}
        <div
          className="absolute"
          style={{
            width: '304.68px',
            height: '298px',
            top: '19px',
            left: '75%',
            gap: '0px',
            border: '1px solid transparent',
            transform: 'rotate(-180deg)',
            visibility: 'visible',
          }}
        >
          <Image
            src="/assests/vect_1.png"
            alt="Vector 1 Background"
            layout="intrinsic"
            width={304.68}
            height={298}
          />
        </div>

        {/* vect_2.png */}
        <div
          className="absolute"
          style={{
            width: '304.68px',
            height: '298px',
            top: '50%',
            left: '2%px',
            gap: '0px',
            border: '1px solid transparent',
            transform: 'rotate(-180deg)',
            visibility: 'visible',
          }}
        >
          <Image
            src="/assests/vect_2.png"
            alt="Vector 2 Background"
            layout="intrinsic"
            width={304.68}
            height={298}
          />
        </div>
      </div>

      {/* Photo Container */}
      <div className="flex justify-center items-center gap-10 mt-[40px] overflow-x-auto relative z-10">
        {/* Image 1 - Medical Team Discussion */}
        <div className="relative w-[389px] h-[330px] rounded-tl-[10px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/assests/gallery_1.png"
            alt="Medical team having discussion in hospital corridor"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Image 2 - Doctors Reviewing X-ray */}
        <div className="relative w-[389px] h-[330px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/assests/gallery_2.png"
            alt="Doctors reviewing x-ray results"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Image 3 - Surgery Team */}
        <div className="relative w-[389px] h-[330px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/assests/gallery_3.png"
            alt="Surgery team performing operation"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* View More Button as single image */}
      <div className="flex justify-end mt-6">
        <div className="cursor-pointer hover:opacity-90 transition-opacity duration-300">
          <Image
            src="/assests/view_more.png"
            alt="View More Button"
            width={160}
            height={56}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;