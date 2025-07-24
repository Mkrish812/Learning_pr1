import { Headset, Box } from "lucide-react";
import React, { useEffect } from "react";
import { Element } from 'react-scroll';


export default function HeroBanner() {
   
  return (
    <Element name="home" className=" pt-20 px-5 md:px-20">
      <div className="flex flex-col gap-5 md:flex-row items-center justify-between  ">
        <div className="flex flex-col gap-2 md:max-w-[60vw]  ">
          <span className=" md:text-2xl text-white ">
            The Best Online Furniture Store
          </span>
          <h1 className="text-5xl font-bold text-white mt-7">
            The Best Selection of
            <span className="text-primery-blue">Furniture Online</span>
          </h1>
          <p className="text-white/30 ">
            Online furniture apps simplify home shopping with convenience,
            variety, and affordability. Browse easily, compare prices. variety,
            and affordability. Browse easily, compare prices.
          </p>
          <div className="flex gap-5 mt-10 justify-center md:justify-start items-center">
            <img src="assets/store.png" className="w-36 " alt="" />
            <img src="assets/google.png" className="w-36 " alt="" />
          </div>
        </div>
        <div className="relative z-0">
           <img src="assets/furniture.png" className="w-72 lg:mr-20" alt="" />
           <div className=" text-xs hidden lg:flex absolute bottom-32 -left-28  gap-3 items-center py-2 px-3 rounded-3xl shadow-lg bg-white "> <Headset className="bg-primery-blue text-white size-7 p-2 rounded-full " /> <span className="">Express Delivery Service</span> </div>
           <div className=" text-xs hidden lg:flex absolute top-32 right-0  gap-3 items-center py-2 px-3 rounded-3xl shadow-lg bg-white "> <Box className="bg-primery-blue text-white size-7 p-2 rounded-full " /> <span className="">Express Delivery Service</span> </div>
        </div>
      </div>
    </Element>
  );
}
