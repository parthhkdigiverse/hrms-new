import { useState } from "react";
import { Search, Plus, Filter, MoreHorizontal, LayoutGrid, List, Briefcase, Calendar, Clock, Star, Circle, Trash2, Edit2, Archive, ArrowLeft, Users, DollarSign, FolderGit2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

type ProjectStatus = "In Progress" | "In Review" | "Completed" | "On Hold";
type ClientStatus = "Active" | "Archived";

interface Client {
  id: string;
  name: string;
  logo: string;
  totalBudget: string;
  activeProjects: number;
  status: ClientStatus;
  contacts: { name: string; avatar: string }[];
}

interface Project {
  id: string;
  clientId: string;
  name: string;
  status: ProjectStatus;
  progress: number;
  deadline: string;
  budget: string;
  team: { name: string; avatar: string }[];
}

const INITIAL_CLIENTS: Client[] = [
  {
    id: "c1",
    name: "TechNova Solutions",
    logo: "https://i.pravatar.cc/150?u=technova",
    totalBudget: "$345,000",
    activeProjects: 3,
    status: "Active",
    contacts: [
      { name: "Alice", avatar: "https://i.pravatar.cc/150?u=alice" },
      { name: "Tom", avatar: "https://i.pravatar.cc/150?u=tom" }
    ]
  },
  {
    id: "c2",
    name: "Acme Corp",
    logo: "https://i.pravatar.cc/150?u=acme",
    totalBudget: "$120,000",
    activeProjects: 1,
    status: "Active",
    contacts: [{ name: "Bob", avatar: "https://i.pravatar.cc/150?u=bob" }]
  },
  {
    id: "c3",
    name: "Global Retail Inc.",
    logo: "https://i.pravatar.cc/150?u=global",
    totalBudget: "$450,000",
    activeProjects: 4,
    status: "Active",
    contacts: [
      { name: "Charlie", avatar: "https://i.pravatar.cc/150?u=charlie" },
      { name: "Diana", avatar: "https://i.pravatar.cc/150?u=diana" }
    ]
  },
  {
    id: "c4",
    name: "Startup Hub",
    logo: "https://i.pravatar.cc/150?u=startup",
    totalBudget: "$15,000",
    activeProjects: 0,
    status: "Archived",
    contacts: [{ name: "Eve", avatar: "https://i.pravatar.cc/150?u=eve" }]
  },
];

const INITIAL_PROJECTS: Project[] = [
  {
    id: "1",
    clientId: "c1",
    name: "HRMS UI Redesign",
    status: "In Progress",
    progress: 75,
    deadline: "2026-09-01",
    budget: "$45,000",
    team: [
      { name: "Alex", avatar: "https://i.pravatar.cc/150?u=alex" },
      { name: "Sarah", avatar: "https://i.pravatar.cc/150?u=sarah" },
      { name: "Mike", avatar: "https://i.pravatar.cc/150?u=mike" }
    ]
  },
  {
    id: "2",
    clientId: "c2",
    name: "Q4 Marketing Campaign",
    status: "In Review",
    progress: 90,
    deadline: "2026-08-20",
    budget: "$120,000",
    team: [
      { name: "Emma", avatar: "https://i.pravatar.cc/150?u=emma" },
      { name: "James", avatar: "https://i.pravatar.cc/150?u=james" }
    ]
  },
  {
    id: "3",
    clientId: "c3",
    name: "Mobile App Development",
    status: "In Progress",
    progress: 35,
    deadline: "2026-11-15",
    budget: "$85,000",
    team: [
      { name: "David", avatar: "https://i.pravatar.cc/150?u=david" },
      { name: "Sarah", avatar: "https://i.pravatar.cc/150?u=sarah" },
      { name: "Alex", avatar: "https://i.pravatar.cc/150?u=alex" },
      { name: "John", avatar: "https://i.pravatar.cc/150?u=john" }
    ]
  },
  {
    id: "4",
    clientId: "c4",
    name: "Brand Guidelines",
    status: "Completed",
    progress: 100,
    deadline: "2026-07-30",
    budget: "$15,000",
    team: [
      { name: "Emma", avatar: "https://i.pravatar.cc/150?u=emma" }
    ]
  },
  {
    id: "5",
    clientId: "c1",
    name: "Legacy System Migration",
    status: "On Hold",
    progress: 15,
    deadline: "2027-01-10",
    budget: "$250,000",
    team: [
      { name: "Mike", avatar: "https://i.pravatar.cc/150?u=mike" },
      { name: "David", avatar: "https://i.pravatar.cc/150?u=david" }
    ]
  },
  {
    id: "6",
    clientId: "c3",
    name: "E-commerce Platform",
    status: "In Progress",
    progress: 60,
    deadline: "2026-10-05",
    budget: "$65,000",
    team: [
      { name: "Sarah", avatar: "https://i.pravatar.cc/150?u=sarah" },
      { name: "John", avatar: "https://i.pravatar.cc/150?u=john" },
      { name: "Alex", avatar: "https://i.pravatar.cc/150?u=alex" }
    ]
  }
];

const TABS = ["Active Clients", "Archived Clients"];

export function Projects() {
  const [clients, setClients] = useState<Client[]>(INITIAL_CLIENTS);
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);

  const [isNewClientModalOpen, setIsNewClientModalOpen] = useState(false);
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  
  const [newClientName, setNewClientName] = useState("");
  const [newClientBudget, setNewClientBudget] = useState("");
  
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectBudget, setNewProjectBudget] = useState("");

  const handleCreateClient = () => {
    if (!newClientName.trim()) return;
    const newClient: Client = {
      id: `c${Date.now()}`,
      name: newClientName,
      logo: `https://i.pravatar.cc/150?u=${encodeURIComponent(newClientName)}`,
      totalBudget: newClientBudget || "$0",
      activeProjects: 0,
      status: "Active",
      contacts: [{ name: "User", avatar: "https://i.pravatar.cc/150?u=user" }]
    };
    setClients([newClient, ...clients]);
    setNewClientName("");
    setNewClientBudget("");
    setIsNewClientModalOpen(false);
  };

  const handleCreateProject = () => {
    if (!newProjectName.trim() || !selectedClientId) return;
    const newProject: Project = {
      id: `p${Date.now()}`,
      clientId: selectedClientId,
      name: newProjectName,
      status: "In Progress",
      progress: 0,
      deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] || "", // 30 days from now
      budget: newProjectBudget || "$0",
      team: [{ name: "User", avatar: "https://i.pravatar.cc/150?u=user" }]
    };
    
    // Update client active project count
    setClients(clients.map(c => 
      c.id === selectedClientId ? { ...c, activeProjects: c.activeProjects + 1 } : c
    ));
    
    setProjects([newProject, ...projects]);
    setNewProjectName("");
    setNewProjectBudget("");
    setIsNewProjectModalOpen(false);
  };

  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case "In Progress": return "text-primary bg-primary/10";
      case "In Review": return "text-amber-500 bg-amber-500/10";
      case "Completed": return "text-emerald-500 bg-emerald-500/10";
      case "On Hold": return "text-rose-500 bg-rose-500/10";
      default: return "text-muted-foreground bg-muted";
    }
  };

  const getProgressColor = (status: ProjectStatus) => {
    switch (status) {
      case "In Progress": return "bg-primary";
      case "In Review": return "bg-amber-500";
      case "Completed": return "bg-emerald-500";
      case "On Hold": return "bg-rose-500";
      default: return "bg-primary";
    }
  };

  const filteredClients = clients.filter(client => {
    if (activeTab === "Active Clients" && client.status !== "Active") return false;
    if (activeTab === "Archived Clients" && client.status !== "Archived") return false;
    if (searchQuery && !client.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  if (selectedClientId) {
    const client = clients.find(c => c.id === selectedClientId);
    if (!client) return null;

    const clientProjects = projects.filter(p => p.clientId === client.id);

    return (
      <div className="w-full max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
        {/* Detail View Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSelectedClientId(null)}
              className="p-2.5 bg-card border border-border/60 rounded-xl hover:bg-muted/80 hover:text-primary transition-colors shadow-sm group"
            >
              <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
            <div className="w-14 h-14 rounded-2xl border-2 border-border/50 overflow-hidden shadow-sm bg-card">
              <img src={client.logo} alt={client.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tight text-foreground leading-tight">{client.name}</h1>
              <span className="px-2 py-0.5 mt-1 inline-flex text-[10px] font-bold uppercase tracking-widest rounded-lg items-center gap-1.5 text-primary bg-primary/10">
                <Circle className="w-1.5 h-1.5 fill-current" />
                {client.status} Client
              </span>
            </div>
          </div>
          
          <button onClick={() => setIsNewProjectModalOpen(true)} className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:bg-primary/90 transition-all shadow-sm">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">New Project</span>
          </button>
        </div>

        {/* Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-border/60 rounded-3xl p-6 flex items-center gap-5 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Total Projects</p>
              <h3 className="text-3xl font-black text-foreground font-mono">{clientProjects.length}</h3>
            </div>
          </div>
          <div className="bg-card border border-border/60 rounded-3xl p-6 flex items-center gap-5 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Total Budget</p>
              <h3 className="text-3xl font-black text-foreground font-mono">{client.totalBudget}</h3>
            </div>
          </div>
          <div className="bg-card border border-border/60 rounded-3xl p-6 flex items-center gap-5 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Key Contacts</p>
              <div className="flex -space-x-2">
                {client.contacts.map((contact, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-card overflow-hidden bg-muted shadow-sm">
                    <img src={contact.avatar} alt={contact.name} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid for this Client */}
        <div>
          <h2 className="text-xl font-bold tracking-tight mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientProjects.map((project) => (
              <div key={project.id} className="group bg-card border border-border/60 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none transition-opacity opacity-0 group-hover:opacity-100"></div>

                <div className="flex justify-between items-start mb-4 relative z-10">
                  <span className={cn("px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-lg flex items-center gap-1.5", getStatusColor(project.status))}>
                    <Circle className="w-2 h-2 fill-current" />
                    {project.status}
                  </span>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg transition-colors outline-none focus:ring-2 focus:ring-primary/20">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48 rounded-2xl p-2 border-border/60 shadow-xl bg-background/95 backdrop-blur-md">
                      <DropdownMenuItem className="rounded-xl cursor-pointer py-2.5 focus:bg-primary/10 focus:text-primary font-medium transition-colors">
                        <Edit2 className="w-4 h-4 mr-2" /> Edit Project
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-border/50" />
                      <DropdownMenuItem className="rounded-xl cursor-pointer py-2.5 focus:bg-amber-500/10 focus:text-amber-600 font-medium text-amber-600 transition-colors">
                        <Archive className="w-4 h-4 mr-2" /> Archive Project
                      </DropdownMenuItem>
                      <DropdownMenuItem className="rounded-xl cursor-pointer py-2.5 focus:bg-rose-500/10 focus:text-rose-600 font-medium text-rose-600 transition-colors">
                        <Trash2 className="w-4 h-4 mr-2" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="relative z-10 mb-6 flex-grow">
                  <h3 className="text-xl font-black tracking-tight text-foreground line-clamp-2 leading-tight">{project.name}</h3>
                </div>

                {/* Progress */}
                <div className="mb-6 relative z-10">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Progress</span>
                    <span className="text-sm font-black text-foreground">{project.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted/60 rounded-full overflow-hidden">
                    <div 
                      className={cn("h-full rounded-full transition-all duration-1000 ease-out", getProgressColor(project.status))}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-border/40 relative z-10">
                  <div className="flex -space-x-2">
                    {project.team.slice(0, 3).map((member, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-card overflow-hidden bg-muted relative shadow-sm">
                        <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                    ))}
                    {project.team.length > 3 && (
                      <div className="w-8 h-8 rounded-full border-2 border-card bg-muted flex items-center justify-center text-[10px] font-bold text-muted-foreground z-10 shadow-sm">
                        +{project.team.length - 3}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-muted/30 rounded-lg border border-border/30">
                    <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-xs font-bold text-foreground/80">{new Date(project.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>

              </div>
            ))}
            {clientProjects.length === 0 && (
              <div className="col-span-full py-12 flex flex-col items-center justify-center text-center bg-card border border-border/60 border-dashed rounded-3xl">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <FolderGit2 className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground">No projects yet</h3>
                <p className="text-muted-foreground mt-1 mb-4">This client doesn't have any active projects.</p>
                <button onClick={() => setIsNewProjectModalOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-bold text-sm rounded-xl hover:bg-primary/20 transition-all">
                  <Plus className="w-4 h-4" /> Add Project
                </button>
              </div>
            )}
          </div>
        </div>
        {/* New Project Modal */}
        <Dialog open={isNewProjectModalOpen} onOpenChange={setIsNewProjectModalOpen}>
          <DialogContent className="sm:max-w-[425px] rounded-3xl p-0 overflow-hidden border-border/50 shadow-2xl">
            <div className="p-6 pb-4">
              <DialogHeader>
                <DialogTitle className="text-2xl font-black tracking-tight">New Project</DialogTitle>
              </DialogHeader>
            </div>
            <div className="p-6 pt-0 space-y-4">
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Project Name</label>
                <input 
                  type="text" 
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  placeholder="e.g. Website Redesign"
                  className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Budget (Optional)</label>
                <input 
                  type="text" 
                  value={newProjectBudget}
                  onChange={(e) => setNewProjectBudget(e.target.value)}
                  placeholder="e.g. $10,000"
                  className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                />
              </div>
            </div>
            <div className="p-6 pt-4 bg-muted/30 border-t border-border/50 flex justify-end gap-3">
              <button 
                onClick={() => setIsNewProjectModalOpen(false)}
                className="px-5 py-2.5 rounded-xl font-bold text-muted-foreground hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleCreateProject}
                disabled={!newProjectName.trim()}
                className="px-6 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl shadow-md hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                Create Project
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-foreground">Clients</h1>
          <p className="text-muted-foreground mt-1">Manage your clients and view their projects.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search clients..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-card border border-border/60 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
            />
          </div>
          <button onClick={() => setIsNewClientModalOpen(true)} className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:bg-primary/90 transition-all shadow-sm">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">New Client</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-border/40 pb-4 overflow-x-auto hide-scrollbar">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300",
              activeTab === tab 
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" 
                : "bg-card text-foreground/70 hover:bg-muted/80 border border-border/40"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {filteredClients.map((client) => (
          <div 
            key={client.id} 
            onClick={() => setSelectedClientId(client.id)}
            className="group bg-card border border-border/60 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 relative overflow-hidden flex flex-col cursor-pointer"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none transition-opacity opacity-0 group-hover:opacity-100"></div>

            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="w-16 h-16 rounded-2xl border-2 border-border/50 overflow-hidden shadow-sm bg-card group-hover:border-primary/30 transition-colors">
                <img src={client.logo} alt={client.name} className="w-full h-full object-cover" />
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                  <button className="p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg transition-colors outline-none focus:ring-2 focus:ring-primary/20">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 rounded-2xl p-2 border-border/60 shadow-xl bg-background/95 backdrop-blur-md">
                  <DropdownMenuItem className="rounded-xl cursor-pointer py-2.5 focus:bg-primary/10 focus:text-primary font-medium transition-colors">
                    <Edit2 className="w-4 h-4 mr-2" /> Edit Client
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-border/50" />
                  <DropdownMenuItem className="rounded-xl cursor-pointer py-2.5 focus:bg-amber-500/10 focus:text-amber-600 font-medium text-amber-600 transition-colors">
                    <Archive className="w-4 h-4 mr-2" /> Archive Client
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-xl cursor-pointer py-2.5 focus:bg-rose-500/10 focus:text-rose-600 font-medium text-rose-600 transition-colors">
                    <Trash2 className="w-4 h-4 mr-2" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="relative z-10 mb-6 flex-grow">
              <h3 className="text-xl font-black tracking-tight text-foreground line-clamp-2 leading-tight group-hover:text-primary transition-colors">{client.name}</h3>
            </div>

            {/* Footer Summary */}
            <div className="flex justify-between items-center pt-4 border-t border-border/40 relative z-10">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Active Projects</span>
                <span className="text-lg font-black text-foreground">{projects.filter(p => p.clientId === client.id).length}</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Total Budget</span>
                <span className="text-lg font-black font-mono text-primary">{client.totalBudget}</span>
              </div>
            </div>

          </div>
        ))}
        {filteredClients.length === 0 && (
          <div className="col-span-full py-12 flex flex-col items-center justify-center text-center">
            <h3 className="text-lg font-bold text-foreground">No clients found</h3>
            <p className="text-muted-foreground mt-1">Try adjusting your search query.</p>
          </div>
        )}
      </div>

      {/* New Client Modal */}
      <Dialog open={isNewClientModalOpen} onOpenChange={setIsNewClientModalOpen}>
        <DialogContent className="sm:max-w-[425px] rounded-3xl p-0 overflow-hidden border-border/50 shadow-2xl">
          <div className="p-6 pb-4">
            <DialogHeader>
              <DialogTitle className="text-2xl font-black tracking-tight">New Client</DialogTitle>
            </DialogHeader>
          </div>
          <div className="p-6 pt-0 space-y-4">
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Client Name</label>
              <input 
                type="text" 
                value={newClientName}
                onChange={(e) => setNewClientName(e.target.value)}
                placeholder="e.g. Acme Corp"
                className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Total Budget (Optional)</label>
              <input 
                type="text" 
                value={newClientBudget}
                onChange={(e) => setNewClientBudget(e.target.value)}
                placeholder="e.g. $100,000"
                className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
              />
            </div>
          </div>
          <div className="p-6 pt-4 bg-muted/30 border-t border-border/50 flex justify-end gap-3">
            <button 
              onClick={() => setIsNewClientModalOpen(false)}
              className="px-5 py-2.5 rounded-xl font-bold text-muted-foreground hover:bg-muted transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleCreateClient}
              disabled={!newClientName.trim()}
              className="px-6 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl shadow-md hover:bg-primary/90 transition-all disabled:opacity-50"
            >
              Create Client
            </button>
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
}
