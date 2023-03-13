import React from "react";
import { useState } from "react";
// import Cases from "../testimonial_case/case_test";
import "./case_container.css";
import ArrowD from "./arrowDown.png";
import Cases from "../testimonial_case/case_test2.0";
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
              <th>Title</th>
              <th>Summary</th>
              <th>Rating</th>
              <th>Auther</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Ps/Hom/2022/00</td>
              <td>LOREMIMPSUM</td>
              <td>Proin tincidunt auctor nisl,</td>
              <td>7</td>
              <td>7</td>
              <td>
                <Link to="/pathy/homeopathy/direct-testimonials/case1">
                  Read more
                </Link>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Ps/Hom/2022/00</td>
              <td>LOREMIMPSUM</td>
              <td>Proin tincidunt auctor nisl,</td>
              <td>7</td>
              <td>7</td>
              <td>
                <Link to="/pathy/homeopathy/direct-testimonials/case1">
                  Read more
                </Link>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Ps/Hom/2022/00</td>
              <td>LOREMIMPSUM</td>
              <td>Proin tincidunt auctor nisl,</td>
              <td>7</td>
              <td>7</td>
              <td>
                <Link to="/pathy/homeopathy/direct-testimonials/case1">
                  Read more
                </Link>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Ps/Hom/2022/00</td>
              <td>LOREMIMPSUM</td>
              <td>Proin tincidunt auctor nisl,</td>
              <td>7</td>
              <td>7</td>
              <td>
                <Link to="/pathy/homeopathy/direct-testimonials/case1">
                  Read more
                </Link>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Ps/Hom/2022/00</td>
              <td>LOREMIMPSUM</td>
              <td>Proin tincidunt auctor nisl,</td>
              <td>7</td>
              <td>7</td>
              <td>
                <Link to="/pathy/homeopathy/direct-testimonials/case1">
                  Read more
                </Link>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Ps/Hom/2022/00</td>
              <td>LOREMIMPSUM</td>
              <td>Proin tincidunt auctor nisl,</td>
              <td>7</td>
              <td>7</td>
              <td>
                <Link to="/pathy/homeopathy/direct-testimonials/case1">
                  Read more
                </Link>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Ps/Hom/2022/00</td>
              <td>LOREMIMPSUM</td>
              <td>Proin tincidunt auctor nisl,</td>
              <td>7</td>
              <td>7</td>
              <td>
                <Link to="/pathy/homeopathy/direct-testimonials/case1">
                  Read more
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Case_container;
