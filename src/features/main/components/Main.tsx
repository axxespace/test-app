import * as React from "react";

import { GradientButton } from "@/shared/ui/common";
import GameModal from "@/features/main/components/GameModal";
import { useI18n } from "@/shared/i18n";

import BrandImage from "@/assets/images/logo.webp";
import SlotImage from "@/assets/images/main/slot.webp";

import { MainSection } from "./MainSection";
import { buildGameUrl } from "../buildGameUrl";
import { AppImageWithSkeleton } from "@/shared/ui/AppImageWithSkeleton";

export default function Main() {
  const { t, lang } = useI18n();
  const [openGame, setOpenGame] = React.useState(false);

  const gameUrl = React.useMemo(() => buildGameUrl(lang), [lang]);

  return (
    <MainSection>
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
        size={{ mode: "boxed", width: 900, height: 560 }}
      />
    </MainSection>
  );
}
