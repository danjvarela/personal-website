import { defineArrayMember, defineField, defineType } from "sanity"

export const homeType = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({
      title: "Content",
      name: "content",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          of: [defineArrayMember({ type: "linkWithIcon" })],
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
        }),
        defineArrayMember({ type: "linkWithDescription" }),
      ],
      validation: (rule) => {
        return [rule.required()]
      },
    }),
    defineField({
      title: "Seo",
      name: "seo",
      type: "seoMetaFields",
    }),
  ],
  preview: {
    prepare: () => {
      return {
        title: "Home page",
      }
    },
  },
})
