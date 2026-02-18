import * as React from "react";
import MascotImage from "@/assets/images/footer/mascot.webp";
import { Mascot, MascotWrap } from "@/layout/footer/footer.styles";

export default function FooterMascot() {
  return (
    <MascotWrap>
      <Mascot loading="lazy" src={MascotImage} alt="Mascot" />
    </MascotWrap>
  );
}
