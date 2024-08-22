import { Hash } from "lucide-react"
import { PortableTextBlockComponent } from "next-sanity"
import { IconAsText } from "../ui/icon-as-text"
import { Link } from "../ui/link"
import { H2 } from "../ui/typography"
import { generateIdFromPortableTextBlockValue } from "./utils"

type ValidHeading = typeof H2

type Props = React.ComponentProps<PortableTextBlockComponent> & {
  headingComponent: ValidHeading
}

export function HeadingWithLink({ value, children, headingComponent }: Props) {
  const id = generateIdFromPortableTextBlockValue(value)

  const HeadingComponent = headingComponent
  return (
    <HeadingComponent id={id}>
      {children}
      <Link href={`#${id}`} className="no-underline underline-offset-0">
        {" "}
        <IconAsText icon={Hash} className="opacity-35 hover:opacity-50" />
      </Link>
    </HeadingComponent>
  )
}
