import { Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useGlobalContext } from "../../Context/AppContext";
import { verifyRating } from "../../Services/ratingService";
import theme from "../../theme";
import { ActionKind, STEPS, VerifyRatingApiPayload } from "../../Helpers/types";
import { LoadingButton } from "@mui/lab";

const OtpInput = () => {
  const [otp, setOtp] = useState<string | undefined>(undefined);
  const { state, dispatch } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [otpError, setOtpError] = useState("")
  const handleVerify = async () => {
    console.log("OTP", otp);
    console.log("State", state);
    const payload: VerifyRatingApiPayload = {
      ratingId: state.ratingId,
      otp: otp === undefined ? "" : otp,
      email: state.userInformation.email ? state.userInformation.email : "",
    };
    setLoading(true);
    verifyRating(payload)
      .then((response) => {
        if (response.error === null) {
          dispatch({
            type: ActionKind.UPDATE_ACCESS_TOKEN,
            payload: {
              accessToken: response.data.accessToken,
            },
          });
          dispatch({
            type: ActionKind.UPDATE_STEP,
            payload: {
              currentStep: STEPS.STEP_4,
            },
          });
        } else {
          throw Error("" + response.error);
        }
      })
      .catch((error) => {
        setOtpError("Invalid OTP")
        console.log("There was some error while verifying rating!", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Typography variant="h4"> Confirm Your Humanity </Typography>
      <Typography sx={{ color: (theme) => theme.palette.primary.main }}>
        Please check your Email
      </Typography>
      <form>
        <FormControl>
          <Typography sx={{ color: (theme) => theme.palette.error.main }}>
            {otpError}
          </Typography>
          <TextField
            sx={{ margin: "8px" }}
            type="number"
            name="otp"
            placeholder="Enter OTP"
            value={otp}
            onChange={(event) => setOtp(event.target.value)}
            required
            error={otp === ""}
            helperText={otp === "" ? "Please Enter OTP" : ""}
          />
          <div>
            <LoadingButton
              loading={loading}
              disabled={otp === undefined || otp.length === 0}
              color="primary"
              variant="contained"
              size="large"
              component="a"
              onClick={handleVerify}
              target="_blank"
            >
              Verify
            </LoadingButton>
          </div>
        </FormControl>
      </form>
    </>
  );
};

export default OtpInput;
