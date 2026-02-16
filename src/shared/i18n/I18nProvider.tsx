import * as React from "react";
import { DICT, type Lang } from "./dict";
import { format, type Params } from "./format";

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
