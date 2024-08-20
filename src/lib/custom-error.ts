export class CustomError extends Error {
  type: "resend"

  constructor(type: "resend", message: string) {
    super()
    this.type = type
    this.message = message
  }
}
