import type { MetadataRoute } from "next"
import { resolveUrl } from "./sitemap"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/"],
      },
    ],
    sitemap: resolveUrl("sitemap.xml"),
  }
}
