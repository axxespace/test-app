import "@mui/material/styles";
import type { Lang } from "@/shared/i18n";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      gradients: {
        footerBg: string;
        primaryButton: string;
      };
      footer: {
        cardBg: string;
        textMuted: string;
        textStrong: string;
        borderSoft: string;
        icon: string;
        iconHoverBg: string;
        shadow: string;
      };
      button: {
        text: string;
      };
      modal: {
        bg: string;
        closeBg: string;
        closeHoverBg: string;
        overlayBg: string;
      };
      language: {
        buttonBg: Record<Lang, string>;
      };
    };
  }

  interface ThemeOptions {
    custom?: Theme["custom"];
  }

  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}
