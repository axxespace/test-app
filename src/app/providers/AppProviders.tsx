import React, { PropsWithChildren } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  breakpoints: {
    values: {
      xs: 375,
      sm: 480,
      md: 768,
      lg: 1200,
      xl: 1440,
      xxl: 1920
    }
  },
  palette: {
    mode: "dark",
    background: {
      default: "#0B0B12",
      paper: "#121224"
    },
    primary: { main: "#6C5CE7" }
  }
});

const GlobalThemeStyles = createGlobalStyle<{ theme: any }>`
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: ${(props) => props.theme.palette.background.default};
    color: white;
    overflow-x: hidden;
  }
`;

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={baseTheme}>
        <GlobalThemeStyles theme={""} />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
