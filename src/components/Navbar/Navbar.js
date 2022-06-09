import React from "react";
import logo from "../../images/navbar-logo.png";

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
    <div className="flex w-full justify-around bg-white  items-center  border-t-4 border-border-top-color p-8">
      <div class="flex items-center flex-shrink-0 text-white mr-6  ">
        <img className="w-28 h-16" src={logo}></img>
      </div>

      <nav class="flex items-center justify-between flex-wrap mr-12">
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2  rounded  ">
            <svg
              class="fill-navbar-color h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto sm:hidden ">
          <ul class=" flex text-2xl	lg:flex-grow  font-fontNavbar  ">
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.url}
                    class="  mt-4 lg:inline-block lg:mt-0 mr-7 text-navbar-color font-medium   "
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
