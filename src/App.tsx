import * as React from "react";
import AppAppBar from "./Components/AppAppBar";
import { Box, CssBaseline, PaletteMode, Typography } from "@mui/material";
import getLPTheme from "./getLPTheme";
import { ThemeProvider, alpha, createTheme } from "@mui/material/styles";
import "./App.css";
import Hero from "./Components/Hero";
import Rate from "./Components/Rate";
import { MyGlobalContext, useGlobalContext } from "./Context/AppContext";
import { reducer, initialState } from "./Context/Reducer";
import { STEPS } from "./Helpers/types";
import { getStepMapping } from "./Helpers/helperFunctions";
export default function App() {
  const [mode, setMode] = React.useState<PaletteMode>(localStorage.theme);
  const LPtheme = createTheme(getLPTheme(mode));
  // const defaultTheme = createTheme({ palette: { mode } });
  const toggleColorMode = () => {
    setMode((prev) => {
      localStorage.theme = prev === "dark" ? "light" : "dark";
      return prev === "dark" ? "light" : "dark";
    });
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <MyGlobalContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={LPtheme}>
        <CssBaseline />
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <div className="main-app">
          <Box
            id="hero"
            sx={(theme) => {
              return {
                width: "100%",
                backgroundImage:
                  theme.palette.mode === "light"
                    ? "linear-gradient(180deg, #CEE5FD, #FFF)"
                    : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
                backgroundSize: "100% 20%",
                backgroundRepeat: "no-repeat",
              };
            }}
          >
            {getStepMapping(state.currentStep)}
          </Box>
        </div>
      </ThemeProvider>
    </MyGlobalContext.Provider>
  );
}
