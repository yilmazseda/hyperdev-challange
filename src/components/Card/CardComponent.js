import React from "react";
import Cards from "./Cards";
const CardComponent = () => {
  return (
    <div className="w-full h-60 ">
      <div className=" flex items-stretch justify-center ">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default CardComponent;
