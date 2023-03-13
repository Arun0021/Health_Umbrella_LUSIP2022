import React from "react";
import Navbar from "../../../Navbar/Navbar";
import image1 from "./images/image1.png";
import "./Pathy_header.css";

function Header(props) {
  return (
    <div className="header">
      <Navbar />

      <div className="pathy_header_intro">
        <h1>Testimonials-Direct</h1>
        {/* <div className="box">
          <div className="left">
            <h1>Testimonials-Direct</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              sapiente atque veniam maxime, mollitia ipsam aperiam? Ipsa vero
              illo eum praesentium ratione quasi expedita tempora veritatis
              accusantium sint, id error! Architecto deleniti, sint asperiores
              excepturi ipsa vitae explicabo laudantium nemo, modi, commodi
              dolorum dolor quis in porro repellendus maxime atque!
            </p>
          </div>
          <img classname="headerimg" src={image1} alt="img" />
        </div> */}
      </div>
    </div>
  );
}

export default Header;
