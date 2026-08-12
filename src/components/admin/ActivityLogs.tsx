import { useState } from "react";
import { Search, ShieldAlert, Activity, Users, DollarSign, Settings, TerminalSquare, AlertTriangle, Key } from "lucide-react";
import { cn } from "@/lib/utils";

type LogCategory = "All" | "Auth" | "People" | "Payroll" | "System";
type LogSeverity = "Info" | "Warning" | "Critical";

interface ActivityLog {
  id: string;
  timestamp: string;
  user: {
    name: string;
    avatar: string;
    role: string;
  };
  action: string;
  category: LogCategory;
  severity: LogSeverity;
  metadata?: string;
  ip: string;
}

const MOCK_LOGS: ActivityLog[] = [
  {
    id: "LOG-1001",
    timestamp: "10:45 AM, Today",
    user: { name: "System Admin", avatar: "https://i.pravatar.cc/150?u=admin", role: "Superadmin" },
    action: "Updated Global Payroll Settings",
    category: "System",
    severity: "Warning",
    metadata: "Changed default tax rate from 15% to 15.5%",
    ip: "192.168.1.45"
  },
  {
    id: "LOG-1002",
    timestamp: "09:30 AM, Today",
    user: { name: "Jessica Davis", avatar: "https://i.pravatar.cc/150?u=jess", role: "HR Manager" },
    action: "Onboarded New Employee",
    category: "People",
    severity: "Info",
    metadata: "Employee ID: EMP-0042 (Sarah Jenkins)",
    ip: "10.0.0.12"
  },
  {
    id: "LOG-1003",
    timestamp: "08:15 AM, Today",
    user: { name: "Unknown User", avatar: "https://ui-avatars.com/api/?name=Unknown&background=EF4444&color=fff", role: "Guest" },
    action: "Failed Login Attempt (5x)",
    category: "Auth",
    severity: "Critical",
    metadata: "Account locked for j.smith@company.com",
    ip: "203.0.113.42"
  },
  {
    id: "LOG-1004",
    timestamp: "Yesterday, 04:20 PM",
    user: { name: "Robert Chen", avatar: "https://i.pravatar.cc/150?u=robert", role: "Finance Lead" },
    action: "Approved Monthly Payroll Run",
    category: "Payroll",
    severity: "Info",
    metadata: "Total dispersed: $142,500.00",
    ip: "192.168.1.88"
  },
  {
    id: "LOG-1005",
    timestamp: "Yesterday, 11:10 AM",
    user: { name: "Sarah Connor", avatar: "https://i.pravatar.cc/150?u=sarah", role: "Frontend Developer" },
    action: "Logged In",
    category: "Auth",
    severity: "Info",
    ip: "192.168.1.104"
  },
  {
    id: "LOG-1006",
    timestamp: "Aug 10, 09:00 AM",
    user: { name: "System Admin", avatar: "https://i.pravatar.cc/150?u=admin", role: "Superadmin" },
    action: "Deleted Employee Record",
    category: "People",
    severity: "Critical",
    metadata: "Record ID: EMP-0012 removed permanently.",
    ip: "192.168.1.45"
  }
];

const getCategoryIcon = (category: LogCategory) => {
  switch (category) {
    case "Auth": return <Key className="w-4 h-4" />;
    case "People": return <Users className="w-4 h-4" />;
    case "Payroll": return <DollarSign className="w-4 h-4" />;
    case "System": return <Settings className="w-4 h-4" />;
    default: return <Activity className="w-4 h-4" />;
  }
};

export function ActivityLogs() {
  const [activeTab, setActiveTab] = useState<LogCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLogs = MOCK_LOGS.filter(log => {
    const matchesTab = activeTab === "All" || log.category === activeTab;
    const matchesSearch = log.action.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          log.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (log.metadata && log.metadata.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-8 h-[calc(100vh-8rem)] flex flex-col overflow-hidden pb-4">
      {/* Header & Stats */}
      <div className="shrink-0 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <TerminalSquare className="w-64 h-64 text-slate-900" />
        </div>
        
        <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Activity Logs</h1>
            <p className="text-sm text-slate-500 max-w-xl">
              System-wide audit trail. Monitor logins, configuration changes, and critical administrative actions.
            </p>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center gap-4 min-w-[160px]">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-500 shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Events Today</p>
                <p className="text-2xl font-black text-slate-900 leading-none">1,248</p>
              </div>
            </div>
            
            <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4 flex items-center gap-4 min-w-[160px]">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-rose-500 shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-rose-600/70 uppercase tracking-wider mb-0.5">Critical Alerts</p>
                <p className="text-2xl font-black text-rose-700 leading-none">3</p>
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
            {(["All", "Auth", "People", "Payroll", "System"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-200 border flex items-center gap-2",
                  activeTab === tab 
                    ? "bg-slate-900 text-white border-slate-900 shadow-md" 
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                )}
              >
                {tab !== "All" && getCategoryIcon(tab)}
                {tab}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search logs..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/20 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Timeline List */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50/30">
          <div className="max-w-4xl mx-auto">
            {filteredLogs.length > 0 ? (
              <div className="relative border-l border-slate-200 ml-4 space-y-8 pb-8">
                {filteredLogs.map(log => (
                  <div key={log.id} className="relative pl-8 sm:pl-12 group">
                    {/* Timeline Node */}
                    <div className={cn(
                      "absolute -left-[1.1rem] top-1 w-8 h-8 rounded-full border-4 border-slate-50 flex items-center justify-center shadow-sm",
                      log.severity === "Critical" ? "bg-rose-500" :
                      log.severity === "Warning" ? "bg-amber-400" :
                      "bg-indigo-500"
                    )}>
                      {log.severity === "Critical" ? <ShieldAlert className="w-3.5 h-3.5 text-white" /> :
                       log.severity === "Warning" ? <AlertTriangle className="w-3.5 h-3.5 text-white" /> :
                       <Activity className="w-3.5 h-3.5 text-white" />}
                    </div>

                    {/* Content Card */}
                    <div className={cn(
                      "bg-white rounded-2xl p-5 shadow-sm border transition-all duration-200 group-hover:shadow-md",
                      log.severity === "Critical" ? "border-rose-200 bg-rose-50/30" : 
                      log.severity === "Warning" ? "border-amber-200 bg-amber-50/30" : 
                      "border-slate-200 hover:border-slate-300"
                    )}>
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          <img 
                            src={log.user.avatar} 
                            alt={log.user.name}
                            className="w-10 h-10 rounded-full border border-slate-200 object-cover"
                          />
                          <div>
                            <p className="font-bold text-slate-900 leading-tight">
                              {log.user.name}
                              <span className="text-slate-400 font-medium ml-2">({log.user.role})</span>
                            </p>
                            <p className="text-sm font-bold text-slate-700 mt-0.5">{log.action}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end shrink-0">
                          <span className="text-xs font-bold text-slate-400">{log.timestamp}</span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md mt-1">
                            IP: {log.ip}
                          </span>
                        </div>
                      </div>

                      {log.metadata && (
                        <div className={cn(
                          "mt-3 text-sm p-3 rounded-xl border font-mono",
                          log.severity === "Critical" ? "bg-rose-100/50 border-rose-200 text-rose-800" :
                          log.severity === "Warning" ? "bg-amber-100/50 border-amber-200 text-amber-800" :
                          "bg-slate-50 border-slate-100 text-slate-600"
                        )}>
                          {log.metadata}
                        </div>
                      )}
                      
                      <div className="mt-4 flex items-center gap-2">
                        <span className={cn(
                          "text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider flex items-center gap-1",
                          "bg-slate-100 text-slate-600 border border-slate-200"
                        )}>
                          {getCategoryIcon(log.category)}
                          {log.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-slate-200 text-slate-400">
                  <TerminalSquare className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-700 mb-1">No logs found</h3>
                <p className="text-slate-500 text-sm max-w-sm">No activity logs match your current filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
