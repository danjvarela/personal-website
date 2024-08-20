"use server"

import { contactFormSchema } from "@/schemas/email"
import { CustomError } from "@/lib/custom-error"
import { resend } from "@/lib/resend"
import { actionClient } from "@/lib/safe-action"
import { ContactFormEmail } from "@/components/contact-form-email"

export const sendContactFormEmail = actionClient
  .schema(contactFormSchema)
  .action(async ({ parsedInput: { email, name, message } }) => {
    const { data, error } = await resend.emails.send({
      from: "contact@danvarela.com",
      to: ["work.danmarvarela@gmail.com"],
      subject: "New contact form message",
      react: ContactFormEmail({ email, name, message }),
    })

    if (error) throw new CustomError("resend", error.message)

    return data
  })
