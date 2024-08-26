import type { MetadataRoute } from "next"
import { resolveUrl } from "@/lib/metadata"

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
