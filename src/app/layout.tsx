import { Inter, Roboto_Mono } from "next/font/google"
import "@/styles/globals.css"
import { Metadata } from "next"
import { sanityFetch } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { settingsQuery } from "@/sanity/lib/queries"
import { SettingsQueryResult } from "sanity.types"
import { metadataGeneratorFor } from "@/lib/metadata"
import { cn } from "@/lib/utils"
import icon from "@/components/logo/logo.svg"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono" })

export async function generateMetadata(): Promise<Metadata> {
  const d = Promise.all([
    metadataGeneratorFor("home")({ params: { slug: "" } }),
    sanityFetch<SettingsQueryResult>({ query: settingsQuery }),
  ])

  const [metadata, settings] = await d

  let icons: Metadata["icons"] = icon

  try {
    if (settings?.favicon) {
      icons = new URL(urlFor(settings?.favicon).width(32).height(32).url())
    }
  } catch (err) {}

  return {
    ...metadata,
    icons,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          robotoMono.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
