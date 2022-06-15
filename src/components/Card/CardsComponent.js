import React from "react";
import Card from "./Card";
const CardsComponent = () => {
  return (
    <div className="w-full h-60 ">
      <div className=" flex items-stretch justify-center ">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardsComponent;
