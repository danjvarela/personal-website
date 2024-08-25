import { PortableTextBlockComponent } from "next-sanity"
import { H2 } from "../ui/typography"
import { CopyLink } from "./copy-link"
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
      {children} <CopyLink id={id} />
    </HeadingComponent>
  )
}
