import React from 'react'
import { Element } from 'react-scroll';


export default function Blogs() {

  return (
    <Element name='blog' className="flex flex-col  justify-center items-center py-16 px-5 bg-white  ">
      <h1 className="text-primery-blue">Blog</h1>
      <p className="text-2xl font-semibold text-center">
        FCheck the latest news about our company in our blog.
      </p>
       <div className="flex gap-10 md:px-10 justify-around flex-wrap my-10 ">
        <div className="flex flex-col w-80 md:w-sm md:min-w-sm  rounded-2xl border border-gray-400 ">
           <img src="assets/04.jpg" className='rounded-t-2xl ' alt="" />
           <div className="flex flex-col gap-5 px-10 py-5">
            <h1 className="text-xl font-bold ">Spotlight — Equinox Collection by Shane Griffin</h1>
            <p className="text-sm text-gray-400">As I searched for inspiration to get started, I came across the captivating creations of Shane Griffin, an artist and director located in New York City...</p>
            <div className="flex justify-between items-center text-sm">
              <div className="flex gap-3 items-center">
                  <img src="assets/client-05.jpg" className="size-10 rounded-full" alt="" />
                  <span className="font-bold cursor-pointer  ">Credon catla</span>
              </div>
              <span className="text-gray-500 font-bold ">August 2</span>

            </div>
           </div>
        </div>
        <div className="flex flex-col w-80 md:w-sm md:min-w-sm  rounded-2xl border border-gray-400 ">
           <img src="assets/04.jpg" className='rounded-t-2xl ' alt="" />
           <div className="flex flex-col gap-5 px-10 py-5">
            <h1 className="text-xl font-bold ">Spotlight — Equinox Collection by Shane Griffin</h1>
            <p className="text-sm text-gray-400">As I searched for inspiration to get started, I came across the captivating creations of Shane Griffin, an artist and director located in New York City...</p>
            <div className="flex justify-between items-center text-sm">
              <div className="flex gap-3 items-center">
                  <img src="assets/client-05.jpg" className="size-10 rounded-full" alt="" />
                  <span className="font-bold cursor-pointer  ">Credon catla</span>
              </div>
              <span className="text-gray-500 font-bold ">August 2</span>

            </div>
           </div>
        </div>
        <div className="flex flex-col w-80 md:w-sm md:min-w-sm  rounded-2xl border border-gray-400 ">
           <img src="assets/04.jpg" className='rounded-t-2xl ' alt="" />
           <div className="flex flex-col gap-5 px-10 py-5">
            <h1 className="text-xl font-bold ">Spotlight — Equinox Collection by Shane Griffin</h1>
            <p className="text-sm text-gray-400">As I searched for inspiration to get started, I came across the captivating creations of Shane Griffin, an artist and director located in New York City...</p>
            <div className="flex justify-between items-center text-sm">
              <div className="flex gap-3 items-center">
                  <img src="assets/client-05.jpg" className="size-10 rounded-full" alt="" />
                  <span className="font-bold cursor-pointer  ">Credon catla</span>
              </div>
              <span className="text-gray-500 font-bold ">August 2</span>

            </div>
           </div>
        </div>
   


       </div>
    
    </Element>
  );
}
