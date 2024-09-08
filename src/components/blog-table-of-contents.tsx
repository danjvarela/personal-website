"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { BlogQueryResult } from "@/sanity/types"
import { Portal } from "@radix-ui/react-portal"
import { TableOfContents } from "lucide-react"
import { match, P as TS } from "ts-pattern"
import { headerHeight } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { useIsClient } from "@/hooks/useIsClient"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  generateIdFromPortableTextBlockValue,
  PortableTextBlockValue,
} from "./portable-text/utils"
import { Button } from "./ui/button"
import { IconAsText } from "./ui/icon-as-text"
import { P, typographyVariants } from "./ui/typography"

type Props = {
  blog: BlogQueryResult
}

const HeadingPattern = TS.union(
  { _type: "block", style: "h4" },
  { _type: "block", style: "h3" },
  { _type: "block", style: "h2" }
)
type HeadingType = TS.infer<typeof HeadingPattern>
type BlogContent = NonNullable<NonNullable<BlogQueryResult>["content"]>[number]

export function BlogTableOfContents({ blog }: Props) {
  const isClient = useIsClient()
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const headings = useMemo(() => {
    if (!blog?.content) return []
    const headingBlockItems = blog.content.filter((item) => {
      return match(item)
        .with(
          TS.union(
            { _type: "block", style: "h4" },
            { _type: "block", style: "h3" },
            { _type: "block", style: "h2" }
          ),
          () => true
        )
        .otherwise(() => false)
    }) as Array<TS.narrow<BlogContent, HeadingType>>

    return headingBlockItems.map((item) => {
      const id = generateIdFromPortableTextBlockValue(
        item as PortableTextBlockValue
      )
      return {
        type: item.style,
        text:
          item.children
            ?.map((item) => {
              if (item._type === "span") return item.text
              return ""
            })
            .join("") || "",
        id,
        href: `#${id}`,
      }
    })
  }, [blog?.content])

  if (!isClient) return null

  return (
    <>
      <ul
        className="fixed right-0 hidden w-full max-w-[300px] flex-col gap-2 px-4 min-[1332px]:flex"
        style={{
          top: `calc(${headerHeight}px + 2rem)`,
        }}
      >
        <li>
          <P className="font-semibold">Contents on this page</P>
        </li>
        {headings.map((heading) => (
          <li key={heading.id}>
            <Link
              href={heading.href}
              className={cn(
                typographyVariants({ as: "a" }),
                "inline-block leading-snug",
                heading.type === "h3" && "pl-4",
                heading.type === "h4" && "pl-8"
              )}
            >
              {heading.text}
            </Link>
          </li>
        ))}
      </ul>

      <Portal
        container={
          typeof document === "undefined"
            ? null
            : document.getElementById("toc-container")
        }
      >
        <div className="p-4 min-[1332px]:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline">
                <IconAsText icon={TableOfContents} className="mr-1" /> Table of
                contents
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="text-left">
                <SheetTitle>Contents in this page</SheetTitle>
              </SheetHeader>

              <ul className="mt-2 flex flex-col gap-2">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <Link
                      href={heading.href}
                      className={cn(
                        typographyVariants({ as: "a" }),
                        "inline-block leading-snug",
                        heading.type === "h3" && "pl-4",
                        heading.type === "h4" && "pl-8"
                      )}
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {heading.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </Portal>
    </>
  )
}
