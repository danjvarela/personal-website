import { Metadata } from "next"
import { env } from "@/env.mjs"
import { sanityFetch } from "@/sanity/lib/client"
import { seoQuery, slugSpecificSeoQuery } from "@/sanity/lib/queries"
import {
  SeoMetaFields,
  SeoQueryResult,
  SlugSpecificSeoQueryResult,
} from "@/sanity/types"
import { defaultMetadata } from "./constants"

export function resolveUrl(str: string) {
  return new URL(str, `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`).toString()
}

export function getMetadata(seo?: SeoMetaFields | null): Metadata {
  if (!seo) return defaultMetadata

  return {
    title: seo?.metaTitle || defaultMetadata.title,
    description: seo?.metaDescription || defaultMetadata.description,
    keywords: seo?.seoKeywords || defaultMetadata.keywords,
    robots: {
      follow: seo.nofollowAttributes,
      index: seo.nofollowAttributes,
    },
    twitter: seo.twitter,
    openGraph: seo.openGraph,
    metadataBase: new URL(resolveUrl("/")),
  }
}

export function metadataGeneratorFor(page: string) {
  return async function generateMetadata({
    params,
  }: {
    params: { slug: string }
  }): Promise<Metadata> {
    if (page === "home") {
      const doc = await sanityFetch<SeoQueryResult>({
        query: seoQuery,
        params: { type: "home" },
        tags: ["home"],
      })

      return {
        ...getMetadata(doc?.seo),
        alternates: { canonical: resolveUrl("/") },
      }
    }

    if (page === "blog" && params.slug) {
      const doc = await sanityFetch<SlugSpecificSeoQueryResult>({
        query: slugSpecificSeoQuery,
        params: { type: "blog", slug: params.slug },
        tags: ["blog"],
      })

      return {
        ...getMetadata(doc?.seo),
        alternates: {
          canonical: resolveUrl(`/blogs/${params.slug}`),
        },
      }
    }

    const doc = await sanityFetch<SeoQueryResult>({
      query: seoQuery,
      params: { type: page },
      tags: [page],
    })

    return {
      ...getMetadata(doc?.seo),
      alternates: {
        canonical: resolveUrl(page),
      },
    }
  }
}
