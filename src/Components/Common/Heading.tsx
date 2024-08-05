import { Typography } from "@mui/material";
import React from "react";

interface HeadingProps {
  heading: string;
  variant?:string;
}

const Heading = (props: HeadingProps) => {
  const { heading,variant } = props;
  let words = heading.split(" ");
  let lastWord = words.at(-1);
  let firstWords = words.splice(0, words.length - 1).join(" ");
  const sxStyles = {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignSelf: "center",
    textAlign: "center",
    fontSize: "clamp(3.5rem, 10vw, 4rem)",
  };

  switch(variant){
    case "h4":
      debugger;
      return (
        <div>
          <Typography
            variant="h4"
            sx={sxStyles}
          >
            {firstWords}&nbsp;
            <Typography
              component="span"
              variant="h4"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
                color: (theme) =>
                  theme.palette.mode === "light" ? "primary.main" : "primary.light",
              }}
            >
              {lastWord}
            </Typography>
          </Typography>
        </div>
      );
    default:
      return (

        <div>
          <Typography
            variant="h1"
            sx={sxStyles}
          >
            {firstWords}&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
                color: (theme) =>
                  theme.palette.mode === "light" ? "primary.main" : "primary.light",
              }}
            >
              {lastWord}
            </Typography>
          </Typography>
        </div>
      );
  }

};

export default Heading;
