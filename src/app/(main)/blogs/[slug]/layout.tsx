import { metadataGeneratorFor } from "@/lib/metadata"

export const generateMetadata = metadataGeneratorFor("blog")

export default function BlogLayout({ children }: React.PropsWithChildren) {
  return children
}
