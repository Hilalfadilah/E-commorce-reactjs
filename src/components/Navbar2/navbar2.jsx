import React from "react";
import { Link } from "react-router-dom";

export default function Navbar2() {
  return (
    <div className="fixed z-50 bottom-0 w-full h-[5rem] bg-white border-t-2 border-solid border-cyan-200 flex items-center">
      <div className="w-10/12 mx-auto flex items-center justify-center gap-[4rem]">
        <h1 className="text-[32px] font-semibold">HilalStore</h1>
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center justify-center gap-[1.5rem]">
            <Link to={"google.com"}>Produk</Link>
            <Link to={"google.com"}>Tentang Kami</Link>
          </div>
          <div className="flex items-center justify-center gap-[2.75rem]">
            <input
              type="search"
              id="search"
              class="block w-full p-3 border border-neutral-500 shadow-md rounded-2xl focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-600"
              placeholder="Cari Produk"
              required=""
            />
            <img
              className="cursor-pointer"
              alt="Span"
              src="https://anima-uploads.s3.amazonaws.com/projects/64e16eeb6df9651ba7fabf57/releases/64e1701f7ab2fa75b7d880a3/img/span.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
