import React from "react";

import { useState } from "react";
import patientcard from "./patientcard.png";
import cardrectangle from "./cardrectangle.png";
import patientimg from "./patientimg.png";
import patienttitle from "./patienttitle.png";
import styles from "./BooksArticles_case_test.module.css";
import Stars from "../../BooksArticles_stars/BooksArticles_stars";
import { Link } from "react-router-dom";
function case_test({ name, casen, details, alter }) {
  let testimonialCaseClass = "testimonialCard";
  if (alter === "true") {
    testimonialCaseClass = "testimonialCardAlt";
  }
  return (
    <>
      <Link to="/pathy/homeopathy/books">
        <table class="styled-table">
          <tbody>
            <tr>
              <td> case-{casen}</td>
              <td>Mg/H/Books/00{casen}</td>

              <td>Proin tincidunt auctor nisl,</td>
              <td>7</td>
              <td>LOREMIMPSUM</td>
            </tr>
          </tbody>
        </table>
      </Link>
    </>
  );
}

export default case_test;
