import {
  Button,
  FormControl,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Robot1 } from "../../Icons/Roobt1";
import Heading from "../Common/Heading";
import { useEffect, useState } from "react";
import { RequestLoginOtpPayload } from "../../Helpers/types";
import { requestLoginOtp } from "../../Services/otpService";
import OtpInput from "./OtpInput";
import { useGlobalContext } from "../../Context/AppContext";

const Index = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showHumanityCheck, setShowHumanityCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useGlobalContext();

  useEffect(() => {
    if (state.accessToken !== null) window.location.href = "/dashboard";
  }, []);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(newEmail);
    setIsValidEmail(isValid);
  };

  const handleSubmit = () => {
    if (email) {
      const payload: RequestLoginOtpPayload = {
        email,
      };
      setLoading(true);
      requestLoginOtp(payload)
        .then((response) => {
          if (response.error === null) {
            console.log("Data is", response.data);
            setShowHumanityCheck(true);
          } else {
            throw response.error;
          }
        })
        .catch((error) => {
          console.log("There was some error while requesting OTP", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="">
      <div className="component">
        <div className="left-side">
          <Robot1 isMobile={isMobile} />
        </div>
        <div className="right-side">
          <div>
            <Heading heading={"Sign In"} />
            {/* <Typography sx={{ color: (theme) => theme.palette.error.main }}>
        {submitError}
      </Typography> */}
            <FormControl margin="normal">
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
                variant="contained"
                size="large"
                component="a"
                target="_blank"
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            </div>

            {showHumanityCheck && <OtpInput email={email} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
