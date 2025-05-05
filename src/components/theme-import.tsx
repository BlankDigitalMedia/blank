"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { applyThemeFromShadcn } from "@/lib/theme-utils"
import { CopyIcon, CheckIcon } from "lucide-react"

export function ThemeImporter() {
  const [themeConfig, setThemeConfig] = useState("")
  const [formattedConfig, setFormattedConfig] = useState("")
  const [copied, setCopied] = useState(false)

  const processTheme = () => {
    try {
      // Parse the input JSON
      const config = JSON.parse(themeConfig)
      // Process using our utility
      const processed = applyThemeFromShadcn(config).formatForTailwind()
      // Format as JSON for display
      setFormattedConfig(JSON.stringify(processed, null, 2))
    } catch (error) {
      setFormattedConfig(`Error processing theme: ${(error as Error).message}`)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formattedConfig)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy:", error)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Theme Importer</CardTitle>
        <CardDescription>
          Copy theme configuration from shadcn/ui themes page and paste it here to convert to Tailwind format
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Textarea
            placeholder="Paste shadcn/ui theme configuration here..."
            value={themeConfig}
            onChange={(e) => setThemeConfig(e.target.value)}
            className="min-h-[100px] font-mono text-xs"
          />
        </div>
        <Button onClick={processTheme}>Process Theme</Button>

        {formattedConfig && (
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium">Tailwind Configuration:</p>
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
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        Add this configuration to your tailwind.config.js file
      </CardFooter>
    </Card>
  )
} 