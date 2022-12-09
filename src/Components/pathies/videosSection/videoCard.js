import React from "react";
import "./videoCard.css";
import rating from "./rating.png";
import Stars from "../stars/stars";
function videoCard({ logo, title, details, link }) {
  console.log({ details });
  return (
    <>
      <div className="pathyCard">
        <div className="Thumbnail">
          <img className="thumbnailimg" src={logo} alt="logo" />
        </div>
        <div className="videoDet">
          <h6 className="vidTit">{title}</h6>
          <p className="vidDesc">{details}</p>
        </div>
        <div className="card_footer">
          <Stars />
          <a href={link} target="./blank">
            <button className="Redirect_Btn">Go to video</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default videoCard;
