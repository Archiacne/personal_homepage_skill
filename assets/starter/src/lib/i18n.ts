import { defaultLocale, type Locale } from "../data/site";
import { withBase } from "./urls";

export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? "" : "/en";
}

export function localizedPath(locale: Locale, path = "/"): string {
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/|\/$/g, "")}/`;
  return withBase(`${localePrefix(locale)}${normalizedPath}`);
}

export function otherLocale(locale: Locale): Locale {
  return locale === "zh-CN" ? "en" : "zh-CN";
}

export function localeFromPostId(id: string): Locale {
  return id.startsWith("en/") ? "en" : "zh-CN";
}

export function slugFromPostId(id: string): string {
  return id.split("/").at(-1) ?? id;
}

