import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full h-[529px] bg-[#021b4a] text-white flex flex-col justify-center items-center px-24 py-16">
      <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl pb-12">
        {/* About Section */}
        <div className="max-w-sm">
          <h2 className="text-lg font-bold">About Uzbekistan Medi</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus
            ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
          </p>
          <div className="flex mt-4 space-x-4 text-xl">
            <a href="#" className="hover:text-gray-400">
              <Image src="/assests/x.png" alt="Twitter" width={30  } height={30} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Image src="/assests/f.png" alt="Facebook"  width={15} height={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Image src="/assests/i.png" alt="Instagram" width={24} height={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Image src="/assests/g.png" alt="GitHub" width={24} height={24} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap md:flex-nowrap space-x-16 mt-12 md:mt-0">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Works</a></li>
              <li><a href="#" className="hover:underline">Career</a></li>
            </ul>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold">Help</h3>
            <ul className="mt-4 space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">Customer Support</a></li>
              <li><a href="#" className="hover:underline">Delivery Details</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="mt-4 space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">Free eBooks</a></li>
              <li><a href="#" className="hover:underline">Development Tutorial</a></li>
              <li><a href="#" className="hover:underline">How to - Blog</a></li>
              <li><a href="#" className="hover:underline">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <hr className="border-gray-600 w-full max-w-7xl" />
    </footer>
  );
}