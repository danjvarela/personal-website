import { PortableTextBlockComponent, toPlainText } from "next-sanity"
import slugify from "slugify"

export type PortableTextBlockValue =
  React.ComponentProps<PortableTextBlockComponent>["value"]

export function generateIdFromPortableTextBlockValue(
  value: PortableTextBlockValue
) {
  return slugify(toPlainText(value), {
    trim: true,
    lower: true,
    remove: /[^\w\s-]/,
    replacement: "-",
  })
}
