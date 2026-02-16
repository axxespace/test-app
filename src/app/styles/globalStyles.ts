import { createGlobalStyle } from "styled-components";

export const GlobalThemeStyles = createGlobalStyle`
  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    overflow-x: hidden;
  }
`;
