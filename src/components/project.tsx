import Image from "next/image"
import NextLink from "next/link"
import { urlFor } from "@/sanity/lib/image"
import { SiGithub } from "@icons-pack/react-simple-icons"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import isEmpty from "lodash/isEmpty"
import { PortableTextProps } from "next-sanity"
import { Badge } from "@/components/ui/badge"
import { IconAsText } from "@/components/ui/icon-as-text"
import { Link } from "@/components/ui/link"
import { H4 } from "@/components/ui/typography"
import { PortableText } from "@/components/portable-text"
import defaultThumbnail from "./assets/default-thumbnail.svg"

type Props = {
  project: {
    title: string
    deployedLink: string
    githubLink?: string
    description: PortableTextProps["value"]
    tags?: string[]
    isAPI?: boolean
  }
}

export function Project({ project }: Props) {
  return (
    <div className="group/project-card relative mt-6 overflow-clip rounded-lg border p-4 transition-colors hover:border-muted-foreground/30">
      {project.githubLink && (
        <div className="absolute right-0 top-0 block bg-primary/75 p-1 text-xs text-primary-foreground transition-colors hover:bg-primary md:hidden md:group-hover/project-card:block">
          <NextLink href={project.githubLink} target="_blank">
            <IconAsText icon={SiGithub} /> View source code
          </NextLink>
        </div>
      )}

      <H4 className="mt-0">
        <Link href={project.deployedLink}>{project.title}</Link>
      </H4>

      <PortableText value={project.description} />

      {!isEmpty(project.tags) && (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags!.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}