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
      validation: (rule) => {
        return [rule.required().min(1)]
      },
    }),
    defineField({
      title: "Icon",
      name: "icon",
      type: "iconPicker",
      options: {
        outputFormat: "react",
        providers: ["si"],
      },
      validation: (rule) => {
        return [rule.required()]
      },
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
