"use client"

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
import { Label } from "@/components/ui/label"
import { Heading } from "@/components/ui/heading-font"

// Placeholder Image component (replace with actual image component or logic if available)
const PlaceholderImage = ({ className }: { className?: string }) => (
  <div className={`bg-muted aspect-video flex items-center justify-center ${className}`}>
    {/* Optionally add an icon or text */}
  </div>
)

// Updated component using theme colors directly
export function ColorsShowcase() {
  // Example theme colors (assuming shadcn/ui setup)
  const themeColors = [
    { name: "Background", class: "bg-background", text: "text-foreground" },
    { name: "Foreground", class: "bg-foreground", text: "text-background" },
    { name: "Card", class: "bg-card", text: "text-card-foreground" },
    { name: "Card Foreground", class: "bg-card-foreground", text: "text-card" }, // Might be less useful to show
    { name: "Popover", class: "bg-popover", text: "text-popover-foreground" },
    { name: "Popover Foreground", class: "bg-popover-foreground", text: "text-popover" }, // Might be less useful
    { name: "Primary", class: "bg-primary", text: "text-primary-foreground" },
    { name: "Primary Foreground", class: "bg-primary-foreground", text: "text-primary" }, // Might be less useful
    { name: "Secondary", class: "bg-secondary", text: "text-secondary-foreground" },
    { name: "Muted", class: "bg-muted", text: "text-muted-foreground" },
    { name: "Accent", class: "bg-accent", text: "text-accent-foreground" },
    { name: "Destructive", class: "bg-destructive", text: "text-destructive-foreground" },
    { name: "Border", class: "bg-border", text: "text-foreground" }, // Use foreground for contrast
    { name: "Input", class: "bg-input", text: "text-foreground" },   // Use foreground for contrast
    { name: "Ring", class: "bg-ring", text: "text-foreground" },     // Use foreground for contrast
  ];

  // Neutral colors from Tailwind's default scale (adjust if theme modifies these)
  const neutrals = [
    { name: "Neutral 50", class: "bg-neutral-50" },
    { name: "Neutral 100", class: "bg-neutral-100" },
    { name: "Neutral 200", class: "bg-neutral-200" },
    { name: "Neutral 300", class: "bg-neutral-300" },
    { name: "Neutral 400", class: "bg-neutral-400" },
    { name: "Neutral 500", class: "bg-neutral-500" },
    { name: "Neutral 600", class: "bg-neutral-600" },
    { name: "Neutral 700", class: "bg-neutral-700" },
    { name: "Neutral 800", class: "bg-neutral-800" },
    { name: "Neutral 900", class: "bg-neutral-900" },
    { name: "Neutral 950", class: "bg-neutral-950" },
  ];


  return (
    <div className="space-y-4">
      <Heading as="h2" size="sm">Colors</Heading>
      
      {/* Theme Colors */}
      <Card>
         <CardHeader className="p-3 pb-1">
            <CardTitle className="text-sm">Theme Colors</CardTitle>
            <CardDescription className="text-xs">Semantic colors defined in the theme.</CardDescription>
          </CardHeader>
          <CardContent className="p-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {themeColors.map((color) => (
              <div key={color.name} className="text-center">
                <div className={`h-10 w-full rounded border ${color.class}`}></div>
                <p className="text-xs mt-1 font-medium truncate">{color.name}</p>
                {/* Optional: show text color preview 
                <p className={`text-xs ${color.text} ${color.class}`}>Aa</p> 
                */}
              </div>
            ))}
          </CardContent>
           <CardFooter className="p-2 border-t">
            <p className="text-xs text-muted-foreground">Ask AI: "Update the `[color name]` color in the Tailwind theme config to `[hex code]`".</p>
          </CardFooter>
      </Card>

      {/* Neutrals */}
       <Card>
         <CardHeader className="p-3 pb-1">
            <CardTitle className="text-sm">Neutrals</CardTitle>
             <CardDescription className="text-xs">Default neutral color scale.</CardDescription>
          </CardHeader>
          <CardContent className="p-3">
            <div className="flex flex-wrap gap-1">
              {neutrals.map((color) => (
                <div key={color.name} className="text-center flex-grow">
                  <div className={`h-6 w-full rounded ${color.class}`}></div>
                   <p className="text-[10px] mt-1 font-medium truncate">{color.name.split(' ')[1]}</p>
                </div>
              ))}
            </div>
          </CardContent>
           <CardFooter className="p-2 border-t">
            <p className="text-xs text-muted-foreground">Ask AI: "Update the `neutral` colors in the Tailwind theme config".</p>
          </CardFooter>
        </Card>
    </div>
  )
}

export function TypographyShowcase() {
  return (
    <div className="space-y-4 mt-8">
      <Heading as="h2" size="sm">Typography</Heading>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 space-y-2">
            <p className="text-sm text-muted-foreground mb-1">Body (Sans Serif)</p>
            <p className="font-sans text-base">The quick brown fox jumps over the lazy dog.</p>
            <p className="font-sans text-lg font-medium">The quick brown fox jumps over the lazy dog.</p>
            <p className="font-sans text-sm font-light italic">The quick brown fox jumps over the lazy dog.</p>
          </CardContent>
          <CardFooter className="p-2 border-t">
            <p className="text-xs text-muted-foreground">Ask AI: "Update the `sans` font family in the Tailwind theme config to `[Font Name]`".</p>
          </CardFooter>
        </Card>

        <Card>
           <CardContent className="p-4 space-y-2">
            <p className="text-sm text-muted-foreground mb-1">Heading (Serif)</p>
             <p className="font-serif text-base">The quick brown fox jumps over the lazy dog.</p>
             <p className="font-serif text-xl font-semibold">The quick brown fox jumps over the lazy dog.</p>
             <p className="font-serif text-sm italic">The quick brown fox jumps over the lazy dog.</p>
          </CardContent>
          <CardFooter className="p-2 border-t">
            <p className="text-xs text-muted-foreground">Ask AI: "Update the `serif` font family in the Tailwind theme config to `[Font Name]`".</p>
          </CardFooter>
        </Card>
         <Card>
           <CardContent className="p-4 space-y-2">
            <p className="text-sm text-muted-foreground mb-1">Monospace</p>
             <p className="font-mono text-base">The quick brown fox jumps over the lazy dog.</p>
             <p className="font-mono text-lg font-medium">The quick brown fox jumps over the lazy dog.</p>
             <p className="font-mono text-sm">The quick brown fox jumps over the lazy dog.</p>
          </CardContent>
          <CardFooter className="p-2 border-t">
            <p className="text-xs text-muted-foreground">Ask AI: "Update the `mono` font family in the Tailwind theme config to `[Font Name]`".</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export function UIStylingShowcase() {
  // No longer need hardcoded colors here
  // const primaryButtonColor = palettes.primary.main; 
  // const primaryButtonHoverColor = palettes.primary.shades[3];

  return (
    <div className="space-y-4 mt-8">
      <Heading as="h2" size="sm">UI Styling</Heading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Buttons & Forms Card */}
        <Card>
          <CardHeader className="p-3">
            <CardTitle className="text-sm">Buttons & Forms</CardTitle>
             <CardDescription className="text-xs">Default component styles.</CardDescription>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            {/* Example Buttons using default variants */}
            <div className="flex gap-3 flex-wrap items-center">
              <Button size="sm">Primary</Button> 
              <Button size="sm" variant="secondary">Secondary</Button>
              <Button size="sm" variant="outline">Outline</Button>
               <Button size="sm" variant="ghost">Ghost</Button>
               <Button size="sm" variant="link">Link</Button>
               <Button size="sm" variant="destructive">Destructive</Button>
            </div>
            
            {/* Example Input using default styles */}
            <div>
              <Label htmlFor="example-ui" className="text-xs mb-1 block">Label</Label>
              {/* Removed bg-muted border-muted override */}
              <Input id="example-ui" className="h-9" placeholder="Placeholder" /> 
            </div>
          </CardContent>
          <CardFooter className="p-2 border-t">
            <p className="text-xs text-muted-foreground">Ask AI: "Update the default `Button` or `Input` styles in the Tailwind theme config".</p>
          </CardFooter>
        </Card>

        {/* Cards & Images Card */}
        <Card>
          <CardHeader className="p-3">
            <CardTitle className="text-sm">Cards & Images</CardTitle>
            <CardDescription className="text-xs">Default card and image styles.</CardDescription>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            {/* Example Images with default rounding */}
            <div className="grid grid-cols-2 gap-3">
               <PlaceholderImage className="rounded-md" /> {/* Assuming default is rounded-md */}
               <PlaceholderImage className="rounded-lg"/>
            </div>
            
            {/* Example Default Card */}
            <Card className="p-3">
               <PlaceholderImage className="rounded aspect-video mb-2" />
              <h3 className="text-sm font-medium mb-1">Default Card</h3>
              <p className="text-xs text-muted-foreground mb-2">Uses base card styles from theme.</p>
              <div className="flex justify-end">
                 <Button variant="ghost" size="sm" className="h-7 text-xs px-2">Button</Button>
              </div>
            </Card>

             {/* Example Card with Text */}
             <Card className="p-3">
              <h3 className="text-sm font-medium mb-1">Another Card Example</h3>
              <p className="text-xs text-muted-foreground mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex justify-end">
                 <Button variant="ghost" size="sm" className="h-7 text-xs px-2">Button</Button>
              </div>
            </Card>

          </CardContent>
          <CardFooter className="p-2 border-t">
            <p className="text-xs text-muted-foreground">Ask AI: "Update the base `Card` styles in the Tailwind theme config".</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
} 