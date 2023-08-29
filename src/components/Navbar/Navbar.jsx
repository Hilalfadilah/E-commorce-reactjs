import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="w-full flex items-center justify-between fixed top-0 z-10 bg-white p-4 border-b border-solid border-cyan-200">
        <div className="flex items-center flex-shrink-0 lg:ml-20">
          <Link
            to={"/"}
            className="font-semibold text-[32px] -tracking-tighter text-[#566ffe]"
          >
            HilalStore
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-base font-medium lg:flex-grow">
            <Link
              to={"/produk"}
              className="block mt-4 lg:inline-flex lg:mt-0 hover:text-[#566ffe] mr-10 ml-24"
            >
              Produk
            </Link>
            <Link
              to={"/about"}
              className="block mt-4 lg:inline-flex lg:mt-0 hover:text-[#566ffe] mr-10"
            >
              Tentang Kami
            </Link>
          </div>
          <div className="w-64">
            <input
              type="search"
              id="search"
              className="block w-full p-3 border border-neutral-500 shadow-md rounded-2xl focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-600"
              placeholder="Cari Produk"
              required
            />
          </div>
          <a href="">
            <img
              className="mr-32 ml-5"
              alt="Span"
              src="https://anima-uploads.s3.amazonaws.com/projects/64e16eeb6df9651ba7fabf57/releases/64e1701f7ab2fa75b7d880a3/img/span.svg"
            />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
