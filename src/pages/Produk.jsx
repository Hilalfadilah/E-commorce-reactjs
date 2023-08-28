import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { getProducts } from "../api/api";
import Card from "../components/Card/Card";

const Produk = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  });

  return (
    <Layout>
      <div className="bg-white flex items-center justify-center mt-20 py-28 border-b border-solid border-b-[#c5d0d3]">
        <h1 className="text-[40px] font-bold text-[#183b56]">Explore Produk</h1>
      </div>
      <div className="w-full bg-white py-5 border-b border-b-[#c5d0d3]/50 overflow-y-auto">
        <div className="inline-flex md:flex md:justify-center gap-10">
          <p>All</p>
          <p>men's clothing</p>
          <p>women's clothing</p>
          <p>electronics</p>
          <p>jewelery</p>
        </div>
      </div>
      <div className="mt-20 mx-4 lg:mx-10 2xl:mx-10">
        <h1 className="text-[32px] font-semibold text-[#183b56] mt-10">
          Semua Produk
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center p-12 lg:p-7">
        {products.map((product) => (
          <Card
            id={product.id}
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            category={product.category}
            description={product.description}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Produk;
