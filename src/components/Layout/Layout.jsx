import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar2/navbar2";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
