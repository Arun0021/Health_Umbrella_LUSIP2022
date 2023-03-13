import React from "react";
import img from "./img.png";
//import './aboutStyles.css'
import styles from "./About.module.css";

function About(props) {
  return (
    <div className={`${styles.about_comp}`}>
      <div className={`${styles.about_card}`}>
        <div className={`${styles.textwrapper}`}>
          <h2 className={`${styles.heading} ${styles.text}`}>
            {" "}
            About {props.disease}
          </h2>
          <p className={`${styles.para} ${styles.text}`}>{props.data}</p>
        </div>
        <div className={`${styles.imgdiv}`}>
          <img src={img} className={`${styles.aboutimg}`} />
        </div>
      </div>
    </div>
  );
}

export default About;
