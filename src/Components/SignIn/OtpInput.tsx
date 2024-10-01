import { Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useGlobalContext } from "../../Context/AppContext";
import { verifyRating } from "../../Services/ratingService";
import theme from "../../theme";
import {
  ActionKind,
  STEPS,
  ValidateLoginOtpPayload,
  VerifyRatingApiPayload,
} from "../../Helpers/types";
import { LoadingButton } from "@mui/lab";
import { verifyLoginOtp } from "../../Services/otpService";
import { removeToken } from "../../Helpers/helperFunctions";

type InputProps = {
  email: string;
};

const OtpInput = (props: InputProps) => {
  const { email } = props;
  const [otp, setOtp] = useState<string>("");
  //   const { state, dispatch } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [otpError, setOtpError] = useState("");
  const { state, dispatch } = useGlobalContext();
  const handleVerify = async () => {
    const payload: ValidateLoginOtpPayload = {
      otp,
      email,
    };
    setLoading(true);
    verifyLoginOtp(payload)
      .then((response) => {
        console.log("Response is", response);
        if (response.error === null) {
          dispatch({
            type: ActionKind.UPDATE_ACCESS_TOKEN,
            payload: {
              accessToken: response.data.accessToken,
              email: payload.email,
            },
          });
          window.location.href = "/dashboard";
        } else {
          throw response.error;
        }
      })
      .catch((error) => {
        console.log("There was some error while verifying rating", error);
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
