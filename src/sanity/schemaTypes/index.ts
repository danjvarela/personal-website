import { type SchemaTypeDefinition } from "sanity"
import { blogsType } from "./blogsType"
import { blogType } from "./blogType"
import { homeType } from "./homeType"
import { linkWithDescriptionType } from "./linkWithDescriptionType"
import { linkWithIconType } from "./linkWithIconType"
import { projectType } from "./projectType"
import { settingsType } from "./settingsType"
import { worksType } from "./worksType"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homeType,
    linkWithDescriptionType,
    linkWithIconType,
    projectType,
    worksType,
    blogType,
    blogsType,
    settingsType,
  ],
}
