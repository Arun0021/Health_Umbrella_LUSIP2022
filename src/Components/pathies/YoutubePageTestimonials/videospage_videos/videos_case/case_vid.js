import React from "react";
import { useState } from "react";
import patientcard from "./patientcard.png";
import cardrectangle from "./cardrectangle.png";
import patientimg from "./patientimg.png";
import patienttitle from "./patienttitle.png";
import "./case_vid.css";
import Stars from "../../videospage_stars/stars";
import ReactPlayer from "react-player";

function case_vid({ logo, title, details, casen, alter, src }) {
  let videosCaseClass = "videospageCard";
  if (alter === "true") {
    videosCaseClass = "videospageCardAlt";
  }

  return (
    <>
      <div className={videosCaseClass}>
        <div className="caseDets">
          <div className="videospageIdentity">
            <h5 className="videospagePatientName">{title}</h5>
          </div>
          <div className="videospageTimeline">
            <img className="videospageIdImg" src={patientcard} alt="card" />
            <p className="videospageId">Ps/Hom/2022/00{casen}</p>
          </div>
          {/* <div className='videospageTitle'>
                        <img className='titleImg' src={patienttitle} alt='card' />
                        <p className='titleText'>LOREMIMPSUM</p>
                    </div> */}
          <div>
            <p className="videospagePatientDets">{details}</p>
          </div>
          <div className="videospageCardFooter">
            <Stars className="videospagerating" />
          </div>
        </div>
        <div className="patientImgDiv">
          <ReactPlayer
            url={src}
            className="react-player"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </>
  );
}

export default case_vid;
