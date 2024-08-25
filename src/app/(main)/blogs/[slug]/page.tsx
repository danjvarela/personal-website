import { sanityFetch } from "@/sanity/lib/client"
import { blogQuery } from "@/sanity/lib/queries"
import { format, formatDistanceToNow } from "date-fns"
import { ArrowLeft } from "lucide-react"
import { BlogQueryResult } from "sanity.types"
import { metadataGeneratorFor } from "@/lib/metadata"
import { IconAsText } from "@/components/ui/icon-as-text"
import { Link } from "@/components/ui/link"
import { H1, P } from "@/components/ui/typography"
import { BlogTableOfContents } from "@/components/blog-table-of-contents"
import { BlogTags } from "@/components/blog-tags"
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
  })

  if (!blog) return null

  const publishedDate = new Date(blog._createdAt || "")
  const formattedDate = format(publishedDate, "MMMM dd, yyyy")
  const formattedFromNow = formatDistanceToNow(publishedDate)

  return (
    <>
      <BlogTableOfContents blog={blog} />
      <main className="px-4 py-8">
        <Link href="/blogs">
          <IconAsText icon={ArrowLeft} /> View all blogs
        </Link>
        <H1>{blog.title}</H1>
        <P className="mt-2 text-muted-foreground">
          Published {formattedDate} ({formattedFromNow} ago)
        </P>
        <div className="mt-4 flex flex-wrap gap-2">
          <BlogTags blog={blog} />
        </div>
        {blog.content && (
          <PortableText value={blog.content} enableHeaderLinks />
        )}
      </main>
    </>
  )
}
