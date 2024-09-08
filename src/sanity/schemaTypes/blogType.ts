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
      validation: (rule) => {
        return [rule.required().min(1)]
      },
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule) => {
        return [rule.required()]
      },
    }),
    defineField({
      title: "",
      name: "publishedAt",
      type: "date",
    }),
    defineField({
      title: "Content",
      name: "content",
      type: "array",
      validation: (rule) => {
        return [rule.required()]
      },
      of: [
        defineArrayMember({
          type: "block",
          of: [defineArrayMember({ type: "linkWithIcon" })],
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
        }),
        defineArrayMember({ type: "linkWithDescription" }),
        defineArrayMember({
          type: "image",
          fields: [
            defineField({
              type: "string",
              name: "title",
              title: "Title",
            }),
            defineField({
              type: "string",
              name: "description",
              title: "Description",
            }),
            defineField({
              type: "string",
              name: "altText",
              title: "Alt Text",
            }),
          ],
        }),
        defineArrayMember({
          type: "code",
        }),
        defineArrayMember({
          type: "mux.video",
        }),
      ],
    }),
    defineField({
      title: "Categories",
      name: "categories",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "category" }],
        }),
      ],
    }),
    defineField({
      title: "Seo",
      name: "seo",
      type: "seoMetaFields",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: (selection) => {
      return {
        title: selection.title,
      }
    },
  },
})
