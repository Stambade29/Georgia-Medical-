import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Card from "../components/Card";
import Why from "../components/Why";
import Service from "../components/Service";
import Services from "../components/Services";
import Students from "../components/Students";
import Partner from "../components/partner";
import Blog from "../components/Blog";
import PhotoGallery from "../components/photogallery";
import FAQ from "../components/FAQ";
import Appform from "../components/Appform";
import Footer from "../components/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      {/* <Navbar />  */}
      <Navbar />

      {/* <Hero />  */}
      <Hero />

      {/* <AboutUs />  */}
      <AboutUs />

      {/* <Card />  */}
      <Card />

      {/* <Why page />  */}
      <Why />

      {/*<Service/>*/}

      <Service/>

      {/*<Services/> */}
      <Services/>




      {/*<Partner/>*/}
      <Partner/>

      {/*<Students/>*/}
      <Students/>

      {/*<Blog/> */}
      <Blog/>

    {/* Photo Gallery */}
    <PhotoGallery />

    {/* FAQ */}
    <FAQ />
    
    {/* App Form */}
    <Appform/>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
