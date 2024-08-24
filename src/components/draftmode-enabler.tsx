"use client"

import { useRouter } from "next/navigation"
import { enableDraftModeAction } from "@/actions/draftMode"
import { Loader2 } from "lucide-react"
import { useAction } from "next-safe-action/hooks"
import { Button } from "./ui/button"
import { IconAsText } from "./ui/icon-as-text"
import { useToast } from "./ui/use-toast"

export function DraftModeEnabler() {
  const { executeAsync, isExecuting } = useAction(enableDraftModeAction)
  const router = useRouter()
  const { toast } = useToast()

  async function handleEnableDraftMode() {
    if (typeof window === "undefined") return
    const res = await executeAsync({ url: window.location.toString() })

    if (res?.serverError)
      toast({
        variant: "destructive",
        description: res.serverError,
      })

    if (res?.data) {
      router.push(res.data.redirectUrl)
    }
  }

  return (
    <Button onClick={handleEnableDraftMode} size="sm" disabled={isExecuting}>
      {isExecuting && <IconAsText icon={Loader2} className="animate-spin" />}
      Enable Draft Mode
    </Button>
  )
}
