import React from "react";
import rightArrow from "./images/rightArrow.png";
import questionMark from "./images/questionMark.png";
import feedbackIcon from "./images/feedbackIcon.png";
import shareIcon from "./images/shareIcon.png";
import searchIcon from "./images/image1.png";
import healthcareIcon from "./images/image2.png";
import healthguardIcon from "./images/image3.png";
import syringeIcon from "./images/image4.png";
import ReactPlayer from "react-player";
import styles from "./Experience.module.css";
import { Link } from "react-router-dom";

function Experience() {
  return (
    <div className={`${styles.experience_section}`}>
      <div className={`${styles.part1}`}>
        <div className={`${styles.box} ${styles.box1}`}>
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            <div className={`${styles.container} ${styles.boxContent}`}>
              <div
                className={`${styles.boxContent_left}`}
                style={{ width: "85%" }}
              >
                <h3>
                  Share Experience
                  <span>
                    <img src={shareIcon} alt="rightArrow" />
                  </span>
                </h3>
                <p>
                  Your experience/testimonials might be the cure for others.
                </p>
              </div>
              <div
                className={`${styles.boxContent_right}`}
                style={{ width: "15%" }}
              >
                <img src={rightArrow} alt="" />
              </div>
            </div>
            <div className={`${styles.background}`}></div>
          </a>
        </div>
        <div className={`${styles.box} ${styles.box2}`}>
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            <div className={`${styles.container} ${styles.boxContent}`}>
              <div
                className={`${styles.boxContent_left}`}
                style={{ width: "85%" }}
              >
                <h3>
                  Ask Us
                  <span>
                    <img src={questionMark} alt="rightArrow" />
                  </span>
                </h3>
                <p>
                  Share your symptoms, we will suggest you the best possible
                  cure available.
                </p>
              </div>
              <div
                className={`${styles.boxContent_right}`}
                style={{ width: "15%" }}
              >
                <img src={rightArrow} alt="" />
              </div>
            </div>
            <div className={`${styles.background}`}></div>
          </a>
        </div>
        <div className={`${styles.box} ${styles.box3}`}>
          <a
            href="/feedback"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className={`${styles.container} ${styles.boxContent}`}>
              <div
                className={`${styles.boxContent_left}`}
                style={{ width: "85%" }}
              >
                <h3>
                  Feedback
                  <span>
                    <img src={feedbackIcon} alt="rightArrow" />
                  </span>
                </h3>
                <p>Your feedback will help us serve better for humanity.</p>
              </div>
              <div
                className={`${styles.boxContent_right}`}
                style={{ width: "15%" }}
              >
                <img src={rightArrow} alt="rightArrow" />
              </div>
            </div>
            <div className={`${styles.background}`}></div>
          </a>
        </div>
      </div>

      <div className={`${styles.part2} ${styles.container}`}>
        {/* <div classNme="video-card">
          <iframe
            allowfullscreen=""
            className="YOUTUBE-iframe-video video-card-top"
            data-thumbnail-src="https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg"
            frameborder="0"
            src="https://www.youtube.com/embed/zV0zS1kMF4U?feature=player_embedded"
          ></iframe>
        </div> */}
        {/* <div className="player">
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=uk0mqkfP0D8"}
            className="react-player"
            width="100%"
            height="100%"
          />
        </div> */}
        <div className={`${styles.left}`}>
          <div className={`${styles.col1}`}>
            <div className={`${styles.box} ${styles.box1}`}>
              <img src={searchIcon} alt="img" />
              <h3>Our Mission</h3>
              <ul>
                <li>Integration of all therapies.</li>
                <li>Refinement of information.</li>
                <li>Verification of data.</li>
              </ul>
            </div>
            <div className={`${styles.box} ${styles.box2}`}>
              <img src={healthguardIcon} alt="img" />
              <h3>Problems We Solve</h3>
              <ul>
                <li>Spread awareness about alternative therapies.</li>
                <li>Help patients choose the right treatment.</li>
                <li>Affordable therapies to cure patients.</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.col2}`}>
            <div className={`${styles.box} ${styles.box1}`}>
              <img src={healthcareIcon} alt="img" />
              <h3>Our Vision</h3>
              <p>
                To inspire hope, and contribute to health and well-being by
                providing the best alternative treatment to every patient.
              </p>
            </div>
            <div className={`${styles.box} ${styles.box2}`}>
              <img src={syringeIcon} alt="img" />
              <h3>Our Motive</h3>
              <p>We want to help you own your well-being.</p>
            </div>
          </div>
        </div>
        <div className={`${styles.right}`}>
          <div className={`${styles.col3}`}>
            <h2>What we do ?</h2>
            <p>
              Internet contains huge amount of data in the form of testimonials
              of patients in the form of ebooks, website, youtube videos,
              articles which are scattered, unverified and unorganized.
              <br />
              <br />
              This website plans to collect various important data, refine them,
              verify them as much as possible and organize it systematically.
              This systematically and verified data may help a confused patient
              to draw important conclusions about his line of treatment.
              <br />
              <br />
              This website aims to include data from all important therapies as
              well as details about important clinics, hospitals as well as
              groups. This is a mission by the people, for the people of the
              people.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
