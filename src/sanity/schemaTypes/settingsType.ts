import { defineField, defineType } from "sanity"

export const settingsType = defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [
    defineField({
      title: "Favicon Image",
      name: "favicon",
      type: "image",
      validation: (rule) => [rule.required()],
    }),
  ],
})
