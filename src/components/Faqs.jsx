import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

export default function Faqs() {
  const [wDown, setDown] = useState(0);
  
 const handleDrop = (id) => {
    wDown === id ? setDown(0) : setDown(id);
  };
  const faqs = [
    {
      id: 1,
      question: "How long does it take to ship my order?",
      answer:
        "Shipping times vary depending on your location and the shipping method chosen. Typically, orders are processed and shipped within 1–3 business days. You'll receive a tracking number once your order is shipped, which you can use to monitor its delivery status.",
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. In some regions, we also support local payment methods during checkout.",
    },
    {
      id: 3,
      question: "What shipping options do you have?",
      answer:
        "We offer standard, expedited, and overnight shipping options. Available options and rates are shown at checkout based on your location and the items in your order.",
    },
    {
      id: 4,
      question: "How do I make changes to an existing order?",
      answer:
        "To make changes to an existing order, please contact our customer support as soon as possible. If the order hasn't been processed yet, we’ll do our best to accommodate your request.",
    },
    {
      id: 5,
      question: "When will my order arrive?",
      answer:
        "Delivery time depends on the shipping method chosen and your location. After your order ships (within 1–3 business days), you’ll receive a tracking number to follow its progress.",
    },
  ];

  return (
    <section className="flex flex-col w-full justify-center items-center py-16 px-5 bg-[#f7f9fa]  ">
      <h1 className="text-primery-blue">FAQs</h1>
      <p className="text-2xl font-semibold text-center">
        Frequently Asked Questions
      </p>

      <div className="flex w-full mt-2 ">
        <div className="flex flex-col flex-1 p-5 md:px-10 mx-3  shadow-xl rounded-2xl">
          {faqs.map((fq) => (
            <div className= {`${fq.id == wDown ? 'max-h-96' :'max-h-16 ' } border-b  border-gray-200 overflow-hidden transition-all duration-700 ease-in-out `} key={fq.id}>
              <h1
                onClick={()=> handleDrop(fq.id)}
                className="font-bold mt-3 flex justify-between py-3 "
              > 
                {fq.question}
                <ChevronDown className= {`${fq.id == wDown ? '-rotate-180 ' :'rotate-0 ' } transition-all duration-700 ease-in-out `} strokeWidth={1.5} />
              </h1>
              <p className="text-sm text-gray-500 py-2">{fq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
