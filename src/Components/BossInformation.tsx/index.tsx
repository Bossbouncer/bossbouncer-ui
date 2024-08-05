import React from "react";
import { Robot1 } from "../../Icons/Roobt1";
import { useMediaQuery } from "@mui/material";
import BossInformationForm from "./BossInformationForm";
//This is step2
const Index = () => {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <div className="component">
      <div className="left-side">
        <Robot1 isMobile={isMobile} />
      </div>
      <div className="right-side">
        <BossInformationForm />
      </div>
    </div>
  );
};

export default Index;
