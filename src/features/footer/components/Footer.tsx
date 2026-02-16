import * as React from "react";
import MascotBlock from "@/features/footer/components/MascotBlock";
import PromoCard from "@/features/footer/components/PromoCard";
import InfoBlock from "@/features/footer/components/InfoBlock";
import LanguagePicker from "@/features/footer/components/LanguagePicker";
import SocialLinks from "@/features/footer/components/SocialLinks";

import { Right, Root, Inner } from "@/features/footer/styles";

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
