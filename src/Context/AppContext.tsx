import { createContext, useContext, useReducer } from "react";
import { GlobalContent, STEPS } from "../Helpers/types";
import { initialState } from "./Reducer";

export const MyGlobalContext = createContext<GlobalContent>({
  state: initialState,
  dispatch: () => {},
  // set a default value
});

export const useGlobalContext = () => useContext(MyGlobalContext);
