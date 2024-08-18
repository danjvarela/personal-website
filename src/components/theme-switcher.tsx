"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"

const themes = [
  {
    value: "dark",
    label: "Dark",
  },
  {
    value: "light",
    label: "Light",
  },
  {
    value: "system",
    label: "System",
  },
]

type ThemeSwitcherProps = Omit<
  React.ComponentProps<typeof Button>,
  "children" | "asChild"
>

export function ThemeSwitcher({ className, ...props }: ThemeSwitcherProps) {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn("h-8 w-8 p-0", className)}
          variant="outline"
          {...props}
        >
          {resolvedTheme === "light" ? (
            <Moon className="h-[1em] w-[1em]" />
          ) : (
            <Sun className="h-[1em] w-[1em]" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {themes.map((item) => (
          <DropdownMenuCheckboxItem
            checked={item.value === theme}
            key={item.value}
            onCheckedChange={() => setTheme(item.value)}
          >
            {item.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
