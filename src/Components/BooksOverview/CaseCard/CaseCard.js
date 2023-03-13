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
            <img src={image1} alt="" />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <p>
              <span>After 6 months:</span>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Qui ipsum est non, quisquam odit esse laborum
              debitis? Nam, laudantium voluptate architecto enim itaque error
              laboriosam eum vero consectetur quos cumque quis sed deleniti
              minima porro autem commodi, consequuntur quibusdam, expedita quod
              rerum earum nihil officiis? Voluptatum laudantium dolore laborum
              recusandae.
            </p>
          </div>
          <div className="right">
            <p>
              <span>After 12 months:</span>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Qui ipsum est non, quisquam odit
              esse laborum debitis? Nam, laudantium voluptate architecto enim
              itaque error laboriosam eum vero consectetur quos cumque quis sed
              deleniti minima porro autem commodi, consequuntur quibusdam,
              expedita quod rerum earum nihil officiis? Voluptatum laudantium
              dolore laborum recusandae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseCard;
