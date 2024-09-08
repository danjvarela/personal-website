import { BlogsQueryResult } from "@/sanity/types"
import { isEmpty } from "lodash"
import { H4 } from "@/components/ui/typography"
import { BlogCategories } from "./blog-categories"
import { BlogStats } from "./blog-stats"
import { Link } from "./ui/link"

type Props = {
  blog: BlogsQueryResult[number]
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

      {!isEmpty(blog.categories) && (
        <div className="mt-4 flex flex-wrap gap-2">
          <BlogCategories blog={blog} />
        </div>
      )}
    </div>
  )
}
