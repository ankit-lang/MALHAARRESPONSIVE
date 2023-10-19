import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import mallogoo from "../assets/malhar.png";
import ig from "../assets/ig.webp";
import twitter from "../assets/twitter.webp";
const ComSoon = () => {
  return (
    <>
      <Header />
      {/* <hr /> */}
      <div className="compage">
        {/* <div className="mallogo">
          <img src={mallogo} alt="img" />
        </div> */}
        <div className="main" >
          <div className="logo">
             <p >
              <img src = {mallogoo} alt="Mall LOGO "/>
            </p>
          </div>
          <div className="data">
            <p>Coming Soon</p>
          </div>
          <div className="links">
            <div className="info">
              <p>follow us for more updates  </p>&nbsp;&nbsp;
            </div>
            <div className="insta">
              <img src={ig} alt="insta" />
            </div>
            <div className="twitter">
              <img src={twitter} alt=" twitter" />

            </div>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <Footer />
    </>
  );
};

export default ComSoon;
