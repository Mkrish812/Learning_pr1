import { MapPin, Mail, Phone, Send } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";
import { Element } from "react-scroll";

export default function Contact() {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    phonNo: "",
    message: "",
  });

  const handelChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
     e.preventDefault();
    console.log(contactData); 
    setContactData({
    firstName: "",
    lastName: "",
    emailId: "",
    phonNo: "",
    message: "",
  });
  };
  
  const contactInfo = [
    {
      title: "123 King Street, London W60 10250",
      description: "See more",
      icon: <MapPin />,
      color: "bg-green-100",
    },
    {
      title: "support@zoyothemes.com",
      description: "Say hello",
      icon: <Mail />,
      color: "bg-red-100",
    },
    {
      title: "(+01) 1234 5678 00",
      description: "Call now",
      icon: <Phone />,
      color: "bg-indigo-100",
    },
  ];

  return (
    <Element
      name="about"
      className="flex flex-col lg:flex-row justify-center md:justify-between py-10  md:gap-20  mx-auto bg-[#f7f9fa] "
    >
      <div className="flex flex-col gap-10 mt-5 lg:max-w-[40vw] md:py-10 px-10 md:px-40 ">
        <div className="flex flex-col gap-3 ">
          <h1 className="text-primery-blue">Contact Us</h1>
          <p className="text-4xl font-semibold">
            We're open to talk to good people.
          </p>
        </div>

        <div className="flex flex-col  gap-5">
          {contactInfo.map((ser) => (
            <div key={ser.title} className="flex flex-col gap-5 max-w-100">
              <div
                className={`rounded-full  mr-auto shadow-md ${ser.color}   p-3 my-auto`}
              >
                {ser.icon}
              </div>
              <div className="flex flex-col ">
                <h1 className="font-bold text-gray-500  ">{ser.title}</h1>
                <p className="text-sm text-primery-blue cursor-pointer ">
                  {ser.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-7 mx-5  ">
        <form className="flex flex-1 flex-row flex-wrap gap-5 bg-white px-5 md:px-10 rounded-md py-10 relative pb-20 shadow-lg shadow-black/20 ">
          <div className="flex flex-col gap-2 md:min-w-80 flex-1">
            <label className="text-sm font-bold" htmlFor="firstName">
              Frist Name
            </label>
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded-md py-2 px-5 focus:outline-0 text-sm "
              value={contactData.firstName}
              onChange={handelChange}
            />
          </div>
          <div className="flex flex-col gap-2 md:min-w-80 flex-1">
            <label className="text-sm font-bold" htmlFor="lastName">
              Last Name
            </label>
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded-md py-2 px-5 focus:outline-0 text-sm"
              value={contactData.lastName}
              onChange={handelChange}
            />
          </div>
          <div className="flex flex-col gap-2 md:min-w-80 flex-1">
            <label className="text-sm font-bold" htmlFor="emailId">
              Email ID
            </label>
            <input
              name="emailId"
              type="text"
              placeholder="Email Id"
              className="border border-gray-300 rounded-md py-2 px-5 focus:outline-0 text-sm "
              value={contactData.emailId}
              onChange={handelChange}
            />
          </div>
          <div className="flex flex-col gap-2 md:min-w-80 flex-1">
            <label className="text-sm font-bold" htmlFor="phonNo">
              Phone No
            </label>
            <input
              name="phonNo"
              type="text"
              placeholder="Phone No"
              className="border border-gray-300 rounded-md py-2 px-5 focus:outline-0 text-sm"
              value={contactData.phonNo}
              onChange={handelChange}
            />
          </div>
          <div className="flex flex-col gap-2 md:min-w-80 flex-1">
            <label className="text-sm font-bold" htmlFor="message">
              Message
            </label>

            <textarea
              name="message"
              type="text"
              rows="4"
              placeholder="Message"
              className="border border-gray-300 rounded-md py-2 px-5 focus:outline-0 text-sm"
              value={contactData.message}
              onChange={handelChange}
            ></textarea>
          </div>

          <button 
          onClick={handelSubmit}
          className="py-2 px-5 flex gap-3 absolute bottom-5 left-5 bg-custom-end text-white rounded-md text-sm  justify-center items-center cursor-pointer ">
            <Send strokeWidth={1} size={15} /> Send Message
          </button>
        </form>
      </div>
    </Element>
  );
}
