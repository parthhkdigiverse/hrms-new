import React, { useState } from "react";
import { Edit2, Plus, Trash2, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export interface SpotlightEmployee {
  name: string;
  role: string;
  image?: string;
}

interface SpotlightEditorProps {
  spotlights: SpotlightEmployee[];
  setSpotlights: (data: SpotlightEmployee[]) => void;
}

export function SpotlightEditor({ spotlights, setSpotlights }: SpotlightEditorProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Form state
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newImage, setNewImage] = useState("");

  const handleAdd = () => {
    if (!newName || !newRole) return;
    
    const newSpotlight: SpotlightEmployee = {
      name: newName,
      role: newRole,
    };
    if (newImage) newSpotlight.image = newImage;
    
    setSpotlights([...spotlights, newSpotlight]);
    setNewName("");
    setNewRole("");
    setNewImage("");
  };

  const handleRemove = (index: number) => {
    const updated = [...spotlights];
    updated.splice(index, 1);
    setSpotlights(updated);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold transition-all border border-white/20 shadow-xl opacity-0 group-hover:opacity-100 focus:opacity-100">
          <Edit2 className="w-3 h-3" />
          Manage Spotlight
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-card rounded-3xl p-6 border border-border shadow-2xl">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-xl font-black flex items-center gap-2">
            <Edit2 className="w-5 h-5 text-primary" />
            Manage Spotlight
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Current List */}
          <div>
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Current Rotation</h4>
            <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
              {spotlights.length === 0 ? (
                <div className="text-sm text-muted-foreground italic p-4 text-center border border-dashed rounded-xl">No employees in spotlight</div>
              ) : (
                spotlights.map((emp, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-border/60 bg-muted/30">
                    <div className="flex items-center gap-3">
                      {emp.image ? (
                        <img src={emp.image} alt={emp.name} className="w-10 h-10 rounded-full object-cover shadow-sm" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                          {emp.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-bold text-foreground leading-tight">{emp.name}</p>
                        <p className="text-[11px] text-muted-foreground">{emp.role}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleRemove(i)}
                      className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="h-[1px] bg-border w-full" />

          {/* Add New */}
          <div>
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Add to Spotlight</h4>
            <div className="space-y-3">
              <input 
                type="text" 
                placeholder="Employee Name" 
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input 
                type="text" 
                placeholder="Role / Tagline (e.g., Top Closer)" 
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1.5">Upload Background Image</label>
                <div className="relative">
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setNewImage(reader.result as string);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="w-full text-sm text-foreground file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition-colors border border-border rounded-xl bg-background pr-4 cursor-pointer"
                  />
                  {newImage && (
                    <button 
                      onClick={() => setNewImage("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-destructive/10 text-destructive rounded-full hover:bg-destructive hover:text-white transition-colors"
                      title="Remove image"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
                {newImage && (
                  <div className="mt-2 text-xs text-emerald-600 font-semibold flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" /> Image ready
                  </div>
                )}
              </div>
              <button 
                onClick={handleAdd}
                disabled={!newName || !newRole}
                className="w-full mt-2 bg-primary text-primary-foreground py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Plus className="w-4 h-4" /> Add Employee
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
