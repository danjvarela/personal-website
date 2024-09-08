import { defineField, defineType } from "sanity"

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
      validation: (rule) => {
        return [rule.required().min(1)]
      },
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (rule) => {
        return [rule.required()]
      },
    }),
  ],
})
