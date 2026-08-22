import { useState } from "react";
import { X,  Search, Bell, Star, MessageSquareHeart, TrendingUp, Calendar, ChevronDown, CheckCircle2, Plus  } from "lucide-react";
import { DialogClose,  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger  } from "@/components/ui/dialog";
import { EMPLOYEES } from "@/components/employees/employee-data";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { SearchableSelect } from "@/components/ui/select";

interface FeedbackRecord {
  id: string;
  employee: {
    name: string;
    role: string;
    avatar: string;
  };
  dateSubmitted: string;
  satisfactionScore: 1 | 2 | 3 | 4 | 5;
  remark: string;
  keyChallenges: string | null;
}

const MOCK_FEEDBACK: FeedbackRecord[] = [
  {
    id: "FB-001",
    employee: { name: "Sarah Connor", role: "Frontend Developer", avatar: "https://i.pravatar.cc/150?u=sarah" },
    dateSubmitted: "Aug 28, 2026",
    satisfactionScore: 4,
    remark: "The new design system has really sped up our workflow. Great collaboration this month!",
    keyChallenges: "Still facing some bottlenecks with the staging environment."
  },
  {
    id: "FB-002",
    employee: { name: "John Smith", role: "Backend Developer", avatar: "https://i.pravatar.cc/150?u=john" },
    dateSubmitted: "Aug 29, 2026",
    satisfactionScore: 5,
    remark: "Everything is going smoothly. The recent team building event was fantastic.",
    keyChallenges: null
  },
  {
    id: "FB-003",
    employee: { name: "Emily Chen", role: "Product Designer", avatar: "https://i.pravatar.cc/150?u=emily" },
    dateSubmitted: "Aug 30, 2026",
    satisfactionScore: 3,
    remark: "Project deadlines were a bit tight this month. Need better roadmap visibility.",
    keyChallenges: "Unclear priorities early in the sprint."
  },
  {
    id: "FB-004",
    employee: { name: "Michael Chang", role: "DevOps Engineer", avatar: "https://i.pravatar.cc/150?u=michael" },
    dateSubmitted: "Aug 27, 2026",
    satisfactionScore: 4,
    remark: "Infrastructure upgrades went well with minimal downtime. Team morale is good.",
    keyChallenges: null
  },
  {
    id: "FB-005",
    employee: { name: "Jessica Davis", role: "HR Manager", avatar: "https://i.pravatar.cc/150?u=jess" },
    dateSubmitted: "Aug 31, 2026",
    satisfactionScore: 5,
    remark: "Really happy with the new HRMS rollout. Training sessions were highly rated.",
    keyChallenges: null
  }
];

const renderStars = (score: number) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star 
          key={star} 
          className={cn(
            "w-4 h-4",
            star <= score ? "fill-amber-400 text-amber-400" : "fill-slate-100 text-slate-200"
          )} 
        />
      ))}
    </div>
  );
};

export function Remarks() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("August 2026");
  const [feedback, setFeedback] = useState<FeedbackRecord[]>(MOCK_FEEDBACK);

  // New Remark State
  const [isNewOpen, setIsNewOpen] = useState(false);
  const [newEmpName, setNewEmpName] = useState("");
  const [newScore, setNewScore] = useState<1|2|3|4|5>(5);
  const [newRemark, setNewRemark] = useState("");
  const [newChallenges, setNewChallenges] = useState("");

  const filteredFeedback = feedback.filter(fb => 
    fb.employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    fb.remark.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateRemark = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmpName.trim() || !newRemark.trim()) {
      toast.error("Please fill in required fields.");
      return;
    }

    const newRecord: FeedbackRecord = {
      id: `FB-${Math.floor(Math.random() * 1000)}`,
      employee: {
        name: newEmpName,
        role: "Team Member",
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(newEmpName)}&background=random`
      },
      dateSubmitted: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }),
      satisfactionScore: newScore,
      remark: newRemark,
      keyChallenges: newChallenges.trim() || null,
    };

    setFeedback([newRecord, ...feedback]);
    setIsNewOpen(false);
    toast.success(`Feedback recorded for ${newEmpName}`);
    
    // Reset
    setNewEmpName("");
    setNewRemark("");
    setNewChallenges("");
    setNewScore(5);
  };

  const handleSendReminder = () => {
    toast.success("Reminders Sent!", {
      description: "Push notifications and emails have been sent to 12 employees who haven't submitted feedback."
    });
  };

  return (
    <div className="space-y-8 h-[calc(100vh-8rem)] flex flex-col overflow-hidden pb-4">
      {/* Header/Stats */}
      <div className="shrink-0 bg-white border border-border rounded-3xl p-6 shadow-sm relative overflow-hidden">
        <div className="absolute -top-12 -right-12 p-12 opacity-5 pointer-events-none rotate-12">
          <MessageSquareHeart className="w-64 h-64 text-indigo-900" />
        </div>
        
        <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h1 className="text-2xl font-black text-foreground tracking-tight mb-2">Monthly Remarks & Feedback</h1>
            <p className="text-sm text-muted-foreground max-w-xl">
              Review qualitative feedback and satisfaction scores submitted by employees for the selected month.
            </p>
            
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-2 bg-muted/50 border border-border px-3 py-1.5 rounded-lg">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <SearchableSelect 
                  value={selectedMonth}
                  onChange={setSelectedMonth}
                  options={[
                    { label: "August 2026", value: "August 2026" },
                    { label: "July 2026", value: "July 2026" },
                    { label: "June 2026", value: "June 2026" }
                  ]}
                  className="bg-transparent text-sm font-bold text-foreground/80 outline-none w-[130px] h-[24px]"
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap lg:flex-nowrap gap-4">
            <div className="bg-primary/10 border border-indigo-100 rounded-2xl p-4 flex items-center gap-4 min-w-[160px] flex-1 lg:flex-initial">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-primary/70 uppercase tracking-wider mb-0.5">Submission Rate</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-black text-primary leading-none">85%</p>
                  <span className="text-xs font-bold text-primary">42/50</span>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex items-center gap-4 min-w-[160px] flex-1 lg:flex-initial">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-amber-500 shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-amber-600/70 uppercase tracking-wider mb-0.5">Avg Satisfaction</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-black text-amber-700 leading-none">4.2</p>
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-0 bg-white border border-border rounded-3xl shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-muted/50/50 shrink-0">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search feedback..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={handleSendReminder}
              className="px-4 py-2.5 bg-white border border-border hover:border-border hover:bg-muted/50 text-foreground/80 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm shrink-0"
            >
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">Send Reminders</span>
            </button>
            <Dialog open={isNewOpen} onOpenChange={setIsNewOpen}>
              <DialogTrigger asChild>
                <button className="px-4 py-2.5 bg-primary hover:bg-primary text-primary-foreground font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm shrink-0">
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Add Feedback</span>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden rounded-[2rem] gap-0 border-border/60 shadow-2xl [&>button]:hidden bg-card">
                <div className="flex items-center justify-between px-6 md:px-8 py-6 border-b border-border/50 bg-muted/30">
          <div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight">Add Manual Feedback/Remark</h2>
            
          </div>
          <DialogClose asChild>
            <button className="p-2 text-muted-foreground hover:text-foreground/80 hover:bg-muted rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </DialogClose>
        </div>
                <form onSubmit={handleCreateRemark} className="flex flex-col max-h-[70vh]">
                <div className="p-6 md:p-8 space-y-6 overflow-y-auto">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Employee Name</label>
                    <div className="relative">
                      <SearchableSelect 
                        value={newEmpName}
                        onChange={setNewEmpName}
                        options={EMPLOYEES.map(emp => ({ label: emp.name, value: emp.name }))}
                        placeholder="Select Employee"
                        className="w-full h-[38px] px-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Satisfaction Score (1-5)</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((score) => (
                        <button
                          key={score}
                          type="button"
                          onClick={() => setNewScore(score as 1|2|3|4|5)}
                          className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-colors border",
                            newScore === score 
                              ? "bg-amber-100 text-amber-700 border-amber-200 shadow-sm" 
                              : "bg-white text-muted-foreground border-border hover:bg-muted/50"
                          )}
                        >
                          {score}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Remarks / Feedback</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="What is going well?"
                      value={newRemark}
                      onChange={e => setNewRemark(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Key Challenges (Optional)</label>
                    <textarea 
                      rows={2}
                      placeholder="Any blockers or challenges?"
                      value={newChallenges}
                      onChange={e => setNewChallenges(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>
                  
                  </div>
<div className="px-6 md:px-8 py-4 md:py-6 bg-muted/30 border-t border-border/50 flex justify-end gap-3 mt-auto shrink-0">
                    <button 
                      type="button" 
                      onClick={() => setIsNewOpen(false)}
                      className="px-4 py-2 bg-white border border-border text-foreground/80 hover:bg-muted/50 font-bold text-sm rounded-xl transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="px-4 py-2 bg-primary hover:bg-primary text-primary-foreground font-bold text-sm rounded-xl transition-colors"
                    >
                      Save Feedback
                    </button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Grid List */}
        <div className="flex-1 overflow-y-auto p-6 bg-muted/50/30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeedback.length > 0 ? filteredFeedback.map(record => (
              <div key={record.id} className="bg-white p-5 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={record.employee.avatar} 
                      alt={record.employee.name} 
                      className="w-10 h-10 rounded-full border border-border object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-foreground leading-tight">{record.employee.name}</h3>
                      <p className="text-xs text-muted-foreground">{record.employee.role}</p>
                    </div>
                  </div>
                  <div className="text-[10px] font-bold text-muted-foreground bg-muted px-2 py-1 rounded-md shrink-0">
                    {record.dateSubmitted}
                  </div>
                </div>
                
                <div className="mb-4">
                  {renderStars(record.satisfactionScore)}
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Remarks</h4>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      "{record.remark}"
                    </p>
                  </div>
                  
                  {record.keyChallenges && (
                    <div className="bg-rose-50 border border-rose-100 rounded-xl p-3">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-rose-500 mb-1">Key Challenges</h4>
                      <p className="text-xs text-rose-700">
                        {record.keyChallenges}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )) : (
              <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-border/50 text-muted-foreground">
                  <MessageSquareHeart className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-foreground/80 mb-1">No feedback found</h3>
                <p className="text-muted-foreground text-sm max-w-sm">No remarks match your current search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
