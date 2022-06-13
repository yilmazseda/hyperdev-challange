import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ImagesLeft from "../../components/ImageCards/ImagesLeft";
const Main = () => {
  return (
    <div className="flex h-screen ">
      <div className="m-auto w-full h-screen rounded">
        <Navbar />
        <ImagesLeft />
      </div>
    </div>
  );
};

export default Main;
