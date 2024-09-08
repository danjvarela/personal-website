import { defineArrayMember, defineField, defineType } from "sanity"

export const noteType = defineType({
  name: "note",
  title: "Note",
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
      title: "Type",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Info", value: "info" },
          { title: "Warning", value: "warning" },
          { title: "Danger", value: "danger" },
        ],
      },
      validation: (rule) => {
        return [rule.required().min(1)]
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
          styles: [{ title: "Normal", value: "normal" }],
        }),
      ],
    }),
  ],
})
