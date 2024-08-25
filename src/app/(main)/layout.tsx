import "@/styles/globals.css"
import { draftMode } from "next/headers"
import { VisualEditing } from "next-sanity"
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/toaster"
import { DraftModeDisabler } from "@/components/draftmode-disabler"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ThemeSwitcher } from "@/components/theme-switcher"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="theme">
      {draftMode().isEnabled && (
        <div className="fixed bottom-16 left-4 z-[999]">
          <DraftModeDisabler />
        </div>
      )}
      <Toaster />

      <div className="mx-auto w-full max-w-2xl" id="main-pane">
        <Header />
        <div className="relative min-h-screen">{children}</div>
        <Footer />
      </div>

      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <ThemeSwitcher />
      </div>

      <div
        className="fixed bottom-0 z-40 h-auto w-full max-w-[100vw]"
        id="toc-container"
      />

      {draftMode().isEnabled && <VisualEditing />}
    </ThemeProvider>
  )
}
