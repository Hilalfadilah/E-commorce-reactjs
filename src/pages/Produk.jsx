import React from "react";
import Layout from "../components/Layout/Layout";

const Produk = () => {
  return (
    <Layout>
      <div className="bg-white flex items-center justify-center mt-20 py-28 border-b border-solid border-b-[#c5d0d3]">
        <h1 className="text-[40px] font-bold text-[#183b56]">Explore Produk</h1>
      </div>
      <div className="bg-white py-5 border-b border-b-[#c5d0d3]/50">
        <div className="flex justify-center gap-10">
          <div>All</div>
          <div>All</div>
          <div>All</div>
          <div>All</div>
          <div>All</div>
        </div>
      </div>
    </Layout>
  );
};

export default Produk;
