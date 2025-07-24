import { Smartphone, File, Rocket, Lock } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { Element } from "react-scroll";


export default function OneService() {
  const context = [
    {
      title: "1. Download",
      description:
        "Join the millions already benefitting from.",
      icon: <Smartphone />,
      color:'bg-green-100'
    },
    {
      title: "2. Set Profile",
      description:
        "Join the millions already benefitting from.",
      icon: <File />,
      color:'bg-red-100'
    },
    {
      title: "3. Start",
      description:
        "Join the millions already benefitting from.",
      icon: <Rocket />,
      color:'bg-indigo-100'
    },
  ];

  return (
    <Element name="about" className="flex flex-col lg:flex-row justify-center md:justify-between py-10 px-10 md:px-40 md:gap-20  mx-auto ">
          <div className="flex flex-col gap-10 mt-5 lg:max-w-[40vw] md:py-10 ">
        <div className="flex flex-col gap-3 ">
          <h1 className="text-primery-blue">Services</h1>
          <p className="text-4xl font-semibold">
            Get Started In Minutes: Download The App, Create Your Profile
          </p>
          <p className="text-gray-500 ">
           Digital payment has revolutionized the way we make financial transactions today With Rible you can enjoy the convenience of making secure & hassle-free payments online. Our platform provides you with a quick and eary.
          </p>
          <Link
            className=" flex items-center text-primery-blue gap-2 text-xs cursor-pointer "
            to={"#"}
          >
            Learn More
          </Link>
          <div className="h-[0.5px] mt-5 bg-gray-300 "></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {context.map((ser) => (
            <div key={ser.title} className="flex flex-col gap-5 max-w-100">
              <div className={`rounded-full  mr-auto shadow-md ${ser.color}   p-3 my-auto`} >
                {ser.icon}
              </div>
              <div className="flex flex-col ">
                <h1 className="font-bold text-black text-xl ">{ser.title}</h1>
                <p className="text-sm text-gray-500">{ser.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-7">
        <img
          className="w-110 rounded-xl"
          src="assets/feature-iphone.png"
          alt=""
        />
      </div>

 
    </Element>
  );
}
