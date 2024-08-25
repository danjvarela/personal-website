import { PortableTextBlockComponent } from "next-sanity"

export type PortableTextBlockValue =
  React.ComponentProps<PortableTextBlockComponent>["value"]

export function generateIdFromPortableTextBlockValue(
  value: PortableTextBlockValue
) {
  return value.children
    .map((item) => item.text || "")
    .join(" ")
    .replace(/\s{1,}/g, "-")
    .replace(/[^a-zA-Z0-9]/g, "-")
    .toLowerCase()
    .normalize("NFC")
}
