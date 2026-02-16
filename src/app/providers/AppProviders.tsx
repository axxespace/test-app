import React, { PropsWithChildren } from "react";
import { StyledEngineProvider, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as SCThemeProvider } from "styled-components";

import { theme } from "@/theme";
import { GlobalThemeStyles } from "@/app/styles/globalStyles";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <SCThemeProvider theme={theme}>
          <GlobalThemeStyles />
          {children}
        </SCThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}
