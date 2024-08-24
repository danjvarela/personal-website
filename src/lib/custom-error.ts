export class CustomError extends Error {
  type: string

  constructor(type: string, message: string) {
    super()
    this.type = type
    this.message = message
  }
}
