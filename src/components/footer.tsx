import { Copyright } from "lucide-react"
import { IconAsText } from "./ui/icon-as-text"
import { typographyVariants } from "./ui/typography"

export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="border-t py-4 text-center">
      <p className={typographyVariants({ as: "muted" })}>
        <IconAsText icon={Copyright} /> {currentYear} Dan Varela. All Rights
        Reserved.
      </p>
    </footer>
  )
}
