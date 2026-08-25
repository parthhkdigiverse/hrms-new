import { useState, useEffect, useMemo } from "react";
import { X, Search, Plus, Filter, LayoutGrid, List as ListIcon, MoreHorizontal, Calendar, Clock, CheckCircle2, MessageSquare, Paperclip, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { DialogClose, Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SearchableSelect } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";
import { format } from "date-fns";

type TaskStatus = "Todo" | "In Progress" | "In Review" | "Done";
type Priority = "High" | "Medium" | "Low";

interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
  dueDate: string;
  assignees: { name: string; avatar: string }[];
  commentsCount: number;
  attachmentsCount: number;
  isProjectTask?: boolean;
  projectId?: string;
  moduleId?: string;
  clientId?: string;
  originalStatus?: string;
}

export function Tasks({ setActive }: { setActive?: (route: string) => void }) {
  const [projects, setProjects] = useState<any[]>([]);
  const [independentTasks, setIndependentTasks] = useState<Task[]>([]);

  const handleRedirectToProject = (e: React.MouseEvent, projectId: string, clientId?: string, moduleId?: string) => {
    e.stopPropagation();
    if (typeof window !== "undefined") {
      localStorage.setItem("hrms_selected_project_id", projectId);
      if (clientId) {
        localStorage.setItem("hrms_selected_client_id", clientId);
      }
      if (moduleId) {
        localStorage.setItem("hrms_selected_module_id", moduleId);
      }
      if (setActive) {
        setActive("/work/projects");
      }
    }
  };
  const [view, setView] = useState<"board" | "list">("list");
  const [searchQuery, setSearchQuery] = useState("");

  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDesc, setNewTaskDesc] = useState("");
  const [newTaskPriority, setNewTaskPriority] = useState<Priority>("Medium");
  const [newTaskDueDate, setNewTaskDueDate] = useState("");

  const [inlineEditingTaskId, setInlineEditingTaskId] = useState<string | null>(null);
  const [inlineTaskTitle, setInlineTaskTitle] = useState("");
  const [inlineTaskDesc, setInlineTaskDesc] = useState("");
  const [inlineTaskStatus, setInlineTaskStatus] = useState<TaskStatus>("Todo");
  const [inlineTaskPriority, setInlineTaskPriority] = useState<Priority>("Medium");
  const [inlineTaskDueDate, setInlineTaskDueDate] = useState("");

  // Load from local storage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const localProjects = localStorage.getItem("hrms_projects");
      let currentProjects = [];
      if (localProjects) {
        try {
          currentProjects = JSON.parse(localProjects);
        } catch (e) {}
      }

      // Auto-generate daily tasks for Digital Marketing projects
      let updated = false;
      const d = new Date();
      d.setDate(d.getDate() - 1);
      const prevDate = format(d, "yyyy-MM-dd");

      const processedProjects = currentProjects.map((project: any) => {
        if (project.category === "Digital Marketing") {
          const modules = [...(project.modules || [])];
          let dailyModule = modules.find((m: any) => m.id === "daily-data-entry");
          if (!dailyModule) {
            dailyModule = {
              id: "daily-data-entry",
              name: "Daily Data Entry",
              status: "todo",
              priority: "medium",
              tasks: []
            };
            modules.push(dailyModule);
            updated = true;
          }

          const tasks = dailyModule.tasks || [];
          const taskExists = tasks.some((t: any) => t.id === `daily-task-${project.id}-${prevDate}` || t.dueDate === prevDate);
          if (!taskExists) {
            const newTask = {
              id: `daily-task-${project.id}-${prevDate}`,
              title: `Add previous day data (${prevDate})`,
              status: "todo",
              dueDate: prevDate,
              assignedToName: project.team[0]?.name || "Emma",
              assignedToAvatar: project.team[0]?.avatar || `https://api.dicebear.com/7.x/adventurer/svg?seed=${project.team[0]?.name || "Emma"}`
            };
            const updatedTasks = [...tasks, newTask];
            const updatedModules = modules.map((m: any) => m.id === "daily-data-entry" ? { ...m, tasks: updatedTasks } : m);
            updated = true;
            return { ...project, modules: updatedModules };
          }
        }
        return project;
      });

      if (updated) {
        localStorage.setItem("hrms_projects", JSON.stringify(processedProjects));
        setProjects(processedProjects);
        window.dispatchEvent(new Event("storage"));
      } else {
        setProjects(currentProjects);
      }

      const localTasks = localStorage.getItem("hrms_tasks");
      if (localTasks) {
        setIndependentTasks(JSON.parse(localTasks));
      } else {
        const initialTasks: Task[] = [
          { id: "ind-1", title: "Review brand guideline guidelines", description: "Audit color tokens for dark mode alignment.", status: "In Progress", priority: "High", dueDate: "2026-08-15", assignees: [{ name: "Alex", avatar: "https://i.pravatar.cc/150?u=alex" }], commentsCount: 0, attachmentsCount: 0 }
        ];
        setIndependentTasks(initialTasks);
        localStorage.setItem("hrms_tasks", JSON.stringify(initialTasks));
      }
    }
  }, []);

  // Listen to external localstorage changes (like Projects.tsx updating tasks)
  useEffect(() => {
    const handleStorageChange = () => {
      const localProjects = localStorage.getItem("hrms_projects");
      if (localProjects) {
        setProjects(JSON.parse(localProjects));
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Sync independent tasks
  const saveIndependentTasks = (newTasks: Task[]) => {
    setIndependentTasks(newTasks);
    localStorage.setItem("hrms_tasks", JSON.stringify(newTasks));
  };

  // Sync projects state
  const saveProjects = (newProjects: any[]) => {
    setProjects(newProjects);
    localStorage.setItem("hrms_projects", JSON.stringify(newProjects));
    // Dispatch storage event locally so other components are aware
    window.dispatchEvent(new Event("storage"));
  };

  // Aggregate independent tasks + project module tasks
  const allTasks = useMemo(() => {
    const projectTasksList: Task[] = [];
    projects.forEach(project => {
      const modules = project.modules || [];
      modules.forEach((mod: any) => {
        const mTasks = mod.tasks || [];
        mTasks.forEach((t: any) => {
          // Map project status to Tasks status
          let mappedStatus: TaskStatus = "Todo";
          if (t.status === "completed") mappedStatus = "Done";
          else if (t.status === "in-progress" || t.status === "bugs") mappedStatus = "In Progress";
          else if (t.status === "pending") mappedStatus = "In Review";

          let mappedPriority: Priority = "Medium";
          if (mod.priority === "high" || mod.priority === "urgent") mappedPriority = "High";
          else if (mod.priority === "low") mappedPriority = "Low";

          projectTasksList.push({
            id: t.id,
            title: t.title,
            description: `Project: ${project.name} | Module: ${mod.name}`,
            status: mappedStatus,
            priority: mappedPriority,
            dueDate: t.dueDate || mod.dueDate || format(new Date(), "yyyy-MM-dd"),
            assignees: t.assignedToName ? [{ name: t.assignedToName, avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=${t.assignedToName}` }] : (mod.assignedToName ? [{ name: mod.assignedToName, avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=${mod.assignedToName}` }] : []),
            commentsCount: 0,
            attachmentsCount: 0,
            isProjectTask: true,
            projectId: project.id,
            moduleId: mod.id,
            clientId: project.clientId,
            originalStatus: t.status
          });
        });
      });
    });

    return [...independentTasks, ...projectTasksList];
  }, [projects, independentTasks]);

  const filteredTasks = useMemo(() => {
    return allTasks.filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [allTasks, searchQuery]);

  const updateTaskStatus = (taskId: string, nextStatus: TaskStatus) => {
    const task = allTasks.find(t => t.id === taskId);
    if (!task) return;

    if (task.isProjectTask && task.projectId && task.moduleId) {
      // Map TaskStatus back to Module status
      let originalStatus = "todo";
      if (nextStatus === "Done") originalStatus = "completed";
      else if (nextStatus === "In Progress") originalStatus = "in-progress";
      else if (nextStatus === "In Review") originalStatus = "pending";

      const newProjects = projects.map(p => {
        if (p.id === task.projectId) {
          const modules = p.modules || [];
          const updatedModules = modules.map((m: any) => {
            if (m.id === task.moduleId) {
              const updatedTasks = m.tasks.map((t: any) => {
                if (t.id === taskId) {
                  return { ...t, status: originalStatus };
                }
                return t;
              });
              return { ...m, tasks: updatedTasks };
            }
            return m;
          });
          return { ...p, modules: updatedModules };
        }
        return p;
      });
      saveProjects(newProjects);
      toast.success("Project task status synced!");
    } else {
      const updated = independentTasks.map(t => t.id === taskId ? { ...t, status: nextStatus } : t);
      saveIndependentTasks(updated);
      toast.success("Task status updated!");
    }
  };

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle) {
      toast.error("Task title is required");
      return;
    }

    if (editingTaskId) {
      const task = allTasks.find(t => t.id === editingTaskId);
      if (task?.isProjectTask && task.projectId && task.moduleId) {
        const newProjects = projects.map(p => {
          if (p.id === task.projectId) {
            const modules = p.modules || [];
            const updatedModules = modules.map((m: any) => {
              if (m.id === task.moduleId) {
                const updatedTasks = m.tasks.map((t: any) => {
                  if (t.id === editingTaskId) {
                    return { ...t, title: newTaskTitle, dueDate: newTaskDueDate || t.dueDate };
                  }
                  return t;
                });
                return { ...m, tasks: updatedTasks };
              }
              return m;
            });
            return { ...p, modules: updatedModules };
          }
          return p;
        });
        saveProjects(newProjects);
      } else {
        const updated = independentTasks.map(t => t.id === editingTaskId ? {
          ...t,
          title: newTaskTitle,
          description: newTaskDesc,
          priority: newTaskPriority,
          dueDate: newTaskDueDate || t.dueDate
        } : t);
        saveIndependentTasks(updated);
      }
      toast.success("Task updated successfully!");
    } else {
      const newTask: Task = {
        id: Math.random().toString(36).substr(2, 9),
        title: newTaskTitle,
        description: newTaskDesc,
        status: "Todo",
        priority: newTaskPriority,
        dueDate: newTaskDueDate || format(new Date(), "yyyy-MM-dd"),
        assignees: [{ name: "Alex (You)", avatar: "https://i.pravatar.cc/150?u=alex" }],
        commentsCount: 0,
        attachmentsCount: 0,
      };
      saveIndependentTasks([newTask, ...independentTasks]);
      toast.success("Task created successfully!");
    }

    setIsNewTaskOpen(false);
    setEditingTaskId(null);
    setNewTaskTitle("");
    setNewTaskDesc("");
    setNewTaskPriority("Medium");
    setNewTaskDueDate("");
  };

  const openEditTask = (task: Task) => {
    setEditingTaskId(task.id);
    setNewTaskTitle(task.title);
    setNewTaskDesc(task.description);
    setNewTaskPriority(task.priority);
    setNewTaskDueDate(task.dueDate);
    setIsNewTaskOpen(true);
  };

  const startInlineEdit = (task: Task) => {
    setInlineEditingTaskId(task.id);
    setInlineTaskTitle(task.title);
    setInlineTaskDesc(task.description);
    setInlineTaskStatus(task.status);
    setInlineTaskPriority(task.priority);
    setInlineTaskDueDate(task.dueDate);
  };

  const saveInlineEdit = () => {
    if (!inlineEditingTaskId) return;

    const task = allTasks.find(t => t.id === inlineEditingTaskId);
    if (task?.isProjectTask && task.projectId && task.moduleId) {
      let originalStatus = "todo";
      if (inlineTaskStatus === "Done") originalStatus = "completed";
      else if (inlineTaskStatus === "In Progress") originalStatus = "in-progress";
      else if (inlineTaskStatus === "In Review") originalStatus = "pending";

      const newProjects = projects.map(p => {
        if (p.id === task.projectId) {
          const modules = p.modules || [];
          const updatedModules = modules.map((m: any) => {
            if (m.id === task.moduleId) {
              const updatedTasks = m.tasks.map((t: any) => {
                if (t.id === inlineEditingTaskId) {
                  return { ...t, title: inlineTaskTitle, status: originalStatus };
                }
                return t;
              });
              return { ...m, tasks: updatedTasks };
            }
            return m;
          });
          return { ...p, modules: updatedModules };
        }
        return p;
      });
      saveProjects(newProjects);
    } else {
      const updated = independentTasks.map(t => t.id === inlineEditingTaskId ? {
        ...t,
        title: inlineTaskTitle,
        description: inlineTaskDesc,
        status: inlineTaskStatus,
        priority: inlineTaskPriority,
        dueDate: inlineTaskDueDate
      } : t);
      saveIndependentTasks(updated);
    }

    setInlineEditingTaskId(null);
    toast.success("Task updated!");
  };

  const columns: { title: string; status: TaskStatus }[] = [
    { title: "To Do", status: "Todo" },
    { title: "In Progress", status: "In Progress" },
    { title: "In Review", status: "In Review" },
    { title: "Done", status: "Done" },
  ];

  const getPriorityColor = (priority: Priority) => {
    switch (priority) {
      case "High": return "bg-rose-100 text-rose-700";
      case "Medium": return "bg-amber-100 text-amber-700";
      case "Low": return "bg-emerald-100 text-emerald-700";
    }
  };

  return (
    <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shrink-0">
        <div>
          <h1 className="text-2xl font-black text-foreground tracking-tight">Tasks</h1>
          <p className="text-xs text-muted-foreground mt-1 font-semibold">Unified dashboard mapping direct tasks and client project tasks</p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search tasks..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-muted/40 border border-border/60 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="flex items-center bg-muted/40 border border-border/50 rounded-xl p-1 shrink-0">
            <button 
              onClick={() => setView("board")}
              className={cn("p-1.5 rounded-lg transition-colors", view === "board" ? "bg-card text-foreground shadow-sm font-bold" : "text-muted-foreground hover:text-foreground/80")}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setView("list")}
              className={cn("p-1.5 rounded-lg transition-colors", view === "list" ? "bg-card text-foreground shadow-sm font-bold" : "text-muted-foreground hover:text-foreground/80")}
            >
              <ListIcon className="w-4 h-4" />
            </button>
          </div>

          <Dialog open={isNewTaskOpen} onOpenChange={(open) => {
            setIsNewTaskOpen(open);
            if (!open) {
              setEditingTaskId(null);
              setNewTaskTitle("");
              setNewTaskDesc("");
              setNewTaskPriority("Medium");
              setNewTaskDueDate("");
            }
          }}>
            <DialogTrigger asChild>
              <button className="px-4 py-2 bg-primary hover:bg-primary/95 text-primary-foreground text-xs font-bold rounded-xl flex items-center gap-2 transition-colors shadow-sm shrink-0">
                <Plus className="w-4 h-4" />
                <span>New Task</span>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] md:max-w-[500px] p-0 overflow-hidden rounded-[2rem] gap-0 border-border/60 shadow-2xl [&>button]:hidden bg-card">
              <div className="flex items-center justify-between px-6 md:px-8 py-6 border-b border-border/50 bg-muted/30">
                <div>
                  <h2 className="text-lg font-black tracking-tight">{editingTaskId ? "Edit Task" : "Create New Task"}</h2>
                </div>
                <DialogClose asChild>
                  <button className="p-2 text-muted-foreground hover:text-foreground/80 hover:bg-muted rounded-full transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </DialogClose>
              </div>
              <form onSubmit={handleCreateTask} className="flex flex-col max-h-[70vh]">
                <div className="p-6 md:p-8 space-y-4 overflow-y-auto">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block">Task Title</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Design Logo"
                      value={newTaskTitle}
                      onChange={e => setNewTaskTitle(e.target.value)}
                      className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-primary font-semibold"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block">Description</label>
                    <textarea 
                      rows={3}
                      placeholder="Task details..."
                      value={newTaskDesc}
                      onChange={e => setNewTaskDesc(e.target.value)}
                      className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-primary font-semibold resize-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block">Priority</label>
                      <SearchableSelect
                        value={newTaskPriority}
                        onChange={(val) => setNewTaskPriority(val as Priority)}
                        options={[
                          { label: "High", value: "High" },
                          { label: "Medium", value: "Medium" },
                          { label: "Low", value: "Low" }
                        ]}
                        className="w-full h-[38px] px-3 bg-muted/50 border border-border/50 rounded-xl text-xs font-bold focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block">Due Date</label>
                      <input 
                        type="date" 
                        value={newTaskDueDate}
                        onChange={e => setNewTaskDueDate(e.target.value)}
                        className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-primary font-bold text-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-6 md:px-8 py-4 md:py-6 bg-muted/30 border-t border-border/50 flex justify-end gap-3 mt-auto shrink-0">
                  <button 
                    type="button" 
                    onClick={() => setIsNewTaskOpen(false)}
                    className="px-4 py-2 bg-card border border-border text-foreground/80 hover:bg-muted font-bold text-xs rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-primary hover:bg-primary/95 text-primary-foreground font-bold text-xs rounded-xl transition-colors"
                  >
                    {editingTaskId ? "Save Changes" : "Create Task"}
                  </button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {view === "board" ? (
        <div className="flex-1 overflow-x-auto overflow-y-hidden pb-4">
          <div className="flex gap-6 h-full min-w-max">
            {columns.map(col => {
              const colTasks = filteredTasks.filter(t => t.status === col.status);
              return (
                <div 
                  key={col.status} 
                  className="w-80 flex flex-col bg-muted/20 rounded-[2.5rem] border border-border/40 shrink-0 overflow-hidden"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const taskId = e.dataTransfer.getData('taskId');
                    updateTaskStatus(taskId, col.status);
                  }}
                >
                  <div className="p-5 border-b border-border/40 flex items-center justify-between bg-muted/10">
                    <h3 className="font-bold text-xs text-foreground/80 uppercase tracking-wider">{col.title}</h3>
                    <span className="bg-card text-foreground text-xs font-bold px-2 py-0.5 rounded-lg border border-border/55">{colTasks.length}</span>
                  </div>
                  
                  <div className="flex-1 p-4 overflow-y-auto space-y-3">
                    {colTasks.map(task => (
                      <div 
                        key={task.id} 
                        draggable
                        onDragStart={(e) => e.dataTransfer.setData('taskId', task.id)}
                        onClick={() => openEditTask(task)}
                        className="bg-card p-4 rounded-2xl border border-border/40 shadow-sm hover:border-primary/20 transition-all group cursor-pointer space-y-3"
                      >
                        <div className="flex justify-between items-start">
                          <span className={cn("text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider border", getPriorityColor(task.priority))}>
                            {task.priority}
                          </span>
                          {task.isProjectTask && (
                            <div className="flex items-center gap-1">
                              <span className="text-[9px] font-black bg-primary/10 text-primary border border-primary/25 px-2 py-0.5 rounded-md uppercase tracking-wider">
                                Project Task
                              </span>
                              <button
                                onClick={(e) => handleRedirectToProject(e, task.projectId!, task.clientId, task.moduleId)}
                                className="text-[9px] font-bold bg-muted hover:bg-muted/80 text-muted-foreground border border-border/50 px-2 py-0.5 rounded-md flex items-center gap-0.5 transition-colors"
                                title="View project workspace"
                              >
                                🔗 Go
                              </button>
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-foreground text-xs leading-tight">{task.title}</h4>
                          <p className="text-[10px] text-muted-foreground mt-1 line-clamp-2 leading-relaxed">{task.description}</p>
                        </div>
                        
                        <div className="flex items-center justify-between border-t border-border/20 pt-2 mt-2">
                          <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold">
                            <Calendar className="w-3.5 h-3.5" />
                            {format(new Date(task.dueDate), "dd/MM/yyyy")}
                          </div>
                          
                          <div className="text-[10px] font-bold text-muted-foreground truncate max-w-[120px]" title={task.assignees.map(a => a.name).join(", ")}>
                            {task.assignees.map(a => a.name).join(", ") || "Unassigned"}
                          </div>
                        </div>
                      </div>
                    ))}

                    {colTasks.length === 0 && (
                      <div className="p-8 text-center text-muted-foreground/30 text-xs font-bold">
                        Drag tasks here
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex-1 bg-card rounded-[2.5rem] border border-border/50 overflow-hidden shadow-sm flex flex-col">
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse">
              <thead className="bg-muted/30 border-b border-border sticky top-0">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Task Details</th>
                  <th className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Due Date</th>
                  <th className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Assignee</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredTasks.map(task => (
                  <tr key={task.id} className="hover:bg-muted/20 transition-colors group cursor-pointer" onClick={() => !inlineEditingTaskId && startInlineEdit(task)}>
                    {inlineEditingTaskId === task.id ? (
                      <>
                        <td className="px-6 py-4">
                          <input 
                            value={inlineTaskTitle} 
                            onChange={(e) => setInlineTaskTitle(e.target.value)} 
                            className="w-full px-2.5 py-1.5 text-xs font-bold border border-border rounded-xl mb-1.5 focus:outline-none font-semibold" 
                          />
                          <input 
                            value={inlineTaskDesc} 
                            onChange={(e) => setInlineTaskDesc(e.target.value)} 
                            className="w-full px-2.5 py-1 text-[10px] text-muted-foreground border border-border rounded-lg focus:outline-none font-medium" 
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <SearchableSelect 
                            value={inlineTaskStatus}
                            onChange={(val) => setInlineTaskStatus(val as TaskStatus)}
                            options={[
                              { label: "Todo", value: "Todo" },
                              { label: "In Progress", value: "In Progress" },
                              { label: "In Review", value: "In Review" },
                              { label: "Done", value: "Done" }
                            ]}
                            className="w-[120px] h-[30px] px-2 text-xs font-semibold bg-card border border-border rounded-xl focus:outline-none"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <SearchableSelect 
                            value={inlineTaskPriority}
                            onChange={(val) => setInlineTaskPriority(val as Priority)}
                            options={[
                              { label: "High", value: "High" },
                              { label: "Medium", value: "Medium" },
                              { label: "Low", value: "Low" }
                            ]}
                            className="w-[100px] h-[30px] px-2 text-xs font-bold border border-border rounded-xl bg-card focus:outline-none"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input 
                            type="date"
                            value={inlineTaskDueDate} 
                            onChange={(e) => setInlineTaskDueDate(e.target.value)} 
                            className="px-2 py-1 text-xs text-foreground/80 border border-border rounded-xl bg-card focus:outline-none font-bold" 
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-xs font-bold text-foreground">
                            {task.assignees.map(a => a.name).join(", ") || "Unassigned"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-end gap-2">
                            <button onClick={() => setInlineEditingTaskId(null)} className="px-2.5 py-1.5 text-xs font-bold text-muted-foreground hover:bg-muted rounded-xl transition-colors">Cancel</button>
                            <button onClick={saveInlineEdit} className="px-3 py-1.5 text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl transition-all">Save</button>
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-foreground text-xs">{task.title}</span>
                            {task.isProjectTask && (
                              <div className="flex items-center gap-1 inline-flex">
                                <span className="text-[9px] font-black bg-primary/10 text-primary border border-primary/25 px-2 py-0.5 rounded-lg uppercase tracking-wider">
                                  Project Task
                                </span>
                                <button
                                  onClick={(e) => handleRedirectToProject(e, task.projectId!, task.clientId, task.moduleId)}
                                  className="text-[9px] font-bold bg-muted hover:bg-muted/80 text-muted-foreground border border-border/50 px-2 py-0.5 rounded-lg flex items-center gap-0.5 transition-colors"
                                  title="View project workspace"
                                >
                                  🔗 Go to Project
                                </button>
                              </div>
                            )}
                          </div>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="text-[10px] text-muted-foreground truncate max-w-[250px] sm:max-w-md mt-0.5 font-medium">{task.description}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="max-w-xs text-xs font-bold leading-normal">{task.description}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-[10px] font-black text-foreground/80 bg-muted px-2.5 py-1 rounded-xl border border-border/40">{task.status}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={cn("text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider inline-block border", getPriorityColor(task.priority))}>
                            {task.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs font-bold text-slate-500">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" /> 
                            {format(new Date(task.dueDate), "dd/MM/yyyy")}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-xs font-bold text-foreground">
                            {task.assignees.map(a => a.name).join(", ") || "Unassigned"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <span className="text-[10px] font-bold text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">Click row to edit</span>
                        </td>
                      </>
                    )}
                  </tr>
                ))}

                {filteredTasks.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                        <CheckCircle2 className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <h3 className="text-sm font-bold text-foreground">No tasks found</h3>
                      <p className="text-xs text-muted-foreground mt-1">Try adjusting your search query.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
