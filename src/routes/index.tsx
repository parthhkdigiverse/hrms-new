import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AppSidebar } from "@/components/AppSidebar";
import { PermissionGate } from "@/components/common/PermissionGate";

// Sales Components
import { SalesDashboard } from "@/components/sales/SalesDashboard";
import { SalesPipeline } from "@/components/sales/SalesPipeline";
import { SalesLeads } from "@/components/sales/SalesLeads";
import { SalesTasks } from "@/components/sales/SalesTasks";
import { SalesAnalytics } from "@/components/sales/SalesAnalytics";
import { SalesTeamPerformance } from "@/components/sales/SalesTeamPerformance";
import { SalesReports } from "@/components/sales/SalesReports";
import { SalesSettings } from "@/components/sales/SalesSettings";
import { PayrollDashboard } from "@/components/payroll/PayrollDashboard";
import { SalaryStructure } from "@/components/payroll/SalaryStructure";
import { PayrollSettings } from "@/components/payroll/PayrollSettings";
import { PayrollProcessing } from "@/components/payroll/PayrollProcessing";
import { BonusDeductions } from "@/components/payroll/BonusDeductions";
import { Payslips } from "@/components/payroll/Payslips";
import { QuickActionModals } from "@/components/sales/QuickActionModals";
import { SalesProvider } from "@/components/sales/SalesContext";
import { Dashboard } from "@/components/dashboard/Dashboard";
import { EmployeeList } from "@/components/employees/EmployeeList";
import { OrgStructure } from "@/components/employees/OrgStructure";
import { AttendanceList } from "@/components/employees/AttendanceList";
import { LeaveRequests } from "@/components/employees/LeaveRequests";
import { toast } from "sonner";
import { DepartmentProvider } from "@/components/employees/DepartmentContext";
import { EmployeeProvider } from "@/components/employees/EmployeeContext";
import { SettingsProvider } from "@/components/payroll/SettingsContext";
import { Interviews } from "@/components/recruitment/Interviews";
import { Hirings } from "@/components/recruitment/Hirings";
import { Schedule } from "@/components/schedule/Schedule";
import { WorkLogs } from "@/components/work/WorkLogs";
import { Tasks } from "@/components/work/Tasks";
import { Chat } from "@/components/work/Chat";
import { Research } from "@/components/work/Research";
import { Projects } from "@/components/work/Projects";
import { Penalties } from "@/components/employees/Penalties";
import { Remarks } from "@/components/employees/Remarks";
import { ActivityLogs } from "@/components/admin/ActivityLogs";
import { ActivityTracker } from "@/components/admin/ActivityTracker";
import { Restrictions } from "@/components/admin/Restrictions";
import { AdminSettings } from "@/components/admin/AdminSettings";
import { RecycleBin } from "@/components/admin/RecycleBin";
import { CEODashboard } from "@/components/admin/CEODashboard";
import { Elections } from "@/components/admin/Elections";
import { Recognitions } from "@/components/admin/Recognitions";
import { TeamLeaderOfWeek } from "@/components/admin/TeamLeaderOfWeek";
import { B2BModule } from "@/components/admin/b2b/B2BModule";
import { CollaborationModule } from "@/components/admin/collaboration/CollaborationModule";
import { FranchiseModule } from "@/components/admin/franchise/FranchiseModule";
import { ReportsModule } from "@/components/admin/reports/ReportsModule";
import { SettingsModule } from "@/components/admin/settings/SettingsModule";
import SeatingArrangementPage from "@/components/workspace/Seating";
import ResourceManagementPage from "@/components/workspace/Resource";
import { Gallery } from "@/components/workspace/Gallery";
import { Documents } from "@/components/documents/Documents";
import { DocumentGenerator } from "@/components/documents/DocumentGenerator";
import { LearningModule } from "@/components/learning/LearningModule";
import { LearningDashboard } from "@/components/learning/LearningDashboard";
import { DailyProgress } from "@/components/approvals/DailyProgress";
import { ApprovalHistory } from "@/components/approvals/ApprovalHistory";
import { AllInvoices } from "@/components/invoice/AllInvoices";
import { CreateInvoice } from "@/components/invoice/CreateInvoice";
import { CreateProforma } from "@/components/invoice/CreateProforma";
import { InvoiceLedger } from "@/components/invoice/InvoiceLedger";
import { InvoiceApprovals } from "@/components/approvals/InvoiceApprovals";
import { ReportsOverview } from "@/components/reports/ReportsOverview";
import { AttendanceReport } from "@/components/reports/AttendanceReport";
import { PayrollReport } from "@/components/reports/PayrollReport";
import { HiringFunnel } from "@/components/reports/HiringFunnel";
import { WorkReport } from "@/components/reports/WorkReport";
import { Transactions } from "@/components/finance/Transactions";
import { FinancialPlan } from "@/components/finance/FinancialPlan";
import { FinancialSummary } from "@/components/finance/FinancialSummary";
import { OtherTransactions } from "@/components/finance/OtherTransactions";
import { AuditLogs } from "@/components/finance/AuditLogs";
import { UserProfile } from "@/components/profile/UserProfile";
import { GlobalModalProvider } from "@/components/GlobalModalContext";
import { GlobalModalManager } from "@/components/GlobalModalManager";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HR Suite — Optimized Sidebar Navigation" },
      {
        name: "description",
        content:
          "A grouped, searchable and collapsible sidebar for an HR, payroll and work management platform.",
      },
      { property: "og:title", content: "HR Suite — Optimized Sidebar Navigation" },
      {
        property: "og:description",
        content:
          "Grouped sections, quick search, pinned shortcuts and badge counts for a 40+ item admin menu.",
      },
    ],
  }),
  component: Index,
});

const improvements = [
  ["Grouped sections", "40+ flat items are now split into Overview, People, Time, Finance, Work, Workplace and Admin."],
  ["Menu search", "Type to filter items and sub-items instantly — the fastest path in a deep menu."],
  ["Pinned shortcuts", "Hover any item to pin it to the top; each user keeps their own 3–5 daily screens."],
  ["Icon-collapse mode", "Shrinks to a 68px icon rail instead of disappearing, so the content area gets more room."],
  ["Single-column accordions", "Sub-items sit on a guide rail with a clear active pill — no more losing your place."],
  ["Live badges", "Counts on Leave Requests, Interviews, Tasks and Chat surface work without opening pages."],
];

const suggestions = [
  ["Command palette (⌘K)", "Jump to any screen or record, plus quick actions like 'Create Invoice'."],
  ["Recently visited", "Auto-list the last 5 screens under Pinned — zero setup for the user."],
  ["Role-based menus", "Hide Finance/Restrictions from non-admins; a shorter menu is a faster menu."],
  ["Notifications inbox", "One bell for approvals, penalties and remarks instead of hunting per module."],
  ["Approvals hub", "Merge Leave Requests, Penalty and Invoice approvals into one queue."],
  ["Reports & Analytics", "Attendance, payroll cost and hiring funnel in one place — currently missing."],
  ["Global 'Create' button", "Invoice, task, employee, leave — the top 4 create actions in one menu."],
  ["Mobile drawer", "Off-canvas sidebar with a bottom bar for the 4 most used screens."],
];

function Index() {
  const [isClient, setIsClient] = useState(false);
  const [active, setActiveState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("activeSidebarTab") || "/dashboard";
    }
    return "/dashboard";
  });

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const setActive = (val: string) => {
    setActiveState(val);
    if (typeof window !== 'undefined') {
      localStorage.setItem("activeSidebarTab", val);
      window.dispatchEvent(new Event("sidebarTabChanged"));
    }
  };

  const [activeAction, setActiveAction] = useState<string | null>(null);

  const handleQuickAction = (label: string) => {
    if (label === "Export Excel" || label === "Export PDF") {
      const type = label.split(" ")[1];
      toast.loading(`Exporting data to ${type}...`, { duration: 1500 });
      setTimeout(() => toast.success(`${type} export complete!`, { description: "Your file has been downloaded." }), 1500);
    } else {
      setActiveAction(label);
    }
  };

  if (!isClient) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 rounded-full border-4 border-primary border-r-transparent animate-spin" />
      </div>
    );
  }

  const basePath = active.split('?')[0] || "/";
  const isNew = active.includes('?new=1');

  return (
    <GlobalModalProvider>
    <SettingsProvider>
      <DepartmentProvider>
        <EmployeeProvider>
          <SalesProvider>
            <div className="flex h-screen overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
          <AppSidebar active={active} setActive={setActive} />
          <GlobalModalManager />
        <main className="min-w-0 flex-1 overflow-x-hidden px-6 pb-24 pt-20 sm:px-10 md:pb-8 md:pt-8">
          {/* Main Dashboard */}
          {basePath === "/dashboard" && (
            <PermissionGate permission="view_dashboard" pageName="Dashboard" onGoHome={() => setActive("/dashboard")}>
              <Dashboard setActive={setActive} onAction={handleQuickAction} />
            </PermissionGate>
          )}

          {/* Sales */}
          {basePath === "/work/sales/dashboard" && <PermissionGate permission="view_sales" pageName="Sales Dashboard" onGoHome={() => setActive("/dashboard")}><SalesDashboard setActive={setActive} onAction={handleQuickAction} /></PermissionGate>}
          {basePath === "/work/sales/pipeline" && <PermissionGate permission="view_sales" pageName="Sales Pipeline" onGoHome={() => setActive("/dashboard")}><SalesPipeline onAction={handleQuickAction} /></PermissionGate>}
          {basePath === "/work/sales/leads" && <PermissionGate permission="view_sales" pageName="Sales Leads" onGoHome={() => setActive("/dashboard")}><SalesLeads onAction={handleQuickAction} isNew={isNew} /></PermissionGate>}
          {basePath === "/work/sales/tasks" && <PermissionGate permission="view_sales" pageName="Sales Tasks" onGoHome={() => setActive("/dashboard")}><SalesTasks onAction={handleQuickAction} /></PermissionGate>}
          {basePath === "/work/sales/analytics" && <PermissionGate permission="view_sales" pageName="Sales Analytics" onGoHome={() => setActive("/dashboard")}><SalesAnalytics onAction={handleQuickAction} /></PermissionGate>}
          {basePath === "/work/sales/team" && <PermissionGate permission="manage_sales" pageName="Sales Team Performance" onGoHome={() => setActive("/dashboard")}><SalesTeamPerformance onAction={handleQuickAction} /></PermissionGate>}
          {basePath === "/work/sales/reports" && <PermissionGate permission="view_sales" pageName="Sales Reports" onGoHome={() => setActive("/dashboard")}><SalesReports onAction={handleQuickAction} /></PermissionGate>}
          {basePath === "/work/sales/settings" && <PermissionGate permission="manage_sales" pageName="Sales Settings" onGoHome={() => setActive("/dashboard")}><SalesSettings /></PermissionGate>}

        {/* Payroll */}
        {basePath === "/payroll/dashboard" && <PermissionGate permission="view_payroll" pageName="Payroll Dashboard" onGoHome={() => setActive("/dashboard")}><PayrollDashboard /></PermissionGate>}
        {basePath === "/payroll/structure" && <PermissionGate permission="view_payroll" pageName="Salary Structure" onGoHome={() => setActive("/dashboard")}><SalaryStructure /></PermissionGate>}
        {basePath === "/payroll/settings" && <PermissionGate permission="manage_payroll" pageName="Payroll Settings" onGoHome={() => setActive("/dashboard")}><PayrollSettings /></PermissionGate>}
        {basePath === "/payroll/processing" && <PermissionGate permission="manage_payroll" pageName="Payroll Processing" onGoHome={() => setActive("/dashboard")}><PayrollProcessing /></PermissionGate>}
        {basePath === "/payroll/bonuses" && <PermissionGate permission="manage_payroll" pageName="Bonus & Deductions" onGoHome={() => setActive("/dashboard")}><BonusDeductions /></PermissionGate>}
        {basePath === "/payroll/payslips" && <PermissionGate permission="view_own_payslip" pageName="Payslips" onGoHome={() => setActive("/dashboard")}><Payslips /></PermissionGate>}

        {/* Employees */}
        {basePath === "/employees/list" && <PermissionGate permission="view_employees" pageName="Employee List" onGoHome={() => setActive("/dashboard")}><EmployeeList isNew={isNew} /></PermissionGate>}
        {basePath === "/employees/org" && <PermissionGate permission="view_org" pageName="Org Structure" onGoHome={() => setActive("/dashboard")}><OrgStructure /></PermissionGate>}
        {basePath === "/employees/attendance" && <PermissionGate permission="view_attendance" pageName="Attendance List" onGoHome={() => setActive("/dashboard")}><AttendanceList /></PermissionGate>}
        {basePath === "/employees/leave-requests" && <PermissionGate permission="manage_leaves" pageName="Leave Requests" onGoHome={() => setActive("/dashboard")}><LeaveRequests isNew={isNew} /></PermissionGate>}
        {basePath === "/employees/documents" && <PermissionGate permission="manage_documents" pageName="Employee Documents" onGoHome={() => setActive("/dashboard")}><Documents setActive={setActive} /></PermissionGate>}

        {/* Learning Module */}
        {basePath === "/learning/dashboard" && <PermissionGate permission="view_learning" pageName="Learning Hub" onGoHome={() => setActive("/dashboard")}><LearningDashboard setActive={setActive} /></PermissionGate>}
        {(basePath.startsWith("/learning") && basePath !== "/learning/dashboard") && <PermissionGate permission="view_learning" pageName="Learning Hub" onGoHome={() => setActive("/dashboard")}><LearningModule basePath={basePath} setActive={setActive} /></PermissionGate>}
        {basePath === "/employees/documents/generate" && <PermissionGate permission="manage_documents" pageName="Document Generator" onGoHome={() => setActive("/employees/documents")}><DocumentGenerator onBack={() => setActive("/employees/documents")} /></PermissionGate>}
        {(active === "/penalty" || active === "/approvals/penalties") && <PermissionGate permission="view_penalties" pageName="Penalties" onGoHome={() => setActive("/dashboard")}><Penalties /></PermissionGate>}
        {basePath === "/approvals/daily-progress" && <PermissionGate permission="view_daily_progress" pageName="Daily Progress" onGoHome={() => setActive("/dashboard")}><DailyProgress /></PermissionGate>}
        {basePath === "/approvals/history" && <PermissionGate permission="view_approval_history" pageName="Approval History" onGoHome={() => setActive("/dashboard")}><ApprovalHistory /></PermissionGate>}
        {basePath === "/approvals/invoices" && <PermissionGate permission="view_invoices" pageName="Invoice Approvals" onGoHome={() => setActive("/dashboard")}><InvoiceApprovals /></PermissionGate>}
        {basePath === "/remarks" && <PermissionGate permission="view_remarks" pageName="Remarks" onGoHome={() => setActive("/dashboard")}><Remarks /></PermissionGate>}
        
        {/* Finance */}
        {basePath === "/finance/transactions" && <PermissionGate permission="view_finance" pageName="Transactions" onGoHome={() => setActive("/dashboard")}><Transactions /></PermissionGate>}
        {basePath === "/finance/plan" && <PermissionGate permission="view_finance" pageName="Financial Plan" onGoHome={() => setActive("/dashboard")}><FinancialPlan /></PermissionGate>}
        {basePath === "/finance/summary" && <PermissionGate permission="view_finance" pageName="Financial Summary" onGoHome={() => setActive("/dashboard")}><FinancialSummary /></PermissionGate>}
        {basePath === "/finance/clients" && <PermissionGate permission="view_finance" pageName="Other Transactions" onGoHome={() => setActive("/dashboard")}><OtherTransactions /></PermissionGate>}
        {basePath === "/finance/audit" && <PermissionGate permission="manage_finance" pageName="Audit Logs" onGoHome={() => setActive("/dashboard")}><AuditLogs /></PermissionGate>}
        {basePath === "/invoice/all" && <PermissionGate permission="view_invoices" pageName="All Invoices" onGoHome={() => setActive("/dashboard")}><AllInvoices /></PermissionGate>}
        {basePath === "/invoice/ledger" && <PermissionGate permission="view_invoices" pageName="Invoice Ledger" onGoHome={() => setActive("/dashboard")}><InvoiceLedger /></PermissionGate>}
        {basePath === "/invoice/create" && <PermissionGate permission="create_invoices" pageName="Create Invoice" onGoHome={() => setActive("/invoice/all")}><CreateInvoice onBack={() => setActive("/invoice/all")} /></PermissionGate>}
        {basePath === "/invoice/proforma" && <PermissionGate permission="create_invoices" pageName="Create Proforma Invoice" onGoHome={() => setActive("/invoice/all")}><CreateProforma onBack={() => setActive("/invoice/all")} /></PermissionGate>}

        {/* Reports */}
        {basePath === "/reports" && <PermissionGate permission="view_reports" pageName="Reports Overview" onGoHome={() => setActive("/dashboard")}><ReportsOverview /></PermissionGate>}
        {basePath === "/reports/attendance" && <PermissionGate permission="view_reports" pageName="Attendance Report" onGoHome={() => setActive("/dashboard")}><AttendanceReport /></PermissionGate>}
        {basePath === "/reports/payroll" && <PermissionGate permission="view_reports" pageName="Payroll Report" onGoHome={() => setActive("/dashboard")}><PayrollReport /></PermissionGate>}
        {basePath === "/reports/hiring" && <PermissionGate permission="view_reports" pageName="Hiring Funnel" onGoHome={() => setActive("/dashboard")}><HiringFunnel /></PermissionGate>}
        {basePath === "/reports/work" && <PermissionGate permission="view_reports" pageName="Work Report" onGoHome={() => setActive("/dashboard")}><WorkReport /></PermissionGate>}

        {/* Recruitment */}
        {basePath === "/recruitment/interviews" && <PermissionGate permission="view_recruitment" pageName="Interviews" onGoHome={() => setActive("/dashboard")}><Interviews /></PermissionGate>}
        {basePath === "/recruitment/hirings" && <PermissionGate permission="view_recruitment" pageName="Hirings" onGoHome={() => setActive("/dashboard")}><Hirings /></PermissionGate>}

        {/* Schedule */}
        {basePath === "/schedule" && <PermissionGate permission="view_schedule" pageName="Schedule" onGoHome={() => setActive("/dashboard")}><Schedule isNew={isNew} /></PermissionGate>}

        {/* Work */}
        {basePath === "/work/logs" && <PermissionGate permission="view_work_logs" pageName="Work Logs" onGoHome={() => setActive("/dashboard")}><WorkLogs /></PermissionGate>}
        {basePath === "/work/projects" && <PermissionGate permission="view_projects" pageName="Clients & Projects" onGoHome={() => setActive("/dashboard")}><Projects isNew={isNew} /></PermissionGate>}
        {basePath === "/tasks" && <PermissionGate permission="view_tasks" pageName="Tasks" onGoHome={() => setActive("/dashboard")}><Tasks setActive={setActive} isNew={isNew} /></PermissionGate>}
        {basePath === "/chat" && <PermissionGate permission="view_chat" pageName="Chat" onGoHome={() => setActive("/dashboard")}><Chat /></PermissionGate>}
        {basePath === "/work/research" && <PermissionGate permission="view_research" pageName="Research" onGoHome={() => setActive("/dashboard")}><Research /></PermissionGate>}

        {/* Workspace */}
        {basePath === "/workspace/seating" && <PermissionGate permission="view_workspace" pageName="Seating Arrangement" onGoHome={() => setActive("/dashboard")}><SeatingArrangementPage /></PermissionGate>}
        {basePath === "/workspace/resource" && <PermissionGate permission="view_workspace" pageName="Resource Management" onGoHome={() => setActive("/dashboard")}><ResourceManagementPage /></PermissionGate>}
        {basePath === "/workspace/gallery" && <PermissionGate permission="view_workspace" pageName="Gallery" onGoHome={() => setActive("/dashboard")}><Gallery /></PermissionGate>}

        {/* Admin & Command Center */}
        {basePath === "/ceo-dashboard" && <PermissionGate permission="view_command_center" pageName="CEO Overview" onGoHome={() => setActive("/dashboard")}><CEODashboard active={active} /></PermissionGate>}
        {basePath.startsWith("/ceo-dashboard/b2b") && <PermissionGate permission="view_command_center" pageName="B2B Partnership" onGoHome={() => setActive("/dashboard")}><B2BModule active={active} /></PermissionGate>}
        {basePath === "/ceo-dashboard/collaboration" && <PermissionGate permission="view_command_center" pageName="Tech Collaboration" onGoHome={() => setActive("/dashboard")}><CollaborationModule /></PermissionGate>}
        {basePath === "/ceo-dashboard/franchise" && <PermissionGate permission="view_command_center" pageName="Franchise" onGoHome={() => setActive("/dashboard")}><FranchiseModule /></PermissionGate>}
        {basePath === "/ceo-dashboard/reports" && <PermissionGate permission="view_command_center" pageName="Command Center Reports" onGoHome={() => setActive("/dashboard")}><ReportsModule /></PermissionGate>}
        {basePath === "/ceo-dashboard/settings" && <PermissionGate permission="manage_settings" pageName="Command Center Settings" onGoHome={() => setActive("/dashboard")}><SettingsModule /></PermissionGate>}
        {basePath === "/activity-logs" && <PermissionGate permission="view_activity_logs" pageName="Activity Logs" onGoHome={() => setActive("/dashboard")}><ActivityLogs /></PermissionGate>}
        {basePath === "/activity-tracker" && <PermissionGate permission="view_activity_tracker" pageName="Activity Tracker" onGoHome={() => setActive("/dashboard")}><ActivityTracker /></PermissionGate>}
        {basePath === "/restrictions" && <PermissionGate permission="manage_restrictions" pageName="Restrictions" onGoHome={() => setActive("/dashboard")}><Restrictions /></PermissionGate>}
        {basePath === "/settings" && <PermissionGate permission="manage_settings" pageName="Admin Settings" onGoHome={() => setActive("/dashboard")}><AdminSettings /></PermissionGate>}
        {basePath === "/recycle-bin" && <PermissionGate permission="manage_recycle_bin" pageName="Recycle Bin" onGoHome={() => setActive("/dashboard")}><RecycleBin /></PermissionGate>}
        {basePath === "/elections" && <PermissionGate permission="view_elections" pageName="Elections" onGoHome={() => setActive("/dashboard")}><Elections /></PermissionGate>}
        {basePath === "/recognitions" && <PermissionGate permission="view_elections" pageName="Employee Recognition" onGoHome={() => setActive("/dashboard")}><Recognitions /></PermissionGate>}
        {basePath === "/team-leader-of-the-week" && <PermissionGate permission="view_elections" pageName="Team Leader of the Week" onGoHome={() => setActive("/dashboard")}><TeamLeaderOfWeek /></PermissionGate>}

        {/* User Profile */}
        {basePath === "/profile" && <UserProfile />}

        {/* Fallback original content for all other items */}
        {basePath !== "/dashboard" && basePath !== "/profile" && basePath !== "/schedule" && basePath !== "/work/logs" && basePath !== "/work/projects" && basePath !== "/tasks" && basePath !== "/chat" && basePath !== "/work/research" && basePath !== "/penalty" && basePath !== "/approvals/penalties" && basePath !== "/remarks" && basePath !== "/activity-logs" && basePath !== "/activity-tracker" && basePath !== "/restrictions" && basePath !== "/settings" && basePath !== "/recycle-bin" && basePath !== "/elections" && basePath !== "/recognitions" && basePath !== "/team-leader-of-the-week" && !basePath.startsWith("/ceo-dashboard") && !basePath.startsWith("/work/sales") && !basePath.startsWith("/payroll") && !basePath.startsWith("/employees") && !basePath.startsWith("/recruitment") && !basePath.startsWith("/workspace") && !basePath.startsWith("/approvals") && !basePath.startsWith("/invoice") && !basePath.startsWith("/reports") && !basePath.startsWith("/finance") && !basePath.startsWith("/learning") && (
          <>
            <header className="mb-8 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Navigation review
              </p>
              <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Your sidebar, reorganized
              </h1>
              <p className="mt-3 text-muted-foreground">
                Same menu items from your screenshots — regrouped, searchable and collapsible. Click
                around the sidebar to try it.
              </p>
            </header>

            <section className="mb-10">
              <h2 className="mb-4 text-lg font-bold">What changed</h2>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {improvements.map(([title, body]) => (
                  <div key={title} className="rounded-xl border border-border bg-card p-4">
                    <p className="font-semibold">{title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="max-w-5xl">
              <h2 className="mb-4 text-lg font-bold">Worth adding next</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {suggestions.map(([title, body]) => (
                  <li key={title} className="rounded-xl border border-dashed border-border p-4">
                    <p className="font-semibold">{title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}
      </main>
        <QuickActionModals activeAction={activeAction} onClose={() => setActiveAction(null)} />
      </div>
          </SalesProvider>
        </EmployeeProvider>
      </DepartmentProvider>
    </SettingsProvider>
    </GlobalModalProvider>
  );
}
