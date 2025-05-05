/**
 * Utility for processing shadcn/ui theme configurations
 * Helps streamline the process of transferring themes from shadcn/ui's theme page
 */

/**
 * Interface representing the structure of a shadcn/ui theme configuration
 */
interface ShadcnThemeConfig {
  cssVars?: {
    light?: Record<string, string | number>;
    dark?: Record<string, string | number>;
  };
  borderRadius?: {
    lg?: string;
    md?: string;
    sm?: string;
    [key: string]: string | undefined;
  };
  [key: string]: unknown;
}

/**
 * Processes and formats a theme configuration from shadcn/ui's theme page
 * @param themeConfig - The raw theme configuration from shadcn/ui
 * @returns Object with utility methods for the theme configuration
 */
export function applyThemeFromShadcn(themeConfig: ShadcnThemeConfig) {
  return {
    /**
     * Formats the shadcn/ui theme config to match tailwind.config structure
     * @returns Formatted theme configuration for tailwind.config
     */
    formatForTailwind() {
      // Extract color values
      const colors: Record<string, string> = {};
      Object.entries(themeConfig.cssVars?.light || {}).forEach(([key, value]) => {
        if (key.startsWith('--') && key.includes('color')) {
          // Convert from CSS var format to tailwind format
          const colorName = key.replace('--', '').replace('-color', '');
          if (typeof value === 'string') {
            colors[colorName] = value;
          }
        }
      });
      
      // Extract radius value
      const borderRadius = themeConfig.borderRadius || {};
      
      // Return formatted config for tailwind
      return {
        colors,
        borderRadius,
        extend: {
          colors,
          borderRadius: {
            lg: borderRadius.lg || '0.5rem',
            md: borderRadius.md || '0.375rem',
            sm: borderRadius.sm || '0.25rem'
          }
        }
      };
    }
  };
} 