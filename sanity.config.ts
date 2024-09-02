"use client"

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */
import { env } from "@/env.mjs"
import { presentationToolResolve } from "@/sanity/lib/config"
import { codeInput } from "@sanity/code-input"
import { presentationTool } from "@sanity/presentation"
import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { iconPicker } from "sanity-plugin-icon-picker"
import { media } from "sanity-plugin-media"
import { muxInput } from "sanity-plugin-mux-input"
import { seoMetaFields } from "sanity-plugin-seo"
import { tags } from "sanity-plugin-tags"
import { structureTool } from "sanity/structure"
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { schema } from "./src/sanity/schemaTypes"
import { structure } from "./src/sanity/structure"

export default defineConfig({
  basePath: "/studio",
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION }),
    iconPicker(),
    codeInput(),
    seoMetaFields(),
    media(),
    tags({}),
    presentationTool({
      resolve: presentationToolResolve,
      previewUrl: {
        draftMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
    muxInput(),
  ],
})
