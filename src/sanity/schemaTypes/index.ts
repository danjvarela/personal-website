import { type SchemaTypeDefinition } from "sanity"
import { homeType } from "./homeType"
import { linkWithDescriptionType } from "./linkWithDescriptionType"
import { linkWithIconType } from "./linkWithIconType"
import { projectType } from "./projectType"
import { worksType } from "./worksType"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homeType,
    linkWithDescriptionType,
    linkWithIconType,
    projectType,
    worksType,
  ],
}
