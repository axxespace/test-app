import * as React from "react";
import MascotImage from "@/assets/footer/mascot.png";
import { Mascot, MascotWrap } from "@/components/layout/footer/styles";

export default function MascotBlock() {
  return (
    <MascotWrap>
      <Mascot src={MascotImage} alt="Mascot" />
    </MascotWrap>
  );
}
