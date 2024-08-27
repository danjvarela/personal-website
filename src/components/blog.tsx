import { format, formatDistanceToNow } from "date-fns"
import { isEmpty } from "lodash"
import { Dot } from "lucide-react"
import { BlogQueryResult } from "sanity.types"
import { cn } from "@/lib/utils"
import { H4, typographyVariants } from "@/components/ui/typography"
import { BlogStats } from "./blog-stats"
import { BlogTags } from "./blog-tags"
import { IconAsText } from "./ui/icon-as-text"
import { Link } from "./ui/link"

type Props = {
  blog: BlogQueryResult
}

export function Blog({ blog }: Props) {
  if (!blog) return null

  return (
    <div className="group/blog-card relative mt-6 overflow-clip rounded-lg border p-4 transition-colors hover:border-muted-foreground/30">
      <H4 className="mt-0">
        <Link href={`/blogs/${blog.slug?.current}`} className="opacity-100">
          {blog.title}
        </Link>
      </H4>

      <BlogStats blog={blog} className="xl:text-sm" />

      {!isEmpty(blog.tags) && (
        <div className="mt-4 flex flex-wrap gap-2">
          <BlogTags blog={blog} />
        </div>
      )}
    </div>
  )
}
