import React, { useState, useEffect } from "react";
import Heading from "../Common/Heading";
import {
  Button,
  FormControl,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";
import { ActionKind, STEPS } from "../../Helpers/types";
import { useGlobalContext } from "../../Context/AppContext";
import { getCompanies } from "../../Services/helperService";
import DynamicAutocomplete from "./DynamicAutocomplete";

const BossInformationForm = () => {
  const { state, dispatch } = useGlobalContext();
  const [companyName, setCompanyName] = useState<string | undefined>(
    state.bossInformation.companyName
  );
  const [firstName, setFirstName] = useState<string | undefined>(
    state.bossInformation.firstName
  );
  const [lastName, setLastName] = useState<string | undefined>(
    state.bossInformation.lastName
  );
  const [email, setEmail] = useState<string | undefined>(
    state.bossInformation.email
  );
  const [title, setTitle] = useState<string | undefined>(
    state.bossInformation.title
  );

  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(newEmail);
    setIsValidEmail(isValid);
  };

  const handleNextClick = () => {
    if (firstName === undefined) {
      setFirstName("");
    }
    if (lastName === undefined) {
      setLastName("");
    }
    if (email === undefined) {
      setEmail("");
    }
    if (title === undefined) {
      setTitle("");
    }
    if (companyName === undefined) {
      setCompanyName("");
    }
    if (
      firstName &&
      lastName &&
      companyName &&
      email &&
      title &&
      isValidEmail
    ) {
      dispatch({
        type: ActionKind.UPDATE_STEP,
        payload: {
          currentStep: STEPS.STEP_3,
        },
      });
      dispatch({
        type: ActionKind.UPDATE_BOSS_INFORMATION,
        payload: {
          bossInformation: {
            firstName,
            lastName,
            companyName,
            email,
            title,
          },
        },
      });
    }
  };

  const handleCompanyInputChange = (value: string | null) => {
    if (value !== null) {
      setCompanyName(value);
    } else {
      setCompanyName("");
    }
  };

  const handleCompanySelection = (value: string | null) => {
    if (value !== null) {
      setCompanyName(value);
    } else {
      setCompanyName("");
    }
  };

  return (
    <div>
      <Heading heading={"About Your Boss"} />
      <FormControl>
        <Stack>
          <DynamicAutocomplete
            handleCompanyInputChange={handleCompanyInputChange}
            fetchSuggestions={getCompanies}
            onSelectionChange={handleCompanySelection}
            defaultValue={state.referrer || state.bossInformation.companyName}
            error={companyName === ""}
            helperText={"Please enter company name"}
            disabled={!!state.referrer}
          />
          {/* <AutocompleteComponent/> */}
          {/* <TextField
            sx={{ margin: "8px" }}
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={companyName ? companyName : ""}
            onChange={(event) => {
              setCompanyName(event.target.value);
            }}
            error={companyName === ""}
            helperText={companyName === "" ? "Please Enter Company Name" : ""}
          /> */}
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
            placeholder="Email Address"
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
          <TextField
            sx={{ margin: "8px" }}
            type="text"
            name="title"
            placeholder="Job Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            error={title === ""}
            helperText={title === "" ? "Please Enter Job Title" : ""}
          />
        </Stack>
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
                currentStep: STEPS.STEP_1,
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
    </div>
  );
};

export default BossInformationForm;
