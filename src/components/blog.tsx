import NextLink from "next/link"
import { format, formatDistanceToNow } from "date-fns"
import isEmpty from "lodash/isEmpty"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { H4, typographyVariants } from "@/components/ui/typography"
import { Link } from "./ui/link"

type Props = {
  blog: {
    title: string
    slug: string
    createdAt: string
    tags?: string[]
  }
}

export function Blog({ blog }: Props) {
  const publishedDate = new Date(blog.createdAt)
  const formattedDate = format(publishedDate, "MMMM dd, yyyy")
  const formattedFromNow = formatDistanceToNow(publishedDate)

  function generateTagUrl(tag: string) {
    const s = new URLSearchParams()
    s.set("tag", tag)
    return `/blogs?${s.toString()}`
  }

  return (
    <div className="group/blog-card relative mt-6 overflow-clip rounded-lg border p-4 transition-colors hover:border-muted-foreground/30">
      <H4 className="mt-0">
        <Link href={`/blogs/${blog.slug}`} className="opacity-100">
          {blog.title}
        </Link>
      </H4>
      <p className={cn(typographyVariants({ as: "muted" }), "mt-0")}>
        Published {formattedDate} ({formattedFromNow} ago)
      </p>

      {!isEmpty(blog.tags) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {blog.tags!.map((tag) => (
            <NextLink href={generateTagUrl(tag)} key={tag}>
              <Badge variant="secondary">{tag}</Badge>
            </NextLink>
          ))}
        </div>
      )}
    </div>
  )
}
