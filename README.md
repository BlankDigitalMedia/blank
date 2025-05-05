# AI-Powered Design Starter

A comprehensive, interactive component showcase and design system starter for Next.js projects optimized for AI-assisted development workflows.

![Component Registry Preview](https://via.placeholder.com/800x400?text=Component+Registry+Screenshot)

## What Is This?

The AI-Powered Design Starter is a specialized Next.js template designed to accelerate UI development with a focus on AI-assisted workflows. Unlike typical component libraries or design systems, this project provides:

1. **Live Component Registry** - An interactive showcase of all shadcn/ui components with real-time theme reflection
2. **AI-Optimized Structure** - Organized specifically for effective interaction with AI coding assistants like Cursor
3. **Practical Implementation Path** - Direct bridge between choosing themes on shadcn/ui's themes page and implementing them
4. **Development-Time Resource** - Serves as both documentation and playground during development

This project is specifically designed to complement the [shadcn/ui themes page](https://ui.shadcn.com/themes), providing a working environment where those themes can be directly applied and tested.

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router structure
│   │   ├── page.tsx            # Landing page explaining the starter
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── globals.css         # Global styles and Tailwind directives
│   │   └── registry/           # Component registry (development only)
│   │       └── page.tsx        # Interactive component showcase
│   │
│   ├── components/             # React components
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.tsx      # UI components from shadcn/ui
│   │   │   ├── card.tsx
│   │   │   └── ... (many more)
│   │   │
│   │   ├── theme-provider.tsx  # Theme provider wrapper
│   │   ├── theme-toggle.tsx    # Theme switching component
│   │   ├── styles-showcase.tsx # Theme visualization components
│   │   └── *-examples.tsx      # Category-specific example components
│   │
│   └── lib/                    # Utility functions
│       └── utils.ts            # Common utility functions
│
├── public/                     # Static assets
├── components.json             # shadcn/ui configuration
├── next.config.ts              # Next.js configuration
└── tailwind.config.js          # Tailwind CSS configuration
```

## Technical Details

### Core Technologies

- **Next.js 15+** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component collection built on Radix UI
- **Radix UI** - Headless UI primitives
- **Sonner** - Toast notifications
- **Lucide React** - Icon library

### Key Features

1. **Component Registry** - Organized by category:
   - Styles (colors, typography, UI styling)
   - Layout components
   - Forms & inputs
   - Feedback components
   - Navigation components
   - Data display components
   - Overlays
   - Date & time components

2. **Theme System**:
   - Light/dark mode toggle
   - System preference detection
   - CSS variables for all theme values
   - Real-time theme preview

3. **AI-Assisted Customization**:
   - Instructions for modifying with AI tools
   - Clear file structure for AI context
   - Component examples optimized for prompting

## How to Use This Project

### For Development

1. **Explore Components**: Browse the Registry to see available components and how they look with current theme settings
2. **Observe Theme Effects**: See how changing theme variables impacts components across the system
3. **Modify with AI**: Use AI assistants (like Cursor) to customize theme variables in `tailwind.config.js`
4. **Build Your App**: Use the components and themes to build your actual application

### For Production

Before deploying to production, you should remove the development-only registry:
- Use the `build:prod` script to automatically exclude registry components:
  ```
  npm run build:prod
  ```
- This uses environment variables to modify the Next.js configuration during build
- Registry pages will not be included in the production build, reducing bundle size

## Design Decisions & Rationale

This project makes several intentional design decisions:

1. **Registry as Development Resource**: Unlike traditional component libraries, the registry exists primarily as a development-time resource rather than being included in production.

2. **Live Theme Preview**: Instead of static style guides, all components reflect the actual theme in real-time, allowing for immediate visual feedback during customization.

3. **AI-Assisted Workflow**: The project structure and documentation are specifically optimized for AI-assisted development, with clear patterns and consistency.

4. **shadcn/ui Integration**: Rather than creating a new component system, this builds on shadcn/ui's established patterns while adding the missing link between their themes showcase and practical implementation.

5. **KISS Principle**: The project follows the "Keep It Simple, Stupid" principle throughout, avoiding unnecessary abstractions or complexity.

## Working with AI Assistants

This project is specifically designed to work well with AI coding assistants. When using tools like Cursor:

1. **Theme Customization**: Ask the AI to help modify theme variables in `tailwind.config.js` based on visual preferences
2. **Component Usage**: Request code examples for specific components, using the registry as reference
3. **Layout Creation**: Ask for assistance in building page layouts using the available components
4. **Troubleshooting**: Share both the component registry and your implementation for context when debugging

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request to improve the project.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) for the component collection
- [Radix UI](https://www.radix-ui.com/) for the accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for the styling system
- [Next.js](https://nextjs.org/) for the React framework
