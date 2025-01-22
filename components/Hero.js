// pages/index.js

export default function Home() {
  return (
    <div
      className="w-[1440px] h-[702px] bg-cover bg-center relative"
      style={{
        backgroundImage: 'url(/assets/Background.png)',
      }}
    >
      {/* Centered container */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div
          className="font-montserrat text-black text-[64px] font-semibold leading-[78.02px] tracking-[0.015em] text-left"
          style={{
            position: 'absolute',
            top: '137px',
            left: '128px',
            width: '535px',
            height: '234px',
            opacity: 1,
          }}
        >
          {/* Highlighted MBBS */}
          Study{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7183A] to-[#6C0216] relative inline-block">
            MBBS
            <img
              src="/assets/Vector (1).svg"
              alt="Stethoscope"
              style={{
                position: 'absolute',
                top: '-18px',
                left: '60px',
                width: '49px', // Adjusted width to 49px
                height: '49px', // Adjusted height to 49px
                opacity: 1, // Ensure it's visible
                transform: 'rotate(-15deg)', // Keeps rotation
                background: '#C7183A', // Background color
              }}
            />
          </span>{" "}
          Course in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7183A] to-[#6C0216]">
            Georgia
          </span>
        </div>
      </div>
    </div>
  );
}
