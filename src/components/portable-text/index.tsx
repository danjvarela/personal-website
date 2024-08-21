import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import * as SiIcons from "@icons-pack/react-simple-icons"
import startCase from "lodash/startCase"
import {
  PortableText as SanityPortableText,
  PortableTextProps as SanityPortableTextProps,
} from "next-sanity"
import { IconAsText } from "@/components/ui/icon-as-text"
import { Link } from "@/components/ui/link"
import {
  Code,
  H1,
  H2,
  H3,
  H4,
  Ol,
  P,
  typographyVariants,
  Ul,
} from "@/components/ui/typography"
import { CardLink } from "@/components/card-link"
import { Project } from "../project"
import { CodeBlock } from "./code-block"

const components: SanityPortableTextProps["components"] = {
  types: {
    linkWithDescription: ({ value }) => {
      return (
        <CardLink
          href={value.url || ""}
          title={value.title || ""}
          description={value.description || ""}
        />
      )
    },
    linkWithIcon: ({ value }) => {
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
    },
    project: ({ value }) => {
      return <Project project={value} />
    },
    image: ({ value }) => {
      return (
        <Image
          src={urlFor(value)
            .auto("format")
            .width(800)
            .height(500)
            .bg("f1f5f9")
            .quality(40)
            .fit("fillmax")
            .url()}
          alt=""
          sizes="(max-width: 800px) 100vw, 800px"
          width={800}
          height={500}
          placeholder="blur"
          blurDataURL={value.asset.metadata.lqip}
        />
      )
    },
    code: ({ value }) => {
      return <CodeBlock value={value} />
    },
  },
  block: {
    normal: ({ children }) => <P>{children}</P>,
    h1: ({ children }) => <H1>{children}</H1>,
    h2: ({ children }) => <H2>{children}</H2>,
    h3: ({ children }) => <H3>{children}</H3>,
    h4: ({ children }) => <H4>{children}</H4>,
  },
  list: {
    bullet: ({ children }) => <Ul>{children}</Ul>,
    number: ({ children }) => <Ol>{children}</Ol>,
  },
  marks: {
    link: ({ value, children }) => <Link href={value?.href}>{children}</Link>,
    code: ({ children }) => <Code>{children}</Code>,
  },
}

export function PortableText({ ...props }: SanityPortableTextProps) {
  return <SanityPortableText components={components} {...props} />
}
