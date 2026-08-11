import { useState } from "react";
import { X, Plus, Trash2 } from "lucide-react";
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
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
        <div 
          className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden flex flex-col text-left animate-in zoom-in-95 duration-200 relative my-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/50">
            <div>
              <h2 className="text-xl font-black text-slate-900">Manage Departments</h2>
              <p className="text-sm text-slate-500 mt-1">Add or remove organization departments.</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
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
                className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A56C]/20 focus:border-[#00A56C]/50 transition-all"
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
                <p className="text-center text-sm text-slate-500 py-4">No departments found.</p>
              ) : (
                departments.map(dept => (
                  <div key={dept} className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl">
                    <span className="text-sm font-bold text-slate-700">{dept}</span>
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
        </div>
      </div>
    </div>
  );
}
