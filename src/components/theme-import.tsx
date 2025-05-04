"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { applyThemeFromShadcn } from "@/lib/theme-utils"
import { CopyIcon, CheckIcon } from "lucide-react"
import { toast } from "sonner"

export function ThemeImporter() {
  const [themeConfig, setThemeConfig] = useState("")
  const [formattedConfig, setFormattedConfig] = useState("")
  const [copied, setCopied] = useState(false)

  const processTheme = () => {
    if (!themeConfig.trim()) {
      toast.error("Theme configuration cannot be empty.")
      return
    }
    try {
      // Parse the input JSON
      const config = JSON.parse(themeConfig)
      // Process using our utility
      const processed = applyThemeFromShadcn(config).formatForTailwind()
      // Format as JSON for display
      const jsonString = JSON.stringify(processed, null, 2)
      setFormattedConfig(jsonString)
      toast.success("Theme processed successfully! Ready to copy.")
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error"
      setFormattedConfig(`Error processing theme: ${errorMessage}`)
      toast.error(`Error processing theme: ${errorMessage}`)
    }
  }

  const copyToClipboard = async () => {
    if (!formattedConfig || formattedConfig.startsWith("Error")) {
      toast.warning("No valid configuration available to copy.")
      return
    }
    try {
      await navigator.clipboard.writeText(formattedConfig)
      setCopied(true)
      toast.success("Configuration copied to clipboard!")
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy:", error)
      toast.error("Failed to copy configuration to clipboard.")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Theme Importer</CardTitle>
        <CardDescription>
          Copy theme config JSON from shadcn/ui and paste here to convert.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Textarea
            placeholder='Paste shadcn/ui theme configuration JSON here (e.g., { "style": "default", "tailwind": {...} })'
            value={themeConfig}
            onChange={(e) => setThemeConfig(e.target.value)}
            className="min-h-[100px] font-mono text-xs"
          />
        </div>
        <Button onClick={processTheme}>Process Theme</Button>

        {formattedConfig && !formattedConfig.startsWith("Error") && (
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium">Tailwind Configuration Snippet:</p>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={copyToClipboard}
                className="h-8"
              >
                {copied ? <CheckIcon className="h-4 w-4 mr-1" /> : <CopyIcon className="h-4 w-4 mr-1" />}
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
              {formattedConfig}
            </pre>
          </div>
        )}
        {formattedConfig.startsWith("Error") && (
          <p className="text-sm text-destructive mt-2">{formattedConfig}</p>
        )}
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        Apply the generated snippet to your `tailwind.config.mjs` file.
      </CardFooter>
    </Card>
  )
} 