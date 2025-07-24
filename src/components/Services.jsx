import {
  BarChart2,
  BarChart3,
  UserCheck,
  TrendingUp,
  Search,
  Code2,
  Link,
  Layout,
} from "lucide-react";
import React from "react";
import { Element } from 'react-scroll';


export default function Services() {
  const services = [
    {
      title: "Market Research",
      description:
        "Gain a comprehensive understanding of your industry landscape.",
      icon: <BarChart2 />,
    },
    {
      title: "User Experience",
      description:
        "Evaluate the viability and potential of new products or services.",
      icon: <UserCheck />,
    },
    {
      title: "Digital Marketing",
      description:
        "Benchmark your performance against competitors, identify strengths.",
      icon: <TrendingUp />,
    },
    {
      title: "SEO Services",
      description:
        "Anticipate market shifts and emerging trends to stay ahead of the curve.",
      icon: <Search />,
    },
    {
      title: "Market Researchs",
      description:
        "Our market research services are designed to provide maximum value.",
      icon: <BarChart3 />,
    },
    {
      title: "Software Development",
      description:
        "We go beyond data collection to provide actionable insights.",
      icon: <Code2 />,
    },
    {
      title: "Affiliate Marketing",
      description:
        "We understand that every business is unique. That's why we offer.",
      icon: <Link />,
    },
    {
      title: "Website Development",
      description: "In today's competitive market, timing is everything.",
      icon: <Layout />,
    },
  ];

  return (
    <Element name="services" className="flex flex-col justify-center items-center py-16 px-5 ">
      <h1 className="text-primery-blue">Services</h1>
      <p className="text-2xl font-semibold text-center">
        Build a customer - centric marketing strategy
      </p>
      <p className="text-gray-500 ">
        Ligula risus auctor tempus magna feugit lacinia.
      </p>

      <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-y-20 mt-5 md:mt-10 justify-center items-center">
        {services.map((ser) => (
          <div key={ser.title} className=" flex flex-col gap-2 items-center max-w-80 ">
            <div
              className="
              bg-indigo-100 text-primery-blue p-6 px-7  shadow-2xl
                rounded-tl-[40%] rounded-tr-[20%] rounded-br-[40%] rounded-bl-[60%] "
            >
              {ser.icon}
            </div>
            <h1 className="font-bold text-black text-xl ">{ser.title}</h1>
            <p className="text-center text-gray-500">{ser.description}</p>
          </div>
        ))}
      </div>
    </Element>
  );
}
