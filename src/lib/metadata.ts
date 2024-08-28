import { Metadata } from "next"
import { env } from "@/env.mjs"
import { sanityFetch } from "@/sanity/lib/client"
import { seoQuery, slugSpecificSeoQuery } from "@/sanity/lib/queries"
import {
  SeoMetaFields,
  SeoQueryResult,
  SlugSpecificSeoQueryResult,
} from "sanity.types"
import { defaultMetadata } from "./constants"

export function resolveUrl(str: string) {
  return new URL(str, `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`).toString()
}

export function getMetadata(seo: SeoMetaFields): Metadata {
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
    if (params.slug) {
      const doc = await sanityFetch<SlugSpecificSeoQueryResult>({
        query: slugSpecificSeoQuery,
        params: { type: page, slug: params.slug },
        tags: [page],
      })

      if (!doc || !doc?.seo) {
        return defaultMetadata
      }

      const metadata = {
        ...getMetadata(doc.seo),
        alternates: {
          canonical: resolveUrl(`${page}/${params.slug}`),
        },
        authors: {
          name: "Dan Varela",
          url: "https://github.com/danjvarela",
        },
      }
      return metadata
    } else {
      const doc = await sanityFetch<SeoQueryResult>({
        query: seoQuery,
        params: { type: page },
        tags: [page],
      })

      if (!doc || !doc?.seo) {
        return defaultMetadata
      }

      return {
        ...getMetadata(doc.seo),
        alternates: {
          canonical: resolveUrl(page === "home" ? "" : page),
        },
      }
    }
  }
}
