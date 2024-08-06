import { useState } from "react";
import { submitRating } from "../Services/ratingService";
import { RatingApiPayload } from "../Helpers/types";

interface PropType {
  payload: RatingApiPayload;
}

export const useSubmitRating = async (props: PropType) => {
  const { payload } = props;
  const [data, setData] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

//   try {
//     setLoading(true);
//     const data = await submitRating(payload);
//     setData(data);
//   } catch (error) {
//     setError("Some issue while submitting rating. Please try again!!");
//   } finally {
//     setLoading(false);
//   }

  return { data, loading, error };
};

