import * as React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as styles from "./layout.module.css";
import {
  AppBar, Box,
  createTheme,
  CssBaseline, Drawer,
  Grid, IconButton, Paper, Stack, TextField,
  ThemeProvider, Toolbar, Typography
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import TextFit from "@tomplum/react-textfit";
import StyledTeX from "./StyledTeX";
import TableOfContents from "./TableOfContents";

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

const drawerWidth = 200;
const appBarHeight = 100;

function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar elevation={0} position="static" color="primary" sx={{
      height: appBarHeight,
      p: 2,
      ml: {
        xs: 0,
        md: `${drawerWidth}px`
      },
      width: {
        md: `calc(100% - ${drawerWidth}px)`
      }
    }}>
      <Toolbar sx={{
        alignItems: "center"
      }}>
        <IconButton sx={{
          ml: 2,
          display: {
            md: "none"
          }
        }} color="primary"
                    onClick={handleDrawerToggle}>
          <MenuIcon size="large" />
        </IconButton>
        <TextField fullWidth sx={{
          maxWidth: "sm",
          mx: 2
        }} />
      </Toolbar>
    </AppBar>
    <Drawer variant="temporary"
            open={mobileOpen} onClose={handleDrawerToggle}
            sx={{
              display: {
                md: "none"
              },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth
              }
            }}>

    </Drawer>
    <Drawer variant="permanent" anchor="left" sx={{
      width: drawerWidth,
      display: {
        xs: "none",
        md: "block"
      },
      "& .MuiDrawer-paper": {
        width: drawerWidth
      }
    }}>
      hello
    </Drawer>
    <Box sx={{
      ml: {
        xs: 0,
        md: `${drawerWidth}px`
      },
      width: {
        md: `calc(100% - ${drawerWidth}px)`
      },
      display: "flex",
      justifyContent: "center"
    }} component="main">
      {children}
    </Box>
  </ThemeProvider>;
}

export default Layout;
