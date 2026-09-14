import type { ReactNode } from "react";
import { useRole } from "@/hooks/useRole";
import type { Permission } from "@/lib/permissions";
import { AccessDenied } from "./AccessDenied";

interface PermissionGateProps {
  permission: Permission;
  pageName: string;
  children: ReactNode;
  onGoHome: () => void;
}

/**
 * Renders children if the current role has the required permission.
 * Otherwise renders a full-page AccessDenied screen.
 */
export function PermissionGate({ permission, pageName, children, onGoHome }: PermissionGateProps) {
  const { hasPermission } = useRole();

  if (!hasPermission(permission)) {
    return (
      <AccessDenied
        pageName={pageName}
        requiredPermission={permission}
        onGoHome={onGoHome}
      />
    );
  }

  return <>{children}</>;
}
