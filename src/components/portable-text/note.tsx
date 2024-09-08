import { cva } from "class-variance-authority"
import { Info, OctagonAlert, TriangleAlert } from "lucide-react"
import { match } from "ts-pattern"
import { cn } from "@/lib/utils"
import { IconAsText } from "../ui/icon-as-text"
import { P } from "../ui/typography"

type Props = {
  containerProps?: React.ComponentPropsWithoutRef<"div">
  title: string
  body?: React.ReactNode
  variant?: "info" | "warning" | "danger"
}

const noteVariants = cva("mt-6 rounded border-l-4 px-4 py-2", {
  variants: {
    variant: {
      info: ["border-primary text-primary"],
      warning: [
        "dark:border-yellow-500 dark:text-yellow-500 border-amber-500 text-amber-500",
      ],
      danger: ["border-destructive text-destructive"],
    },
  },
  defaultVariants: {
    variant: "info",
  },
})

export function Note({
  containerProps: { className, ...containerProps } = {},
  title,
  body,
  variant = "info",
}: Props) {
  const resolvedIcon = match(variant)
    .with("info", () => Info)
    .with("warning", () => OctagonAlert)
    .with("danger", () => TriangleAlert)
    .exhaustive()

  return (
    <div
      className={cn(noteVariants({ variant }), className)}
      {...containerProps}
    >
      <P className="font-semibold">
        <IconAsText icon={resolvedIcon} /> <span>{title}</span>
      </P>
      <div>{body}</div>
    </div>
  )
}
