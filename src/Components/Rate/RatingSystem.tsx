import { Typography, useTheme } from "@mui/material";
import React from "react";
import Heading from "../Common/Heading";
import PushableButton from "../Common/PushableButton";
import "./rating.css";
import ThumbsUp from "../../Icons/ThumbsUp";
import { ThumbDown, ThumbUp } from "@mui/icons-material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useGlobalContext } from "../../Context/AppContext";

const RatingSystem = () => {
  const themeObject = useTheme();
  const isMobile = useMediaQuery('(max-width:900px)');
  const { state, dispatch } = useGlobalContext();
  return (
    <div className="rating">
      <Heading heading={"Rate Your Boss"} />
      <Typography variant="h4" color={themeObject.palette.error.main}>
        Forever Anonymous
      </Typography>
      <div className="selection-buttons">
        <PushableButton
          color={themeObject.palette.success.main}
          gradientColor="hsl(0 0% 0%)"
          onClick={() => {
            dispatch({
              type: "UPDATE_RATING",
              payload:{
                rating:1
              }
            });
          }}
        >
          <ThumbUp
            fontSize={isMobile?"small":"large"}
            sx={{ color: (theme) => theme.palette.text.primary }}
          />
        </PushableButton>
        <PushableButton
          color={themeObject.palette.primary.main}
          gradientColor="hsl(0 0% 0%)"
          onClick={() => {
            dispatch({
              type: "UPDATE_RATING",
              payload:{
                rating:0
              }
            });
          }}
        >
          <ThumbUp
            fontSize={isMobile?"small":"large"}
            sx={{
              color: (theme) => theme.palette.text.primary,
              transform: "rotate(90deg)",
            }}
          />
        </PushableButton>
        <PushableButton
          color={themeObject.palette.error.main}
          gradientColor="hsl(0 0% 0%)"
          onClick={() => {
            dispatch({
              type: "UPDATE_RATING",
              payload:{
                rating:-1
              }
            });
          }}
        >
          <ThumbDown
            fontSize={isMobile?"small":"large"}
            sx={{ color: (theme) => theme.palette.text.primary }}
          />
        </PushableButton>
      </div>
      <Typography variant="h4">Click Any Button</Typography>
    </div>
  );
};

export default RatingSystem;
