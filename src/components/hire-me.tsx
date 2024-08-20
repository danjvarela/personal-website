"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { urls } from "@/lib/constants"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ContactForm } from "./contact-form"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

export function HireMe() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size="sm" className="hidden md:inline-flex">
            Hire me
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Let's work together!</DialogTitle>
          </DialogHeader>
          <div className="mt-4 flex gap-4">
            <Button variant="secondary" asChild>
              <Link href={urls.linkedIn} target="_blank" className="flex-1">
                Message me on LinkedIn
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href={urls.upwork} target="_blank" className="flex-1">
                Hire me on Upwork
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Separator className="flex-1" />
            <span className="text-sm text-muted-foreground">OR</span>
            <Separator className="flex-1" />
          </div>
          <DialogDescription>
            You can fill out the form below and I will get back to you as soon
            as I can.
          </DialogDescription>
          <ContactForm onEmailSentSuccessfully={() => setOpen(false)} />
        </DialogContent>
      </Dialog>

      <Sheet>
        <SheetTrigger asChild>
          <Button size="sm" className="md:hidden">
            Hire me
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Let's work together!</SheetTitle>
          </SheetHeader>

          <div className="my-6 flex flex-col gap-4">
            <Button variant="outline" asChild>
              <Link href={urls.linkedIn} className="flex-1">
                Message me on LinkedIn
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={urls.upwork} className="flex-1">
                Hire me on Upwork
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Separator className="flex-1" />
            <span className="text-sm text-muted-foreground">OR</span>
            <Separator className="flex-1" />
          </div>

          <SheetDescription className="mb-6 mt-8">
            You can fill out the form below and I will get back to you as soon
            as I can.
          </SheetDescription>

          <ContactForm onEmailSentSuccessfully={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
    </>
  )
}
