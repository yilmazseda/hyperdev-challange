import React from "react";
import { Images } from "../../utilies/images";
//ZOOM OLDUĞU ZAMAN ALTTAKİ ELEMANI ENGELLİYOR !!!

const ProductCard = () => {
  return (
    <div
      className=" overflow-hidden  bg-transparent xl:p-4
  "
    >
      <a href={"#"} className={"relative flex overflow-hidden"}>
        <img
          className="w-full hover:scale-125 "
          src={Images.chair}
          alt="Sunset in the mountains"
        />
      </a>

      <div className="px-6 pt-4 ">
        <div className="font-medium font-fontNavbar text-product-title text-center text-2xl mb-2">
          Plated Cushion
        </div>
      </div>
      <div className="px-6  pb-2">
        <span className="flex rounded-full  justify-center py-1 text-base font-semibold   font-roboto text-product-price mr-2 mb-2 text-center">
          $ 19.99 USD
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
