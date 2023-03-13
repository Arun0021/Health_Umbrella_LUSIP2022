import React from "react";
import "./personaldetailStyles.css";

const PersonalDetails = ({ details }) => {
  return (
    <div className="personaldetails_card">
      <h2 className="personaldetails_heading">Personal Details</h2>
      <div className="personaldetails_info">
        <p>Name : {details.name}</p>
        <p>Sex : {details.sex}</p>
        <p>Age : {details.age}</p>
        <p>Ocuppation : {details.occupation}</p>
        <p>Email : {details.region}</p>
        <p>Phone : {details.phone}</p>
        <p>Region : {details.region}</p>
      </div>
    </div>
  );
};

export default PersonalDetails;
