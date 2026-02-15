import * as React from "react";

import mascot from "@/assets/footer/mascot.png";
import brand from "@/assets/footer/brand.png";

import { Box, Container, Typography, Button, Select, MenuItem, IconButton } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material/styles";

import DownloadIcon from "@/assets/footer/download.svg";
import LicenseIcon from "@/assets/footer/license.svg";
import AgeLimitIcon from "@/assets/footer/age-limit.svg";
import EmailIcon from "@/assets/footer/email.svg";
import TelegramIcon from "@/assets/footer/telegram.svg";
import XIcon from "@/assets/footer/x.svg";
import InstagramIcon from "@/assets/footer/instagram.svg";
import GermanyIcon from "@/assets/footer/countries/germany.svg";
import GeorgiaIcon from "@/assets/footer/countries/goergia.svg";
import ItalyIcon from "@/assets/footer/countries/italy.svg";
import RussiaIcon from "@/assets/footer/countries/russia.svg";
import EnglandIcon from "@/assets/footer/countries/england.svg";

function fluidClampPx(minPx: number, maxPx: number, minVw = 1440, maxVw = 1920) {
  const slope = (maxPx - minPx) / (maxVw - minVw);
  const yIntercept = minPx - slope * minVw;
  return `clamp(${minPx}px, calc(${(slope * 100).toFixed(6)}vw + ${yIntercept.toFixed(
      6
  )}px), ${maxPx}px)`;
}

type ImgSrc = string;

type InfoRowItem = {
  id: "age" | "license";
  icon: ImgSrc;
  alt: string;
  text: string;
  maxWidth?: number;
};

type SocialItem = {
  id: "instagram" | "telegram" | "x" | "email";
  label: string;
  icon: ImgSrc;
  href: string;
};

type Lang = "ge" | "en" | "ger" | "it" | "rus";

const INFO: readonly InfoRowItem[] = [
  {
    id: "age",
    icon: AgeLimitIcon,
    alt: "18+ Age limit",
    text: "Only 18+"
  },
  {
    id: "license",
    icon: LicenseIcon,
    alt: "License",
    text: "Casino is certified by the Anjouan Gaming Authority",
    maxWidth: 200
  }
] as const;

const SOCIALS: readonly SocialItem[] = [
  { id: "instagram", label: "Instagram", icon: InstagramIcon, href: "https://instagram.com" },
  { id: "telegram", label: "Telegram", icon: TelegramIcon, href: "https://t.me" },
  { id: "x", label: "X", icon: XIcon, href: "https://x.com" },
  { id: "email", label: "Email", icon: EmailIcon, href: "mailto:support@example.com" }
] as const;

const FLAGS: Record<Lang, ImgSrc> = {
  ge: GeorgiaIcon,
  en: EnglandIcon,
  it: ItalyIcon,
  rus: RussiaIcon,
  ger: GermanyIcon
};

const LABELS: Record<Lang, string> = {
  ge: "Georgian",
  en: "English",
  it: "Italian",
  rus: "Russian",
  ger: "German"
};

const LANGS: readonly Lang[] = ["en", "ge", "ger", "rus", "it"] as const;

const SelectChevron = () => (
    <svg width="35" height="35" viewBox="0 0 24 24" aria-hidden focusable="false">
      <path
          d="M7 10l5 5 5-5"
          stroke="rgba(255,255,255,0.7)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
      />
    </svg>
);

const Root = styled(Box)({
  width: "100%",
  margin: 0,
  background: "linear-gradient(90deg,#02011F 0%, #06225D 100%)"
}) as typeof Box;


const Inner = styled(Container)(({ theme }) => ({
  display: "grid",
  alignItems: "center",
  gridTemplateColumns:
      "minmax(200px, auto) minmax(320px, 390px) minmax(260px, 1fr) minmax(220px, 289px)",
  columnGap: theme.spacing(8),
  paddingTop: theme.spacing(7.5),
  paddingBottom: theme.spacing(7.5),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  [theme.breakpoints.down("xxl")]: {
    columnGap: theme.spacing(5)
  },
  [theme.breakpoints.down("xl")]: {
    gridTemplateColumns: "1fr",
    rowGap: theme.spacing(6.5),
    paddingTop: theme.spacing(7.5),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(3.5),
    paddingRight: theme.spacing(3.5)
  }
}));

const MascotWrap = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("xl")]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const Mascot = styled("img")({
  width: fluidClampPx(240, 288, 1440, 1920),
  height: "auto",
  userSelect: "none",
  pointerEvents: "none"
});

const PromoCard = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 390,
  boxSizing: "border-box",
  minWidth: 0,
  overflow: "hidden",
  height: 294,
  borderRadius: 16,
  padding: theme.spacing(3),
  border: "1px solid transparent",
  background: "rgba(10, 14, 40, 0.55)",
  boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
  marginLeft: "auto",
  marginRight: "auto",
  position: "relative",
}));

const SpotterBorderSvg = styled("svg")({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
});


const BrandLogo = styled("img")({
  maxWidth: 176,
  height: "auto",
  width: "100%",
  display: "block",
  margin: "0 auto 10px"
});

export const InstallButton = styled(Button)({
  margin: "18px auto",
  display: "flex",
  width: 250,
  height: 56,
  borderRadius: 12,
  padding: "8px 24px",
  gap: 15,
  textTransform: "none",
  color: "#fff",
  boxShadow: "none",
  background: "linear-gradient(to right, #FF8D6B, #FFBA47)",
  "&:hover": {
    background: "linear-gradient(to right, #FF8D6B, #FFBA47)",
    opacity: 0.9,
    boxShadow: "none"
  },
  "&:active": {
    opacity: 0.85
  }
});

const Title = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3),
  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
  fontWeight: 860,
  fontSize: 32,
  lineHeight: "40px",
  letterSpacing: "0",
  textAlign: "center"
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(0.75),
  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
  fontWeight: 600,
  fontSize: 16,
  lineHeight: "22px",
  letterSpacing: 0,
  textAlign: "center"
}));

const Mid = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: theme.spacing(3),
  [theme.breakpoints.down("xl")]: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  [theme.breakpoints.down("md")]: {
    order: 3,
    flexDirection: "column",
    flexWrap: "nowrap"
  }
}));

const InfoRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.25),
  color: "rgba(233,236,255,0.75)",
  [theme.breakpoints.down("xl")]: {
    width: 287,
    flexDirection: "column",
    textAlign: "center"
  },
  [theme.breakpoints.down("md")]: {
    width: "auto"
  }
}));

const InfoIcon = styled("img")({
  width: 58,
  height: 58
});

const InfoText = styled(Typography)({
  fontSize: 14,
  lineHeight: "20px"
});

const Right = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  marginTop: 100,
  gap: theme.spacing(13.25),
  [theme.breakpoints.down("xl")]: {
    width: "100%",
    marginTop: 0,
    gap: theme.spacing(7.5),
    alignItems: "center"
  }
}));

const LanguageSelect = styled(Select<Lang>)(() => ({
  width: "100%",
  paddingRight: 12,
  maxWidth: 289,
  minWidth: 0,
  overflow: "hidden",
  height: 56,
  borderRadius: 8,
  background: "rgba(255, 255, 255, 0.1)",

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255,255,255,0.10)"
  },

  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255,255,255,0.10)"
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255,255,255,0.10)"
  },

  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
    gap: 12
  },

  "& .MuiSelect-icon": {
    right: 18,
    color: "rgba(255,255,255,0.7)"
  }
}));

const SelectValue = styled(Box)({
  padding: "0 !important",
  display: "flex",
  alignItems: "center",
  gap: 12
});

const Flag = styled("img")({
  width: 24,
  height: 24,
  borderRadius: "50%",
  objectFit: "cover"
});

const FlagSmall = styled("img")({
  width: 20,
  height: 20,
  borderRadius: "50%",
  objectFit: "cover"
});

const SocialRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: theme.spacing(1.5),
  [theme.breakpoints.down("xl")]: {
    alignItems: "center"
  }
}));

const SocialButtons = styled(Box)({
  display: "flex"
});

const SocialButton = styled(IconButton)({
  padding: 2,
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.10)"
  }
}) as typeof IconButton;

const SocialIcon = styled("img")({
  width: 52,
  height: 52
});

export default function Footer() {
  const [lang, setLang] = React.useState<Lang>("en");

  const handleLangChange = (e: SelectChangeEvent<Lang>) => {
    setLang(e.target.value as Lang);
  };

  const strokeWidth = 0.8;
  const r = 16;

  return (
      <Root component="footer">
        <Inner maxWidth={false} disableGutters>
          <MascotWrap>
            <Mascot src={mascot} alt="Mascot" />
          </MascotWrap>

          <PromoCard>
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

            <BrandLogo src={brand} alt="Brand" />
            <Title>Download Casino</Title>
            <Subtitle>Play Min anywhere, anytime</Subtitle>

            <InstallButton disableElevation>
              <Box component="img" src={DownloadIcon} alt="" aria-hidden sx={{ width: 24 }} />
              Install App
            </InstallButton>
          </PromoCard>

          <Mid>
            {INFO.map((row) => (
                <InfoRow key={row.id}>
                  <InfoIcon src={row.icon} alt={row.alt} />
                  <InfoText sx={row.maxWidth ? { maxWidth: row.maxWidth } : undefined}>
                    {row.text}
                  </InfoText>
                </InfoRow>
            ))}
          </Mid>

          <Right>
            <LanguageSelect
                value={lang}
                onChange={handleLangChange}
                IconComponent={SelectChevron}
                renderValue={(value) => (
                    <SelectValue>
                      <Flag src={FLAGS[value]} alt="" aria-hidden />
                      <Typography sx={{ color: "#BABABA", fontSize: 16 }}>{LABELS[value]}</Typography>
                    </SelectValue>
                )}
            >
              {LANGS.map((l) => (
                  <MenuItem key={l} value={l} sx={{ gap: 1 }}>
                    <FlagSmall src={FLAGS[l]} alt="" aria-hidden />
                    <Typography sx={{ color: "#BABABA", fontSize: 16 }}>{LABELS[l]}</Typography>
                  </MenuItem>
              ))}
            </LanguageSelect>

            <SocialRow>
              <Typography variant="caption" sx={{ opacity: 0.75 }}>
                Us on social media:
              </Typography>

              <SocialButtons>
                {SOCIALS.map((s) => (
                    <SocialButton
                        key={s.id}
                        component="a"
                        href={s.href}
                        target={s.href.startsWith("http") ? "_blank" : undefined}
                        rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        aria-label={s.label}
                    >
                      <SocialIcon src={s.icon} alt="" aria-hidden />
                    </SocialButton>
                ))}
              </SocialButtons>
            </SocialRow>
          </Right>
        </Inner>
      </Root>
  );
}
