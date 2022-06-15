import React from "react";
import ev from "../svgComponents/ev";

const Icon = () => {
  return (
    <div className="m-auto  mt-9 w-64 max-w-lg items-center justify-center overflow-hidden  bg-transparent pa">
      <div className=" flex justify-center items-center h-24 w-24 rounded-full m-auto bg-icon-bg text-white">
        <ev />
      </div>
      <div className=" mb-1 px-3 text-center font-fontNavbar text-white text-xl font-semibold">
        Safe shopping
      </div>
      <div className="mb-5 px-3 text-center font-fontNavbar text-xl font-medium text-white">
        Buy with confidence
      </div>
    </div>
  );
};

export default Icon;
