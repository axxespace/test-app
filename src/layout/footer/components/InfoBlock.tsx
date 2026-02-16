import * as React from "react";
import { INFO } from "@/layout/footer/constants";
import { useI18n } from "@/shared/i18n";
import { InfoIcon, InfoRow, InfoText, Mid } from "@/layout/footer/styles";

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
