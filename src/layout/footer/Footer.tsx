import * as React from "react";
import FooterMascot from "@/layout/footer/FooterMascot";
import FooterPromoCard from "@/layout/footer/FooterPromoCard";
import FooterInfo from "@/layout/footer/FooterInfo";
import FooterLanguagePicker from "@/layout/footer/FooterLanguagePicker";
import FooterSocials from "@/layout/footer/FooterSocials";

import { Right, Root, Inner } from "@/layout/footer/footer.styles";

export default function Footer() {
  return (
    <Root component="footer">
      <Inner maxWidth={false} disableGutters>
        <FooterMascot />
        <FooterPromoCard />
        <FooterInfo />

        <Right>
          <FooterLanguagePicker />
          <FooterSocials />
        </Right>
      </Inner>
    </Root>
  );
}
