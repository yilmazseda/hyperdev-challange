import React from "react";
import { Images } from "../../utilies/images";
const LeftBlogCard = () => {
  return (
    <div class=" flex justify-center mx-auto bg-white   overflow-hidden pb-10 border-b-2 border-subscribe-color   ">
      <a href="#" className="bg-border-top-color p-5">
        <img class="max-w-md" src={Images.blogleft1} alt="" />
      </a>

      <div class="p-5 ml-6">
        <a href="#">
          <h5 class="mb-2 text-base uppercase font-bold tracking-tight text-subscribe-color  ">
            career
          </h5>
        </a>
        <p class="mb-3 font-fontNavbar text-product-title text-2xl ">
          Collaboratively administrate turnkey channels <br />
          whereas virtual e-tailers.
        </p>
        <p class="mb-3 font-fontNavbar text-product-title  text-2xl  w-4/5 ">
          Objectively seize scalable metrics whereas proactive
          <br /> e-services seamlessly empower fully researched growth
          strategies.
        </p>
        <p class="mb-3 font-fontNavbar text-product-title  text-2xl">
          And interoperable internal or “organic” sources.
        </p>

        <button className="rounded-full uppercase text-sm hover:bg-subscribe-color hover:text-white  border-subscribe-color font-bold font-fontNavbar  text-subscribe-color border px-5 p-3">
          learn more
        </button>
      </div>
    </div>
  );
};

export default LeftBlogCard;
