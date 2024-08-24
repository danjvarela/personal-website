"use server"

import { draftMode } from "next/headers"
import { env } from "@/env.mjs"
import { client } from "@/sanity/lib/client"
import { validatePreviewUrl } from "@sanity/preview-url-secret"
import { z } from "zod"
import { CustomError } from "@/lib/custom-error"
import { actionClient } from "@/lib/safe-action"

const clientWithToken = client.withConfig({ token: env.SANITY_API_READ_TOKEN })

export const enableDraftModeAction = actionClient
  .schema(z.object({ url: z.string().url() }))
  .action(async ({ parsedInput: { url } }) => {
    const { isValid, redirectTo = "/" } = await validatePreviewUrl(
      clientWithToken,
      url
    )

    if (!isValid) throw new CustomError("sanity-error", "Invalid secret")

    draftMode().enable()

    return { redirectUrl: redirectTo }
  })

export const disableDraftModeAction = actionClient.action(async () => {
  draftMode().disable()
  return { redirectUrl: "/" }
})
