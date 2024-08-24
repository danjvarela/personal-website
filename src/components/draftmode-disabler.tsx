"use client"

import { useRouter } from "next/navigation"
import { disableDraftModeAction } from "@/actions/draftMode"
import { Loader2 } from "lucide-react"
import { useAction } from "next-safe-action/hooks"
import { Button } from "./ui/button"
import { IconAsText } from "./ui/icon-as-text"
import { useToast } from "./ui/use-toast"

export function DraftModeDisabler() {
  const { executeAsync, isExecuting } = useAction(disableDraftModeAction)
  const router = useRouter()
  const { toast } = useToast()

  async function handleDisableDraftMode() {
    const res = await executeAsync()

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
    <Button
      size="sm"
      variant="outline"
      onClick={handleDisableDraftMode}
      disabled={isExecuting}
    >
      {isExecuting && <IconAsText icon={Loader2} className="animate-spin" />}
      Disable Draft mode
    </Button>
  )
}
