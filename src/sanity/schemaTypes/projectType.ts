import { defineArrayMember, defineField, defineType } from "sanity"

export const projectType = defineType({
  name: "project",
  title: "Project",
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
      title: "Deployed Link",
      name: "deployedLink",
      type: "url",
      validation: (rule) => {
        return [rule.required()]
      },
    }),
    defineField({
      title: "Github Link",
      name: "githubLink",
      type: "url",
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
        }),
      ],
    }),
    defineField({
      title: "Is this an API?",
      name: "isAPI",
      type: "boolean",
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
