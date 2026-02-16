import { styled } from "@mui/material/styles";
import type { SxProps, Theme } from "@mui/material/styles";
import type { GameModalSize } from "./GameModal";

export const Frame = styled("iframe")(({ theme }) => ({
  width: "100%",
  height: "100%",
  border: 0,
  display: "block",
  background: (theme as any).custom?.modal?.bg
}));

export function getPaperSx({
  shouldFullScreen,
  size
}: {
  shouldFullScreen: boolean;
  size: GameModalSize;
}): SxProps<Theme> {
  return shouldFullScreen
    ? { bgColor: "custom.modal.bg" }
    : {
        bgColor: "custom.modal.bg",
        width: size.mode === "boxed" ? (size.width ?? 980) : 980,
        height: size.mode === "boxed" ? (size.height ?? 620) : 620,
        maxWidth: "96vw",
        maxHeight: "92vh",
        borderRadius: 3,
        overflow: "hidden"
      };
}
