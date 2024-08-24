import { NextRequest, NextResponse } from "next/server"
import { enableDraftModeAction } from "@/actions/draftMode"

export async function GET(request: NextRequest) {
  const res = await enableDraftModeAction({ url: request.nextUrl.toString() })

  if (res?.serverError) {
    return new Response(res.serverError, { status: 401 })
  }

  return NextResponse.redirect(
    new URL(res?.data?.redirectUrl || "/", request.nextUrl.origin)
  )
}
