/**
 * permissions.ts
 * ─────────────────────────────────────────────────────────────
 * Central RBAC registry for the HRMS mock.
 *
 * Three exports:
 *  1. Permission (type)      — union of every valid permission key
 *  2. ROLE_DEFAULTS          — base permissions granted per role
 *  3. PAGE_PERMISSIONS       — per-route: required view perm + grantable perms for the Control Panel
 */

import type { RoleType } from "@/hooks/useRole";

// ─── Permission Keys ──────────────────────────────────────────
export type Permission =
  // ── Dashboard ──
  | "view_dashboard"

  // ── Approvals Hub ──
  | "view_approvals_hub"
  | "approve_leaves"
  | "manage_penalties"
  | "view_daily_progress"
  | "view_approval_history"

  // ── Reports ──
  | "view_reports"

  // ── Employees ──
  | "view_employees"
  | "edit_employees"
  | "view_salaries"
  | "view_org"
  | "view_attendance"
  | "manage_leaves"
  | "manage_documents"

  // ── Recruitment ──
  | "view_recruitment"
  | "manage_recruitment"

  // ── Schedule ──
  | "view_schedule"
  | "edit_schedule"

  // ── Payroll ──
  | "view_payroll"
  | "manage_payroll"
  | "view_own_payslip"

  // ── Finance ──
  | "view_finance"
  | "manage_finance"

  // ── Invoice ──
  | "view_invoices"
  | "create_invoices"

  // ── Sales ──
  | "view_sales"
  | "manage_sales"

  // ── Work ──
  | "view_projects"
  | "view_work_logs"
  | "view_research"
  | "view_tasks"
  | "view_chat"

  // ── Workspace ──
  | "view_workspace"
  | "manage_workspace"

  // ── Penalty / Remarks ──
  | "view_penalties"
  | "view_remarks"

  // ── Command Center ──
  | "view_command_center"

  // ── Admin ──
  | "view_activity_tracker"
  | "view_elections"
  | "manage_settings"
  | "manage_restrictions"
  | "view_activity_logs"
  | "manage_recycle_bin"

  // ── Learning ──
  | "view_learning"
  | "manage_courses"
  | "assign_courses"
  | "view_approvals"; // approve certificates

// ─── Role Default Permissions ─────────────────────────────────
// These are the permissions automatically granted to each role.
// The Control Panel can add overrides ON TOP of these.
// A user can also explicitly revoke a role default via the Control Panel toggle.

export const ROLE_DEFAULTS: Record<RoleType, Permission[]> = {
  CEO: [
    "view_dashboard",
    "view_approvals_hub", "approve_leaves", "manage_penalties", "view_daily_progress", "view_approval_history",
    "view_reports",
    "view_employees", "edit_employees", "view_salaries", "view_org", "view_attendance", "manage_leaves", "manage_documents",
    "view_recruitment", "manage_recruitment",
    "view_schedule", "edit_schedule",
    "view_payroll", "manage_payroll", "view_own_payslip",
    "view_finance", "manage_finance",
    "view_invoices", "create_invoices",
    "view_sales", "manage_sales",
    "view_projects", "view_work_logs", "view_research", "view_tasks", "view_chat",
    "view_workspace", "manage_workspace",
    "view_penalties", "view_remarks",
    "view_command_center",
    "view_activity_tracker", "view_elections", "manage_settings", "manage_restrictions", "view_activity_logs", "manage_recycle_bin",
    "view_learning", "manage_courses", "assign_courses", "view_approvals",
  ],
  Manager: [
    "view_dashboard",
    "view_approvals_hub", "approve_leaves", "manage_penalties", "view_daily_progress", "view_approval_history",
    "view_reports",
    "view_employees", "edit_employees", "view_org", "view_attendance", "manage_leaves", "manage_documents",
    "view_recruitment", "manage_recruitment",
    "view_schedule", "edit_schedule",
    "view_payroll", "view_own_payslip",
    "view_finance",
    "view_invoices", "create_invoices",
    "view_sales", "manage_sales",
    "view_projects", "view_work_logs", "view_research", "view_tasks", "view_chat",
    "view_workspace", "manage_workspace",
    "view_penalties", "view_remarks",
    "view_activity_tracker", "view_elections",
    "view_activity_logs",
    "view_learning", "manage_courses", "assign_courses", "view_approvals",
  ],
  HR: [
    "view_dashboard",
    "view_approvals_hub", "approve_leaves", "manage_penalties", "view_daily_progress", "view_approval_history",
    "view_reports",
    "view_employees", "edit_employees", "view_salaries", "view_org", "view_attendance", "manage_leaves", "manage_documents",
    "view_recruitment", "manage_recruitment",
    "view_schedule", "edit_schedule",
    "view_payroll", "manage_payroll", "view_own_payslip",
    "view_invoices",
    "view_projects", "view_work_logs", "view_research", "view_tasks", "view_chat",
    "view_workspace", "manage_workspace",
    "view_penalties", "view_remarks",
    "view_activity_tracker", "view_elections",
    "view_activity_logs",
    "view_learning", "manage_courses", "assign_courses", "view_approvals",
  ],
  "Team Leader": [
    "view_dashboard",
    "view_approvals_hub", "view_daily_progress",
    "view_employees", "view_org", "view_attendance", "manage_leaves",
    "view_schedule",
    "view_own_payslip",
    "view_sales", "manage_sales",
    "view_projects", "view_work_logs", "view_research", "view_tasks", "view_chat",
    "view_workspace",
    "view_penalties", "view_remarks",
    "view_elections",
    "view_learning",
  ],
  Employee: [
    "view_dashboard",
    "view_org",
    "manage_leaves",
    "view_schedule",
    "view_own_payslip",
    "view_sales",
    "view_projects", "view_work_logs", "view_research", "view_tasks", "view_chat",
    "view_remarks",
    "view_elections",
    "view_learning",
  ],
};

// ─── Grantable Permission Metadata ───────────────────────────
// Used by the Control Panel to show human-readable labels/descriptions.
export type PermissionMeta = {
  id: Permission;
  label: string;
  description: string;
};

export const PERMISSION_META: Record<Permission, PermissionMeta> = {
  view_dashboard:         { id: "view_dashboard",         label: "View Dashboard",             description: "Access the main dashboard overview." },
  view_approvals_hub:     { id: "view_approvals_hub",     label: "View Approvals Hub",         description: "Access the Approvals Hub section in the sidebar." },
  approve_leaves:         { id: "approve_leaves",         label: "Approve Leave Requests",     description: "Approve or reject employee leave applications." },
  manage_penalties:       { id: "manage_penalties",       label: "Manage Penalties",           description: "Issue and manage employee penalty records." },
  view_daily_progress:    { id: "view_daily_progress",    label: "View Daily Progress",        description: "View team daily work progress reports." },
  view_approval_history:  { id: "view_approval_history",  label: "View Approval History",      description: "Access historical approval decisions." },
  view_reports:           { id: "view_reports",           label: "View Reports & Analytics",   description: "Access company-wide reports and analytics." },
  view_employees:         { id: "view_employees",         label: "View Employee List",         description: "View the full employee directory." },
  edit_employees:         { id: "edit_employees",         label: "Edit Employee Records",      description: "Add, edit, or remove employee profiles." },
  view_salaries:          { id: "view_salaries",          label: "View Salary Information",    description: "Access private salary data for all employees." },
  view_org:               { id: "view_org",               label: "View Org Structure",         description: "View the company organisational chart." },
  view_attendance:        { id: "view_attendance",        label: "View Attendance List",       description: "View employee attendance records." },
  manage_leaves:          { id: "manage_leaves",          label: "Manage Leave Requests",      description: "Submit and view leave requests." },
  manage_documents:       { id: "manage_documents",       label: "Manage Employee Documents",  description: "Upload and manage HR document files." },
  view_recruitment:       { id: "view_recruitment",       label: "View Recruitment",           description: "Access recruitment interviews and hiring data." },
  manage_recruitment:     { id: "manage_recruitment",     label: "Manage Recruitment",         description: "Create and update job openings and candidate records." },
  view_schedule:          { id: "view_schedule",          label: "View Schedule",              description: "View the company calendar and schedule." },
  edit_schedule:          { id: "edit_schedule",          label: "Edit Schedule",              description: "Create and modify schedule entries." },
  view_payroll:           { id: "view_payroll",           label: "View Payroll",               description: "Access payroll dashboard, structure and processing." },
  manage_payroll:         { id: "manage_payroll",         label: "Manage Payroll",             description: "Run payroll, configure salary structures and process bonuses." },
  view_own_payslip:       { id: "view_own_payslip",       label: "View Own Payslip",           description: "Access your personal payslip." },
  view_finance:           { id: "view_finance",           label: "View Company Finance",       description: "Read-only access to financial records and summaries." },
  manage_finance:         { id: "manage_finance",         label: "Manage Company Finance",     description: "Create and edit company financial transactions and plans." },
  view_invoices:          { id: "view_invoices",          label: "View Invoices",              description: "Access the invoice list and ledger." },
  create_invoices:        { id: "create_invoices",        label: "Create Invoices",            description: "Create new invoices and proforma invoices." },
  view_sales:             { id: "view_sales",             label: "View Sales",                 description: "Access sales dashboard, pipeline and leads." },
  manage_sales:           { id: "manage_sales",           label: "Manage Sales",               description: "Create and edit leads, deals and sales settings." },
  view_projects:          { id: "view_projects",          label: "View Projects",              description: "Access client projects and project data." },
  view_work_logs:         { id: "view_work_logs",         label: "View Work Logs",             description: "Access the work log entries." },
  view_research:          { id: "view_research",          label: "View Research",              description: "Access the research module." },
  view_tasks:             { id: "view_tasks",             label: "View Tasks",                 description: "Access the task management board." },
  view_chat:              { id: "view_chat",              label: "View Chat",                  description: "Access the team chat." },
  view_workspace:         { id: "view_workspace",         label: "View Workspace",             description: "Access workspace seating, resources and gallery." },
  manage_workspace:       { id: "manage_workspace",       label: "Manage Workspace",           description: "Edit seating arrangements and resource allocations." },
  view_penalties:         { id: "view_penalties",         label: "View Penalties",             description: "View issued penalty records." },
  view_remarks:           { id: "view_remarks",           label: "View Remarks",               description: "Access team remarks and feedback." },
  view_command_center:    { id: "view_command_center",    label: "View Command Center",        description: "Access the CEO Command Center (B2B, Franchise, Collaboration)." },
  view_activity_tracker:  { id: "view_activity_tracker",  label: "View Activity Tracker",      description: "Monitor real-time employee activity." },
  view_elections:         { id: "view_elections",         label: "View Elections & Recognition", description: "Access employee recognition programs and internal elections." },
  manage_settings:        { id: "manage_settings",        label: "Manage Admin Settings",      description: "Configure system-wide HRMS settings." },
  manage_restrictions:    { id: "manage_restrictions",    label: "Manage Restrictions",        description: "Set and enforce access and usage restrictions." },
  view_activity_logs:     { id: "view_activity_logs",     label: "View Activity Logs",         description: "Review full audit trail of system activity." },
  manage_recycle_bin:     { id: "manage_recycle_bin",     label: "Manage Recycle Bin",         description: "Restore or permanently delete archived records." },
  view_learning:          { id: "view_learning",          label: "View Learning Hub",          description: "Access learning dashboard, course catalog and own courses." },
  manage_courses:         { id: "manage_courses",         label: "Manage Courses",             description: "Create, edit, and delete training courses." },
  assign_courses:         { id: "assign_courses",         label: "Assign Courses",             description: "Assign required courses to employees." },
  view_approvals:         { id: "view_approvals",         label: "Approve Certificates",       description: "Review and approve or reject certificate requests." },
};

// ─── Page Permission Map ──────────────────────────────────────
// Maps URL path prefixes → { view: the required permission, grantable: permissions shown in Control Panel }
export type PagePermissionConfig = {
  /** Permission required to see this page at all */
  view: Permission;
  /** Human-readable page name (used in AccessDenied) */
  name: string;
  /** Permissions surfaced in the Control Panel when on this page */
  grantable: Permission[];
};

export const PAGE_PERMISSIONS: { pathPrefix: string; config: PagePermissionConfig }[] = [
  // Dashboard
  {
    pathPrefix: "/dashboard",
    config: {
      view: "view_dashboard", name: "Dashboard",
      grantable: [],
    },
  },

  // Approvals
  {
    pathPrefix: "/employees/leave-requests",
    config: {
      view: "view_approvals_hub", name: "Leave Requests",
      grantable: ["approve_leaves", "manage_leaves"],
    },
  },
  {
    pathPrefix: "/approvals/penalties",
    config: {
      view: "view_approvals_hub", name: "Penalties Approvals",
      grantable: ["manage_penalties"],
    },
  },
  {
    pathPrefix: "/approvals/daily-progress",
    config: {
      view: "view_daily_progress", name: "Daily Progress",
      grantable: ["view_daily_progress"],
    },
  },
  {
    pathPrefix: "/approvals/history",
    config: {
      view: "view_approval_history", name: "Approval History",
      grantable: ["view_approval_history"],
    },
  },
  {
    pathPrefix: "/approvals/invoices",
    config: {
      view: "view_invoices", name: "Invoice Approvals",
      grantable: ["view_invoices", "create_invoices"],
    },
  },

  // Reports
  {
    pathPrefix: "/reports",
    config: {
      view: "view_reports", name: "Reports & Analytics",
      grantable: ["view_reports"],
    },
  },

  // Employees
  {
    pathPrefix: "/employees/list",
    config: {
      view: "view_employees", name: "Employee List",
      grantable: ["view_employees", "edit_employees", "view_salaries", "manage_documents"],
    },
  },
  {
    pathPrefix: "/employees/org",
    config: {
      view: "view_org", name: "Org Structure",
      grantable: ["view_org"],
    },
  },
  {
    pathPrefix: "/employees/attendance",
    config: {
      view: "view_attendance", name: "Attendance List",
      grantable: ["view_attendance"],
    },
  },
  {
    pathPrefix: "/employees/documents",
    config: {
      view: "manage_documents", name: "Employee Documents",
      grantable: ["manage_documents"],
    },
  },

  // Recruitment
  {
    pathPrefix: "/recruitment",
    config: {
      view: "view_recruitment", name: "Recruitment",
      grantable: ["view_recruitment", "manage_recruitment"],
    },
  },

  // Schedule
  {
    pathPrefix: "/schedule",
    config: {
      view: "view_schedule", name: "Schedule",
      grantable: ["view_schedule", "edit_schedule"],
    },
  },

  // Payroll
  {
    pathPrefix: "/payroll/payslips",
    config: {
      view: "view_own_payslip", name: "Payslips",
      grantable: ["view_own_payslip", "view_payroll"],
    },
  },
  {
    pathPrefix: "/payroll",
    config: {
      view: "view_payroll", name: "Payroll",
      grantable: ["view_payroll", "manage_payroll", "view_own_payslip"],
    },
  },

  // Finance
  {
    pathPrefix: "/finance",
    config: {
      view: "view_finance", name: "Company Finance",
      grantable: ["view_finance", "manage_finance"],
    },
  },

  // Invoice
  {
    pathPrefix: "/invoice/create",
    config: {
      view: "create_invoices", name: "Create Invoice",
      grantable: ["view_invoices", "create_invoices"],
    },
  },
  {
    pathPrefix: "/invoice/proforma",
    config: {
      view: "create_invoices", name: "Create Proforma Invoice",
      grantable: ["view_invoices", "create_invoices"],
    },
  },
  {
    pathPrefix: "/invoice",
    config: {
      view: "view_invoices", name: "Invoices",
      grantable: ["view_invoices", "create_invoices"],
    },
  },

  // Sales
  {
    pathPrefix: "/work/sales",
    config: {
      view: "view_sales", name: "Sales",
      grantable: ["view_sales", "manage_sales"],
    },
  },

  // Work
  {
    pathPrefix: "/work/projects",
    config: {
      view: "view_projects", name: "Clients & Projects",
      grantable: ["view_projects"],
    },
  },
  {
    pathPrefix: "/work/logs",
    config: {
      view: "view_work_logs", name: "Work Logs",
      grantable: ["view_work_logs"],
    },
  },
  {
    pathPrefix: "/work/research",
    config: {
      view: "view_research", name: "Research",
      grantable: ["view_research"],
    },
  },
  {
    pathPrefix: "/tasks",
    config: {
      view: "view_tasks", name: "Tasks",
      grantable: ["view_tasks"],
    },
  },
  {
    pathPrefix: "/chat",
    config: {
      view: "view_chat", name: "Chat",
      grantable: ["view_chat"],
    },
  },

  // Workspace
  {
    pathPrefix: "/workspace",
    config: {
      view: "view_workspace", name: "Workspace",
      grantable: ["view_workspace", "manage_workspace"],
    },
  },

  // Penalty & Remarks
  {
    pathPrefix: "/penalty",
    config: {
      view: "view_penalties", name: "Penalties",
      grantable: ["view_penalties", "manage_penalties"],
    },
  },
  {
    pathPrefix: "/remarks",
    config: {
      view: "view_remarks", name: "Remarks",
      grantable: ["view_remarks"],
    },
  },

  // Command Center
  {
    pathPrefix: "/ceo-dashboard",
    config: {
      view: "view_command_center", name: "Command Center",
      grantable: ["view_command_center"],
    },
  },

  // Admin
  {
    pathPrefix: "/activity-tracker",
    config: {
      view: "view_activity_tracker", name: "Activity Tracker",
      grantable: ["view_activity_tracker"],
    },
  },
  {
    pathPrefix: "/elections",
    config: {
      view: "view_elections", name: "Elections",
      grantable: ["view_elections"],
    },
  },
  {
    pathPrefix: "/recognitions",
    config: {
      view: "view_elections", name: "Employee Recognition",
      grantable: ["view_elections"],
    },
  },
  {
    pathPrefix: "/team-leader-of-the-week",
    config: {
      view: "view_elections", name: "Team Leader of the Week",
      grantable: ["view_elections"],
    },
  },
  {
    pathPrefix: "/settings",
    config: {
      view: "manage_settings", name: "Admin Settings",
      grantable: ["manage_settings"],
    },
  },
  {
    pathPrefix: "/restrictions",
    config: {
      view: "manage_restrictions", name: "Restrictions",
      grantable: ["manage_restrictions"],
    },
  },
  {
    pathPrefix: "/activity-logs",
    config: {
      view: "view_activity_logs", name: "Activity Logs",
      grantable: ["view_activity_logs"],
    },
  },
  {
    pathPrefix: "/recycle-bin",
    config: {
      view: "manage_recycle_bin", name: "Recycle Bin",
      grantable: ["manage_recycle_bin"],
    },
  },

  // Learning
  {
    pathPrefix: "/learning",
    config: {
      view: "view_learning", name: "Learning Hub",
      grantable: ["view_learning", "manage_courses", "assign_courses", "view_approvals"],
    },
  },
];

/**
 * Given a current active path, returns the best-matching PagePermissionConfig.
 * Tries the longest matching prefix first.
 */
export function getPageConfig(path: string): PagePermissionConfig | null {
  const cleanPath = path.split("?")[0] ?? "";
  // Sort by prefix length descending so most-specific wins
  const sorted = [...PAGE_PERMISSIONS].sort((a, b) => b.pathPrefix.length - a.pathPrefix.length);
  for (const { pathPrefix, config } of sorted) {
    if (cleanPath.startsWith(pathPrefix)) return config;
  }
  return null;
}

/**
 * Returns the set of nav URL prefixes that a given set of permissions can access.
 * Used for sidebar filtering.
 */
export function getAccessiblePrefixes(permissions: Set<Permission>): string[] {
  return PAGE_PERMISSIONS
    .filter(({ config }) => permissions.has(config.view))
    .map(({ pathPrefix }) => pathPrefix);
}
