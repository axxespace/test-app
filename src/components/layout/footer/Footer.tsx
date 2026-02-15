import * as React from "react";
import MascotBlock from "@/components/layout/footer/MascotBlock";
import PromoCard from "@/components/layout/footer//PromoCard";
import InfoBlock from "@/components/layout/footer/InfoBlock";
import LanguagePicker from "@/components/layout/footer/LanguagePicker";
import SocialLinks from "@/components/layout/footer/SocialLinks";

import { Right, Root, Inner } from "@/components/layout/footer/styles";

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
