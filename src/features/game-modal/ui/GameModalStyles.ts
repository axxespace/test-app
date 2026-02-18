import { styled } from "@mui/material/styles";

export const Frame = styled("iframe")(({ theme }) => ({
  width: "100%",
  height: "100%",
  border: 0,
  display: "block",
  background: theme.custom.modal.bg
}));

export const Overlay = styled("div")(({ theme }) => ({
  position: "absolute",
  inset: 0,
  display: "grid",
  placeItems: "center",
  background: theme.custom.modal.overlayBg
}));

export const CloseBtnWrap = styled("div")({
  position: "absolute",
  top: 12,
  right: 12,
  zIndex: 2
});
