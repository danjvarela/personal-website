import * as SiIcons from "@icons-pack/react-simple-icons"
import { startCase } from "lodash"
import { PortableTextTypeComponentProps } from "next-sanity"
import { IconAsText } from "../ui/icon-as-text"
import { Link } from "../ui/link"
import { typographyVariants } from "../ui/typography"

export function LinkWithIcon({ value }: PortableTextTypeComponentProps<any>) {
  if (value.icon?.provider !== "si") return null

  const componentName = `Si${startCase(value.icon?.name)}`
  // @ts-ignore componentName is dynamically generated
  const Icon = SiIcons[componentName]

  if (!Icon) return null

  return (
    <span className="group/link inline-flex items-center gap-2">
      <IconAsText icon={Icon} className={typographyVariants({ as: "a" })} />
      <Link href={value.url || ""}>{value.title}</Link>
    </span>
  )
}
