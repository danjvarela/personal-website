import { format, formatDistanceToNow } from "date-fns"
import { Dot } from "lucide-react"
import { PortableTextBlock, toPlainText } from "next-sanity"
import { readingTime } from "reading-time-estimator"
import { BlogQueryResult } from "sanity.types"
import { cn } from "@/lib/utils"
import { IconAsText } from "./ui/icon-as-text"
import { typographyVariants } from "./ui/typography"

type Props = {
  blog: BlogQueryResult
  className?: string
}

export function BlogStats({ blog, className }: Props) {
  if (!blog) return null

  const publishedDate = new Date(blog._createdAt)
  const formattedDate = format(publishedDate, "MMMM dd, yyyy")
  const formattedFromNow = formatDistanceToNow(publishedDate)
  const readTime = readingTime(
    toPlainText(blog.content as unknown as PortableTextBlock),
    200
  )

  return (
    <p
      className={cn(
        typographyVariants({ as: "muted" }),
        "mt-0 xl:text-base",
        className
      )}
    >
      Published {formattedDate} ({formattedFromNow} ago){" "}
      <IconAsText icon={Dot} /> {readTime.text}
    </p>
  )
}
