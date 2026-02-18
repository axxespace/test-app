import { useMemo, useCallback, useState, useEffect, ReactNode } from "react";
import { DICT, type Lang } from "@/shared/i18n/dict";
import { format, type Params } from "@/shared/i18n/format";
import { I18nContext } from "@/shared/i18n/context";
import { buildPathWithLang, getLangFromPathname, isLang } from "@/shared/i18n/url";

export function I18nProvider({
  children,
  defaultLang = "en",
  storageKey = "app_lang"
}: {
  children: ReactNode;
  defaultLang?: Lang;
  storageKey?: string;
}) {
  const [lang, setLangState] = useState<Lang>(() => {
    const fromPath = getLangFromPathname(window.location.pathname);
    if (fromPath) return fromPath;

    const saved = localStorage.getItem(storageKey) as Lang | null;
    if (saved && isLang(saved)) return saved;

    return defaultLang;
  });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const current = getLangFromPathname(window.location.pathname);
    if (!current) {
      const nextUrl = buildPathWithLang(
        lang,
        window.location.pathname,
        window.location.search,
        window.location.hash
      );
      window.history.replaceState(null, "", nextUrl);
    }
  }, [lang]);

  const setLang = useCallback(
    (l: Lang) => {
      setLangState(l);
      localStorage.setItem(storageKey, l);

      const nextUrl = buildPathWithLang(
        l,
        window.location.pathname,
        window.location.search,
        window.location.hash
      );

      window.history.pushState(null, "", nextUrl);
      window.dispatchEvent(new Event("popstate"));
    },
    [storageKey]
  );

  const t = useCallback(
    (key: string, params?: Params) => {
      const str = DICT[lang]?.[key] ?? DICT[defaultLang]?.[key] ?? key;
      return format(str, params);
    },
    [lang, defaultLang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
