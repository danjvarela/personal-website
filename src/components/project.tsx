import NextLink from "next/link"
import { SiGithub } from "@icons-pack/react-simple-icons"
import isEmpty from "lodash/isEmpty"
import { PortableTextProps } from "next-sanity"
import { Badge } from "@/components/ui/badge"
import { IconAsText } from "@/components/ui/icon-as-text"
import { Link } from "@/components/ui/link"
import { H4 } from "@/components/ui/typography"
import { PortableText } from "@/components/portable-text"

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
    <div className="group/project-card relative mt-6 rounded-lg border p-4 transition-colors hover:border-muted-foreground/30">
      {project.githubLink && (
        <div className="absolute -top-2 right-0 block rounded-tr-full bg-primary/75 px-2 py-0.5 text-xs text-primary-foreground transition-all duration-300 hover:bg-primary md:opacity-0 md:group-hover/project-card:opacity-100">
          <NextLink href={project.githubLink} target="_blank">
            <IconAsText icon={SiGithub} /> View source code
          </NextLink>
        </div>
      )}

      <H4 className="mt-0">
        <Link href={project.deployedLink} className="opacity-100">
          {project.title}
        </Link>
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
