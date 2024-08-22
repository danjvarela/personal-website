"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { LucideX } from "lucide-react"
import { P } from "@/components/ui/typography"
import { Badge } from "./ui/badge"
import { IconAsText } from "./ui/icon-as-text"

export function CurrentSelectedBlogTag() {
  const s = useSearchParams()
  const router = useRouter()
  const tag = s.get("tag")

  function handleCloseTag() {
    const sMutable = new URLSearchParams(s.toString())
    sMutable.delete("tag")
    router.push(`/blogs?${sMutable.toString()}`)
  }

  if (!tag) return null

  return (
    <P>
      <span className="mr-4">Tag:</span>
      <Badge>
        {tag}{" "}
        <button className="ml-1" onClick={handleCloseTag}>
          <IconAsText icon={LucideX} />
        </button>
      </Badge>
    </P>
  )
}
