import Link from "next/link"
import { BlogQueryResult, BlogsQueryResult } from "@/sanity/types"
import { isEmpty } from "lodash"
import { Badge } from "./ui/badge"

type Props = {
  blog: BlogsQueryResult[number] | NonNullable<BlogQueryResult>
}

export function BlogCategories({ blog }: Props) {
  if (isEmpty(blog.categories)) return null

  return blog!.categories!.map((category) => (
    <Link
      href={`/categories/${category.slug?.current}/blogs`}
      key={category.slug?.current}
    >
      <Badge variant="secondary">{category.name}</Badge>
    </Link>
  ))
}
