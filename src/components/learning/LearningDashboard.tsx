import React from 'react';
import { useSharedCourses } from '@/hooks/useSharedCourses';
import { 
  GraduationCap, 
  BookOpen, 
  Clock, 
  Award,
  PlayCircle,
  Trophy,
  ArrowRight
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// Helper to parse "1h 30m" or "15m" into minutes
const parseDurationStr = (str: string): number => {
  if (!str) return 0;
  let mins = 0;
  const hMatch = str.match(/(\d+)h/);
  const mMatch = str.match(/(\d+)m/);
  if (hMatch) mins += parseInt(hMatch[1]) * 60;
  if (mMatch) mins += parseInt(mMatch[1]);
  return mins;
};

export function LearningDashboard({ setActive }: { setActive?: (val: string) => void }) {
  const { courses } = useSharedCourses();

  // Metrics calculations
  const totalEnrolled = courses.filter(c => c.progress > 0).length;
  const completedCourses = courses.filter(c => c.progress === 100).length;
  
  const completedMins = courses
    .flatMap(c => c.modules)
    .flatMap(m => m.curriculums)
    .filter(c => c.completed)
    .reduce((acc, c) => acc + parseDurationStr(c.duration), 0);
    
  const totalLearningHours = (completedMins / 60).toFixed(1);

  const avgQuizScore = 85; // Static mock for now, as quiz scores aren't fully persisted per user in the course object

  // Progress Distribution Data
  const notStarted = courses.filter(c => c.progress === 0).length;
  const inProgress = courses.filter(c => c.progress > 0 && c.progress < 100).length;
  
  const pieData = [
    { name: 'Completed', value: completedCourses, color: '#10b981' },
    { name: 'In Progress', value: inProgress, color: '#3b82f6' },
    { name: 'Not Started', value: notStarted, color: '#94a3b8' }
  ];

  // Activity Mock Data
  const activityData = [
    { name: 'Mon', hours: 1.2 },
    { name: 'Tue', hours: 2.5 },
    { name: 'Wed', hours: 0.8 },
    { name: 'Thu', hours: 3.1 },
    { name: 'Fri', hours: 1.5 },
    { name: 'Sat', hours: 4.0 },
    { name: 'Sun', hours: 2.0 },
  ];

  const inProgressCourses = courses.filter(c => c.progress > 0 && c.progress < 100);

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-background">
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black tracking-tight mb-2">Learning Dashboard</h1>
              <p className="text-muted-foreground font-semibold">Track your progress and pick up where you left off.</p>
            </div>
            <button 
              onClick={() => setActive && setActive("/learning/courses")}
              className="px-6 py-2.5 bg-primary/10 text-primary hover:bg-primary/20 font-bold rounded-xl transition-colors flex items-center gap-2"
            >
              Browse Catalog <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-card border border-border/50 rounded-3xl shadow-sm hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              <div>
                <div className="text-3xl font-black">{totalEnrolled}</div>
                <div className="text-sm font-semibold text-muted-foreground mt-1">Enrolled Courses</div>
              </div>
            </div>

            <div className="p-6 bg-card border border-border/50 rounded-3xl shadow-sm hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-green-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6 text-green-500" />
                </div>
              </div>
              <div>
                <div className="text-3xl font-black">{completedCourses}</div>
                <div className="text-sm font-semibold text-muted-foreground mt-1">Completed Courses</div>
              </div>
            </div>

            <div className="p-6 bg-card border border-border/50 rounded-3xl shadow-sm hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-purple-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-purple-500" />
                </div>
              </div>
              <div>
                <div className="text-3xl font-black">{totalLearningHours}h</div>
                <div className="text-sm font-semibold text-muted-foreground mt-1">Total Time Learned</div>
              </div>
            </div>

            <div className="p-6 bg-card border border-border/50 rounded-3xl shadow-sm hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-orange-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
              </div>
              <div>
                <div className="text-3xl font-black">{avgQuizScore}%</div>
                <div className="text-sm font-semibold text-muted-foreground mt-1">Avg Quiz Score</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Main Chart */}
            <div className="lg:col-span-2 p-6 bg-card border border-border/50 rounded-3xl shadow-sm">
              <h2 className="text-xl font-bold mb-6">Learning Activity</h2>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={activityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="text-border/50" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'currentColor' }} className="text-muted-foreground" />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'currentColor' }} className="text-muted-foreground" />
                    <Tooltip 
                      cursor={{ fill: 'var(--primary)', opacity: 0.1 }}
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="hours" fill="var(--primary)" radius={[6, 6, 0, 0]} maxBarSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Distribution Chart */}
            <div className="p-6 bg-card border border-border/50 rounded-3xl shadow-sm flex flex-col">
              <h2 className="text-xl font-bold mb-6">Course Progress</h2>
              <div className="flex-1 flex items-center justify-center relative min-h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData.filter(d => d.value > 0)}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.filter(d => d.value > 0).map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-3xl font-black">{courses.length}</span>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Total</span>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {pieData.map(item => (
                  <div key={item.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="font-semibold text-muted-foreground">{item.name}</span>
                    </div>
                    <span className="font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Continue Learning */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Continue Learning</h2>
              <button 
                onClick={() => setActive && setActive("/learning/my-courses")}
                className="text-sm font-bold text-primary hover:underline"
              >
                View all my courses
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inProgressCourses.length > 0 ? (
                inProgressCourses.slice(0, 3).map(course => (
                  <div key={course.id} className="p-4 bg-card border border-border/50 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col group cursor-pointer" onClick={() => setActive && setActive("/learning/my-courses")}>
                    <div className="aspect-[2/1] rounded-2xl overflow-hidden mb-4 relative">
                      <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                          <PlayCircle className="w-6 h-6 ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold px-2 py-1 bg-primary/10 text-primary rounded-md uppercase tracking-wider">{course.category}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-4 line-clamp-1 group-hover:text-primary transition-colors">{course.title}</h3>
                      <div className="mt-auto">
                        <div className="flex items-center justify-between text-sm font-semibold mb-2">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="text-primary">{course.progress}%</span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{ width: `${course.progress}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-12 flex flex-col items-center justify-center text-center bg-card border border-dashed border-border/60 rounded-3xl">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                    <Trophy className="w-8 h-8 text-muted-foreground/50" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">You're all caught up!</h3>
                  <p className="text-muted-foreground font-semibold mb-6 max-w-sm">You have no courses in progress. Browse the catalog to start something new.</p>
                  <button 
                    onClick={() => setActive && setActive("/learning/courses")}
                    className="px-6 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md"
                  >
                    Browse Catalog
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
