import { Inter, Roboto_Mono } from "next/font/google"
import "@/styles/globals.css"
import { Metadata } from "next"
import { sanityFetch } from "@/sanity/lib/client"
import { homeQuery } from "@/sanity/lib/queries"
import { HomeQueryResult } from "sanity.types"
import { defaultMetadata } from "@/lib/constants"
import { metadataGeneratorFor } from "@/lib/metadata"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const generateMetadata = metadataGeneratorFor("home")

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
