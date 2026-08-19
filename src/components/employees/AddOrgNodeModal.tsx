import { useState } from "react";
import { X, User, Briefcase, Building2, ShieldAlert } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { OrgNodeData } from "./org-data";
import { toast } from "sonner";
import { useDepartments } from "./DepartmentContext";

interface AddOrgNodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<OrgNodeData, 'id' | 'children'>) => void;
  parentName?: string;
}

export function AddOrgNodeModal({ isOpen, onClose, onSubmit, parentName }: AddOrgNodeModalProps) {
  const { departments } = useDepartments();
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    department: departments[0] || "Engineering",
    status: "Active" as 'Active' | 'On Leave' | 'Remote',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.role || !formData.department) {
      toast.error("Please fill in all fields");
      return;
    }
    
    onSubmit({
      ...formData,
      avatar: `https://i.pravatar.cc/150?u=${(formData.name.split(' ')[0] || "").toLowerCase()}`
    });
    
    // Reset form
    setFormData({
      name: "",
      role: "",
      department: departments[0] || "Engineering",
      status: "Active",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md p-0 overflow-hidden rounded-3xl gap-0 border-border/60 shadow-2xl [&>button]:hidden bg-white">
          <div className="flex items-center justify-between px-6 py-5 border-b border-border/50 bg-muted/50/50">
            <div>
              <h2 className="text-xl font-black text-foreground">Add Team Member</h2>
              <p className="text-sm text-muted-foreground mt-1">
                {parentName ? `Adding new report under ${parentName}` : 'Add a new member to the organization'}
              </p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-muted-foreground hover:text-foreground/80 hover:bg-muted rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="space-y-2">
              <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Full Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2.5 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A56C]/20 focus:border-[#00A56C]/50 transition-all"
                placeholder="e.g. John Doe"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Job Role</label>
              <input 
                type="text" 
                required
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
                className="w-full px-4 py-2.5 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A56C]/20 focus:border-[#00A56C]/50 transition-all"
                placeholder="e.g. Senior Designer"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Department</label>
              <select 
                value={formData.department}
                onChange={(e) => setFormData({...formData, department: e.target.value})}
                className="w-full px-4 py-2.5 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A56C]/20 focus:border-[#00A56C]/50 transition-all"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Status</label>
              <select 
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value as 'Active' | 'On Leave' | 'Remote'})}
                className="w-full px-4 py-2.5 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A56C]/20 focus:border-[#00A56C]/50 transition-all"
              >
                <option value="Active">Active</option>
                <option value="Remote">Remote</option>
                <option value="On Leave">On Leave</option>
              </select>
            </div>

            <div className="pt-4 flex justify-end gap-3">
              <button 
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 text-sm font-bold text-foreground/80 hover:bg-muted rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-6 py-2.5 text-sm font-bold text-white bg-[#00A56C] hover:bg-[#00A56C]/90 rounded-xl transition-all shadow-sm shadow-emerald-500/20 active:scale-95"
              >
                Add Member
              </button>
            </div>
          </form>
      </DialogContent>
    </Dialog>
  );
}
