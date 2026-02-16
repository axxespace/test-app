import * as React from "react";
import { Box } from "@mui/material";

import { AppImage, GradientButton } from "@/shared/ui/common";

import BrandImage from "@/assets/images/footer/brand.png";
import DownloadIcon from "@/assets/icons/footer/download.svg";

import { useI18n } from "@/shared/i18n/I18nProvider";
import {
  PromoCardWrap,
  SpotterBorderSvg,
  Subtitle,
  Title
} from "@/features/footer/styles";

export default function PromoCard() {
  const { t } = useI18n();

  const strokeWidth = 0.8;
  const r = 16;

  return (
    <PromoCardWrap>
      <SpotterBorderSvg aria-hidden="true">
        <rect
          x={strokeWidth / 2}
          y={strokeWidth / 2}
          width={`calc(100% - ${strokeWidth}px)`}
          height={`calc(100% - ${strokeWidth}px)`}
          rx={r}
          ry={r}
          fill="none"
          stroke="#FFAA46"
          strokeWidth={strokeWidth}
          strokeDasharray="6 4"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </SpotterBorderSvg>

      <AppImage component="img" src={BrandImage} maxWidth={176} alt="Brand" />

      <Title>{t("footer.promo.title")}</Title>
      <Subtitle>{t("footer.promo.subtitle")}</Subtitle>

      <GradientButton sx={{ margin: "18px auto" }} disableElevation>
        <Box component="img" src={DownloadIcon} alt="download icon" aria-hidden sx={{ width: 24 }} />
        {t("footer.promo.install")}
      </GradientButton>
    </PromoCardWrap>
  );
}
