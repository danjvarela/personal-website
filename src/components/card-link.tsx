"use client"

import Link from "next/link"
import { cn, isExternalUrl } from "@/lib/utils"
import { ExternalLinkIcon } from "./ui/link"
import { typographyVariants } from "./ui/typography"

type Props = {
  title: string
  href: string
  description?: string
  className?: string
}

export function CardLink({ title, href, description, className }: Props) {
  const isExternal = isExternalUrl(href)

  return (
    <Link
      href={href}
      className={typographyVariants({
        as: "p",
        className: cn(
          "group/link block rounded-lg border px-4 py-2 transition-colors hover:border-muted-foreground/30",
          className
        ),
      })}
    >
      <div
        className={typographyVariants({
          as: "a",
          className: "font-medium",
        })}
      >
        {title}
        {isExternal && <ExternalLinkIcon />}
      </div>

      <div
        className={typographyVariants({
          as: "muted",
          className: "mt-1 leading-snug",
        })}
      >
        {description}
      </div>
    </Link>
  )
}
