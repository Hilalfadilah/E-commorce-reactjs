import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button/Button";
import Layout from "../components/Layout/Layout";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [count, setCount] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const fetchData = (id, callback) => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchData(id, (data) => {
      setDetail(data);
      setLoading(false);
    });
  }, [id]);
  return (
    <Layout>
      <section className="min-h-screen w-full py-20 mt-20">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="flex flex-col justify-center md:mx-20 md:p-12 md:flex-row md:justify-between">
            <div className="flex items-center justify-center md:w-1/2">
              <img
                src={detail.image}
                alt=""
                className="w-[300px] lg:w-[400px] rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center w-[80%] mt-10 md:w-[60%] mx-auto md:mx-0">
              <div className="flex items-center justify-between">
                <p className="text-[13px] text-[#566ffe] uppercase font-medium tracking-widest leading-tight">
                  {detail.category}
                </p>
                <Link
                  to={"/produk"}
                  className="text-sm text-blue-300 ring-1 ring-blue-300 shadow-[2px_5px_8px_1px_rgba(0,0,0,0.2)] focus:ring-4 focus:ring-blue-300 font-medium rounded-xl px-[15px] py-2 mb-2 focus:outline-none transition"
                >
                  Kembali
                </Link>
              </div>
              <h1 className="text-[28px] md:text-[45px] text-[#183b56] font-bold">
                {detail.title}
              </h1>
              <p className="mt-6 mb-6 text-base h-40 overflow-scroll md:overflow-hidden">
                {detail.description}
              </p>
              <p className="mt-14 text-[25px] font-bold tracking-wider leading-tight">
                ${detail.price}
              </p>
              <div className="mt-10 flex flex-wrap gap-x-5 w-full md:flex-nowrap">
                <div className="flex justify-center gap-x-3 w-44 rounded-lg bg-white shadow-[2px_5px_8px_1px_rgba(0,0,0,0.2)]">
                  <Button
                    onClick={() => decrement()}
                    text="-"
                    className="text-2xl text-[#566ffe] hover:scale-125 transition-all duration-100 ease-in-out"
                  ></Button>
                  <div className="px-10 py-2 text-xl font-semibold">
                    {count}
                  </div>
                  <Button
                    onClick={() => increment()}
                    text="+"
                    className="text-2xl text-[#566ffe] hover:scale-125 transition-all duration-100 ease-in-out"
                  ></Button>
                </div>
                <Button
                  text="Tambah ke keranjang"
                  className="px-5 py-2 mt-5 md:py-0 md:mt-0 text-base text-white bg-[#566ffe] font-semibold rounded-lg shadow-[2px_5px_8px_1px_rgba(0,0,0,0.2)]"
                ></Button>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Detail;
