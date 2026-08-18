import { useState } from "react";
import { Search, Plus, Filter, Clock, CheckCircle2, XCircle, MoreHorizontal, FileText, ScrollText } from "lucide-react";
import { format } from "date-fns";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type WorkLog = {
  id: string;
  employee: string;
  avatar: string;
  date: string;
  project: string;
  task: string;
  hours: number;
  status: "Approved" | "Pending" | "Rejected";
  description: string;
};

const MOCK_LOGS: WorkLog[] = [
  { id: "1", employee: "Sarah Connor", avatar: "https://i.pravatar.cc/150?u=sarah", date: "2026-08-12", project: "Mobile App Redesign", task: "UI Mockups", hours: 4.5, status: "Approved", description: "Completed initial wireframes for onboarding." },
  { id: "2", employee: "John Doe", avatar: "https://i.pravatar.cc/150?u=john", date: "2026-08-12", project: "Backend API", task: "Database Migration", hours: 6, status: "Pending", description: "Started migration scripts for user table." },
  { id: "3", employee: "Emily Chen", avatar: "https://i.pravatar.cc/150?u=emily", date: "2026-08-11", project: "Marketing Site", task: "SEO Optimization", hours: 3, status: "Approved", description: "Updated meta tags and alt text across all pages." },
  { id: "4", employee: "Michael Brown", avatar: "https://i.pravatar.cc/150?u=michael", date: "2026-08-11", project: "Mobile App Redesign", task: "Bug Fixing", hours: 2.5, status: "Rejected", description: "Fixed login screen crash." },
];

export function WorkLogs() {
  const [logs, setLogs] = useState(MOCK_LOGS);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLogs = logs.filter(log => 
    log.employee.toLowerCase().includes(searchQuery.toLowerCase()) || 
    log.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.task.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalHours = logs.reduce((sum, log) => sum + log.hours, 0);
  const pendingCount = logs.filter(l => l.status === "Pending").length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Work Logs</h1>
          <p className="text-sm text-muted-foreground mt-1">Track and manage employee time and activities</p>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search logs..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          
          <button className="px-3 py-2 bg-white border border-border text-foreground/80 hover:bg-muted/50 rounded-xl flex items-center gap-2 transition-colors shrink-0">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-bold hidden sm:inline">Filter</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-border flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-muted-foreground mb-1">Total Hours Logged</p>
            <p className="text-3xl font-black text-foreground">{totalHours}h</p>
          </div>
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <Clock className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-border flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-muted-foreground mb-1">Pending Approvals</p>
            <p className="text-3xl font-black text-amber-600">{pendingCount}</p>
          </div>
          <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
            <Clock className="w-6 h-6 text-amber-600" />
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-border flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-muted-foreground mb-1">Approved Logs</p>
            <p className="text-3xl font-black text-emerald-600">{logs.length - pendingCount}</p>
          </div>
          <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
          </div>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-muted-foreground uppercase tracking-wider">Employee</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-muted-foreground uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-muted-foreground uppercase tracking-wider">Project / Task</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-muted-foreground uppercase tracking-wider">Description</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-muted-foreground uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-muted/50/50 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <img src={log.avatar} alt={log.employee} className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm" />
                      <div className="font-bold text-foreground text-sm">{log.employee}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-foreground">{format(new Date(log.date), "dd/MM/yyyy")}</div>
                    <div className="text-xs font-medium text-muted-foreground flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" /> {log.hours} hours
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-bold text-primary">{log.project}</div>
                    <div className="text-xs font-medium text-muted-foreground flex items-center gap-1 mt-0.5">
                      <FileText className="w-3 h-3" /> {log.task}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-foreground/80 line-clamp-2 max-w-xs">{log.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 w-fit",
                      log.status === "Approved" && "bg-emerald-50 text-emerald-700",
                      log.status === "Pending" && "bg-amber-50 text-amber-700",
                      log.status === "Rejected" && "bg-rose-50 text-rose-700"
                    )}>
                      {log.status === "Approved" && <CheckCircle2 className="w-3.5 h-3.5" />}
                      {log.status === "Pending" && <Clock className="w-3.5 h-3.5" />}
                      {log.status === "Rejected" && <XCircle className="w-3.5 h-3.5" />}
                      {log.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="p-2 text-muted-foreground hover:text-foreground/80 hover:bg-muted rounded-lg transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
              
              {filteredLogs.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                      <ScrollText className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">No logs found</h3>
                    <p className="text-sm text-muted-foreground mt-1">Try adjusting your search or filters.</p>
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
