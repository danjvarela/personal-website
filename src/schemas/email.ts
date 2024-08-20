import { z } from "zod"

export const contactFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "email is required" })
    .email({ message: "invalid email format" }),
  name: z.string().min(1, { message: "name is required" }),
  message: z.string().min(1, { message: "this field is required" }),
})
