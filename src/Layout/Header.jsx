import React from "react";
import cclogo from "../assets/cc.png";
import mallogo from "../assets/malhar.png";
const Header = () => {
  return (
    <div className="header">
      <img src={cclogo} alt="img" />

      <div>BPIT LOGO</div>

      <img src={mallogo} alt="img" />
      
    </div>
  );
};

export default Header;
