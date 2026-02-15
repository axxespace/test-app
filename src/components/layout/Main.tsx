import * as React from "react";
import { styled } from "@mui/material/styles";

import { AppImage, GradientButton } from "@/components/ui/common";

import GameModal from "@/components/game/GameModal";
import { useI18n } from "@/i18n/I18nProvider";

import BackgroundImage from "@/assets/main/background.png";
import BrandImage from "@/assets/footer/brand.png";
import SlotImage from "@/assets/main/slot.png";

const MainSection = styled("main")(({ theme }) => ({
  height: 910,
  display: "flex",
  flexDirection: "column",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "rgba(0, 0, 0, 0.45)"
  },
  "& > *": {
    position: "relative",
    zIndex: 1
  },
  [theme.breakpoints.down("xl")]: {
    height: 854
  }
}));

export default function Main() {
  const { t, lang } = useI18n();
  const [openGame, setOpenGame] = React.useState(false);

  return (
    <MainSection>
      <AppImage component="img" src={BrandImage} maxWidth={264} />
      <AppImage component="img" src={SlotImage} sx={{ maxWidth: "326px", mt: "48px" }} />

      <GradientButton onClick={() => setOpenGame(true)} btnWidth={"358px"} disableElevation>
        {t("main.openGame")}
      </GradientButton>

      <GameModal
        open={openGame}
        onClose={() => setOpenGame(false)}
        url={`https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=${lang}`}
        size={{ mode: "boxed", width: 900, height: 560 }}
      />
    </MainSection>
  );
}
