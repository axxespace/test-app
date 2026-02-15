import { Box, Container, Typography, Select, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { Lang } from "@/i18n/I18nProvider";

export function fluidClampPx(minPx: number, maxPx: number, minVw = 1440, maxVw = 1920) {
  const slope = (maxPx - minPx) / (maxVw - minVw);
  const yIntercept = minPx - slope * minVw;
  return `clamp(${minPx}px, calc(${(slope * 100).toFixed(6)}vw + ${yIntercept.toFixed(
    6
  )}px), ${maxPx}px)`;
}

export const Root = styled(Box)({
  width: "100%",
  margin: 0,
  background: "linear-gradient(90deg,#02011F 0%, #06225D 100%)"
}) as typeof Box;

export const Inner = styled(Container)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns:
    "minmax(200px, auto) minmax(320px, 390px) minmax(260px, 1fr) minmax(220px, 289px)",
  columnGap: theme.spacing(8),
  paddingTop: theme.spacing(7.5),
  paddingBottom: theme.spacing(7.5),
  paddingRight: theme.spacing(4),
  [theme.breakpoints.down("xxl")]: { columnGap: theme.spacing(5) },
  [theme.breakpoints.down("xl")]: {
    gridTemplateColumns: "1fr",
    rowGap: theme.spacing(6.5),
    paddingTop: theme.spacing(7.5),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(3.5),
    paddingRight: theme.spacing(3.5)
  }
}));

export const MascotWrap = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("xl")]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export const Mascot = styled("img")({
  width: fluidClampPx(240, 288, 1440, 1920),
  height: "auto",
  userSelect: "none",
  pointerEvents: "none"
});

export const PromoCardWrap = styled(Box)(({ theme }) => ({
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
  position: "relative"
}));

export const SpotterBorderSvg = styled("svg")({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none"
});

export const Title = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3),
  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
  fontWeight: 860,
  fontSize: 32,
  lineHeight: "40px",
  letterSpacing: "0",
  textAlign: "center"
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(0.75),
  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
  fontWeight: 600,
  fontSize: 16,
  lineHeight: "22px",
  letterSpacing: 0,
  textAlign: "center"
}));

export const Mid = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: theme.spacing(3),
  [theme.breakpoints.down("xl")]: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    order: 4
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    flexWrap: "nowrap"
  }
}));

export const InfoRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.25),
  color: "rgba(233,236,255,0.75)",
  [theme.breakpoints.down("xl")]: {
    width: 287,
    flexDirection: "column",
    textAlign: "center"
  },
  [theme.breakpoints.down("md")]: { width: "auto" }
}));

export const InfoIcon = styled("img")({ width: 58, height: 58 });

export const InfoText = styled(Typography)({
  fontSize: 16,
  lineHeight: "20px",
  color: "rgba(251, 251, 251, 0.7)"
});

export const Right = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  marginTop: 40,
  gap: theme.spacing(13.25),
  [theme.breakpoints.down("xl")]: {
    width: "100%",
    marginTop: 0,
    gap: theme.spacing(7.5),
    alignItems: "center"
  }
}));

export const LanguageSelect = styled(Select<Lang>)(() => ({
  width: "100%",
  paddingRight: 12,
  maxWidth: 289,
  minWidth: 0,
  overflow: "hidden",
  height: 56,
  borderRadius: 8,
  background: "rgba(255, 255, 255, 0.1)",
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.10)" },
  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.10)" },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.10)" },
  "& .MuiSelect-select": { display: "flex", alignItems: "center", gap: 12 },
  "& .MuiSelect-icon": { right: 18, color: "rgba(255,255,255,0.7)" }
}));

export const SelectValue = styled(Box)({
  padding: "0 !important",
  display: "flex",
  alignItems: "center",
  gap: 12
});

export const Flag = styled("img")({
  width: 24,
  height: 24,
  borderRadius: "50%",
  objectFit: "cover"
});

export const FlagSmall = styled("img")({
  width: 20,
  height: 20,
  borderRadius: "50%",
  objectFit: "cover"
});

export const SocialRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: theme.spacing(1.5),
  [theme.breakpoints.down("xl")]: { alignItems: "center" }
}));

export const SocialButtons = styled(Box)({ display: "flex" });

export const SocialButton = styled(IconButton)({
  padding: 2,
  "&:hover": { backgroundColor: "rgba(255,255,255,0.10)" }
}) as typeof IconButton;

export const SocialIcon = styled("img")({ width: 52, height: 52 });
