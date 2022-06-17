import React from "react";
import Navbar from "../../components/Navbar/Navbar";
// import Subscribe from "../../components/SubscribeForm/Subscribe";
// import ContactForm from "../../components/ContactForm/Contact";
// import CardsComponent from "../../components/Card/CardsComponent";
// import Footer from "../../components/Footer/Footer";
// import IconComponent from "../../components/Icon/IconComponent";
import LeftBlogCard from "../../components/BlogCard/LeftBlogCard";
import RightBlogCard from "../../components/BlogCard/RightBlogCard";

// import ProductList from "../../components/Product/ProductList";
const Main = () => {
  return (
    <div className="flex h-screen ">
      <div className="m-auto w-full h-screen rounded">
        <Navbar />

        {/* <IconComponent /> */}

        <LeftBlogCard />
        <RightBlogCard />
      </div>
    </div>
  );
};

export default Main;
