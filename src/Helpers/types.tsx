import { ReactNode } from "react";

// export enum CountActionKind {
//   INCREASE = "INCREASE",
//   DECREASE = "DECREASE",
// }

export enum ActionKind {
  UPDATE_RATING = "UPDATE_RATING",
  UPDATE_STEP = "UPDATE_STEP",
  UPDATE_BOSS_INFORMATION = "UPDATE_BOSS_INFORMATION",
  UPDATE_USER_INFORMATION = "UPDATE_USER_INFORMATION"
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
  rating: RatingKind;
  currentStep: STEPS;
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

// export interface ReducerType {
//   (state: GlobalState, action: CountAction): void;
// }

// export interface AppContextProps {
//   reducer: ReducerType;
//   initialState: GlobalState;
//   children: ReactNode;
// }

export type GlobalContent = {
  state: GlobalState;
  dispatch: (action: ActionType) => void;
};
