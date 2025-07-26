import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Element } from "react-scroll";

export default function OurClient() {
  const [wDown, setDown] = useState(0);

  const handleDrop = (id) => {
    wDown === id ? setDown(0) : setDown(id);
  };
  const clients = [
    {
      id: 1,
      testimonial:
        "I am extremely delighated with the exceptional service provided by NioLand. Their expert support system, efficient tools, and strategic solutions have truly...",
      name: "Jimmy Bartney",
      title: "Product Manager At Picko Lab",
      image: "assets/client-03.jpg",
    },
    {
      id: 2,
      testimonial:
        "As a satisfied user, I can confidence say that my experience with NioLand has been outstanding. The service, support, and solutions provided have...",
      name: "Natasha Romanoff",
      title: "Black Widow",
      image: "assets/client-05.jpg",
    },
    {
      id: 3,
      testimonial:
        "I've tried many services, but none compare to the excellence provided here! From start to finish, the team has been attentive, professional, and committed to delivering the best results.",
      name: "Barbara McIntosh",
      title: "Senior Software Developer",
      image: "assets/client-03.jpg",
    },
    {
      id: 4,
      testimonial:
        "Without a doubt, Spend in stands out as the absolute best. Their exceptional quality, reliablity, and customer service are unmatched. I have complete...",
      name: "Moritika Kazuki",
      title: "Finance Manager at Mangan",
      image: "assets/client-05.jpg",
    },
  ];

  return (
    <Element name="testimonials" className="flex flex-col w-full justify-center items-center py-16 px-5 bg-white  ">
      <h1 className="text-primery-blue">Clients</h1>
      <p className="text-2xl font-semibold text-center">
      Clients review
      </p>

      <div className="flex  md:px-20 w-full py-10 ">
        <div className="flex px-5 hide-scrollbar overflow-x-auto ">
          {clients.map((cli) => (
            <div
              key={cli.id}
              className="mx-3  flex min-w-xs flex-col p-5 border border-gray-400 rounded-md  "
            >
              <p className="text-sm text-gray-400">{cli.testimonial}</p>
              <div className="flex gap-2 mt-3 items-center ">
                <img className="size-7 rounded-full " src={cli.image} alt="" />
                <div className="flex flex-col text-sm ">
                  <h3 className=" text-primery-blue font-bold ">
                    {cli.name}
                  </h3>
                  <p className="text-black font-bold ">{cli.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}
