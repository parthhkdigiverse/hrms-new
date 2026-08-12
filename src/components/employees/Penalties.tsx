import { useState } from "react";
import { Search, AlertTriangle, MessageSquareWarning, ThumbsUp, ShieldAlert, Plus, DollarSign, CheckCircle2, XCircle, Filter } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type RecordType = "Penalty" | "Warning";
type RecordStatus = "Active" | "Resolved" | "Waived";

interface DisciplinaryRecord {
  id: string;
  employee: {
    name: string;
    role: string;
    avatar: string;
  };
  type: RecordType;
  date: string;
  description: string;
  status: RecordStatus;
  amount: number | null;
  impactPayroll: boolean;
  resolutionReason?: string;
}

const MOCK_RECORDS: DisciplinaryRecord[] = [
  {
    id: "REC-001",
    employee: { name: "Sarah Connor", role: "Frontend Developer", avatar: "https://i.pravatar.cc/150?u=sarah" },
    type: "Penalty",
    date: "Aug 10, 2026",
    description: "Repeated late arrivals (more than 3 times this month) without prior notice.",
    status: "Active",
    amount: 50,
    impactPayroll: true,
  },
  {
    id: "REC-002",
    employee: { name: "John Smith", role: "Backend Developer", avatar: "https://i.pravatar.cc/150?u=john" },
    type: "Warning",
    date: "Aug 05, 2026",
    description: "Missed mandatory security training deadline.",
    status: "Resolved",
    amount: null,
    impactPayroll: false,
  },
  {
    id: "REC-004",
    employee: { name: "Michael Chang", role: "DevOps Engineer", avatar: "https://i.pravatar.cc/150?u=michael" },
    type: "Penalty",
    date: "Jul 15, 2026",
    description: "Unauthorized access to production database.",
    status: "Waived",
    amount: 150,
    impactPayroll: true,
  }
];

export function Penalties() {
  const [records, setRecords] = useState<DisciplinaryRecord[]>(MOCK_RECORDS);
  const [activeTab, setActiveTab] = useState<"All" | RecordType>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // New Record State
  const [isNewOpen, setIsNewOpen] = useState(false);
  const [newType, setNewType] = useState<RecordType>("Penalty");
  const [newEmpName, setNewEmpName] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newImpact, setNewImpact] = useState(true);

  // Update Status State
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [updateAction, setUpdateAction] = useState<"Waived" | "Resolved">("Resolved");
  const [updateRecordId, setUpdateRecordId] = useState<string | null>(null);
  const [updateReason, setUpdateReason] = useState("");

  const filteredRecords = records.filter(rec => {
    const matchesTab = activeTab === "All" || rec.type === activeTab;
    const matchesSearch = rec.employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          rec.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const openUpdateDialog = (id: string, action: "Waived" | "Resolved") => {
    setUpdateRecordId(id);
    setUpdateAction(action);
    setUpdateReason("");
    setIsUpdateOpen(true);
  };

  const handleConfirmUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!updateReason.trim() || !updateRecordId) {
      toast.error("Please provide a reason.");
      return;
    }
    
    setRecords(records.map(rec => rec.id === updateRecordId ? { 
      ...rec, 
      status: updateAction,
      resolutionReason: updateReason 
    } : rec));
    
    toast.success(`Record marked as ${updateAction}`);
    setIsUpdateOpen(false);
  };

  const handleCreateRecord = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmpName.trim() || !newDesc.trim()) {
      toast.error("Please fill in required fields.");
      return;
    }

    const newRecord: DisciplinaryRecord = {
      id: `REC-${Math.floor(Math.random() * 1000)}`,
      employee: {
        name: newEmpName,
        role: "Team Member",
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(newEmpName)}&background=random`
      },
      type: newType,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      description: newDesc,
      status: "Active",
      amount: newType === "Penalty" ? parseFloat(newAmount) || 0 : null,
      impactPayroll: newType === "Penalty" ? newImpact : false,
    };

    setRecords([newRecord, ...records]);
    setIsNewOpen(false);
    toast.success(`${newType} record created for ${newEmpName}`);
    
    // Reset
    setNewEmpName("");
    setNewDesc("");
    setNewAmount("");
    setNewType("Penalty");
    setNewImpact(true);
  };

  const activePenaltiesCount = records.filter(r => r.type === "Penalty" && r.status === "Active").length;
  const totalDeductions = records.filter(r => r.type === "Penalty" && r.status === "Active" && r.impactPayroll).reduce((sum, r) => sum + (r.amount || 0), 0);

  return (
    <div className="space-y-8 h-[calc(100vh-8rem)] flex flex-col overflow-hidden pb-4">
      {/* Header/Stats */}
      <div className="shrink-0 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <ShieldAlert className="w-64 h-64 text-slate-900" />
        </div>
        
        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Penalties & Warnings</h1>
            <p className="text-sm text-slate-500 max-w-xl">
              Track disciplinary actions and warnings. Active penalties marked for payroll will automatically be deducted in the next cycle.
            </p>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4 flex items-center gap-4 min-w-[160px]">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-rose-500 shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-rose-600/70 uppercase tracking-wider mb-0.5">Active</p>
                <p className="text-2xl font-black text-rose-700 leading-none">{activePenaltiesCount}</p>
              </div>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 flex items-center gap-4 min-w-[160px]">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-500 shrink-0">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-indigo-600/70 uppercase tracking-wider mb-0.5">Payroll Impact</p>
                <p className="text-2xl font-black text-indigo-700 leading-none">${totalDeductions}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-0 bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50 shrink-0">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
            {(["All", "Penalty", "Warning"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-200 border",
                  activeTab === tab 
                    ? "bg-slate-900 text-white border-slate-900 shadow-md" 
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search records..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
            </div>
            
            <Dialog open={isNewOpen} onOpenChange={setIsNewOpen}>
              <DialogTrigger asChild>
                <button className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm shrink-0">
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Add Record</span>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Add Disciplinary Record</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleCreateRecord} className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Record Type</label>
                    <select 
                      value={newType}
                      onChange={e => setNewType(e.target.value as RecordType)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 font-medium"
                    >
                      <option value="Penalty">Penalty (Financial impact possible)</option>
                      <option value="Warning">Warning (Written notice)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Employee Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. John Doe"
                      value={newEmpName}
                      onChange={e => setNewEmpName(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>
                  
                  {newType === "Penalty" && (
                    <div className="flex gap-4">
                      <div className="space-y-2 flex-1">
                        <label className="text-sm font-bold text-slate-700">Deduction Amount ($)</label>
                        <input 
                          type="number" 
                          placeholder="e.g. 50"
                          value={newAmount}
                          onChange={e => setNewAmount(e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                        />
                      </div>
                      <div className="space-y-2 flex-1 flex flex-col justify-end pb-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={newImpact}
                            onChange={e => setNewImpact(e.target.checked)}
                            className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <span className="text-sm font-bold text-slate-700">Affect Payroll</span>
                        </label>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Description / Reason</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Provide details..."
                      value={newDesc}
                      onChange={e => setNewDesc(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none"
                    />
                  </div>
                  <div className="pt-4 flex justify-end gap-3">
                    <button 
                      type="button" 
                      onClick={() => setIsNewOpen(false)}
                      className="px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm rounded-xl transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition-colors"
                    >
                      Save Record
                    </button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>

            <Dialog open={isUpdateOpen} onOpenChange={setIsUpdateOpen}>
              <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                  <DialogTitle>{updateAction === "Waived" ? "Waive Penalty" : "Resolve Issue"}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleConfirmUpdate} className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">
                      Reason for {updateAction === "Waived" ? "Waiving" : "Resolving"}
                    </label>
                    <textarea 
                      required
                      rows={3}
                      placeholder={`Why is this being ${updateAction.toLowerCase()}?`}
                      value={updateReason}
                      onChange={e => setUpdateReason(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none"
                    />
                  </div>
                  <div className="pt-4 flex justify-end gap-3">
                    <button 
                      type="button" 
                      onClick={() => setIsUpdateOpen(false)}
                      className="px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm rounded-xl transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition-colors"
                    >
                      Confirm
                    </button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-3">
            {filteredRecords.length > 0 ? filteredRecords.map(record => (
              <div key={record.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-100 hover:border-slate-200 bg-white transition-all shadow-sm hover:shadow-md group">
                <div className="flex items-start gap-4 flex-1">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border",
                    record.type === "Penalty" ? "bg-rose-50 text-rose-500 border-rose-100" :
                    "bg-amber-50 text-amber-500 border-amber-100"
                  )}>
                    {record.type === "Penalty" ? <AlertTriangle className="w-5 h-5" /> : 
                     <MessageSquareWarning className="w-5 h-5" />}
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-slate-900">{record.employee.name}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs font-medium text-slate-500">{record.date}</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-2">{record.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={cn(
                        "text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider",
                        record.type === "Penalty" ? "bg-rose-100 text-rose-700" :
                        "bg-amber-100 text-amber-700"
                      )}>
                        {record.type}
                      </span>
                      
                      {record.type === "Penalty" && record.amount !== null && (
                        <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                          Amount: ${record.amount}
                        </span>
                      )}
                      
                      {record.impactPayroll && record.status === "Active" && (
                        <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-md uppercase tracking-wider">
                          Affects Payroll
                        </span>
                      )}
                    </div>
                    
                    {record.resolutionReason && (
                      <div className="mt-3 bg-slate-50 border border-slate-100 rounded-lg p-3">
                        <p className="text-xs font-bold text-slate-700 mb-1">Reason for {record.status}:</p>
                        <p className="text-sm text-slate-600">{record.resolutionReason}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between gap-3 shrink-0 pt-3 sm:pt-0 border-t border-slate-100 sm:border-0 mt-3 sm:mt-0">
                  <div className={cn(
                    "text-xs font-bold px-3 py-1 rounded-full border",
                    record.status === "Active" ? "bg-slate-900 text-white border-slate-900" :
                    record.status === "Resolved" ? "bg-emerald-50 text-emerald-600 border-emerald-200" :
                    record.status === "Waived" ? "bg-slate-100 text-slate-500 border-slate-200" :
                    "bg-slate-50 text-slate-400 border-slate-200"
                  )}>
                    {record.status}
                  </div>
                  
                  {record.status === "Active" && (record.type === "Penalty" || record.type === "Warning") && (
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => openUpdateDialog(record.id, "Waived")}
                        className="px-3 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                      >
                        Waive
                      </button>
                      <button 
                        onClick={() => openUpdateDialog(record.id, "Resolved")}
                        className="px-3 py-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
                      >
                        Resolve
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )) : (
              <div className="flex flex-col items-center justify-center py-16 text-center bg-slate-50/50 rounded-2xl border border-slate-100 border-dashed">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-slate-100 text-slate-400">
                  <ShieldAlert className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-700 mb-1">No records found</h3>
                <p className="text-slate-500 text-sm max-w-sm">No disciplinary actions or warnings match your current filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
