import { Settings, Save, Palette, Paintbrush } from "lucide-react";
import { toast } from "sonner";
import { useTheme } from "../ThemeProvider";

export function AdminSettings() {
  const { color, setColor } = useTheme();

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8 pb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground mb-1">
            <span>Dashboard</span>
            <span>/</span>
            <span className="text-foreground">Admin Settings</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">Global Configuration</h1>
          <p className="text-muted-foreground mt-2 font-medium">Manage platform-wide settings and branding.</p>
        </div>
        <button onClick={() => toast.success("Settings saved successfully!")} className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:bg-primary/90 transition-colors">
          <Save className="w-4 h-4" /> Save Changes
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Theme Settings Card */}
        <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <Palette className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-black">Appearance & Branding</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Select the primary brand color. The platform will automatically generate matching backgrounds, sidebars, and chart palettes.
          </p>
          
          <div className="flex flex-col gap-4 mt-auto">
            <div className="flex items-center gap-4 p-4 border border-border rounded-2xl bg-muted/30">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-background shadow-md">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="absolute inset-[-10px] w-24 h-24 cursor-pointer"
                />
              </div>
              <div>
                <div className="text-sm font-bold">Brand Color</div>
                <div className="text-xs text-muted-foreground uppercase">{color}</div>
              </div>
              <Paintbrush className="w-5 h-5 ml-auto text-muted-foreground opacity-50" />
            </div>
          </div>
          
        </div>

        {/* Placeholder for other admin settings */}
        <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-sm flex flex-col opacity-50 cursor-not-allowed">
          <div className="flex items-center gap-2 mb-4">
            <Settings className="w-5 h-5 text-muted-foreground" />
            <h3 className="text-lg font-black">Security Options</h3>
          </div>
          <p className="text-sm text-muted-foreground">Configure 2FA, session timeouts, and password policies.</p>
          <div className="mt-auto pt-6">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Coming Soon</div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
