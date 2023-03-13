import React from "react";
import Navbar from "../../Navbar/Navbar";
import image1 from "./images/image1.png";
import "./Header.css";

function Header() {
  return (
    <div className="case-overview-header">
      <Navbar />
      <div className="banner">
        <h1>Book Overview</h1>
      </div>
    </div>
  );
}

export default Header;
