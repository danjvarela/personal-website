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
        }),
        defineArrayMember({ type: "linkWithDescription" }),
      ],
    }),
  ],
})
