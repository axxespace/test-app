import type { Lang } from "@/shared/i18n/I18nProvider";

import LicenseIcon from "@/assets/icons/footer/license.svg";
import AgeLimitIcon from "@/assets/icons/footer/age-limit.svg";

import EmailIcon from "@/assets/icons/socials/email.svg";
import TelegramIcon from "@/assets/icons/socials/telegram.svg";
import XIcon from "@/assets/icons/socials/x.svg";
import InstagramIcon from "@/assets/icons/socials/instagram.svg";

import GermanyIcon from "@/assets/icons/countries/germany.svg";
import GeorgiaIcon from "@/assets/icons/countries/goergia.svg";
import ItalyIcon from "@/assets/icons/countries/italy.svg";
import RussiaIcon from "@/assets/icons/countries/russia.svg";
import EnglandIcon from "@/assets/icons/countries/england.svg";

type ImgSrc = string;

export type InfoRowItem = {
  id: "age" | "license";
  icon: ImgSrc;
  alt: string;
  textKey: string;
  maxWidth?: number;
};

export type SocialItem = {
  id: "instagram" | "telegram" | "x" | "email";
  label: string;
  icon: ImgSrc;
  href: string;
};

export const INFO: readonly InfoRowItem[] = [
  { id: "age", icon: AgeLimitIcon, alt: "18+ Age limit", textKey: "footer.info.age" },
  {
    id: "license",
    icon: LicenseIcon,
    alt: "License",
    textKey: "footer.info.license",
    maxWidth: 287
  }
] as const;

export const SOCIALS: readonly SocialItem[] = [
  { id: "instagram", label: "Instagram", icon: InstagramIcon, href: "https://instagram.com" },
  { id: "telegram", label: "Telegram", icon: TelegramIcon, href: "https://t.me" },
  { id: "x", label: "X", icon: XIcon, href: "https://x.com" },
  { id: "email", label: "Email", icon: EmailIcon, href: "mailto:support@example.com" }
] as const;

export const FLAGS: Record<Lang, ImgSrc> = {
  ge: GeorgiaIcon,
  en: EnglandIcon,
  it: ItalyIcon,
  rus: RussiaIcon,
  ger: GermanyIcon
};

export const LANGS: readonly Lang[] = ["en", "ge", "ger", "rus", "it"] as const;

export const langKey = (l: Lang) => `lang.${l}`;
