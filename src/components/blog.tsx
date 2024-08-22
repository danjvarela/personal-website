import { format, formatDistanceToNow } from "date-fns"
import { BlogsQueryResult } from "sanity.types"
import { cn } from "@/lib/utils"
import { H4, typographyVariants } from "@/components/ui/typography"
import { BlogTags } from "./blog-tags"
import { Link } from "./ui/link"

type Props = {
  blog: BlogsQueryResult[number]
}

export function Blog({ blog }: Props) {
  const publishedDate = new Date(blog._createdAt)
  const formattedDate = format(publishedDate, "MMMM dd, yyyy")
  const formattedFromNow = formatDistanceToNow(publishedDate)

  return (
    <div className="group/blog-card relative mt-6 overflow-clip rounded-lg border p-4 transition-colors hover:border-muted-foreground/30">
      <H4 className="mt-0">
        <Link href={`/blogs/${blog.slug?.current}`} className="opacity-100">
          {blog.title}
        </Link>
      </H4>
      <p className={cn(typographyVariants({ as: "muted" }), "mt-0")}>
        Published {formattedDate} ({formattedFromNow} ago)
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <BlogTags blog={blog} />
      </div>
    </div>
  )
}
