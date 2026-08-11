import { UserPlus, CheckSquare, Briefcase, Receipt, Clock } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="bg-white rounded-[32px] p-8 border border-border/60 shadow-sm relative overflow-hidden mb-12">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[10px] font-bold text-[#00A56C] uppercase tracking-widest mb-2">CEO Command Center</p>
          <h1 className="text-[34px] font-black text-slate-900 tracking-tight flex items-center gap-2 mb-2 leading-none">
            Good Evening, Het <span className="text-3xl">👋</span>
          </h1>
          <p className="text-[14px] text-slate-500">Today's overview for HK DigiVerse — everything moving across the company, in one screen.</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-end max-w-md">
          <button className="flex items-center gap-1.5 px-4 py-2 bg-white border border-border/80 rounded-full text-[12px] font-bold text-slate-700 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:bg-slate-50 transition-colors">
            <UserPlus className="h-3.5 w-3.5 text-slate-500" /> Add Employee
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-white border border-border/80 rounded-full text-[12px] font-bold text-slate-700 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:bg-slate-50 transition-colors">
            <CheckSquare className="h-3.5 w-3.5 text-slate-500" /> Add Task
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-white border border-border/80 rounded-full text-[12px] font-bold text-slate-700 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:bg-slate-50 transition-colors">
            <Briefcase className="h-3.5 w-3.5 text-slate-500" /> Add Client
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-white border border-border/80 rounded-full text-[12px] font-bold text-slate-700 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:bg-slate-50 transition-colors">
            <Receipt className="h-3.5 w-3.5 text-slate-500" /> Create Invoice
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-white border border-border/80 rounded-full text-[12px] font-bold text-slate-700 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:bg-slate-50 transition-colors">
            <Clock className="h-3.5 w-3.5 text-slate-500" /> Schedule Meeting
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-8">
        <div className="bg-slate-50/40 rounded-2xl p-5 border border-border/40">
          <p className="text-[10px] font-bold text-slate-400 mb-1">Current Time</p>
          <p className="text-[22px] font-black text-[#00A56C]">05:28:41 PM</p>
        </div>
        <div className="bg-slate-50/40 rounded-2xl p-5 border border-border/40">
          <p className="text-[10px] font-bold text-slate-400 mb-1">Today's Date</p>
          <p className="text-[22px] font-black text-blue-500">11 Aug 2026</p>
        </div>
        <div className="bg-slate-50/40 rounded-2xl p-5 border border-border/40">
          <p className="text-[10px] font-bold text-slate-400 mb-1">Working Day</p>
          <p className="text-[22px] font-black text-amber-500">Day 22 of 26</p>
        </div>
        <div className="bg-slate-50/40 rounded-2xl p-5 border border-border/40">
          <p className="text-[10px] font-bold text-slate-400 mb-1">Financial Month</p>
          <p className="text-[22px] font-black text-[#00A56C]">August</p>
        </div>
      </div>
    </div>
  );
}
