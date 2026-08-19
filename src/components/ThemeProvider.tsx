import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  color: string;
  setColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Helper to convert HEX to HSL
function hexToHSL(H: string) {
  let r = 0, g = 0, b = 0;
  // Make sure it's a valid hex string
  const hex = H.replace("#", "");
  
  if (hex.length === 3) {
    r = parseInt(hex.charAt(0) + hex.charAt(0), 16) || 0;
    g = parseInt(hex.charAt(1) + hex.charAt(1), 16) || 0;
    b = parseInt(hex.charAt(2) + hex.charAt(2), 16) || 0;
  } else if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16) || 0;
    g = parseInt(hex.substring(2, 4), 16) || 0;
    b = parseInt(hex.substring(4, 6), 16) || 0;
  }
  
  r /= 255;
  g /= 255;
  b /= 255;
  
  const cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin;
  
  let h = 0, s = 0, l = 0;
  
  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;
  
  h = Math.round(h * 60);
  if (h < 0) h += 360;
  
  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { h, s, l };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [color, setColor] = useState<string>("#10b981"); // Default emerald

  useEffect(() => {
    const savedColor = localStorage.getItem("app-theme-color");
    if (savedColor) {
      setColor(savedColor);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    const hsl = hexToHSL(color);
    
    // Primary accents
    const primary = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    root.style.setProperty("--primary", primary);
    root.style.setProperty("--ring", primary);
    root.style.setProperty("--sidebar-primary", primary);
    
    // Background tint (very light, high lightness, low saturation)
    const bgTint = `hsl(${hsl.h}, ${Math.min(hsl.s, 40)}%, 98%)`;
    root.style.setProperty("--background", bgTint);
    
    // Sidebar background (slightly darker than background or different tint)
    const sidebarTint = `hsl(${hsl.h}, ${Math.min(hsl.s, 30)}%, 95%)`;
    root.style.setProperty("--sidebar", sidebarTint);

    // Chart palette - shift hue procedurally
    root.style.setProperty("--chart-1", primary);
    root.style.setProperty("--chart-2", `hsl(${(hsl.h + 30) % 360}, ${hsl.s}%, ${hsl.l}%)`);
    root.style.setProperty("--chart-3", `hsl(${(hsl.h + 60) % 360}, ${hsl.s}%, ${hsl.l}%)`);
    root.style.setProperty("--chart-4", `hsl(${(hsl.h + 90) % 360}, ${hsl.s}%, ${hsl.l}%)`);
    root.style.setProperty("--chart-5", `hsl(${(hsl.h + 120) % 360}, ${hsl.s}%, ${hsl.l}%)`);
    
    // Dynamic text contrast for buttons
    const primaryFg = hsl.l > 60 ? "#000000" : "#ffffff";
    root.style.setProperty("--primary-foreground", primaryFg);
    root.style.setProperty("--sidebar-primary-foreground", primaryFg);

    localStorage.setItem("app-theme-color", color);
  }, [color]);

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
