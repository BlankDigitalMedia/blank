"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function BasicDialogExample() {
  return (
    <Card>
      <CardHeader className="p-3">
        <CardTitle className="text-sm">Basic Dialog</CardTitle>
        <CardDescription className="text-xs">A simple modal dialog</CardDescription>
      </CardHeader>
      <CardContent className="p-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Basic Dialog</DialogTitle>
              <DialogDescription>
                This is a simple dialog built with Radix UI Dialog primitive.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm">Dialog content goes here. This can contain any React components.</p>
            </div>
            <DialogFooter>
              <Button size="sm">Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}

export function FormDialogExample() {
  return (
    <Card>
      <CardHeader className="p-3">
        <CardTitle className="text-sm">Form Dialog</CardTitle>
        <CardDescription className="text-xs">Dialog with form inputs</CardDescription>
      </CardHeader>
      <CardContent className="p-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name" className="text-right text-sm">
                  Name
                </label>
                <Input
                  id="name"
                  defaultValue="Jane Smith"
                  className="col-span-3 h-8"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="email" className="text-right text-sm">
                  Email
                </label>
                <Input
                  id="email"
                  defaultValue="jane.smith@example.com"
                  className="col-span-3 h-8"
                />
              </div>
            </div>
            <DialogFooter>
              <Button size="sm">Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
} 