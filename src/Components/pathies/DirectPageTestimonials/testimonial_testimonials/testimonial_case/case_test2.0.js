import React from "react";
import { useState } from "react";
import patientcard from "./patientcard.png";
import cardrectangle from "./cardrectangle.png";
import patientimg from "./patientimg.png";
import patienttitle from "./patienttitle.png";
import "./case_test.css";
import Stars from "../../testimonial_stars/stars";
import { Link } from "react-router-dom";
function case_test({ name, casen, details, alter }) {
  let testimonialCaseClass = "testimonialCard";
  if (alter === "true") {
    testimonialCaseClass = "testimonialCardAlt";
  }
  return (
    <>
      {/* <table class="styled-table">
        <tbody>
          <tr>
            <td>{casen}</td>
            <td>Ps/Hom/2022/00{casen}</td>
            <td>LOREMIMPSUM</td>
            <td>Proin tincidunt auctor nisl,</td>
            <td>7</td>
            <td>7</td>
          </tr>
        </tbody>
      </table> */}
      <Link to="/pathy/homeopathy/direct-testimonials/case1">
        <table id="customers">
          <tr>
            <td>{casen}</td>
            <td>Ps/Hom/2022/00{casen}</td>
            <td>LOREMIMPSUM</td>
            <td>Proin tincidunt auctor nisl,</td>
            <td>7</td>
            <td>7</td>
          </tr>
        </table>
      </Link>
    </>
  );
}

export default case_test;
