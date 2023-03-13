import React from "react";
import { useState } from "react";
import Cases from "../BooksArticles_testimonial_case/BooksArticles_case_test_2.0";
import styles from "./BooksArticles_case_container.module.css";
import ArrowD from "./arrowDown.png";
import { Link } from "react-router-dom";

function Case_container() {
  const [readMore, setReadMore] = useState(false);

  const obj1 = {
    name: "Bob Brown",
    casen: "1",
    details:
      "Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. ",
    alter: 1,
  };

  const obj2 = {
    name: "Cyrus Green",
    casen: "2",
    details:
      "Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. ",
    alter: 1,
  };

  const obj3 = {
    name: "Shah Rukh",
    casen: "3",
    details:
      "Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. ",
    alter: 1,
  };

  const obj4 = {
    name: "Sam Young",
    casen: "4",
    details:
      "Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. ",
    alter: 1,
  };

  const obj5 = {
    name: "Iris Yang",
    casen: "5",
    details:
      "Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. ",
  };

  const obj6 = {
    name: "Iris Yang",
    casen: "6",
    details:
      "Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. ",
  };
  const array = [obj1, obj2, obj3, obj4, obj5, obj6, obj1, obj2, obj3];
  const linkName = readMore ? "Read Less" : "Read More";
  const size = readMore ? true : false;

  return (
    <div className="tests">
      <div className="table_2o">
        {" "}
        <table class="styled-table">
          {" "}
          <thead>
            <tr>
              <th>S.No</th>
              <th>Identification No</th>

              <th>Summary</th>
              <th>Rating</th>
              <th>Comments</th>
              <th>Book summery</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> case-1</td>
              <td>Mg/H/Books/00</td>

              <td>Proin tincidunt auctor nisl,</td>
              <td>7</td>
              <td>LOREMIMPSUM</td>
              <td>
                <Link to="/pathy/homeopathy/books">view more</Link>
              </td>
            </tr>
            <tr>
              <td> case-1</td>
              <td>Mg/H/Books/00</td>

              <td>Proin tincidunt auctor nisl,</td>
              <td>7</td>
              <td>LOREMIMPSUM</td>
              <td>
                <Link to="/pathy/homeopathy/books">view more</Link>
              </td>
            </tr>
            <tr>
              <td> case-1</td>
              <td>Mg/H/Books/00</td>

              <td>Proin tincidunt auctor nisl,</td>
              <td>7</td>
              <td>LOREMIMPSUM</td>
              <td>
                <Link to="/pathy/homeopathy/books">view more</Link>
              </td>
            </tr>
            <tr>
              <td> case-1</td>
              <td>Mg/H/Books/00</td>

              <td>Proin tincidunt auctor nisl,</td>
              <td>7</td>
              <td>LOREMIMPSUM</td>
              <td>
                <Link to="/pathy/homeopathy/books">view more</Link>
              </td>
            </tr>
            <tr>
              <td> case-1</td>
              <td>Mg/H/Books/00</td>

              <td>Proin tincidunt auctor nisl,</td>
              <td>7</td>
              <td>LOREMIMPSUM</td>
              <td>
                <Link to="/pathy/homeopathy/books">view more</Link>
              </td>
            </tr>
            <tr>
              <td> case-1</td>
              <td>Mg/H/Books/00</td>

              <td>Proin tincidunt auctor nisl,</td>
              <td>7</td>
              <td>LOREMIMPSUM</td>
              <td>
                <Link to="/pathy/homeopathy/books">view more</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Case_container;
