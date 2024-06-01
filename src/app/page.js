import Image from "next/image";
import React from "react";
import { Landing } from "./pages";
import { ThemeProvider } from "@mui/material";
import { theme } from "./componets";
import CssBaseline from "@mui/material/CssBaseline";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Landing />
    </ThemeProvider>
  );
}
