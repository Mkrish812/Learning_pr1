import { ArrowDownToLine, Menu, X } from "lucide-react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router";

export default function NavBar({ isScrolled }) {
  const [isMenu, setMenu] = useState(false);

  return (
    <>
      <nav
        className={`${
          isScrolled
            ? "bg-gradient-to-r from-custom-start  via-custom-middle to-custom-end shadow-md z-50 "
            : "bg-transparent"
        } hidden md:flex justify-between px-5 py-5 fixed r-0 t-0 w-[100vw] transition-all duration-700 ease-in-out `}
      >
        <Link to={"#"}>
         <h1 className="font-bold text-white text-2xl">New<span className="text-primery-blue">World</span> </h1>
        </Link>
        <div className="flex gap-5 items-center text-white">
          <Link className="hover:text-primery-blue " to={"#"}>
            Home
          </Link>
          <Link className="hover:text-primery-blue " to={"#"}>
            services
          </Link>
          <Link className="hover:text-primery-blue" to={"#"}>
            Features
          </Link>
          <Link className="hover:text-primery-blue" to={"#"}>
            About
          </Link>
          <Link className="hover:text-primery-blue" to={"#"}>
            Pricing
          </Link>
        </div>
        <button className="flex cursor-pointer justify-center items-center bg-primery-blue rounded-md px-3 py-1 gap-2 text-white font-bold ">
          <ArrowDownToLine strokeWidth={1.5} size={15} /> Download
        </button>
      </nav>
{/* Mobile nav bar */}
      <nav
        className={`${
          isScrolled ? "bg-gradient-to-r from-custom-start  via-custom-middle to-custom-end shadow-md" : "bg-transparent"
        } transition-all duration-700 ease-in-out flex justify-between  px-5 py-5 fixed r-0 t-0 w-[100vw] md:hidden z-40 `}
      >
        <Link to={"#"}>
                 <h1 className="font-bold text-white text-2xl">New<span className="text-primery-blue">World</span> </h1>
        </Link>

        <Menu onClick={() => setMenu(true)} className="text-white " />
      </nav>

      <div
        className={`${
          isMenu ? "flex opacity-100 w-[60vw] px-5" : "w-0 overflow-hidden "
        } transition-all duration-300  ease-in-out  bg-transparent backdrop-blur-3xl  flex-col  py-3 fixed right-0  h-[100vh] z-50`}
      >
        <X
          onClick={() => setMenu(false)}
          className={`${
            isMenu ? "scale-100 rotate-0 " : "scale-0 rotate-180  "
          } text-white absolute right-5 size-7 transition-all duration-300  ease-in-out  `}
        />
        <div
          className={`${
            isMenu ? "flex opacity-100 w-[60vw] px-5" : "w-0 overflow-hidden "
          } flex-col gap-5 py-10 `}
        >
          <Link className="hover:text-primery-blue text-white" to={"#"}>
            Home
          </Link>
          <Link className="hover:text-primery-blue text-white" to={"#"}>
            services
          </Link>
          <Link className="hover:text-primery-blue text-white" to={"#"}>
            Features
          </Link>
          <Link className="hover:text-primery-blue text-white" to={"#"}>
            About
          </Link>
          <Link className="hover:text-primery-blue text-white" to={"#"}>
            Pricing
          </Link>
          <button className="flex cursor-pointer justify-center items-center bg-primery-blue rounded-md px-3 py-1 gap-2   text-white mr-auto ">
            <ArrowDownToLine strokeWidth={1.5} size={15} /> Download
          </button>
        </div>
      </div>
    </>
  );
}
