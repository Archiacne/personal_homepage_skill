import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "../data/site";
import { slugFromPostId } from "./i18n";

export type BlogPost = CollectionEntry<"blog">;

export async function getPublishedPosts(locale: Locale): Promise<BlogPost[]> {
  return (await getCollection("blog", ({ data }) => !data.draft && data.locale === locale))
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

export async function getPostBySlug(locale: Locale, slug: string): Promise<BlogPost | undefined> {
  return (await getPublishedPosts(locale)).find((post) => slugFromPostId(post.id) === slug);
}

export async function findTranslation(post: BlogPost): Promise<BlogPost | undefined> {
  if (!post.data.translationKey) return undefined;

  const targetLocale: Locale = post.data.locale === "zh-CN" ? "en" : "zh-CN";
  return (await getPublishedPosts(targetLocale)).find(
    (candidate) => candidate.data.translationKey === post.data.translationKey,
  );
}

