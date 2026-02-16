import * as React from "react";
import MascotBlock from "@/layout/footer/components/MascotBlock";
import PromoCard from "@/layout/footer/components/PromoCard";
import InfoBlock from "@/layout/footer/components/InfoBlock";
import LanguagePicker from "@/layout/footer/components/LanguagePicker";
import SocialLinks from "@/layout/footer/components/SocialLinks";

import { Right, Root, Inner } from "@/layout/footer/styles";

export default function Footer() {
  return (
    <Root component="footer">
      <Inner maxWidth={false} disableGutters>
        <MascotBlock />
        <PromoCard />
        <InfoBlock />

        <Right>
          <LanguagePicker />
          <SocialLinks />
        </Right>
      </Inner>
    </Root>
  );
}
