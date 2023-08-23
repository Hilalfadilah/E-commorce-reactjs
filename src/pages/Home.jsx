import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Card from "../components/Card/Card";
import Hero from "../components/Hero/Hero";
import { getProducts } from "../api/api";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Layout>
      <Hero />
      <div className="mt-20 lg:mx-9 2xl:mx-12">
        <h1 className="text-[32px] font-semibold text-[#183b56]">Product</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center p-7">
        {products.map((product) => (
          <Card
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

export default Home;
