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
      validation: (rule) => {
        return [rule.required().min(1)]
      },
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
      validation: (rule) => {
        return [rule.required()]
      },
    }),
  ],
})
