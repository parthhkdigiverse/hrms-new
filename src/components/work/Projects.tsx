import { useState, useEffect, useMemo } from "react";
import { X,  Search, Plus, Filter, MoreHorizontal, LayoutGrid, List, Briefcase, Calendar, Clock, Star, Circle, Trash2, Edit2, Archive, ArchiveRestore, ArrowLeft, Users, IndianRupee, FolderGit2, CheckCircle2, Settings2, TrendingUp, MousePointerClick, Target, BarChart3, ChevronDown, User, Building2, CreditCard, FileText, ChevronRight, Video, Instagram  } from "lucide-react";
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
type ClientTab = 'general' | 'company' | 'service' | 'remarks';

interface Client {
  id: string;
  name: string;
  companyName?: string;
  email?: string;
  phone?: string;
  address?: string;
  state?: string;
  gstin?: string;
  department?: string;
  salesFocused?: string;

  remarks?: string;
  dailyFollowup?: string;
  assignedEmployeeId?: string;
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
  description?: string;
  category: string;
  status: ProjectStatus;
  priority?: "Low" | "Medium" | "High" | "Critical";
  progress: number;
  startDate: string;
  endDate: string;
  teamDeadline?: string;
  budget: string;
  services?: string;
  post?: number;
  reel?: number;
  festivalPost?: string;
  amountReceived?: string;
  nextPaymentDate?: string;
  reach?: string;
  leads?: string;
  cpl?: string;
  campaigns?: any[];
  contentCalendar?: CalendarItem[];
  team: { name: string; avatar: string }[];
}

interface CalendarItem {
  id: string;
  postingDate: string;
  postingDay?: string | undefined;
  type: string;
  topic: string;
  concept?: string | undefined;
  reference?: string | undefined;
  assignedTo?: string[] | undefined;
  scriptDate?: string | undefined;
  scriptLink?: string | undefined;
  shootDate?: string | undefined;
  shootLink?: string | undefined;
  editingStart?: string | undefined;
  finalReelLink?: string | undefined;
  finalPostLink?: string | undefined;
  approval?: string | undefined;
  status: string;
  thumbnailDate?: string | undefined;
  thumbnailLink?: string | undefined;
  captionDate?: string | undefined;
  caption?: string | undefined;
  postingLinkOfIg?: string | undefined;
  actualPostingDate?: string | undefined;
  remark?: string | undefined;
}

const LOCKED_CATEGORIES = ["Digital Marketing", "Social Media Management", "Web Dev", "App Dev"];
const DEFAULT_CATEGORIES = ["Digital Marketing", "Social Media Management", "Web Dev", "App Dev", "Design", "Consulting", "General"];


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

const SMM_DUMMY_PROJECT: Project = {
  id: "smm-dummy-project",
  clientId: "c1",
  name: "Acme Corp Social Media Management",
  category: "Social Media Management",
  status: "In Progress",
  progress: 60,
  startDate: "2026-08-01",
  endDate: "2026-12-31",
  budget: "₹25,000",
  amountReceived: "₹10,000",
  nextPaymentDate: "2026-09-05",
  team: [
    { name: "Alex", avatar: "https://i.pravatar.cc/150?u=alex" },
    { name: "Sarah", avatar: "https://i.pravatar.cc/150?u=sarah" }
  ],
  contentCalendar: [
    {
      id: "dummy-cal-1",
      postingDate: "2026-08-25",
      postingDay: "Tuesday",
      type: "Reel",
      topic: "Productivity Hacks for Remote Teams",
      concept: "Alex presents 3 quick software shortcuts using our app on a screen recording.",
      reference: "https://instagram.com/reel/example",
      assignedTo: ["Alex"],
      scriptDate: "2026-08-20",
      scriptLink: "https://docs.google.com/document/d/example",
      shootDate: "2026-08-22",
      shootLink: "https://drive.google.com/drive/folders/example",
      editingStart: "2026-08-23",
      finalReelLink: "https://drive.google.com/file/d/example",
      approval: "Approved by Het",
      status: "Approved",
      thumbnailDate: "2026-08-23",
      thumbnailLink: "https://canva.com/design/example",
      captionDate: "2026-08-24",
      caption: "Struggling to keep your remote team aligned? Try these 3 simple tech shortcuts! 💻🚀 #remotework #productivity #saas"
    },
    {
      id: "dummy-cal-2",
      postingDate: "2026-08-28",
      postingDay: "Friday",
      type: "Post",
      topic: "Meet the Team Spotlight: Sarah",
      concept: "Carousel post highlighting Sarah's journey, role, and favorite office memory.",
      assignedTo: ["Sarah"],
      status: "In Progress",
      scriptDate: "2026-08-24",
      thumbnailDate: "2026-08-25"
    }
  ]
};

const INITIAL_PROJECTS: Project[] = [
  SMM_DUMMY_PROJECT,
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
  // One-time migration: clear old localStorage if version mismatch
  const STORAGE_VERSION = 'v3';
  if (localStorage.getItem('hrms_storage_version') !== STORAGE_VERSION) {
    localStorage.removeItem('hrms_clients');
    localStorage.removeItem('hrms_projects');
    localStorage.removeItem('hrms_categories');
    localStorage.setItem('hrms_storage_version', STORAGE_VERSION);
  }

  const [clients, setClients] = useState<Client[]>(() => {
    const saved = localStorage.getItem('hrms_clients');
    if (saved) {
      try { 
        const parsed = JSON.parse(saved);
        if (JSON.stringify(parsed).includes('$')) return INITIAL_CLIENTS; // Force update to ₹
        // Normalize: ensure all clients have a contacts array and logo
        return (parsed as Client[]).map((c: Client) => ({
          ...c,
          contacts: c.contacts ?? [],
          logo: c.logo || `https://i.pravatar.cc/150?u=${encodeURIComponent(c.name)}`,
          totalBudget: c.totalBudget ?? '₹0',
          outstandingPayment: c.outstandingPayment ?? '₹0',
        }));
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
        if (!parsed.some((p: any) => p.id === "smm-dummy-project")) {
          parsed.unshift(SMM_DUMMY_PROJECT);
        }
        return parsed;
      } catch (e) {}
    }
    return INITIAL_PROJECTS;
  });

  const [categories, setCategories] = useState<string[]>(() => {
    const saved = localStorage.getItem('hrms_categories');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Ensure all locked categories are present
          const merged = [...parsed];
          LOCKED_CATEGORIES.forEach(cat => {
            if (!merged.includes(cat)) {
              merged.push(cat);
            }
          });
          return merged;
        }
      } catch (e) {}
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
  const [activeClientTab, setActiveClientTab] = useState<ClientTab>('general');
  const clientTabs = [
    { id: 'general', label: 'General Info', icon: User },
    { id: 'company', label: 'Company Details', icon: Building2 },
    { id: 'service', label: 'Service Details', icon: CreditCard },
    { id: 'remarks', label: 'Remarks', icon: FileText }
  ];
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  const [isEditClientModalOpen, setIsEditClientModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [showEditClientErrors, setShowEditClientErrors] = useState(false);
  const [isEditProjectModalOpen, setIsEditProjectModalOpen] = useState(false);
  
  const defaultClientForm = {
    name: "",
    companyName: "",
    phone: "",
    email: "",
    address: "",
    state: "",
    gstin: "",
    department: "",
    status: "Active" as ClientStatus,
    salesFocused: "",

    remarks: "",
    dailyFollowup: "No",
    assignedEmployeeId: "",
    totalBudget: "",
    outstandingPayment: "",
    onboardingDate: new Date().toISOString().split('T')[0] || "",
  };
  const [newClientFormData, setNewClientFormData] = useState(defaultClientForm);
  
  const handleClientFormChange = (field: string, value: any, isEdit: boolean = false) => {
    if (isEdit) {
      setEditingClient(prev => prev ? { ...prev, [field]: value } : prev);
    } else {
      setNewClientFormData(prev => ({ ...prev, [field]: value }));
    }
  };
  
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectBudget, setNewProjectBudget] = useState("");
  const [newProjectCategory, setNewProjectCategory] = useState("");
  const [newProjectStartDate, setNewProjectStartDate] = useState(new Date().toISOString().split('T')[0] ?? "");
  const [newProjectEndDate, setNewProjectEndDate] = useState(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] ?? "");
  const [newProjectDescription, setNewProjectDescription] = useState("");
  const [newProjectPriority, setNewProjectPriority] = useState<"Low" | "Medium" | "High" | "Critical">("Medium");
  const [newProjectTeamDeadline, setNewProjectTeamDeadline] = useState("");
  const [newProjectServices, setNewProjectServices] = useState("");
  const [newProjectPost, setNewProjectPost] = useState("");
  const [newProjectReel, setNewProjectReel] = useState("");
  const [newProjectFestivalPost, setNewProjectFestivalPost] = useState("No");
  const [newProjectAmountReceived, setNewProjectAmountReceived] = useState("");
  const [newProjectNextPaymentDate, setNewProjectNextPaymentDate] = useState("");
  const [newProjectReach, setNewProjectReach] = useState("");
  const [newProjectLeads, setNewProjectLeads] = useState("");
  const [newProjectCpl, setNewProjectCpl] = useState("");
  const [activeProjectTab, setActiveProjectTab] = useState<'general' | 'finance'>('general');
  const [isManageCategoriesModalOpen, setIsManageCategoriesModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [showNewProjectErrors, setShowNewProjectErrors] = useState(false);
  const [showEditProjectErrors, setShowEditProjectErrors] = useState(false);
  const [showNewClientErrors, setShowNewClientErrors] = useState(false);
  const [showCategoryErrors, setShowCategoryErrors] = useState(false);
  const [categoryPendingDelete, setCategoryPendingDelete] = useState<string | null>(null);

  const [confirmModalState, setConfirmModalState] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    itemName?: string;
    action: () => void;
  }>({ isOpen: false, title: "", description: "", action: () => {} });

  const [editingProject, setEditingProject] = useState<Project | null>(null);

  // SMM Content Calendar States
  const [isAddCalendarItemModalOpen, setIsAddCalendarItemModalOpen] = useState(false);
  const [editingCalendarItem, setEditingCalendarItem] = useState<CalendarItem | null>(null);
  const [calendarTypeFilter, setCalendarTypeFilter] = useState("All");
  const [calendarStatusFilter, setCalendarStatusFilter] = useState("All");
  const [activeCalendarTab, setActiveCalendarTab] = useState<'general' | 'production' | 'publishing'>('general');
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);
  const [inlineEdit, setInlineEdit] = useState<{ id: string; field: string; value: string } | null>(null);
  
  const defaultCalendarForm = {
    postingDate: new Date().toISOString().split('T')[0],
    postingDay: "",
    type: "Post",
    topic: "",
    concept: "",
    reference: "",
    assignedTo: [] as string[],
    scriptDate: "",
    scriptLink: "",
    shootDate: "",
    shootLink: "",
    editingStart: "",
    finalReelLink: "",
    finalPostLink: "",
    approval: "",
    status: "To Do",
    thumbnailDate: "",
    thumbnailLink: "",
    captionDate: "",
    caption: "",
    postingLinkOfIg: "",
    actualPostingDate: "",
    remark: ""
  };
  const [calendarForm, setCalendarForm] = useState<any>(defaultCalendarForm);

  const handleCreateClient = () => {
    if (!newClientFormData.name.trim() || !newClientFormData.companyName?.trim() || !newClientFormData.phone?.trim()) {
      setShowNewClientErrors(true);
      toast.error("Please fill all required fields");
      return;
    }

    const newClient: Client = {
      id: `c${Date.now()}`,
      ...newClientFormData,
      logo: `https://i.pravatar.cc/150?u=${encodeURIComponent(newClientFormData.name)}`,
      totalBudget: newClientFormData.totalBudget || "₹0",
      outstandingPayment: newClientFormData.outstandingPayment || "₹0",
      activeProjects: 0,
      contacts: []
    };

    setClients([newClient, ...clients]);
    setIsNewClientModalOpen(false);
    setNewClientFormData(defaultClientForm);
    setShowNewClientErrors(false);
    toast.success("Client created successfully");
  };
  const handleUpdateClient = () => {
    if (!editingClient || !editingClient.name.trim() || !editingClient.companyName?.trim() || !editingClient.phone?.trim()) {
      setShowEditClientErrors(true);
      toast.error("Please fill all required fields");
      return;
    }

    setClients(clients.map(c => c.id === editingClient.id ? editingClient : c));
    setIsEditClientModalOpen(false);
    setEditingClient(null);
    setShowEditClientErrors(false);
    toast.success("Client updated successfully");
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
      startDate: newProjectStartDate ?? (new Date().toISOString().split('T')[0] as string),
      endDate: newProjectEndDate ?? (new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] as string),
      budget: newProjectBudget || "₹0",
      team: [{ name: "User", avatar: "https://i.pravatar.cc/150?u=user" }]
    };

    if (newProjectDescription) newProject.description = newProjectDescription;
    if (newProjectPriority) newProject.priority = newProjectPriority;
    if (newProjectTeamDeadline) newProject.teamDeadline = newProjectTeamDeadline;
    if (newProjectServices) newProject.services = newProjectServices;
    if (newProjectPost) newProject.post = parseInt(newProjectPost);
    if (newProjectReel) newProject.reel = parseInt(newProjectReel);
    if (newProjectFestivalPost) newProject.festivalPost = newProjectFestivalPost;
    if (newProjectAmountReceived) newProject.amountReceived = newProjectAmountReceived;
    if (newProjectNextPaymentDate) newProject.nextPaymentDate = newProjectNextPaymentDate;
    if (newProjectReach) newProject.reach = newProjectReach;
    if (newProjectLeads) newProject.leads = newProjectLeads;
    if (newProjectCpl) newProject.cpl = newProjectCpl;
    
    setClients(clients.map(c => 
      c.id === selectedClientId ? { ...c, activeProjects: c.activeProjects + 1 } : c
    ));
    
    setProjects([newProject, ...projects]);
    setNewProjectName("");
    setNewProjectBudget("");
    setNewProjectCategory("");
    setNewProjectDescription("");
    setNewProjectPriority("Medium");
    setNewProjectTeamDeadline("");
    setNewProjectServices("");
    setNewProjectPost("");
    setNewProjectReel("");
    setNewProjectFestivalPost("No");
    setNewProjectAmountReceived("");
    setNewProjectNextPaymentDate("");
    setNewProjectReach("");
    setNewProjectLeads("");
    setNewProjectCpl("");
    setActiveProjectTab('general');
    setShowNewProjectErrors(false);
    setIsNewProjectModalOpen(false);
    toast.success("Project created successfully!");
  };

  const openEditModal = (project: Project) => {
    setEditingProject({ ...project });
    setActiveProjectTab('general');
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
    setActiveProjectTab('general');
    toast.success("Project updated successfully!");
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
    if (LOCKED_CATEGORIES.includes(categoryToDelete)) {
      toast.error(`"${categoryToDelete}" is a system category and cannot be deleted.`);
      return;
    }
    if (categories.length <= 1) {
      toast.error("Cannot delete the last category.");
      return;
    }
    const isCategoryInUse = projects.some(p => p.category === categoryToDelete);
    if (isCategoryInUse) {
      toast.error("Cannot delete — this category is in use by a project.");
      return;
    }
    moveToRecycleBin('Project Category', categoryToDelete, categoryToDelete, 'hrms_categories');
    setCategories(prev => prev.filter(c => c !== categoryToDelete));
    setNewProjectCategory(prev => prev === categoryToDelete ? "" : prev);
    toast.success(`Category "${categoryToDelete}" deleted.`);
  };

  const confirmDeleteProject = (project: Project) => {
    setConfirmModalState({
      isOpen: true,
      title: "Delete Project",
      description: "Are you sure you want to delete this project? All associated data will be permanently removed.",
      itemName: project.name,
      action: () => {
        moveToRecycleBin('Project', project.name, project, 'hrms_projects');
        setProjects(prev => prev.filter(p => p.id !== project.id));
        setClients(prev => prev.map(c => 
          c.id === project.clientId ? { ...c, activeProjects: Math.max(0, c.activeProjects - 1) } : c
        ));
        if (selectedProjectId === project.id) {
          setSelectedProjectId(null);
        }
        toast.success(`Project "${project.name}" deleted.`);
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
        setClients(prev => prev.filter(c => c.id !== client.id));
        setProjects(prev => prev.filter(p => p.clientId !== client.id));
        if (selectedClientId === client.id) {
          setSelectedClientId(null);
          setSelectedProjectId(null);
        }
        toast.success(`Client "${client.name}" deleted.`);
      }
    });
  };


  const archiveClient = (client: Client) => {
    setClients(prev => prev.map(c => c.id === client.id ? { ...c, status: 'Archived' as ClientStatus } : c));
    if (selectedClientId === client.id) setSelectedClientId(null);
    toast.success(`Client "${client.name}" archived successfully.`);
  };

  const unarchiveClient = (client: Client) => {
    setClients(prev => prev.map(c => c.id === client.id ? { ...c, status: 'Active' as ClientStatus } : c));
    toast.success(`Client "${client.name}" restored to Active.`);
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

  const safeFormat = (dateStr: string | undefined, fmt: string, fallback = "-") => {
    if (!dateStr) return fallback;
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return fallback;
      return format(d, fmt);
    } catch {
      return fallback;
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
        <>
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
                <h3 className="text-sm font-black text-foreground">{safeFormat(project.startDate, "dd/MM/yyyy")} - {safeFormat(project.endDate, "dd/MM/yyyy")}</h3>
              </div>
            </div>
          </div>

          {/* Main Content Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {project.category === "Social Media Management" ? (() => {
              const projectCalendar: CalendarItem[] = project.contentCalendar || [];
              const filteredCalendar = projectCalendar.filter(item => {
                if (calendarTypeFilter !== "All" && item.type !== calendarTypeFilter) return false;
                if (calendarStatusFilter !== "All" && item.status !== calendarStatusFilter) return false;
                return true;
              });

              const getCalTypeColor = (type: string) => {
                switch (type) {
                  case "Reel": return "bg-purple-500/10 text-purple-600 border-purple-500/20";
                  case "Post": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
                  case "Story": return "bg-pink-500/10 text-pink-600 border-pink-500/20";
                  case "Carousel": return "bg-orange-500/10 text-orange-600 border-orange-500/20";
                  default: return "bg-muted text-muted-foreground border-border";
                }
              };

              const getCalStatusColor = (status: string) => {
                switch (status) {
                  case "To Do": return "bg-amber-500/10 text-amber-600 border-amber-500/20";
                  case "In Progress": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
                  case "Pending Approval": return "bg-purple-500/10 text-purple-600 border-purple-500/20";
                  case "Approved": return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
                  case "Published": return "bg-green-500/10 text-green-600 border-green-500/20";
                  default: return "bg-muted text-muted-foreground border-border";
                }
              };

              return (
                <div className="lg:col-span-3 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold tracking-tight">Content Calendar</h2>
                      <p className="text-xs text-muted-foreground mt-0.5">Plan, schedule, and track content approval pipeline</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <select 
                        value={calendarTypeFilter} 
                        onChange={(e) => setCalendarTypeFilter(e.target.value)} 
                        className="px-3 py-1.5 bg-card border border-border/60 rounded-xl text-xs font-bold text-foreground focus:outline-none"
                      >
                        <option value="All">All Types</option>
                        <option value="Post">Post</option>
                        <option value="Reel">Reel</option>
                        <option value="Story">Story</option>
                        <option value="Carousel">Carousel</option>
                      </select>
                      <select 
                        value={calendarStatusFilter} 
                        onChange={(e) => setCalendarStatusFilter(e.target.value)} 
                        className="px-3 py-1.5 bg-card border border-border/60 rounded-xl text-xs font-bold text-foreground focus:outline-none"
                      >
                        <option value="All">All Statuses</option>
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Pending Approval">Pending Approval</option>
                        <option value="Approved">Approved</option>
                        <option value="Published">Published</option>
                      </select>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingCalendarItem(null);
                          setCalendarForm({ ...defaultCalendarForm });
                          setIsAddCalendarItemModalOpen(true);
                        }}
                        className="flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground font-bold text-xs rounded-xl hover:bg-primary/90 transition-all shadow-sm"
                      >
                        <Plus className="w-3.5 h-3.5" /> Add Idea
                      </button>
                    </div>
                  </div>

                  <div className="bg-card/40 border border-border/40 rounded-[2rem] shadow-xl overflow-hidden backdrop-blur-md">
                    {filteredCalendar.length === 0 ? (
                      <div className="text-center py-16 text-sm text-muted-foreground font-medium">
                        No calendar items found matching the filters.
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full text-center border-collapse text-xs">
                          <thead>
                            <tr className="border-b border-border/40 text-muted-foreground font-extrabold uppercase tracking-widest bg-muted/30">
                              <th className="py-4 px-5 text-center whitespace-nowrap">Schedule</th>
                              <th className="py-4 px-5 text-center whitespace-nowrap">Type</th>
                              <th className="py-4 px-5 text-center whitespace-nowrap">Topic / Concept</th>
                              <th className="py-4 px-5 text-center whitespace-nowrap">Brand Person</th>
                              <th className="py-4 px-5 text-center whitespace-nowrap">Script</th>
                              <th className="py-4 px-5 text-center whitespace-nowrap">Shoot</th>
                              <th className="py-4 px-5 text-center whitespace-nowrap">Editing</th>
                              <th className="py-4 px-5 text-center whitespace-nowrap">Thumbnail</th>
                              <th className="py-4 px-5 text-center whitespace-nowrap">Caption</th>
                              <th className="py-4 px-5 text-center whitespace-nowrap">Instagram Status</th>
                              <th className="py-4 px-5 text-center whitespace-nowrap">Approval & Status</th>
                              <th className="py-4 px-5 text-center whitespace-nowrap">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border/20">
                            {filteredCalendar.map((item) => {
                              const isExpanded = expandedRowId === item.id;

                              const saveInlineEdit = (field: string, value: string) => {
                                const updated = projectCalendar.map((x: any) =>
                                  x.id === item.id ? { ...x, [field]: value, ...(field === 'postingDate' ? { postingDay: new Date(value).toLocaleDateString("en-US", { weekday: "long" }) } : {}) } : x
                                );
                                setProjects(projects.map(p => p.id === project.id ? { ...p, contentCalendar: updated } : p));
                                setInlineEdit(null);
                              };

                              const startEdit = (e: React.MouseEvent, field: string, value: string) => {
                                e.stopPropagation();
                                setInlineEdit({ id: item.id, field, value: value || '' });
                              };

                              const isEd = (field: string) => inlineEdit?.id === item.id && inlineEdit?.field === field;

                              const InlineText = ({ field, value, placeholder, cls }: { field: string; value?: string | undefined; placeholder?: string | undefined; cls?: string | undefined }) =>
                                isEd(field) ? (
                                  <input
                                    autoFocus
                                    type="text"
                                    value={inlineEdit!.value}
                                    onChange={e => setInlineEdit({ ...inlineEdit!, value: e.target.value })}
                                    onBlur={() => saveInlineEdit(field, inlineEdit!.value)}
                                    onKeyDown={e => { if (e.key === 'Enter') saveInlineEdit(field, inlineEdit!.value); if (e.key === 'Escape') setInlineEdit(null); }}
                                    onClick={e => e.stopPropagation()}
                                    className="w-full px-2 py-1 bg-primary/5 border border-primary/40 rounded-lg text-xs font-bold focus:outline-none focus:ring-1 focus:ring-primary text-center"
                                  />
                                ) : (
                                  <span onClick={e => startEdit(e, field, value || '')} className={cn("cursor-text hover:bg-primary/5 rounded px-1 py-0.5 transition-colors block text-center group/cell", cls)} title="Click to edit">
                                    {value || <span className="text-muted-foreground/30 italic text-[10px]">{placeholder || 'Click to add'}</span>}
                                    <span className="ml-1 opacity-0 group-hover/cell:opacity-50 transition-opacity text-[9px]">✏️</span>
                                  </span>
                                );

                              const InlineDate = ({ field, value }: { field: string; value?: string | undefined }) =>
                                isEd(field) ? (
                                  <input
                                    autoFocus
                                    type="date"
                                    value={inlineEdit!.value}
                                    onChange={e => setInlineEdit({ ...inlineEdit!, value: e.target.value })}
                                    onBlur={() => saveInlineEdit(field, inlineEdit!.value)}
                                    onKeyDown={e => { if (e.key === 'Escape') setInlineEdit(null); }}
                                    onClick={e => e.stopPropagation()}
                                    className="px-2 py-1 bg-primary/5 border border-primary/40 rounded-lg text-xs font-bold focus:outline-none focus:ring-1 focus:ring-primary"
                                  />
                                ) : (
                                  <span onClick={e => startEdit(e, field, value || '')} className="cursor-text hover:bg-primary/5 rounded px-1 py-0.5 transition-colors inline-flex items-center gap-1 group/dc" title="Click to edit date">
                                    {value ? (<><Calendar className="w-2.5 h-2.5 text-muted-foreground" /><span className="text-[11px] font-extrabold text-foreground">{safeFormat(value, "dd MMM")}</span></>) : <span className="text-muted-foreground/30 text-[10px] italic">-</span>}
                                    <span className="opacity-0 group-hover/dc:opacity-50 transition-opacity text-[9px]">✏️</span>
                                  </span>
                                );

                              const InlineLink = ({ field, value, label, cc }: { field: string; value?: string | undefined; label: string; cc: string }) =>
                                isEd(field) ? (
                                  <input autoFocus type="text" value={inlineEdit!.value} onChange={e => setInlineEdit({ ...inlineEdit!, value: e.target.value })} onBlur={() => saveInlineEdit(field, inlineEdit!.value)} onKeyDown={e => { if (e.key === 'Enter') saveInlineEdit(field, inlineEdit!.value); if (e.key === 'Escape') setInlineEdit(null); }} onClick={e => e.stopPropagation()} placeholder="Paste URL..." className="w-full max-w-[120px] px-2 py-1 bg-primary/5 border border-primary/40 rounded-lg text-[10px] font-bold focus:outline-none focus:ring-1 focus:ring-primary" />
                                ) : value ? (
                                  <div className="flex items-center justify-center gap-0.5 group/lc">
                                    <a href={value} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className={cn("px-2 py-0.5 font-bold rounded-md text-[10px] flex items-center gap-1 border", cc)}>{label}</a>
                                    <button onClick={e => startEdit(e, field, value)} className="opacity-0 group-hover/lc:opacity-60 text-[9px] hover:opacity-100 transition-opacity ml-0.5">✏️</button>
                                  </div>
                                ) : (
                                  <button onClick={e => startEdit(e, field, '')} className="text-muted-foreground/30 text-[10px] italic hover:text-primary/50 transition-colors">+ {label}</button>
                                );

                              return (
                                <tr key={item.id} onClick={() => setExpandedRowId(isExpanded ? null : item.id)} className={cn("hover:bg-muted/20 transition-all group cursor-pointer", isExpanded ? "bg-muted/10 align-top" : "h-[80px]")}>

                                  {/* Schedule */}
                                  <td className="py-2 px-5 text-center whitespace-nowrap">
                                    <div className="flex flex-col items-center gap-0.5">
                                      {isEd('postingDate') ? (
                                        <input autoFocus type="date" value={inlineEdit!.value} onChange={e => setInlineEdit({ ...inlineEdit!, value: e.target.value })} onBlur={() => saveInlineEdit('postingDate', inlineEdit!.value)} onKeyDown={e => { if (e.key === 'Escape') setInlineEdit(null); }} onClick={e => e.stopPropagation()} className="px-2 py-1 bg-primary/5 border border-primary/40 rounded-lg text-xs font-bold focus:outline-none focus:ring-1 focus:ring-primary" />
                                      ) : (
                                        <span onClick={e => startEdit(e, 'postingDate', item.postingDate)} className="font-extrabold text-foreground block text-sm cursor-text hover:bg-primary/5 rounded px-1 py-0.5 transition-colors group/pd" title="Click to edit">
                                          {safeFormat(item.postingDate, "dd MMM yyyy")}
                                          <span className="ml-1 opacity-0 group-hover/pd:opacity-50 transition-opacity text-[9px]">✏️</span>
                                        </span>
                                      )}
                                      <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider block mt-0.5">
                                        {item.postingDay || (item.postingDate ? new Date(item.postingDate).toLocaleDateString("en-US", { weekday: "long" }) : "-")}
                                      </span>
                                    </div>
                                  </td>

                                  {/* Type */}
                                  <td className="py-2 px-5 text-center">
                                    {isEd('type') ? (
                                      <select autoFocus value={inlineEdit!.value} onChange={e => saveInlineEdit('type', e.target.value)} onBlur={() => saveInlineEdit('type', inlineEdit!.value)} onKeyDown={e => { if (e.key === 'Escape') setInlineEdit(null); }} onClick={e => e.stopPropagation()} className="px-2 py-1 bg-primary/5 border border-primary/40 rounded-lg text-xs font-bold focus:outline-none focus:ring-1 focus:ring-primary mx-auto block">
                                        {["Post", "Reel", "Story", "Carousel"].map(o => <option key={o} value={o}>{o}</option>)}
                                      </select>
                                    ) : (
                                      <span onClick={e => startEdit(e, 'type', item.type)} className={cn("mx-auto px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest border rounded-full block text-center max-w-[90px] cursor-pointer hover:opacity-80", getCalTypeColor(item.type))} title="Click to change">{item.type}</span>
                                    )}
                                  </td>

                                  {/* Topic / Concept */}
                                  <td className={cn("py-2 px-5 text-center min-w-[200px]", isExpanded ? "max-w-none" : "max-w-[240px]")}>
                                    <InlineText field="topic" value={item.topic} placeholder="Enter topic..." cls={cn("font-bold text-foreground leading-normal", isExpanded ? "" : "line-clamp-1")} />
                                    <InlineText field="concept" value={item.concept} placeholder="+ concept" cls={cn("text-muted-foreground mt-0.5 leading-normal text-[11px]", isExpanded ? "" : "line-clamp-1")} />
                                    {isEd('reference') ? (
                                      <input
                                        autoFocus
                                        type="text"
                                        value={inlineEdit!.value}
                                        onChange={e => setInlineEdit({ ...inlineEdit!, value: e.target.value })}
                                        onBlur={() => saveInlineEdit('reference', inlineEdit!.value)}
                                        onKeyDown={e => { if (e.key === 'Enter') saveInlineEdit('reference', inlineEdit!.value); if (e.key === 'Escape') setInlineEdit(null); }}
                                        onClick={e => e.stopPropagation()}
                                        placeholder="Paste reference link..."
                                        className="w-full max-w-[180px] px-2 py-1 bg-primary/5 border border-primary/40 rounded-lg text-[10px] font-bold focus:outline-none focus:ring-1 focus:ring-primary mx-auto block text-center"
                                      />
                                    ) : item.reference ? (
                                      <div className="flex items-center justify-center gap-1 group/ref">
                                        <a 
                                          href={item.reference} 
                                          target="_blank" 
                                          rel="noopener noreferrer" 
                                          onClick={e => e.stopPropagation()} 
                                          className={cn("text-primary/70 hover:underline block mt-0.5 text-[10px]", isExpanded ? "whitespace-pre-wrap break-all" : "truncate max-w-[150px]")}
                                          title={item.reference}
                                        >
                                          Ref: {item.reference}
                                        </a>
                                        <button 
                                          onClick={e => startEdit(e, 'reference', item.reference || '')} 
                                          className="opacity-0 group-hover/ref:opacity-60 text-[9px] hover:opacity-100 transition-opacity"
                                          title="Edit reference link"
                                        >
                                          ✏️
                                        </button>
                                      </div>
                                    ) : (
                                      <span 
                                        onClick={e => startEdit(e, 'reference', '')} 
                                        className="cursor-text hover:bg-primary/5 rounded px-1 py-0.5 transition-colors block text-center text-muted-foreground/30 text-[10px] italic"
                                        title="Click to add reference link"
                                      >
                                        + ref link
                                      </span>
                                    )}
                                  </td>

                                  {/* Brand Person */}
                                  <td className="py-2 px-5 text-center whitespace-nowrap">
                                    <InlineText field="_assignedTo" value={(item.assignedTo || []).join(", ")} placeholder="Unassigned" cls="text-foreground font-bold text-[13px]" />
                                  </td>

                                  {/* Script */}
                                  <td className="py-2 px-5 text-center whitespace-nowrap">
                                    <div className="flex flex-col items-center gap-1">
                                      <InlineDate field="scriptDate" value={item.scriptDate} />
                                      <InlineLink field="scriptLink" value={item.scriptLink} label="📄 Script" cc="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20" />
                                    </div>
                                  </td>

                                  {/* Shoot */}
                                  <td className="py-2 px-5 text-center whitespace-nowrap">
                                    <div className="flex flex-col items-center gap-1">
                                      <InlineDate field="shootDate" value={item.shootDate} />
                                      <InlineLink field="shootLink" value={item.shootLink} label="🎬 Assets" cc="bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 border-amber-500/20" />
                                    </div>
                                  </td>

                                  {/* Editing */}
                                  <td className="py-2 px-5 text-center whitespace-nowrap">
                                    <div className="flex flex-col items-center gap-1">
                                      <InlineDate field="editingStart" value={item.editingStart} />
                                      <div className="flex gap-1 justify-center">
                                        {item.type === "Reel" ? (
                                          <InlineLink field="finalReelLink" value={item.finalReelLink} label="🎥 Reel" cc="bg-violet-500/10 hover:bg-violet-500/20 text-violet-600 border-violet-500/20" />
                                        ) : item.type === "Post" || item.type === "Carousel" ? (
                                          <InlineLink field="finalPostLink" value={item.finalPostLink} label="📸 Post" cc="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 border-emerald-500/20" />
                                        ) : (
                                          <>
                                            <InlineLink field="finalReelLink" value={item.finalReelLink} label="🎥 Reel" cc="bg-violet-500/10 hover:bg-violet-500/20 text-violet-600 border-violet-500/20" />
                                            <InlineLink field="finalPostLink" value={item.finalPostLink} label="📸 Post" cc="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 border-emerald-500/20" />
                                          </>
                                        )}
                                      </div>
                                    </div>
                                  </td>

                                  {/* Thumbnail */}
                                  <td className="py-2 px-5 text-center whitespace-nowrap">
                                    {item.type === "Reel" ? (
                                      <div className="flex flex-col items-center gap-1">
                                        <InlineDate field="thumbnailDate" value={item.thumbnailDate} />
                                        <InlineLink field="thumbnailLink" value={item.thumbnailLink} label="🖼️ Design" cc="bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 border-blue-500/20" />
                                      </div>
                                    ) : (
                                      <span className="text-muted-foreground/30 text-[10px] italic">-</span>
                                    )}
                                  </td>

                                  {/* Caption */}
                                  <td className={cn("py-2 px-5 text-center", isExpanded ? "min-w-[200px]" : "min-w-[150px] max-w-[200px]")}>
                                    <div className="flex flex-col items-center gap-1">
                                      <InlineDate field="captionDate" value={item.captionDate} />
                                      <InlineText field="caption" value={item.caption} placeholder="+ caption" cls={cn("text-muted-foreground text-[11px] leading-normal", isExpanded ? "whitespace-pre-wrap" : "line-clamp-1")} />
                                    </div>
                                  </td>

                                  {/* Instagram Status */}
                                  <td className="py-2 px-5 text-center whitespace-nowrap">
                                    <div className="flex flex-col items-center gap-1">
                                      <InlineDate field="actualPostingDate" value={item.actualPostingDate} />
                                      <InlineLink field="postingLinkOfIg" value={item.postingLinkOfIg} label="🔗 IG Post" cc="bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 border-rose-500/20" />
                                    </div>
                                  </td>

                                  {/* Approval & Status */}
                                  <td className="py-2 px-5 text-center whitespace-nowrap">
                                    <InlineText field="approval" value={item.approval} placeholder="+ feedback" cls="text-[11px] text-foreground font-semibold mb-1" />
                                    {isEd('status') ? (
                                      <select autoFocus value={inlineEdit!.value} onChange={e => saveInlineEdit('status', e.target.value)} onBlur={() => saveInlineEdit('status', inlineEdit!.value)} onKeyDown={e => { if (e.key === 'Escape') setInlineEdit(null); }} onClick={e => e.stopPropagation()} className="px-2 py-1 bg-primary/5 border border-primary/40 rounded-lg text-xs font-bold focus:outline-none mx-auto block">
                                        {["To Do", "In Progress", "Pending Approval", "Approved", "Published"].map(o => <option key={o} value={o}>{o}</option>)}
                                      </select>
                                    ) : (
                                      <span onClick={e => startEdit(e, 'status', item.status)} className={cn("mx-auto px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider block text-center max-w-[110px] cursor-pointer hover:opacity-80", getCalStatusColor(item.status))} title="Click to change status">{item.status}</span>
                                    )}
                                  </td>

                                  {/* Actions */}
                                  <td className="py-2 px-5 text-center whitespace-nowrap">
                                    <div className="flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                      <button onClick={(e) => { e.stopPropagation(); setEditingCalendarItem(item); setCalendarForm({ ...item }); setIsAddCalendarItemModalOpen(true); }} className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors border border-border/30 shadow-sm bg-card" title="Full edit">
                                        <Edit2 className="w-3.5 h-3.5" />
                                      </button>
                                      <button onClick={(e) => { e.stopPropagation(); const updated = projectCalendar.filter((x: any) => x.id !== item.id); setProjects(projects.map(p => p.id === project.id ? { ...p, contentCalendar: updated } : p)); toast.success("Calendar item deleted"); }} className="p-1.5 text-muted-foreground hover:text-rose-600 hover:bg-rose-500/10 rounded-lg transition-colors border border-border/30 shadow-sm bg-card">
                                        <Trash2 className="w-3.5 h-3.5" />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              );
            })() : project.category === "Digital Marketing" ? (() => {
              let reach = project.reach || "1.2M", leads = project.leads || "3,240", cpl = project.cpl || "250", amountSpent = "8,10,000";
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
                <div className="lg:col-span-3 space-y-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        Campaign Performance
                      </h2>
                      <p className="text-xs text-muted-foreground mt-0.5 font-medium">Reach, leads, and conversion analytics</p>
                    </div>
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
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Cost Per Lead</span>
                      </div>
                      <h4 className="text-2xl font-black text-foreground font-mono">₹{cpl}</h4>
                      <p className="text-xs font-bold text-emerald-500 flex items-center gap-1 mt-1 font-mono">
                        {cplTrend}
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

                  <div className="bg-card border border-border/60 rounded-3xl p-6 shadow-sm">
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
            })() : (
              <>
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
              </>
            )}
          </div>

        </div>
        {/* SMM Content Calendar Modal - plain overlay */}
        {isAddCalendarItemModalOpen && (() => {
          const currentSelectedProject = projects.find(p => p.id === selectedProjectId);
          return (
            <div
              className="fixed inset-0 z-[200] flex items-center justify-center"
              onClick={() => { setIsAddCalendarItemModalOpen(false); setEditingCalendarItem(null); setActiveCalendarTab('general'); }}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/80" />
              {/* Modal Panel */}
              <div
                className="relative z-10 w-[calc(100%-2rem)] max-w-[700px] bg-card border border-border/60 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden"
                style={{ height: '550px' }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-8 py-6 border-b border-border/50 bg-muted/30 shrink-0">
                  <div>
                    <h2 className="text-xl md:text-2xl font-black tracking-tight">{editingCalendarItem ? "Edit Content Idea" : "New Content Idea"}</h2>
                    <p className="text-xs text-muted-foreground mt-1">Configure SMM posting slots, pipeline assets and approvals</p>
                  </div>
                  <button
                    onClick={() => { setIsAddCalendarItemModalOpen(false); setEditingCalendarItem(null); setActiveCalendarTab('general'); }}
                    className="p-2 text-muted-foreground hover:text-foreground/80 hover:bg-muted rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                {/* Body */}
                <div className="flex flex-row overflow-hidden flex-1">
                  {/* Sidebar Tabs */}
                  <div className="w-44 shrink-0 border-r border-border/50 bg-muted/20 p-3 flex flex-col gap-1 overflow-y-auto">
                    {([
                      { id: 'general', label: 'General Info', icon: <FileText className="w-4 h-4" /> },
                      { id: 'production', label: 'Production', icon: <Video className="w-4 h-4" /> },
                      { id: 'publishing', label: 'Publishing', icon: <Instagram className="w-4 h-4" /> },
                    ] as const).map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveCalendarTab(tab.id)}
                        className={cn(
                          "flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-bold transition-all text-left w-full",
                          activeCalendarTab === tab.id
                            ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {tab.icon}
                        {tab.label}
                      </button>
                    ))}
                  </div>
                  {/* Tab Contents */}
                  <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-5">
                    {activeCalendarTab === 'general' && (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Posting Date <span className="text-rose-500">*</span></label>
                            <input type="date" value={calendarForm.postingDate || ""} onChange={(e) => setCalendarForm({ ...calendarForm, postingDate: e.target.value })} className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none" />
                          </div>
                          <div>
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Format Type</label>
                            <select value={calendarForm.type || "Post"} onChange={(e) => setCalendarForm({ ...calendarForm, type: e.target.value })} className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none font-medium">
                              {["Post", "Reel", "Story", "Carousel"].map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Topic / Hook <span className="text-rose-500">*</span></label>
                          <input type="text" value={calendarForm.topic || ""} onChange={(e) => setCalendarForm({ ...calendarForm, topic: e.target.value })} placeholder="Hook title or main idea" className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none" />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Concept Details &amp; Notes</label>
                          <textarea value={calendarForm.concept || ""} onChange={(e) => setCalendarForm({ ...calendarForm, concept: e.target.value })} placeholder="Brief storyboard or visual concepts..." rows={2} className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none resize-none font-medium" />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Reference / Inspiration Link</label>
                          <input type="text" value={calendarForm.reference || ""} onChange={(e) => setCalendarForm({ ...calendarForm, reference: e.target.value })} placeholder="Inspiration URL or references" className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none" />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Assign Team / Brand Person</label>
                          <div className="grid grid-cols-2 gap-2 mt-1">
                            {(currentSelectedProject?.team || []).map((m: any) => {
                              const isAssigned = (calendarForm.assignedTo || []).includes(m.name);
                              return (
                                <button key={m.name} type="button" onClick={() => { const list = calendarForm.assignedTo || []; setCalendarForm({ ...calendarForm, assignedTo: isAssigned ? list.filter((n: string) => n !== m.name) : [...list, m.name] }); }} className={cn("flex items-center gap-2 p-2 rounded-xl text-left border text-xs font-semibold transition-all", isAssigned ? "border-primary/40 bg-primary/10 text-primary" : "border-border/50 bg-muted/30 text-muted-foreground hover:bg-muted")}>
                                  <img src={m.avatar} className="w-5 h-5 rounded-full object-cover" />
                                  <span className="truncate">{m.name}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    )}
                    {activeCalendarTab === 'production' && (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Script Date</label>
                            <input type="date" value={calendarForm.scriptDate || ""} onChange={(e) => setCalendarForm({ ...calendarForm, scriptDate: e.target.value })} className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none" />
                          </div>
                          <div>
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Script Link</label>
                            <input type="text" value={calendarForm.scriptLink || ""} onChange={(e) => setCalendarForm({ ...calendarForm, scriptLink: e.target.value })} placeholder="Docs script Link" className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Shoot Date</label>
                            <input type="date" value={calendarForm.shootDate || ""} onChange={(e) => setCalendarForm({ ...calendarForm, shootDate: e.target.value })} className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none" />
                          </div>
                          <div>
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Shoot Assets Link</label>
                            <input type="text" value={calendarForm.shootLink || ""} onChange={(e) => setCalendarForm({ ...calendarForm, shootLink: e.target.value })} placeholder="Drive assets folder URL" className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Editing Start Date</label>
                            <input type="date" value={calendarForm.editingStart || ""} onChange={(e) => setCalendarForm({ ...calendarForm, editingStart: e.target.value })} className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none" />
                          </div>
                          <div>
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Final Reel Link</label>
                            <input type="text" value={calendarForm.finalReelLink || ""} onChange={(e) => setCalendarForm({ ...calendarForm, finalReelLink: e.target.value })} placeholder="Reel draft link" className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Thumbnail Date</label>
                            <input type="date" value={calendarForm.thumbnailDate || ""} onChange={(e) => setCalendarForm({ ...calendarForm, thumbnailDate: e.target.value })} className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none" />
                          </div>
                          <div>
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Thumbnail Link</label>
                            <input type="text" value={calendarForm.thumbnailLink || ""} onChange={(e) => setCalendarForm({ ...calendarForm, thumbnailLink: e.target.value })} placeholder="Design link URL" className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none" />
                          </div>
                        </div>
                      </>
                    )}
                    {activeCalendarTab === 'publishing' && (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Approval Feedback (Het)</label>
                            <input type="text" value={calendarForm.approval || ""} onChange={(e) => setCalendarForm({ ...calendarForm, approval: e.target.value })} placeholder="e.g. Approved / Changes requested" className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none" />
                          </div>
                          <div>
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Workflow Status</label>
                            <select value={calendarForm.status || "To Do"} onChange={(e) => setCalendarForm({ ...calendarForm, status: e.target.value })} className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none font-medium">
                              {["To Do", "In Progress", "Pending Approval", "Approved", "Published"].map(st => <option key={st} value={st}>{st}</option>)}
                            </select>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Caption Date</label>
                            <input type="date" value={calendarForm.captionDate || ""} onChange={(e) => setCalendarForm({ ...calendarForm, captionDate: e.target.value })} className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none" />
                          </div>
                          <div>
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Final Post Link</label>
                            <input type="text" value={calendarForm.finalPostLink || ""} onChange={(e) => setCalendarForm({ ...calendarForm, finalPostLink: e.target.value })} placeholder="Standard post image draft link" className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none" />
                          </div>
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Caption Text</label>
                          <textarea value={calendarForm.caption || ""} onChange={(e) => setCalendarForm({ ...calendarForm, caption: e.target.value })} placeholder="Write finalized copy and hashtags here..." rows={3} className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none resize-none font-medium" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Actual Posting Date</label>
                            <input type="date" value={calendarForm.actualPostingDate || ""} onChange={(e) => setCalendarForm({ ...calendarForm, actualPostingDate: e.target.value })} className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none" />
                          </div>
                          <div>
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Live Instagram Link</label>
                            <input type="text" value={calendarForm.postingLinkOfIg || ""} onChange={(e) => setCalendarForm({ ...calendarForm, postingLinkOfIg: e.target.value })} placeholder="https://www.instagram.com/p/..." className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none" />
                          </div>
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">Remarks &amp; Details</label>
                          <input type="text" value={calendarForm.remark || ""} onChange={(e) => setCalendarForm({ ...calendarForm, remark: e.target.value })} placeholder="e.g. Needs collab tag with client" className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none" />
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {/* Footer */}
                <div className="px-8 py-4 bg-muted/30 border-t border-border/50 flex justify-end gap-3 shrink-0">
                  <button onClick={() => { setIsAddCalendarItemModalOpen(false); setEditingCalendarItem(null); }} className="px-4 py-2 rounded-xl font-bold text-sm text-muted-foreground hover:bg-muted transition-colors">Cancel</button>
                  <button
                    onClick={() => {
                      if (!calendarForm.postingDate || !calendarForm.topic || !calendarForm.topic.trim()) { toast.error("Posting Date and Topic Hook are required"); return; }
                      if (!currentSelectedProject) return;
                      const targetProjCalendar = currentSelectedProject.contentCalendar || [];
                      let updated: CalendarItem[] = [];
                      const completeItem: CalendarItem = {
                        id: editingCalendarItem?.id || `cal-${Date.now()}`,
                        postingDate: calendarForm.postingDate,
                        postingDay: calendarForm.postingDay || new Date(calendarForm.postingDate).toLocaleDateString("en-US", { weekday: "long" }),
                        type: calendarForm.type || "Post",
                        topic: calendarForm.topic || "",
                        concept: calendarForm.concept || undefined,
                        reference: calendarForm.reference || undefined,
                        assignedTo: calendarForm.assignedTo || undefined,
                        scriptDate: calendarForm.scriptDate || undefined,
                        scriptLink: calendarForm.scriptLink || undefined,
                        shootDate: calendarForm.shootDate || undefined,
                        shootLink: calendarForm.shootLink || undefined,
                        editingStart: calendarForm.editingStart || undefined,
                        finalReelLink: calendarForm.finalReelLink || undefined,
                        finalPostLink: calendarForm.finalPostLink || undefined,
                        approval: calendarForm.approval || undefined,
                        status: calendarForm.status || "To Do",
                        thumbnailDate: calendarForm.thumbnailDate || undefined,
                        thumbnailLink: calendarForm.thumbnailLink || undefined,
                        captionDate: calendarForm.captionDate || undefined,
                        caption: calendarForm.caption || undefined,
                        postingLinkOfIg: calendarForm.postingLinkOfIg || undefined,
                        actualPostingDate: calendarForm.actualPostingDate || undefined,
                        remark: calendarForm.remark || undefined,
                      };
                      if (editingCalendarItem) {
                        updated = targetProjCalendar.map((item: any) => item.id === editingCalendarItem.id ? completeItem : item);
                        toast.success("Content Idea updated successfully!");
                      } else {
                        updated = [...targetProjCalendar, completeItem];
                        toast.success("Content Idea added to calendar!");
                      }
                      setProjects(projects.map(p => p.id === currentSelectedProject.id ? { ...p, contentCalendar: updated } : p));
                      setIsAddCalendarItemModalOpen(false);
                      setEditingCalendarItem(null);
                    }}
                    className="px-5 py-2 bg-primary text-primary-foreground font-bold rounded-xl shadow-md hover:bg-primary/90 transition-all text-sm"
                  >
                    {editingCalendarItem ? "Save Changes" : "Create Idea"}
                  </button>
                </div>
              </div>
            </div>
          );
        })()}

      <ConfirmModal 
          isOpen={confirmModalState.isOpen}
          onClose={() => setConfirmModalState(prev => ({ ...prev, isOpen: false }))}
          onConfirm={confirmModalState.action}
          title={confirmModalState.title}
          description={confirmModalState.description}
          itemName={confirmModalState.itemName}
        />
      </>
    );
    }

    const clientProjects = projects.filter(p => {
      if (p.clientId !== client.id) return false;
      if (projectFilterStatuses.length > 0 && !projectFilterStatuses.includes(p.status)) return false;
      if (projectFilterCategories.length > 0 && !projectFilterCategories.includes(p.category)) return false;
      return true;
    });

    return (
      <>
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
            <h3 className="text-2xl font-black text-foreground font-mono">{safeFormat(client.onboardingDate, "dd MMM yyyy")}</h3>
          </div>
          <div className="bg-card border border-border/60 rounded-3xl p-5 flex flex-col justify-center shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Contacts</p>
            </div>
            <div className="flex -space-x-2">
              {(client.contacts ?? []).map((contact, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-card overflow-hidden bg-muted shadow-sm">
                  <img src={contact.avatar} alt={contact.name} className="w-full h-full object-cover" />
                </div>
              ))}
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
                onClick={(e) => {
                  const target = e.target as HTMLElement;
                  if (target.closest('button') || target.closest('[role="menuitem"]')) {
                    return;
                  }
                  setSelectedProjectId(project.id);
                }}
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
                    <DropdownMenuTrigger asChild>
                      <button className="p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg transition-colors outline-none focus:ring-2 focus:ring-primary/20">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align="end" 
                      className="w-48 rounded-2xl p-2 border-border/60 shadow-xl bg-background/95 backdrop-blur-md"
                    >
                      <DropdownMenuItem 
                        onSelect={() => {
                          setTimeout(() => {
                            openEditModal(project);
                          }, 100);
                        }}
                        className="rounded-xl cursor-pointer py-2.5 focus:bg-primary/10 focus:text-primary font-medium transition-colors"
                      >
                        <Edit2 className="w-4 h-4 mr-2" /> Edit Project
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-border/50" />
                      <DropdownMenuItem 
                        onSelect={() => {
                          setTimeout(() => {
                            confirmDeleteProject(project);
                          }, 100);
                        }}
                        className="rounded-xl cursor-pointer py-2.5 focus:bg-rose-500/10 focus:text-rose-600 font-medium text-rose-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4 mr-2" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="relative z-10 mb-4">
                  <h3 className="text-xl font-black tracking-tight text-foreground line-clamp-2 leading-tight">{project.name}</h3>
                </div>

                {/* Finance Info */}
                <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-muted/20 rounded-2xl border border-border/40 relative z-10">
                  <div>
                    <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest block mb-0.5">Budget</span>
                    <span className="text-xs font-black text-foreground font-mono">{project.budget || "₹0"}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest block mb-0.5">Received</span>
                    <span className="text-xs font-black text-emerald-500 font-mono">{project.amountReceived || "₹0"}</span>
                  </div>
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
                    <span className="text-xs font-bold text-foreground/80">{safeFormat(project.startDate, "dd/MM/yyyy")} - {safeFormat(project.endDate, "dd/MM/yyyy")}</span>
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
        <Dialog open={isNewProjectModalOpen} onOpenChange={(open) => { setIsNewProjectModalOpen(open); if (!open) { setActiveProjectTab('general'); setShowNewProjectErrors(false); } }}>
          <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden rounded-[2rem] gap-0 border-border/60 shadow-2xl [&>button]:hidden bg-card max-h-[90vh]">
            {/* Header */}
            <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-border/50 bg-muted/30 shrink-0">
              <div>
                <h2 className="text-xl md:text-2xl font-black tracking-tight">New Project</h2>
                <p className="text-sm text-muted-foreground mt-0.5">Fill in the details to create a new project.</p>
              </div>
              <DialogClose asChild>
                <button className="p-2 text-muted-foreground hover:text-foreground/80 hover:bg-muted rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </DialogClose>
            </div>
            {/* Body: sidebar + content */}
            <div className="flex flex-row overflow-hidden" style={{ maxHeight: 'calc(90vh - 130px)' }}>
              {/* Sidebar Tabs */}
              <div className="w-44 shrink-0 border-r border-border/50 bg-muted/20 p-3 flex flex-col gap-1 overflow-y-auto">
                {([
                  { id: 'general', label: 'General', icon: <FolderGit2 className="w-4 h-4" /> },
                  { id: 'finance', label: 'Finance', icon: <IndianRupee className="w-4 h-4" /> },
                ] as const).map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveProjectTab(tab.id)}
                    className={cn(
                      "flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-bold transition-all text-left w-full",
                      activeProjectTab === tab.id
                        ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>
              {/* Tab Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-5">
                {activeProjectTab === 'general' && (
                  <>
                    <div className="space-y-2">
                      <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Project Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        value={newProjectName}
                        onChange={(e) => setNewProjectName(e.target.value)}
                        placeholder="e.g. Website Redesign"
                        className={cn("w-full px-4 h-[42px] bg-muted/50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all", showNewProjectErrors && !newProjectName.trim() ? "border-red-500 ring-1 ring-red-500" : "border-border")}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Description</label>
                      <textarea
                        value={newProjectDescription}
                        onChange={(e) => setNewProjectDescription(e.target.value)}
                        placeholder="Brief project description..."
                        rows={3}
                        className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Category <span className="text-red-500">*</span></label>
                          <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsManageCategoriesModalOpen(true); }} className="text-[10px] font-bold text-primary hover:underline flex items-center gap-1">
                            <Settings2 className="w-3 h-3" /> Manage
                          </button>
                        </div>
                        <SearchableSelect
                          value={newProjectCategory}
                          onChange={(val) => setNewProjectCategory(val)}
                          options={categories.map(cat => ({ label: cat, value: cat }))}
                          placeholder="Select Category"
                          className={cn("w-full h-[42px] px-4 bg-muted/50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all", showNewProjectErrors && !newProjectCategory ? "border-red-500 ring-1 ring-red-500" : "border-border")}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Priority</label>
                        <select value={newProjectPriority} onChange={(e) => setNewProjectPriority(e.target.value as "Low" | "Medium" | "High" | "Critical")} className="w-full h-[42px] px-4 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                          {["Low", "Medium", "High", "Critical"].map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Start Date <span className="text-red-500">*</span></label>
                        <input type="date" value={newProjectStartDate} onChange={(e) => { const v = e.target.value; setNewProjectStartDate(v); if (newProjectEndDate < v) setNewProjectEndDate(v); }} className={cn("w-full px-4 h-[42px] bg-muted/50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all", showNewProjectErrors && !newProjectStartDate ? "border-red-500" : "border-border")} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">End Date <span className="text-red-500">*</span></label>
                        <input type="date" value={newProjectEndDate} min={newProjectStartDate} onChange={(e) => setNewProjectEndDate(e.target.value)} className={cn("w-full px-4 h-[42px] bg-muted/50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all", showNewProjectErrors && !newProjectEndDate ? "border-red-500" : "border-border")} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Team Deadline (Internal)</label>
                      <input type="date" value={newProjectTeamDeadline} onChange={(e) => setNewProjectTeamDeadline(e.target.value)} className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                    </div>
                    {newProjectCategory === "Digital Marketing" && (
                      <div className="space-y-4 pt-4 border-t border-border/40 mt-4">
                        <h4 className="text-xs font-bold text-foreground uppercase tracking-widest">Digital Marketing Stats</h4>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Reach Target</label>
                            <input 
                              type="text" 
                              value={newProjectReach} 
                              onChange={(e) => setNewProjectReach(e.target.value)} 
                              placeholder="e.g. 1.2M" 
                              className="w-full px-3 h-[38px] bg-muted/50 border border-border rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-primary/20" 
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Leads Target</label>
                            <input 
                              type="text" 
                              value={newProjectLeads} 
                              onChange={(e) => setNewProjectLeads(e.target.value)} 
                              placeholder="e.g. 3,240" 
                              className="w-full px-3 h-[38px] bg-muted/50 border border-border rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-primary/20" 
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">CPL (₹)</label>
                            <input 
                              type="text" 
                              value={newProjectCpl} 
                              onChange={(e) => setNewProjectCpl(e.target.value)} 
                              placeholder="e.g. 250" 
                              className="w-full px-3 h-[38px] bg-muted/50 border border-border rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-primary/20" 
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
                {activeProjectTab === 'finance' && (
                  <>
                    <div className="space-y-2">
                      <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Project Budget</label>
                      <input type="text" value={newProjectBudget} onChange={(e) => setNewProjectBudget(e.target.value)} placeholder="e.g. ₹10,000" className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Amount Received</label>
                      <input type="text" value={newProjectAmountReceived} onChange={(e) => setNewProjectAmountReceived(e.target.value)} placeholder="e.g. ₹5,000" className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Next Payment Date</label>
                      <input type="date" value={newProjectNextPaymentDate} onChange={(e) => setNewProjectNextPaymentDate(e.target.value)} className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                    </div>
                  </>
                )}
              </div>
            </div>
            {/* Footer */}
            <div className="px-6 md:px-8 py-4 bg-muted/30 border-t border-border/50 flex justify-end gap-3 shrink-0">
              <button onClick={() => { setIsNewProjectModalOpen(false); setActiveProjectTab('general'); setShowNewProjectErrors(false); }} className="px-5 py-2.5 rounded-xl font-bold text-muted-foreground hover:bg-muted transition-colors">
                Cancel
              </button>
              <button onClick={handleCreateProject} className="px-6 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl shadow-md hover:bg-primary/90 transition-all">
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
                    {categories.map(cat => {
                      const isLocked = LOCKED_CATEGORIES.includes(cat);
                      const isPending = categoryPendingDelete === cat;
                      return (
                        <div key={cat} className={cn("flex flex-col border rounded-xl overflow-hidden transition-all", isLocked ? "bg-primary/5 border-primary/20" : isPending ? "bg-rose-50 border-rose-300" : "bg-muted/30 border-border/50")}>
                          <div className="flex items-center justify-between p-3">
                            <div className="flex items-center gap-2">
                              {isLocked && <span className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded-md uppercase tracking-wider">Fixed</span>}
                              <span className="font-bold text-sm">{cat}</span>
                            </div>
                            {isLocked ? (
                              <span className="text-[10px] text-muted-foreground font-medium italic">System</span>
                            ) : (
                              <button onClick={() => setCategoryPendingDelete(isPending ? null : cat)} className={cn("p-1.5 rounded-lg transition-colors", isPending ? "text-rose-500 bg-rose-100" : "text-muted-foreground hover:text-rose-500 hover:bg-rose-500/10")}>
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                          {isPending && (
                            <div className="flex items-center justify-between px-3 py-2 bg-rose-50 border-t border-rose-200 gap-2">
                              <span className="text-xs font-bold text-rose-600">Delete "{cat}"?</span>
                              <div className="flex gap-2">
                                <button onClick={() => setCategoryPendingDelete(null)} className="px-3 py-1 text-xs font-bold text-muted-foreground bg-white border border-border/50 rounded-lg hover:bg-muted transition-colors">Cancel</button>
                                <button onClick={() => { confirmDeleteCategory(cat); setCategoryPendingDelete(null); }} className="px-3 py-1 text-xs font-bold text-white bg-rose-500 rounded-lg hover:bg-rose-600 transition-colors">Delete</button>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
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
          <DialogContent className="max-w-[90vw] md:max-w-[700px] p-0 overflow-hidden rounded-[2.5rem] border-border/60 shadow-2xl [&>button]:hidden bg-card flex flex-col h-[90vh] md:h-[550px] gap-0">
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between px-6 md:px-8 py-6 border-b border-border/50 bg-muted/30">
                <div>
                  <h2 className="text-xl md:text-2xl font-black tracking-tight">Edit Project</h2>
                  <p className="text-xs text-muted-foreground mt-1">Modify project details, stats targets, and budgets</p>
                </div>
                <DialogClose asChild>
                  <button className="p-2 text-muted-foreground hover:text-foreground/80 hover:bg-muted rounded-full transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </DialogClose>
              </div>
            </div>
            {editingProject && (
              <div className="flex flex-row overflow-hidden flex-1" style={{ maxHeight: 'calc(90vh - 130px)' }}>
                {/* Sidebar Tabs */}
                <div className="w-44 shrink-0 border-r border-border/50 bg-muted/20 p-3 flex flex-col gap-1 overflow-y-auto">
                  {([
                    { id: 'general', label: 'General', icon: <FolderGit2 className="w-4 h-4" /> },
                    { id: 'finance', label: 'Finance', icon: <IndianRupee className="w-4 h-4" /> },
                  ] as const).map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveProjectTab(tab.id)}
                      className={cn(
                        "flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-bold transition-all text-left w-full",
                        activeProjectTab === tab.id
                          ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-5">
                  {activeProjectTab === 'general' && (
                    <>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Project Name <span className="text-red-500">*</span></label>
                        <input 
                          type="text" 
                          value={editingProject.name}
                          onChange={(e) => setEditingProject({...editingProject, name: e.target.value})}
                          className={"w-full px-4 py-3 bg-muted/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium " + (showEditProjectErrors && !editingProject.name.trim() ? "border-red-500 ring-1 ring-red-500" : "border-border/50")}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Description</label>
                        <textarea 
                          value={editingProject.description || ""}
                          onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
                          placeholder="Brief project description..."
                          rows={2}
                          className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium resize-none"
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
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest block">Category <span className="text-red-500">*</span></label>
                            <button 
                              type="button"
                              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsManageCategoriesModalOpen(true); }}
                              className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                            >
                              <Settings2 className="w-3 h-3" /> Manage
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
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Priority</label>
                          <select 
                            value={editingProject.priority || "Medium"} 
                            onChange={(e) => setEditingProject({...editingProject, priority: e.target.value as any})} 
                            className="w-full h-[46px] px-4 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                          >
                            {["Low", "Medium", "High", "Critical"].map(p => <option key={p} value={p}>{p}</option>)}
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
                            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary mt-3"
                          />
                        </div>
                      </div>
                      {editingProject.category === "Digital Marketing" && (
                        <div className="space-y-4 pt-4 border-t border-border/40 mt-4">
                          <h4 className="text-xs font-bold text-foreground uppercase tracking-widest">Digital Marketing Stats</h4>
                          <div className="grid grid-cols-3 gap-3">
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Reach Target</label>
                              <input 
                                type="text" 
                                value={editingProject.reach || ""} 
                                onChange={(e) => setEditingProject({...editingProject, reach: e.target.value})} 
                                placeholder="e.g. 1.2M" 
                                className="w-full px-3 h-[38px] bg-muted/50 border border-border rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-primary/20" 
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Leads Target</label>
                              <input 
                                type="text" 
                                value={editingProject.leads || ""} 
                                onChange={(e) => setEditingProject({...editingProject, leads: e.target.value})} 
                                placeholder="e.g. 3,240" 
                                className="w-full px-3 h-[38px] bg-muted/50 border border-border rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-primary/20" 
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">CPL (₹)</label>
                              <input 
                                type="text" 
                                value={editingProject.cpl || ""} 
                                onChange={(e) => setEditingProject({...editingProject, cpl: e.target.value})} 
                                placeholder="e.g. 250" 
                                className="w-full px-3 h-[38px] bg-muted/50 border border-border rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-primary/20" 
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {activeProjectTab === 'finance' && (
                    <>
                      <div className="space-y-2">
                        <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-wider">Project Budget</label>
                        <input type="text" value={editingProject.budget || ""} onChange={(e) => setEditingProject({...editingProject, budget: e.target.value})} placeholder="e.g. ₹10,000" className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-wider">Amount Received</label>
                        <input type="text" value={editingProject.amountReceived || ""} onChange={(e) => setEditingProject({...editingProject, amountReceived: e.target.value})} placeholder="e.g. ₹5,000" className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-wider">Next Payment Date</label>
                        <input type="date" value={editingProject.nextPaymentDate || ""} onChange={(e) => setEditingProject({...editingProject, nextPaymentDate: e.target.value})} className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
            <div className="px-6 md:px-8 py-4 bg-muted/30 border-t border-border/50 flex justify-end gap-3 mt-auto shrink-0">
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
                    {categories.map(cat => {
                      const isLocked = LOCKED_CATEGORIES.includes(cat);
                      const isPending = categoryPendingDelete === cat;
                      return (
                        <div key={cat} className={cn("flex flex-col border rounded-xl overflow-hidden transition-all", isLocked ? "bg-primary/5 border-primary/20" : isPending ? "bg-rose-50 border-rose-300" : "bg-muted/30 border-border/50")}>
                          <div className="flex items-center justify-between p-3">
                            <div className="flex items-center gap-2">
                              {isLocked && <span className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded-md uppercase tracking-wider">Fixed</span>}
                              <span className="font-bold text-sm">{cat}</span>
                            </div>
                            {isLocked ? (
                              <span className="text-[10px] text-muted-foreground font-medium italic">System</span>
                            ) : (
                              <button onClick={() => setCategoryPendingDelete(isPending ? null : cat)} className={cn("p-1.5 rounded-lg transition-colors", isPending ? "text-rose-500 bg-rose-100" : "text-muted-foreground hover:text-rose-500 hover:bg-rose-500/10")}>
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                          {isPending && (
                            <div className="flex items-center justify-between px-3 py-2 bg-rose-50 border-t border-rose-200 gap-2">
                              <span className="text-xs font-bold text-rose-600">Delete "{cat}"?</span>
                              <div className="flex gap-2">
                                <button onClick={() => setCategoryPendingDelete(null)} className="px-3 py-1 text-xs font-bold text-muted-foreground bg-white border border-border/50 rounded-lg hover:bg-muted transition-colors">Cancel</button>
                                <button onClick={() => { confirmDeleteCategory(cat); setCategoryPendingDelete(null); }} className="px-3 py-1 text-xs font-bold text-white bg-rose-500 rounded-lg hover:bg-rose-600 transition-colors">Delete</button>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
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
      <ConfirmModal 
        isOpen={confirmModalState.isOpen}
        onClose={() => setConfirmModalState(prev => ({ ...prev, isOpen: false }))}
        onConfirm={confirmModalState.action}
        title={confirmModalState.title}
        description={confirmModalState.description}
        itemName={confirmModalState.itemName}
      />
    </>
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
            onClick={(e) => {
              const target = e.target as HTMLElement;
              if (target.closest('button') || target.closest('[role="menuitem"]')) {
                return;
              }
              setSelectedClientId(client.id);
              setSelectedProjectId(null);
            }}
            className="group bg-white border border-border/40 rounded-[2rem] p-6 shadow-sm hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 relative flex flex-col cursor-pointer"
          >
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/[0.03] to-transparent rounded-t-[2rem] pointer-events-none transition-opacity opacity-0 group-hover:opacity-100"></div>

            <div className="flex justify-between items-start mb-5 relative z-10">
              <div className="w-16 h-16 rounded-2xl border border-border/50 overflow-hidden shadow-sm bg-white p-1 group-hover:scale-105 group-hover:border-primary/30 transition-all duration-300">
                <img src={client.logo} alt={client.name} className="w-full h-full object-cover rounded-xl" />
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg transition-colors outline-none focus:ring-2 focus:ring-primary/20 bg-background/50 backdrop-blur-sm">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </DropdownMenuTrigger>
                 <DropdownMenuContent 
                  align="end" 
                  className="w-48 rounded-2xl p-2 border-border/60 shadow-xl bg-background/95 backdrop-blur-md"
                >
                  <DropdownMenuItem 
                    onSelect={() => {
                      setTimeout(() => {
                        setEditingClient(client);
                        setIsEditClientModalOpen(true);
                      }, 100);
                    }}
                    className="rounded-xl cursor-pointer py-2.5 focus:bg-primary/10 focus:text-primary font-medium transition-colors"
                  >
                    <Edit2 className="w-4 h-4 mr-2" /> Edit Client
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-border/50" />
                  {client.status === 'Archived' ? (
                    <DropdownMenuItem 
                      onSelect={() => {
                        setTimeout(() => {
                          unarchiveClient(client);
                        }, 100);
                      }}
                      className="rounded-xl cursor-pointer py-2.5 focus:bg-emerald-500/10 focus:text-emerald-600 font-medium text-emerald-600 transition-colors"
                    >
                      <ArchiveRestore className="w-4 h-4 mr-2" /> Unarchive Client
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem 
                      onSelect={() => {
                        setTimeout(() => {
                          archiveClient(client);
                        }, 100);
                      }}
                      className="rounded-xl cursor-pointer py-2.5 focus:bg-amber-500/10 focus:text-amber-600 font-medium text-amber-600 transition-colors"
                    >
                      <Archive className="w-4 h-4 mr-2" /> Archive Client
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem 
                    onSelect={() => {
                      setTimeout(() => {
                        confirmDeleteClient(client);
                      }, 100);
                    }}
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
                  <Calendar className="w-3.5 h-3.5" /> {safeFormat(client.onboardingDate, "MMM yyyy")}
                </span>
              </div>
            </div>

            {/* Contacts overlap */}
            {(client.contacts ?? []).length > 0 && (
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="flex -space-x-2">
                  {(client.contacts ?? []).map((c, idx) => (
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
        <DialogContent className="max-w-5xl p-0 overflow-hidden rounded-[2rem] gap-0 border-border/60 shadow-2xl [&>button]:hidden bg-card">
          <div className="flex items-center justify-between px-8 py-6 border-b border-border/50 bg-muted/30">
            <div>
              <h2 className="text-2xl font-black tracking-tight">Add Client</h2>
              <p className="text-sm text-muted-foreground mt-1">Complete all sections to register a new client.</p>
            </div>
            <button 
              onClick={() => { setIsNewClientModalOpen(false); setNewClientFormData(defaultClientForm); setShowNewClientErrors(false); setActiveClientTab('general'); }}
              className="p-2 text-muted-foreground hover:text-foreground/80 hover:bg-muted rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row h-[70vh] max-h-[800px]">
            {/* Sidebar Tabs */}
            <div className="w-full md:w-64 bg-muted/20 border-r border-border/50 p-4 space-y-2 overflow-y-auto shrink-0">
              {clientTabs.map(tab => {
                const Icon = tab.icon;
                const isActive = activeClientTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveClientTab(tab.id as ClientTab)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-md" 
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                    {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                  </button>
                )
              })}
            </div>

            {/* Form Content */}
            <div className="flex-1 overflow-y-auto p-8 relative">
              <div className="space-y-8">
                {activeClientTab === 'general' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-black tracking-tight text-foreground flex items-center gap-2">
                      <User className="w-5 h-5 text-primary" /> General Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Contact Person Name <span className="text-red-500">*</span></label>
                        <input 
                          type="text" value={newClientFormData.name} onChange={(e) => handleClientFormChange('name', e.target.value)} placeholder="e.g. John Doe"
                          className={cn("w-full px-4 h-[42px] bg-muted/50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all", showNewClientErrors && !newClientFormData.name.trim() ? "border-red-500 ring-1 ring-red-500" : "border-border")}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Phone Number <span className="text-red-500">*</span></label>
                        <input 
                          type="text" value={newClientFormData.phone} onChange={(e) => handleClientFormChange('phone', e.target.value)} placeholder="+91 00000 00000"
                          className={cn("w-full px-4 h-[42px] bg-muted/50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all", showNewClientErrors && !newClientFormData.phone?.trim() ? "border-red-500 ring-1 ring-red-500" : "border-border")}
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Email Address</label>
                        <input 
                          type="email" value={newClientFormData.email} onChange={(e) => handleClientFormChange('email', e.target.value)} placeholder="client@example.com"
                          className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeClientTab === 'company' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-black tracking-tight text-foreground flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" /> Company Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Company Name <span className="text-red-500">*</span></label>
                        <input 
                          type="text" value={newClientFormData.companyName} onChange={(e) => handleClientFormChange('companyName', e.target.value)} placeholder="e.g. Acme Corp"
                          className={cn("w-full px-4 h-[42px] bg-muted/50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all", showNewClientErrors && !newClientFormData.companyName?.trim() ? "border-red-500 ring-1 ring-red-500" : "border-border")}
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Address</label>
                        <input 
                          type="text" value={newClientFormData.address} onChange={(e) => handleClientFormChange('address', e.target.value)} placeholder="123 Main St, City"
                          className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">State / UT</label>
                        <input 
                          type="text" value={newClientFormData.state} onChange={(e) => handleClientFormChange('state', e.target.value)} placeholder="e.g. MH"
                          className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">GSTIN</label>
                        <input 
                          type="text" value={newClientFormData.gstin} onChange={(e) => handleClientFormChange('gstin', e.target.value)} placeholder="e.g. 22AAAAA0000A1Z5"
                          className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Department(s)</label>
                        <input 
                          type="text" value={newClientFormData.department} onChange={(e) => handleClientFormChange('department', e.target.value)} placeholder="e.g. Marketing, Development"
                          className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeClientTab === 'service' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-black tracking-tight text-foreground flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-primary" /> Service & Billing Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Sales Focused</label>
                        <input type="text" value={newClientFormData.salesFocused} onChange={(e) => handleClientFormChange('salesFocused', e.target.value)} className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Total Budget</label>
                        <input type="text" value={newClientFormData.totalBudget} onChange={(e) => handleClientFormChange('totalBudget', e.target.value)} className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Outstanding Payment</label>
                        <input type="text" value={newClientFormData.outstandingPayment} onChange={(e) => handleClientFormChange('outstandingPayment', e.target.value)} className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Onboarding Date</label>
                        <input type="date" value={newClientFormData.onboardingDate} onChange={(e) => handleClientFormChange('onboardingDate', e.target.value)} className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                      </div>
                    </div>
                  </div>
                )}

                {activeClientTab === 'remarks' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-black tracking-tight text-foreground flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" /> Remarks
                    </h3>
                    <div className="space-y-2">
                      <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Additional Notes</label>
                      <textarea value={newClientFormData.remarks} onChange={(e) => handleClientFormChange('remarks', e.target.value)} className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-sm min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Footer Actions */}
          <div className="px-6 md:px-8 py-4 md:py-6 bg-muted/30 border-t border-border/50 flex justify-between gap-3 mt-auto shrink-0">
            <button 
              onClick={() => { setIsNewClientModalOpen(false); setNewClientFormData(defaultClientForm); setShowNewClientErrors(false); setActiveClientTab('general'); }}
              className="px-5 py-2.5 rounded-xl font-bold text-muted-foreground hover:bg-muted transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleCreateClient}
              className="px-6 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl shadow-md hover:bg-primary/90 transition-all"
            >
              Create Client
            </button>
          </div>
        </DialogContent>
      </Dialog>
      {/* Edit Client Modal */}
      <Dialog open={isEditClientModalOpen} onOpenChange={setIsEditClientModalOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden rounded-[2rem] gap-0 border-border/60 shadow-2xl [&>button]:hidden bg-card">
          <div className="flex items-center justify-between px-8 py-6 border-b border-border/50 bg-muted/30">
            <div>
              <h2 className="text-2xl font-black tracking-tight">Edit Client</h2>
              <p className="text-sm text-muted-foreground mt-1">Update existing client information.</p>
            </div>
            <button 
              onClick={() => { setIsEditClientModalOpen(false); setEditingClient(null); setActiveClientTab('general'); }}
              className="p-2 text-muted-foreground hover:text-foreground/80 hover:bg-muted rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {editingClient && (
            <div className="flex flex-col md:flex-row h-[70vh] max-h-[800px]">
              {/* Sidebar Tabs */}
              <div className="w-full md:w-64 bg-muted/20 border-r border-border/50 p-4 space-y-2 overflow-y-auto shrink-0">
                {clientTabs.map(tab => {
                  const Icon = tab.icon;
                  const isActive = activeClientTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveClientTab(tab.id as ClientTab)}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                        isActive 
                          ? "bg-primary text-primary-foreground shadow-md" 
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                      {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                    </button>
                  )
                })}
              </div>

              {/* Form Content */}
              <div className="flex-1 overflow-y-auto p-8 relative">
                <div className="space-y-8">
                  {activeClientTab === 'general' && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-black tracking-tight text-foreground flex items-center gap-2">
                        <User className="w-5 h-5 text-primary" /> General Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Contact Person Name <span className="text-red-500">*</span></label>
                          <input 
                            type="text" value={editingClient.name || ''} onChange={(e) => handleClientFormChange('name', e.target.value, true)} 
                            className={cn("w-full px-4 h-[42px] bg-muted/50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all", showEditClientErrors && !editingClient.name?.trim() ? "border-red-500 ring-1 ring-red-500" : "border-border")}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Phone Number <span className="text-red-500">*</span></label>
                          <input 
                            type="text" value={editingClient.phone || ''} onChange={(e) => handleClientFormChange('phone', e.target.value, true)} 
                            className={cn("w-full px-4 h-[42px] bg-muted/50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all", showEditClientErrors && !editingClient.phone?.trim() ? "border-red-500 ring-1 ring-red-500" : "border-border")}
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Email Address</label>
                          <input 
                            type="email" value={editingClient.email || ''} onChange={(e) => handleClientFormChange('email', e.target.value, true)} 
                            className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeClientTab === 'company' && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-black tracking-tight text-foreground flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-primary" /> Company Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2 md:col-span-2">
                          <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Company Name <span className="text-red-500">*</span></label>
                          <input 
                            type="text" value={editingClient.companyName || ''} onChange={(e) => handleClientFormChange('companyName', e.target.value, true)} 
                            className={cn("w-full px-4 h-[42px] bg-muted/50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all", showEditClientErrors && !editingClient.companyName?.trim() ? "border-red-500 ring-1 ring-red-500" : "border-border")}
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Address</label>
                          <input 
                            type="text" value={editingClient.address || ''} onChange={(e) => handleClientFormChange('address', e.target.value, true)} 
                            className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">State / UT</label>
                          <input 
                            type="text" value={editingClient.state || ''} onChange={(e) => handleClientFormChange('state', e.target.value, true)} 
                            className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">GSTIN</label>
                          <input 
                            type="text" value={editingClient.gstin || ''} onChange={(e) => handleClientFormChange('gstin', e.target.value, true)} 
                            className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Department(s)</label>
                          <input 
                            type="text" value={editingClient.department || ''} onChange={(e) => handleClientFormChange('department', e.target.value, true)} 
                            className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeClientTab === 'service' && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-black tracking-tight text-foreground flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-primary" /> Service & Billing Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2 md:col-span-2">
                          <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Sales Focused</label>
                          <input type="text" value={editingClient.salesFocused || ''} onChange={(e) => handleClientFormChange('salesFocused', e.target.value, true)} className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                        </div>

                        <div className="space-y-2">
                          <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Total Budget</label>
                          <input type="text" value={editingClient.totalBudget || ''} onChange={(e) => handleClientFormChange('totalBudget', e.target.value, true)} className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Outstanding Payment</label>
                          <input type="text" value={editingClient.outstandingPayment || ''} onChange={(e) => handleClientFormChange('outstandingPayment', e.target.value, true)} className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Onboarding Date</label>
                          <input type="date" value={editingClient.onboardingDate || ''} onChange={(e) => handleClientFormChange('onboardingDate', e.target.value, true)} className="w-full px-4 h-[42px] bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeClientTab === 'remarks' && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-black tracking-tight text-foreground flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" /> Remarks
                      </h3>
                      <div className="space-y-2">
                        <label className="text-[12px] font-bold text-foreground/80 uppercase tracking-wider">Additional Notes</label>
                        <textarea value={editingClient.remarks || ''} onChange={(e) => handleClientFormChange('remarks', e.target.value, true)} className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-sm min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {/* Footer Actions */}
          <div className="px-6 md:px-8 py-4 md:py-6 bg-muted/30 border-t border-border/50 flex justify-between gap-3 mt-auto shrink-0">
            <button 
              onClick={() => { setIsEditClientModalOpen(false); setEditingClient(null); setActiveClientTab('general'); }}
              className="px-5 py-2.5 rounded-xl font-bold text-muted-foreground hover:bg-muted transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleUpdateClient}
              className="px-6 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl shadow-md hover:bg-primary/90 transition-all"
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
