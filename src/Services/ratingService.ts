import axios from "axios";
import {
  getRatingPayload,
  RatingApiPayload,
  RatingInformationPayload,
  RatingKind,
  Ratings,
  RequestLoginOtpPayload,
  VerifyRatingApiPayload,
} from "../Helpers/types";

interface dataType {
  rating: RatingKind;
  bossInformation: {
    companyName: string;
    firstName: string;
    lastName: string;
    email: string;
    title: string;
  };
  userInformation: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

export const submitRating = async (payload: RatingApiPayload) => {
  console.log(payload);
  try {
    const resp = await axios.post(
      `${process.env.REACT_APP_PUBLIC_HOST}api/ratings/submitRating`,
      payload
    );
    // console.log("The value of resp is", resp);
    return { data: resp.data, error: null };
  } catch (error) {
    console.log("There was some error while submitting rating", error);
    return { data: null, error };
  }
};

export const verifyRating = async (payload: VerifyRatingApiPayload) => {
  try {
    const resp = await axios.post(
      `${process.env.REACT_APP_PUBLIC_HOST}api/ratings/verifyRating?ratingId=${payload.ratingId}&otp=${payload.otp}&email=${payload.email}`
    );
    // console.log("The value of resp is", resp);
    return { data: resp.data, error: null };
  } catch (error) {
    console.log("There was some error while verifying rating", error);
    return { data: null, error };
  }
};

export const getRating = async (payload: getRatingPayload) => {
  try {
    const resp = await axios.post(
      `${process.env.REACT_APP_PUBLIC_HOST}api/ratings/getRating?&email=${payload.email}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${payload.accessToken}`,
        },
      }
    );
    // console.log("The value of resp is", resp);
    return { data: resp.data, error: null };
  } catch (error) {
    console.log("There was some error while getting rating", error);
    return { data: null, error };
  }
};
