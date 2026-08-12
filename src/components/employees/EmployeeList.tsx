import { useState } from "react";
import { Search, Filter, LayoutGrid, List, MoreVertical, Phone, Mail, Plus, MapPin, Edit2, Trash2 } from "lucide-react";
import { EMPLOYEES, Employee } from "./employee-data";
import { useDepartments } from "./DepartmentContext";
import { EmployeeProfileModal } from "./EmployeeProfileModal";
import { EmployeeFormModal } from "./EmployeeFormModal";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useEmployeesContext } from "./EmployeeContext";

export function EmployeeList() {
  const { employees, addEmployee, updateEmployee, deleteEmployee } = useEmployeesContext();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  
  // Form modal state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  const { departments } = useDepartments();

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          emp.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept ? emp.department === selectedDept : true;
    return matchesSearch && matchesDept;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-emerald-500';
      case 'On Leave': return 'bg-amber-500';
      case 'Remote': return 'bg-blue-500';
      default: return 'bg-muted/500';
    }
  };

  const handleFormSubmit = (formData: Partial<Employee>) => {
    if (editingEmployee) {
      updateEmployee(editingEmployee.id, formData);
      toast.success("Employee updated successfully.");
    } else {
      const newEmployee: Employee = {
        ...(formData as Employee),
        id: `EMP-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
        avatar: `https://i.pravatar.cc/150?u=${formData.name?.split(' ')[0]?.toLowerCase() || 'new'}`,
        performanceScore: 85, // default
      };
      addEmployee(newEmployee);
      toast.success("New employee added.");
    }
    setIsFormOpen(false);
    setEditingEmployee(null);
  };

  const handleDeleteEmployee = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to completely delete ${name} from the company records?`)) {
      deleteEmployee(id);
      toast.success(`${name} has been deleted.`);
    }
  };

  const openAddForm = () => {
    setEditingEmployee(null);
    setIsFormOpen(true);
  };

  const openEditForm = (emp: Employee) => {
    setEditingEmployee(emp);
    setIsFormOpen(true);
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto animate-in fade-in zoom-in-95 duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[28px] font-black text-foreground tracking-tight mb-2">Employee Directory</h1>
          <p className="text-[14px] text-muted-foreground">Manage your team members and their account permissions here.</p>
        </div>
        <button 
          onClick={openAddForm}
          className="flex items-center gap-2 bg-[#00A56C] hover:bg-[#00A56C]/90 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-sm shadow-emerald-500/20 active:scale-95"
        >
          <Plus className="w-4 h-4" />
          Add Employee
        </button>
      </div>

      {/* Filters Bar */}
      <div className="bg-white border border-border/60 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
        <div className="flex w-full md:w-auto flex-1 gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search by name or role..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-muted/50 border-none rounded-xl text-[13px] focus:outline-none focus:ring-2 focus:ring-[#00A56C]/20 transition-all font-medium"
            />
          </div>
          
          <div className="flex gap-2">
            {departments.map(dept => (
              <button 
                key={dept}
                onClick={() => setSelectedDept(selectedDept === dept ? null : dept)}
                className={cn(
                  "px-4 py-2 rounded-xl text-[12px] font-bold transition-all border",
                  selectedDept === dept 
                    ? "bg-[#00A56C] text-white border-[#00A56C]" 
                    : "bg-white text-foreground/80 border-border hover:bg-muted/50"
                )}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1 bg-muted p-1 rounded-xl">
          <button 
            onClick={() => setViewMode('grid')}
            className={cn(
              "p-2 rounded-lg transition-all",
              viewMode === 'grid' ? "bg-white shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={cn(
              "p-2 rounded-lg transition-all",
              viewMode === 'list' ? "bg-white shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEmployees.map((emp) => (
            <div key={emp.id} className="group bg-white border border-border/50 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
              <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => openEditForm(emp)}
                  className="p-2 text-muted-foreground hover:bg-muted hover:text-foreground/80 rounded-full transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleDeleteEmployee(emp.id, emp.name)}
                  className="p-2 text-muted-foreground hover:bg-red-50 hover:text-red-600 rounded-full transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <img src={emp.avatar} alt={emp.name} className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" />
                  <span className={cn(
                    "absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white",
                    getStatusColor(emp.status)
                  )}>
                    {emp.status === 'Active' && <span className="absolute inset-0 rounded-full animate-ping bg-emerald-400 opacity-75"></span>}
                  </span>
                </div>
                
                <h3 className="text-[16px] font-black text-foreground mb-1">{emp.name}</h3>
                <p className="text-[12px] font-medium text-muted-foreground mb-4">{emp.role}</p>
                
                <span className="px-3 py-1 bg-muted/50 text-foreground/80 text-[10px] font-bold uppercase tracking-wider rounded-lg mb-6">
                  {emp.department}
                </span>

                <button 
                  onClick={() => setSelectedEmployee(emp)}
                  className="w-full bg-[#00A56C]/10 text-[#00A56C] hover:bg-[#00A56C]/20 py-2.5 rounded-xl text-[12px] font-bold transition-colors"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {viewMode === 'list' && (
        <div className="bg-white border border-border/60 rounded-3xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/50/50 border-b border-border/50">
                  <th className="px-6 py-4 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Employee</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Department</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Joined</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-muted-foreground uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((emp) => (
                  <tr key={emp.id} className="border-b border-slate-50 hover:bg-muted/50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={emp.avatar} alt={emp.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <p className="text-[14px] font-bold text-foreground">{emp.name}</p>
                          <p className="text-[12px] text-muted-foreground">{emp.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-muted text-foreground/80 text-[10px] font-bold rounded-lg">
                        {emp.department}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className={cn("w-2 h-2 rounded-full", getStatusColor(emp.status))} />
                        <span className="text-[13px] font-medium text-foreground/80">{emp.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1 text-[12px] text-muted-foreground">
                        <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {emp.email}</span>
                        <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {emp.phone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[13px] font-medium text-foreground/80">{emp.joinDate}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => setSelectedEmployee(emp)}
                          className="text-[12px] font-bold text-[#00A56C] hover:text-[#00A56C]/80 px-3 py-1.5 rounded-lg hover:bg-[#00A56C]/10 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          View
                        </button>
                        <button 
                          onClick={() => openEditForm(emp)}
                          className="text-[12px] font-bold text-blue-600 hover:text-blue-800 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {selectedEmployee && (
        <EmployeeProfileModal 
          employee={selectedEmployee} 
          onClose={() => setSelectedEmployee(null)} 
        />
      )}

      {/* Add / Edit Form Modal */}
      <EmployeeFormModal 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleFormSubmit}
        initialData={editingEmployee}
      />
    </div>
  );
}
