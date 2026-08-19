import { X, AlertTriangle } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md p-0 overflow-hidden rounded-3xl gap-0 border-border/60 shadow-2xl [&>button]:hidden bg-white">
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
      </DialogContent>
    </Dialog>
  );
}
