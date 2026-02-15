import * as React from "react";
import {
  Dialog,
  Box,
  IconButton,
  CircularProgress,
  useMediaQuery,
  Typography,
  Button
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

const Frame = styled("iframe")({
  width: "100%",
  height: "100%",
  border: 0,
  display: "block",
  background: "#000"
});

type GameModalSize =
  | { mode: "fullscreen" }
  | { mode: "boxed"; width?: number | string; height?: number | string };

type GameModalProps = {
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

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setShowRetry(true);
    }, loadTimeoutMs);

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [open, url, iframeKey, loadTimeoutMs]);

  const handleRetry = () => {
    setLoading(true);
    setShowRetry(false);
    setIframeKey((k) => k + 1);
  };

  const paperSx = shouldFullScreen
    ? { bgcolor: "#000" }
    : {
        bgcolor: "#000",
        width: size.mode === "boxed" ? (size.width ?? 980) : 980,
        height: size.mode === "boxed" ? (size.height ?? 620) : 620,
        maxWidth: "96vw",
        maxHeight: "92vh",
        borderRadius: 3,
        overflow: "hidden"
      };

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
            color: "#fff",
            backgroundColor: "rgba(0,0,0,0.35)",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" }
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

        {loading && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              display: "grid",
              placeItems: "center",
              backgroundColor: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(2px)"
            }}
          >
            <Box sx={{ textAlign: "center", px: 3 }}>
              <CircularProgress />
              {showRetry && (
                <>
                  <Typography sx={{ color: "#fff", fontWeight: 700, mt: 2 }}>
                    Still loading…
                  </Typography>
                  <Button variant="contained" sx={{ mt: 2 }} onClick={handleRetry}>
                    Retry
                  </Button>
                </>
              )}
            </Box>
          </Box>
        )}
      </Box>
    </Dialog>
  );
}
