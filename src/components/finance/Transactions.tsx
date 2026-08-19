import { useState } from "react";
import { Search, Download, Plus, RefreshCw, Wallet, Building2, Calendar, Filter, ArrowDownLeft, ArrowUpRight, ArrowRight, Edit3, Trash2, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const mockCreditTransactions = [
  { id: 'INV-001', date: '15/6/2026', amount: 1234.00, category: 'Sales', description: 'test', service: 'fgh', remarks: '1. Payment is due w...' },
];

const mockDebitTransactions = [
  { id: '2607006', date: '14/7/2026', amount: 6543.00, category: 'General', things: 'Expense', narrative: '-' },
];

export function Transactions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeAccountTab, setActiveAccountTab] = useState<"bank" | "cash">("cash");

  // Modal States
  const [isAddCreditOpen, setIsAddCreditOpen] = useState(false);
  const [isAddDebtOpen, setIsAddDebtOpen] = useState(false);

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-500 pb-12 relative">
      
      {/* Header */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-foreground">
            Financial Ledger Management
          </h1>
          <p className="text-muted-foreground mt-1 text-sm font-medium">
            Track Credit (Invoices) and Debt (Expenses) with dynamic balance calculations
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <button className="px-4 py-2 bg-background border border-border/50 text-foreground font-bold rounded-lg hover:bg-muted/50 transition-colors shadow-sm flex items-center gap-2 text-sm">
            <RefreshCw className="w-4 h-4 text-emerald-500" /> Sync Invoices
          </button>
          <button className="px-4 py-2 bg-background border border-border/50 text-foreground font-bold rounded-lg hover:bg-muted/50 transition-colors shadow-sm flex items-center gap-2 text-sm">
            <Wallet className="w-4 h-4 text-amber-500" /> Opening Balances
          </button>
          <button className="px-4 py-2 bg-background border border-border/50 text-foreground font-bold rounded-lg hover:bg-muted/50 transition-colors shadow-sm flex items-center gap-2 text-sm">
            <Download className="w-4 h-4 text-indigo-500" /> Export Ledger
          </button>
          <button 
            onClick={() => setIsAddCreditOpen(true)}
            className="px-4 py-2 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors shadow-sm flex items-center gap-2 text-sm"
          >
            <Plus className="w-4 h-4" /> Add Credit (Invoice)
          </button>
          <button 
            onClick={() => setIsAddDebtOpen(true)}
            className="px-4 py-2 bg-rose-600 text-white font-bold rounded-lg hover:bg-rose-700 transition-colors shadow-sm flex items-center gap-2 text-sm"
          >
            <Plus className="w-4 h-4" /> Add Debt (Expense)
          </button>
        </div>
      </div>

      {/* Account Tabs & Search */}
      <div className="flex flex-col md:flex-row justify-between gap-4 bg-muted/30 p-2 rounded-2xl border border-border/50">
        <div className="flex gap-2">
          <button
            className={`px-6 py-2.5 text-sm font-bold rounded-xl transition-all flex items-center gap-2 ${
              activeAccountTab === "bank"
                ? "bg-background shadow-sm text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
            onClick={() => setActiveAccountTab("bank")}
          >
            <Building2 className="w-4 h-4 text-emerald-600" /> Bank Acc Management
          </button>
          <button
            className={`px-6 py-2.5 text-sm font-bold rounded-xl transition-all flex items-center gap-2 ${
              activeAccountTab === "cash"
                ? "bg-background shadow-sm text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
            onClick={() => setActiveAccountTab("cash")}
          >
            <Wallet className="w-4 h-4 text-amber-600" /> Cash Transaction
          </button>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search invoices, expenses, narratives..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium shadow-sm"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="bg-background border border-border/50 rounded-2xl p-3 flex flex-wrap items-center gap-4 shadow-sm">
        <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground pl-2">
          <Filter className="w-4 h-4" /> Filters:
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground font-medium">From:</span>
          <div className="relative">
            <input type="text" placeholder="dd/mm/yyyy" className="pl-3 pr-8 py-1.5 bg-background border border-border/50 rounded-lg text-sm w-32 focus:outline-none focus:ring-2 focus:ring-primary/20" />
            <Calendar className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground font-medium">To:</span>
          <div className="relative">
            <input type="text" placeholder="dd/mm/yyyy" className="pl-3 pr-8 py-1.5 bg-background border border-border/50 rounded-lg text-sm w-32 focus:outline-none focus:ring-2 focus:ring-primary/20" />
            <Calendar className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground font-medium">Category:</span>
          <select className="pl-3 pr-8 py-1.5 bg-background border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer">
            <option>All Categories</option>
          </select>
        </div>
        {activeAccountTab === "bank" && (
          <div className="flex items-center gap-2 text-sm ml-2 border-l border-border/50 pl-4">
            <span className="text-muted-foreground font-medium">Sync Status:</span>
            <select className="pl-3 pr-8 py-1.5 bg-background border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer">
              <option>All Entries</option>
            </select>
          </div>
        )}
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        
        <div className="bg-card border border-border/50 rounded-2xl p-5 shadow-sm relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl" />
          <div className="text-muted-foreground font-extrabold text-[10px] uppercase tracking-widest mb-4">
            {activeAccountTab === "bank" ? "Opening Balance" : "Opening Cash Balance"}
          </div>
          <div className="text-3xl font-black text-foreground mb-4">₹0.000</div>
          <button className="text-amber-600 font-bold text-xs flex items-center gap-1 hover:text-amber-700 transition-colors">
            Configure Opening Balance <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="bg-card border border-border/50 rounded-2xl p-5 shadow-sm relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl" />
          <div className="text-muted-foreground font-extrabold text-[10px] uppercase tracking-widest mb-4 max-w-[140px] leading-tight">Transaction Total Credit</div>
          <div className="text-3xl font-black text-emerald-600 mb-4">+₹1.234</div>
          <div className="text-muted-foreground font-medium text-xs">1 credit entries synced</div>
        </div>

        <div className="bg-card border border-border/50 rounded-2xl p-5 shadow-sm relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl" />
          <div className="text-muted-foreground font-extrabold text-[10px] uppercase tracking-widest mb-4 max-w-[140px] leading-tight">Transaction Total Debt</div>
          <div className="text-3xl font-black text-rose-600 mb-4">-₹6.543</div>
          <div className="text-muted-foreground font-medium text-xs">1 expense entries recorded</div>
        </div>

        {activeAccountTab === "bank" ? (
          <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-sm relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-slate-800 rounded-full blur-xl" />
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-slate-700/50 rounded-full blur-xl" />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-3">
                <div className="font-extrabold text-[10px] uppercase tracking-widest text-slate-300 flex items-center gap-1.5">
                  <span className="text-amber-300">✨</span> Closing Balance In Bank
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                  <span className="text-sm font-bold">₹</span>
                </div>
              </div>
              <div className="text-4xl font-black mb-3 text-white">₹973.045</div>
              <div className="text-slate-400 font-medium text-[10px] leading-tight opacity-90 max-w-[180px]">
                Opening Balance + Total Credit - Total Debt
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-rose-700 text-white rounded-2xl p-5 shadow-sm relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-rose-800/50 rounded-full blur-xl" />
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-rose-600/50 rounded-full blur-xl" />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-3">
                <div className="font-extrabold text-[10px] uppercase tracking-widest text-rose-100 flex items-center gap-1.5">
                  <span className="text-amber-300">✨</span> Cash In Hand
                </div>
                <div className="w-8 h-8 rounded-full bg-rose-800/50 flex items-center justify-center border border-rose-600/30">
                  <span className="text-sm font-bold">₹</span>
                </div>
              </div>
              <div className="text-4xl font-black mb-3 text-white">₹-5.309</div>
              <div className="text-rose-200 font-medium text-[10px] leading-tight opacity-90 max-w-[180px]">
                Opening Balance + Total Credit - Total Debt
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Side-by-Side Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Credit Table */}
        <div className="bg-card border border-border/50 rounded-2xl shadow-sm flex flex-col h-full">
          <div className="p-4 border-b border-border/50 flex justify-between items-center bg-emerald-500/5 rounded-t-2xl">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <ArrowDownLeft className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-foreground text-lg leading-none">Credit <span className="text-muted-foreground font-bold text-sm">(Income / Invoices)</span></h3>
                <p className="text-xs text-muted-foreground font-medium mt-1">Auto-synced invoices and income</p>
              </div>
            </div>
            <button 
              onClick={() => setIsAddCreditOpen(true)}
              className="px-4 py-2 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors shadow-sm flex items-center gap-2 text-sm shrink-0"
            >
              <Plus className="w-4 h-4" /> Add Credit
            </button>
          </div>
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead className="bg-background text-muted-foreground text-[10px] font-black uppercase tracking-widest border-b border-border/50">
                <tr>
                  <th className="p-3 pl-4">Date ↕</th>
                  <th className="p-3">Amount ↕</th>
                  <th className="p-3">Category ↕</th>
                  <th className="p-3">Descriptions</th>
                  <th className="p-3">Services</th>
                  <th className="p-3">Remarks</th>
                  <th className="p-3 pr-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {mockCreditTransactions.map((trx, idx) => (
                  <tr key={idx} className="hover:bg-muted/30 transition-colors">
                    <td className="p-3 pl-4 text-xs font-bold text-muted-foreground">{trx.date}</td>
                    <td className="p-3 text-sm font-black text-emerald-600">
                      ₹{trx.amount.toLocaleString('en-IN', { minimumFractionDigits: 3 })}
                    </td>
                    <td className="p-3 text-xs font-bold text-foreground">{trx.category}</td>
                    <td className="p-3 text-xs font-medium text-foreground">{trx.description}</td>
                    <td className="p-3 text-xs font-medium text-foreground">{trx.service}</td>
                    <td className="p-3 text-xs font-medium text-muted-foreground truncate max-w-[100px]" title={trx.remarks}>{trx.remarks}</td>
                    <td className="p-3 pr-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button className="text-muted-foreground hover:text-foreground transition-colors"><Edit3 className="w-3.5 h-3.5" /></button>
                        <button className="text-rose-500 hover:text-rose-600 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-border/50 flex justify-between items-center bg-muted/10 rounded-b-2xl">
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Transaction Total Credit</span>
            <span className="text-base font-black text-emerald-600">₹1.234</span>
          </div>
        </div>

        {/* Debt Table */}
        <div className="bg-card border border-border/50 rounded-2xl shadow-sm flex flex-col h-full">
          <div className="p-4 border-b border-border/50 flex justify-between items-center bg-rose-500/5 rounded-t-2xl">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-foreground text-lg leading-none">Debt <span className="text-muted-foreground font-bold text-sm">(Expenses / Bills)</span></h3>
                <p className="text-xs text-muted-foreground font-medium mt-1">Automatic numbering (YYMMXXX format)</p>
              </div>
            </div>
            <button 
              onClick={() => setIsAddDebtOpen(true)}
              className="px-4 py-2 bg-rose-600 text-white font-bold rounded-lg hover:bg-rose-700 transition-colors shadow-sm flex items-center gap-2 text-sm shrink-0"
            >
              <Plus className="w-4 h-4" /> Add Debt
            </button>
          </div>
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead className="bg-background text-muted-foreground text-[10px] font-black uppercase tracking-widest border-b border-border/50">
                <tr>
                  <th className="p-3 pl-4">Expense No. ↕</th>
                  <th className="p-3">Date ↕</th>
                  <th className="p-3">Amount ↕</th>
                  <th className="p-3">Category ↕</th>
                  <th className="p-3">Things</th>
                  <th className="p-3">Narrative</th>
                  <th className="p-3 pr-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {mockDebitTransactions.map((trx, idx) => (
                  <tr key={idx} className="hover:bg-muted/30 transition-colors">
                    <td className="p-3 pl-4">
                      <span className="text-xs font-black text-foreground bg-muted/50 px-2 py-0.5 rounded-md border border-border/50">{trx.id}</span>
                    </td>
                    <td className="p-3 text-xs font-bold text-muted-foreground">{trx.date}</td>
                    <td className="p-3 text-sm font-black text-rose-600">
                      ₹{trx.amount.toLocaleString('en-IN', { minimumFractionDigits: 3 })}
                    </td>
                    <td className="p-3 text-xs font-bold text-foreground">{trx.category}</td>
                    <td className="p-3 text-xs font-medium text-foreground">{trx.things}</td>
                    <td className="p-3 text-xs font-medium text-muted-foreground">{trx.narrative}</td>
                    <td className="p-3 pr-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button className="text-muted-foreground hover:text-foreground transition-colors"><Edit3 className="w-3.5 h-3.5" /></button>
                        <button className="text-rose-500 hover:text-rose-600 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-border/50 flex justify-between items-center bg-muted/10 rounded-b-2xl">
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Transaction Total Debt</span>
            <span className="text-base font-black text-rose-600">₹6.543</span>
          </div>
        </div>

      </div>

      {/* --- ADD CREDIT MODAL --- */}
      <Dialog open={isAddCreditOpen} onOpenChange={setIsAddCreditOpen}>
        <DialogContent className="max-w-lg p-0 overflow-hidden rounded-2xl gap-0 border-border/50 shadow-2xl [&>button]:hidden bg-card">
          <div className="p-4 border-b border-border/50 flex justify-between items-center bg-emerald-500/5">
              <div>
                <h3 className="font-black text-lg text-foreground">Add Credit (Income / Invoice)</h3>
                <p className="text-xs font-medium text-muted-foreground">Record incoming funds.</p>
              </div>
              <button onClick={() => setIsAddCreditOpen(false)} className="p-2 hover:bg-muted rounded-full transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-muted-foreground">Invoice Number / Ref</label>
                  <input type="text" placeholder="e.g. INV-001" className="w-full px-3 py-2 bg-background border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-muted-foreground">Date *</label>
                  <input type="date" className="w-full px-3 py-2 bg-background border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-muted-foreground">Amount (₹) *</label>
                  <input type="number" placeholder="0.00" className="w-full px-3 py-2 bg-background border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-muted-foreground">Category *</label>
                  <select className="w-full px-3 py-2 bg-background border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>Sales</option>
                    <option>Services</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-muted-foreground">Descriptions</label>
                <input type="text" placeholder="Short description" className="w-full px-3 py-2 bg-background border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-muted-foreground">Services</label>
                <input type="text" placeholder="Service details" className="w-full px-3 py-2 bg-background border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-muted-foreground">Remarks</label>
                <textarea rows={2} placeholder="Any additional notes" className="w-full px-3 py-2 bg-background border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
            </div>
            <div className="p-4 border-t border-border/50 flex justify-end gap-2 bg-muted/10">
              <button onClick={() => setIsAddCreditOpen(false)} className="px-4 py-2 font-bold text-sm bg-background border border-border/50 rounded-lg hover:bg-muted transition-colors">Cancel</button>
              <button onClick={() => setIsAddCreditOpen(false)} className="px-4 py-2 font-bold text-sm bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">Save Credit</button>
            </div>
        </DialogContent>
      </Dialog>

      {/* --- ADD DEBT MODAL --- */}
      <Dialog open={isAddDebtOpen} onOpenChange={setIsAddDebtOpen}>
        <DialogContent className="max-w-lg p-0 overflow-hidden rounded-2xl gap-0 border-border/50 shadow-2xl [&>button]:hidden bg-card">
          <div className="p-4 border-b border-border/50 flex justify-between items-center bg-rose-500/5">
              <div>
                <h3 className="font-black text-lg text-foreground">Add Debt (Expense / Bill)</h3>
                <p className="text-xs font-medium text-muted-foreground">Record an outbound expense.</p>
              </div>
              <button onClick={() => setIsAddDebtOpen(false)} className="p-2 hover:bg-muted rounded-full transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-muted-foreground">Expense No. / Ref</label>
                  <input type="text" placeholder="Auto-generated if empty" className="w-full px-3 py-2 bg-background border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-muted-foreground">Date *</label>
                  <input type="date" className="w-full px-3 py-2 bg-background border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-muted-foreground">Amount (₹) *</label>
                  <input type="number" placeholder="0.00" className="w-full px-3 py-2 bg-background border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-muted-foreground">Category *</label>
                  <select className="w-full px-3 py-2 bg-background border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>General</option>
                    <option>Office</option>
                    <option>Travel</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-muted-foreground">Things</label>
                <input type="text" placeholder="What was purchased?" className="w-full px-3 py-2 bg-background border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-muted-foreground">Narrative</label>
                <textarea rows={2} placeholder="Expense description or narrative" className="w-full px-3 py-2 bg-background border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
            </div>
            <div className="p-4 border-t border-border/50 flex justify-end gap-2 bg-muted/10">
              <button onClick={() => setIsAddDebtOpen(false)} className="px-4 py-2 font-bold text-sm bg-background border border-border/50 rounded-lg hover:bg-muted transition-colors">Cancel</button>
              <button onClick={() => setIsAddDebtOpen(false)} className="px-4 py-2 font-bold text-sm bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors">Save Expense</button>
            </div>
        </DialogContent>
      </Dialog>

    </div>
  );
}
