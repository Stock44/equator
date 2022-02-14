import * as React from "react";
import {
  AppBar, Box,
  createTheme,
  CssBaseline, Drawer,
  IconButton, TextField,
  ThemeProvider, Toolbar, Typography
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const appBarHeight = 100;

function Layout({ children }) {

  return <>
    <AppBar elevation={0} position="static" color="primary" sx={{
      height: appBarHeight,
      p: 2
    }}>
      <Toolbar sx={{
        justifyContent: "space-between"
      }}>
        <Typography color="primary" sx={{
          fontSize: "2.5em"
        }}>
          equator
        </Typography>
        <TextField fullWidth sx={{
          maxWidth: "sm",
          mx: 2
        }} />
      </Toolbar>
    </AppBar>
    <Box sx={{
      display: "flex",
      justifyContent: "center"
    }} component="main">
      {children}
    </Box>
  </>;
}

export default Layout;
