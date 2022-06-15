//NAVBAR DA Kİ MENÜ İSİMLERİ BURAYA GÖNDERİLECEKKKK
import React from "react";
import { Images } from "../../utilies/images";

const Footer = () => {
  return (
    <footer className="p-4 bg-footer-bg  shadow md:px-6 md:py-8 dark:bg-gray-800">
      <div className="flex justify-between">
        <div className="sm:flex sm:items-center  fm:flex">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            <img className="w-28 h-16" src={Images.footerLogo}></img>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-xl font-medium text-white sm:mb-0  font-fontNavbar ml-16	">
            <li>
              <a href="#" className="mr-4  md:mr-6 ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 md:mr-6">
                About me
              </a>
            </li>
            <li>
              <a href="#" className="mr-4  md:mr-6 ">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="">
                Contact me
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center ">
          <a
            href="#!"
            className="mr-2 text-white bg-border-top-color hover:bg-footer-bg  rounded-full hover:rounded-full w-9 h-9 flex justify-center"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              className="w-2.5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="mr-2 text-white bg-border-top-color hover:bg-footer-bg  rounded-full hover:rounded-full w-9 h-9 flex justify-center"
          >
            <svg
              className="w-5 "
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#!"
            className="mr-6 text-white bg-border-top-color hover:bg-footer-bg  rounded-full w-9 h-9 flex justify-center"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              className="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <span className="flex mt-5  text-sm text-white sm:text-center text-roboto ">
        <a href="#" className="mr-2 font-medium">
          Version 1.2
        </a>
        {/* <div classNameName="mr-2">| Image</div> */}
        <a className="mr-2  ">
          | Image
          <a href="/#" className="font-medium">
            {" "}
            Licensing
          </a>
        </a>
        <a className="mr-2 ">
          | Made by
          <a
            href="https://webflow.com/templates/designers/pablo-ramos"
            className="font-medium"
          >
            {" "}
            Pablo Ramos
          </a>
        </a>
        <a className="mr-2 ">
          | Visit My
          <a href="http://pablo-ramos.webflow.io/" className="font-medium">
            {" "}
            Templates
          </a>
        </a>
        <a className="mr-2 ">
          | Powered By
          <a href="http://webflow.com" className="font-medium">
            {" "}
            Webflow
          </a>
        </a>
      </span>
    </footer>
  );
};

export default Footer;
