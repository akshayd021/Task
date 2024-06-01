// theme.js
"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D15B3E",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontSize: "2rem",
      textTransform: "uppercase",
    },
    body1: {
      fontSize: "1rem",
      marginLeft: "10px",
    },
    button: {
      textTransform: "uppercase",
    },
  },
});

export default theme;
