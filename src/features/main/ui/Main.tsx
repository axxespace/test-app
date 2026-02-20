import { useState, useMemo } from "react";

import { GradientButton } from "@/shared/ui/common";
import { GameModal } from "@/features/game-modal";
import { useI18n } from "@/shared/i18n";

import BrandImage from "@/assets/images/logo.webp";
import SlotImage from "@/assets/images/main/slot.webp";

import { MainStyles } from "@/features/main/ui/MainStyles";
import { buildGameUrl } from "@/features/main/utils/buildGameUrl";
import { AppImageWithSkeleton } from "@/shared/ui/AppImageWithSkeleton";

export default function Main() {
  const { t, lang } = useI18n();
  const [openGame, setOpenGame] = useState(false);

  const gameUrl = useMemo(() => buildGameUrl(lang), [lang]);

  return (
    <MainStyles>
      <AppImageWithSkeleton
        width={264}
        height={110}
        component="img"
        alt="logo image"
        src={BrandImage}
        sx={{ mb: "32px" }}
      />
      <AppImageWithSkeleton
        width={326}
        height={200}
        component="img"
        alt="slot image"
        src={SlotImage}
        sx={{ mb: "32px" }}
      />

      <GradientButton
        lang={lang}
        onClick={() => setOpenGame(true)}
        btnWidth="358px"
        sx={{ textTransform: "uppercase" }}
        disableElevation
      >
        {t("main.openGame")}
      </GradientButton>

      <GameModal
        open={openGame}
        onClose={() => setOpenGame(false)}
        url={gameUrl}
      />
    </MainStyles>
  );
}
