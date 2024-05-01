import React from "react";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-gray-800 w-full text-white">
      <div className="max-w-7xl mx-auto py-7 px-4 ">
        <div className="flex  md:flex-row flex-col gap-8">
          <div className="w-full md:w-1/4 flex flex-col gap-2">
            <h2 className="text-lg font-semibold ">About Us</h2>
            <p className="text-gray-400 text-sm md:text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua.
            </p>
          </div>
          <div className="w-full md:w-1/4 flex flex-col gap-2">
            <h2 className="text-lg font-semibold ">Newsletter</h2>
            <p className="text-gray-400">Stay updated with our latest trends</p>
            <input
              type="text"
              className="text-gray-800 h-10 w-full rounded px-3 py-3 relative"
              placeholder="Email Address"
            />
            <button className="bg-red-800 px-4 py-1.5 my-2 content-center rounded w-2/4">
              Subscribed
            </button>
          </div>
          <div className="w-full md:w-1/4 flex flex-col gap-2">
            <h2 className="text-lg font-semibold ">Instagram Feed</h2>
            <div className="grid grid-cols-4 gap-1">
              <img
                src="https://preview.colorlib.com/theme/ruft/img/i1.jpg"
                alt="Feed"
              />
              <img
                src="https://preview.colorlib.com/theme/ruft/img/i2.jpg"
                alt="Feed"
              />
              <img
                src="https://preview.colorlib.com/theme/ruft/img/i3.jpg"
                alt="Feed"
              />
              <img
                src="https://preview.colorlib.com/theme/ruft/img/i4.jpg"
                alt="Feed"
              />
              <img
                src="https://preview.colorlib.com/theme/ruft/img/i5.jpg"
                alt="Feed"
              />
              <img
                src="https://preview.colorlib.com/theme/ruft/img/i6.jpg"
                alt="Feed"
              />
              <img
                src="https://preview.colorlib.com/theme/ruft/img/i7.jpg"
                alt="Feed"
              />
              <img
                src="https://preview.colorlib.com/theme/ruft/img/i8.jpg"
                alt="Feed"
              />
            </div>
          </div>
          <div className="w-full md:w-1/4 flex flex-col gap-2">
            <h2 className="text-lg font-semibold ">Follow Us</h2>
            <p className="text-gray-400">Let us be social</p>
            <div className="flex">
              <a href="#">Logo</a>
              <a href="#">Logo</a>
              <a href="#">Logo</a>
              <a href="#">Logo</a>
              {/* Form note logo components */}
            </div>
          </div>
        </div>
        <Logo width="100px" />

        <p className="text-gray-400 text-center mt-12">
          Copyright ©2024 All rights reserved | Design & Developed By Toufik
        </p>
      </div>
    </footer>
  );
}

export default Footer;
