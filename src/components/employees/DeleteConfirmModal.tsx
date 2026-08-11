import { X, AlertTriangle } from "lucide-react";
import { OrgNodeData } from "./org-data";

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  node: OrgNodeData | null;
}

export function DeleteConfirmModal({ isOpen, onClose, onConfirm, node }: DeleteConfirmModalProps) {
  if (!isOpen || !node) return null;

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
        <div 
          className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden flex flex-col text-left animate-in zoom-in-95 duration-200 relative my-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-red-50/50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 text-red-600 rounded-xl">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900">Remove Employee</h2>
                <p className="text-sm text-slate-500 mt-1">Confirm deletion of {node.name}</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-4">
            {hasChildren ? (
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-sm font-medium">
                <span className="font-bold block mb-1">Warning: Direct Reports Found</span>
                {node.name} has {node.children!.length} direct report(s). Deleting them will also remove their entire team from the organization chart.
              </div>
            ) : (
              <p className="text-slate-600 text-sm">
                Are you sure you want to remove <strong>{node.name}</strong> from the organization chart? This action cannot be undone.
              </p>
            )}

            <div className="pt-4 flex justify-end gap-3">
              <button 
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button 
                type="button"
                onClick={() => {
                  onConfirm();
                  onClose();
                }}
                className="px-6 py-2.5 text-sm font-bold text-white bg-red-500 hover:bg-red-600 rounded-xl transition-all shadow-sm shadow-red-500/20 active:scale-95"
              >
                {hasChildren ? "Delete Entire Branch" : "Remove Employee"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
