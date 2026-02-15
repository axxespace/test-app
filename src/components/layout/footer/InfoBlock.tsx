import * as React from "react";
import { INFO } from "@/components/layout/footer/constants";
import { useI18n } from "@/i18n/I18nProvider";
import { InfoIcon, InfoRow, InfoText, Mid } from "@/components/layout/footer/styles";

export default function InfoBlock() {
  const { t } = useI18n();

  return (
    <Mid>
      {INFO.map((row) => (
        <InfoRow key={row.id}>
          <InfoIcon src={row.icon} alt={row.alt} />
          <InfoText sx={row.maxWidth ? { maxWidth: row.maxWidth } : undefined}>
            {t(row.textKey)}
          </InfoText>
        </InfoRow>
      ))}
    </Mid>
  );
}
