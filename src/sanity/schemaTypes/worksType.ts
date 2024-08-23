import { defineArrayMember, defineField, defineType } from "sanity"

export const worksType = defineType({
  name: "works",
  title: "Works",
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
        defineArrayMember({ type: "project" }),
      ],
    }),
    defineField({
      title: "Seo",
      name: "seo",
      type: "seoMetaFields",
    }),
  ],
})
