import React from "react";
import Navbar from "../../Navbar/Navbar";
import image1 from "./images/banner.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Navbar />
      <div className="header_intro">
        <div className="left">
          <h1>Health Umbrella Foundation </h1>
          <p>
            The health sector is fully integrated into society, through
            interactions with numerous patients and doctors. The main goal of
            the system is to build a nonprofitable organization that aims at
            providing an effective way to share real-world health experiences
            through user interaction and the integration of various therapies
            used for curing diseases.
          </p>
          <div className="animated-button">
            <button type="button" className="button">
              Click Here
            </button>
            <div className="background"></div>
          </div>
        </div>
        <div className="right">
          {/* 
                <div className="box box1">
                    <img src={image2} alt="image2" />
                    <p className='floatCardText'>Patients<br/>52</p>
                </div>
                <div className="box box2">
                    <img src={image3} alt="image3" />
                    <p className='floatCardText'>Articles Published</p>
                </div>
                <div className="box box3">
                    <img src={image4} alt="image4" />
                    <p className='floatCardText'>Visits<br/>1234</p>
                </div>
                <div className="box box4">
                    <img src={image5} alt="image5" />
                    <p className='floatCardText'>15</p>
                </div> */}
          <div className="background">
            <img src={image1} alt="image1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
