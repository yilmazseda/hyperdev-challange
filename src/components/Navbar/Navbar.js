import React from "react";
import { Images } from "../../utilies/images";
// import logo from "../../assets/images/navbar-logo.png";
// import basket from "../../assets/images/basket.png";

const Navbar = () => {
  const menuItems = [
    {
      title: "Home",
      url: "#",
    },
    {
      title: "About me",
      url: "#",
    },
    {
      title: "Products",
      url: "#",
    },
    {
      title: "Contact me",
      url: "#",
    },
  ];

  return (
    <div className="flex w-full justify-between bg-white  items-center max-w-7xl mx-auto border-t-4 border-border-top-color p-8">
      <div className="flex items-center flex-shrink-0 text-white mr-6  ">
        <img className="w-28 h-16" src={Images.logo}></img>
      </div>

      <nav className="flex items-center justify-between flex-wrap mr-12 ">
        <div className="block size-992:hidden">
          <button className="flex items-center px-3 pr-16	 py-2 rounded  ">
            <svg
              className="fill-navbar-color h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className="w-full size-992:block flex-grow   size-992:items-center size-992:w-auto hidden size-992:flex">
          <ul className=" flex text-2xl	lg:flex-grow  font-fontNavbar  ">
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.url}
                    className="  mt-4 lg:inline-block lg:mt-0 mr-7 text-navbar-color font-medium   "
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex">
          <img className="w-5 h-5" src={Images.basket}></img>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
