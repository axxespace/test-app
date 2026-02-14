import React, { PropsWithChildren } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#0B0B12", paper: "#121224" },
    primary: { main: "#6C5CE7" }
  },
  shape: { borderRadius: 16 }
});

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
