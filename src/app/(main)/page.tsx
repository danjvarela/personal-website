import { Metadata } from "next"
import { sanityFetch } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { homeQuery, settingsQuery } from "@/sanity/lib/queries"
import { HomeQueryResult, SettingsQueryResult } from "sanity.types"
import { metadataGeneratorFor } from "@/lib/metadata"
import icon from "@/components/logo/logo.svg"
import { PortableText } from "@/components/portable-text"

export async function generateMetadata(): Promise<Metadata> {
  const d = Promise.all([
    metadataGeneratorFor("home")({ params: { slug: "" } }),
    sanityFetch<SettingsQueryResult>({
      query: settingsQuery,
      tags: ["settings"],
    }),
  ])

  const [metadata, settings] = await d

  let icons: Metadata["icons"] = icon

  try {
    if (settings?.favicon) {
      icons = new URL(urlFor(settings?.favicon).width(32).height(32).url())
    }
  } catch (err) {}

  return {
    ...metadata,
    icons,
  }
}

export default async function Home() {
  const homeContent = await sanityFetch<HomeQueryResult>({
    query: homeQuery,
    tags: ["home"],
  })

  return (
    <main className="px-4 py-8">
      {homeContent?.content && <PortableText value={homeContent.content} />}
    </main>
  )
}
