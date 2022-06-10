import React from "react";
import Navbar from "../../components/Navbar/Navbar";
// import Card from "../../components/Card/Card";
import Icon from "../../components/Icon/Icon";
const Main = () => {
  return (
    <div className="flex h-screen ">
      <div className="m-auto w-full h-screen rounded">
        <Navbar />
        <Icon />
        {/* <Card /> */}
      </div>
    </div>
  );
};

export default Main;
