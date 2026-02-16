import * as React from "react";
import { Dialog, Box, IconButton, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { Frame, getPaperSx } from "./styles";
import LoaderOverlay from "./LoaderOverlay";

export type GameModalSize =
  | { mode: "fullscreen" }
  | { mode: "boxed"; width?: number | string; height?: number | string };

export type GameModalProps = {
  open: boolean;
  onClose: () => void;
  url: string;
  size?: GameModalSize;
  loadTimeoutMs?: number;
  disableBackdropClose?: boolean;
};

export default function GameModal({
  open,
  onClose,
  url,
  size = { mode: "fullscreen" },
  loadTimeoutMs = 12000,
  disableBackdropClose = false
}: GameModalProps) {
  const isMobile = useMediaQuery("(max-width:900px)");
  const shouldFullScreen = size.mode === "fullscreen" || isMobile;

  const [loading, setLoading] = React.useState(true);
  const [showRetry, setShowRetry] = React.useState(false);
  const [iframeKey, setIframeKey] = React.useState(0);

  const timeoutRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (!open) return;

    setLoading(true);
    setShowRetry(false);
    setIframeKey((k) => k + 1);
  }, [open, url]);

  React.useEffect(() => {
    if (open) return;

    setLoading(true);
    setShowRetry(false);

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [open]);

  React.useEffect(() => {
    if (!open) return;

    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(() => {
      setShowRetry(true);
    }, loadTimeoutMs);

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [open, url, iframeKey, loadTimeoutMs]);

  const handleRetry = () => {
    setLoading(true);
    setShowRetry(false);
    setIframeKey((k) => k + 1);
  };

  const paperSx = getPaperSx({ shouldFullScreen, size });

  return (
    <Dialog
      open={open}
      fullScreen={shouldFullScreen}
      keepMounted={false}
      onClose={(e, reason) => {
        if (disableBackdropClose && reason === "backdropClick") return;
        onClose();
      }}
      slotProps={{ paper: { sx: paperSx } }}
    >
      <Box sx={{ position: "relative", width: "100%", height: "100%" }} aria-busy={loading}>
        <IconButton
          onClick={onClose}
          aria-label="Close game"
          sx={{
            position: "absolute",
            top: 14,
            right: 14,
            zIndex: 100,
            color: "common.white",
            backgroundColor: "custom.modal.closeBg",
            "&:hover": { backgroundColor: "custom.modal.closeHoverBg" }
          }}
        >
          <CloseIcon />
        </IconButton>

        {open && (
          <Frame
            key={iframeKey}
            src={url}
            title="Game"
            onLoad={() => {
              if (timeoutRef.current) {
                window.clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
              }
              requestAnimationFrame(() => {
                setLoading(false);
                setShowRetry(false);
              });
            }}
            allow="fullscreen; autoplay"
            allowFullScreen
          />
        )}

        <LoaderOverlay loading={loading} showRetry={showRetry} onRetry={handleRetry} />
      </Box>
    </Dialog>
  );
}
