import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";
import Services from "./components/Services";
import Focused from "./components/Features";
import ParllXScroll from "./components/ParllXScroll";
import OneService from "./components/About";
import { ArrowUp } from "lucide-react";
import Pricing from "./components/Pricing";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import OurClient from "./components/Testimonials";








export default function App() {
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <> 
    <div className="min-[100vh] lg:h-screen  bg-gradient-to-r from-custom-start  via-custom-middle to-custom-end justify-between items-center pb-10 ">
      <NavBar isScrolled={isScrolled} />
      <HeroBanner />
    </div>
     <Services />
     <Focused />
     <ParllXScroll />
     <OneService />
     <Pricing />
     <Faqs />
     <OurClient />
     <Footer />
     
     
     {isScrolled ? <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-14 cursor-pointer right-5 z-50 text-white bg-primery-blue p-2 rounded-md"> <ArrowUp /> </button>: null }
     
    </>
   
  );
}
