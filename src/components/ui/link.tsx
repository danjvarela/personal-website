"use client"

import React, { useEffect, useState } from "react"
import NextLink from "next/link"
import { MoveUpRight } from "lucide-react"
import { cn, isExternalUrl } from "@/lib/utils"
import { IconAsText } from "./icon-as-text"
import { typographyVariants } from "./typography"

function ExternalLinkIcon() {
  return (
    <IconAsText
      icon={MoveUpRight}
      className="transition-transform group-hover/link:-translate-y-[0.125rem] group-hover/link:translate-x-[0.125rem]"
    />
  )
}

const Link = React.forwardRef<
  React.ElementRef<typeof NextLink>,
  React.ComponentPropsWithoutRef<typeof NextLink>
>(({ className, children, href, target, ...props }, ref) => {
  const [mounted, setMounted] = useState(false)

  const isExternal = isExternalUrl(href)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted)
    return (
      <NextLink
        href={href}
        className={cn("group/link", typographyVariants({ as: "a", className }))}
        {...props}
        ref={ref}
      >
        {children}
      </NextLink>
    )

  return (
    <NextLink
      href={href}
      className={cn("group/link", typographyVariants({ as: "a", className }))}
      target={target || isExternal ? "_blank" : undefined}
      {...props}
      ref={ref}
    >
      {children}
      {isExternal && <ExternalLinkIcon />}
    </NextLink>
  )
})
Link.displayName = "Link"

export { Link, ExternalLinkIcon }
