import { GlobalState, ActionType } from "../Helpers/types";

export const reducer = (state: GlobalState, action: ActionType) => {
  // console.log("The value of action si",action)
  const { type,payload } = action;
  switch (type) {
    case "INCREASE":
      // console.log("Updated log in status")
      return {
        ...state,
        rating: state.rating + 1,
      };
    case "DECREASE":
      return {
        ...state,
        rating: state.rating - 1,
      };
    case "UPDATE_RATING":
      return {
        ...state,
        rating: payload.rating,
      };
    default:
      return state;
  }
};
