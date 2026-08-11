import { useState, useMemo } from "react";
import { Check, X, Calendar, Clock, ChevronDown, Filter, CalendarDays, Activity, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useSettingsContext } from "../payroll/SettingsContext";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type LeaveStatus = "Pending" | "Approved" | "Rejected";

interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  avatar: string;
  role: string;
  department: string;
  type: string;
  startDate: string;
  endDate: string;
  durationDays: number;
  reason: string;
  status: LeaveStatus;
  appliedOn: string;
}

const MOCK_REQUESTS: LeaveRequest[] = [
  {
    id: "LR-001",
    employeeId: "EMP-012",
    employeeName: "Sneha Rao",
    avatar: "https://i.pravatar.cc/150?u=sneha",
    role: "UX Designer",
    department: "Design",
    type: "Sick Leave",
    startDate: "2026-08-14",
    endDate: "2026-08-15",
    durationDays: 2,
    reason: "Fever and cold, doctor advised rest.",
    status: "Pending",
    appliedOn: "2026-08-10",
  },
  {
    id: "LR-002",
    employeeId: "EMP-004",
    employeeName: "David Chen",
    avatar: "https://i.pravatar.cc/150?u=david",
    role: "Product Manager",
    department: "Product",
    type: "Annual Leave",
    startDate: "2026-09-01",
    endDate: "2026-09-07",
    durationDays: 5,
    reason: "Family vacation to Hawaii.",
    status: "Pending",
    appliedOn: "2026-08-09",
  },
  {
    id: "LR-003",
    employeeId: "EMP-028",
    employeeName: "Amit Patel",
    avatar: "https://i.pravatar.cc/150?u=amit",
    role: "Frontend Developer",
    department: "Engineering",
    type: "Casual Leave",
    startDate: "2026-08-18",
    endDate: "2026-08-18",
    durationDays: 1,
    reason: "Personal errands to attend to.",
    status: "Pending",
    appliedOn: "2026-08-08",
  },
  {
    id: "LR-004",
    employeeId: "EMP-041",
    employeeName: "Sarah Smith",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    role: "Marketing Specialist",
    department: "Marketing",
    type: "Sick Leave",
    startDate: "2026-08-12",
    endDate: "2026-08-13",
    durationDays: 2,
    reason: "Dental surgery appointment.",
    status: "Pending",
    appliedOn: "2026-08-07",
  },
  {
    id: "LR-005",
    employeeId: "EMP-005",
    employeeName: "Elena Rodriguez",
    avatar: "https://i.pravatar.cc/150?u=elena",
    role: "HR Manager",
    department: "Human Resources",
    type: "Annual Leave",
    startDate: "2026-07-20",
    endDate: "2026-07-24",
    durationDays: 5,
    reason: "Summer vacation.",
    status: "Approved",
    appliedOn: "2026-07-01",
  },
  {
    id: "LR-006",
    employeeId: "EMP-019",
    employeeName: "Vikram Singh",
    avatar: "https://i.pravatar.cc/150?u=vikram",
    role: "Backend Engineer",
    department: "Engineering",
    type: "Unpaid Leave",
    startDate: "2026-08-01",
    endDate: "2026-08-02",
    durationDays: 2,
    reason: "Extended travel delay.",
    status: "Rejected",
    appliedOn: "2026-07-28",
  },
];

const getLeaveTypeColor = (type: string) => {
  switch (type) {
    case "Sick Leave": return "text-rose-600 bg-rose-50 border-rose-100";
    case "Casual Leave": return "text-amber-600 bg-amber-50 border-amber-100";
    case "Annual Leave": return "text-indigo-600 bg-indigo-50 border-indigo-100";
    case "Unpaid Leave": return "text-slate-600 bg-slate-50 border-slate-200";
    default: return "text-teal-600 bg-teal-50 border-teal-100";
  }
};

const getLeaveTypeIcon = (type: string) => {
  switch (type) {
    case "Sick Leave": return <Activity className="w-3.5 h-3.5" />;
    case "Casual Leave": return <Clock className="w-3.5 h-3.5" />;
    case "Annual Leave": return <CalendarDays className="w-3.5 h-3.5" />;
    case "Unpaid Leave": return <X className="w-3.5 h-3.5" />;
    default: return <Calendar className="w-3.5 h-3.5" />;
  }
};

export function LeaveRequests() {
  const { leaveTypes } = useSettingsContext();
  const [requests, setRequests] = useState<LeaveRequest[]>(MOCK_REQUESTS);
  const [activeTab, setActiveTab] = useState<LeaveStatus>("Pending");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
  
  // New leave form state
  const [newLeaveType, setNewLeaveType] = useState<string>(leaveTypes[0] || "Sick Leave");
  const [newStartDate, setNewStartDate] = useState("");
  const [newEndDate, setNewEndDate] = useState("");
  const [newReason, setNewReason] = useState("");

  const handleAction = (id: string, action: "Approved" | "Rejected") => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status: action } : r));
    toast.success(`Leave request ${action.toLowerCase()} successfully`);
  };

  const handleAddLeave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStartDate || !newEndDate || !newReason) {
      toast.error("Please fill all required fields");
      return;
    }

    const start = new Date(newStartDate);
    const end = new Date(newEndDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const durationDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 to include both start and end dates

    const newRequest: LeaveRequest = {
      id: `LR-${Math.random().toString(36).substr(2, 9)}`,
      employeeId: "EMP-NEW", // Mock ID for demo
      employeeName: "Current User", // Mock name
      avatar: "https://i.pravatar.cc/150?u=current",
      role: "Software Engineer",
      department: "Engineering",
      type: newLeaveType,
      startDate: newStartDate,
      endDate: newEndDate,
      durationDays,
      reason: newReason,
      status: "Pending",
      appliedOn: new Date().toISOString().split("T")[0] || "",
    };

    setRequests(prev => [newRequest, ...prev]);
    setIsAddOpen(false);
    toast.success("Leave request submitted successfully");
    
    // Reset form
    setNewLeaveType(leaveTypes[0] || "Sick Leave");
    setNewStartDate("");
    setNewEndDate("");
    setNewReason("");
  };

  const filteredRequests = useMemo(() => {
    return requests
      .filter(r => r.status === activeTab)
      .filter(r => 
        r.employeeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.department.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => new Date(b.appliedOn).getTime() - new Date(a.appliedOn).getTime());
  }, [requests, activeTab, searchQuery]);

  const pendingCount = requests.filter(r => r.status === "Pending").length;

  return (
    <div className="h-full flex flex-col space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Leave Requests</h1>
          <p className="text-sm text-slate-500 mt-1">Manage and review employee time off</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <input 
              type="text" 
              placeholder="Search employee..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
            />
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 shadow-sm flex items-center gap-2">
            Filter <ChevronDown className="w-4 h-4" />
          </button>
          
          <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
            <DialogTrigger asChild>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-sm flex items-center gap-2 transition-colors">
                <Plus className="w-4 h-4" /> Add Leave
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] rounded-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-black text-slate-900">Request Leave</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddLeave} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Leave Type</label>
                  <select 
                    value={newLeaveType}
                    onChange={e => setNewLeaveType(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  >
                    {leaveTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Start Date</label>
                    <input 
                      type="date" 
                      required
                      value={newStartDate}
                      onChange={e => setNewStartDate(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">End Date</label>
                    <input 
                      type="date" 
                      required
                      value={newEndDate}
                      onChange={e => setNewEndDate(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Reason</label>
                  <textarea 
                    required
                    value={newReason}
                    onChange={e => setNewReason(e.target.value)}
                    placeholder="Briefly explain your reason..."
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button 
                    type="button" 
                    onClick={() => setIsAddOpen(false)}
                    className="px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition-colors"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex border-b border-slate-200">
        {(["Pending", "Approved", "Rejected"] as LeaveStatus[]).map(status => (
          <button
            key={status}
            onClick={() => setActiveTab(status)}
            className={cn(
              "px-6 py-3 text-sm font-bold border-b-2 transition-colors relative",
              activeTab === status 
                ? "border-indigo-600 text-indigo-600" 
                : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
            )}
          >
            {status}
            {status === "Pending" && pendingCount > 0 && (
              <span className="ml-2 inline-flex items-center justify-center bg-rose-500 text-white text-[10px] w-4 h-4 rounded-full">
                {pendingCount}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-auto pb-6">
        {filteredRequests.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 bg-slate-50/50 rounded-3xl border border-dashed border-slate-200">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
              <CalendarDays className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="text-slate-900 font-bold">No {activeTab.toLowerCase()} requests</h3>
            <p className="text-slate-500 text-sm mt-1">You're all caught up!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredRequests.map(request => (
              <div 
                key={request.id} 
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
              >
                {/* Top header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <img src={request.avatar} alt={request.employeeName} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                    <div>
                      <h3 className="font-bold text-slate-900 leading-tight">{request.employeeName}</h3>
                      <p className="text-xs text-slate-500">{request.role} • {request.department}</p>
                    </div>
                  </div>
                  <div className={cn("px-2.5 py-1 rounded-full border text-[11px] font-bold flex items-center gap-1", getLeaveTypeColor(request.type))}>
                    {getLeaveTypeIcon(request.type)}
                    {request.type}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 bg-slate-50/50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-slate-700">{request.startDate} to {request.endDate}</p>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">{request.durationDays} {request.durationDays === 1 ? 'Day' : 'Days'}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-slate-200/50 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[10px] font-black text-slate-400">i</span>
                    </div>
                    <p className="text-sm text-slate-600 italic line-clamp-2">"{request.reason}"</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <p className="text-[11px] text-slate-400 font-medium">Applied on {request.appliedOn}</p>
                  
                  {request.status === "Pending" && (
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleAction(request.id, "Rejected")}
                        className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                        title="Reject"
                      >
                        <X className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => handleAction(request.id, "Approved")}
                        className="px-4 py-2 bg-slate-900 hover:bg-indigo-600 text-white text-sm font-bold rounded-lg transition-colors flex items-center gap-2 shadow-sm"
                      >
                        <Check className="w-4 h-4" /> Approve
                      </button>
                    </div>
                  )}
                  {request.status !== "Pending" && (
                    <div className={cn(
                      "px-3 py-1 rounded-lg text-xs font-bold",
                      request.status === "Approved" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                    )}>
                      {request.status}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
