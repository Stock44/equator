import * as React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as styles from "./layout.module.css";
import { createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontSize: 16,
    h: {
      fontWeight: 500,
      fontSize: 48,
    },
    sh: {
      fontWeight: 500,
      fontSize: 24
    }
  }
});

function Layout({ children }) {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>;
}

export default Layout;
