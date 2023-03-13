import React from "react";
import { useState } from "react";
import patientcard from "./patientcard.png";
import cardrectangle from "./cardrectangle.png";
import patientimg from "./patientimg.png";
import patienttitle from "./patienttitle.png";
import "./case_vid.css";
import Stars from "../../videospage_stars/stars";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

function case_vid({ logo, title, details, casen, alter, src }) {
  let videosCaseClass = "videospageCard";
  if (alter === "true") {
    videosCaseClass = "videospageCardAlt";
  }

  return (
    <>
      <Link to="/pathy/homeopathy/youtube">
        <table class="styled-table">
          <tbody>
            <tr>
              <td>1</td>
              {/* <td>{<iframe href={src}>Link</iframe>}</td> */}
              <a href={src}>Link</a>
              <td>{title}</td>
              <td>54K</td>

              <td>Ps/Hom/2022/00{casen}</td>
              <td>Dr Rahul Joshi</td>
              <td>8.5/10</td>
            </tr>
          </tbody>
        </table>
      </Link>
    </>
  );
}

export default case_vid;
