"use client"

import { useCallback, useState } from "react"
import { Check, Copy } from "lucide-react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { useCopyToClipboard } from "usehooks-ts"
import { Button } from "../ui/button"
import { IconAsText } from "../ui/icon-as-text"

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
      <div className="relative overflow-hidden rounded-lg">
        <div className="absolute right-1 top-1 flex items-center gap-2 transition-all md:opacity-0 md:group-hover/code-block:opacity-100">
          <p className="text-muted-foreground">{value.language}</p>
          <Button
            className="h-fit p-2 hover:border-muted-foreground/50"
            variant="outline"
            onClick={handleCopy}
            disabled={copied}
          >
            <IconAsText icon={copied ? Check : Copy} />
          </Button>
        </div>
        <SyntaxHighlighter
          language={value.language}
          style={atomOneDark}
          showLineNumbers
        >
          {value.code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
