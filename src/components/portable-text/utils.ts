import { PortableTextBlockComponent } from "next-sanity"

type PortableTextBlockValue =
  React.ComponentProps<PortableTextBlockComponent>["value"]

export function generateIdFromPortableTextBlockValue(
  value: PortableTextBlockValue
) {
  return value.children
    .map((item) => item.text || "")
    .join(" ")
    .replace(/\s{1,}/g, "-")
    .toLowerCase()
    .normalize("NFC")
}
