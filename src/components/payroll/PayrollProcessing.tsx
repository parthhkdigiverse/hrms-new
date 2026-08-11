import { useState } from "react";
import { formatCurrency, MOCK_PAYROLL_RUNS } from "./payroll-data";
import { ChevronDown, Users, Gift, MinusCircle, PlayCircle, CheckCircle2, Lock, FileSpreadsheet, FileText, Send, Search, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

export function PayrollProcessing() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRuns = (MOCK_PAYROLL_RUNS as any[]).filter(r => 
    r.employee.toLowerCase().includes(searchTerm.toLowerCase()) || 
    r.empId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-[1400px]">
      
      {/* Header */}
      <div className="mb-8 flex items-end justify-between border-b border-border pb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Payroll Processing</h1>
          <p className="mt-1 text-[14px] text-muted-foreground">July 2026 · Attendance, leave, OT, bonuses and recoveries fetched automatically</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <select className="appearance-none pl-4 pr-10 py-2 bg-white border border-border/80 rounded-lg text-[13px] font-semibold text-slate-700 outline-none focus:border-emerald-500 shadow-sm min-w-[120px]">
              <option>July</option>
              <option>August</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
          <div className="relative">
            <select className="appearance-none pl-4 pr-10 py-2 bg-white border border-border/80 rounded-lg text-[13px] font-semibold text-slate-700 outline-none focus:border-emerald-500 shadow-sm min-w-[100px]">
              <option>2026</option>
              <option>2027</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-[#0b6c4b] rounded-2xl p-5 shadow-sm relative text-white">
          <div className="flex justify-between items-start mb-2">
            <p className="text-[12px] font-medium text-emerald-50">Company Payroll Expense</p>
            <span className="text-[14px] font-bold text-emerald-100">₹</span>
          </div>
          <p className="text-[32px] font-black">₹4,69,330</p>
          <p className="text-[12px] text-emerald-100 mt-1">Gross + OT + bonus</p>
        </div>
        <div className="bg-white border border-border/60 rounded-2xl p-5 shadow-sm relative">
          <div className="flex justify-between items-start mb-2">
            <p className="text-[12px] font-medium text-slate-500">Employees Processed</p>
            <Users className="h-4 w-4 text-[#0b6c4b]" />
          </div>
          <p className="text-[32px] font-black text-slate-900">0</p>
          <p className="text-[12px] text-slate-500 mt-1">8 eligible</p>
        </div>
        <div className="bg-white border border-border/60 rounded-2xl p-5 shadow-sm relative">
          <div className="flex justify-between items-start mb-2">
            <p className="text-[12px] font-medium text-slate-500">Total Bonus</p>
            <Gift className="h-4 w-4 text-[#0b6c4b]" />
          </div>
          <p className="text-[32px] font-black text-slate-900">₹31,000</p>
        </div>
        <div className="bg-white border border-border/60 rounded-2xl p-5 shadow-sm relative">
          <div className="flex justify-between items-start mb-2">
            <p className="text-[12px] font-medium text-slate-500">Total Deduction</p>
            <MinusCircle className="h-4 w-4 text-[#0b6c4b]" />
          </div>
          <p className="text-[32px] font-black text-slate-900">₹52,349</p>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-wrap items-center gap-3 mb-6 bg-white border border-border/60 p-2 rounded-2xl shadow-sm">
        <div className="px-4 py-1.5 bg-slate-50 border border-border rounded-full text-[12px] font-bold text-slate-700 whitespace-nowrap ml-2">
          Status: Not Generated
        </div>
        <div className="w-px h-6 bg-border/60 mx-1 hidden sm:block"></div>
        <button className="flex items-center gap-2 bg-[#00a56c] hover:bg-[#00925e] text-white px-4 py-2 rounded-lg text-[13px] font-bold shadow-sm transition-colors whitespace-nowrap">
          <PlayCircle className="h-4 w-4" /> Generate Payroll
        </button>
        <button disabled className="flex items-center gap-2 bg-white border border-border/60 px-4 py-2 rounded-lg text-slate-400 text-[13px] font-semibold opacity-60 whitespace-nowrap cursor-not-allowed">
          <CheckCircle2 className="h-4 w-4" /> Approve Payroll
        </button>
        <button disabled className="flex items-center gap-2 bg-white border border-border/60 px-4 py-2 rounded-lg text-slate-400 text-[13px] font-semibold opacity-60 whitespace-nowrap cursor-not-allowed">
          <Lock className="h-4 w-4" /> Lock Payroll
        </button>
        <button className="flex items-center gap-2 bg-white border border-border/80 px-4 py-2 rounded-lg text-slate-700 text-[13px] font-semibold hover:bg-slate-50 transition-colors shadow-sm whitespace-nowrap">
          <FileSpreadsheet className="h-4 w-4" /> Export Excel
        </button>
        <button className="flex items-center gap-2 bg-white border border-border/80 px-4 py-2 rounded-lg text-slate-700 text-[13px] font-semibold hover:bg-slate-50 transition-colors shadow-sm whitespace-nowrap">
          <FileText className="h-4 w-4" /> Export PDF
        </button>
        <button className="flex items-center gap-2 bg-white border border-border/80 px-4 py-2 rounded-lg text-slate-700 text-[13px] font-semibold hover:bg-slate-50 transition-colors shadow-sm whitespace-nowrap">
          <Send className="h-4 w-4" /> Send Payslips
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border border-border/60 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        <div className="p-5 border-b border-border/60 bg-white flex justify-between items-center">
          <div>
            <h2 className="text-[15px] font-bold text-slate-900">Payroll Preview</h2>
            <p className="text-[12px] text-muted-foreground mt-0.5">Computed from effective salary as on 01 July 2026</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search employees..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-1.5 border border-border/80 rounded-lg text-[13px] w-64 outline-none focus:border-emerald-500 bg-slate-50 focus:bg-white transition-colors"
              />
            </div>
            <button className="flex items-center gap-2 border border-border/80 bg-white px-3 py-1.5 rounded-lg text-[13px] font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              <Filter className="h-4 w-4" /> Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border/60 bg-slate-50/50">
                <th className="py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Employee</th>
                <th className="py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">Working</th>
                <th className="py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">Present</th>
                <th className="py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">Absent</th>
                <th className="py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">Leave</th>
                <th className="py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">OT Hrs</th>
                <th className="py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">Gross</th>
                <th className="py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">Deduction</th>
                <th className="py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">Net Salary</th>
                <th className="py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {filteredRuns.map((run) => (
                <tr key={run.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0b6c4b] text-white flex items-center justify-center text-[11px] font-bold shrink-0">
                        {run.employee.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-slate-900 leading-tight">{run.employee}</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">{run.empId}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-center text-[13px] text-slate-700">{run.working}</td>
                  <td className="py-4 px-5 text-center text-[13px] text-slate-700">{run.present}</td>
                  <td className="py-4 px-5 text-center text-[13px] text-slate-700">{run.absent}</td>
                  <td className="py-4 px-5 text-center text-[13px] text-slate-700">{run.leave}</td>
                  <td className="py-4 px-5 text-center text-[13px] text-slate-700">{run.otHrs}</td>
                  <td className="py-4 px-5 text-right text-[13px] font-medium text-slate-700">{formatCurrency(run.gross)}</td>
                  <td className="py-4 px-5 text-right text-[13px] font-medium text-rose-500">-{formatCurrency(run.deduction)}</td>
                  <td className="py-4 px-5 text-right text-[14px] font-bold text-slate-900">{formatCurrency(run.netSalary)}</td>
                  <td className="py-4 px-5 text-center">
                    <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-[10px] font-bold bg-white text-slate-700 border border-border/80 tracking-wide">
                      {run.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filteredRuns.length === 0 && (
                <tr>
                  <td colSpan={10} className="py-12 text-center text-muted-foreground text-sm">
                    No employees found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
