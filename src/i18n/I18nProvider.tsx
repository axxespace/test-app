import * as React from "react";

export type Lang = "en" | "ge" | "ger" | "rus" | "it";

export const DICT: Record<Lang, Record<string, string>> = {
  en: {
    "lang.en": "English",
    "lang.ge": "Georgian",
    "lang.ger": "German",
    "lang.rus": "Russian",
    "lang.it": "Italian",

    "footer.promo.title": "Download Casino",
    "footer.promo.subtitle": "Play Min anywhere, anytime",
    "footer.promo.install": "Install App",

    "footer.info.age": "Only 18+",
    "footer.info.license": "Casino is certified by the Anjouan Gaming Authority",

    "footer.socials.title": "Us on social media:",

    "main.openGame": "Open the game"
  },

  ge: {
    "lang.en": "ინგლისური",
    "lang.ge": "ქართული",
    "lang.ger": "გერმანული",
    "lang.rus": "რუსული",
    "lang.it": "იტალიური",

    "footer.promo.title": "ჩამოტვირთვა",
    "footer.promo.subtitle": "ითამაშე ნებისმიერ დროს",
    "footer.promo.install": "აპის დაყენება",

    "footer.info.age": "მხოლოდ 18+",
    "footer.info.license": "კაზინო სერტიფიცირებულია Anjouan Gaming Authority-ის მიერ",

    "footer.socials.title": "ჩვენ სოციალურ მედიაში:",

    "main.openGame": "თამაშის გახსნა"
  },

  ger: {
    "lang.en": "Englisch",
    "lang.ge": "Georgisch",
    "lang.ger": "Deutsch",
    "lang.rus": "Russisch",
    "lang.it": "Italienisch",

    "footer.promo.title": "Casino herunterladen",
    "footer.promo.subtitle": "Spiele überall und jederzeit",
    "footer.promo.install": "App installieren",

    "footer.info.age": "Nur 18+",
    "footer.info.license": "Das Casino ist von der Anjouan Gaming Authority zertifiziert",

    "footer.socials.title": "Wir in den sozialen Medien:",

    "main.openGame": "Spiel öffnen"
  },

  it: {
    "lang.en": "Inglese",
    "lang.ge": "Georgiano",
    "lang.ger": "Tedesco",
    "lang.rus": "Russo",
    "lang.it": "Italiano",

    "footer.promo.title": "Scarica Casino",
    "footer.promo.subtitle": "Gioca ovunque, in qualsiasi momento",
    "footer.promo.install": "Installa l’app",

    "footer.info.age": "Solo 18+",
    "footer.info.license": "Il casinò è certificato dalla Anjouan Gaming Authority",

    "footer.socials.title": "Sui social media:",

    "main.openGame": "Apri il gioco"
  },

  rus: {
    "lang.en": "Английский",
    "lang.ge": "Грузинский",
    "lang.ger": "Немецкий",
    "lang.rus": "Русский",
    "lang.it": "Итальянский",

    "footer.promo.title": "Скачать Casino",
    "footer.promo.subtitle": "Играй где угодно и когда угодно",
    "footer.promo.install": "Установить приложение",

    "footer.info.age": "Только 18+",
    "footer.info.license": "Казино сертифицировано Anjouan Gaming Authority",

    "footer.socials.title": "Мы в социальных сетях:",

    "main.openGame": "Открыть игру"
  }
};

type Params = Record<string, string | number>;

function format(template: string, params?: Params) {
  if (!params) return template;
  return template.replace(/\{(\w+)}/g, (_, k) => String(params[k] ?? `{${k}}`));
}

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, params?: Params) => string;
};

const I18nContext = React.createContext<I18nContextValue | null>(null);

export function I18nProvider({
  children,
  defaultLang = "en",
  storageKey = "app_lang"
}: {
  children: React.ReactNode;
  defaultLang?: Lang;
  storageKey?: string;
}) {
  const [lang, setLangState] = React.useState<Lang>(() => {
    const saved = localStorage.getItem(storageKey) as Lang | null;
    return saved ?? defaultLang;
  });

  const setLang = React.useCallback(
    (l: Lang) => {
      setLangState(l);
      localStorage.setItem(storageKey, l);
      document.documentElement.lang = l;
    },
    [storageKey]
  );

  const t = React.useCallback(
    (key: string, params?: Params) => {
      const str = DICT[lang]?.[key] ?? DICT[defaultLang]?.[key] ?? key;
      return format(str, params);
    },
    [lang, defaultLang]
  );

  const value = React.useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = React.useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}
