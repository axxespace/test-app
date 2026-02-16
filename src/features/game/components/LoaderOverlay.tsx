import * as React from "react";
import { Box, CircularProgress, Typography, Button } from "@mui/material";
import { useI18n } from "@/shared/i18n";

type LoaderOverlayProps = {
  loading: boolean;
  showRetry: boolean;
  onRetry: () => void;
};

export default function LoaderOverlay({ loading, showRetry, onRetry }: LoaderOverlayProps) {
  if (!loading) return null;
  const { t } = useI18n();

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
              {t("loader.stillLoading")}
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }} onClick={onRetry}>
              {t("loader.retry")}
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}
