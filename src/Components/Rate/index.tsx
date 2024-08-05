import { Robot1 } from "../../Icons/Roobt1";
import RatingSystem from "./RatingSystem";
import { useMediaQuery } from "@mui/material";
import { useGlobalContext } from "../../Context/AppContext";

const Index = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const { state } = useGlobalContext();

  return (
    <div className="component">
      <div className="left-side">
        <Robot1 isMobile={isMobile} />
      </div>
      <h1>{state.rating}</h1>
      <div className="right-side">
        <RatingSystem />
      </div>
    </div>
  );
};

export default Index;
