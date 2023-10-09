import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import mallogo from "../assets/malhar.png";
const ComSoon = () => {
  return (
    <>
      <Header />
      {/* <hr /> */}
      <div className="compage">
        <div className="mallogo">
          <img src={mallogo} alt="img" />
        </div>
        <div className="main">Coming Soon...</div>
      </div>
      {/* <hr /> */}
      <Footer />
    </>
  );
};

export default ComSoon;
