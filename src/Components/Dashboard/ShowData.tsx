import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { getRatingPayload, RatingApiPayload } from "../../Helpers/types";
import { useGlobalContext } from "../../Context/AppContext";
import { getRating } from "../../Services/ratingService";
import Heading from "../Common/Heading";
import { removeToken } from "../../Helpers/helperFunctions";

// Helper function to create rows
interface Rating {
  rating: string;
  bossName: string;
  bossOrg: string;
  bossTitle: string;
}
const generateRows = (data: Rating[]) => {
  return data.map((row: any, index: number) => (
    <TableRow key={index}>
      {Object.values(row).map((cell: any, idx) => (
        <TableCell key={idx} align={idx > 0 ? "right" : "left"}>
          {cell}
        </TableCell>
      ))}
    </TableRow>
  ));
};

const ShowData = () => {
  const [ratings, setRatings] = useState<Rating[]>([]);
  const { state, dispatch } = useGlobalContext();
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      const payload: getRatingPayload = {
        email: storedEmail,
        accessToken: state.accessToken,
      };
      getRating(payload)
        .then((res) => {
          if (res.error === null) {
            console.log("Data", res);
            const data: Rating[] = [];
            res.data.forEach((eachRating: any) => {
              console.log(eachRating);
              data.push({
                bossName:
                  eachRating.boss.firstName + " " + eachRating.boss.lastName,
                bossTitle: eachRating.boss.title,
                bossOrg: eachRating.boss.organization,
                rating: eachRating.rating,
              });
            });
            setRatings(data);
          } else {
            removeToken(dispatch);
            window.location.href = "/";
          }
        })

        .catch((error) => {
          console.log("There was some error while getting ratings", error);
        });
    }
  }, []);

  return (
    <div className="data-card">
      <h2>Your Ratings</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Boss Name</TableCell>
              <TableCell align="right">Boss Title</TableCell>
              <TableCell align="right">Boss Org</TableCell>
              <TableCell align="right">Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{generateRows(ratings)}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ShowData;
