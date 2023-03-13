import React from "react";
import "./reportdetailStyles.css";

const ReportDetails = ({ details }) => {
  return (
    <div className="reportdetails_card">
      <h2 className="reportdetails_heading">Medical Report</h2>
      <div className="reportdetails_info">
        <p>Info : {details.medicalinfo}</p>
        <p>Allergies : {details.allergies}</p>
      </div>
    </div>
  );
};

export default ReportDetails;
