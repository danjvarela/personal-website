"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { headerHeight } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { HireMe } from "./hire-me"

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Works",
    href: "/works",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header
      className="flex items-center justify-between px-2"
      style={{ height: headerHeight }}
    >
      <div className="flex items-center gap-4">
        <Link href="/">
          <Logo />
        </Link>
        {navLinks.map((navLink) => (
          <Link
            href={navLink.href}
            key={navLink.label}
            className={cn(
              "font-medium text-muted-foreground transition-colors hover:text-foreground",
              pathname === navLink.href && "text-foreground"
            )}
          >
            {navLink.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <ThemeSwitcher className="hidden md:inline-flex" />
        <HireMe />
      </div>
    </header>
  )
}
