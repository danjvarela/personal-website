import { sanityFetch } from "@/sanity/lib/client"
import { blogQuery } from "@/sanity/lib/queries"
import { format, formatDistanceToNow } from "date-fns"
import { ArrowLeft } from "lucide-react"
import { SanityDocument } from "next-sanity"
import { Blog as BlogType } from "sanity.types"
import { IconAsText } from "@/components/ui/icon-as-text"
import { Link } from "@/components/ui/link"
import { H1, P } from "@/components/ui/typography"
import { PortableText } from "@/components/portable-text"

type Props = {
  params: {
    slug: string
  }
}

export default async function BlogPage({ params }: Props) {
  const blog = await sanityFetch<SanityDocument<BlogType>>({
    query: blogQuery(params.slug),
  })

  const publishedDate = new Date(blog._createdAt)
  const formattedDate = format(publishedDate, "MMMM dd, yyyy")
  const formattedFromNow = formatDistanceToNow(publishedDate)

  return (
    <main className="px-2 py-8">
      <Link href="/blogs">
        <IconAsText icon={ArrowLeft} /> View all blogs
      </Link>
      <H1>{blog.title}</H1>
      <P className="mt-2 text-muted-foreground">
        Published {formattedDate} ({formattedFromNow} ago)
      </P>
      {blog.content && <PortableText value={blog.content} />}
    </main>
  )
}
