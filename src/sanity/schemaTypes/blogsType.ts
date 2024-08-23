import { defineField, defineType } from "sanity"

export const blogsType = defineType({
  name: "blogs",
  title: "Blogs",
  type: "document",
  fields: [
    defineField({
      title: "Seo",
      name: "seo",
      type: "seoMetaFields",
    }),
  ],
})
