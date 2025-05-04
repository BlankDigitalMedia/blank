import { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BasicToastExamples, AdvancedToastExamples } from "@/components/toast-examples"
import { BasicDialogExample, FormDialogExample } from "@/components/dialog-examples"
import { ColorsShowcase, TypographyShowcase, UIStylingShowcase } from "@/components/styles-showcase"
import { Heading } from "@/components/ui/heading-font"
import LayoutExamples from "@/components/layout-examples"
import FormsInputsExamples from "@/components/forms-inputs-examples"
import FeedbackExamples from "@/components/feedback-examples"
import NavigationExamples from "@/components/navigation-examples"
import DataDisplayExamples from "@/components/data-display-examples"
import OverlaysExamples from "@/components/overlays-examples"
import DateTimeExamples from "@/components/date-time-examples"

export const metadata: Metadata = {
  title: "Component Registry",
  description: "A showcase of UI components using shadcn/ui, Radix UI, and Sonner toast",
}

export default function RegistryPage() {
  return (
    <div className="container max-w-6xl py-4 mx-auto">
      <header className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Component Registry</h1>
          <p className="text-sm text-muted-foreground">
            A showcase of UI components using shadcn/ui, Radix UI, and Sonner toast
          </p>
        </div>
        <ThemeToggle />
      </header>

      <Tabs defaultValue="styles" className="w-full mb-4">
        <TabsList className="mb-4 grid grid-cols-4 sm:grid-cols-8 h-auto">
          <TabsTrigger value="styles">Styles</TabsTrigger>
          <TabsTrigger value="layout">Layout</TabsTrigger>
          <TabsTrigger value="forms">Forms & Inputs</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="data">Data Display</TabsTrigger>
          <TabsTrigger value="overlays">Overlays</TabsTrigger>
          <TabsTrigger value="datetime">Date & Time</TabsTrigger>
        </TabsList>

        <TabsContent value="styles" className="space-y-4">
          <Heading as="h2" size="sm">Styles</Heading>
          <ColorsShowcase />
          <TypographyShowcase />
          <UIStylingShowcase />
        </TabsContent>
        
        <TabsContent value="layout" className="space-y-4">
          <h2 className="text-xl font-semibold">Layout Components</h2>
          <LayoutExamples />
        </TabsContent>

        <TabsContent value="forms" className="space-y-4">
          <h2 className="text-xl font-semibold">Forms & Inputs</h2>
          <FormsInputsExamples />
        </TabsContent>

        <TabsContent value="feedback" className="space-y-4">
          <h2 className="text-xl font-semibold">Feedback Components</h2>
          <FeedbackExamples />
        </TabsContent>

        <TabsContent value="navigation" className="space-y-4">
          <h2 className="text-xl font-semibold">Navigation Components</h2>
          <NavigationExamples />
        </TabsContent>

        <TabsContent value="data" className="space-y-4">
          <h2 className="text-xl font-semibold">Data Display Components</h2>
          <DataDisplayExamples />
        </TabsContent>

        <TabsContent value="overlays" className="space-y-4">
          <h2 className="text-xl font-semibold">Overlay Components</h2>
          <OverlaysExamples />
        </TabsContent>

        <TabsContent value="datetime" className="space-y-4">
          <h2 className="text-xl font-semibold">Date & Time Components</h2>
          <DateTimeExamples />
        </TabsContent>
      </Tabs>

      <footer className="mt-8 border-t pt-3 text-center text-xs text-muted-foreground">
        Built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, Radix UI, and Sonner toast
      </footer>
    </div>
  )
} 