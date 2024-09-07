import { draftMode } from "next/headers"
import { env } from "@/env.mjs"
import { createClient, QueryOptions, QueryParams } from "next-sanity"

export const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
  stega: {
    enabled: process.env.NEXT_PUBLIC_VERCEL_ENV === "preview",
    studioUrl: "/studio",
  },
})

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
  revalidate = 60,
}: {
  query: string
  params?: QueryParams
  tags?: string[]
  revalidate?: number | false
}) {
  const isDraftMode = draftMode().isEnabled

  const dynamicRevalidate = (() => {
    // we don't cache when in draft mode
    if (isDraftMode) return 0

    // if there is a tag supplied, cache indefinitely until revalidateTag is called
    if (tags?.length) return false

    if (revalidate !== undefined) return revalidate

    return process.env.NODE_ENV === "development" ? 10 : 3600
  })()

  const draftModeOpts: QueryOptions = isDraftMode
    ? {
        token: env.SANITY_API_READ_TOKEN,
        perspective: "previewDrafts",
        stega: true,
        useCdn: false,
      }
    : {}

  return client.fetch<QueryResponse>(query, params, {
    ...draftModeOpts,
    next: {
      revalidate: dynamicRevalidate,
      tags,
    },
  })
}
