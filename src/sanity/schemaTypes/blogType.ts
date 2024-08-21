import { defineArrayMember, defineField, defineType } from "sanity"

export const blogType = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      title: "Content",
      name: "content",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          of: [defineArrayMember({ type: "linkWithIcon" })],
          styles: [
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Normal", value: "normal" },
            { title: "Quote", value: "blockquote" },
          ],
        }),
        defineArrayMember({ type: "linkWithDescription" }),
        defineArrayMember({
          type: "image",
        }),
        defineArrayMember({
          type: "code",
        }),
      ],
    }),
    defineField({
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
    }),
  ],
})
