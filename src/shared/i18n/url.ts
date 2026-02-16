import { DICT, type Lang } from "./dict";

export function isLang(x: unknown): x is Lang {
  return typeof x === "string" && Object.prototype.hasOwnProperty.call(DICT, x);
}

export function getLangFromPathname(pathname: string): Lang | null {
  const seg = pathname.split("/").filter(Boolean)[0];
  return isLang(seg) ? seg : null;
}

export function buildPathWithLang(l: Lang, pathname: string, search: string, hash: string) {
  const parts = pathname.split("/").filter(Boolean);

  if (parts.length > 0 && isLang(parts[0])) parts[0] = l;
  else parts.unshift(l);

  return `/${parts.join("/")}${search}${hash}`;
}
