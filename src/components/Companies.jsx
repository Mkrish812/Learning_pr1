import React from "react";

export default function Companies() {
  return (
    <section className="flex flex-col w-full justify-center items-center py-10 px-5 bg-[#f7f9fa] mb-10 ">
      <p className="text-2xl font-semibold text-center">
        Trusted by Leading Companies
      </p>

      <div className=" flex flex-wrap px-10 lg:px-20 gap-10  py-10 justify-center items-center ">
        <img src="assets/Companies/amazon.svg" width="100" alt="Amazon logo" />
        <img src="assets/Companies/google.svg" width="100" alt="Amazon logo" />
        <img src="assets/Companies/lenovo.svg" width="100" alt="Amazon logo" />
        <img src="assets/Companies/paypal.svg" width="100" alt="Amazon logo" />
        <img src="assets/Companies/shopify.svg" width="100" alt="Amazon logo" />
      </div>
    </section>
  );
}
