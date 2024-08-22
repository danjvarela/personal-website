import Link from "next/link"
import { isEmpty } from "lodash"
import { BlogQueryResult } from "sanity.types"
import { Badge } from "./ui/badge"

type Props = {
  blog: BlogQueryResult
}

export function BlogTags({ blog }: Props) {
  function generateTagUrl(tag: string) {
    const s = new URLSearchParams()
    s.set("tag", tag)
    return `/blogs?${s.toString()}`
  }

  if (isEmpty(blog?.tags)) return null

  return blog!.tags!.map((tag) => (
    <Link href={generateTagUrl(tag)} key={tag}>
      <Badge variant="secondary">{tag}</Badge>
    </Link>
  ))
}
