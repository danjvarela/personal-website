import { sanityFetch } from "@/sanity/lib/client"
import { blogsQuery } from "@/sanity/lib/queries"
import { BlogsQueryResult } from "@/sanity/types"
import { metadataGeneratorFor } from "@/lib/metadata"
import { H3 } from "@/components/ui/typography"
import { Blog } from "@/components/blog"

export const generateMetadata = metadataGeneratorFor("blogs")

export default async function BlogsPage({}) {
  const blogs = await sanityFetch<BlogsQueryResult>({
    query: blogsQuery,
    tags: ["blogs", "blog"],
  })

  return (
    <main className="px-4 py-8">
      <H3>&#9997; Blogs</H3>
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog._id} />
      ))}
    </main>
  )
}
