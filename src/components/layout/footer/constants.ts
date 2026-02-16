import type { Lang } from "@/i18n/I18nProvider";

import LicenseIcon from "@/assets/footer/license.svg";
import AgeLimitIcon from "@/assets/footer/age-limit.svg";

import EmailIcon from "@/assets/footer/socials/email.svg";
import TelegramIcon from "@/assets/footer/socials/telegram.svg";
import XIcon from "@/assets/footer/socials/x.svg";
import InstagramIcon from "@/assets/footer/socials/instagram.svg";

import GermanyIcon from "@/assets/footer/countries/germany.svg";
import GeorgiaIcon from "@/assets/footer/countries/goergia.svg";
import ItalyIcon from "@/assets/footer/countries/italy.svg";
import RussiaIcon from "@/assets/footer/countries/russia.svg";
import EnglandIcon from "@/assets/footer/countries/england.svg";

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
