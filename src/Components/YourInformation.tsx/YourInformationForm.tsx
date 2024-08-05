import React, { useState } from "react";
import Heading from "../Common/Heading";
import {
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ActionKind, STEPS } from "../../Helpers/types";
import { useGlobalContext } from "../../Context/AppContext";

const YourInformationForm = () => {
  const { state, dispatch } = useGlobalContext();
  const [firstName, setFirstName] = useState(state.userInformation.firstName);
  const [lastName, setLastName] = useState(state.userInformation.lastName);
  const [email, setEmail] = useState(state.userInformation.email);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showHumanityCheck, setShowHumanityCheck] = useState(false);
  const [otp, setOtp] = useState("");
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(newEmail);
    setIsValidEmail(isValid);
  };

  const handleNextClick = () => {
    if (firstName && lastName && email) {
      // dispatch({
      //   type: ActionKind.UPDATE_STEP,
      //   payload: {
      //     currentStep: STEPS.STEP_4,
      //   },
      // });
      setShowHumanityCheck(true);
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
    }
  };

  const handleOtpSubmit = () => {
    console.log("OTP", otp);
  };

  return (
    <div>
      <Heading heading={"About You"} />
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
        <Button
          color="primary"
          variant="contained"
          size="large"
          component="a"
          onClick={handleNextClick}
          target="_blank"
        >
          Next
        </Button>
      </div>
      {showHumanityCheck && (
        <>
          {/* <Heading variant="h4" heading="Confirm Your Humanity"/> */}
          <Typography variant="h4"> Confirm Your Humanity </Typography>
          {/* <Stack
            direction="column"
            alignSelf="center"
            sx={{ width: "100%", padding: "0px 50px" }}
          > */}
          <FormControl>
            <TextField
              sx={{ margin: "8px" }}
              type="number"
              name="otp"
              placeholder="Enter OTP"
              value={otp}
              onChange={(event) => setOtp(event.target.value)}
            />
            <div>
              <Button
                color="primary"
                variant="contained"
                size="large"
                component="a"
                onClick={handleOtpSubmit}
                target="_blank"
              >
                Submit
              </Button>
            </div>
          </FormControl>
          {/* </Stack> */}
        </>
      )}
    </div>
  );
};

export default YourInformationForm;
