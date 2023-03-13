import React from "react";
import { Path } from "./Path";
import "./pathiesStyles.css";
import ShowMore from "react-show-more-button";
// import Ayurveda from "./ayurveda.png";
// import yoga from "./Yoga.png";
import homeopathy from "./homeopathy.png";
// import homeopathy2 from "./homeopathy2.png";
import PathType from "./PathType";

export const Pathies1 = () => {
  const small = `Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`;
  // const hom=`Homeopathy is a medical system based on the belief that the body can cure itself.`
  // const ayur=`The traditional Hindu system of medicine that uses a combination of diet, herbal treatment, yogic breathing to treat illness.`
  // const yog= `Pranyama is the practice of breath regulation. It's a main component of Yoga, an exercise for physical and mental well being.`
  return (
    <>
      <div className="pathi_head">
        <h1>Pathies</h1>
      </div>
      <div className="container-fluid bg-gradient p-5">
        <div className="row m-auto text-center w-75">
          <div className="col-4 princing-item red">
            <div className="pricing-divider ">
              <h3 className="text-light">Pathies/Therapies with Drugs</h3>
              <svg
                class="pricing-divider-img"
                enable-background="new 0 0 300 100"
                height="100px"
                id="Layer_1"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 300 100"
                width="300px"
                x="0px"
                xmlns="http://www.w3.org/2000/svg"
                y="0px"
              >
                <path
                  class="deco-layer deco-layer--1"
                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                  fill="#FFFFFF"
                  opacity="0.6"
                ></path>
                <path
                  class="deco-layer deco-layer--2"
                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                  fill="#FFFFFF"
                  opacity="0.6"
                ></path>
                <path
                  class="deco-layer deco-layer--3"
                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
                  fill="#FFFFFF"
                  opacity="0.7"
                ></path>
                <path
                  class="deco-layer deco-layer--4"
                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                  fill="#FFFFFF"
                ></path>
              </svg>
              {/* <p className="my-0 display-4 text-light font-weight-normal mb-3 ">
              Pathies/Therapies with Drugs
            </p> */}
            </div>
            <div className="card-body bg-white mt-0 shadow">
              <ul className="list-unstyled mb-5 position-relative">
                <li>Allopathy</li>
                <li>Ayurveda</li>
                <ShowMore maxHeight={85}>
                  <li>Homeopathy</li> <li>Yoga/Pranayama</li>
                  <li>
                    Special combination therapies/ Gerson therapy/Keto Diet
                  </li>
                </ShowMore>
              </ul>
            </div>
          </div>

          <div className="col-4 princing-item blue">
            <div className="pricing-divider ">
              <h3 className="text-light">Pathies without any Drugs</h3>
              <svg
                class="pricing-divider-img"
                enable-background="new 0 0 300 100"
                height="100px"
                id="Layer_1"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 300 100"
                width="300px"
                x="0px"
                xmlns="http://www.w3.org/2000/svg"
                y="0px"
              >
                <path
                  class="deco-layer deco-layer--1"
                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                  fill="#FFFFFF"
                  opacity="0.6"
                ></path>
                <path
                  class="deco-layer deco-layer--2"
                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                  fill="#FFFFFF"
                  opacity="0.6"
                ></path>
                <path
                  class="deco-layer deco-layer--3"
                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
                  fill="#FFFFFF"
                  opacity="0.7"
                ></path>
                <path
                  class="deco-layer deco-layer--4"
                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                  fill="#FFFFFF"
                ></path>
              </svg>

              {/* <h4 className="my-0 display-4 text-light font-weight-normal mb-3">
              <span className="h3">$</span> 250 <span className="h5">/mo</span>
            </h4> */}
            </div>

            <div className="card-body bg-white mt-0 shadow">
              <ul className="list-unstyled mb-5 position-relative">
                <li>Sunlight therapy</li>
                <li>Supplements</li>
                <ShowMore maxHeight={100}>
                  {" "}
                  <li>Yoga/Pranayama</li>
                  <li>
                    Special combination therapies/ Gerson therapy/Keto Diet
                  </li>
                  <li>General Instructions</li>
                  <li>Sunlight therapy</li>
                  <li>Reiki</li>
                  <li>Pranayam/Breathing Exercise</li>
                  <li>Pranic Healing</li>
                  <li>Naturopathy</li>
                  <li>Meditation/Mental exercise</li>
                  <li>Home Remedies</li>
                  <li>Herbs</li>
                  <li>Food Therapy/ Raw juice therapy</li>
                  <li>Fasting Therapy/Intermittent Fasting</li>
                </ShowMore>
              </ul>
            </div>
          </div>

          <div className="col-4 princing-item green">
            <div className="pricing-divider ">
              <h3 className="text-light">Less known Therapies</h3>
              <svg
                class="pricing-divider-img"
                enable-background="new 0 0 300 100"
                height="100px"
                id="Layer_1"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 300 100"
                width="300px"
                x="0px"
                //   xml:space="preserve"
                //   xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                y="0px"
              >
                <path
                  class="deco-layer deco-layer--1"
                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                  fill="#FFFFFF"
                  opacity="0.6"
                ></path>
                <path
                  class="deco-layer deco-layer--2"
                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                  fill="#FFFFFF"
                  opacity="0.6"
                ></path>
                <path
                  class="deco-layer deco-layer--3"
                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
                  fill="#FFFFFF"
                  opacity="0.7"
                ></path>
                <path
                  class="deco-layer deco-layer--4"
                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                  fill="#FFFFFF"
                ></path>
              </svg>
              {/* <h4 className="my-0 display-4 text-light font-weight-normal mb-3">
              <span className="h3">$</span> 450 <span className="h5">/mo</span>
            </h4> */}
            </div>

            <div className="card-body bg-white mt-0 shadow">
              <ul className="list-unstyled mb-5 position-relative">
                <li>users included</li>
                <li>of storage</li>
                <ShowMore maxHeight={100}>
                  <li>Email support</li> <li>Yoga/Pranayama</li>
                  <li>
                    Special combination therapies/ Gerson therapy/Keto Diet
                  </li>
                </ShowMore>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
