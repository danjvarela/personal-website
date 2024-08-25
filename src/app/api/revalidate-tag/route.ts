import { revalidateTag } from "next/cache"
import { NextResponse, type NextRequest } from "next/server"
import { env } from "@/env.mjs"
import { parseBody } from "next-sanity/webhook"

type WebhookPayload = {
  _type: string
}

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      env.SANITY_REVALIDATE_SECRET
    )

    if (!isValidSignature) {
      const message = "Invalid signature"
      return new Response(JSON.stringify({ message, isValidSignature, body }), {
        status: 401,
      })
    } else if (!body?._type) {
      const message = "Bad Request"
      return new Response(JSON.stringify({ message, body }), { status: 400 })
    }

    // If the `_type` is `post`, then all `client.fetch` calls with
    // `{next: {tags: ['post']}}` will be revalidated
    revalidateTag(body._type)

    return NextResponse.json({ body })
  } catch (err) {
    console.error(err)
    // @ts-ignore there is message in error... i think
    return new Response(err.message, { status: 500 })
  }
}
