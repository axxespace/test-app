import * as React from "react";

import mascot from "@/assets/footer/mascot.png";
import brand from "@/assets/footer/brand.png";

import { Box, Container, Typography, Button, Select, MenuItem, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

import DownloadIcon from "@/assets/footer/download.svg";
import LicenseIcon from "@/assets/footer/license.svg";
import AgeLimitIcon from "@/assets/footer/age-limit.svg";
import EmailIcon from "@/assets/footer/email.svg";
import TelegramIcon from "@/assets/footer/telegram.svg";
import XIcon from "@/assets/footer/x.svg";
import InstagramIcon from "@/assets/footer/instagram.svg";

function fluidClampPx(minPx: number, maxPx: number, minVw = 1440, maxVw = 1920) {
  const slope = (maxPx - minPx) / (maxVw - minVw);
  const yIntercept = minPx - slope * minVw;
  return `clamp(${minPx}px, calc(${(slope * 100).toFixed(6)}vw + ${yIntercept.toFixed(
    6
  )}px), ${maxPx}px)`;
}

type InfoRowItem = {
  id: "age" | "license";
  icon: string;
  alt: string;
  text: string;
  maxWidth?: number;
};

type SocialItem = {
  id: "instagram" | "telegram" | "x" | "email";
  label: string;
  icon: string;
  href: string;
};

const Root = styled(Box)({
  width: "100%",
  margin: 0,
  color: "rgba(233,236,255,0.95)",
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
  [theme.breakpoints.up("lg")]: {
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
  marginRight: "auto"
}));

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

const Right = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  marginTop: theme.spacing(12.5),
  gap: theme.spacing(13.25),
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    marginTop: 0,
    gap: theme.spacing(7.5),
    alignItems: "center"
  }
}));

const LanguageSelect = styled(Select)({
  width: "100%",
  maxWidth: 289,
  minWidth: 0,
  overflow: "hidden",
  height: 56,
  borderRadius: 8,
  border: "1px solid rgba(255, 255, 255, 0.1)",
  color: "rgba(233,236,255,0.9)",
  ".MuiSelect-select": {
    padding: 12,
    display: "flex",
    alignItems: "center",
    height: "100%",
    boxSizing: "border-box"
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255,255,255,0.10)"
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255,255,255,0.18)"
  },
  ".MuiSvgIcon-root": {
    color: "rgba(233,236,255,0.75)"
  }
});

const SocialRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: theme.spacing(1.5),
  [theme.breakpoints.down("lg")]: {
    alignItems: "center"
  }
}));

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

export default function Footer() {
  const info: readonly InfoRowItem[] = [
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

  const socials: readonly SocialItem[] = [
    { id: "instagram", label: "Instagram", icon: InstagramIcon, href: "https://instagram.com" },
    { id: "telegram", label: "Telegram", icon: TelegramIcon, href: "https://t.me" },
    { id: "x", label: "X", icon: XIcon, href: "https://x.com" },
    { id: "email", label: "Email", icon: EmailIcon, href: "mailto:support@example.com" }
  ] as const;

  return (
    <Root component="footer">
      <Inner maxWidth={false} disableGutters>
        <MascotWrap>
          <Mascot src={mascot} alt="Mascot" />
        </MascotWrap>

        <PromoCard>
          <BrandLogo src={brand} alt="Brand" />
          <Title variant="h3">Download Casino</Title>
          <Subtitle>Play Min anywhere, anytime</Subtitle>

          <InstallButton fullWidth disableElevation>
            <Box component="img" src={DownloadIcon} alt="" aria-hidden sx={{ width: 24 }} />
            Install App
          </InstallButton>
        </PromoCard>

        <Mid>
          {info.map((row) => (
            <InfoRow key={row.id}>
              <Box component="img" src={row.icon} alt={row.alt} sx={{ width: 58 }} />
              <Typography
                variant="body2"
                sx={row.maxWidth ? { maxWidth: row.maxWidth } : undefined}
              >
                {row.text}
              </Typography>
            </InfoRow>
          ))}
        </Mid>

        <Right>
          <LanguageSelect value="tr" size="small">
            <MenuItem value="tr">🇹🇷 Turkish</MenuItem>
            <MenuItem value="en">🇬🇧 English</MenuItem>
            <MenuItem value="ru">🇷🇺 Russian</MenuItem>
          </LanguageSelect>

          <SocialRow>
            <Typography variant="caption" sx={{ opacity: 0.75 }}>
              Us on social media:
            </Typography>

            <Box sx={{ display: "flex" }}>
              {socials.map((s) => (
                <IconButton
                  component="a"
                  href={s.href}
                  target=""
                  rel=""
                  sx={{
                    padding: "2px",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.10)" }
                  }}
                >
                  <Box
                    component="img"
                    src={s.icon}
                    alt=""
                    aria-hidden
                    sx={{ width: 52, height: 52 }}
                  />
                </IconButton>
              ))}
            </Box>
          </SocialRow>
        </Right>
      </Inner>
    </Root>
  );
}
