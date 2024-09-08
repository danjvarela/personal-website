import { sanityFetch } from "@/sanity/lib/client"
import { categoryBlogsQuery, categoryQuery } from "@/sanity/lib/queries"
import { CategoryBlogsQueryResult, CategoryQueryResult } from "@/sanity/types"
import { ArrowLeft } from "lucide-react"
import { IconAsText } from "@/components/ui/icon-as-text"
import { Link } from "@/components/ui/link"
import { H3 } from "@/components/ui/typography"
import { Blog } from "@/components/blog"

type Props = {
  params: {
    slug: string
  }
}

export default async function CategoryBlogsPage({ params }: Props) {
  async function getBlogs() {
    return await sanityFetch<CategoryBlogsQueryResult>({
      query: categoryBlogsQuery,
      params: { slug: params.slug },
      tags: ["category", "blogs", "blog"],
    })
  }

  async function getCategory() {
    return await sanityFetch<CategoryQueryResult>({
      query: categoryQuery,
      params: { slug: params.slug },
      tags: ["category"],
    })
  }

  const [category, blogs] = await Promise.all([getCategory(), getBlogs()])

  return (
    <main className="px-4 py-8">
      <Link href="/blogs">
        <IconAsText icon={ArrowLeft} /> View all blogs
      </Link>
      <H3>&#9997; Blogs in "{category?.name}" category</H3>
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog._id} />
      ))}
    </main>
  )
}
