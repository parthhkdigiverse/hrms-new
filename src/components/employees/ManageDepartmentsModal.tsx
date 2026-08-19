import { useState } from "react";
import { X, Plus, Trash2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useDepartments } from "./DepartmentContext";
import { toast } from "sonner";

interface ManageDepartmentsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ManageDepartmentsModal({ isOpen, onClose }: ManageDepartmentsModalProps) {
  const { departments, addDepartment, removeDepartment } = useDepartments();
  const [newDept, setNewDept] = useState("");

  if (!isOpen) return null;

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDept.trim()) return;
    if (departments.includes(newDept.trim())) {
      toast.error("Department already exists");
      return;
    }
    addDepartment(newDept.trim());
    setNewDept("");
    toast.success("Department added");
  };

  const handleRemove = (dept: string) => {
    removeDepartment(dept);
    toast.success("Department removed");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md p-0 overflow-hidden rounded-3xl gap-0 border-border/60 shadow-2xl [&>button]:hidden bg-white">
          <div className="flex items-center justify-between px-6 py-5 border-b border-border/50 bg-muted/50/50">
            <div>
              <h2 className="text-xl font-black text-foreground">Manage Departments</h2>
              <p className="text-sm text-muted-foreground mt-1">Add or remove organization departments.</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-muted-foreground hover:text-foreground/80 hover:bg-muted rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6">
            <form onSubmit={handleAdd} className="flex gap-2 mb-6">
              <input 
                type="text" 
                value={newDept}
                onChange={(e) => setNewDept(e.target.value)}
                placeholder="New department name..."
                className="flex-1 px-4 py-2 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A56C]/20 focus:border-[#00A56C]/50 transition-all"
              />
              <button 
                type="submit"
                disabled={!newDept.trim()}
                className="px-4 py-2 bg-[#00A56C] hover:bg-[#00A56C]/90 text-white rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            </form>

            <div className="space-y-2 max-h-[40vh] overflow-y-auto pr-2">
              {departments.length === 0 ? (
                <p className="text-center text-sm text-muted-foreground py-4">No departments found.</p>
              ) : (
                departments.map(dept => (
                  <div key={dept} className="flex items-center justify-between p-3 bg-white border border-border rounded-xl">
                    <span className="text-sm font-bold text-foreground/80">{dept}</span>
                    <button 
                      onClick={() => handleRemove(dept)}
                      className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Remove department"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
      </DialogContent>
    </Dialog>
  );
}
