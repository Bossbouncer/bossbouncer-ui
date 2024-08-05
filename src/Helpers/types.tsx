import { ReactNode } from "react";

// export enum CountActionKind {
//   INCREASE = "INCREASE",
//   DECREASE = "DECREASE",
// }

export enum RatingKind {
  POSITIVE = 1,
  NEGATIVE = -1,
  NEUTRAL = 0,
}

// export interface CountAction {
//   type: CountActionKind;
//   payload: number;
// }

export interface GlobalState {
  rating: RatingKind;
}

export interface PayloadType{
    rating:Number
}

export interface ActionType {
  type: string;
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
