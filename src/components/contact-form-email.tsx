import { Html, Text } from "@react-email/components"

type Props = {
  email: string
  name: string
  message: string
}

export function ContactFormEmail({ email, name, message }: Props) {
  return (
    <Html lang="en">
      <Text>Email: {email}</Text>
      <Text>Name: {name}</Text>
      <Text>Message:</Text>
      <Text>{message}</Text>
    </Html>
  )
}
