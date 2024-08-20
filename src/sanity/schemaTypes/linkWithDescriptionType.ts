import { defineField, defineType } from "sanity"

export const linkWithDescriptionType = defineType({
  name: "linkWithDescription",
  title: "Link with description",
  type: "object",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "string",
    }),
    defineField({
      title: "URL",
      name: "url",
      type: "url",
    }),
  ],
})
