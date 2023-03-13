import React from "react";
import "./CaseCard.css";
import image1 from "./images/image1.png";

function CaseCard() {
  return (
    <div className="caseCard-div">
      <div className="caseCard">
        <div className="top">
          <div className="left">
            <h3>Summary</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, nisi molestiae reprehenderit cupiditate culpa
              provident magni consequatur in libero illum rem. Iste autem minima
              error repellat doloribus harum quibusdam tempora, hic vitae et
              reprehenderit.
            </p>
            <h4>Initial case history</h4>
          </div>
          <div className="right">
            <div className="pathyCard">
              <div className="Thumbnail">
                <img className="thumbnailimg" src="" alt="logo" />
              </div>
              <div className="videoDet">
                <h6 className="vidTit">title</h6>
                <p className="vidDesc">details</p>
              </div>
              <div className="card_footer">
                <a href="" target="./blank">
                  <button className="Redirect_Btn">Go to video</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseCard;
