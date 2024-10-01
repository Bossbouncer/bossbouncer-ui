import React from "react";
import Heading from "../Common/Heading";
import { Button, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
const ShareDashboard = () => {
  return (
    <div>
      <Heading heading="Tell Your Friends" />
      <Typography paragraph>
        Thank you for helping make the world a better place to Live, Work and
        Play!
      </Typography>

      <Button size="large" variant="contained" sx={{ marginRight: "10px" }} onClick={()=>{
        window.location.href="/dashboard"
      }}>
        Dashboard
      </Button>
      <Button size="large" endIcon={<ShareIcon />} variant="outlined">
        Share
      </Button>
    </div>
  );
};

export default ShareDashboard;
