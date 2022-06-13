import React from "react";
import { Images } from "../../utilies/images";
//ZOOM OLDUĞU ZAMAN ALTTAKİ ELEMANI ENGELLİYOR !!!

const Card = () => {
  return (
    <div className="max-w-sm  overflow-hidden shadow-lg bg-textbox-bg">
      <img
        className="w-full hover:scale-125 "
        src={Images.cardImage1}
        alt="Sunset in the mountains"
      />

      <div className="px-6 pt-4 ">
        <div className="font-medium font-fontNavbar text-white text-2xl mb-2">
          About me
        </div>
      </div>
      <div className="px-6  pb-2">
        <span className="inline-block rounded-full  py-1 text-xl font-semibold italic font-fontCard text-card-textcolor mr-2 mb-2">
          Learn more
        </span>
      </div>
    </div>
  );
};

export default Card;
