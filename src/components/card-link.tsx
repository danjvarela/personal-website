"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { useIsExternalLink } from "@/hooks/useIsExternalLink"
import { ExternalLinkIcon } from "./ui/link"
import { typographyVariants } from "./ui/typography"

type Props = {
  title: string
  href: string
  description?: string
  className?: string
}

export function CardLink({ title, href, description, className }: Props) {
  const isExternalLink = useIsExternalLink()
  const isExternal = isExternalLink(href)

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
      target={isExternal ? "_blank" : undefined}
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
