import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { FINANCE_METRICS, CASH_FLOW, PROFIT_TREND } from "../dashboard-data";
import { CollapsibleSection } from "./CollapsibleSection";

export function FinanceOverview() {
  return (
    <div className="mb-12">
      <CollapsibleSection section="Section 08" title="Finance Overview">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between">
            <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider mb-2">Today's Income</p>
            <p className="text-[26px] font-black text-emerald-700 leading-none">{FINANCE_METRICS.todayIncome}</p>
          </div>
          <div className="bg-rose-50 border border-rose-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between">
            <p className="text-[11px] font-bold text-rose-600 uppercase tracking-wider mb-2">Today's Expense</p>
            <p className="text-[26px] font-black text-rose-700 leading-none">{FINANCE_METRICS.todayExpense}</p>
          </div>
          <div className="bg-white border border-border/60 rounded-3xl p-5 shadow-sm flex flex-col justify-between col-span-2">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Outstanding Payments</p>
            <p className="text-3xl font-black text-slate-900">{FINANCE_METRICS.outstanding}</p>
          </div>
          <div className="bg-white border border-border/60 rounded-3xl p-5 shadow-sm flex flex-col justify-between">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 leading-tight">Pending Client Payments</p>
            <p className="text-[22px] font-black text-blue-500 mt-2">{FINANCE_METRICS.pendingClient}</p>
          </div>
          <div className="bg-white border border-border/60 rounded-3xl p-5 shadow-sm flex flex-col justify-between">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 leading-tight">Pending Vendor Payments</p>
            <p className="text-[22px] font-black text-amber-500 mt-2">{FINANCE_METRICS.pendingVendor}</p>
          </div>
        </div>

        {/* Cash Flow */}
        <div className="bg-white border border-border/60 rounded-3xl p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="font-bold text-slate-900">Cash Flow</h3>
            <p className="text-[11px] text-slate-500">Revenue vs expense (₹ thousands)</p>
          </div>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={CASH_FLOW} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e11d48" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#e11d48" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorRev)" />
                <Area type="monotone" dataKey="expense" stroke="#e11d48" strokeWidth={2} fillOpacity={1} fill="url(#colorExp)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Profit Trend */}
        <div className="bg-white border border-border/60 rounded-3xl p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="font-bold text-slate-900">Profit Trend</h3>
            <p className="text-[11px] text-slate-500">Net profit per month</p>
          </div>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={PROFIT_TREND} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Area type="monotone" dataKey="profit" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorProfit)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        </div>
      </CollapsibleSection>
    </div>
  );
}
