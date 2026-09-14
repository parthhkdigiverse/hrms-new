import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { ROLE_DEFAULTS, type Permission } from "@/lib/permissions";

export type { Permission };
export type RoleType = "CEO" | "Manager" | "HR" | "Team Leader" | "Employee";

interface RoleContextType {
  role: RoleType;
  setRole: (role: RoleType) => void;
  /** Explicit overrides — can ADD or REVOKE permissions on top of role defaults */
  grantedOverrides: Permission[];
  revokedOverrides: Permission[];
  setGrantedOverrides: (p: Permission[]) => void;
  setRevokedOverrides: (p: Permission[]) => void;
  hasPermission: (permission: Permission) => boolean;
  /** All effective permissions for the current role + overrides */
  effectivePermissions: Set<Permission>;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRoleState] = useState<RoleType>("Employee");
  const [grantedOverrides, setGrantedOverrides] = useState<Permission[]>([]);
  const [revokedOverrides, setRevokedOverrides] = useState<Permission[]>([]);

  const setRole = useCallback((newRole: RoleType) => {
    setRoleState(newRole);
    // Reset overrides when switching roles
    setGrantedOverrides([]);
    setRevokedOverrides([]);
  }, []);

  const effectivePermissions = React.useMemo<Set<Permission>>(() => {
    const base = new Set<Permission>(ROLE_DEFAULTS[role]);
    // Apply grants (add non-default permissions)
    for (const p of grantedOverrides) base.add(p);
    // Apply revocations (remove defaults or grants)
    for (const p of revokedOverrides) base.delete(p);
    return base;
  }, [role, grantedOverrides, revokedOverrides]);

  const hasPermission = useCallback(
    (permission: Permission) => effectivePermissions.has(permission),
    [effectivePermissions]
  );

  return (
    <RoleContext.Provider
      value={{
        role,
        setRole,
        grantedOverrides,
        revokedOverrides,
        setGrantedOverrides,
        setRevokedOverrides,
        hasPermission,
        effectivePermissions,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return context;
}
