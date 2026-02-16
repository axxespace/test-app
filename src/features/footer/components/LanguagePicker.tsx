import * as React from "react";
import { MenuItem, Typography } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";

import { FLAGS, LANGS, langKey } from "@/features/footer/constants";
import { Flag, FlagSmall, LanguageSelect, SelectValue } from "@/features/footer/styles";
import { type Lang } from "@/shared/i18n/dict";
import { useI18n } from "@/shared/i18n";

const SelectChevron = () => (
  <svg width="35" height="35" viewBox="0 0 24 24" aria-hidden focusable="false">
    <path
      d="M7 10l5 5 5-5"
      stroke="rgba(255,255,255,0.7)"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function LanguagePicker() {
  const { lang, setLang, t } = useI18n();

  const handleLangChange = (e: SelectChangeEvent<Lang>) => {
    setLang(e.target.value as Lang);
  };

  return (
    <LanguageSelect
      value={lang}
      onChange={handleLangChange}
      IconComponent={SelectChevron}
      inputProps={{ "aria-label": "Language" }}
      renderValue={(value) => (
        <SelectValue>
          <Flag src={FLAGS[value]} alt="flag icon" aria-hidden />
          <Typography
            sx={(theme) => ({
              color: theme.custom.footer.icon
            })}
          >
            {t(langKey(value))}
          </Typography>
        </SelectValue>
      )}
    >
      {LANGS.map((l) => (
        <MenuItem key={l} value={l} sx={{ gap: 1 }}>
          <FlagSmall src={FLAGS[l]} alt="small flag icon" aria-hidden />
          <Typography
            sx={(theme) => ({
              color: theme.custom.footer.icon
            })}
          >
            {t(langKey(l))}
          </Typography>
        </MenuItem>
      ))}
    </LanguageSelect>
  );
}
