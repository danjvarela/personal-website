import { sanityFetch } from "@/sanity/lib/client"
import { worksQuery } from "@/sanity/lib/queries"
import { WorksQueryResult } from "sanity.types"
import { metadataGeneratorFor } from "@/lib/metadata"
import { PortableText } from "@/components/portable-text"

export const generateMetadata = metadataGeneratorFor("works")

export default async function WorksPage() {
  const worksContent = await sanityFetch<WorksQueryResult>({
    query: worksQuery,
  })

  return (
    <main className="px-2 py-8">
      {worksContent?.content && <PortableText value={worksContent.content} />}
    </main>
  )
}
