import { Metadata } from "next"
import { sanityFetch } from "@/sanity/lib/client"
import { seoQuery, slugSpecificSeoQuery } from "@/sanity/lib/queries"
import { SeoQueryResult, SlugSpecificSeoQueryResult } from "sanity.types"
import { defaultMetadata } from "./constants"

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
      })

      if (!doc || !doc?.seo) {
        return defaultMetadata
      }

      const { seo } = doc

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
      }
    } else {
      const doc = await sanityFetch<SeoQueryResult>({
        query: seoQuery,
        params: { type: page },
      })

      if (!doc || !doc?.seo) {
        return defaultMetadata
      }

      const { seo } = doc

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
      }
    }
  }
}
