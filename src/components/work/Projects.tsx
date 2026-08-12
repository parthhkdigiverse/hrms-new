import { useState, useEffect } from "react";
import { Search, Plus, Filter, MoreHorizontal, LayoutGrid, List, Briefcase, Calendar, Clock, Star, Circle, Trash2, Edit2, Archive, ArrowLeft, Users, DollarSign, FolderGit2, CheckCircle2, Settings2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { ConfirmModal } from "@/components/ui/confirm-modal";

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
  category: string;
  status: ProjectStatus;
  progress: number;
  deadline: string;
  budget: string;
  team: { name: string; avatar: string }[];
}

const DEFAULT_CATEGORIES = ["Web Dev", "App Dev", "Digital Marketing", "Design", "Consulting", "General"];

const INITIAL_CLIENTS: Client[] = [
  {
    id: "c1",
    name: "TechNova Solutions",
    logo: "https://i.pravatar.cc/150?u=technova",
    totalBudget: "₹345,000",
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
    totalBudget: "₹120,000",
    activeProjects: 1,
    status: "Active",
    contacts: [{ name: "Bob", avatar: "https://i.pravatar.cc/150?u=bob" }]
  },
  {
    id: "c3",
    name: "Global Retail Inc.",
    logo: "https://i.pravatar.cc/150?u=global",
    totalBudget: "₹450,000",
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
    totalBudget: "₹15,000",
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
    category: "Design",
    status: "In Progress",
    progress: 75,
    deadline: "2026-09-01",
    budget: "₹45,000",
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
    category: "Digital Marketing",
    status: "In Review",
    progress: 90,
    deadline: "2026-08-20",
    budget: "₹120,000",
    team: [
      { name: "Emma", avatar: "https://i.pravatar.cc/150?u=emma" },
      { name: "James", avatar: "https://i.pravatar.cc/150?u=james" }
    ]
  },
  {
    id: "3",
    clientId: "c3",
    name: "Mobile App Development",
    category: "App Dev",
    status: "In Progress",
    progress: 35,
    deadline: "2026-11-15",
    budget: "₹85,000",
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
    category: "Design",
    status: "Completed",
    progress: 100,
    deadline: "2026-07-30",
    budget: "₹15,000",
    team: [
      { name: "Emma", avatar: "https://i.pravatar.cc/150?u=emma" }
    ]
  },
  {
    id: "5",
    clientId: "c1",
    name: "Legacy System Migration",
    category: "Web Dev",
    status: "On Hold",
    progress: 15,
    deadline: "2027-01-10",
    budget: "₹250,000",
    team: [
      { name: "Mike", avatar: "https://i.pravatar.cc/150?u=mike" },
      { name: "David", avatar: "https://i.pravatar.cc/150?u=david" }
    ]
  },
  {
    id: "6",
    clientId: "c3",
    name: "E-commerce Platform",
    category: "Web Dev",
    status: "In Progress",
    progress: 60,
    deadline: "2026-10-05",
    budget: "₹65,000",
    team: [
      { name: "Sarah", avatar: "https://i.pravatar.cc/150?u=sarah" },
      { name: "John", avatar: "https://i.pravatar.cc/150?u=john" },
      { name: "Alex", avatar: "https://i.pravatar.cc/150?u=alex" }
    ]
  }
];

const TABS = ["Active Clients", "Archived Clients"];

export function Projects() {
  const [clients, setClients] = useState<Client[]>(() => {
    const saved = localStorage.getItem('hrms_clients');
    if (saved) {
      try { 
        const parsed = JSON.parse(saved);
        if (JSON.stringify(parsed).includes('$')) return INITIAL_CLIENTS; // Force update to ₹
        return parsed;
      } catch (e) {}
    }
    return INITIAL_CLIENTS;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('hrms_projects');
    if (saved) {
      try { 
        const parsed = JSON.parse(saved);
        if (JSON.stringify(parsed).includes('$')) return INITIAL_PROJECTS; // Force update to ₹
        return parsed;
      } catch (e) {}
    }
    return INITIAL_PROJECTS;
  });

  const [categories, setCategories] = useState<string[]>(() => {
    const saved = localStorage.getItem('hrms_categories');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return DEFAULT_CATEGORIES;
  });

  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => { localStorage.setItem('hrms_clients', JSON.stringify(clients)); }, [clients]);
  useEffect(() => { localStorage.setItem('hrms_projects', JSON.stringify(projects)); }, [projects]);
  useEffect(() => { localStorage.setItem('hrms_categories', JSON.stringify(categories)); }, [categories]);
  const [isKanbanView, setIsKanbanView] = useState(false);

  const [isNewClientModalOpen, setIsNewClientModalOpen] = useState(false);
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  const [isEditProjectModalOpen, setIsEditProjectModalOpen] = useState(false);
  
  const [newClientName, setNewClientName] = useState("");
  const [newClientBudget, setNewClientBudget] = useState("");
  
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectBudget, setNewProjectBudget] = useState("");
  const [newProjectCategory, setNewProjectCategory] = useState("");
  const [isManageCategoriesModalOpen, setIsManageCategoriesModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  const [confirmModalState, setConfirmModalState] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    itemName?: string;
    action: () => void;
  }>({ isOpen: false, title: "", description: "", action: () => {} });

  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const handleCreateClient = () => {
    if (!newClientName.trim()) return;
    const newClient: Client = {
      id: `c${Date.now()}`,
      name: newClientName,
      logo: `https://i.pravatar.cc/150?u=${encodeURIComponent(newClientName)}`,
      totalBudget: newClientBudget || "₹0",
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
    if (!newProjectName.trim() || !selectedClientId || !newProjectCategory) return;
    const newProject: Project = {
      id: `p${Date.now()}`,
      clientId: selectedClientId,
      name: newProjectName,
      category: newProjectCategory,
      status: "In Progress",
      progress: 0,
      deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] || "", // 30 days from now
      budget: newProjectBudget || "₹0",
      team: [{ name: "User", avatar: "https://i.pravatar.cc/150?u=user" }]
    };
    
    // Update client active project count
    setClients(clients.map(c => 
      c.id === selectedClientId ? { ...c, activeProjects: c.activeProjects + 1 } : c
    ));
    
    setProjects([newProject, ...projects]);
    setNewProjectName("");
    setNewProjectBudget("");
    setNewProjectCategory("");
    setIsNewProjectModalOpen(false);
  };

  const openEditModal = (project: Project) => {
    setEditingProject({ ...project });
    setIsEditProjectModalOpen(true);
  };

  const handleUpdateProject = () => {
    if (!editingProject || !editingProject.name.trim()) return;
    setProjects(projects.map(p => p.id === editingProject.id ? editingProject : p));
    setIsEditProjectModalOpen(false);
    setEditingProject(null);
  };

  const handleAddCategory = () => {
    if (newCategoryName.trim() && !categories.includes(newCategoryName.trim())) {
      setCategories([...categories, newCategoryName.trim()]);
      setNewCategoryName("");
    }
  };

  const confirmDeleteCategory = (categoryToDelete: string) => {
    if (categories.length <= 1) {
      alert("Cannot delete the last category.");
      return;
    }
    
    const isCategoryInUse = projects.some(p => p.category === categoryToDelete);
    if (isCategoryInUse) {
      alert("Cannot delete this category because it is currently in use by a project.");
      return;
    }

    setConfirmModalState({
      isOpen: true,
      title: "Delete Category",
      description: "Are you sure you want to delete this category? This action cannot be undone.",
      itemName: categoryToDelete,
      action: () => {
        const newCategories = categories.filter(c => c !== categoryToDelete);
        setCategories(newCategories);
        if (newProjectCategory === categoryToDelete) {
          setNewProjectCategory(newCategories[0] || "");
        }
      }
    });
  };

  const confirmDeleteProject = (project: Project) => {
    setConfirmModalState({
      isOpen: true,
      title: "Delete Project",
      description: "Are you sure you want to delete this project? All associated data will be permanently removed.",
      itemName: project.name,
      action: () => {
        setProjects(projects.filter(p => p.id !== project.id));
        setClients(clients.map(c => 
          c.id === project.clientId ? { ...c, activeProjects: Math.max(0, c.activeProjects - 1) } : c
        ));
        if (selectedProjectId === project.id) {
          setSelectedProjectId(null);
        }
      }
    });
  };

  const confirmDeleteClient = (client: Client) => {
    setConfirmModalState({
      isOpen: true,
      title: "Delete Client",
      description: "Are you sure you want to delete this client? All associated projects will also be permanently deleted.",
      itemName: client.name,
      action: () => {
        setClients(clients.filter(c => c.id !== client.id));
        setProjects(projects.filter(p => p.clientId !== client.id));
        if (selectedClientId === client.id) {
          setSelectedClientId(null);
          setSelectedProjectId(null);
        }
      }
    });
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

    if (selectedProjectId) {
      const project = projects.find(p => p.id === selectedProjectId);
      if (!project) return null;

      return (
        <div className="w-full max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
          {/* Detail View Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSelectedProjectId(null)}
                className="p-2.5 bg-card border border-border/60 rounded-xl hover:bg-muted/80 hover:text-primary transition-colors shadow-sm group"
              >
                <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
              <div>
                <h1 className="text-3xl font-black tracking-tight text-foreground leading-tight">{project.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <span className={cn("px-2 py-0.5 inline-flex text-[10px] font-bold uppercase tracking-widest rounded-lg items-center gap-1.5", getStatusColor(project.status))}>
                    <Circle className="w-1.5 h-1.5 fill-current" />
                    {project.status}
                  </span>
                  <span className="px-2 py-0.5 inline-flex text-[10px] font-bold uppercase tracking-widest rounded-lg items-center gap-1.5 bg-muted text-muted-foreground border border-border/50">
                    <Briefcase className="w-3 h-3" />
                    {project.category || "General"}
                  </span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => openEditModal(project)}
              className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:bg-primary/90 transition-all shadow-sm"
            >
              <Edit2 className="w-4 h-4" />
              <span className="hidden sm:inline">Edit Project</span>
            </button>
          </div>

          {/* Top Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border/60 rounded-3xl p-6 shadow-sm">
               <div className="flex justify-between items-end mb-2">
                  <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Progress</span>
                  <span className="text-3xl font-black text-foreground font-mono">{project.progress}%</span>
               </div>
               <div className="h-2 w-full bg-muted/60 rounded-full overflow-hidden mt-4">
                 <div 
                   className={cn("h-full rounded-full transition-all duration-1000 ease-out", getProgressColor(project.status))}
                   style={{ width: `${project.progress}%` }}
                 ></div>
               </div>
            </div>
            
            <div className="bg-card border border-border/60 rounded-3xl p-6 flex items-center gap-5 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Budget</p>
                <h3 className="text-3xl font-black text-foreground font-mono">{project.budget}</h3>
              </div>
            </div>
            
            <div className="bg-card border border-border/60 rounded-3xl p-6 flex items-center gap-5 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Deadline</p>
                <h3 className="text-xl font-black text-foreground">{new Date(project.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</h3>
              </div>
            </div>
          </div>

          {/* Main Content Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             {/* Left Col: Tasks */}
             <div className="lg:col-span-2 space-y-6">
               <div className="flex items-center justify-between">
                 <h2 className="text-xl font-bold tracking-tight">Milestones & Tasks</h2>
                 <button 
                   onClick={() => setIsKanbanView(!isKanbanView)}
                   className="text-sm font-bold text-primary hover:underline"
                 >
                   {isKanbanView ? "View List" : "View Kanban"}
                 </button>
               </div>
               
               {isKanbanView ? (
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="space-y-3 bg-muted/20 p-4 rounded-3xl border border-border/40">
                       <h4 className="font-bold text-xs text-muted-foreground uppercase tracking-widest mb-4 flex items-center justify-between">
                         To Do <span className="bg-background px-2 py-0.5 rounded-md">2</span>
                       </h4>
                       {["Development Sprint 1", "QA & Testing"].map((task, i) => (
                         <div key={i} className="bg-card border border-border/60 p-4 rounded-2xl shadow-sm hover:border-primary/30 hover:shadow-md transition-all cursor-pointer">
                            <p className="font-bold text-sm text-foreground">{task}</p>
                            <p className="text-xs font-medium text-muted-foreground mt-3 flex items-center gap-1.5"><Calendar className="w-3 h-3" /> Due in {i + 2} weeks</p>
                         </div>
                       ))}
                       <button className="w-full py-2 border-2 border-dashed border-border/60 rounded-xl text-xs font-bold text-muted-foreground hover:bg-muted/50 transition-colors flex items-center justify-center gap-1">
                         <Plus className="w-3 h-3" /> Add Task
                       </button>
                    </div>
                    
                    <div className="space-y-3 bg-muted/20 p-4 rounded-3xl border border-border/40">
                       <h4 className="font-bold text-xs text-primary uppercase tracking-widest mb-4 flex items-center justify-between">
                         In Progress <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-md">0</span>
                       </h4>
                       <div className="p-4 rounded-2xl border-2 border-border/40 border-dashed text-center py-8">
                         <p className="text-xs font-bold text-muted-foreground">No tasks</p>
                       </div>
                    </div>
                    
                    <div className="space-y-3 bg-muted/20 p-4 rounded-3xl border border-border/40">
                       <h4 className="font-bold text-xs text-emerald-500 uppercase tracking-widest mb-4 flex items-center justify-between">
                         Done <span className="bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-md">2</span>
                       </h4>
                       {["Requirement Analysis", "Design Phase"].map((task, i) => (
                         <div key={i} className="bg-muted/40 border border-border/40 p-4 rounded-2xl">
                            <p className="font-bold text-sm text-muted-foreground line-through decoration-muted-foreground/50">{task}</p>
                            <p className="text-xs font-medium text-muted-foreground/70 mt-3 flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3" /> Completed</p>
                         </div>
                       ))}
                    </div>
                 </div>
               ) : (
                 <div className="bg-card border border-border/60 rounded-3xl p-6 shadow-sm space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                   {/* Mock Tasks */}
                   {["Requirement Analysis", "Design Phase", "Development Sprint 1", "QA & Testing"].map((task, i) => (
                     <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-border/40 hover:bg-muted/30 transition-colors">
                        <div className={cn("w-6 h-6 rounded-full border-2 flex items-center justify-center", i < 2 ? "border-primary bg-primary/10 text-primary" : "border-muted-foreground text-transparent")}>
                           {i < 2 && <CheckCircle2 className="w-4 h-4" />}
                        </div>
                        <div>
                          <p className={cn("font-bold", i < 2 ? "line-through text-muted-foreground" : "text-foreground")}>{task}</p>
                          <p className="text-xs font-medium text-muted-foreground mt-0.5">Due {new Date(Date.now() + i * 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                        </div>
                     </div>
                   ))}
                 </div>
               )}
             </div>

             {/* Right Col: Team & Client */}
             <div className="space-y-6">
               <h2 className="text-xl font-bold tracking-tight">Team Members</h2>
               <div className="bg-card border border-border/60 rounded-3xl p-6 shadow-sm space-y-4">
                  {project.team.map((member, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-muted">
                        <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-sm">{member.name}</p>
                        <p className="text-xs text-muted-foreground">Team Member</p>
                      </div>
                    </div>
                  ))}
               </div>
             </div>
          </div>

        </div>
      );
    }

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
              <div 
                key={project.id} 
                onClick={() => setSelectedProjectId(project.id)}
                className="group bg-card border border-border/60 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 relative overflow-hidden flex flex-col h-full cursor-pointer"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none transition-opacity opacity-0 group-hover:opacity-100"></div>

                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="flex flex-col items-start gap-2">
                    <span className={cn("px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-lg flex items-center gap-1.5", getStatusColor(project.status))}>
                      <Circle className="w-2 h-2 fill-current" />
                      {project.status}
                    </span>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1">
                      <Briefcase className="w-3 h-3" /> {project.category || "General"}
                    </span>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                      <button className="p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg transition-colors outline-none focus:ring-2 focus:ring-primary/20">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48 rounded-2xl p-2 border-border/60 shadow-xl bg-background/95 backdrop-blur-md">
                      <DropdownMenuItem 
                        onClick={(e) => { e.stopPropagation(); openEditModal(project); }}
                        className="rounded-xl cursor-pointer py-2.5 focus:bg-primary/10 focus:text-primary font-medium transition-colors"
                      >
                        <Edit2 className="w-4 h-4 mr-2" /> Edit Project
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-border/50" />
                      <DropdownMenuItem className="rounded-xl cursor-pointer py-2.5 focus:bg-amber-500/10 focus:text-amber-600 font-medium text-amber-600 transition-colors">
                        <Archive className="w-4 h-4 mr-2" /> Archive
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={(e) => { e.stopPropagation(); confirmDeleteProject(project); }}
                        className="rounded-xl cursor-pointer py-2.5 focus:bg-rose-500/10 focus:text-rose-600 font-medium text-rose-600 transition-colors"
                      >
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
                  placeholder="e.g. ₹10,000"
                  className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest block">Category</label>
                  <button 
                    type="button"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsManageCategoriesModalOpen(true); }}
                    className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    <Settings2 className="w-3 h-3" /> Manage Categories
                  </button>
                </div>
                <select 
                  value={newProjectCategory}
                  onChange={(e) => setNewProjectCategory(e.target.value)}
                  className={cn(
                    "w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium appearance-none",
                    !newProjectCategory && "text-muted-foreground"
                  )}
                >
                  <option value="" disabled>Select Category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
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
                disabled={!newProjectName.trim() || !newProjectCategory}
                className="px-6 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl shadow-md hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                Create Project
              </button>
            </div>
            
            {/* Nested Manage Categories Modal */}
            <Dialog open={isManageCategoriesModalOpen} onOpenChange={setIsManageCategoriesModalOpen}>
              <DialogContent className="sm:max-w-[400px] rounded-3xl p-0 overflow-hidden border-border/50 shadow-2xl z-[100]">
                <div className="p-6 pb-4">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-black tracking-tight">Manage Categories</DialogTitle>
                  </DialogHeader>
                </div>
                
                <div className="p-6 pt-0 space-y-4">
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={newCategoryName}
                      onChange={(e) => setNewCategoryName(e.target.value)}
                      placeholder="e.g. E-Commerce"
                      className="flex-1 px-4 py-2.5 bg-muted/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleAddCategory();
                      }}
                    />
                    <button 
                      onClick={handleAddCategory}
                      disabled={!newCategoryName.trim()}
                      className="px-4 py-2.5 bg-foreground text-background font-bold rounded-xl shadow-md hover:bg-foreground/90 transition-all disabled:opacity-50"
                    >
                      Add
                    </button>
                  </div>
                  
                  <div className="space-y-2 mt-4 max-h-[250px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-muted">
                    {categories.map(cat => (
                      <div key={cat} className="flex items-center justify-between p-3 bg-muted/30 border border-border/50 rounded-xl">
                        <span className="font-bold text-sm">{cat}</span>
                        <button 
                          onClick={() => confirmDeleteCategory(cat)}
                          className="p-1.5 text-muted-foreground hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 pt-4 bg-muted/30 border-t border-border/50 flex justify-end">
                  <button 
                    onClick={() => setIsManageCategoriesModalOpen(false)}
                    className="px-5 py-2.5 bg-foreground text-background font-bold rounded-xl hover:bg-foreground/90 transition-colors"
                  >
                    Done
                  </button>
                </div>
              </DialogContent>
            </Dialog>
            
          </DialogContent>
        </Dialog>

        {/* Edit Project Modal */}
        <Dialog open={isEditProjectModalOpen} onOpenChange={setIsEditProjectModalOpen}>
          <DialogContent className="sm:max-w-[425px] rounded-3xl p-0 overflow-hidden border-border/50 shadow-2xl">
            <div className="p-6 pb-4">
              <DialogHeader>
                <DialogTitle className="text-2xl font-black tracking-tight">Edit Project</DialogTitle>
              </DialogHeader>
            </div>
            {editingProject && (
              <div className="p-6 pt-0 space-y-4 max-h-[60vh] overflow-y-auto">
                <div>
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Project Name</label>
                  <input 
                    type="text" 
                    value={editingProject.name}
                    onChange={(e) => setEditingProject({...editingProject, name: e.target.value})}
                    className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Budget (Optional)</label>
                  <input 
                    type="text" 
                    value={editingProject.budget}
                    onChange={(e) => setEditingProject({...editingProject, budget: e.target.value})}
                    className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest block">Category</label>
                    <button 
                      type="button"
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsManageCategoriesModalOpen(true); }}
                      className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                    >
                      <Settings2 className="w-3 h-3" /> Manage Categories
                    </button>
                  </div>
                  <select 
                    value={editingProject.category}
                    onChange={(e) => setEditingProject({...editingProject, category: e.target.value})}
                    className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium appearance-none"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Status</label>
                  <select 
                    value={editingProject.status}
                    onChange={(e) => setEditingProject({...editingProject, status: e.target.value as ProjectStatus})}
                    className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium appearance-none"
                  >
                    {["In Progress", "In Review", "Completed", "On Hold"].map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 flex justify-between">
                    <span>Progress</span>
                    <span className="text-foreground">{editingProject.progress}%</span>
                  </label>
                  <input 
                    type="range" 
                    min="0" max="100" 
                    value={editingProject.progress}
                    onChange={(e) => setEditingProject({...editingProject, progress: parseInt(e.target.value)})}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
              </div>
            )}
            <div className="p-6 pt-4 bg-muted/30 border-t border-border/50 flex justify-end gap-3">
              <button 
                onClick={() => { setIsEditProjectModalOpen(false); setEditingProject(null); }}
                className="px-5 py-2.5 rounded-xl font-bold text-muted-foreground hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleUpdateProject}
                disabled={!editingProject?.name?.trim()}
                className="px-6 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl shadow-md hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                Save Changes
              </button>
            </div>
            
            {/* Nested Manage Categories Modal for Edit */}
            <Dialog open={isManageCategoriesModalOpen} onOpenChange={setIsManageCategoriesModalOpen}>
              <DialogContent className="sm:max-w-[400px] rounded-3xl p-0 overflow-hidden border-border/50 shadow-2xl z-[100]">
                <div className="p-6 pb-4">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-black tracking-tight">Manage Categories</DialogTitle>
                  </DialogHeader>
                </div>
                
                <div className="p-6 pt-0 space-y-4">
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={newCategoryName}
                      onChange={(e) => setNewCategoryName(e.target.value)}
                      placeholder="e.g. E-Commerce"
                      className="flex-1 px-4 py-2.5 bg-muted/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleAddCategory();
                      }}
                    />
                    <button 
                      onClick={handleAddCategory}
                      disabled={!newCategoryName.trim()}
                      className="px-4 py-2.5 bg-foreground text-background font-bold rounded-xl shadow-md hover:bg-foreground/90 transition-all disabled:opacity-50"
                    >
                      Add
                    </button>
                  </div>
                  
                  <div className="space-y-2 mt-4 max-h-[250px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-muted">
                    {categories.map(cat => (
                      <div key={cat} className="flex items-center justify-between p-3 bg-muted/30 border border-border/50 rounded-xl">
                        <span className="font-bold text-sm">{cat}</span>
                        <button 
                          onClick={() => confirmDeleteCategory(cat)}
                          className="p-1.5 text-muted-foreground hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 pt-4 bg-muted/30 border-t border-border/50 flex justify-end">
                  <button 
                    onClick={() => setIsManageCategoriesModalOpen(false)}
                    className="px-5 py-2.5 bg-foreground text-background font-bold rounded-xl hover:bg-foreground/90 transition-colors"
                  >
                    Done
                  </button>
                </div>
              </DialogContent>
            </Dialog>

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
                  <DropdownMenuItem 
                    onClick={(e) => { e.stopPropagation(); confirmDeleteClient(client); }}
                    className="rounded-xl cursor-pointer py-2.5 focus:bg-rose-500/10 focus:text-rose-600 font-medium text-rose-600 transition-colors"
                  >
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
                placeholder="e.g. ₹100,000"
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
      <ConfirmModal 
        isOpen={confirmModalState.isOpen}
        onClose={() => setConfirmModalState(prev => ({ ...prev, isOpen: false }))}
        onConfirm={confirmModalState.action}
        title={confirmModalState.title}
        description={confirmModalState.description}
        itemName={confirmModalState.itemName}
      />
    </div>
  );
}
