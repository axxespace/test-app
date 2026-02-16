import * as React from "react";
import { Box, CircularProgress, Typography, Button } from "@mui/material";

type LoaderOverlayProps = {
  loading: boolean;
  showRetry: boolean;
  onRetry: () => void;
};

export default function LoaderOverlay({ loading, showRetry, onRetry }: LoaderOverlayProps) {
  if (!loading) return null;

  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        zIndex: 2,
        display: "grid",
        placeItems: "center",
        backgroundColor: "custom.modal.overlayBg",
        backdropFilter: "blur(2px)"
      }}
    >
      <Box sx={{ textAlign: "center", px: 3 }}>
        <CircularProgress />
        {showRetry && (
          <>
            <Typography sx={{ color: "common.white", fontWeight: 700, mt: 2 }}>
              Still loading…
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }} onClick={onRetry}>
              Retry
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}
