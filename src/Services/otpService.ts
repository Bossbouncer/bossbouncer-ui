import axios from "axios";
import {
  RequestLoginOtpPayload,
  ValidateLoginOtpPayload,
} from "../Helpers/types";

export const requestLoginOtp = async (payload: RequestLoginOtpPayload) => {
  try {
    const resp = await axios.post(
      `${process.env.REACT_APP_PUBLIC_HOST}api/auth/requestLoginOtp?email=${payload.email}`
    );
    console.log("The value of resp is", resp);
    return { data: resp.data, error: null };
  } catch (error) {
    console.log("There was some error while requesting OTP", error);
    return { data: null, error };
  }
};

export const verifyLoginOtp = async (payload: ValidateLoginOtpPayload) => {
  try {
    const resp = await axios.post(
      `${process.env.REACT_APP_PUBLIC_HOST}api/auth/validateLoginOtp?email=${payload.email}&otp=${payload.otp}`
    );
    return { data: resp.data, error: null };
  } catch (error) {
    console.log("There was some error while validating OTP", error);
    return { data: null, error };
  }
};
