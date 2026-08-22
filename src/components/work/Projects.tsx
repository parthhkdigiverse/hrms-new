import { useState, useEffect, useMemo } from "react";
import { X,  Search, Plus, Filter, MoreHorizontal, LayoutGrid, List, Briefcase, Calendar, Clock, Star, Circle, Trash2, Edit2, Archive, ArrowLeft, Users, IndianRupee, FolderGit2, CheckCircle2, Settings2, TrendingUp, MousePointerClick, Target, BarChart3, ChevronDown  } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DialogClose,  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter  } from "@/components/ui/dialog";
import { ConfirmModal } from "@/components/ui/confirm-modal";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { format, subDays, startOfYear, differenceInDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { moveToRecycleBin } from "@/lib/recycle-bin";
import { SearchableSelect } from "@/components/ui/select";

type ProjectStatus = "In Progress" | "In Review" | "Completed" | "On Hold";
type ClientStatus = "Active" | "Archived";

interface Client {
  id: string;
  name: string;
  logo: string;
  totalBudget: string;
  outstandingPayment: string;
  onboardingDate: string;
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
  startDate: string;
  endDate: string;
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
    outstandingPayment: "₹45,000",
    onboardingDate: "2025-01-15",
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
    outstandingPayment: "₹0",
    onboardingDate: "2025-03-20",
    activeProjects: 1,
    status: "Active",
    contacts: [{ name: "Bob", avatar: "https://i.pravatar.cc/150?u=bob" }]
  },
  {
    id: "c3",
    name: "Global Retail Inc.",
    logo: "https://i.pravatar.cc/150?u=global",
    totalBudget: "₹450,000",
    outstandingPayment: "₹150,000",
    onboardingDate: "2024-11-10",
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
    outstandingPayment: "₹0",
    onboardingDate: "2025-06-05",
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
    startDate: "2026-06-01",
    endDate: "2026-09-01",
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
    startDate: "2026-05-15",
    endDate: "2026-08-20",
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
    startDate: "2026-08-01",
    endDate: "2026-11-15",
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
    startDate: "2026-04-10",
    endDate: "2026-07-30",
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
    startDate: "2026-07-01",
    endDate: "2027-01-10",
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
    startDate: "2026-07-15",
    endDate: "2026-10-05",
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
  
  const [clientSort, setClientSort] = useState<"name" | "budgetDesc" | "projectsDesc">("name");
  const [clientFilterCategories, setClientFilterCategories] = useState<string[]>([]);
  const [projectFilterStatuses, setProjectFilterStatuses] = useState<ProjectStatus[]>([]);
  const [projectFilterCategories, setProjectFilterCategories] = useState<string[]>([]);
  
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  
  const [campaignDateRange, setCampaignDateRange] = useState("Last 30 Days");
  const [customDateRange, setCustomDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 30),
    to: new Date(),
  });
  const [selectedCampaignForStats, setSelectedCampaignForStats] = useState("All Campaigns");

  useEffect(() => { localStorage.setItem('hrms_clients', JSON.stringify(clients)); }, [clients]);
  useEffect(() => { localStorage.setItem('hrms_projects', JSON.stringify(projects)); }, [projects]);
  useEffect(() => { localStorage.setItem('hrms_categories', JSON.stringify(categories)); }, [categories]);
  const [isKanbanView, setIsKanbanView] = useState(false);

  const [isNewClientModalOpen, setIsNewClientModalOpen] = useState(false);
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  const [isEditClientModalOpen, setIsEditClientModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [showEditClientErrors, setShowEditClientErrors] = useState(false);
  const [isEditProjectModalOpen, setIsEditProjectModalOpen] = useState(false);
  
  const [newClientName, setNewClientName] = useState("");
  const [newClientBudget, setNewClientBudget] = useState("");
  const [newClientOutstanding, setNewClientOutstanding] = useState("");
  const [newClientOnboarding, setNewClientOnboarding] = useState(new Date().toISOString().split('T')[0] || "");
  
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectBudget, setNewProjectBudget] = useState("");
  const [newProjectCategory, setNewProjectCategory] = useState("");
  const [newProjectStartDate, setNewProjectStartDate] = useState(new Date().toISOString().split('T')[0] || "");
  const [newProjectEndDate, setNewProjectEndDate] = useState(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] || "");
  const [isManageCategoriesModalOpen, setIsManageCategoriesModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [showNewProjectErrors, setShowNewProjectErrors] = useState(false);
  const [showEditProjectErrors, setShowEditProjectErrors] = useState(false);
  const [showNewClientErrors, setShowNewClientErrors] = useState(false);
  const [showCategoryErrors, setShowCategoryErrors] = useState(false);

  const [confirmModalState, setConfirmModalState] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    itemName?: string;
    action: () => void;
  }>({ isOpen: false, title: "", description: "", action: () => {} });

  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const handleCreateClient = () => {
    setShowNewClientErrors(true);
    if (!newClientName.trim()) {
      toast.error("Please fill in all required fields");
      setTimeout(() => setShowNewClientErrors(false), 3000);
      return;
    }
    const newClient: Client = {
      id: `c${Date.now()}`,
      name: newClientName,
      logo: `https://i.pravatar.cc/150?u=${encodeURIComponent(newClientName)}`,
      totalBudget: newClientBudget || "₹0",
      outstandingPayment: newClientOutstanding || "₹0",
      onboardingDate: newClientOnboarding || new Date().toISOString().split('T')[0] || "",
      activeProjects: 0,
      status: "Active",
      contacts: [{ name: "User", avatar: "https://i.pravatar.cc/150?u=user" }]
    };
    setClients([newClient, ...clients]);
    setNewClientName("");
    setNewClientBudget("");
    setNewClientOutstanding("");
    setNewClientOnboarding(new Date().toISOString().split('T')[0] || "");
    setShowNewClientErrors(false);
    setIsNewClientModalOpen(false);
  };

  const handleUpdateClient = () => {
    setShowEditClientErrors(true);
    if (!editingClient || !editingClient.name.trim()) {
      toast.error("Please fill in all required fields");
      setTimeout(() => setShowEditClientErrors(false), 3000);
      return;
    }
    setClients(clients.map(c => c.id === editingClient.id ? editingClient : c));
    setShowEditClientErrors(false);
    setIsEditClientModalOpen(false);
    setEditingClient(null);
  };

  const handleCreateProject = () => {
    setShowNewProjectErrors(true);
    if (!newProjectName.trim() || !selectedClientId || !newProjectCategory || !newProjectStartDate || !newProjectEndDate) {
      toast.error("Please fill in all required fields");
      setTimeout(() => setShowNewProjectErrors(false), 3000);
      return;
    }
    const newProject: Project = {
      id: `p${Date.now()}`,
      clientId: selectedClientId,
      name: newProjectName,
      category: newProjectCategory,
      status: "In Progress",
      progress: 0,
      startDate: newProjectStartDate || (new Date().toISOString().split('T')[0] as string),
      endDate: newProjectEndDate || (new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] as string),
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
    setShowNewProjectErrors(false);
    setIsNewProjectModalOpen(false);
  };

  const openEditModal = (project: Project) => {
    setEditingProject({ ...project });
    setIsEditProjectModalOpen(true);
  };

  const handleUpdateProject = () => {
    setShowEditProjectErrors(true);
    if (!editingProject || !editingProject.name.trim() || !editingProject.category || !editingProject.startDate || !editingProject.endDate) {
      toast.error("Please fill in all required fields");
      setTimeout(() => setShowEditProjectErrors(false), 3000);
      return;
    }
    setProjects(projects.map(p => p.id === editingProject.id ? editingProject : p));
    setShowEditProjectErrors(false);
    setIsEditProjectModalOpen(false);
    setEditingProject(null);
  };

  const handleAddCategory = () => {
    setShowCategoryErrors(true);
    if (!newCategoryName.trim()) {
      toast.error("Category name cannot be empty");
      setTimeout(() => setShowCategoryErrors(false), 3000);
      return;
    }
    if (newCategoryName.trim() && !categories.includes(newCategoryName.trim())) {
      setCategories([...categories, newCategoryName.trim()]);
      setNewCategoryName("");
      setShowCategoryErrors(false);
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
        moveToRecycleBin('Project Category', categoryToDelete, categoryToDelete, 'hrms_categories');
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
        moveToRecycleBin('Project', project.name, project, 'hrms_projects');
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
        moveToRecycleBin('Client', client.name, client, 'hrms_clients');
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

  const categoryStats = useMemo(() => {
    const stats: Record<string, Set<string>> = {};
    categories.forEach(cat => {
      stats[cat] = new Set();
    });
    projects.forEach(p => {
      if (stats[p.category]) {
        stats[p.category]?.add(p.clientId);
      }
    });
    return categories.map(cat => ({
      category: cat,
      clientCount: stats[cat]?.size || 0
    })).sort((a, b) => b.clientCount - a.clientCount);
  }, [projects, categories]);

  const filteredClients = clients.filter(client => {
    if (activeTab === "Active Clients" && client.status !== "Active") return false;
    if (activeTab === "Archived Clients" && client.status !== "Archived") return false;
    if (searchQuery && !client.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (clientFilterCategories.length > 0) {
      const hasProjectInCategory = projects.some(p => p.clientId === client.id && clientFilterCategories.includes(p.category));
      if (!hasProjectInCategory) return false;
    }
    return true;
  }).sort((a, b) => {
    if (clientSort === "budgetDesc") {
      const budgetA = parseInt(a.totalBudget.replace(/[^0-9]/g, '')) || 0;
      const budgetB = parseInt(b.totalBudget.replace(/[^0-9]/g, '')) || 0;
      return budgetB - budgetA;
    }
    if (clientSort === "projectsDesc") {
      return b.activeProjects - a.activeProjects;
    }
    return a.name.localeCompare(b.name);
  });

  if (selectedClientId) {
    const client = clients.find(c => c.id === selectedClientId);
    if (!client) return null;

    if (selectedProjectId) {
      const project = projects.find(p => p.id === selectedProjectId);
      if (!project) return null;

      return (
        <div className="w-full space-y-8 animate-in fade-in duration-500">
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
                <IndianRupee className="w-6 h-6" />
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
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Timeline</p>
                <h3 className="text-sm font-black text-foreground">{format(new Date(project.startDate), "dd/MM/yyyy")} - {format(new Date(project.endDate), "dd/MM/yyyy")}</h3>
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
                          <p className="text-xs font-medium text-muted-foreground mt-0.5">Due {format(new Date(Date.now() + i * 7 * 24 * 60 * 60 * 1000), "dd/MM/yyyy")}</p>
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

    const clientProjects = projects.filter(p => {
      if (p.clientId !== client.id) return false;
      if (projectFilterStatuses.length > 0 && !projectFilterStatuses.includes(p.status)) return false;
      if (projectFilterCategories.length > 0 && !projectFilterCategories.includes(p.category)) return false;
      return true;
    });

    return (
      <div className="w-full space-y-8 animate-in fade-in duration-500">
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
          
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border/60 text-foreground font-bold text-sm rounded-xl hover:bg-muted/80 transition-all shadow-sm">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <span className="hidden sm:inline">Filter</span>
                  {(projectFilterStatuses.length > 0 || projectFilterCategories.length > 0) && (
                    <span className="w-2 h-2 rounded-full bg-primary ml-1"></span>
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 border-border/60 shadow-xl bg-background/95 backdrop-blur-md z-50">
                <div className="px-2 py-1.5 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1 flex justify-between items-center">
                  <span>Status</span>
                  {(projectFilterStatuses.length > 0 || projectFilterCategories.length > 0) && (
                    <button 
                      onClick={(e) => { e.stopPropagation(); setProjectFilterStatuses([]); setProjectFilterCategories([]); }}
                      className="text-[10px] text-primary hover:underline"
                    >
                      Clear All
                    </button>
                  )}
                </div>
                {["In Progress", "In Review", "Completed", "On Hold"].map(status => (
                  <DropdownMenuItem 
                    key={status}
                    onSelect={(e) => { 
                      e.preventDefault(); 
                      setProjectFilterStatuses(prev => 
                        prev.includes(status as ProjectStatus) 
                          ? prev.filter(s => s !== status) 
                          : [...prev, status as ProjectStatus]
                      ); 
                    }}
                    className={cn(
                      "rounded-xl cursor-pointer py-2 focus:bg-primary/10 focus:text-primary font-medium transition-colors flex items-center justify-between",
                      projectFilterStatuses.includes(status as ProjectStatus) && "bg-primary/10 text-primary"
                    )}
                  >
                    <span>{status}</span>
                    {projectFilterStatuses.includes(status as ProjectStatus) && <CheckCircle2 className="w-4 h-4" />}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className="bg-border/50 my-2" />
                <div className="px-2 py-1.5 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Category</div>
                {categories.map(cat => (
                  <DropdownMenuItem 
                    key={cat}
                    onSelect={(e) => { 
                      e.preventDefault(); 
                      setProjectFilterCategories(prev => 
                        prev.includes(cat) 
                          ? prev.filter(c => c !== cat) 
                          : [...prev, cat]
                      ); 
                    }}
                    className={cn(
                      "rounded-xl cursor-pointer py-2 focus:bg-primary/10 focus:text-primary font-medium transition-colors flex items-center justify-between",
                      projectFilterCategories.includes(cat) && "bg-primary/10 text-primary"
                    )}
                  >
                    <span>{cat}</span>
                    {projectFilterCategories.includes(cat) && <CheckCircle2 className="w-4 h-4" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <button onClick={() => setIsNewProjectModalOpen(true)} className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:bg-primary/90 transition-all shadow-sm">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">New Project</span>
            </button>
          </div>
        </div>

        {/* Summary Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-card border border-border/60 rounded-3xl p-5 flex flex-col justify-center shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <FolderGit2 className="w-4 h-4" />
              </div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Total Projects</p>
            </div>
            <h3 className="text-2xl font-black text-foreground font-mono">{clientProjects.length}</h3>
          </div>
          <div className="bg-card border border-border/60 rounded-3xl p-5 flex flex-col justify-center shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                <IndianRupee className="w-4 h-4" />
              </div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Total Budget</p>
            </div>
            <h3 className="text-2xl font-black text-foreground font-mono">{client.totalBudget}</h3>
          </div>
          <div className="bg-card border border-border/60 rounded-3xl p-5 flex flex-col justify-center shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Outstanding</p>
            </div>
            <h3 className="text-2xl font-black text-foreground font-mono">{client.outstandingPayment}</h3>
          </div>
          <div className="bg-card border border-border/60 rounded-3xl p-5 flex flex-col justify-center shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Onboarded</p>
            </div>
            <h3 className="text-2xl font-black text-foreground font-mono">{client.onboardingDate ? format(new Date(client.onboardingDate), "dd MMM yyyy") : "-"}</h3>
          </div>
          <div className="bg-card border border-border/60 rounded-3xl p-5 flex flex-col justify-center shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Contacts</p>
            </div>
            <div className="flex -space-x-2">
              {client.contacts.map((contact, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-card overflow-hidden bg-muted shadow-sm">
                  <img src={contact.avatar} alt={contact.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conditional Digital Marketing Report */}
        {projects.some(p => p.clientId === client.id && p.category === "Digital Marketing") && (() => {
          
          let reach = "1.2M", leads = "3,240", cpl = "250", amountSpent = "8,10,000";
          let reachTrend = "+14.2%", leadsTrend = "+8.1%", cplTrend = "-5.4%", amountSpentTrend = "+12.2%";

          if (selectedCampaignForStats === "Q4 Retargeting Ads") {
            reach = "450K"; leads = "1,400"; cpl = "180"; amountSpent = "2,52,000";
            reachTrend = "+5.1%"; leadsTrend = "+12.0%"; cplTrend = "-2.5%"; amountSpentTrend = "+8.4%";
          } else if (selectedCampaignForStats === "Holiday Social Push") {
            reach = "850K"; leads = "1,600"; cpl = "320"; amountSpent = "5,12,000";
            reachTrend = "+22.4%"; leadsTrend = "+4.2%"; cplTrend = "+1.1%"; amountSpentTrend = "+2.1%";
          } else if (selectedCampaignForStats === "B2B Email Drip") {
            reach = "120K"; leads = "240"; cpl = "450"; amountSpent = "1,08,000";
            reachTrend = "+2.0%"; leadsTrend = "+1.1%"; cplTrend = "-8.5%"; amountSpentTrend = "+1.0%";
          }

          let days = 30;
          if (customDateRange?.from && customDateRange?.to) {
            days = differenceInDays(customDateRange.to, customDateRange.from) || 1;
          }

          if (days !== 30) {
            const ratio = days / 30;
            reach = (parseFloat(reach) * ratio).toFixed(1) + (reach.includes("M") ? "M" : "K");
            leads = Math.floor(parseInt(leads.replace(/,/g, "")) * ratio).toLocaleString("en-IN");
            amountSpent = Math.floor(parseInt(amountSpent.replace(/,/g, "")) * ratio).toLocaleString("en-IN");
          }

          return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
              <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Campaign Performance
              </h2>
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border/60 text-foreground font-bold text-xs rounded-lg hover:bg-muted/80 transition-all shadow-sm">
                      <Filter className="w-3 h-3 text-muted-foreground" />
                      {selectedCampaignForStats}
                      <ChevronDown className="w-3 h-3 text-muted-foreground ml-1" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 rounded-xl p-1.5 border-border/60 shadow-xl bg-background/95 backdrop-blur-md z-50">
                    {["All Campaigns", "Q4 Retargeting Ads", "Holiday Social Push", "B2B Email Drip"].map(opt => (
                      <DropdownMenuItem 
                        key={opt}
                        onSelect={() => setSelectedCampaignForStats(opt)}
                        className={cn(
                          "rounded-lg cursor-pointer py-2 focus:bg-primary/10 focus:text-primary font-medium text-xs transition-colors flex items-center justify-between",
                          selectedCampaignForStats === opt && "bg-primary/10 text-primary font-bold"
                        )}
                      >
                        {opt}
                        {selectedCampaignForStats === opt && <CheckCircle2 className="w-3 h-3" />}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <Popover>
                  <PopoverTrigger asChild>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border/60 text-foreground font-bold text-xs rounded-lg hover:bg-muted/80 transition-all shadow-sm whitespace-nowrap">
                      <Calendar className="w-3 h-3 text-muted-foreground" />
                      {campaignDateRange === "Custom" && customDateRange?.from ? (
                        customDateRange.to ? (
                          <>
                            {format(customDateRange.from, "dd/MM/yyyy")} -{" "}
                            {format(customDateRange.to, "dd/MM/yyyy")}
                          </>
                        ) : (
                          format(customDateRange.from, "dd/MM/yyyy")
                        )
                      ) : (
                        campaignDateRange
                      )}
                      <ChevronDown className="w-3 h-3 text-muted-foreground ml-1" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="end">
                    <div className="flex flex-col sm:flex-row">
                      <div className="flex flex-col gap-1 p-3 border-b sm:border-b-0 sm:border-r border-border/50 bg-muted/20 w-full sm:w-40">
                        {["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Month", "Year to Date", "Custom"].map(opt => (
                          <button
                            key={opt}
                            onClick={() => {
                               setCampaignDateRange(opt);
                               if (opt === "Today") setCustomDateRange({ from: new Date(), to: new Date() });
                               else if (opt === "Yesterday") setCustomDateRange({ from: subDays(new Date(), 1), to: subDays(new Date(), 1) });
                               else if (opt === "Last 7 Days") setCustomDateRange({ from: subDays(new Date(), 7), to: new Date() });
                               else if (opt === "Last 30 Days") setCustomDateRange({ from: subDays(new Date(), 30), to: new Date() });
                               else if (opt === "This Month") {
                                 const today = new Date();
                                 setCustomDateRange({ from: new Date(today.getFullYear(), today.getMonth(), 1), to: today });
                               }
                               else if (opt === "Year to Date") setCustomDateRange({ from: startOfYear(new Date()), to: new Date() });
                            }}
                            className={cn(
                              "text-left px-3 py-2 text-xs font-bold rounded-lg transition-colors",
                              campaignDateRange === opt ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-muted/60 text-foreground"
                            )}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      <div className="p-3">
                        <CalendarUI
                          initialFocus
                          mode="range"
                          defaultMonth={customDateRange?.from || new Date()}
                          selected={customDateRange}
                          onSelect={(range) => {
                             setCustomDateRange(range);
                             setCampaignDateRange("Custom");
                          }}
                          numberOfMonths={2}
                          className="rounded-md p-0"
                        />
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in zoom-in-95 duration-300" key={`${selectedCampaignForStats}-${campaignDateRange}`}>
              <div className="bg-card border border-border/60 rounded-3xl p-5 shadow-sm relative overflow-hidden group hover:border-primary/30 transition-colors">
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-colors"></div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Reach</span>
                </div>
                <h4 className="text-2xl font-black text-foreground font-mono">{reach}</h4>
                <p className="text-xs font-bold text-emerald-500 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" /> {reachTrend}
                </p>
              </div>

              <div className="bg-card border border-border/60 rounded-3xl p-5 shadow-sm relative overflow-hidden group hover:border-primary/30 transition-colors">
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-colors"></div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <Target className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Leads</span>
                </div>
                <h4 className="text-2xl font-black text-foreground font-mono">{leads}</h4>
                <p className="text-xs font-bold text-emerald-500 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" /> {leadsTrend}
                </p>
              </div>

              <div className="bg-card border border-border/60 rounded-3xl p-5 shadow-sm relative overflow-hidden group hover:border-primary/30 transition-colors">
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-colors"></div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <MousePointerClick className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">CPL</span>
                </div>
                <h4 className="text-2xl font-black text-foreground font-mono">₹{cpl}</h4>
                <p className="text-xs font-bold text-emerald-500 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" /> {cplTrend}
                </p>
              </div>

              <div className="bg-card border border-border/60 rounded-3xl p-5 shadow-sm relative overflow-hidden group hover:border-primary/30 transition-colors">
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-colors"></div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <IndianRupee className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Amount Spent</span>
                </div>
                <h4 className="text-2xl font-black text-foreground font-mono">₹{amountSpent}</h4>
                <p className="text-xs font-bold text-emerald-500 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" /> {amountSpentTrend}
                </p>
              </div>
            </div>
            
            <div className="mt-4 bg-card border border-border/60 rounded-3xl p-6 shadow-sm">
               <div className="flex items-center justify-between mb-6">
                 <h3 className="text-sm font-bold text-foreground">Top Performing Campaigns</h3>
               </div>
               <div className="space-y-4">
                 {[
                   { name: "Q4 Retargeting Ads", budget: "₹45,000", leads: 450, status: "Active", progress: 75 },
                   { name: "Holiday Social Push", budget: "₹20,000", leads: 180, status: "Active", progress: 40 },
                   { name: "B2B Email Drip", budget: "₹15,000", leads: 85, status: "Completed", progress: 100 }
                 ].map((camp, i) => (
                   <div key={i} className="flex items-center gap-4">
                     <div className="flex-1">
                       <div className="flex justify-between items-center mb-1">
                         <span className="text-sm font-bold text-foreground">{camp.name}</span>
                         <span className="text-xs font-bold text-muted-foreground font-mono">{camp.leads} leads</span>
                       </div>
                       <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                         <div className={cn("h-full rounded-full transition-all duration-1000", camp.progress === 100 ? "bg-emerald-500" : "bg-primary")} style={{ width: `${camp.progress}%` }}></div>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
          );
        })()}

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
                    <span className="text-xs font-bold text-foreground/80">{format(new Date(project.startDate), "dd/MM/yyyy")} - {format(new Date(project.endDate), "dd/MM/yyyy")}</span>
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
          <DialogContent className="sm:max-w-[425px] md:max-w-[500px] p-0 overflow-hidden rounded-[2rem] gap-0 border-border/60 shadow-2xl [&>button]:hidden bg-card">
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between px-6 md:px-8 py-6 border-b border-border/50 bg-muted/30">
          <div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight">New Project</h2>
            
          </div>
          <DialogClose asChild>
            <button className="p-2 text-muted-foreground hover:text-foreground/80 hover:bg-muted rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </DialogClose>
        </div>
            </div>
            <div className="p-6 md:p-8 space-y-6 overflow-y-auto max-h-[70vh]">
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Project Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  placeholder="e.g. Website Redesign"
                  className={"w-full px-4 py-3 bg-muted/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium " + (showNewProjectErrors && !newProjectName.trim() ? "border-red-500 ring-1 ring-red-500" : "border-border/50")}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Start Date <span className="text-red-500">*</span></label>
                  <input 
                    type="date" 
                    value={newProjectStartDate}
                    onChange={(e) => {
                      const newStart = e.target.value;
                      setNewProjectStartDate(newStart);
                      if (newProjectEndDate < newStart) {
                        setNewProjectEndDate(newStart);
                      }
                    }}
                    className={"w-full px-4 py-3 bg-muted/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium " + (showNewProjectErrors && !newProjectStartDate ? "border-red-500 ring-1 ring-red-500" : "border-border/50")}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">End Date <span className="text-red-500">*</span></label>
                  <input 
                    type="date" 
                    value={newProjectEndDate}
                    min={newProjectStartDate}
                    onChange={(e) => setNewProjectEndDate(e.target.value)}
                    className={"w-full px-4 py-3 bg-muted/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium " + (showNewProjectErrors && !newProjectEndDate ? "border-red-500 ring-1 ring-red-500" : "border-border/50")}
                  />
                </div>
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
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest block">Category <span className="text-red-500">*</span></label>
                  <button 
                    type="button"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsManageCategoriesModalOpen(true); }}
                    className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    <Settings2 className="w-3 h-3" /> Manage Categories
                  </button>
                </div>
                <SearchableSelect 
                  value={newProjectCategory}
                  onChange={(val) => setNewProjectCategory(val)}
                  options={categories.map(cat => ({ label: cat, value: cat }))}
                  placeholder="Select Category"
                  className={cn(
                    "w-full h-[46px] px-4 bg-muted/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium",
                    showNewProjectErrors && !newProjectCategory ? "border-red-500 ring-1 ring-red-500" : "border-border/50"
                  )}
                />
              </div>
            </div>
            <div className="px-6 md:px-8 py-4 md:py-6 bg-muted/30 border-t border-border/50 flex justify-end gap-3 mt-auto shrink-0">
              <button 
                onClick={() => setIsNewProjectModalOpen(false)}
                className="px-5 py-2.5 rounded-xl font-bold text-muted-foreground hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleCreateProject}
                className="px-6 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl shadow-md hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                Create Project
              </button>
            </div>
            
            {/* Nested Manage Categories Modal */}
            <Dialog open={isManageCategoriesModalOpen} onOpenChange={setIsManageCategoriesModalOpen}>
              <DialogContent className="sm:max-w-[400px] p-0 overflow-hidden rounded-[2rem] gap-0 border-border/60 shadow-2xl [&>button]:hidden bg-card">
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between px-6 md:px-8 py-6 border-b border-border/50 bg-muted/30">
          <div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight">Manage Categories</h2>
            
          </div>
          <DialogClose asChild>
            <button className="p-2 text-muted-foreground hover:text-foreground/80 hover:bg-muted rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </DialogClose>
        </div>
                </div>
                
                <div className="p-6 md:p-8 space-y-6 overflow-y-auto max-h-[70vh]">
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={newCategoryName}
                      onChange={(e) => setNewCategoryName(e.target.value)}
                      placeholder="e.g. E-Commerce"
                      className={"flex-1 px-4 py-2.5 bg-muted/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium " + (showCategoryErrors && !newCategoryName.trim() ? "border-red-500 ring-1 ring-red-500" : "border-border/50")}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleAddCategory();
                      }}
                    />
                    <button 
                      onClick={handleAddCategory}
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
                
                <div className="px-6 md:px-8 py-4 md:py-6 bg-muted/30 border-t border-border/50 flex justify-end gap-3 mt-auto shrink-0">
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
          <DialogContent className="sm:max-w-[425px] md:max-w-[500px] p-0 overflow-hidden rounded-[2rem] gap-0 border-border/60 shadow-2xl [&>button]:hidden bg-card">
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between px-6 md:px-8 py-6 border-b border-border/50 bg-muted/30">
          <div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight">Edit Project</h2>
            
          </div>
          <DialogClose asChild>
            <button className="p-2 text-muted-foreground hover:text-foreground/80 hover:bg-muted rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </DialogClose>
        </div>
            </div>
            {editingProject && (
              <div className="p-6 md:p-8 space-y-6 overflow-y-auto max-h-[70vh]">
                <div>
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Project Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    value={editingProject.name}
                    onChange={(e) => setEditingProject({...editingProject, name: e.target.value})}
                    className={"w-full px-4 py-3 bg-muted/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium " + (showEditProjectErrors && !editingProject.name.trim() ? "border-red-500 ring-1 ring-red-500" : "border-border/50")}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Start Date <span className="text-red-500">*</span></label>
                    <input 
                      type="date" 
                      value={editingProject.startDate}
                      onChange={(e) => {
                        const newStart = e.target.value;
                        setEditingProject({
                          ...editingProject, 
                          startDate: newStart,
                          endDate: editingProject.endDate < newStart ? newStart : editingProject.endDate
                        });
                      }}
                      className={"w-full px-4 py-3 bg-muted/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium " + (showEditProjectErrors && !editingProject.startDate ? "border-red-500 ring-1 ring-red-500" : "border-border/50")}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">End Date <span className="text-red-500">*</span></label>
                    <input 
                      type="date" 
                      value={editingProject.endDate}
                      min={editingProject.startDate}
                      onChange={(e) => setEditingProject({...editingProject, endDate: e.target.value})}
                      className={"w-full px-4 py-3 bg-muted/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium " + (showEditProjectErrors && !editingProject.endDate ? "border-red-500 ring-1 ring-red-500" : "border-border/50")}
                    />
                  </div>
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
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest block">Category <span className="text-red-500">*</span></label>
                    <button 
                      type="button"
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsManageCategoriesModalOpen(true); }}
                      className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                    >
                      <Settings2 className="w-3 h-3" /> Manage Categories
                    </button>
                  </div>
                  <SearchableSelect 
                    value={editingProject.category}
                    onChange={(val) => setEditingProject({...editingProject, category: val})}
                    options={categories.map(cat => ({ label: cat, value: cat }))}
                    className={"w-full h-[46px] px-4 bg-muted/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium " + (showEditProjectErrors && !editingProject.category ? "border-red-500 ring-1 ring-red-500" : "border-border/50")}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Status <span className="text-red-500">*</span></label>
                  <SearchableSelect 
                    value={editingProject.status}
                    onChange={(val) => setEditingProject({...editingProject, status: val as ProjectStatus})}
                    options={[
                      { label: "In Progress", value: "In Progress" },
                      { label: "In Review", value: "In Review" },
                      { label: "Completed", value: "Completed" },
                      { label: "On Hold", value: "On Hold" }
                    ]}
                    className="w-full h-[46px] px-4 bg-muted/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                  />
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
            <div className="px-6 md:px-8 py-4 md:py-6 bg-muted/30 border-t border-border/50 flex justify-end gap-3 mt-auto shrink-0">
              <button 
                onClick={() => { setIsEditProjectModalOpen(false); setEditingProject(null); }}
                className="px-5 py-2.5 rounded-xl font-bold text-muted-foreground hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleUpdateProject}
                className="px-6 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl shadow-md hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                Save Changes
              </button>
            </div>
            
            {/* Nested Manage Categories Modal for Edit */}
            <Dialog open={isManageCategoriesModalOpen} onOpenChange={setIsManageCategoriesModalOpen}>
              <DialogContent className="sm:max-w-[400px] p-0 overflow-hidden rounded-[2rem] gap-0 border-border/60 shadow-2xl [&>button]:hidden bg-card">
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between px-6 md:px-8 py-6 border-b border-border/50 bg-muted/30">
          <div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight">Manage Categories</h2>
            
          </div>
          <DialogClose asChild>
            <button className="p-2 text-muted-foreground hover:text-foreground/80 hover:bg-muted rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </DialogClose>
        </div>
                </div>
                
                <div className="p-6 md:p-8 space-y-6 overflow-y-auto max-h-[70vh]">
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={newCategoryName}
                      onChange={(e) => setNewCategoryName(e.target.value)}
                      placeholder="e.g. E-Commerce"
                      className={"flex-1 px-4 py-2.5 bg-muted/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium " + (showCategoryErrors && !newCategoryName.trim() ? "border-red-500 ring-1 ring-red-500" : "border-border/50")}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleAddCategory();
                      }}
                    />
                    <button 
                      onClick={handleAddCategory}
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
                
                <div className="px-6 md:px-8 py-4 md:py-6 bg-muted/30 border-t border-border/50 flex justify-end gap-3 mt-auto shrink-0">
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
    <div className="w-full space-y-6 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-foreground bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">Clients</h1>
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border/60 text-foreground font-bold text-sm rounded-xl hover:bg-muted/80 transition-all shadow-sm">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="hidden sm:inline">Filter & Sort</span>
                {clientFilterCategories.length > 0 && (
                  <span className="w-2 h-2 rounded-full bg-primary ml-1"></span>
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 border-border/60 shadow-xl bg-background/95 backdrop-blur-md z-50">
              <div className="px-2 py-1.5 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1 flex justify-between items-center">
                <span>Status</span>
              </div>
              {TABS.map(tab => (
                <DropdownMenuItem 
                  key={tab}
                  onSelect={(e) => { e.preventDefault(); setActiveTab(tab); }}
                  className={cn(
                    "rounded-xl cursor-pointer py-2 focus:bg-primary/10 focus:text-primary font-medium transition-colors flex items-center justify-between",
                    activeTab === tab && "bg-primary/10 text-primary"
                  )}
                >
                  <span>{tab}</span>
                  {activeTab === tab && <CheckCircle2 className="w-4 h-4" />}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator className="bg-border/50 my-2" />
              <div className="px-2 py-1.5 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Sort By</div>
              <DropdownMenuItem 
                onSelect={(e) => { e.preventDefault(); setClientSort("name"); }}
                className={cn(
                  "rounded-xl cursor-pointer py-2 focus:bg-primary/10 focus:text-primary font-medium transition-colors flex items-center justify-between",
                  clientSort === "name" && "bg-primary/10 text-primary"
                )}
              >
                <span>A-Z Name</span>
                {clientSort === "name" && <CheckCircle2 className="w-4 h-4" />}
              </DropdownMenuItem>
              <DropdownMenuItem 
                onSelect={(e) => { e.preventDefault(); setClientSort("budgetDesc"); }}
                className={cn(
                  "rounded-xl cursor-pointer py-2 focus:bg-primary/10 focus:text-primary font-medium transition-colors flex items-center justify-between",
                  clientSort === "budgetDesc" && "bg-primary/10 text-primary"
                )}
              >
                <span>Highest Budget</span>
                {clientSort === "budgetDesc" && <CheckCircle2 className="w-4 h-4" />}
              </DropdownMenuItem>
              <DropdownMenuItem 
                onSelect={(e) => { e.preventDefault(); setClientSort("projectsDesc"); }}
                className={cn(
                  "rounded-xl cursor-pointer py-2 focus:bg-primary/10 focus:text-primary font-medium transition-colors flex items-center justify-between",
                  clientSort === "projectsDesc" && "bg-primary/10 text-primary"
                )}
              >
                <span>Most Projects</span>
                {clientSort === "projectsDesc" && <CheckCircle2 className="w-4 h-4" />}
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-border/50 my-2" />
              <div className="px-2 py-1.5 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Project Category</div>
              {categories.map(cat => (
                <DropdownMenuItem 
                  key={cat}
                  onSelect={(e) => { 
                    e.preventDefault(); 
                    setClientFilterCategories(prev => 
                      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
                    ); 
                  }}
                  className={cn(
                    "rounded-xl cursor-pointer py-2 focus:bg-primary/10 focus:text-primary font-medium transition-colors flex items-center justify-between",
                    clientFilterCategories.includes(cat) && "bg-primary/10 text-primary"
                  )}
                >
                  <span>{cat}</span>
                  {clientFilterCategories.includes(cat) && <CheckCircle2 className="w-4 h-4" />}
                </DropdownMenuItem>
              ))}
              {(clientFilterCategories.length > 0 || clientSort !== "name" || activeTab !== TABS[0]) && (
                <>
                  <DropdownMenuSeparator className="bg-border/50 my-2" />
                  <DropdownMenuItem 
                    onSelect={(e) => { 
                      e.preventDefault(); 
                      setClientFilterCategories([]); 
                      setClientSort("name");
                      setActiveTab(TABS[0]);
                    }}
                    className="rounded-xl cursor-pointer py-2 focus:bg-rose-500/10 focus:text-rose-500 text-rose-500 font-bold transition-colors flex items-center justify-center"
                  >
                    Clear All Filters
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          <button onClick={() => setIsNewClientModalOpen(true)} className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:bg-primary/90 transition-all shadow-sm">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">New Client</span>
          </button>
        </div>
      </div>

      {/* Category KPIs */}
      <div className="flex flex-wrap gap-4 pt-4 pb-2">
        {categoryStats.map((stat, i) => (
          <div key={i} className="flex-1 min-w-[150px] bg-white border border-border/60 rounded-3xl p-5 shadow-sm flex flex-col justify-center transition-all hover:shadow-lg hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-2 truncate relative z-10" title={stat.category}>{stat.category}</p>
            <div className="flex items-baseline gap-1.5 relative z-10">
              <p className="text-3xl font-black text-foreground tracking-tighter">{stat.clientCount}</p>
              <p className="text-[10px] font-medium text-muted-foreground mb-1 uppercase">Clients</p>
            </div>
          </div>
        ))}
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
            className="group bg-white border border-border/40 rounded-[2rem] p-6 shadow-sm hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 relative flex flex-col cursor-pointer"
          >
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/[0.03] to-transparent rounded-t-[2rem] pointer-events-none transition-opacity opacity-0 group-hover:opacity-100"></div>

            <div className="flex justify-between items-start mb-5 relative z-10">
              <div className="w-16 h-16 rounded-2xl border border-border/50 overflow-hidden shadow-sm bg-white p-1 group-hover:scale-105 group-hover:border-primary/30 transition-all duration-300">
                <img src={client.logo} alt={client.name} className="w-full h-full object-cover rounded-xl" />
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                  <button className="p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg transition-colors outline-none focus:ring-2 focus:ring-primary/20 bg-background/50 backdrop-blur-sm">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 rounded-2xl p-2 border-border/60 shadow-xl bg-background/95 backdrop-blur-md">
                  <DropdownMenuItem 
                    onClick={(e) => { e.stopPropagation(); setEditingClient(client); setIsEditClientModalOpen(true); }}
                    className="rounded-xl cursor-pointer py-2.5 focus:bg-primary/10 focus:text-primary font-medium transition-colors"
                  >
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
              
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2 py-1 bg-primary/10 text-primary rounded-md">
                  <Briefcase className="w-3.5 h-3.5" /> {projects.filter(p => p.clientId === client.id).length} Active Projects
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2 py-1 bg-muted rounded-md text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" /> {client.onboardingDate ? format(new Date(client.onboardingDate), "MMM yyyy") : "-"}
                </span>
              </div>
            </div>

            {/* Contacts overlap */}
            {client.contacts && client.contacts.length > 0 && (
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="flex -space-x-2">
                  {client.contacts.map((c, idx) => (
                    <img key={idx} src={c.avatar} className="w-8 h-8 rounded-full border-2 border-white shadow-sm" title={c.name} />
                  ))}
                </div>
                <span className="text-xs font-bold text-muted-foreground">Key Contacts</span>
              </div>
            )}

            {/* Footer Summary */}
            <div className="flex justify-between items-end pt-5 border-t border-border/40 relative z-10">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Total Budget</span>
                <span className="text-base font-black text-foreground mt-0.5 font-mono">{client.totalBudget}</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Outstanding</span>
                <span className="text-base font-black text-rose-500 mt-0.5 font-mono">{client.outstandingPayment}</span>
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
        <DialogContent className="sm:max-w-[425px] md:max-w-[500px] p-0 overflow-hidden rounded-[2rem] gap-0 border-border/60 shadow-2xl [&>button]:hidden bg-card">
          <div className="p-6 pb-4">
            <div className="flex items-center justify-between px-6 md:px-8 py-6 border-b border-border/50 bg-muted/30">
          <div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight">New Client</h2>
            
          </div>
          <DialogClose asChild>
            <button className="p-2 text-muted-foreground hover:text-foreground/80 hover:bg-muted rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </DialogClose>
        </div>
          </div>
          <div className="p-6 md:p-8 space-y-6 overflow-y-auto max-h-[70vh]">
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Client Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                value={newClientName}
                onChange={(e) => setNewClientName(e.target.value)}
                placeholder="e.g. Acme Corp"
                className={"w-full px-4 py-3 bg-muted/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium " + (showNewClientErrors && !newClientName.trim() ? "border-red-500 ring-1 ring-red-500" : "border-border/50")}
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
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Outstanding Payment (Optional)</label>
              <input 
                type="text" 
                value={newClientOutstanding}
                onChange={(e) => setNewClientOutstanding(e.target.value)}
                placeholder="e.g. ₹50,000"
                className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Onboarding Date</label>
              <input 
                type="date" 
                value={newClientOnboarding}
                onChange={(e) => setNewClientOnboarding(e.target.value)}
                className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
              />
            </div>
          </div>
          <div className="px-6 md:px-8 py-4 md:py-6 bg-muted/30 border-t border-border/50 flex justify-end gap-3 mt-auto shrink-0">
            <button 
              onClick={() => setIsNewClientModalOpen(false)}
              className="px-5 py-2.5 rounded-xl font-bold text-muted-foreground hover:bg-muted transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleCreateClient}
              className="px-6 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl shadow-md hover:bg-primary/90 transition-all disabled:opacity-50"
            >
              Create Client
            </button>
          </div>
        </DialogContent>
      </Dialog>
      {/* Edit Client Modal */}
      <Dialog open={isEditClientModalOpen} onOpenChange={setIsEditClientModalOpen}>
        <DialogContent className="sm:max-w-[425px] md:max-w-[500px] p-0 overflow-hidden rounded-[2rem] gap-0 border-border/60 shadow-2xl [&>button]:hidden bg-card">
          <div className="p-6 pb-4">
            <div className="flex items-center justify-between px-6 md:px-8 py-6 border-b border-border/50 bg-muted/30">
          <div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight">Edit Client</h2>
            
          </div>
          <DialogClose asChild>
            <button className="p-2 text-muted-foreground hover:text-foreground/80 hover:bg-muted rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </DialogClose>
        </div>
          </div>
          {editingClient && (
            <div className="p-6 md:p-8 space-y-6 overflow-y-auto max-h-[70vh]">
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Client Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  value={editingClient.name}
                  onChange={(e) => setEditingClient({...editingClient, name: e.target.value})}
                  className={"w-full px-4 py-3 bg-muted/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium " + (showEditClientErrors && !editingClient.name.trim() ? "border-red-500 ring-1 ring-red-500" : "border-border/50")}
                />
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Total Budget (Optional)</label>
                <input 
                  type="text" 
                  value={editingClient.totalBudget}
                  onChange={(e) => setEditingClient({...editingClient, totalBudget: e.target.value})}
                  className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Outstanding Payment (Optional)</label>
                <input 
                  type="text" 
                  value={editingClient.outstandingPayment}
                  onChange={(e) => setEditingClient({...editingClient, outstandingPayment: e.target.value})}
                  className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Onboarding Date</label>
                <input 
                  type="date" 
                  value={editingClient.onboardingDate}
                  onChange={(e) => setEditingClient({...editingClient, onboardingDate: e.target.value})}
                  className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                />
              </div>
            </div>
          )}
          <div className="px-6 md:px-8 py-4 md:py-6 bg-muted/30 border-t border-border/50 flex justify-end gap-3 mt-auto shrink-0">
            <button 
              onClick={() => { setIsEditClientModalOpen(false); setEditingClient(null); }}
              className="px-5 py-2.5 rounded-xl font-bold text-muted-foreground hover:bg-muted transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleUpdateClient}
              className="px-6 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl shadow-md hover:bg-primary/90 transition-all disabled:opacity-50"
            >
              Save Changes
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
