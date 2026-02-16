import { styled } from "@mui/material/styles";
import BackgroundImage from "@/assets/images/main/background.webp";

export const MainSection = styled("main")(({ theme }) => ({
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
