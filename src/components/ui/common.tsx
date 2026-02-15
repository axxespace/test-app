import * as React from "react";
import { Box, Button } from "@mui/material";
import type { BoxProps } from "@mui/material/Box";
import type { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

type AppImageProps = BoxProps<"img"> & {
  maxWidth?: number | string;
};

export const AppImage = styled(Box, {
  shouldForwardProp: (prop) => prop !== "maxWidth"
})<AppImageProps>(({ maxWidth }) => ({
  height: "auto",
  width: "100%",
  maxWidth,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto"
}));

type GradientButtonProps = ButtonProps & {
  btnWidth?: number | string;
};

export const GradientButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "btnWidth"
})<GradientButtonProps>(({ btnWidth = 250 }) => ({
  display: "flex",
  width: btnWidth,
  height: 56,
  borderRadius: 12,
  padding: "8px 24px",
  gap: 15,
  color: "#fff",
  boxShadow: "none",
  background: "linear-gradient(to right, #FF8D6B, #FFBA47)",
  fontSize: 16,
  textTransform: "uppercase",
  "&:hover": {
    background: "linear-gradient(to right, #FF8D6B, #FFBA47)",
    opacity: 0.9,
    boxShadow: "none"
  },
  "&:active": {
    opacity: 0.85
  }
}));
