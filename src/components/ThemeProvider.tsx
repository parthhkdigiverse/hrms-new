import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  color: string;
  setColor: (color: string) => void;
  radius: number;
  setRadius: (radius: number) => void;
  fontFamily: string;
  setFontFamily: (font: string) => void;
  logoUrl: string;
  setLogoUrl: (url: string) => void;
  companyName: string;
  setCompanyName: (name: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Helper to convert HEX to HSL
function hexToHSL(H: string) {
  let r = 0, g = 0, b = 0;
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
  
  r /= 255; g /= 255; b /= 255;
  
  const cmin = Math.min(r,g,b), cmax = Math.max(r,g,b), delta = cmax - cmin;
  let h = 0, s = 0, l = 0;
  
  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;
  
  // Calculate relative luminance for contrast (YIQ formula)
  const luminance = (r * 255 * 299 + g * 255 * 587 + b * 255 * 114) / 1000;
  
  h = Math.round(h * 60);
  if (h < 0) h += 360;
  
  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { h, s, l, luminance };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [color, setColor] = useState<string>("#10b981");
  const [radius, setRadius] = useState<number>(0.75);
  const [fontFamily, setFontFamily] = useState<string>("Inter");
  const [logoUrl, setLogoUrl] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("HR Suite");

  useEffect(() => {
    const savedColor = localStorage.getItem("app-theme-color");
    const savedRadius = localStorage.getItem("app-theme-radius");
    const savedFont = localStorage.getItem("app-theme-font");
    const savedLogo = localStorage.getItem("app-theme-logo");
    const savedName = localStorage.getItem("app-theme-name");

    if (savedColor) setColor(savedColor);
    if (savedRadius) setRadius(parseFloat(savedRadius));
    if (savedFont) setFontFamily(savedFont);
    if (savedLogo) setLogoUrl(savedLogo);
    if (savedName) setCompanyName(savedName);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    const hsl = hexToHSL(color);
    
    const primary = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    root.style.setProperty("--primary", primary);
    root.style.setProperty("--ring", primary);
    root.style.setProperty("--sidebar-primary", primary);
    
    const bgTint = `hsl(${hsl.h}, ${Math.min(hsl.s, 40)}%, 98%)`;
    root.style.setProperty("--background", bgTint);
    
    const sidebarTint = `hsl(${hsl.h}, ${Math.min(hsl.s, 30)}%, 95%)`;
    root.style.setProperty("--sidebar", sidebarTint);

    root.style.setProperty("--chart-1", primary);
    root.style.setProperty("--chart-2", `hsl(${(hsl.h + 30) % 360}, ${hsl.s}%, ${hsl.l}%)`);
    root.style.setProperty("--chart-3", `hsl(${(hsl.h + 60) % 360}, ${hsl.s}%, ${hsl.l}%)`);
    root.style.setProperty("--chart-4", `hsl(${(hsl.h + 90) % 360}, ${hsl.s}%, ${hsl.l}%)`);
    root.style.setProperty("--chart-5", `hsl(${(hsl.h + 120) % 360}, ${hsl.s}%, ${hsl.l}%)`);
    
    // YIQ formula threshold is typically 128
    const primaryFg = hsl.luminance > 140 ? "#000000" : "#ffffff";
    root.style.setProperty("--primary-foreground", primaryFg);
    root.style.setProperty("--sidebar-primary-foreground", primaryFg);
    
    // Apply new white-label settings
    root.style.setProperty("--radius", `${radius}rem`);
    window.document.body.style.fontFamily = fontFamily === "System" 
      ? "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" 
      : `'${fontFamily}', sans-serif`;

    localStorage.setItem("app-theme-color", color);
    localStorage.setItem("app-theme-radius", radius.toString());
    localStorage.setItem("app-theme-font", fontFamily);
    localStorage.setItem("app-theme-logo", logoUrl);
    localStorage.setItem("app-theme-name", companyName);
  }, [color, radius, fontFamily, logoUrl, companyName]);

  return (
    <ThemeContext.Provider value={{ 
      color, setColor, 
      radius, setRadius, 
      fontFamily, setFontFamily, 
      logoUrl, setLogoUrl, 
      companyName, setCompanyName 
    }}>
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
