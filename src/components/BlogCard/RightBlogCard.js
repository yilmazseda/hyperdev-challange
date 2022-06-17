import React from "react";
import { Images } from "../../utilies/images";
const RightBlogCard = () => {
  return (
    <div class=" flex justify-center mx-auto bg-white  overflow-hidden pt-10">
      <div class="p-5 mr-12 ">
        <a href="#">
          <h5 class="mb-2 text-base uppercase font-bold tracking-tight text-subscribe-color  ">
            BEGINNINGS
          </h5>
        </a>
        <p class="mb-3 font-fontNavbar text-product-title text-2xl ">
          Credibly innovate granular internal or organic
          <br /> sources whereas high standards in web-readiness.
        </p>
        <p class="mb-3 font-fontNavbar text-product-title  text-2xl  w-4/5 ">
          Energistically scale future-proof core competencies <br />
          vis-a-vis impactful experiences.
        </p>
        <p class="mb-3 font-fontNavbar text-product-title  text-2xl">
          Dramatically synthesize integrated schemas. with
          <br /> optimal networks.
        </p>
      </div>

      <a href="#" className="bg-border-top-color p-5">
        <img class="max-w-md" src={Images.blogleft1} alt="" />
      </a>
    </div>
  );
};

export default RightBlogCard;
