import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-purple-100 via-violet-500 to-cyan-300">
      <div className="min-h-screen flex flex-col justify-center p-10 mx-auto sm:py-12 lg:flex-row lg:justify-between shadow-xl">
        <div className="flex items-center justify-center w-[65%]">
          <img
            src="https://buburitapps.vercel.app/_next/image?url=%2Fassets%2Fhero-1-new.png&w=1920&q=75"
            alt=""
            className="w-[500px]"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-[38px] text-[#183b56] font-bold tracking-wider leading-tight">
            Temukan barang yang kamu <br /> inginkan di Hilalstore
          </h1>
          <p className="mt-6 mb-6 text-base">
            Cuyshop adalah e-commerce yang dapat memberikan pengalaman terbaik
            untuk jual beli bagi pengguna
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              to={"/produk"}
              className="text-white text-base bg-[#566ffe] hover:bg-[#566ffe]/90 shadow-xl shadow-black/20 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl px-[24px] py-2.5 mr-2 mb-2 focus:outline-none transition"
            >
              Explore produk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
