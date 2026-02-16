import * as React from "react";

import { AppImage, GradientButton } from "@/shared/ui/common";
import GameModal from "@/features/main/components/GameModal";
import { useI18n } from "@/shared/i18n/I18nProvider";

import BrandImage from "@/assets/images/footer/brand.png";
import SlotImage from "@/assets/images/main/slot.png";

import { MainSection } from "./MainSection";
import { buildGameUrl } from "../buildGameUrl";

export default function Main() {
  const { t, lang } = useI18n();
  const [openGame, setOpenGame] = React.useState(false);

  const gameUrl = React.useMemo(() => buildGameUrl(lang), [lang]);

  return (
      <MainSection>
        <AppImage component="img" src={BrandImage} maxWidth={264} />
        <AppImage component="img" src={SlotImage} sx={{ maxWidth: "326px", mt: "48px" }} />

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
