import { ACTIVITY_FEED, AI_SUMMARY } from "../dashboard-data";
import { cn } from "@/lib/utils";
import { Sparkles, ArrowRight, UserPlus, CheckCircle, CheckSquare, IndianRupee, Briefcase, Rocket, Banknote } from "lucide-react";

const IconMap: Record<string, any> = {
  UserPlus, CheckCircle, CheckSquare, IndianRupee, Briefcase, Rocket, Banknote
};

export function ActivityAndAI() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
      {/* SECTION 13: Calendar */}
      <div>
        <div className="mb-6 pl-2">
          <p className="text-[10px] font-bold text-[#00A56C] uppercase tracking-widest mb-0.5">Section 13</p>
          <h2 className="text-[22px] font-black text-slate-900 tracking-tight">Today's Calendar</h2>
        </div>
        <div className="bg-white border border-border/60 rounded-3xl p-6 shadow-sm h-[320px] overflow-y-auto">
          <p className="text-[11px] text-slate-500 mb-6">Meetings · birthdays · leaves · interviews · deadlines</p>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[13px] font-bold text-slate-900">Board sync</p>
                <p className="text-[11px] text-slate-500">Meeting</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[13px] font-bold text-slate-900">Frontend Engineer</p>
                <p className="text-[11px] text-slate-500">Interview</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[13px] font-bold text-slate-900">Neha Patel</p>
                <p className="text-[11px] text-slate-500">Birthday</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[13px] font-bold text-slate-900">Kite Social Launch</p>
                <p className="text-[11px] text-slate-500">Deadline</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[13px] font-bold text-slate-900">Priya Nair – Sick</p>
                <p className="text-[11px] text-slate-500">Leave</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[13px] font-bold text-slate-900">Monthly town hall</p>
                <p className="text-[11px] text-slate-500">Event</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 14: Activity Feed */}
      <div>
        <div className="mb-6 pl-2">
          <p className="text-[10px] font-bold text-[#00A56C] uppercase tracking-widest mb-0.5">Section 14</p>
          <h2 className="text-[22px] font-black text-slate-900 tracking-tight">Recent Activity</h2>
        </div>
        <div className="bg-white border border-border/60 rounded-3xl p-6 shadow-sm h-[320px] overflow-y-auto">
          <p className="text-[11px] text-slate-500 mb-6">Everything happening across the company</p>
          <div className="space-y-5">
            {ACTIVITY_FEED.map((activity, i) => {
              const Icon = IconMap[activity.icon];
              return (
                <div key={i} className="flex gap-3">
                  <div className={cn("mt-0.5 p-1.5 rounded-full bg-opacity-10 shrink-0", 
                    activity.color === 'emerald' ? 'bg-emerald-500 text-emerald-600' :
                    activity.color === 'indigo' ? 'bg-indigo-500 text-indigo-600' :
                    activity.color === 'amber' ? 'bg-amber-500 text-amber-600' : 'bg-blue-500 text-blue-600'
                  )}>
                    {Icon && <Icon className="h-3 w-3" />}
                  </div>
                  <div>
                    <p className="text-[12px] font-medium text-slate-900 leading-snug">{activity.title}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{activity.time}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* SECTION 15: AI Summary */}
      <div>
        <div className="mb-6 pl-2">
          <p className="text-[10px] font-bold text-[#00A56C] uppercase tracking-widest mb-0.5">Section 15</p>
          <h2 className="text-[22px] font-black text-slate-900 tracking-tight flex items-center gap-2">
            AI Summary <Sparkles className="h-5 w-5 text-indigo-500" />
          </h2>
        </div>
        <div className="bg-indigo-900 rounded-3xl p-6 text-white shadow-sm h-[320px] overflow-y-auto relative">
          <p className="text-[11px] text-indigo-200 mb-6">Generated from attendance, sales, finance and delivery signals</p>
          
          <div className="mb-6">
            <p className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider mb-1">Sales Prediction</p>
            <p className="text-[28px] font-black text-white leading-none mb-1">{AI_SUMMARY.prediction}</p>
            <p className="text-[11px] text-indigo-300">{AI_SUMMARY.predictionText}</p>
          </div>

          <div>
            <p className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider mb-3">Suggested Actions</p>
            <div className="space-y-3">
              {AI_SUMMARY.actions.map((action, i) => (
                <div key={i} className="flex gap-2">
                  <ArrowRight className="h-3 w-3 text-indigo-400 mt-0.5 shrink-0" />
                  <p className="text-[12px] font-medium leading-snug text-indigo-100">{action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
