import React, { useEffect, useRef } from "react";
import SimpleParallax from "simple-parallax-js";
import parlImg from '../assets/parll.jpg';


export default function ParllXScroll() {
  return (
    <div className="h-[60vh] overflow-y-hidden relative">
      <SimpleParallax  >
        <img className=" w-screen h-[70vh] object-center" loading="lazy" src={parlImg} alt="image" />
      </SimpleParallax>
      <div className='bg-custom-end/60  text-white flex flex-col gap-5 absolute inset-0 px-5 py-10 justify-center items-center '>
        <h1 className='text-2xl font-bold text-center '>A Detailed Examination Of A Specific Case</h1>
        <p className='text-center'>Together, we manage and empower markets by utilizing both established and emerging channels for potential growth.</p>
        <div className='flex gap-10'>
             <button className='font-medium py-2 px-3 rounded-xl text-white bg-custom-end hover:bg-indigo-700 '>Join Now</button>
             <button className='font-medium py-2 px-3 rounded-xl border-white border-2 bg-transparent hover:bg-white hover:text-custom-end '>Join Now</button>
        </div>
    </div>
    </div>
  );
}
