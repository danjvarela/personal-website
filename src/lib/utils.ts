import { UrlObject } from "url"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isExternalUrl(url: UrlObject | string) {
  console.log("url", url)
  if (typeof window === "undefined") return false

  if (typeof url === "object") {
    return url.host !== window.location.host
  } else {
    return (
      (url.startsWith("http") || url.startsWith("https")) &&
      !url.includes(window.location.host)
    )
  }
}
