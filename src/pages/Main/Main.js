import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Subscribe from "../../components/SubscribeForm/Subscribe";
import ContactForm from "../../components/ContactForm/Contact";
// import CardComponent from "../../components/Card/CardComponent";
import Footer from "../../components/Footer/Footer";
import IconComponent from "../../components/Icon/IconComponent";
// import ImagesLeft from "../../components/ImageCards/ImagesLeft";
import ProductList from "../../components/Product/ProductList";
const Main = () => {
  return (
    <div className="flex h-screen ">
      <div className="m-auto w-full h-screen rounded">
        <Navbar />
        <ProductList />
        <ContactForm />
        <Subscribe />
        <IconComponent />
        <Footer />

        {/* <CardComponent /> */}

        {/* <ImagesLeft /> */}
      </div>
    </div>
  );
};

export default Main;
