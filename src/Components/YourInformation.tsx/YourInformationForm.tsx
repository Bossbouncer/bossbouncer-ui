import React, { useState } from "react";
import Heading from "../Common/Heading";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import {
  ActionKind,
  RatingApiPayload,
  RatingKind,
  Ratings,
  STEPS,
} from "../../Helpers/types";
import { useGlobalContext } from "../../Context/AppContext";
import { submitRating } from "../../Services/ratingService";
import { useSubmitRating } from "../../Hooks/useRatingService";
import { LoadingButton } from "@mui/lab";
import OtpInput from "./OtpInput";

const YourInformationForm = () => {
  const { state, dispatch } = useGlobalContext();
  const [firstName, setFirstName] = useState(state.userInformation.firstName);
  const [lastName, setLastName] = useState(state.userInformation.lastName);
  const [email, setEmail] = useState(localStorage.getItem("email") || state.userInformation.email);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showHumanityCheck, setShowHumanityCheck] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(newEmail);
    setIsValidEmail(isValid);
  };

  const handleSubmit = async () => {
    if (firstName && lastName && email) {
      // dispatch({
      //   type: ActionKind.UPDATE_STEP,
      //   payload: {
      //     currentStep: STEPS.STEP_4,
      //   },
      // });
      // setShowHumanityCheck(true);
      dispatch({
        type: ActionKind.UPDATE_USER_INFORMATION,
        payload: {
          userInformation: {
            firstName,
            lastName,
            email,
          },
        },
      });

      const payload: RatingApiPayload = {
        rating: (function () {
          switch (state.rating) {
            case RatingKind.NEGATIVE:
              return Ratings.DOWN;
            case RatingKind.NEUTRAL:
              return Ratings.NETURAL;
            case RatingKind.POSITIVE:
              return Ratings.UP;
            default:
              return Ratings.NETURAL;
          }
        })(),
        boss: {
          firstName: state.bossInformation.firstName
            ? state.bossInformation.firstName
            : "",
          lastName: state.bossInformation.lastName
            ? state.bossInformation.lastName
            : "",
          title: state.bossInformation.title ? state.bossInformation.title : "",
          email: state.bossInformation.email ? state.bossInformation.email : "",
          organization: state.bossInformation.companyName
            ? state.bossInformation.companyName
            : "",
        },
        user: {
          firstName: firstName ? firstName : "",
          lastName: lastName ? lastName : "",
          email: email ? email : "",
        },
      };
      setLoading(true);
      setShowHumanityCheck(false);
      submitRating(payload)
        .then((response) => {
          if (response.error === null) {
            console.log("Data is", response.data);
            dispatch({
              type: ActionKind.UPDATE_RATING_ID,
              payload: {
                ratingId: parseInt(response.data.data.ratingId),
              },
            });
            setShowHumanityCheck(true);
          } else {
            throw response.error;
            // throw Error("" + response.error);
          }
        })
        .catch((error) => {
          setSubmitError(error.response.data.message);
          console.log("There was some error while submitting rating!", error);
          if (error.response.status === 409) {
            setShowHumanityCheck(true);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <Heading heading={"About You"} />
      <Typography sx={{ color: (theme) => theme.palette.error.main }}>
        {submitError}
      </Typography>
      <FormControl margin="normal">
        <TextField
          sx={{ margin: "8px" }}
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          error={firstName === ""}
          helperText={firstName === "" ? "Please Enter First Name" : ""}
        />
        <TextField
          sx={{ margin: "8px" }}
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          error={lastName === ""}
          helperText={lastName === "" ? "Please Enter Last Name" : ""}
        />
        <TextField
          sx={{ margin: "8px" }}
          type="email"
          name="email"
          placeholder="Personal Email Address"
          value={email}
          disabled={localStorage.getItem("email")!==null}
          required
          onChange={handleEmailChange}
          error={email === "" || !isValidEmail}
          helperText={
            email === ""
              ? "Please enter valid email"
              : isValidEmail
              ? ""
              : "Please enter a valid email"
          }
        />
      </FormControl>
      <div className="navigation_buttons">
        <Button
          color="primary"
          variant="text"
          size="large"
          component="a"
          target="_blank"
          onClick={() => {
            dispatch({
              type: ActionKind.UPDATE_STEP,
              payload: {
                currentStep: STEPS.STEP_2,
              },
            });
          }}
        >
          Back
        </Button>
        <LoadingButton
          loading={loading}
          color="primary"
          variant="contained"
          size="large"
          component="a"
          onClick={handleSubmit}
          target="_blank"
        >
          Submit
        </LoadingButton>
      </div>
      {showHumanityCheck && <OtpInput />}
    </div>
  );
};

export default YourInformationForm;
