import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full h-80 bg-white m-auto  pt-12">
      <div className="flex justify-center uppercase text-subscribe-color text-md font-bold tracking-widest mb-6	">
        I'M A CUSHION DESIGNER
      </div>
      <div className="flex justify-center  text-product-title text-2xl font-medium font-fontNavbar tracking-widest mb-5">
        Based in San Francisco, California I design trendy and fashion Cushions,
        <br></br>
        since I have memory I always had a tendency to design and illustration.
      </div>
      <div className="m-4 flex rounded justify-center">
        <button className="rounded-full uppercase text-sm hover:bg-subscribe-color hover:text-white  border-subscribe-color font-bold font-fontNavbar  text-subscribe-color border px-8 p-4">
          learn more
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
