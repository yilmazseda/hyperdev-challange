import React from "react";

const Subscribe = () => {
  return (
    //     <div className="w-full h-80 bg-white m-auto  pt-12">
    //       <div className="flex justify-center uppercase text-subscribe-color text-md font-bold tracking-widest mb-6	">
    //         newsletter
    //       </div>
    //       <div className="flex justify-center uppercase text-product-title text-md font-medium font-fontNavbar tracking-widest mb-5">
    //         Get promotions & updates!
    //       </div>
    //       <form class="m-4 flex rounded justify-center">
    //         <input
    //           class="  p-4 border-t mr-0 border-b border-l text-gray-800 border-textbox-bg bg-white placeholder:text-textbox-bg italic"
    //           placeholder="Your name"
    //         />
    //         <input
    //           class="  p-4 border-t mr-0 border-b border-l text-gray-800 border-textbox-bg bg-white placeholder:text-textbox-bg italic"
    //           placeholder="Your email"
    //         />
    //         <button
    //           class="px-8  text-sm bg-textbox-bg text-white font-bold p-4 uppercase border-textbox-bg border-t border-b border-r tracking-tigwit
    // "
    //         >
    //           Subscribe
    //         </button>
    //       </form>{" "}
    //     </div>

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
        <button class="rounded-full uppercase text-sm hover:bg-subscribe-color hover:text-white  border-subscribe-color font-bold font-fontNavbar  text-subscribe-color border px-8 p-4">
          learn more
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
