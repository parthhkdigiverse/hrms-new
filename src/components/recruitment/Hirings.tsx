import { useState } from "react";
import { Search, Plus, Filter, Users, Briefcase, MapPin, Clock, MoreHorizontal, ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useDepartments } from "../employees/DepartmentContext";
import { toast } from "sonner";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  status: "Active" | "Draft" | "Closed";
  applicants: number;
  interviewing: number;
  offers: number;
  postedDate: string;
  hiringManager: string;
  managerAvatar: string;
}

const MOCK_JOBS: JobOpening[] = [
  {
    id: "JOB-01",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    status: "Active",
    applicants: 142,
    interviewing: 12,
    offers: 1,
    postedDate: "2 weeks ago",
    hiringManager: "Alex Turner",
    managerAvatar: "https://i.pravatar.cc/150?u=alex",
  },
  {
    id: "JOB-02",
    title: "Product Marketing Manager",
    department: "Marketing",
    location: "New York, NY",
    type: "Full-time",
    status: "Active",
    applicants: 89,
    interviewing: 5,
    offers: 0,
    postedDate: "1 week ago",
    hiringManager: "Sarah Connor",
    managerAvatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    id: "JOB-03",
    title: "UX Researcher",
    department: "Design",
    location: "San Francisco, CA",
    type: "Contract",
    status: "Draft",
    applicants: 0,
    interviewing: 0,
    offers: 0,
    postedDate: "Just now",
    hiringManager: "David Kim",
    managerAvatar: "https://i.pravatar.cc/150?u=david",
  },
  {
    id: "JOB-04",
    title: "Data Scientist",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    status: "Active",
    applicants: 215,
    interviewing: 8,
    offers: 2,
    postedDate: "3 weeks ago",
    hiringManager: "Elena Rodriguez",
    managerAvatar: "https://i.pravatar.cc/150?u=elena",
  }
];

export function Hirings() {
  const { departments } = useDepartments();
  const [searchQuery, setSearchQuery] = useState("");
  const [jobs, setJobs] = useState<JobOpening[]>(MOCK_JOBS);
  const [isPostOpen, setIsPostOpen] = useState(false);
  
  // Form State
  const [newTitle, setNewTitle] = useState("");
  const [newDepartment, setNewDepartment] = useState(departments[0] || "Engineering");
  const [newLocation, setNewLocation] = useState("");
  const [newType, setNewType] = useState("Full-time");
  const [newHiringManager, setNewHiringManager] = useState("");

  const handlePostJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newLocation || !newHiringManager) {
      toast.error("Please fill all required fields");
      return;
    }

    const newJob: JobOpening = {
      id: `JOB-${Math.random().toString(36).substr(2, 9)}`,
      title: newTitle,
      department: newDepartment,
      location: newLocation,
      type: newType,
      status: "Active",
      applicants: 0,
      interviewing: 0,
      offers: 0,
      postedDate: "Just now",
      hiringManager: newHiringManager,
      managerAvatar: `https://i.pravatar.cc/150?u=${newHiringManager.replace(/\s/g, '')}`,
    };

    setJobs(prev => [newJob, ...prev]);
    setIsPostOpen(false);
    toast.success("Job posted successfully!");
    
    setNewTitle("");
    setNewDepartment(departments[0] || "Engineering");
    setNewLocation("");
    setNewType("Full-time");
    setNewHiringManager("");
  };

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    job.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-[1600px] mx-auto w-full">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Job Openings</h1>
          <p className="text-sm text-slate-500 mt-1">Manage active requisitions and hiring pipelines</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <input 
              type="text" 
              placeholder="Search jobs..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>
          <button className="p-2 bg-white border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 shadow-sm transition-colors">
            <Filter className="w-4 h-4" />
          </button>
          <Dialog open={isPostOpen} onOpenChange={setIsPostOpen}>
            <DialogTrigger asChild>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-sm flex items-center gap-2 transition-colors whitespace-nowrap">
                <Plus className="w-4 h-4" /> Post Job
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] rounded-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-black text-slate-900">Post New Job</DialogTitle>
              </DialogHeader>
              <form onSubmit={handlePostJob} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Job Title</label>
                  <input 
                    type="text" 
                    required
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Department</label>
                    <select 
                      value={newDepartment}
                      onChange={e => setNewDepartment(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    >
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Employment Type</label>
                    <select 
                      value={newType}
                      onChange={e => setNewType(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    >
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                      <option>Internship</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Location</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Remote or San Francisco, CA"
                    required
                    value={newLocation}
                    onChange={e => setNewLocation(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Hiring Manager</label>
                  <input 
                    type="text" 
                    required
                    value={newHiringManager}
                    onChange={e => setNewHiringManager(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
                <div className="pt-4 flex justify-end gap-3">
                  <button 
                    type="button" 
                    onClick={() => setIsPostOpen(false)}
                    className="px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition-colors"
                  >
                    Post Job
                  </button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Active Jobs", value: "3", trend: "+1 this month" },
          { label: "Total Applicants", value: "446", trend: "+12% vs last month" },
          { label: "Interviews Scheduled", value: "25", trend: "+5 this week" },
          { label: "Offers Extended", value: "3", trend: "1 accepted" },
        ].map(stat => (
          <div key={stat.label} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-sm font-semibold text-slate-500 mb-1">{stat.label}</p>
            <div className="flex items-end gap-3">
              <h3 className="text-2xl font-black text-slate-900">{stat.value}</h3>
              <p className="text-xs font-medium text-emerald-600 mb-1">{stat.trend}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Grid of Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-4">
        {filteredJobs.map(job => (
          <div key={job.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group flex flex-col">
            <div className="p-5 border-b border-slate-100 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      {job.department}
                    </span>
                    {job.status === "Active" ? (
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600">Active</span>
                    ) : (
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-600">Draft</span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{job.title}</h3>
                </div>
                <button className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <Briefcase className="w-4 h-4 text-slate-400" /> {job.type}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <MapPin className="w-4 h-4 text-slate-400" /> {job.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <Clock className="w-4 h-4 text-slate-400" /> {job.postedDate}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <Users className="w-4 h-4 text-slate-400" /> {job.applicants} applied
                </div>
              </div>

              {/* Pipeline Pipeline Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-500">Pipeline Pipeline</span>
                  <span className="text-indigo-600">{job.interviewing} Interviewing</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
                  <div className="h-full bg-slate-300 rounded-l-full" style={{ width: '40%' }} />
                  <div className="h-full bg-indigo-500" style={{ width: '30%' }} />
                  <div className="h-full bg-emerald-500 rounded-r-full" style={{ width: '10%' }} />
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50/50 rounded-b-2xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={job.managerAvatar} alt={job.hiringManager} className="w-8 h-8 rounded-full border-2 border-white shadow-sm" />
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Hiring Manager</p>
                  <p className="text-xs font-semibold text-slate-700">{job.hiringManager}</p>
                </div>
              </div>
              <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors">
                View Details <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
