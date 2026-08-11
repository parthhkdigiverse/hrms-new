import { MY_TASKS, KEY_ACCOUNTS } from "../dashboard-data";
import { cn } from "@/lib/utils";
import { CheckCircle2, Circle } from "lucide-react";

export function TasksAndClients() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
      {/* SECTION 09: Tasks */}
      <div>
        <div className="mb-6 pl-2">
          <p className="text-[10px] font-bold text-[#00A56C] uppercase tracking-widest mb-0.5">Section 09</p>
          <h2 className="text-[22px] font-black text-slate-900 tracking-tight">Tasks & Deadlines</h2>
        </div>

        <div className="bg-white border border-border/60 rounded-3xl p-6 shadow-sm mb-6">
          <div className="mb-6">
            <h3 className="font-bold text-slate-900">My Tasks & Team Tasks</h3>
            <p className="text-[11px] text-slate-500">Active tasks across projects</p>
          </div>
          <div className="space-y-3">
            {MY_TASKS.map((task, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors cursor-pointer">
                <div className="mt-0.5">
                  {task.status === "completed" ? (
                    <CheckCircle2 className="h-5 w-5 text-[#00A56C]" />
                  ) : (
                    <Circle className="h-5 w-5 text-slate-300" />
                  )}
                </div>
                <div className="flex-1">
                  <p className={cn("text-[13px] font-bold leading-tight mb-1", task.status === "completed" ? "text-slate-400 line-through" : "text-slate-900")}>
                    {task.title}
                  </p>
                  <p className="text-[11px] text-slate-500">{task.assignee} · due {task.due}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-rose-50 border border-rose-100 rounded-3xl p-5 shadow-sm">
            <p className="text-[11px] font-bold text-rose-600 uppercase tracking-wider mb-1">Overdue</p>
            <p className="text-[26px] font-black text-rose-700 leading-none">14</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-5 shadow-sm">
            <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider mb-1">Completed Today</p>
            <p className="text-[26px] font-black text-emerald-700 leading-none">38</p>
          </div>
        </div>
      </div>

      {/* SECTION 10: Clients */}
      <div>
        <div className="mb-6 pl-2">
          <p className="text-[10px] font-bold text-[#00A56C] uppercase tracking-widest mb-0.5">Section 10</p>
          <h2 className="text-[22px] font-black text-slate-900 tracking-tight">Client Management</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-border/60 rounded-3xl p-5 shadow-sm">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Total Clients</p>
            <p className="text-[26px] font-black text-slate-900 leading-none">78</p>
          </div>
          <div className="bg-white border border-border/60 rounded-3xl p-5 shadow-sm">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Active Clients</p>
            <p className="text-[26px] font-black text-[#00A56C] leading-none">64</p>
          </div>
          <div className="bg-white border border-border/60 rounded-3xl p-5 shadow-sm">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">New This Month</p>
            <p className="text-[26px] font-black text-blue-500 leading-none">6</p>
          </div>
          <div className="bg-white border border-border/60 rounded-3xl p-5 shadow-sm">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Satisfaction</p>
            <p className="text-[26px] font-black text-amber-500 leading-none">4.6<span className="text-[14px] text-slate-400">/5</span></p>
          </div>
        </div>

        <div className="bg-white border border-border/60 rounded-3xl p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="font-bold text-slate-900">Key Accounts</h3>
            <p className="text-[11px] text-slate-500">Top revenue generating clients</p>
          </div>
          <div className="space-y-4">
            {KEY_ACCOUNTS.map((account, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[14px] font-bold text-indigo-700">
                    {account.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-slate-900 leading-tight">{account.name}</p>
                    <p className="text-[11px] text-slate-500">Client since {account.since}</p>
                  </div>
                </div>
                <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-md border", 
                  account.health === "Good" ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                  "bg-amber-50 text-amber-600 border-amber-100"
                )}>
                  {account.health}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
