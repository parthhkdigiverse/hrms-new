import { useState } from "react";
import { Search, Plus, Filter, LayoutGrid, List as ListIcon, MoreHorizontal, Calendar, Clock, CheckCircle2, MessageSquare, Paperclip } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
}

const MOCK_TASKS: Task[] = [
  { id: "1", title: "Design System Updates", description: "Update color tokens for dark mode.", status: "In Progress", priority: "High", dueDate: "2026-08-15", assignees: [{ name: "Alex", avatar: "https://i.pravatar.cc/150?u=alex" }, { name: "Sarah", avatar: "https://i.pravatar.cc/150?u=sarah" }], commentsCount: 4, attachmentsCount: 2 },
  { id: "2", title: "API Integration", description: "Connect frontend to new user endpoints.", status: "Todo", priority: "High", dueDate: "2026-08-18", assignees: [{ name: "John", avatar: "https://i.pravatar.cc/150?u=john" }], commentsCount: 0, attachmentsCount: 0 },
  { id: "3", title: "User Testing", description: "Conduct 5 interviews for the new flow.", status: "Todo", priority: "Medium", dueDate: "2026-08-20", assignees: [{ name: "Emily", avatar: "https://i.pravatar.cc/150?u=emily" }], commentsCount: 1, attachmentsCount: 0 },
  { id: "4", title: "Landing Page Copy", description: "Review and approve hero text.", status: "In Review", priority: "Medium", dueDate: "2026-08-14", assignees: [{ name: "Alex", avatar: "https://i.pravatar.cc/150?u=alex" }], commentsCount: 2, attachmentsCount: 1 },
  { id: "5", title: "Setup CI/CD", description: "GitHub actions for auto-deployment.", status: "Done", priority: "Low", dueDate: "2026-08-10", assignees: [{ name: "Michael", avatar: "https://i.pravatar.cc/150?u=michael" }], commentsCount: 0, attachmentsCount: 0 },
];

export function Tasks() {
  const [tasks, setTasks] = useState(MOCK_TASKS);
  const [view, setView] = useState<"board" | "list">("board");
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
    setTasks(tasks.map(t => t.id === inlineEditingTaskId ? {
      ...t,
      title: inlineTaskTitle,
      description: inlineTaskDesc,
      status: inlineTaskStatus,
      priority: inlineTaskPriority,
      dueDate: inlineTaskDueDate
    } : t));
    setInlineEditingTaskId(null);
    toast.success("Task updated!");
  };

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle) {
      toast.error("Task title is required");
      return;
    }
    
    if (editingTaskId) {
      setTasks(tasks.map(t => t.id === editingTaskId ? {
        ...t,
        title: newTaskTitle,
        description: newTaskDesc,
        priority: newTaskPriority,
        dueDate: newTaskDueDate || t.dueDate
      } : t));
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
      setTasks([newTask, ...tasks]);
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
  
  const filteredTasks = tasks.filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const columns: { title: string; status: TaskStatus }[] = [
    { title: "To Do", status: "Todo" },
    { title: "In Progress", status: "In Progress" },
    { title: "In Review", status: "In Review" },
    { title: "Done", status: "Done" },
  ];
  
  const getPriorityColor = (priority: Priority) => {
    switch(priority) {
      case "High": return "bg-rose-100 text-rose-700";
      case "Medium": return "bg-amber-100 text-amber-700";
      case "Low": return "bg-emerald-100 text-emerald-700";
    }
  };

  return (
    <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Tasks</h1>
          <p className="text-sm text-slate-500 mt-1">Manage your team's work and track progress.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search tasks..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
          
          <div className="flex items-center bg-white border border-slate-200 rounded-xl p-1">
            <button 
              onClick={() => setView("board")}
              className={cn("p-1.5 rounded-lg transition-colors", view === "board" ? "bg-indigo-50 text-indigo-600" : "text-slate-400 hover:text-slate-600")}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setView("list")}
              className={cn("p-1.5 rounded-lg transition-colors", view === "list" ? "bg-indigo-50 text-indigo-600" : "text-slate-400 hover:text-slate-600")}
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
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl flex items-center gap-2 transition-colors shadow-sm shrink-0">
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">New Task</span>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{editingTaskId ? "Edit Task" : "Create New Task"}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleCreateTask} className="space-y-4 pt-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Task Title</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Design Logo"
                    value={newTaskTitle}
                    onChange={e => setNewTaskTitle(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Description</label>
                  <textarea 
                    rows={3}
                    placeholder="Task details..."
                    value={newTaskDesc}
                    onChange={e => setNewTaskDesc(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Priority</label>
                    <select
                      value={newTaskPriority}
                      onChange={e => setNewTaskPriority(e.target.value as Priority)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    >
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Due Date</label>
                    <input 
                      type="date" 
                      value={newTaskDueDate}
                      onChange={e => setNewTaskDueDate(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>
                </div>
                <div className="pt-4 flex justify-end gap-3">
                  <button 
                    type="button" 
                    onClick={() => setIsNewTaskOpen(false)}
                    className="px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition-colors"
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
                  className="w-80 flex flex-col bg-slate-50/50 rounded-2xl border border-slate-200 shrink-0"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const taskId = e.dataTransfer.getData('taskId');
                    setTasks(tasks.map(t => t.id === taskId ? { ...t, status: col.status } : t));
                  }}
                >
                  <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                    <h3 className="font-bold text-slate-700">{col.title}</h3>
                    <span className="bg-slate-200 text-slate-600 text-xs font-bold px-2 py-0.5 rounded-full">{colTasks.length}</span>
                  </div>
                  
                  <div className="flex-1 p-3 overflow-y-auto space-y-3">
                    {colTasks.map(task => (
                      <div 
                        key={task.id} 
                        draggable
                        onDragStart={(e) => e.dataTransfer.setData('taskId', task.id)}
                        className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className={cn("text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider", getPriorityColor(task.priority))}>
                            {task.priority}
                          </span>
                          <button 
                            onClick={(e) => { e.stopPropagation(); openEditTask(task); }}
                            className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-slate-700"
                          >
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <h4 className="font-bold text-slate-800 text-sm mb-1 leading-tight">{task.title}</h4>
                        <p className="text-xs text-slate-500 mb-4 line-clamp-2">{task.description}</p>
                        
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center -space-x-2">
                            {task.assignees.map((a, i) => (
                              <img key={i} src={a.avatar} alt={a.name} className="w-6 h-6 rounded-full border-2 border-white" title={a.name} />
                            ))}
                          </div>
                          
                          <div className="flex items-center gap-3 text-slate-400">
                            {task.commentsCount > 0 && (
                              <div className="flex items-center gap-1 text-xs font-medium">
                                <MessageSquare className="w-3 h-3" /> {task.commentsCount}
                              </div>
                            )}
                            {task.attachmentsCount > 0 && (
                              <div className="flex items-center gap-1 text-xs font-medium">
                                <Paperclip className="w-3 h-3" /> {task.attachmentsCount}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex-1 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-200 sticky top-0">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Task</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Due Date</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Assignee</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredTasks.map(task => (
                  <tr key={task.id} className="hover:bg-slate-50/50 transition-colors group cursor-pointer" onClick={() => !inlineEditingTaskId && startInlineEdit(task)}>
                    {inlineEditingTaskId === task.id ? (
                      <>
                        <td className="px-6 py-4">
                          <input 
                            value={inlineTaskTitle} 
                            onChange={(e) => setInlineTaskTitle(e.target.value)} 
                            className="w-full px-2 py-1 text-sm font-bold border border-slate-200 rounded mb-1 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none" 
                          />
                          <input 
                            value={inlineTaskDesc} 
                            onChange={(e) => setInlineTaskDesc(e.target.value)} 
                            className="w-full px-2 py-1 text-xs text-slate-500 border border-slate-200 rounded focus:ring-2 focus:ring-indigo-500/20 focus:outline-none" 
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select 
                            value={inlineTaskStatus}
                            onChange={(e) => setInlineTaskStatus(e.target.value as TaskStatus)}
                            className="px-2 py-1 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-md focus:outline-none"
                          >
                            <option value="Todo">Todo</option>
                            <option value="In Progress">In Progress</option>
                            <option value="In Review">In Review</option>
                            <option value="Done">Done</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select 
                            value={inlineTaskPriority}
                            onChange={(e) => setInlineTaskPriority(e.target.value as Priority)}
                            className="px-2 py-1 text-xs font-bold border border-slate-200 rounded-md bg-white focus:outline-none"
                          >
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input 
                            type="date"
                            value={inlineTaskDueDate} 
                            onChange={(e) => setInlineTaskDueDate(e.target.value)} 
                            className="px-2 py-1 text-sm text-slate-600 border border-slate-200 rounded bg-white focus:outline-none" 
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center -space-x-2">
                            {task.assignees.map((a, i) => (
                              <img key={i} src={a.avatar} alt={a.name} className="w-7 h-7 rounded-full border-2 border-white shadow-sm" title={a.name} />
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-end gap-2">
                            <button onClick={() => setInlineEditingTaskId(null)} className="px-2 py-1 text-xs font-bold text-slate-500 hover:bg-slate-200 rounded transition-colors">Cancel</button>
                            <button onClick={saveInlineEdit} className="px-2 py-1 text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700 rounded transition-colors">Save</button>
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-6 py-4">
                          <div className="font-bold text-slate-900 text-sm mb-0.5">{task.title}</div>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="text-xs text-slate-500 truncate max-w-[250px] sm:max-w-md">{task.description}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="max-w-xs text-sm">{task.description}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">{task.status}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={cn("text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider inline-block", getPriorityColor(task.priority))}>
                            {task.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 flex items-center gap-1.5 pt-6">
                          <Calendar className="w-3.5 h-3.5" /> {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center -space-x-2">
                            {task.assignees.map((a, i) => (
                              <img key={i} src={a.avatar} alt={a.name} className="w-7 h-7 rounded-full border-2 border-white shadow-sm" title={a.name} />
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <span className="text-xs font-medium text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">Click row to edit</span>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
