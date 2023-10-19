import React from "react";
import cclogo from "../assets/cc.png";

import bpit from "../assets/bpit_logo.png";
const Header = () => {
  return (
    <div className="header">
     <div className="bpit-logo">
        <img src = {bpit} alt="BPIT LOGO "/>
      </div>
      <div className="cc-logo">
        <img src={cclogo} alt="CC LOGO" />
      </div> 
      
    
      
      
    </div>
  );
};

export default Header;
