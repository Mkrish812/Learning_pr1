import {
  BarChart2,
  BarChart3,
  Check,
  TrendingUp,
  Search,
  Code2,
  Link,
  Layout,
  Ticket,
} from "lucide-react";
import { useState } from "react";
import CountUp from "react-countup";
import { Element } from "react-scroll";

export default function Pricing() {
  const [selected, setSelected] = useState('monthly');

  const handleChange = (e) => {
    setSelected(e.target.value);
    console.log(e.target.value);
    
  };


  const pricingPlans = [
    {
      name: "Standard",
      image: "assets/vector-1.png",
      Mprice: 199,
      Yprice: 1000,
      
      features: [
        "1 Gb Storage",
        "3 Domain Names",
        "5 FTP Users",
        "Free Support",
        "Free SSI Certificate",
      ],
      cta: "Buy Standard",
    },
    {
      name: "Premium",
      image: "assets/vector-2.png",
      Mprice: 299,
      Yprice: 3000,
      features: [
        "1 Gb Storage",
        "3 Domain Names",
        "5 FTP Users",
        "Free Support",
        "Free SSI Certificate",
      ],
      cta: "Buy Premium",
    },
    {
      name: "Enterprise",
      image: "assets/vector-3.png",
      Mprice: 399,
      Yprice: 4000,
      
      features: [
        "1 Gb Storage",
        "3 Domain Names",
        "5 FTP Users",
        "Free Support",
        "Free SSI Certificate",
      ],
      cta: "Buy Enterprise",
    },
  ];

  return (
    <Element
      name="pricing"
      className="flex flex-col justify-center items-center py-16 px-5 "
    >
      <h1 className="text-primery-blue">Pricing</h1>
      <p className="text-2xl font-semibold text-center">
        Get the power of the professional services with the simple Mprice
      </p>

      <div className="flex space-x-1 border-[0.6px] border-gray-300 rounded-lg px-1 py-1">
        <input
          type="radio"
          name="pricing"
          id="monthly"
          value="monthly"
          checked={selected === "monthly"}
          className="hidden peer/monthly"
          onChange={handleChange}
        />
        <label
          htmlFor="monthly"
          className="cursor-pointer text-sm px-5 py-2 rounded-lg peer-checked/monthly:bg-custom-end peer-checked/monthly:text-white transition"
        >
          Monthly
        </label>

        <input
          type="radio"
          name="pricing"
          id="yearly"
          value="yearly"
          checked={selected === "yearly"}
          className="hidden peer/yearly"
          onChange={handleChange}
        />
        <label
          htmlFor="yearly"
          className="cursor-pointer text-sm px-5 py-2 rounded-lg peer-checked/yearly:bg-custom-end peer-checked/yearly:text-white transition"
        >
          Yearly
        </label>
      </div>

      <p className="text-gray-500">Save up to 15% with Annual Plan.</p>

      <div className="flex flex-col md:px-10 md:flex-wrap  md:flex-row w-full  gap-10 md:gap-y-20 mt-5 md:mt-10 justify-center items-center ">
        {pricingPlans.map((prc) => (
          <div
            key={prc.name}
            className= {`flex relative flex-col md:flex-1 w-full md:min-w-xs  py-10 px-5 gap-2 items-center h-150 rounded-xl shadow-2xl transition-all duration-700 ease-in-out
             ${selected==="yearly"? "bg-gradient-to-r from-custom-start  via-custom-middle to-custom-end text-white " : "bg-white" } `}
          >
            <img className=" w-28 " src={prc.image} alt="" />
            <h1 className="text-2xl font-bold ">{prc.name}</h1>
            <h1 className="text-3xl font-bold ">
              <span className="text-lg"> &#x20B9;</span>
             
             {selected === "monthly" ? 
             <CountUp
                end={prc.Mprice}
                duration={2}
                enableScrollSpy
                scrollSpyOnce
              /> :
              <CountUp
                end={prc.Yprice}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
              />

              }
              
            </h1>
            <h1 className="text-sm text-gray-400">Per {selected}</h1>
            <div className="flex flex-col justify-start gap-2 mt-4">
              {prc.features.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <Check
                    strokeWidth={1.25}
                    className="text-blue-700"
                    size={14}
                  />
                  <p className="">{f}</p>
                </div>
              ))}
            </div>
            <button className={` py-2 px-5 inset-x-5 absolute bottom-5 rounded-md  cursor-pointer
             ${selected==="yearly"? "bg-white text-custom-end" : "bg-gradient-to-r from-custom-start  via-custom-middle to-custom-end text-white"} `}  >
              Buy
            </button>
          </div>
        ))}
      </div>
    </Element>
  );
}
