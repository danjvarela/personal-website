import type { MetadataRoute } from "next"
import { env } from "@/env.mjs"
import { sanityFetch } from "@/sanity/lib/client"
import { allPagesQuery } from "@/sanity/lib/queries"
import { AllPagesQueryResult } from "sanity.types"
import { match } from "ts-pattern"

export function resolveUrl(str: string) {
  return new URL(str, `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`).toString()
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPages = await sanityFetch<AllPagesQueryResult>({
    query: allPagesQuery,
    tags: ["home", "blog", "works", "blogs"],
  })

  return allPages.map((page) => {
    return match(page)
      .with({ _type: "home" }, (page) => {
        return {
          url: resolveUrl("/"),
          lastModified: new Date(page._updatedAt),
          changeFrequency: "weekly",
          priority: 1,
        } satisfies MetadataRoute.Sitemap[number]
      })
      .with({ _type: "works" }, (page) => {
        return {
          url: resolveUrl("/works"),
          lastModified: new Date(page._updatedAt),
          changeFrequency: "monthly",
          priority: 0.5,
        } satisfies MetadataRoute.Sitemap[number]
      })
      .with({ _type: "blogs" }, (page) => {
        return {
          url: resolveUrl("/blogs"),
          lastModified: new Date(page._updatedAt),
          changeFrequency: "weekly",
          priority: 0.9,
        } satisfies MetadataRoute.Sitemap[number]
      })
      .with({ _type: "blog" }, (page) => {
        return {
          url: resolveUrl(`/blogs/${page.slug?.current}`),
          lastModified: new Date(page._updatedAt),
          changeFrequency: "weekly",
          priority: 0.9,
        } satisfies MetadataRoute.Sitemap[number]
      })
      .exhaustive()
  })
}
