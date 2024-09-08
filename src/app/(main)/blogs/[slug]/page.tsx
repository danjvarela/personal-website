import { sanityFetch } from "@/sanity/lib/client"
import { blogQuery } from "@/sanity/lib/queries"
import { BlogQueryResult } from "@/sanity/types"
import { ArrowLeft } from "lucide-react"
import { metadataGeneratorFor } from "@/lib/metadata"
import { IconAsText } from "@/components/ui/icon-as-text"
import { Link } from "@/components/ui/link"
import { H1 } from "@/components/ui/typography"
import { BlogCategories } from "@/components/blog-categories"
import { BlogStats } from "@/components/blog-stats"
import { BlogTableOfContents } from "@/components/blog-table-of-contents"
import { PortableText } from "@/components/portable-text"

type Props = {
  params: { slug: string }
}

export const generateMetadata = metadataGeneratorFor("blog")

export default async function BlogPage({ params }: Props) {
  const blog = await sanityFetch<BlogQueryResult>({
    query: blogQuery,
    params: {
      slug: params.slug,
    },
    tags: ["blog"],
  })

  if (!blog) return null

  return (
    <>
      <BlogTableOfContents blog={blog} />
      <main className="px-4 py-8">
        <Link href="/blogs">
          <IconAsText icon={ArrowLeft} /> View all blogs
        </Link>
        <H1>{blog.title}</H1>
        <BlogStats blog={blog} className="mt-2" />
        <div className="mt-4 flex flex-wrap gap-2">
          <BlogCategories blog={blog} />
        </div>
        {blog.content && (
          <PortableText value={blog.content} enableHeaderLinks />
        )}
      </main>
    </>
  )
}
