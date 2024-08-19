"use client"

import React, { useEffect, useMemo, useState } from "react"
import NextLink from "next/link"
import { MoveUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { typographyVariants } from "./typography"

const Link = React.forwardRef<
  React.ElementRef<typeof NextLink>,
  React.ComponentPropsWithoutRef<typeof NextLink>
>(({ className, children, href, ...props }, ref) => {
  const [mounted, setMounted] = useState(false)

  const isExternal = useMemo(() => {
    if (typeof window === "undefined") return false

    if (typeof href === "object") {
      return href.host !== window.location.host
    } else {
      return !href.includes(window.location.host)
    }
  }, [href])

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
      {...props}
      ref={ref}
    >
      {children}
      {isExternal && (
        <MoveUpRight className="inline h-[1em] w-[1em] transition-transform group-hover/link:-translate-y-[0.125rem] group-hover/link:translate-x-[0.125rem]" />
      )}
    </NextLink>
  )
})
Link.displayName = "Link"

export { Link }
