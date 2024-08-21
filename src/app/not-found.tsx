import { P } from "@/components/ui/typography"
import RootLayout from "./(main)/layout"

export default function NotFound() {
  return (
    <RootLayout>
      <div className="flex justify-center px-2 py-8">
        <P>404 | Page not found</P>
      </div>
    </RootLayout>
  )
}
