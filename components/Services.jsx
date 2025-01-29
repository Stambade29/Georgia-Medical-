import React from 'react';

export const Services = () => {
  return (
    <div className="flex flex-col items-center  bg-gradient-to-br from-[#F1F5F7] via-[#EDE3E3] to-[#E57373]
">
      <img src="/assests/Services.png" alt="Services" className="my-4" />

      <div className="grid grid-cols-3 gap-4 mt-6">
        {/* Card 1 with smaller size, moved to the right */}
        <div className="card1 rounded-lg overflow-hidden shadow-lg w-64 h-64 ml-auto">
          <img src="/assests/card1.png" alt="Card 1" className="w-full h-full object-cover" />
        </div>

        {/* Card 2 with increased size and moved slightly up */}
        <div className="card2 relative -mt-10">
          <img src="/assests/card2.png" alt="Card 2" className="w-full max-w-md" />
        </div>

        {/* Card 3 with smaller size, moved closer to card 2 */}
        <div className="card3 rounded-lg overflow-hidden shadow-lg w-64 h-64 mr-2">
          <img src="/assests/card3.png" alt="Card 3" className="w-full h-full object-cover" />
        </div>

        {/* Card 4 with smaller size, moved to the right */}
        <div className="card4 rounded-lg overflow-hidden shadow-lg w-64 h-64 ml-auto">
          <img src="/assests/card4.png" alt="Card 4" className="w-full h-full object-cover" />
        </div>

        {/* Card 5 with increased size and moved slightly up */}
        <div className="card5 relative -mt-10">
          <img src="/assests/card5.png" alt="Card 5" className="w-full max-w-md" />
        </div>

        {/* Card 6 with smaller size, moved closer to card 5 */}
        <div className="card6 rounded-lg overflow-hidden shadow-lg w-64 h-64 mr-2">
          <img src="/assests/card6.png" alt="Card 6" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Services;
