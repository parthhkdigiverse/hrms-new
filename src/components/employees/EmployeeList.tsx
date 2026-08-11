import { useState } from "react";
import { Search, Filter, LayoutGrid, List, MoreVertical, Phone, Mail, Plus, MapPin } from "lucide-react";
import { EMPLOYEES, Employee } from "./employee-data";
import { cn } from "@/lib/utils";

export function EmployeeList() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState<string | null>(null);

  const departments = Array.from(new Set(EMPLOYEES.map(emp => emp.department)));

  const filteredEmployees = EMPLOYEES.filter(emp => {
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
      default: return 'bg-slate-500';
    }
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto animate-in fade-in zoom-in-95 duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-2">Employee Directory</h1>
          <p className="text-[14px] text-slate-500">Manage your team members and their account permissions here.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#00A56C] hover:bg-[#00A56C]/90 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-sm shadow-emerald-500/20 active:scale-95">
          <Plus className="w-4 h-4" />
          Add Employee
        </button>
      </div>

      {/* Filters Bar */}
      <div className="bg-white border border-border/60 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
        <div className="flex w-full md:w-auto flex-1 gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name or role..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-[13px] focus:outline-none focus:ring-2 focus:ring-[#00A56C]/20 transition-all font-medium"
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
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                )}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
          <button 
            onClick={() => setViewMode('grid')}
            className={cn(
              "p-2 rounded-lg transition-all",
              viewMode === 'grid' ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-900"
            )}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={cn(
              "p-2 rounded-lg transition-all",
              viewMode === 'list' ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-900"
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
            <div key={emp.id} className="group bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
              <button className="absolute top-4 right-4 p-2 text-slate-400 hover:bg-slate-100 rounded-full transition-colors opacity-0 group-hover:opacity-100">
                <MoreVertical className="w-4 h-4" />
              </button>
              
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
                
                <h3 className="text-[16px] font-black text-slate-900 mb-1">{emp.name}</h3>
                <p className="text-[12px] font-medium text-slate-500 mb-4">{emp.role}</p>
                
                <span className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-lg mb-6">
                  {emp.department}
                </span>

                <div className="flex w-full gap-2 mt-auto">
                  <button className="flex-1 bg-[#00A56C]/10 text-[#00A56C] hover:bg-[#00A56C]/20 py-2.5 rounded-xl text-[12px] font-bold transition-colors">
                    View Profile
                  </button>
                  <button className="p-2.5 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-xl transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
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
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Employee</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Joined</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((emp) => (
                  <tr key={emp.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={emp.avatar} alt={emp.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <p className="text-[14px] font-bold text-slate-900">{emp.name}</p>
                          <p className="text-[12px] text-slate-500">{emp.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-lg">
                        {emp.department}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className={cn("w-2 h-2 rounded-full", getStatusColor(emp.status))} />
                        <span className="text-[13px] font-medium text-slate-700">{emp.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1 text-[12px] text-slate-500">
                        <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {emp.email}</span>
                        <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {emp.phone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[13px] font-medium text-slate-700">{emp.joinDate}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-[12px] font-bold text-[#00A56C] hover:text-[#00A56C]/80 px-3 py-1.5 rounded-lg hover:bg-[#00A56C]/10 transition-colors opacity-0 group-hover:opacity-100">
                        View
                      </button>
                    </td>
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
