"use client"

import { useCallback, useState } from "react"
import { Check, Copy } from "lucide-react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { useCopyToClipboard } from "usehooks-ts"
import { cn } from "@/lib/utils"
import { IconAsText } from "../ui/icon-as-text"
import { typographyVariants } from "../ui/typography"

export function CodeBlock({ value }: { value: any }) {
  const [, copy] = useCopyToClipboard()
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    await copy(value.code)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }, [copy, value.code])

  return (
    <div className="group/code-block relative mt-6 overflow-hidden rounded-lg border p-1 hover:border-muted-foreground/50">
      <div className="flex items-center justify-between gap-2 p-2">
        <p className="text-xs text-muted-foreground">{value.language}</p>
        <button
          className={cn(typographyVariants({ as: "a" }), "text-xs")}
          onClick={handleCopy}
          disabled={copied}
        >
          Copy{" "}
          <IconAsText
            icon={copied ? Check : Copy}
            className={cn(copied && "text-primary")}
          />
        </button>
      </div>
      <div className="overflow-hidden rounded-[inherit]">
        <SyntaxHighlighter
          language={value.language}
          style={atomOneDark}
          showLineNumbers
          customStyle={{
            fontSize: "0.80rem",
          }}
        >
          {value.code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
