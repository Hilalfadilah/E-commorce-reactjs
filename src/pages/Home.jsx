import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Card from "../components/Card/Card";
import Hero from "../components/Hero/Hero";
import { getProducts } from "../api/api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split("; ");

    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }

    return null; // Return null if the cookie is not found
  }
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const token = getCookie("user_token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    setLoading(true);
    getProducts((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      <Hero />
      <div className="mt-20 mx-10 lg:mx-9 2xl:mx-12">
        <h1 className="text-[32px] font-semibold text-[#183b56]">Product</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center p-7">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          products.map((product) => (
            <Card
              id={product.id}
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
              description={product.description}
            />
          ))
        )}
      </div>
    </Layout>
  );
};

export default Home;
