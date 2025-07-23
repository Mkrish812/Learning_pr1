import { MoveRight, Check, Layers, Lock } from "lucide-react";
import React from "react";
import { Link } from "react-router";

export default function FocusedOn() {
  const context = [
    {
      title: "Manage markets with empowerment",
      description:
        "Empower yourself to effectively manage markets with confidence. utilizing strategic insights and resources for success.",
      icon: <Check />,
    },
    {
      title: "Manage your design and architecture",
      description:
        "Achieve task completion optimization by effectively managing time and resources, ensuring timely delivery and efficiency.",
      icon: <Layers />,
    },
    {
      title: "Presentations in real-time",
      description:
        "Empower yourself to effectively manage markets with confidence. utilizing strategic insights and resources for success.",
      icon: <Lock />,
    },
  ];

  return (
    <section className="flex flex-col md:flex-row justify-center md:justify-between py-10 px-10 md:px-40 md:gap-20  mx-auto ">
      <div className="  flex justify-center items-center">
        <img
          className="w-110 rounded-xl shadow-2xl "
          src="assets/feature.jpg"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-10 mt-5 lg:max-w-[40vw] md:py-10 ">
        <div className="flex flex-col gap-3 ">
          <h1 className="text-primery-blue">Focused on achievind</h1>
          <p className="text-4xl font-semibold">
            Achievement Via Our Distinct Methodology
          </p>
          <p className="text-gray-500 ">
            Ligula risus auctor tempus magna feugit lacinia.
          </p>
          <Link
            className=" flex items-center text-primery-blue gap-2 text-xs cursor-pointer "
            to={"#"}
          >
            Learn More
          </Link>
          <div className="h-[0.5px] mt-5 bg-gray-300 "></div>
        </div>

        <div className="flex flex-col gap-10">
          {context.map((ser) => (
            <div key={ser.title} className="flex gap-5 max-w-100">
              <div className="rounded-full border border-dotted border-primery-blue bg-indigo-100  p-3 my-auto ">
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
    </section>
  );
}
