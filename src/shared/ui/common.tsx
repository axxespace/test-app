import { Box, Button } from "@mui/material";
import type { BoxProps } from "@mui/material/Box";
import type { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

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
};

export const GradientButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "btnWidth"
})<GradientButtonProps>(({ theme, btnWidth = 250 }) => ({
  display: "flex",
  width: btnWidth,
  height: 56,
  borderRadius: 12,
  padding: "8px 24px",
  gap: 15,
  color: theme.custom.button.text,
  boxShadow: "none",
  background: theme.custom.gradients.primaryButton,
  fontSize: 16,
  textTransform: "lowercase",

  "&:hover": {
    background: theme.custom.gradients.primaryButton,
    opacity: 0.9,
    boxShadow: "none"
  },

  "&:active": {
    opacity: 0.85
  }
}));
