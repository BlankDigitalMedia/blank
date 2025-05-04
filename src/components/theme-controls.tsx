"use client"

import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

// Helper to update CSS variables
const updateCssVariable = (variable: string, value: string) => {
  // Check if window is defined (runs only on client)
  if (typeof window !== 'undefined') {
    document.documentElement.style.setProperty(variable, value);
  }
}

export function ThemeControls() {
  const [primaryColor, setPrimaryColor] = useState("#000000") // Default hex
  const [borderRadius, setBorderRadius] = useState("0.5") // Default rem value

  // Fetch initial border radius from CSS variables on mount
  useEffect(() => {
    // Ensure this runs only on the client
    if (typeof window !== 'undefined') {
      const rootStyle = getComputedStyle(document.documentElement);
      const initialRadius = rootStyle.getPropertyValue("--radius") || "0.5";
      setBorderRadius(initialRadius.replace("rem", ""));
      
      // Note: We don't fetch initial primary color as it's in HSL format
      // and the input type='color' uses HEX.
    }
  }, []);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setPrimaryColor(newColor);
    // Clarification: Live update for --primary (HSL) from HEX is complex.
    // This control now primarily serves as a color *selector*.
    toast.info(`Selected Primary Color: ${newColor}. Apply HSL value in tailwind.config.js or use Theme Importer.`);
  }

  const handleRadiusChange = (value: string) => {
    setBorderRadius(value);
    updateCssVariable("--radius", `${value}rem`);
    toast.success(`Border radius live preview updated to ${value}rem. Apply in tailwind.config.js to persist.`);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Theme Preview Customizer</CardTitle>
        <CardDescription>
          Adjust border radius for live preview. Select a primary color (HEX).
          Apply final theme values (HSL colors, radius) in `tailwind.config.mjs` or use the Theme Importer.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Label htmlFor="primary-color">Primary Color (Selector)</Label>
          <Input 
            id="primary-color"
            type="color" 
            value={primaryColor} 
            onChange={handleColorChange} 
            className="w-10 h-8 p-1 cursor-pointer"
            aria-label="Select primary color (does not live update theme)"
          />
          <span className="text-xs text-muted-foreground">({primaryColor})</span>
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="border-radius">Border Radius (Live Preview)</Label>
          <Select value={borderRadius} onValueChange={handleRadiusChange}>
            <SelectTrigger id="border-radius" className="w-[100px] h-8 text-xs">
              <SelectValue placeholder="Radius" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">0rem</SelectItem>
              <SelectItem value="0.3">0.3rem</SelectItem>
              <SelectItem value="0.5">0.5rem</SelectItem>
              <SelectItem value="0.75">0.75rem</SelectItem>
              <SelectItem value="1.0">1.0rem</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-xs text-muted-foreground">({borderRadius}rem)</span>
        </div>
      </CardContent>
    </Card>
  )
} 