import React from "react";
import { Path } from "./Path";
import "./pathiesStyles.css";
// import Ayurveda from "./ayurveda.png";
// import yoga from "./Yoga.png";
import homeopathy from "./homeopathy.png";
// import homeopathy2 from "./homeopathy2.png";
import PathType from "./PathType";

export const Pathies = () => {
  const small = `Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum`;
  // const hom=`Homeopathy is a medical system based on the belief that the body can cure itself.`
  // const ayur=`The traditional Hindu system of medicine that uses a combination of diet, herbal treatment, yogic breathing to treat illness.`
  // const yog= `Pranyama is the practice of breath regulation. It's a main component of Yoga, an exercise for physical and mental well being.`
  return (
    <div className="akshat_mini">
      <div className="container_pathies">
        <h2 className="heading_pathies">Pathies/Therapies with Drugs</h2>
        <div className="paths_container_type">
          {/* <PathType
          className="path"
          name="Pathies/Therapies with Drugs"
          data1="Allopathy"
          data2="Ayurveda"
          data3="Homeopathy"
        />
        <PathType
          className="path"
          name="Pathies without any Drugs"
          data1="Acupressure"
          data2="Chiropractor"
          data3="Cow Therapy"
        />
        <PathType
          className="path"
          name="Less known Therapies"
          data1="Electrohomeopathy"
          data2="Water Therapy"
          data3="Light Therapy"
        /> */}
        </div>

        <div className="paths_container">
          <Path className="path" name="Homeopathy" />
          <Path className="path" name="Ayurveda" />
          <Path className="path" name="Yoga" />
        </div>
      </div>
      <div className="container_pathies">
        <h2 className="heading_pathies">Pathies without any Drugs</h2>
        <div className="paths_container_type">
          {/* <PathType
          className="path"
          name="Pathies/Therapies with Drugs"
          data1="Allopathy"
          data2="Ayurveda"
          data3="Homeopathy"
        />
        <PathType
          className="path"
          name="Pathies without any Drugs"
          data1="Acupressure"
          data2="Chiropractor"
          data3="Cow Therapy"
        />
        <PathType
          className="path"
          name="Less known Therapies"
          data1="Electrohomeopathy"
          data2="Water Therapy"
          data3="Light Therapy"
        /> */}
        </div>

        <div className="paths_container">
          <Path className="path" name="Homeopathy" />
          <Path className="path" name="Ayurveda" />
          <Path className="path" name="Yoga" />
        </div>
      </div>
      <div className="container_pathies">
        <h2 className="heading_pathies">Less known Therapies</h2>
        <div className="paths_container_type">
          {/* <PathType
          className="path"
          name="Pathies/Therapies with Drugs"
          data1="Allopathy"
          data2="Ayurveda"
          data3="Homeopathy"
        />
        <PathType
          className="path"
          name="Pathies without any Drugs"
          data1="Acupressure"
          data2="Chiropractor"
          data3="Cow Therapy"
        />
        <PathType
          className="path"
          name="Less known Therapies"
          data1="Electrohomeopathy"
          data2="Water Therapy"
          data3="Light Therapy"
        /> */}
        </div>

        <div className="paths_container">
          <Path className="path" name="Homeopathy" />
          <Path className="path" name="Ayurveda" />
          <Path className="path" name="Yoga" />
        </div>
      </div>
    </div>
  );
};
// data={hom}
// data={ayur}
// data={yog}
