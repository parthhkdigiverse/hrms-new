import { X, AlertTriangle } from "lucide-react";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmText?: string | undefined;
  itemName?: string | undefined;
}

export function ConfirmModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  description,
  confirmText = "Delete",
  itemName
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] overflow-y-auto bg-card/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
        <div 
          className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden flex flex-col text-left animate-in zoom-in-95 duration-200 relative my-auto border border-border/50"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-border/50 bg-red-50/50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 text-red-600 rounded-xl">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-black text-foreground">{title}</h2>
                {itemName && <p className="text-sm text-muted-foreground mt-1">Confirm deletion of {itemName}</p>}
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-muted-foreground hover:text-foreground/80 hover:bg-muted rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-4">
            <p className="text-foreground/80 text-sm leading-relaxed">
              {description}
            </p>

            <div className="pt-4 flex justify-end gap-3">
              <button 
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 text-sm font-bold text-foreground/80 hover:bg-muted rounded-xl transition-colors"
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
                {confirmText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
