import type { Locale } from "../data/site";
import { withBase } from "./urls";

export function localizedPath(_locale: Locale, path = "/"): string {
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/|\/$/g, "")}/`;
  return withBase(normalizedPath);
}

export function slugFromPostId(id: string): string {
  return id.split("/").at(-1) ?? id;
}
