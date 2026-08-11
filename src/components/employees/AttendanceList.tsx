import { useState, useMemo } from "react";
import { Search, Filter, Download, MoreHorizontal, CheckCircle2, XCircle, Clock, ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useEmployeesContext } from "./EmployeeContext";

type AttendanceStatus = "Present" | "Absent" | "Late" | "On Leave";

interface AttendanceRecord {
  employeeId: string;
  employeeName: string;
  role: string;
  department: string;
  avatar: string;
  date: string;
  status: AttendanceStatus;
  checkIn: string | null;
  checkOut: string | null;
  totalHours: string | null;
}

export function AttendanceList() {
  const { employees } = useEmployeesContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<AttendanceStatus | "All">("All");
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(new Date().setDate(new Date().getDate() - 7)),
    to: new Date(),
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Generate mock attendance data based on actual employees for the last 7 days
  const attendanceData = useMemo(() => {
    const records: AttendanceRecord[] = [];
    
    for (let i = 0; i < 7; i++) {
      const dateObj = new Date();
      dateObj.setDate(dateObj.getDate() - i);
      const dateStr = dateObj.toISOString().split("T")[0] || "";
      
      // Skip weekends to make it realistic
      if (dateObj.getDay() === 0 || dateObj.getDay() === 6) continue;

      employees.forEach(emp => {
        // Deterministic pseudo-random status based on employee ID and date
        const hash = emp.id.charCodeAt(emp.id.length - 1) + i;
        let status: AttendanceStatus = "Present";
        let checkIn: string | null = "09:00 AM";
        let checkOut: string | null = "05:30 PM";
        let totalHours: string | null = "8.5h";

        if (hash % 10 === 0) {
          status = "Absent";
          checkIn = null;
          checkOut = null;
          totalHours = null;
        } else if (hash % 7 === 0) {
          status = "On Leave";
          checkIn = null;
          checkOut = null;
          totalHours = null;
        } else if (hash % 5 === 0) {
          status = "Late";
          checkIn = "10:15 AM";
          checkOut = "06:00 PM";
          totalHours = "7.75h";
        } else {
          // Randomize check-in times slightly for Present
          const mins = (hash % 15).toString().padStart(2, '0');
          checkIn = `08:${45 + (hash % 15)} AM`;
          if (45 + (hash % 15) >= 60) {
            checkIn = `09:${(45 + (hash % 15) - 60).toString().padStart(2, '0')} AM`;
          }
        }

        records.push({
          employeeId: `${emp.id}-${dateStr}`,
          employeeName: emp.name,
          role: emp.role,
          department: emp.department,
          avatar: emp.avatar || "",
          date: dateStr,
          status,
          checkIn,
          checkOut,
          totalHours
        });
      });
    }
    
    return records;
  }, [employees]);

  const filteredData = useMemo(() => {
    return attendanceData.filter(record => {
      const matchesSearch = record.employeeName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            record.role.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "All" || record.status === statusFilter;
      
      let matchesDate = true;
      if (dateRange?.from) {
        const recordDate = new Date(record.date);
        const fromDate = new Date(dateRange.from);
        fromDate.setHours(0, 0, 0, 0);
        
        if (dateRange.to) {
          const toDate = new Date(dateRange.to);
          toDate.setHours(23, 59, 59, 999);
          matchesDate = recordDate >= fromDate && recordDate <= toDate;
        } else {
          matchesDate = recordDate.getTime() === fromDate.getTime();
        }
      }

      return matchesSearch && matchesStatus && matchesDate;
    });
  }, [attendanceData, searchQuery, statusFilter, dateRange]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage]);

  // Reset page when filters change
  useMemo(() => setCurrentPage(1), [searchQuery, statusFilter, dateRange]);

  const stats = useMemo(() => {
    return {
      present: filteredData.filter(r => r.status === "Present" || r.status === "Late").length,
      absent: filteredData.filter(r => r.status === "Absent").length,
      onLeave: filteredData.filter(r => r.status === "On Leave").length,
      late: filteredData.filter(r => r.status === "Late").length,
    };
  }, [filteredData]);

  const getStatusBadge = (status: AttendanceStatus) => {
    switch (status) {
      case "Present": return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/50"><CheckCircle2 className="w-3.5 h-3.5" /> Present</span>;
      case "Absent": return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200/50"><XCircle className="w-3.5 h-3.5" /> Absent</span>;
      case "Late": return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200/50"><Clock className="w-3.5 h-3.5" /> Late</span>;
      case "On Leave": return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/50"><Clock className="w-3.5 h-3.5" /> On Leave</span>;
    }
  };

  return (
    <div className="h-full flex flex-col space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Daily Attendance</h1>
          <p className="text-sm text-slate-500 mt-1">Past 7 Days</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 shadow-sm flex items-center gap-2">
            <Download className="w-4 h-4" /> Export
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Present", value: stats.present, color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Total Absent", value: stats.absent, color: "text-rose-600", bg: "bg-rose-50" },
          { label: "Late Arrivals", value: stats.late, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "On Leave", value: stats.onLeave, color: "text-blue-600", bg: "bg-blue-50" },
        ].map((stat, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <p className="text-sm font-bold text-slate-500">{stat.label}</p>
            <p className={cn("text-3xl font-black mt-2", stat.color)}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/50">
          <div className="relative w-full sm:w-72">
            <input 
              type="text" 
              placeholder="Search by name or role..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 hover:bg-slate-50 transition-colors",
                    !dateRange && "text-slate-400"
                  )}
                >
                  <CalendarIcon className="mr-1 h-4 w-4" />
                  {dateRange?.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, "LLL dd, y")} -{" "}
                        {format(dateRange.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(dateRange.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange?.from || new Date()}
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
            
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 hide-scrollbar">
              {(["All", "Present", "Absent", "Late", "On Leave"] as const).map(status => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-200",
                    statusFilter === status 
                      ? "bg-slate-900 text-white shadow-md" 
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50/80 sticky top-0 z-10 backdrop-blur-sm">
              <tr>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider border-b border-slate-200">Employee</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider border-b border-slate-200">Date</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider border-b border-slate-200">Status</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider border-b border-slate-200">Check In</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider border-b border-slate-200">Check Out</th>
                <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider border-b border-slate-200">Total Hours</th>
                <th className="px-6 py-4 border-b border-slate-200"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                    No attendance records found matching your filters.
                  </td>
                </tr>
              ) : (
                paginatedData.map((record) => (
                  <tr key={record.employeeId} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={record.avatar} alt={record.employeeName} className="w-10 h-10 rounded-full object-cover border border-slate-200" />
                        <div>
                          <p className="font-bold text-slate-900">{record.employeeName}</p>
                          <p className="text-xs text-slate-500 font-medium">{record.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-slate-700">{record.date}</span>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(record.status)}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-slate-700">{record.checkIn || "--:--"}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-slate-700">{record.checkOut || "--:--"}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "text-sm font-bold",
                        record.totalHours ? "text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md" : "text-slate-400"
                      )}>
                        {record.totalHours || "-"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="p-4 border-t border-slate-200 bg-white flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Showing <span className="font-bold text-slate-900">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-bold text-slate-900">{Math.min(currentPage * itemsPerPage, filteredData.length)}</span> of <span className="font-bold text-slate-900">{filteredData.length}</span> records
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="text-sm font-bold text-slate-700 px-2">
                Page {currentPage} of {totalPages}
              </div>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
