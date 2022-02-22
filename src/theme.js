import { createTheme } from "@mui/material";

let theme = createTheme({
  palette: {},
  typography: {
    fontSize: 16,
    p: {
      lineHeight: 1.45
    },
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600
    },
    h2: {
      fontSize: "1.5rem",
      lineHeight: 2,
      fontWeight: 600
    },
    h3: {
      fontSize: "1rem",
      lineHeight: 2,
      fontWeight: 600
    },
    h4: undefined,
    h5: undefined,
    h6: undefined
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
          outlineColor: theme.palette.grey["400"]
        }
      }
    }
  }
});

export default theme;
