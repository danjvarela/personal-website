import {
  createSafeActionClient,
  DEFAULT_SERVER_ERROR_MESSAGE,
} from "next-safe-action"
import { CustomError } from "./custom-error"

export const actionClient = createSafeActionClient({
  defaultValidationErrorsShape: "flattened",

  async handleReturnedServerError(e) {
    if (e instanceof CustomError) {
      return e.message
    } else {
      return DEFAULT_SERVER_ERROR_MESSAGE
    }
  },
})
