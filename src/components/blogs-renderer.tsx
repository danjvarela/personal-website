"use client"

import { useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { BlogQueryResult, BlogsQueryResult } from "sanity.types"
import { Blog } from "./blog"

type Props = {
  blogs: BlogsQueryResult
}

export function BlogsRenderer({ blogs }: Props) {
  const s = useSearchParams()
  const tag = s.get("tag")

  const filteredBlogs = useMemo(() => {
    if (!tag) return blogs
    return blogs.filter((blog) => blog.tags?.includes(tag))
  }, [blogs, tag])

  return filteredBlogs.map((blog) => (
    <Blog key={blog._id} blog={blog as BlogQueryResult} />
  ))
}
