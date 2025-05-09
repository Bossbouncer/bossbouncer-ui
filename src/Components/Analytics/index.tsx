import React, { useEffect, useMemo, useState } from "react";
import { getRatingsSummary } from "../../Services/ratingService";
import { getRatingSummaryPayload } from "../../Helpers/types";
import Dashboard from "./Dashboard";

const Index = () => {
  type Rating = {
    firstName: string;
    lastName: string;
    title: string;
    upCount?: number;
    downCount?: number;
    neutralCount?: number;
    weightedAverageRating?: number;
  };
  interface RatingSummaryType {
    ratingsAboveTwo: Array<Rating>;
    ratingsBelowTwo: Array<Rating>;
  }
  const [ratingSummary, setRatingSummary] = useState<RatingSummaryType>();

  const payload: getRatingSummaryPayload = {
    organization: "PNC",
    startDate: "2024-10-16T18:14:00",
    endDate: "2025-03-13T23:59:59",
    apiKey: "Pnc-Key",
  };
  useEffect(() => {
    getRatingsSummary(payload)
      .then((res) => {
        console.log("Data", res);
        setRatingSummary(res.data);
        return res;
      })
      .catch((err) => {
        console.log("Error", err);
        return err;
      });
  }, []);

  return (
    <div className="component">
      {/* {ratingSummary?.ratingsBelowTwo.map((eachRating: Rating) => {
        return (
          <div
            key={eachRating.title + eachRating.firstName + eachRating.lastName}
          >
            {eachRating.firstName}
          </div>
        );
      })}
      {ratingSummary?.ratingsAboveTwo.map((eachRating: Rating) => {
        return (
          <div
            key={eachRating.title + eachRating.firstName + eachRating.lastName}
          >
            {eachRating.firstName}
          </div>
        );
      })} */}
      <Dashboard/>
    </div>
  );
};

export default Index;
