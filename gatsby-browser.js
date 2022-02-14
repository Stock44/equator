import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./src/theme";

export function wrapRootElement({ element }) {
  return (<ThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </ThemeProvider>);
}
