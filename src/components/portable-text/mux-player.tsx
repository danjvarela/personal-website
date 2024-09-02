import { createBlurUp } from "@mux/blurup"
import MuxPlayerPrimitive from "@mux/mux-player-react"
import { stegaClean } from "@sanity/client/stega"

type Props = React.ComponentPropsWithoutRef<typeof MuxPlayerPrimitive>

export async function MuxPlayer({ playbackId, ...props }: Props) {
  const resolvedPlaybackId = stegaClean(playbackId)
  const { blurDataURL, aspectRatio } = await createBlurUp(resolvedPlaybackId)

  return (
    <MuxPlayerPrimitive
      streamType="on-demand"
      playbackId={stegaClean(playbackId)}
      className="w-full"
      placeholder={blurDataURL}
      style={{
        aspectRatio,
      }}
      {...props}
    />
  )
}
