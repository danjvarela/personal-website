import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import {
  PortableText as SanityPortableText,
  PortableTextProps as SanityPortableTextProps,
} from "next-sanity"
import { Link } from "@/components/ui/link"
import { Code, H1, H2, H3, H4, Ol, P, Ul } from "@/components/ui/typography"
import { CardLink } from "@/components/card-link"
import { Project } from "../project"
import { CodeBlock } from "./code-block"
import { HeadingWithLink } from "./heading-with-link"
import { LinkWithIcon } from "./link-with-icon"

export function PortableText({
  enableHeaderLinks = false,
  ...props
}: SanityPortableTextProps & { enableHeaderLinks?: boolean }) {
  return (
    <SanityPortableText
      {...props}
      components={{
        types: {
          linkWithDescription: ({ value }) => (
            <CardLink
              href={value.url || ""}
              title={value.title || ""}
              description={value.description || ""}
            />
          ),
          linkWithIcon: (props) => <LinkWithIcon {...props} />,
          project: ({ value }) => <Project project={value} />,
          image: ({ value }) => (
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
          ),
          code: ({ value }) => <CodeBlock value={value} />,
        },
        block: {
          normal: ({ children }) => <P>{children}</P>,
          h1: ({ children }) => <H1>{children}</H1>,
          h2: (props) =>
            enableHeaderLinks ? (
              <HeadingWithLink {...props} headingComponent={H2} />
            ) : (
              <H2>{props.children}</H2>
            ),
          h3: (props) =>
            enableHeaderLinks ? (
              <HeadingWithLink {...props} headingComponent={H3} />
            ) : (
              <H3>{props.children}</H3>
            ),
          h4: (props) =>
            enableHeaderLinks ? (
              <HeadingWithLink {...props} headingComponent={H4} />
            ) : (
              <H4>{props.children}</H4>
            ),
        },
        list: {
          bullet: ({ children }) => <Ul>{children}</Ul>,
          number: ({ children }) => <Ol>{children}</Ol>,
        },
        marks: {
          link: ({ value, children }) => (
            <Link href={value?.href}>{children}</Link>
          ),
          code: ({ children }) => <Code>{children}</Code>,
        },
      }}
    />
  )
}
