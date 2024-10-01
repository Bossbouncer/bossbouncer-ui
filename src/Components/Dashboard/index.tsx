import { useEffect } from "react";
import { useGlobalContext } from "../../Context/AppContext";
import ShowData from "./ShowData";
import Heading from "../Common/Heading";
import { Padding } from "@mui/icons-material";
import "./index.css";
const Index = () => {
  const { state, dispatch } = useGlobalContext();
  useEffect(() => {
    if (state.accessToken === null) window.location.href = "/signin";
  }, []);
  return (
    <div className="component">
      {/* <h1>Dashboard</h1> */}
      <div style={{ width: "100%", padding: "10px" }}>
        <div className="heading-div">
          <Heading heading={"Dashboard"} />
        </div>
        <div className="content-div">
          <ShowData />
          {/* <ShowData />
          <ShowData />
          <ShowData /> */}
        </div>
      </div>
    </div>
  );
};

export default Index;
