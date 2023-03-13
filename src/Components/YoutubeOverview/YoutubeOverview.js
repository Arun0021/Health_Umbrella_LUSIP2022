import React from "react";
import CaseCard from "./CaseCard/CaseCard";
import DetailsCard from "./DetailsCard/DetailsCard";
import Header from "./Header/Header";

function CaseOverview() {
  return (
    <div className="case-overview">
      <Header />
      <CaseCard />
      {/* <DetailsCard /> */}
    </div>
  );
}

export default CaseOverview;
