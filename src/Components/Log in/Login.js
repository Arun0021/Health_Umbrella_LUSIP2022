import React from "react";

import ImagesSection from "./Components/ImagesSection";
import OuterCard from "./Components/OuterCard";
import Header from "./Components/Header";
import SubHeader from "./Components/SubHeader";
import InnerCard from "./Components/InnerCard";
import Form from "./Components/Form";

import "./OuterContainer.css";

const Login = () => {
  return (
    <div className="prabhav">
      <div className="outer-container ">
        <OuterCard>
          <Header />
          <InnerCard>
            <SubHeader />
            <Form />
          </InnerCard>
        </OuterCard>
        {/* <ImagesSection /> */}
      </div>
    </div>
  );
};

export default Login;
