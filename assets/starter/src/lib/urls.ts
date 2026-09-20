const normalizedBase = import.meta.env.BASE_URL.replace(/\/$/, "");

export function withBase(path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const result = `${normalizedBase}${normalizedPath}`.replace(/\/{2,}/g, "/");
  return result || "/";
}

export function externalLinkProps(url: string) {
  return /^https?:\/\//.test(url)
    ? { target: "_blank", rel: "noreferrer noopener" }
    : {};
}

