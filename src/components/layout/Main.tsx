import * as React from "react";
import { Container, Box, Button } from "@mui/material";
import type { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import BackgroundImage from "@/assets/main/background.png";
import BrandImage from "@/assets/footer/brand.png";
import SlotImage from "@/assets/main/slot.png";

const StyledImage = styled(Box)<BoxProps<"img">>(() => ({
  height: "auto",
  width: "100%",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto"
}));

interface StyledButtonProps {
  btnWidth?: number | string;
}

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "btnWidth"
})<StyledButtonProps>(({ btnWidth = 250 }) => ({
  margin: "32px auto",
  display: "flex",
  width: btnWidth,
  height: 56,
  borderRadius: 12,
  padding: "8px 24px",
  gap: 15,
  color: "#fff",
  boxShadow: "none",
  background: "linear-gradient(to right, #FF8D6B, #FFBA47)",
  fontSize: 16,
  textTransform: "uppercase",
  "&:hover": {
    background: "linear-gradient(to right, #FF8D6B, #FFBA47)",
    opacity: 0.9,
    boxShadow: "none"
  },
  "&:active": {
    opacity: 0.85
  }
}));

const MainSection = styled("main")(({ theme }) => ({
  height: 910,
  display: "flex",
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
  return (
    <MainSection>
      <Container maxWidth="md">
        <StyledImage component="img" src={BrandImage} maxWidth={264} />
        <StyledImage component="img" src={SlotImage} sx={{ maxWidth: "326px", mt: "48px" }} />
        <StyledButton btnWidth={"358px"} disableElevation>
          Open the game
        </StyledButton>
      </Container>
    </MainSection>
  );
}
