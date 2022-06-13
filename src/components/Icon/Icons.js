import React from "react";
//import { Images } from "../../utilies/images";
// import logo from "../../assets/images/navbar-logo.png";
// import basket from "../../assets/images/basket.png";

const Icons = () => {
  //Buradaki başlık görsel ve içerik alanları props'lar ile tanımlanacak

  return (
    <div className="container">
      <div className="m-auto  mt-9 w-64 max-w-lg items-center justify-center overflow-hidden  bg-transparent pa">
        <div className=" flex justify-center items-center h-24 w-24 rounded-full m-auto bg-icon-bg text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </div>
        <div className=" mb-1 px-3 text-center font-fontNavbar text-white text-xl font-semibold">
          Safe shopping
        </div>
        <div className="mb-5 px-3 text-center font-fontNavbar text-xl font-medium text-white">
          Buy with confidence
        </div>
      </div>
    </div>
  );
};

export default Icons;
