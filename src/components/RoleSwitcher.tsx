import React, { useState, useEffect } from "react";
import { useRole, type RoleType } from "@/hooks/useRole";
import {
  ROLE_DEFAULTS,
  PERMISSION_META,
  getPageConfig,
  type Permission,
} from "@/lib/permissions";
import {
  Settings2, X, Shield, Check, ChevronRight, Info,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "@tanstack/react-router";

const ALL_ROLES: RoleType[] = ["CEO", "Manager", "HR", "Team Leader", "Employee"];

const ROLE_COLORS: Record<RoleType, { bg: string; text: string; dot: string }> = {
  CEO:           { bg: "bg-amber-500",   text: "text-amber-700",   dot: "bg-amber-500"   },
  Manager:       { bg: "bg-violet-500",  text: "text-violet-700",  dot: "bg-violet-500"  },
  HR:            { bg: "bg-cyan-500",    text: "text-cyan-700",    dot: "bg-cyan-500"    },
  "Team Leader": { bg: "bg-emerald-500", text: "text-emerald-700", dot: "bg-emerald-500" },
  Employee:      { bg: "bg-slate-400",   text: "text-slate-600",   dot: "bg-slate-400"   },
};

export function RoleSwitcher() {
  const {
    role, setRole,
    grantedOverrides, revokedOverrides,
    setGrantedOverrides, setRevokedOverrides,
    hasPermission,
    effectivePermissions,
  } = useRole();

  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("activeSidebarTab") || router.state.location.pathname;
    }
    return router.state.location.pathname;
  });

  useEffect(() => {
    const handlePathChange = () => {
      setCurrentPath(localStorage.getItem("activeSidebarTab") || router.state.location.pathname);
    };
    window.addEventListener("sidebarTabChanged", handlePathChange);
    return () => window.removeEventListener("sidebarTabChanged", handlePathChange);
  }, [router.state.location.pathname]);

  // Derive the page config for the current path
  const pageConfig = getPageConfig(currentPath);

  // Grantable permissions for this page
  const grantablePerms: Permission[] = pageConfig?.grantable ?? [];

  // Role base permissions set (ignoring overrides)
  const roleBase = new Set<Permission>(ROLE_DEFAULTS[role]);

  const togglePermission = (perm: Permission) => {
    const isRoleDefault = roleBase.has(perm);
    const isGranted = grantedOverrides.includes(perm);
    const isRevoked = revokedOverrides.includes(perm);
    const isCurrentlyEffective = effectivePermissions.has(perm);

    if (isCurrentlyEffective) {
      // Turn OFF: revoke it
      if (isRoleDefault) {
        // It's a role default — add to revokedOverrides
        setRevokedOverrides([...revokedOverrides, perm]);
      } else {
        // It's a granted override — remove from grantedOverrides
        setGrantedOverrides(grantedOverrides.filter(p => p !== perm));
      }
    } else {
      // Turn ON: grant it
      if (isRevoked) {
        // It was revoked — remove from revokedOverrides
        setRevokedOverrides(revokedOverrides.filter(p => p !== perm));
      } else {
        // It's not in role defaults — add as grantedOverride
        setGrantedOverrides([...grantedOverrides, perm]);
      }
    }
  };

  const roleColor = ROLE_COLORS[role];
  const totalEffective = effectivePermissions.size;

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl w-[340px] overflow-hidden animate-in slide-in-from-bottom-2 fade-in duration-200">
          {/* ── Header ── */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-white/80" />
              <h3 className="font-bold text-sm text-white">Access Control Panel</h3>
              <span className="text-[10px] bg-white/20 text-white/90 font-bold px-2 py-0.5 rounded-full">
                MOCK
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-md transition-colors"
            >
              <X className="w-4 h-4 text-white/80" />
            </button>
          </div>

          <div className="p-4 space-y-5 max-h-[75vh] overflow-y-auto">
            {/* ── Active Role ── */}
            <div className="space-y-2.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Active Role
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {ALL_ROLES.map(r => {
                  const c = ROLE_COLORS[r];
                  const isActive = role === r;
                  return (
                    <button
                      key={r}
                      onClick={() => setRole(r)}
                      className={cn(
                        "text-xs font-semibold py-2 px-3 rounded-lg border flex items-center gap-2 transition-all",
                        isActive
                          ? "bg-indigo-500 text-white border-indigo-500 shadow-md shadow-indigo-500/20"
                          : "bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50"
                      )}
                    >
                      <span className={cn("w-2 h-2 rounded-full shrink-0", isActive ? "bg-white" : c.dot)} />
                      {r}
                    </button>
                  );
                })}
              </div>

              {/* Role summary chip */}
              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-[11px] text-slate-500 font-medium">
                  Active permissions
                </span>
                <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                  {totalEffective} granted
                </span>
              </div>
            </div>

            {/* ── Contextual Permissions ── */}
            <div className="space-y-2.5 pt-1 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Page Permissions
                </label>
                {pageConfig && (
                  <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" />
                    {pageConfig.name}
                  </span>
                )}
              </div>

              {grantablePerms.length === 0 ? (
                <div className="p-4 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
                  <Info className="w-4 h-4 text-slate-400 mx-auto mb-1.5" />
                  <p className="text-xs text-slate-500 font-semibold">
                    No configurable permissions for this page.
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Navigate to a page to see its permissions.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {grantablePerms.map(permId => {
                    const meta = PERMISSION_META[permId];
                    const isEffective = effectivePermissions.has(permId);
                    const isDefault = roleBase.has(permId);
                    const isExtraGrant = !isDefault && isEffective;
                    const isRevoked = revokedOverrides.includes(permId);

                    return (
                      <button
                        key={permId}
                        onClick={() => togglePermission(permId)}
                        className={cn(
                          "w-full flex items-start gap-3 p-3 rounded-xl border text-left transition-all",
                          isEffective
                            ? "border-indigo-200 bg-indigo-50/60"
                            : "border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50"
                        )}
                      >
                        {/* Checkbox */}
                        <div
                          className={cn(
                            "mt-0.5 w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-colors",
                            isEffective
                              ? "bg-indigo-500 border-indigo-500 text-white"
                              : "border-slate-300"
                          )}
                        >
                          {isEffective && <Check className="w-3 h-3" />}
                        </div>

                        {/* Label */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="text-sm font-bold text-slate-700 leading-tight">
                              {meta.label}
                            </p>
                            {isDefault && (
                              <span className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                                Role Default
                              </span>
                            )}
                            {isExtraGrant && (
                              <span className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-violet-100 text-violet-700">
                                Custom Grant
                              </span>
                            )}
                            {isRevoked && (
                              <span className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-rose-100 text-rose-700">
                                Revoked
                              </span>
                            )}
                          </div>
                          <p className="text-[10px] text-slate-500 leading-tight mt-0.5">
                            {meta.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* ── Legend ── */}
            <div className="pt-1 border-t border-slate-100">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Legend</p>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700">Role Default</span>
                  <span className="text-[10px] text-slate-500">Granted by the selected role</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-full bg-violet-100 text-violet-700">Custom Grant</span>
                  <span className="text-[10px] text-slate-500">Added on top of role defaults</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-full bg-rose-100 text-rose-700">Revoked</span>
                  <span className="text-[10px] text-slate-500">Removed from role defaults</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-full shadow-2xl shadow-indigo-500/30 transition-all hover:scale-105 group"
        >
          <Settings2 className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          <span className="font-bold text-sm pr-1">Access Control</span>
          {/* Badge showing total active permissions */}
          <span className="bg-white/20 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 leading-none">
            {effectivePermissions.size}
          </span>
        </button>
      )}
    </div>
  );
}
