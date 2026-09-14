import { ShieldX, Home, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Permission } from "@/lib/permissions";
import { PERMISSION_META } from "@/lib/permissions";

interface AccessDeniedProps {
  pageName: string;
  requiredPermission: Permission;
  onGoHome: () => void;
}

export function AccessDenied({ pageName, requiredPermission, onGoHome }: AccessDeniedProps) {
  const meta = PERMISSION_META[requiredPermission];

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6 select-none">
      {/* Glow orb */}
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full bg-rose-500/20 blur-2xl scale-150" />
        <div
          className={cn(
            "relative flex items-center justify-center w-24 h-24 rounded-2xl",
            "bg-gradient-to-br from-rose-500/10 to-rose-600/20",
            "border border-rose-500/30 shadow-2xl shadow-rose-500/10"
          )}
        >
          <ShieldX className="w-10 h-10 text-rose-400" strokeWidth={1.5} />
        </div>
        {/* Small lock badge */}
        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center shadow-lg shadow-rose-500/30 border-2 border-background">
          <Lock className="w-3.5 h-3.5 text-white" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-black text-foreground mb-2 tracking-tight">
        Access Restricted
      </h2>
      <p className="text-muted-foreground text-sm font-medium mb-1">
        You don't have permission to view{" "}
        <span className="text-foreground font-bold">{pageName}</span>.
      </p>

      {/* Required permission chip */}
      <div className="flex items-center gap-2 mt-4 mb-6 px-4 py-2.5 rounded-xl bg-rose-500/8 border border-rose-500/20">
        <Lock className="w-3.5 h-3.5 text-rose-400 shrink-0" />
        <div className="text-left">
          <p className="text-[11px] font-bold text-rose-400 uppercase tracking-widest">Required Permission</p>
          <p className="text-sm font-semibold text-foreground leading-tight">{meta.label}</p>
          <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">{meta.description}</p>
        </div>
      </div>

      {/* Hint */}
      <p className="text-xs text-muted-foreground mb-6 max-w-xs">
        Use the <span className="font-bold text-indigo-400">Access Control Panel</span> (bottom-right) to grant this permission or switch to a higher role.
      </p>

      {/* CTA */}
      <button
        onClick={onGoHome}
        className={cn(
          "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold",
          "bg-indigo-600 hover:bg-indigo-500 text-white",
          "transition-all shadow-lg shadow-indigo-500/20 hover:scale-105 active:scale-95"
        )}
      >
        <Home className="w-4 h-4" />
        Go to Dashboard
      </button>
    </div>
  );
}
