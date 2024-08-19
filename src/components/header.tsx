"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { HEADER_HEIGHT } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { ThemeSwitcher } from "@/components/theme-switcher"

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
      style={{ height: HEADER_HEIGHT }}
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
        <Button size="sm">Hire me</Button>
      </div>
    </header>
  )
}
