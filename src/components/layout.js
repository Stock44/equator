import * as React from "react";
import {
  AppBar, Box,
  createTheme,
  CssBaseline, Drawer,
  IconButton, TextField,
  ThemeProvider, Toolbar, Typography
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

let theme = createTheme({
  palette: {},
  typography: {
    fontSize: 16,
    p: {
      lineHeight: 1.45
    },
    h1: {
      fontSize: "3rem",
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

const appBarHeight = 100;

function Layout({ children }) {

  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar elevation={0} position="static" color="primary" sx={{
      height: appBarHeight,
      p: 2,
    }}>
      <Toolbar sx={{
        justifyContent: "space-between"
      }}>
        <Typography color="primary" sx={{
          fontSize: "2.5em",
        }}>
          equator
        </Typography>
        <TextField fullWidth sx={{
          maxWidth: "sm",
          mx: 2,
        }} />
      </Toolbar>
    </AppBar>
    <Box sx={{
      display: "flex",
      justifyContent: "center"
    }} component="main">
      {children}
    </Box>
  </ThemeProvider>;
}

export default Layout;
