import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { BoxProps } from "@mui/material/Box";
import type { ButtonProps } from "@mui/material/Button";
import type { Lang } from "@/shared/i18n";

type AppImageProps = BoxProps<"img"> & {
  maxWidth?: number | string;
  fetchpriority?: "high" | "low" | "auto";
};

export const AppImage = styled(Box, {
  shouldForwardProp: (prop) => prop !== "maxWidth"
})<AppImageProps>(({ maxWidth }) => ({
  height: "auto",
  width: "100%",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth
}));

type GradientButtonProps = ButtonProps & {
  btnWidth?: number | string;
  lang?: Lang;
};

export const GradientButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "btnWidth"
})<GradientButtonProps>(({ theme, btnWidth = 250, lang = "en" }) => ({
  display: "flex",
  width: btnWidth,
  height: 56,
  borderRadius: 12,
  padding: "8px 24px",
  gap: 15,
  color: theme.custom.button.text,
  boxShadow: "none",
  background: theme.custom.language.buttonBg[lang],
  fontSize: 16,
  textTransform: "lowercase",

  "&:hover": {
    opacity: 0.9,
    boxShadow: "none"
  },

  "&:active": {
    opacity: 0.85
  }
}));
