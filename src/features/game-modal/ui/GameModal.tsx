import { useEffect } from "react";
import {
  Dialog,
  Box,
  IconButton,
  CircularProgress,
  Typography,
  Button,
  useMediaQuery
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useI18n } from "@/shared/i18n";

import type { GameModalProps } from "@/features/game-modal/model/types";
import { useGameModalLoad } from "@/features/game-modal/lib/useGameModalLoad";
import { Overlay, CloseBtnWrap } from "@/features/game-modal/ui/GameModalStyles";
import { GameModalFrame } from "@/features/game-modal/ui/GameModalFrame";

function getPaperSx(shouldFullScreen: boolean, size: NonNullable<GameModalProps["size"]>) {
  if (shouldFullScreen) {
    return { width: "100%", height: "100%", borderRadius: 0 };
  }

  return {
    maxWidth: size.mode === "boxed" ? (size.width ?? 980) : 980,
    width: size.mode === "boxed" ? (size.width ?? 980) : 980,
    height: size.mode === "boxed" ? (size.height ?? 640) : 640,
    borderRadius: 3,
    overflow: "hidden"
  };
}

export default function GameModal({
  open,
  onClose,
  url,
  size = { mode: "fullscreen" },
  loadTimeoutMs = 12000,
  disableBackdropClose = false
}: GameModalProps) {
  const { t } = useI18n();
  const isMobile = useMediaQuery("(max-width:900px)");
  const shouldFullScreen = size.mode === "fullscreen" || isMobile;

  const { loading, showRetry, retryKey, onLoaded, retry } = useGameModalLoad(loadTimeoutMs);

  useEffect(() => {
    if (!open) return;
    retry();
  }, [open]);

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={disableBackdropClose ? undefined : handleClose}
      fullScreen={shouldFullScreen}
      PaperProps={{
        sx: {
          position: "relative",
          bgcolor: "transparent",
          ...getPaperSx(shouldFullScreen, size)
        }
      }}
    >
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        <CloseBtnWrap>
          <IconButton
            onClick={handleClose}
            aria-label="Close modal"
            sx={{
              bgcolor: (t) => t.custom.modal.closeBg,
              "&:hover": { bgcolor: (t) => t.custom.modal.closeHoverBg }
            }}
          >
            <CloseIcon />
          </IconButton>
        </CloseBtnWrap>

        <GameModalFrame src={url} onLoad={onLoaded} retryKey={retryKey} />

        {loading && (
          <Overlay>
            {!showRetry ? (
              <CircularProgress />
            ) : (
              <Box sx={{ textAlign: "center", p: 2 }}>
                <Typography sx={{ mb: 1.5 }}>{t("loader.stillLoading")}</Typography>
                <Button variant="contained" onClick={retry}>
                  {t("loader.retry")}
                </Button>
              </Box>
            )}
          </Overlay>
        )}
      </Box>
    </Dialog>
  );
}
