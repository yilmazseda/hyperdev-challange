import React from "react";
import Navbar from "../../components/Navbar/Navbar";
// import Card from "../../components/Card/Card";
import IconComponent from "../../components/Icon/IconComponent";
import Footer from "../../components/Footer/Footer";
const Main = () => {
  return (
    <div className="flex h-screen ">
      <div className="m-auto w-full h-screen rounded">
        <Navbar />
        <IconComponent />
        <Footer />
        {/* <Card />
         */}
      </div>
    </div>
  );
};

export default Main;
