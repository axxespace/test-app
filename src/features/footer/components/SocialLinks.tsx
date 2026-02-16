import * as React from "react";
import { Typography } from "@mui/material";

import { SOCIALS } from "@/features/footer/constants";
import {
  SocialButton,
  SocialButtons,
  SocialIcon,
  SocialRow
} from "@/features/footer/styles";
import { useI18n } from "@/shared/i18n/I18nProvider";

export default function SocialLinks() {
  const { t } = useI18n();

  return (
    <SocialRow>
      <Typography
        variant="caption"
        sx={(theme) => ({
          color: theme.custom.footer.icon,
          lineHeight: 1
        })}
      >
        {t("footer.socials.title")}
      </Typography>

      <SocialButtons>
        {SOCIALS.map((s) => (
          <SocialButton
            key={s.id}
            component="a"
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={s.label}
          >
            <SocialIcon src={s.icon} alt="" aria-hidden />
          </SocialButton>
        ))}
      </SocialButtons>
    </SocialRow>
  );
}
