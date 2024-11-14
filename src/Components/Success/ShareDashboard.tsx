import Heading from "../Common/Heading";
import { Button, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import React, { useState } from "react";

const ShareDashboard = () => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div>
      <Heading heading="Tell Your Friends" />
      <Typography paragraph>
        Thank you for helping make the world a better place to Live, Work and
        Play!
      </Typography>

      <Button
        size="large"
        variant="contained"
        sx={{ marginRight: "10px" }}
        onClick={() => {
          window.location.href = "/dashboard";
        }}
      >
        Dashboard
      </Button>
      <Button
        size="large"
        endIcon={<ShareIcon />}
        variant="outlined"
        onClick={() => {
          let url = "www.bossbouncer.com";
          navigator.clipboard
            .writeText(url) // Copy to clipboard
            .then(() => {
              setIsCopied(true);
              setTimeout(() => setIsCopied(false), 2000); // Hide tooltip after 2 seconds
            })
            .catch((err) => {
              console.error("Failed to copy URL: ", err);
            });
        }}
      >
        Share
      </Button>
      {isCopied && (
        <span
          style={{
            position: "absolute",
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            marginBottom: "8px",
            padding: "5px 10px",
            backgroundColor: "#333",
            color: "#fff",
            borderRadius: "4px",
            fontSize: "12px",
            whiteSpace: "nowrap",
            opacity: isCopied ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          URL copied!
        </span>
      )}
    </div>
  );
};

export default ShareDashboard;
