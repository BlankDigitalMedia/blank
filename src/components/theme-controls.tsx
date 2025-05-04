"use client"

import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

// Helper to update CSS variables
const updateCssVariable = (variable: string, value: string) => {
  document.documentElement.style.setProperty(variable, value);
}

export function ThemeControls() {
  const [primaryColor, setPrimaryColor] = useState("#000000") // Default or fetch initial
  const [borderRadius, setBorderRadius] = useState("0.5") // Default or fetch initial

  // Fetch initial values from CSS variables on mount
  useEffect(() => {
    const rootStyle = getComputedStyle(document.documentElement);
    const initialColor = rootStyle.getPropertyValue("--primary") // Assuming HSL format
    const initialRadius = rootStyle.getPropertyValue("--radius") || "0.5";
    
    // Basic conversion from HSL string (e.g., "240 10% 3.9%") to hex for color picker
    // This is a placeholder and might need a robust HSL-to-Hex conversion
    if (initialColor) {
      const hslParts = initialColor.trim().split(" ");
      // Simplified: Use a default hex if conversion is complex/not implemented
      setPrimaryColor("#000000"); // Placeholder
    }

    setBorderRadius(initialRadius.replace("rem", ""));
  }, []);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setPrimaryColor(newColor);
    // TODO: Convert hex to HSL format required by shadcn/ui themes (e.g., "240 10% 3.9%")
    // updateCssVariable("--primary", convertedHSLValue);
    toast.info("Primary color updated (preview only - apply in tailwind.config)")
  }

  const handleRadiusChange = (value: string) => {
    setBorderRadius(value);
    updateCssVariable("--radius", `${value}rem`);
    toast.info("Border radius updated (preview only - apply in tailwind.config)")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Theme Customizer</CardTitle>
        <CardDescription>
          Adjust primary color and border radius for preview. Apply changes in `tailwind.config.mjs`.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Label htmlFor="primary-color">Primary Color</Label>
          <Input 
            id="primary-color"
            type="color" 
            value={primaryColor} 
            onChange={handleColorChange} 
            className="w-16 h-8 p-1"
          />
          <span className="text-xs text-muted-foreground">({primaryColor})</span>
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="border-radius">Border Radius</Label>
          <Select value={borderRadius} onValueChange={handleRadiusChange}>
            <SelectTrigger id="border-radius" className="w-[100px] h-8 text-xs">
              <SelectValue placeholder="Radius" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">0</SelectItem>
              <SelectItem value="0.3">0.3</SelectItem>
              <SelectItem value="0.5">0.5</SelectItem>
              <SelectItem value="0.75">0.75</SelectItem>
              <SelectItem value="1.0">1.0</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-xs text-muted-foreground">({borderRadius}rem)</span>
        </div>
      </CardContent>
    </Card>
  )
} 