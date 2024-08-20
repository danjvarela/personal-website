import { defineField, defineType } from "sanity"

export const linkWithIconType = defineType({
  name: "linkWithIcon",
  title: "Link with icon",
  type: "object",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Icon",
      name: "icon",
      type: "iconPicker",
      options: {
        outputFormat: "react",
        providers: ["si"],
      },
    }),
    defineField({
      title: "URL",
      name: "url",
      type: "url",
    }),
  ],
})
