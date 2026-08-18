import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AppSidebar } from "@/components/AppSidebar";

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
import { CEODashboard } from "@/components/admin/CEODashboard";
import { B2BModule } from "@/components/admin/b2b/B2BModule";
import { CollaborationModule } from "@/components/admin/collaboration/CollaborationModule";
import { FranchiseModule } from "@/components/admin/franchise/FranchiseModule";
import { ReportsModule } from "@/components/admin/reports/ReportsModule";
import { SettingsModule } from "@/components/admin/settings/SettingsModule";
import { SeatingArrangement } from "@/components/workspace/SeatingArrangement";
import { ResourceManagement } from "@/components/workspace/ResourceManagement";
import { Gallery } from "@/components/workspace/Gallery";
import { Documents } from "@/components/documents/Documents";
import { DocumentGenerator } from "@/components/documents/DocumentGenerator";
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
import { TrainingDashboard } from "@/components/training/TrainingDashboard";
import { CoursePlayer } from "@/components/training/CoursePlayer";
import { UserProfile } from "@/components/profile/UserProfile";

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
  const [active, setActiveState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("activeSidebarTab") || "/dashboard";
    }
    return "/dashboard";
  });
  
  const setActive = (val: string) => {
    setActiveState(val);
    if (typeof window !== 'undefined') {
      localStorage.setItem("activeSidebarTab", val);
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

  return (
    <SettingsProvider>
      <DepartmentProvider>
        <EmployeeProvider>
          <div className="flex h-screen overflow-hidden bg-background">
        <AppSidebar active={active} setActive={setActive} />
      <main className="min-w-0 flex-1 overflow-x-hidden px-6 pb-24 pt-20 sm:px-10 md:pb-8 md:pt-8">
        {/* Main Dashboard */}
        {active === "/dashboard" && <Dashboard />}

        {/* Render the appropriate sales page based on state */}
        <SalesProvider>
          {active === "/work/sales/dashboard" && <SalesDashboard setActive={setActive} onAction={handleQuickAction} />}
          {active === "/work/sales/pipeline" && <SalesPipeline onAction={handleQuickAction} />}
          {active === "/work/sales/leads" && <SalesLeads onAction={handleQuickAction} />}
          {active === "/work/sales/tasks" && <SalesTasks onAction={handleQuickAction} />}
          {active === "/work/sales/analytics" && <SalesAnalytics onAction={handleQuickAction} />}
          {active === "/work/sales/team" && <SalesTeamPerformance onAction={handleQuickAction} />}
          {active === "/work/sales/reports" && <SalesReports onAction={handleQuickAction} />}
          {active === "/work/sales/settings" && <SalesSettings />}
        </SalesProvider>

        {/* Render Payroll pages */}
        {active === "/payroll/dashboard" && <PayrollDashboard />}
        {active === "/payroll/structure" && <SalaryStructure />}
        {active === "/payroll/settings" && <PayrollSettings />}
        {active === "/payroll/processing" && <PayrollProcessing />}
        {active === "/payroll/bonuses" && <BonusDeductions />}
        {active === "/payroll/payslips" && <Payslips />}

        {/* Render Employee pages */}
        {active === "/employees/list" && <EmployeeList />}
        {active === "/employees/org" && <OrgStructure />}
        {active === "/employees/attendance" && <AttendanceList />}
        {active === "/employees/leave-requests" && <LeaveRequests />}
        {active === "/employees/documents" && <Documents setActive={setActive} />}
        {active === "/employees/documents/generate" && <DocumentGenerator onBack={() => setActive("/employees/documents")} />}
        {(active === "/penalty" || active === "/approvals/penalties") && <Penalties />}
        {active === "/approvals/daily-progress" && <DailyProgress />}
        {active === "/approvals/history" && <ApprovalHistory />}
        {active === "/approvals/invoices" && <InvoiceApprovals />}
        {active === "/remarks" && <Remarks />}
        
        {/* Finance */}
        {active === "/finance/transactions" && <Transactions />}
        {active === "/finance/plan" && <FinancialPlan />}
        {active === "/finance/summary" && <FinancialSummary />}
        {active === "/finance/clients" && <OtherTransactions />}
        {active === "/finance/audit" && <AuditLogs />}
        {active === "/invoice/all" && <AllInvoices />}
        {active === "/invoice/ledger" && <InvoiceLedger />}
        {active === "/invoice/create" && <CreateInvoice onBack={() => setActive("/invoice/all")} />}
        {active === "/invoice/proforma" && <CreateProforma onBack={() => setActive("/invoice/all")} />}

        {/* Reports */}
        {active === "/reports" && <ReportsOverview />}
        {active === "/reports/attendance" && <AttendanceReport />}
        {active === "/reports/payroll" && <PayrollReport />}
        {active === "/reports/hiring" && <HiringFunnel />}
        {active === "/reports/work" && <WorkReport />}

        {/* Recruitment */}
        {active === "/recruitment/interviews" && <Interviews />}
        {active === "/recruitment/hirings" && <Hirings />}

        {/* Schedule */}
        {active === "/schedule" && <Schedule />}

        {/* Work */}
        {active === "/work/logs" && <WorkLogs />}
        {active === "/work/projects" && <Projects />}
        {active === "/tasks" && <Tasks />}
        {active === "/chat" && <Chat />}
        {active === "/work/research" && <Research />}

        {/* Workspace */}
        {active === "/workspace/seating" && <SeatingArrangement />}
        {active === "/workspace/resources" && <ResourceManagement />}
        {active === "/workspace/gallery" && <Gallery />}

        {/* Training & Learning */}
        {active.startsWith("/learn/") && !active.startsWith("/learn/course/") && <TrainingDashboard active={active} setActive={setActive} />}
        {active.startsWith("/learn/course/") && <CoursePlayer active={active} setActive={setActive} />}

        {/* Admin & Command Center */}
        {active === "/ceo-dashboard" && <CEODashboard active={active} />}
        {active.startsWith("/ceo-dashboard/b2b") && <B2BModule active={active} />}
        {active === "/ceo-dashboard/collaboration" && <CollaborationModule />}
        {active === "/ceo-dashboard/franchise" && <FranchiseModule />}
        {active === "/ceo-dashboard/reports" && <ReportsModule />}
        {active === "/ceo-dashboard/settings" && <SettingsModule />}
        {active === "/activity-logs" && <ActivityLogs />}
        {active === "/activity-tracker" && <ActivityTracker />}
        {active === "/restrictions" && <Restrictions />}

        {/* User Profile */}
        {active === "/profile" && <UserProfile />}

        {/* Fallback original content for all other items */}
        {active !== "/dashboard" && active !== "/profile" && active !== "/schedule" && active !== "/work/logs" && active !== "/work/projects" && active !== "/tasks" && active !== "/chat" && active !== "/work/research" && active !== "/penalty" && active !== "/approvals/penalties" && active !== "/remarks" && active !== "/activity-logs" && active !== "/activity-tracker" && active !== "/restrictions" && !active.startsWith("/ceo-dashboard") && !active.startsWith("/work/sales") && !active.startsWith("/payroll") && !active.startsWith("/employees") && !active.startsWith("/recruitment") && !active.startsWith("/workspace") && !active.startsWith("/approvals") && !active.startsWith("/invoice") && !active.startsWith("/reports") && !active.startsWith("/finance") && !active.startsWith("/learn") && (
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
        </EmployeeProvider>
      </DepartmentProvider>
    </SettingsProvider>
  );
}
