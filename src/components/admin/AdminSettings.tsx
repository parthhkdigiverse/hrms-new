import React, { useState, useRef, useEffect } from "react";
import { Settings, Save, Palette, Paintbrush, Type, Square, Image as ImageIcon, Briefcase, X, ShieldAlert, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { ConfirmModal } from "@/components/ui/confirm-modal";
import { useTheme } from "../ThemeProvider";
import { useSettingsContext } from "../payroll/SettingsContext";
import { moveToRecycleBin } from "@/lib/recycle-bin";

const FONTS = [
  { value: "System", label: "System Default" },
  { value: "Inter", label: "Inter (Clean & Modern)" },
  { value: "Roboto", label: "Roboto (Google Standard)" },
  { value: "Poppins", label: "Poppins (Geometric Sans)" },
  { value: "Outfit", label: "Outfit (Bold & Techy)" },
  { value: "Playfair Display", label: "Playfair (Elegant Serif)" },
  { value: "Merriweather", label: "Merriweather (Classic Serif)" },
  { value: "Georgia", label: "Georgia (Traditional)" },
  { value: "Trebuchet MS", label: "Trebuchet MS (Clean Humanist)" },
  { value: "Arial", label: "Arial (Standard)" },
  { value: "Helvetica", label: "Helvetica (Standard)" },
  { value: "Times New Roman", label: "Times New Roman (Standard Serif)" },
  { value: "Verdana", label: "Verdana (Wide Sans)" },
  { value: "Tahoma", label: "Tahoma (Standard Sans)" },
  { value: "Palatino", label: "Palatino (Elegant Serif)" },
  { value: "Garamond", label: "Garamond (Classic Serif)" },
  { value: "Impact", label: "Impact (Bold Headline)" },
  { value: "Arial Black", label: "Arial Black (Bold)" },
  { value: "Lucida Console", label: "Lucida Console (Code)" },
  { value: "Monaco", label: "Monaco (Code)" },
  { value: "monospace", label: "Monospace (Code/Tech)" },
  { value: "Courier New", label: "Courier New (Typewriter)" },
  { value: "Comic Sans MS", label: "Comic Sans (Fun)" },
];

function FontSelector({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const filtered = FONTS.filter(f => f.label.toLowerCase().includes(search.toLowerCase()));
  const selected = FONTS.find(f => f.value === value) || FONTS[0];

  return (
    <div className="relative" ref={ref}>
      <button 
        onClick={() => { setOpen(!open); setSearch(""); }}
        className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-border bg-background text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50"
        style={{ fontFamily: selected?.value === "System" ? "inherit" : selected?.value }}
      >
        <span className="flex items-center gap-2">
          <Type className="w-4 h-4 text-muted-foreground" />
          {selected?.label}
        </span>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-xl shadow-xl z-50 max-h-60 flex flex-col overflow-hidden">
          <div className="p-2 border-b border-border">
            <input 
              autoFocus
              type="text"
              placeholder="Search fonts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="overflow-y-auto p-1 custom-scrollbar">
            {filtered.length === 0 ? (
              <div className="p-3 text-sm text-center text-muted-foreground">No fonts found</div>
            ) : (
              filtered.map(font => (
                <button
                  key={font.value}
                  onClick={() => {
                    onChange(font.value);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-muted transition-colors ${font.value === value ? "bg-primary/10 text-primary font-bold" : ""}`}
                  style={{ fontFamily: font.value === "System" ? "inherit" : font.value }}
                >
                  {font.label}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function AdminSettings() {
  const { 
    color, setColor, 
    isGradient, setIsGradient,
    gradientType, setGradientType,
    gradientDirection, setGradientDirection,
    gradientColor2, setGradientColor2,
    radius, setRadius, 
    fontFamily, setFontFamily, 
    logoUrl, setLogoUrl, 
    companyName, setCompanyName 
  } = useTheme();

  const { penaltyTemplates, addPenaltyTemplate, removePenaltyTemplate } = useSettingsContext();
  const [newTemplateLabel, setNewTemplateLabel] = useState("");
  const [newTemplateDesc, setNewTemplateDesc] = useState("");
  const [newTemplateType, setNewTemplateType] = useState<"Penalty" | "Warning">("Penalty");
  const [newTemplateAmount, setNewTemplateAmount] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState<{isOpen: boolean, id: string | null, label: string}>({isOpen: false, id: null, label: ""});

  const confirmRemoveTemplate = () => {
    if (deleteConfirm.id) {
      const template = penaltyTemplates.find(t => t.id === deleteConfirm.id);
      if (template) {
        moveToRecycleBin('Disciplinary Template', template.label, template, 'hrms_settings_context'); // we will figure out where it is stored if needed, but it's okay for now
      }
      removePenaltyTemplate(deleteConfirm.id);
      toast.success("Template removed");
    }
    setDeleteConfirm({ isOpen: false, id: null, label: "" });
  };

  const handleAddTemplate = () => {
    if (!newTemplateLabel.trim()) {
      toast.error("Label is required");
      return;
    }
    addPenaltyTemplate({
      label: newTemplateLabel,
      description: newTemplateDesc,
      type: newTemplateType,
      amount: newTemplateAmount
    });
    setNewTemplateLabel("");
    setNewTemplateDesc("");
    setNewTemplateAmount("");
    toast.success("Template added");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 md:p-8 space-y-8 pb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground mb-1">
            <span>Dashboard</span>
            <span>/</span>
            <span className="text-foreground">Admin Settings</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">Global Configuration</h1>
          <p className="text-muted-foreground mt-2 font-medium">Manage platform-wide settings and white-label branding.</p>
        </div>
        <button onClick={() => toast.success("Settings saved successfully!")} className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:bg-primary/90 transition-colors">
          <Save className="w-4 h-4" /> Save Changes
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        
        {/* Theme Color Card */}
        <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <Palette className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-black">Brand Color</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Select the primary brand color. The platform will automatically generate matching backgrounds, sidebars, and chart palettes.
          </p>
          
          <div className="flex flex-col gap-4 mt-auto">
            {/* Gradient Toggle */}
            <div className="flex items-center justify-between p-3 border border-border rounded-xl bg-muted/20">
              <span className="text-sm font-bold text-foreground">Enable Gradient</span>
              <div className={`w-10 h-6 rounded-full transition-colors relative cursor-pointer ${isGradient ? 'bg-primary' : 'bg-muted border border-border/50'}`} onClick={() => setIsGradient(!isGradient)}>
                <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${isGradient ? 'translate-x-4' : ''}`} />
              </div>
            </div>

            <div className="flex flex-col gap-4 p-4 border border-border rounded-2xl bg-muted/30">
              {/* Primary Color */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-background shadow-sm shrink-0">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="absolute inset-[-10px] w-20 h-20 cursor-pointer"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold">{isGradient ? "Start Color" : "Brand Color"}</div>
                  <div className="text-xs text-muted-foreground uppercase">{color}</div>
                </div>
              </div>

              {/* Gradient Settings */}
              {isGradient && (
                <>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-background shadow-sm shrink-0">
                      <input
                        type="color"
                        value={gradientColor2}
                        onChange={(e) => setGradientColor2(e.target.value)}
                        className="absolute inset-[-10px] w-20 h-20 cursor-pointer"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold">End Color</div>
                      <div className="text-xs text-muted-foreground uppercase">{gradientColor2}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div>
                      <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-1">Type</label>
                      <select 
                        value={gradientType}
                        onChange={(e) => setGradientType(e.target.value as "linear" | "radial")}
                        className="w-full text-xs p-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="linear">Linear</option>
                        <option value="radial">Radial</option>
                      </select>
                    </div>
                    {gradientType === "linear" && (
                      <div>
                        <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-1">Direction</label>
                        <select 
                          value={gradientDirection}
                          onChange={(e) => setGradientDirection(e.target.value)}
                          className="w-full text-xs p-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        >
                          <option value="to right">Right</option>
                          <option value="to left">Left</option>
                          <option value="to bottom">Bottom</option>
                          <option value="to top">Top</option>
                          <option value="to bottom right">Bottom Right</option>
                          <option value="to top left">Top Left</option>
                        </select>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Generated Palette Preview */}
            <div className="mt-2">
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Generated Palette</div>
              <div className="flex gap-2 w-full">
                <div className="flex-1 h-8 rounded-md shadow-sm border border-border/50 transition-colors bg-primary" title="Primary" />
                <div className="flex-1 h-8 rounded-md shadow-sm border border-border/50 transition-colors bg-sidebar-primary" title="Sidebar" />
                <div className="flex-1 h-8 rounded-md shadow-sm border border-border/50 transition-colors" style={{ backgroundColor: 'var(--chart-1)' }} title="Chart 1" />
                <div className="flex-1 h-8 rounded-md shadow-sm border border-border/50 transition-colors" style={{ backgroundColor: 'var(--chart-2)' }} title="Chart 2" />
                <div className="flex-1 h-8 rounded-md shadow-sm border border-border/50 transition-colors" style={{ backgroundColor: 'var(--chart-3)' }} title="Chart 3" />
                <div className="flex-1 h-8 rounded-md shadow-sm border border-border/50 transition-colors" style={{ backgroundColor: 'var(--chart-4)' }} title="Chart 4" />
                <div className="flex-1 h-8 rounded-md shadow-sm border border-border/50 transition-colors" style={{ backgroundColor: 'var(--chart-5)' }} title="Chart 5" />
              </div>
            </div>
          </div>
        </div>

        {/* Brand Identity Card */}
        <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-black">Company Identity</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Update the company name and upload a custom logo for the sidebar.
          </p>
          
          <div className="flex flex-col gap-4 mt-auto">
            <div>
              <label className="block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-wide">Company Name</label>
              <input 
                type="text" 
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-wide">Company Logo</label>
              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full text-sm text-foreground file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-bold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition-colors border border-border rounded-xl bg-background cursor-pointer pr-10 overflow-hidden"
                  />
                  {logoUrl && (
                    <button 
                      onClick={() => setLogoUrl("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-destructive/10 text-destructive rounded-full hover:bg-destructive hover:text-white transition-colors"
                      title="Remove Logo"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
                {logoUrl && (
                  <div className="w-10 h-10 shrink-0 rounded-lg border border-border bg-white flex items-center justify-center overflow-hidden p-1 shadow-sm">
                    <img src={logoUrl} alt="Logo" className="max-w-full max-h-full object-contain" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* UI Elements Card */}
        <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-sm flex flex-col md:col-span-2 xl:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Square className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-black">UI & Typography</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Adjust the shape of UI elements and select a global font family.
          </p>
          
          <div className="flex flex-col gap-6 mt-auto">
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wide">Border Radius</label>
                <span className="text-xs font-bold bg-muted px-2 py-0.5 rounded-md">{radius}rem</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="2" 
                step="0.1" 
                value={radius}
                onChange={(e) => setRadius(parseFloat(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between mt-1 text-[10px] text-muted-foreground font-medium">
                <span>Sharp</span>
                <span>Rounded</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-wide">Global Font Family</label>
              <FontSelector value={fontFamily} onChange={setFontFamily} />
            </div>
          </div>
        </div>
        
      </div>

      {/* Disciplinary Settings */}
      <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-sm flex flex-col md:col-span-2 xl:col-span-3">
        <div className="flex items-center gap-2 mb-4">
          <ShieldAlert className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-black">Disciplinary Templates</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          Manage pre-defined penalty and warning templates for quick selection when adding records.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-3 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
            {penaltyTemplates.filter(t => t.id !== "1").map(t => (
              <div key={t.id} className="flex items-start justify-between p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-muted/30 transition-colors">
                <div>
                  <h4 className="font-bold text-foreground text-sm">{t.label}</h4>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{t.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase ${t.type === 'Penalty' ? 'bg-destructive/10 text-destructive' : 'bg-amber-100 text-amber-700'}`}>
                      {t.type}
                    </span>
                    {t.amount && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-muted text-foreground/70">
                        ₹{t.amount}
                      </span>
                    )}
                  </div>
                </div>
                <button 
                  onClick={() => setDeleteConfirm({ isOpen: true, id: t.id, label: t.label })} 
                  className="p-2 hover:bg-destructive/10 text-muted-foreground hover:text-destructive rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            {penaltyTemplates.length <= 1 && (
              <div className="text-center p-8 text-muted-foreground text-sm border border-dashed border-border rounded-xl">
                No custom templates found.
              </div>
            )}
          </div>

          <div className="bg-muted/30 border border-border rounded-2xl p-5 space-y-4">
            <h4 className="font-bold text-sm text-foreground">Add New Template</h4>
            <input 
              type="text" 
              placeholder="Template Label" 
              value={newTemplateLabel}
              onChange={e => setNewTemplateLabel(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background"
            />
            <select 
              value={newTemplateType}
              onChange={e => setNewTemplateType(e.target.value as "Penalty" | "Warning")}
              className="w-full px-3 py-2 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background"
            >
              <option value="Penalty">Penalty</option>
              <option value="Warning">Warning</option>
            </select>
            {newTemplateType === "Penalty" && (
              <input 
                type="number" 
                placeholder="Default Amount (Optional)" 
                value={newTemplateAmount}
                onChange={e => setNewTemplateAmount(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background"
              />
            )}
            <textarea 
              placeholder="Description" 
              value={newTemplateDesc}
              onChange={e => setNewTemplateDesc(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none bg-background"
            />
            <button 
              onClick={handleAddTemplate}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm py-2 rounded-xl hover:bg-primary/90 transition-colors"
            >
              <Plus className="w-4 h-4" /> Add Template
            </button>
          </div>
        </div>
      </div>

      <ConfirmModal 
        isOpen={deleteConfirm.isOpen}
        onClose={() => setDeleteConfirm({ isOpen: false, id: null, label: "" })}
        onConfirm={confirmRemoveTemplate}
        title="Remove Template"
        description={`Are you sure you want to completely remove the template "${deleteConfirm.label}"?`}
        itemName={deleteConfirm.label}
      />
    </div>
  );
}
