import React from "react";
import { useState } from "react";
import Cases from "../videos_case/case_vid2.0_";
import "./vid_container.css";
import ArrowD from "./arrowDown.png";
import Thumbnail from "./Thumnail.jpg";
import Thumbnail1 from "./Thumnail1.jpg";
import { Link } from "react-router-dom";
function Video_container() {
  const [readMore, setReadMore] = useState(false);

  const obj1 = {
    logo: Thumbnail1,
    title: "Ayurveda Over Western Medicines",
    details:
      "Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...",
    src: "https://www.youtube.com/watch?v=HzTvEK1sVi0",
  };
  const obj2 = {
    logo: Thumbnail,
    title: "Secrets of Ayurveda",
    details:
      "Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec...",
    src: "https://www.youtube.com/watch?v=Z2icN6wFjus",
  };
  const array = [obj1, obj2, obj1, obj2, obj1];
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
              <th>Link of the video</th>
              <th>Topic Title</th>
              <th>Views</th>
              <th>Identification no.</th>
              <th>Channel name</th>
              <th>Rating</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {/* <td>{<iframe href={src}>Link</iframe>}</td> */}
              <td>
                <a href="https://www.youtube.com/watch?v=HzTvEK1sVi0">Link</a>
              </td>
              <td>Ayurveda Over Western Medicines</td>
              <td>54K</td>

              <td>Ps/Hom/2022/001</td>
              <td>Dr Rahul Joshi</td>
              <td>8.5/10</td>
              <td>
                <Link to="/pathy/homeopathy/youtube">view more</Link>
              </td>
            </tr>
            <tr>
              <td>1</td>
              {/* <td>{<iframe href={src}>Link</iframe>}</td> */}
              <td>
                <a href="https://www.youtube.com/watch?v=HzTvEK1sVi0">Link</a>
              </td>
              <td>Ayurveda Over Western Medicines</td>
              <td>54K</td>

              <td>Ps/Hom/2022/001</td>
              <td>Dr Rahul Joshi</td>
              <td>8.5/10</td>
              <td>
                <Link to="/pathy/homeopathy/youtube">view more</Link>
              </td>
            </tr>
            <tr>
              <td>1</td>
              {/* <td>{<iframe href={src}>Link</iframe>}</td> */}
              <td>
                <a href="https://www.youtube.com/watch?v=HzTvEK1sVi0">Link</a>
              </td>
              <td>Ayurveda Over Western Medicines</td>
              <td>54K</td>

              <td>Ps/Hom/2022/001</td>
              <td>Dr Rahul Joshi</td>
              <td>8.5/10</td>
              <td>
                <Link to="/pathy/homeopathy/youtube">view more</Link>
              </td>
            </tr>
            <tr>
              <td>1</td>
              {/* <td>{<iframe href={src}>Link</iframe>}</td> */}
              <td>
                <a href="https://www.youtube.com/watch?v=HzTvEK1sVi0">Link</a>
              </td>
              <td>Ayurveda Over Western Medicines</td>
              <td>54K</td>

              <td>Ps/Hom/2022/001</td>
              <td>Dr Rahul Joshi</td>
              <td>8.5/10</td>
              <td>
                <Link to="/pathy/homeopathy/youtube">view more</Link>
              </td>
            </tr>
            <tr>
              <td>1</td>
              {/* <td>{<iframe href={src}>Link</iframe>}</td> */}
              <td>
                <a href="https://www.youtube.com/watch?v=HzTvEK1sVi0">Link</a>
              </td>
              <td>Ayurveda Over Western Medicines</td>
              <td>54K</td>

              <td>Ps/Hom/2022/001</td>
              <td>Dr Rahul Joshi</td>
              <td>8.5/10</td>
              <td>
                <Link to="/pathy/homeopathy/youtube">view more</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Video_container;
