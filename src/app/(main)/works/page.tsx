import { sanityFetch } from "@/sanity/lib/client"
import { worksQuery } from "@/sanity/lib/queries"
import { SanityDocument } from "next-sanity"
import { PortableText } from "@/components/portable-text"

export default async function WorksPage() {
  const worksContent = await sanityFetch<SanityDocument>({ query: worksQuery })

  return (
    <main className="px-2 py-8">
      {worksContent?.content && <PortableText value={worksContent.content} />}
    </main>
  )
}
