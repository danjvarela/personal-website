import { sanityFetch } from "@/sanity/lib/client"
import { blogsQuery } from "@/sanity/lib/queries"
import { BlogsQueryResult } from "sanity.types"
import { metadataGeneratorFor } from "@/lib/metadata"
import { H3 } from "@/components/ui/typography"
import { BlogsRenderer } from "@/components/blogs-renderer"
import { CurrentSelectedBlogTag } from "@/components/current-selected-blog-tag"

export const generateMetadata = metadataGeneratorFor("blogs")

export default async function BlogsPage({}) {
  const blogs = await sanityFetch<BlogsQueryResult>({
    query: blogsQuery,
    tags: ["blogs"],
  })

  return (
    <main className="px-4 py-8">
      <H3>&#9997; Blogs</H3>
      <CurrentSelectedBlogTag blogs={blogs} />
      <BlogsRenderer blogs={blogs} />
    </main>
  )
}
