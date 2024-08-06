import { Robot1 } from "../../Icons/Roobt1";
import { Typography, useMediaQuery } from "@mui/material";
import { useGlobalContext } from "../../Context/AppContext";
import Heading from "../Common/Heading";
import ShareDashboard from "./ShareDashboard";

const Index = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const { state } = useGlobalContext();

  return (
    <div className="component">
      <div className="left-side">
        <Typography sx={{color:(theme)=>theme.palette.success.main}} variant="h1">SUCCESS!!</Typography>
        <Robot1 isMobile={isMobile} />
      </div>
      <div className="right-side">
        <ShareDashboard/>
      </div>
    </div>
  );
};

export default Index;
