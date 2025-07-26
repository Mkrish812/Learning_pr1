import { Mail, Phone, Facebook, Twitter, Linkedin, Chrome } from "lucide-react";
import React from "react";
import { Element } from 'react-scroll';


export default function Footer() {
  return (
    <footer className=" bg-custom-middle    py-10 md:py-20  px-5 gap-10 md:px-20 flex flex-col flex-wrap lg:flex-row text-gray-300 relative ">
      <div className="flex flex-col text-sm gap-2 max-w-md ">
        <h1 className="font-bold text-white text-2xl">
          New<span className="text-primery-blue">World</span>
        </h1>
        <p>
          This may include the company's address, phone number, email address,
          and links to social media profiles.
        </p>
        <div className="flex gap-3 items-center">
          <Mail size={14} /> newWorld@gmail.com
        </div>
        <div className="flex gap-3 items-center">
          <Phone size={14} /> 9080177542
        </div>
      </div>

      <div className=" flex flex-col md:flex-row md:flex-1 flex-wrap gap-5 justify-between mb-10 ">
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-white  ">Company</h4>
          <p className="">About</p>
          <p className="">Services</p>
          <p className="">Portfolio</p>
          <p className="">Blog</p>
          <p className="">Contact</p>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-white">Product</h4>
          <p className="">Services</p>
          <p className="">About Us</p>
          <p className="">News & Stories</p>
          <p className="">Roadmap</p>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-white">Important Links</h4>
          <p className="">Our Journeys</p>
          <p className="">Roadmap</p>
          <p className="">Pricing Plans</p>
          <p className="">Privacy Policy</p>
          <p className="">Terms & Conditions</p>
        </div>
      </div>
      <div className="bg-custom-middle border-t-2 flex justify-between absolute bottom-0 w-full left-0 px-5 py-3 items-center ">
        <h1>2025© NewWorld.com</h1>
        <div className="flex gap-3 items-center">
          <Facebook className="p-2 rounded-md size-8 hover:bg-primery-blue" />
          <Twitter className="p-2 rounded-md size-8 hover:bg-primery-blue" />
          <Linkedin className="p-2 rounded-md size-8 hover:bg-primery-blue" />
          <Chrome className="p-2 rounded-md size-8 hover:bg-primery-blue" />
        </div>
      </div>
    </footer>
  );
}
