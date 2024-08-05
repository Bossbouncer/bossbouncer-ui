import { createContext, useContext, useReducer } from "react";
import { GlobalContent } from "../Helpers/types";

export const MyGlobalContext = createContext<GlobalContent>({
  state: { rating: 0 },
  dispatch: () => {},
  // set a default value
});

export const useGlobalContext = () => useContext(MyGlobalContext);
