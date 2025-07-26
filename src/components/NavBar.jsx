import { ArrowDownToLine, Menu, X } from "lucide-react";
import React from "react";
import { useState } from "react";
import { Link, Element } from "react-scroll";

export default function NavBar({ isScrolled }) {
  const [isMenu, setMenu] = useState(false);

  const deskNav = [
    "home",
    "services",
    "features",
    "about",
    "pricing",
    "testimonials",
    "blog",
    "contact",
  ];

  return (
    <>
      <nav
        className={`${
          isScrolled
            ? "bg-gradient-to-r from-custom-start  via-custom-middle to-custom-end shadow-md z-50 "
            : "bg-transparent"
        } hidden lg:flex justify-between px-5 py-5 fixed r-0 t-0 w-[100vw] transition-all duration-700 ease-in-out `}
      >
        <Link to="home">
          <h1 className="font-bold text-white text-2xl">
            New<span className="text-primery-blue">World</span>{" "}
          </h1>
        </Link>

        <div className="flex gap-7 items-center text-white">
          {deskNav.map((v) => (
            <Link
              key={v}
              to={v}
              spy={true}
              smooth={true}
              duration={500}
              activeClass="text-primery-blue border-b-2 border-primery-blue font-bold "
              className="hover:text-primery-blue capitalize py-1 transition-all duration-200 ease-out cursor-pointer "
            >
              {v}
            </Link>
          ))}
        </div>
        <button className="flex cursor-pointer justify-center items-center bg-primery-blue rounded-md px-3 py-1 gap-2 text-white font-bold ">
          <ArrowDownToLine strokeWidth={1.5} size={15} /> Download
        </button>
      </nav>
      {/* Mobile nav bar */}
      <nav
        className={`${
          isScrolled
            ? "bg-gradient-to-r from-custom-start  via-custom-middle to-custom-end shadow-md"
            : "bg-transparent"
        } transition-all duration-700 ease-in-out flex justify-between  px-5 py-5 fixed r-0 t-0 w-[100vw] lg:hidden z-40 `}
      >
        <Link to={"#"}>
          <h1 className="font-bold text-white text-2xl">
            New<span className="text-primery-blue">World</span>{" "}
          </h1>
        </Link>

        <Menu onClick={() => setMenu(true)} className="text-white " />
      </nav>

      <div
        className={`${
          isMenu ? "flex opacity-100 w-[60vw] px-5" : "w-0 overflow-hidden "
        } transition-all duration-300  ease-in-out  bg-gradient-to-r from-custom-start  via-custom-middle to-custom-end backdrop-blur-3xl  flex-col  py-3 fixed right-0  h-[100vh] z-50`}
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
          {deskNav.map((v) => (
            <Link
              key={v}
              to={v}
              spy={true}
              smooth={true}
              duration={500}
              activeClass="text-primery-blue border-b-2 border-white  font-bold "
              className="hover:text-primery-blue text-white mr-auto capitalize py-1 transition-all duration-200 ease-out cursor-pointer "
            >
              {v}
            </Link>
          ))}
          <button className="flex cursor-pointer justify-center items-center bg-primery-blue rounded-md px-3 py-1 gap-2   text-white mr-auto ">
            <ArrowDownToLine strokeWidth={1.5} size={15} /> Download
          </button>
        </div>
      </div>
    </>
  );
}
