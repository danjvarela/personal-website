import Image from "next/image"
import { cn } from "@/lib/utils"
import logo from "./logo.svg"

export function Logo({ className }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("relative aspect-square w-8", className)}>
      <Image src={logo} alt="logo" fill />
    </div>
  )
}
