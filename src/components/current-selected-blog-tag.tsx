"use client"

import { useCallback, useMemo } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { LucideX } from "lucide-react"
import { BlogsQueryResult } from "sanity.types"
import { P, typographyVariants } from "@/components/ui/typography"
import { Badge } from "./ui/badge"
import { IconAsText } from "./ui/icon-as-text"

type Props = {
  blogs: BlogsQueryResult
}

export function CurrentSelectedBlogTag({ blogs }: Props) {
  const readonlySearchParams = useSearchParams()
  const router = useRouter()
  const tag = readonlySearchParams.get("tag")

  const handleCloseTag = useCallback(() => {
    const sMutable = new URLSearchParams(readonlySearchParams.toString())
    sMutable.delete("tag")
    router.push(`/blogs?${sMutable.toString()}`)
  }, [router, readonlySearchParams])

  const resolvedTagLabel = useMemo(() => {
    return blogs
      ?.map((blog) => blog.tags)
      .flat()
      .find((blogTag) => blogTag?.value === tag)?.label
  }, [blogs, tag])

  if (!tag) return null

  return (
    <div className={typographyVariants({ as: "p" })}>
      <span className="mr-4">Tag:</span>
      <Badge>
        {resolvedTagLabel || tag}{" "}
        <button className="ml-1" onClick={handleCloseTag}>
          <IconAsText icon={LucideX} />
        </button>
      </Badge>
    </div>
  )
}
