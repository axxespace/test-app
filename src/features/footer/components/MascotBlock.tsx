import * as React from "react";
import MascotImage from "@/assets/images/footer/mascot.webp";
import { Mascot, MascotWrap } from "@/features/footer/styles";

export default function MascotBlock() {
  return (
    <MascotWrap>
      <Mascot loading="lazy" src={MascotImage} alt="Mascot" />
    </MascotWrap>
  );
}
