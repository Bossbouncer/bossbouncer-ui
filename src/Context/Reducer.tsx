import { GlobalState, ActionType, STEPS, ActionKind } from "../Helpers/types";

export const initialState = {
  ratingId: 0,
  rating: 0,
  referrer: '',
  accessToken: localStorage.getItem("accessToken"),
  currentStep: STEPS.STEP_1,
  bossInformation: {
    firstName: undefined,
    lastName: undefined,
    companyName: undefined,
    email: undefined,
    title: undefined,
  },
  userInformation: {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
  },
};

export const reducer = (state: GlobalState, action: ActionType) => {
  // console.log("The value of action si",action)
  const { type, payload } = action;
  switch (type) {
    case ActionKind.UPDATE_RATING:
      return {
        ...state,
        rating: payload.rating,
      };
    case ActionKind.UPDATE_STEP:
      return {
        ...state,
        currentStep: payload.currentStep,
      };
    case ActionKind.UPDATE_BOSS_INFORMATION:
      return {
        ...state,
        bossInformation: payload.bossInformation,
      };
    case ActionKind.UPDATE_USER_INFORMATION:
      return {
        ...state,
        userInformation: payload.userInformation,
      };
    case ActionKind.UPDATE_RATING_ID:
      return {
        ...state,
        ratingId: payload.ratingId,
      };
    case ActionKind.UPDATE_REFERRER:
      return {
        ...state,
        referrer: payload.referrer,
      };
    case ActionKind.UPDATE_ACCESS_TOKEN:
      if (payload.accessToken && payload.email) {
        localStorage.setItem("accessToken", payload.accessToken);
        localStorage.setItem("email", payload.email);
      }
      return {
        ...state,
        accessToken: payload.accessToken,
      };
    default:
      return state;
  }
};
