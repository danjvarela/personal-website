import { sanityFetch } from "@/sanity/lib/client"
import { homeQuery } from "@/sanity/lib/queries"
import { HomeQueryResult } from "sanity.types"
import { PortableText } from "@/components/portable-text"

export default async function Home() {
  const homeContent = await sanityFetch<HomeQueryResult>({ query: homeQuery })

  return (
    <main className="px-2 py-8">
      {homeContent?.content && <PortableText value={homeContent.content} />}
    </main>
  )
}
