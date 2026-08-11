import { HR_UPDATES, COMPANY_NEWS } from "../dashboard-data";
import { Gift, Award, CalendarDays, UserPlus, LogOut, CheckCircle2, FileText, Megaphone } from "lucide-react";

export function HRAndNews() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
      {/* SECTION 11: HR Updates */}
      <div>
        <div className="mb-6 pl-2">
          <p className="text-[10px] font-bold text-[#00A56C] uppercase tracking-widest mb-0.5">Section 11</p>
          <h2 className="text-[22px] font-black text-slate-900 tracking-tight">HR Updates</h2>
        </div>

        <div className="bg-white border border-border/60 rounded-3xl p-6 shadow-sm space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Gift className="h-4 w-4 text-rose-500" />
                <h3 className="text-[13px] font-bold text-slate-900">Upcoming Birthdays</h3>
              </div>
              <ul className="space-y-2">
                {HR_UPDATES.birthdays.map((item, i) => (
                  <li key={i} className="flex justify-between items-center text-[11px]">
                    <span className="font-medium text-slate-700">{item.name}</span>
                    <span className="text-slate-500">{item.date}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="h-4 w-4 text-amber-500" />
                <h3 className="text-[13px] font-bold text-slate-900">Work Anniversaries</h3>
              </div>
              <ul className="space-y-2">
                {HR_UPDATES.anniversaries.map((item, i) => (
                  <li key={i} className="flex justify-between items-center text-[11px]">
                    <span className="font-medium text-slate-700">{item.name}</span>
                    <span className="text-slate-500">{item.tenure}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="h-px bg-border/60"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CalendarDays className="h-4 w-4 text-blue-500" />
                <h3 className="text-[13px] font-bold text-slate-900">Interview Schedule</h3>
              </div>
              <ul className="space-y-2">
                {HR_UPDATES.interviews.map((item, i) => (
                  <li key={i} className="flex justify-between items-center text-[11px]">
                    <span className="font-medium text-slate-700">{item.role}</span>
                    <span className="text-slate-500">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <UserPlus className="h-4 w-4 text-[#00A56C]" />
                <h3 className="text-[13px] font-bold text-slate-900">New Joining</h3>
              </div>
              <ul className="space-y-2">
                {HR_UPDATES.joining.map((item, i) => (
                  <li key={i} className="flex justify-between items-center text-[11px]">
                    <span className="font-medium text-slate-700">{item.name}</span>
                    <span className="text-slate-500">{item.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="h-px bg-border/60"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <LogOut className="h-4 w-4 text-rose-500" />
                <h3 className="text-[13px] font-bold text-slate-900">Employee Exit</h3>
              </div>
              <ul className="space-y-2">
                {HR_UPDATES.exit.map((item, i) => (
                  <li key={i} className="flex justify-between items-center text-[11px]">
                    <span className="font-medium text-slate-700">{item.name}</span>
                    <span className="text-slate-500">{item.date}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="h-4 w-4 text-indigo-500" />
                <h3 className="text-[13px] font-bold text-slate-900">Probation Ending</h3>
              </div>
              <ul className="space-y-2">
                {HR_UPDATES.probation.map((item, i) => (
                  <li key={i} className="flex justify-between items-center text-[11px]">
                    <span className="font-medium text-slate-700">{item.name}</span>
                    <span className="text-slate-500">{item.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="h-px bg-border/60"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FileText className="h-4 w-4 text-amber-500" />
                <h3 className="text-[13px] font-bold text-slate-900">Document Expiry</h3>
              </div>
              <ul className="space-y-2">
                {HR_UPDATES.document.map((item, i) => (
                  <li key={i} className="flex justify-between items-center text-[11px]">
                    <span className="font-medium text-slate-700">{item.name}</span>
                    <span className="text-slate-500">{item.date}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Megaphone className="h-4 w-4 text-blue-500" />
                <h3 className="text-[13px] font-bold text-slate-900">Policy Updates</h3>
              </div>
              <ul className="space-y-2">
                {HR_UPDATES.policies.map((item, i) => (
                  <li key={i} className="flex justify-between items-center text-[11px]">
                    <span className="font-medium text-slate-700">{item.name}</span>
                    <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 rounded">{item.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 12: Company News */}
      <div>
        <div className="mb-6 pl-2">
          <p className="text-[10px] font-bold text-[#00A56C] uppercase tracking-widest mb-0.5">Section 12</p>
          <h2 className="text-[22px] font-black text-slate-900 tracking-tight">Company News</h2>
        </div>

        <div className="space-y-4 mb-6">
          {COMPANY_NEWS.map((news, i) => (
            <div key={i} className="bg-white border border-border/60 rounded-3xl p-6 shadow-sm">
              <h3 className="text-[15px] font-bold text-slate-900 mb-1">{news.title}</h3>
              <p className="text-[12px] text-slate-500">{news.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-sm relative overflow-hidden flex flex-col justify-between h-48">
          <div>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Today's motivation</h3>
            <p className="text-xl font-bold leading-snug">“Discipline compounds faster than talent. Show up, ship, repeat.”</p>
          </div>
        </div>
      </div>
    </div>
  );
}
