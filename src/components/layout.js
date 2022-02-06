import * as React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as styles from "./layout.module.css";
import { createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";

let theme = createTheme({
  palette: {

  },
  typography: {
    fontSize: 16,
    h: {
      fontWeight: 500,
      fontSize: 48,
    },
    sh: {
      fontWeight: 500,
      fontSize: 24
    },
  }
});

theme = createTheme(theme, {
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.default,
          outlineWidth: 1,
          outlineStyle: "solid",
          outlineColor: theme.palette.grey["400"],
        },
      },
    },
  },
})

function Layout({ children }) {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>;
}

export default Layout;
