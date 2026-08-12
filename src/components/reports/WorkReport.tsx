import { Briefcase, CheckCircle2, Clock, CheckCircle, Activity, LayoutList } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, Cell, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const taskCompletion = [
  { name: 'Mon', completed: 145, overdue: 12 },
  { name: 'Tue', completed: 156, overdue: 8 },
  { name: 'Wed', completed: 132, overdue: 15 },
  { name: 'Thu', completed: 180, overdue: 5 },
  { name: 'Fri', completed: 165, overdue: 10 },
];

const projectAllocation = [
  { subject: 'Apollo React App', A: 120, fullMark: 150 },
  { subject: 'HRMS Backend', A: 98, fullMark: 150 },
  { subject: 'Marketing Site', A: 86, fullMark: 150 },
  { subject: 'Mobile App', A: 99, fullMark: 150 },
  { subject: 'Internal Tools', A: 85, fullMark: 150 },
  { subject: 'Client Delivery', A: 65, fullMark: 150 },
];

export function WorkReport() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-foreground flex items-center gap-2">
            <Briefcase className="w-8 h-8 text-primary" />
            Project & Work Analytics
          </h1>
          <p className="text-muted-foreground mt-1 text-sm font-medium">
            Analyze operational efficiency, task completion rates, and project time allocation.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-4 py-2.5 bg-card border border-border/50 text-foreground font-bold rounded-xl hover:bg-muted/50 transition-colors shadow-sm outline-none">
            <option>This Week</option>
            <option>Last Week</option>
            <option>This Month</option>
          </select>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>
          </div>
          <div className="text-emerald-600 font-bold text-xs uppercase tracking-wider mb-1">Tasks Completed</div>
          <div className="text-3xl font-black text-emerald-700">778</div>
        </div>

        <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
          </div>
          <div className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">Completion Rate</div>
          <div className="text-3xl font-black text-blue-700">94%</div>
        </div>

        <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <div className="text-amber-600 font-bold text-xs uppercase tracking-wider mb-1">Total Billable Hours</div>
          <div className="text-3xl font-black text-amber-700">1,240</div>
        </div>

        <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center">
              <LayoutList className="w-5 h-5" />
            </div>
          </div>
          <div className="text-rose-600 font-bold text-xs uppercase tracking-wider mb-1">Overdue Tasks</div>
          <div className="text-3xl font-black text-rose-700">50</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        
        {/* Task Completion Trend */}
        <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-sm">
          <h3 className="font-bold flex items-center gap-2 mb-6">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            Daily Task Completion
          </h3>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={taskCompletion} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorOverdue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.5} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '12px', color: 'hsl(var(--foreground))' }}
                />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                <Area type="monotone" dataKey="completed" name="Completed" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorCompleted)" />
                <Area type="monotone" dataKey="overdue" name="Overdue" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorOverdue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Project Allocation Radar */}
        <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-sm flex flex-col">
          <h3 className="font-bold flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-blue-500" />
            Hours by Project
          </h3>
          <div className="flex-grow h-[350px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={projectAllocation}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--foreground))', fontSize: 12, fontWeight: 'bold' }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar name="Hours Logged" dataKey="A" stroke="#3b82f6" strokeWidth={3} fill="#3b82f6" fillOpacity={0.3} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '12px', color: 'hsl(var(--foreground))' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

    </div>
  );
}
