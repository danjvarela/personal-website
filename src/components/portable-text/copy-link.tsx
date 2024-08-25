"use client"

import { useCallback, useState } from "react"
import { Check, Link2 } from "lucide-react"
import { useCopyToClipboard } from "usehooks-ts"
import { IconAsText } from "../ui/icon-as-text"
import { Link } from "../ui/link"

type Props = {
  id: string
}

export function CopyLink({ id }: Props) {
  const [, copy] = useCopyToClipboard()
  const [copied, setCopied] = useState(false)

  const handleCopyLink = useCallback(async () => {
    if (typeof window === "undefined") return
    await copy(window.location.toString())
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }, [id, copy])

  return (
    <Link
      href={`#${id}`}
      className="no-underline underline-offset-0"
      onClick={handleCopyLink}
    >
      <IconAsText
        icon={copied ? Check : Link2}
        className="opacity-35 hover:opacity-50"
      />
    </Link>
  )
}
