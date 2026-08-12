import { useState } from "react";
import { Search, Download, Target, Plus, Info, Edit3, Trash2, ArrowRight } from "lucide-react";

const mockPlanData = {
  "FINANCIAL - REVENUE": [
    { id: 1, subCategory: "Product Sales", metric: "Bef Revenue", unit: "INR", target: "₹1,500,000" },
    { id: 2, subCategory: "Services", metric: "ERP Revenue", unit: "INR", target: "₹450,000" },
  ],
  "FINANCIAL - EXPENSE": [
    { id: 3, subCategory: "Capex", metric: "Digital Assets", unit: "INR", target: "₹200,000" },
    { id: 4, subCategory: "Opex", metric: "Office Rent", unit: "INR", target: "₹50,000" },
    { id: 5, subCategory: "Payroll", metric: "Current Salaries", unit: "INR", target: "₹450,000" },
    { id: 6, subCategory: "Marketing", metric: "Digital Ads", unit: "INR", target: "₹120,000" },
  ],
  "STAFFING": [
    { id: 7, subCategory: "Headcount", metric: "Developers", unit: "Number", target: "12" },
    { id: 8, subCategory: "Headcount", metric: "Creative Team", unit: "Number", target: "4" },
    { id: 9, subCategory: "Headcount", metric: "Digital Marketing", unit: "Number", target: "3" },
  ],
  "ASSETS": [
    { id: 10, subCategory: "Physical", metric: "AC & Furniture", unit: "Number", target: "15" },
    { id: 11, subCategory: "Digital", metric: "Laptops", unit: "Number", target: "24" },
    { id: 12, subCategory: "Software", metric: "CHAT GPT PLUS", unit: "Active", target: "Active" },
    { id: 13, subCategory: "Software", metric: "GOOGLE AI", unit: "Active", target: "Inactive" },
  ],
};

export function FinancialPlan() {
  return (
    <div className="w-full max-w-[1400px] mx-auto space-y-6 animate-in fade-in duration-500 pb-12">
      
      {/* Header */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-foreground flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            Financial Planning & Targets
          </h1>
          <p className="text-muted-foreground mt-1 text-sm font-medium">
            Set and track categorical budgets and financial targets for the fiscal year.
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <button className="px-4 py-2 bg-background border border-border/50 text-foreground font-bold rounded-lg hover:bg-muted/50 transition-colors shadow-sm flex items-center gap-2 text-sm">
            <Download className="w-4 h-4 text-indigo-500" /> Export Plan
          </button>
          <button className="px-4 py-2 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity shadow-sm flex items-center gap-2 text-sm">
            <Plus className="w-4 h-4" /> Add Category
          </button>
        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 flex gap-3 text-blue-700/90 dark:text-blue-400 items-start">
        <Info className="w-5 h-5 shrink-0 mt-0.5" />
        <div className="text-sm font-medium">
          Fields marked with count or totals are automatically calculated. Click 'Manage Items' to enter multiple line items.
        </div>
      </div>

      <div className="bg-card border border-border/50 rounded-2xl shadow-sm flex flex-col overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="bg-rose-700 text-white font-extrabold uppercase tracking-widest text-[10px]">
              <tr>
                <th className="p-4 border-r border-rose-800/50">Category</th>
                <th className="p-4 border-r border-rose-800/50">Sub-Category</th>
                <th className="p-4 border-r border-rose-800/50">Metric</th>
                <th className="p-4 border-r border-rose-800/50">Unit</th>
                <th className="p-4 w-[240px] text-right border-r border-rose-800/50">Plan Target Value</th>
                <th className="p-4 w-[100px] text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {Object.entries(mockPlanData).map(([categoryName, rows]) => (
                <div key={categoryName} className="contents">
                  {/* Category Header Row */}
                  <tr className="bg-muted/50 font-extrabold text-foreground group border-y border-border/50">
                    <td colSpan={6} className="px-4 py-3 uppercase tracking-wide text-xs">
                      <div className="flex items-center justify-between">
                        <span>{categoryName}</span>
                        <button className="text-rose-500 hover:text-rose-600 text-xs font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-md hover:bg-rose-500/10 border-none outline-none">
                          <Trash2 className="w-3.5 h-3.5" /> Remove Category
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Sub-Category Rows */}
                  {rows.map((row) => (
                    <tr key={row.id} className="hover:bg-muted/30 transition-colors group">
                      <td className="p-4 border-r border-border/50 bg-muted/10"></td>
                      <td className="p-4 text-sm font-bold text-foreground border-r border-border/50">
                        {row.subCategory}
                      </td>
                      <td className="p-4 text-sm font-medium text-muted-foreground border-r border-border/50">
                        {row.metric}
                      </td>
                      <td className="p-4 text-xs font-bold text-muted-foreground border-r border-border/50">
                        <span className="px-2 py-0.5 rounded bg-background border border-border/50">{row.unit}</span>
                      </td>
                      <td className="p-4 text-right font-black text-emerald-600 border-r border-border/50 cursor-pointer hover:bg-muted/50 transition-colors group-hover:bg-muted/40">
                        {row.target}
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-md hover:bg-muted">
                            <Edit3 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {/* Add Row Button for Category */}
                  <tr>
                    <td colSpan={6} className="p-2 border-r border-border/50 bg-muted/10 text-center">
                      <button className="text-xs font-bold text-primary hover:text-primary/80 flex items-center justify-center gap-1 w-full py-1.5 hover:bg-primary/5 rounded-md transition-colors">
                        <Plus className="w-3.5 h-3.5" /> Add Row to {categoryName}
                      </button>
                    </td>
                  </tr>
                </div>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
