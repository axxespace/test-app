import * as React from "react";
import MascotImage from "@/assets/images/footer/mascot.png";
import { Mascot, MascotWrap } from "@/features/footer/styles";

export default function MascotBlock() {
  return (
    <MascotWrap>
      <Mascot src={MascotImage} alt="Mascot" />
    </MascotWrap>
  );
}
