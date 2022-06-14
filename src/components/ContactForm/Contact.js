import React from "react";

const Contact = () => {
  return (
    <div className="flex  w-full justify-between bg-textbox-bg  items-center  mx-auto  p-8 mb-12">
      <div class="flex flex-col justify-between">
        <div className="mb-2.5	">
          <label
            for="helper-checkbox"
            class="font-bold text-white text-lg uppercase"
          >
            email
          </label>
          <div class="text-white  font-fontNavbar text-2xl cursor-pointer">
            support@website.com
          </div>
        </div>
        <div className="mb-2.5	">
          <label
            for="helper-checkbox"
            class="font-bold text-white text-base uppercase "
          >
            phone
          </label>
          <div class="text-white font-fontNavbar cursor-pointer text-2xl">
            800-123-456
          </div>
        </div>
        <div className="mb-2.5	">
          <label
            for="helper-checkbox"
            class="font-bold text-white text-base uppercase"
          >
            address
          </label>
          <div class="text-white block font-fontNavbar cursor-pointer text-2xl">
            23 Evergreen Street
            <br></br> San Francisso, California USA
          </div>
        </div>
      </div>

      <div class="w-full lg:w-1/3  ">
        <div class="bg-transparent relative rounded-lg p-8 sm:p-12 ">
          <form>
            <div class="flex mb-4">
              <div class=" text-sm">
                <label
                  for="helper-checkbox"
                  class="font-bold text-white text-base uppercase"
                >
                  Adress
                </label>
                <p
                  id="helper-checkbox-text"
                  class="text-2xl font-normal text-white font-fontNavbar"
                >
                  Drop us your message and I'll get back to you as soon as
                  possible.
                </p>
              </div>
            </div>

            <div class="grid xl:grid-cols-2 xl:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  id="name"
                  aria-describedby="helper-text-explanation"
                  class=" border border-white bg-transparent text-white text-sm placeholder-white   block w-full p-4 placeholder:font-medium 
                  "
                  placeholder="your name"
                />
              </div>

              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  id="company"
                  aria-describedby="helper-text-explanation"
                  class=" border border-white bg-transparent text-white text-sm placeholder-white hover:outline-none  block w-full p-4 placeholder:font-medium "
                  placeholder="your company"
                />
              </div>
            </div>
            <div class="grid xl:grid-cols-2 xl:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  id="phone"
                  aria-describedby="helper-text-explanation"
                  class=" border border-white bg-transparent text-white text-sm placeholder-white  hover:outline-none block w-full p-4  placeholder:font-medium  "
                  placeholder="your phone"
                />
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  id="email"
                  aria-describedby="helper-text-explanation"
                  class=" border border-white bg-transparent text-white text-sm placeholder-white  hover:outline-none block w-full p-4  placeholder:font-medium "
                  placeholder="your email"
                />
              </div>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-white border border-white hover:outline-none bg-transparent placeholder-white  placeholder:font-medium  "
                placeholder="your message"
              ></textarea>
            </div>

            <button
              type="submit"
              class="text-white border border-white bg-transparent hover:bg-white    placeholder:font-medium  text-sm w-full sm:w-auto px-24 text-center hover:text-textbox-bg p-4"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
