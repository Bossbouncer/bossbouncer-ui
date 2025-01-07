import { ReactNode } from "react";

// export enum CountActionKind {
//   INCREASE = "INCREASE",
//   DECREASE = "DECREASE",
// }

export enum ActionKind {
  UPDATE_RATING = "UPDATE_RATING",
  UPDATE_STEP = "UPDATE_STEP",
  UPDATE_BOSS_INFORMATION = "UPDATE_BOSS_INFORMATION",
  UPDATE_USER_INFORMATION = "UPDATE_USER_INFORMATION",
  UPDATE_RATING_ID = "UPDATE_RATING_ID",
  UPDATE_ACCESS_TOKEN = "UPDATE_ACCESS_TOKEN",
  UPDATE_REFERRER="UPDATE_REFERRER"
}

export enum RatingKind {
  POSITIVE = 1,
  NEGATIVE = -1,
  NEUTRAL = 0,
}

export enum STEPS {
  STEP_1 = 1,
  STEP_2 = 2,
  STEP_3 = 3,
  STEP_4 = 4,
}

export interface GlobalState {
  accessToken: null | string;
  ratingId: Number;
  rating: RatingKind;
  currentStep: STEPS;
  referrer:string;
  bossInformation: {
    companyName: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
    title: string | undefined;
  };
  userInformation: {
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
  };
}

export interface PayloadType {
  rating: Number;
}

export interface ActionType {
  type: ActionKind;
  payload?: any;
}
//API TYPES

export enum Ratings {
  UP = "UP",
  DOWN = "DOWN",
  NETURAL = "NEUTRAL",
}

export interface RatingInformationPayload {
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

export interface RatingApiPayload {
  rating: Ratings;
  boss: {
    organization: string;
    email: string;
    firstName: string;
    lastName: string;
    title: string;
  };
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

export interface VerifyRatingApiPayload {
  ratingId: Number;
  otp: string;
  email: string;
}
// export interface ReducerType {
//   (state: GlobalState, action: CountAction): void;
// }

// export interface AppContextProps {
//   reducer: ReducerType;
//   initialState: GlobalState;
//   children: ReactNode;
// }

export interface getRatingPayload {
  email: string;
  accessToken: string | null;
}

export interface RequestLoginOtpPayload {
  email: string;
}

export interface ValidateLoginOtpPayload {
  email: string;
  otp: string;
}

export type GlobalContent = {
  state: GlobalState;
  dispatch: (action: ActionType) => void;
};

export type FaqProps = {
  question: string;
  answer: string;
};
