import React from "react";
import image1 from "../../public/hilal-removebg.png";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-purple-100 via-violet-500 to-cyan-300">
        <div className="min-h-screen flex flex-col justify-center p-10 mx-auto mt-12 lg:flex-row lg:justify-between">
          <div className="flex justify-center items-center mx-32">
            <h1 className="text-[48px] text-[#183b56] font-bold tracking-wider leading-tight uppercase relative before:block before:absolute before:bottom-1 before:w-full before:left-9 before:border-t-8 before:border-solid before:border-[#566ffe]">
              TentangKami
            </h1>
          </div>
          <div className="m-auto">
            <img
              src={image1}
              alt=""
              className="w-[400px] rounded-[100px] hover:scale-105 transition-all duration-100 ease-linear"
            />
            <p className="text-[#183b56] text-xl font-medium text-center">
              Hilal Fadilah
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
