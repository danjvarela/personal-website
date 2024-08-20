"use client"

import { useCallback, useEffect } from "react"
import { sendContactFormEmail } from "@/actions/email"
import { contactFormSchema } from "@/schemas/email"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useAction } from "next-safe-action/hooks"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "./ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { IconAsText } from "./ui/icon-as-text"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useToast } from "./ui/use-toast"

type FormDataType = z.infer<typeof contactFormSchema>

type Props = {
  onEmailSentSuccessfully?: () => void
}

export function ContactForm({ onEmailSentSuccessfully }: Props) {
  const form = useForm<FormDataType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  })
  const { isExecuting, executeAsync: sendEmail } =
    useAction(sendContactFormEmail)
  const { toast } = useToast()

  const onSubmit = useCallback(
    async (data: FormDataType) => {
      const res = await sendEmail(data)

      if (res?.serverError) {
        toast({
          variant: "destructive",
          description: res?.serverError,
        })
        return
      }

      if (res?.data) {
        toast({
          description: "Thank you. I'll get back to you within 24 hours.",
        })
        onEmailSentSuccessfully?.()
      }
    },
    [sendEmail, toast, onEmailSentSuccessfully]
  )

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How can I help you?</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit" disabled={isExecuting}>
            {isExecuting && (
              <IconAsText icon={Loader2} className="animate-spin" />
            )}{" "}
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}
