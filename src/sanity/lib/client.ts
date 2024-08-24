import { draftMode } from "next/headers"
import { env } from "@/env.mjs"
import { createClient, QueryOptions, QueryParams } from "next-sanity"

export const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
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

  let dynamicRevalidate = revalidate

  if (isDraftMode) {
    // Do not cache in Draft Mode
    dynamicRevalidate = 0
  } else if (tags?.length) {
    // Cache indefinitely if tags supplied, purge with revalidateTag()
    dynamicRevalidate = false
  }

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
      revalidate: process.env.NODE_ENV === "development" ? 10 : 3600,
      tags,
    },
  })
}
