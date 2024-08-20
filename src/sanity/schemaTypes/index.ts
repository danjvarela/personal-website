import { type SchemaTypeDefinition } from "sanity"
import { homeType } from "./homeType"
import { linkWithDescriptionType } from "./linkWithDescriptionType"
import { linkWithIconType } from "./linkWithIconType"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homeType, linkWithDescriptionType, linkWithIconType],
}
