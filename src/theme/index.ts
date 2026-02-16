import { createTheme } from "@mui/material/styles";
import type { Lang } from "@/shared/i18n";

export const theme = createTheme({
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
  typography: {
    body1: {
      fontSize: "16px"
    }
  },
  palette: {
    mode: "dark",
    background: {
      default: "#0B0B12",
      paper: "#121224"
    },
    primary: { main: "#6C5CE7" },
    text: {
      primary: "rgba(251,251,251,0.92)",
      secondary: "rgba(251,251,251,0.70)"
    }
  },
  custom: {
    gradients: {
      footerBg: "linear-gradient(90deg,#02011F 0%, #06225D 100%)",
      primaryButton: "linear-gradient(to right, #FF8D6B, #FFBA47)"
    },
    footer: {
      cardBg: "rgba(10, 14, 40, 0.55)",
      textMuted: "rgba(233,236,255,0.75)",
      textStrong: "rgba(251,251,251,0.70)",
      borderSoft: "rgba(255,255,255,0.10)",
      icon: "rgba(255,255,255,0.70)",
      iconHoverBg: "rgba(255,255,255,0.10)",
      shadow: "0 18px 50px rgba(0,0,0,0.35)"
    },
    button: {
      text: "#ffffff"
    },
    modal: {
      bg: "#000000",
      closeBg: "rgba(0,0,0,0.35)",
      closeHoverBg: "rgba(0,0,0,0.50)",
      overlayBg: "rgba(0,0,0,0.55)"
    },
    language: {
      buttonBg: {
        en: "linear-gradient(to right, #FF8D6B, #FFBA47)",
        rus: "linear-gradient(to right, #4A90E2, #357ABD)",
        ge: "linear-gradient(to right, #00B894, #019875)",
        ger: "linear-gradient(to right, #6C5CE7, #A29BFE)",
        it: "linear-gradient(to right, #E84393, #FD79A8)"
      } as Record<Lang, string>
    }
  }
});
