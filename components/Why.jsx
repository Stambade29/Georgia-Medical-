import React from 'react'
import Image from 'next/image'

const Why = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white p-6">
      {/* Left Section */}
      <div className="flex-1 space-y-6 left-50 w-96 ml-20 ">
        <h2 className="text-2xl font-bold">Why <span className=' text-rose-600 underline'>Georgia Medi?</span></h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Image
              src="/assests/why1.png" // Replace with actual logo path
              alt="Icon"
              width={30}
              height={30}
              className="w-8 h-8"
            />
            <div>
              <h3 className="font-semibold">Guaranteed Admission with Low Fees</h3>
              <p className="text-gray-600">
                Admission to top MBBS universities in Uzbekistan with <br/>
                affordable fees for Indian students.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Image
              src="/assests/why2.png" // Replace with actual path
              alt="Icon"
              width={30}
              height={30}
              className="w-8 h-8"
            />
            <div>
              <h3 className="font-semibold">Complete Support for Documentation</h3>
              <p className="text-gray-600">
                We provide end-to-end support for the necessary <br/>
                documentation required for MBBS admissions.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Image
              src="/assests/why3.png" // Replace with actual path
              alt="Icon"
              width={30}
              height={30}
              className="w-8 h-8"
            />
            <div>
              <h3 className="font-semibold">Affordable Fees</h3>
              <p className="text-gray-600">
                Studying abroad becomes easy with low tuition fees and <br/>
                reasonable living costs.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Image
              src="/assests/why4.png" // Replace with actual path
              alt="Icon"
              width={30}
              height={30}
              className="w-8 h-8"
            />
            <div>
              <h3 className="font-semibold">Free Counseling & Career Guidance</h3>
              <p className="text-gray-600">
                We offer personalized counseling and guidance to help <br/>
                 students build a successful medical career.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="px-6 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition">
          Read more
        </button>
      </div>

      {/* Right Section */}
      <div className="flex-1 mr-20">
        <Image
          src="/assests/why.png" // Replace with the actual image path
          alt="Doctors"
          width={656.7}
          height={552}
        />
        
      </div>
    </div>
  )
}

export default Why