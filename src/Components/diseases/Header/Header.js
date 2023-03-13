import React from "react";
// import Navbar from '../../Navbar/Navbar'
// import image1 from "./images/image1.png"
// import image2 from "./images/image2.png"
// import image3 from "./images/image3.png"
// import image4 from "./images/image4.png"
// import image5 from "./images/image5.png"
import image1 from "./images/Brain-Logo.png";
import Navbar from "../../Navbar/Navbar";

import styles from "./Header.module.css";

import "./Header.css";

function Header({ disease }) {
  return (
    <div className={`${styles.header}`}>
      <Navbar />
      <div className="migrain-head">
        <div class="box">
          <div>
            <h1 className="migrain">Migraine</h1>
          </div>
          <div>
            <img src={image1} alt="image1" height={100} width={150} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

{
  /* <div className={`${styles.header}`}>
      <Navbar />
      <div className={`${styles.header_intro}`}>
        <div className={`${styles.left}`}>
          <h1>{disease} </h1>
          <div className={`${styles.animated_button}`}>
            <button type="button" className={`${styles.button}`} href="#about">
              Read More
            </button>
            <div className={`${styles.background}`}></div>
          </div>
        </div>
        <div className={`${styles.right}`}>
          <div className={`${styles.background}`}>
            <img src={image1} alt="image1" />
          </div>
        </div>
      </div>
    </div> */
}
