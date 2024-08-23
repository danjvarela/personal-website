import { sanityFetch } from "@/sanity/lib/client"
import { blogsQuery } from "@/sanity/lib/queries"
import { BlogsQueryResult } from "sanity.types"
import { metadataGeneratorFor } from "@/lib/metadata"
import { H3 } from "@/components/ui/typography"
import { BlogsRenderer } from "@/components/blogs-renderer"
import { CurrentSelectedBlogTag } from "@/components/current-selected-blog-tag"

export const generateMetadata = metadataGeneratorFor("blogs")

export default async function BlogsPage({}) {
  const blogs = await sanityFetch<BlogsQueryResult>({ query: blogsQuery })

  return (
    <main className="px-2 py-8">
      <H3>&#9997; Blogs</H3>
      <CurrentSelectedBlogTag />
      <BlogsRenderer blogs={blogs} />
    </main>
  )
}
