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

  const gameUrl =
    `${process.env.APP_GAME_BASE_URL}/v0/casino/games/launch` +
    `?gameId=${process.env.APP_GAME_ID}` +
    `&channel=desktop` +
    `&partnerKey=${process.env.APP_PARTNER_KEY}` +
    `&lobbyUrl=${encodeURIComponent(process.env.APP_LOBBY_URL)}` +
    `&mode=demo` +
    `&language=${lang}`;

  console.log(gameUrl);

  return (
    <MainSection>
      <AppImage component="img" src={BrandImage} maxWidth={264} />
      <AppImage component="img" src={SlotImage} sx={{ maxWidth: "326px", mt: "48px" }} />

      <GradientButton
        onClick={() => setOpenGame(true)}
        btnWidth={"358px"}
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
