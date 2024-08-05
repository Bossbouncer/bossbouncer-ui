import React from "react";
import { Robot3 } from "../../Icons/Robot3";
import { useMediaQuery } from "@mui/material";
import YourInformationForm from "./YourInformationForm";
import { Robot1 } from "../../Icons/Roobt1";
//This is step3
const Index = () => {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <div className="component">
      <div className="left-side">
        <Robot1 isMobile={isMobile} />
      </div>
      <div className="right-side">
        <YourInformationForm />
      </div>
    </div>
  );
};

export default Index;
