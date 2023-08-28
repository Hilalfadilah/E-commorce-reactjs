import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white p-10 pt-20">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap lg:mx-32">
          <div className="w-full text-center font-medium mb-10 lg:text-start lg:mb-12 lg:px-4">
            <h2 className="font-semibold text-2xl tracking-widest uppercase text-[#566ffe]">
              Hilalstore
            </h2>
            <h3 className="font-normal text-sm">Copyright © 2023. Lol Team</h3>
          </div>
          <div className="w-full flex justify-end">
            <div className="w-full px-20 mb-12">
              <h3 className="font-semibold text-lg mb-5 tracking-widest">
                Hilalstore
              </h3>
              <ul className="text-[#183b56]">
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Produk
                  </a>
                </li>
              </ul>

              <ul className="text-[#183b56]">
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Tentang Kami
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full px-4 mb-12 md:w-1/3 text-[#183b56]">
              <h3 className="font-semibold text-lg mb-5 tracking-widest">
                Kontak
              </h3>
              <ul className="text-slate-300 ">
                <li>
                  <a
                    href="#home"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Youtube
                  </a>
                </li>
              </ul>

              <ul className="text-slate-300 ">
                <li>
                  <a
                    href="#about"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Instagram
                  </a>
                </li>
              </ul>

              <ul className="text-slate-300 ">
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Tiktok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
