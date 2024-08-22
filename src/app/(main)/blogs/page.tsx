import { sanityFetch } from "@/sanity/lib/client"
import { blogsQuery } from "@/sanity/lib/queries"
import { BlogsQueryResult } from "sanity.types"
import { H3 } from "@/components/ui/typography"
import { Blog } from "@/components/blog"
import { BlogTag } from "@/components/blog-tag"

export default async function BlogsPage({}) {
  const blogs = await sanityFetch<BlogsQueryResult>({ query: blogsQuery })

  return (
    <main className="px-2 py-8">
      <H3>&#9997; Blogs</H3>
      <BlogTag />
      {blogs.map((blog) => (
        <Blog
          key={blog._id}
          blog={{
            title: blog.title || "",
            slug: blog.slug?.current || "",
            createdAt: blog._createdAt,
            tags: blog.tags,
          }}
        />
      ))}
    </main>
  )
}
