import React from "react";
//import './pathStyles.css'
import pic from "./logo192.png";
import styles from "./Path.module.css";

export const Path = (props) => {
  return (
    <div className={`${styles.container_path}`}>
      <div className={`${styles.card}`}>
        <div className={`${styles.logocontainer_path}`}>
          <img className={`${styles.logo}`} src={props.pic} alt="logo" />
        </div>
        <a href="/pathy/homeopathy">
          <h2 className={`${styles.heading_path}`}>{props.name} </h2>
        </a>
        <p className={`${styles.data_path}`}>{props.data}</p>
      </div>
    </div>
  );
};
