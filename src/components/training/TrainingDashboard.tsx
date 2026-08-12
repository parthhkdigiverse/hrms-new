import { useState } from "react";
import { 
  BookOpen, Clock, CheckCircle2, PlayCircle, Star, Search, Filter, 
  ArrowRight, LayoutDashboard, Library, GraduationCap, Award, 
  Trophy, BarChart3, Users, Settings, Shield, Plus, Download,
  QrCode
} from "lucide-react";

const mockCourses = [
  { id: "course-1", title: "Digital Marketing Mastery", category: "Marketing · Intermediate", progress: 64, status: "In Progress", duration: "8h 40m", thumbnail: "bg-blue-500", modules: 12, completedModules: 7, learners: 148, rating: 4.8 },
  { id: "course-2", title: "HRMS Usage Essentials", category: "Operations · Beginner", progress: 40, status: "In Progress", duration: "1h 30m", thumbnail: "bg-purple-500", modules: 5, completedModules: 2, learners: 289, rating: 4.5 },
  { id: "course-3", title: "React & Modern Frontend", category: "Engineering · Advanced", progress: 22, status: "In Progress", duration: "14h 20m", thumbnail: "bg-rose-500", modules: 15, completedModules: 3, learners: 96, rating: 4.9 },
  { id: "course-4", title: "Information Security & Data Privacy", category: "Compliance · Beginner", progress: 15, status: "In Progress", duration: "1h 45m", thumbnail: "bg-emerald-500", modules: 4, completedModules: 1, learners: 341, rating: 4.3 },
  { id: "course-5", title: "Intern Bootcamp 2026", category: "Onboarding · Beginner", progress: 8, status: "In Progress", duration: "22h 00m", thumbnail: "bg-amber-500", modules: 20, completedModules: 2, learners: 38, rating: 4.4 },
  { id: "course-6", title: "Leadership & People Management", category: "Leadership · Advanced", progress: 45, status: "In Progress", duration: "9h 15m", thumbnail: "bg-indigo-500", modules: 10, completedModules: 4, learners: 27, rating: 4.8 },
  { id: "course-7", title: "HR Policy & Code of Conduct", category: "Human Resources · Beginner", progress: 100, status: "Completed", duration: "2h 10m", thumbnail: "bg-slate-500", modules: 3, completedModules: 3, learners: 312, rating: 4.6 },
  { id: "course-8", title: "Brand Guidelines & Design Systems", category: "Design · Intermediate", progress: 0, status: "Not Started", duration: "6h 05m", thumbnail: "bg-pink-500", modules: 6, completedModules: 0, learners: 54, rating: 4.7 }
];

const certificates = [
  { id: "cert-1", title: "HR Policy & Code of Conduct", score: 96, date: "04 Mar 2026", instructor: "Priya Nair", certNo: "HKD-LMS-2026-0412" },
  { id: "cert-2", title: "HRMS Usage Essentials", score: 91, date: "22 Mar 2026", instructor: "Rahul Sharma", certNo: "HKD-LMS-2026-0518" },
  { id: "cert-3", title: "Information Security & Data Privacy", score: 88, date: "11 Apr 2026", instructor: "Arjun Verma", certNo: "HKD-LMS-2026-0733" },
  { id: "cert-4", title: "Client Communication Excellence", score: 94, date: "02 Jun 2026", instructor: "Kavita Deshmukh", certNo: "HKD-LMS-2026-0901" },
  { id: "cert-5", title: "Analytics Foundations", score: 89, date: "27 Jun 2026", instructor: "Ananya Rao", certNo: "HKD-LMS-2026-1044" }
];

export function TrainingDashboard({ active, setActive }: { active: string, setActive: (url: string) => void }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = mockCourses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  let internalTab = "Dashboard";
  if (active === "/learn/courses") internalTab = "Courses";
  if (active === "/learn/my-learning") internalTab = "My Learning";
  if (active === "/learn/certificates") internalTab = "Certificates";
  if (active === "/learn/leaderboard") internalTab = "Leaderboard";
  if (active === "/learn/analytics") internalTab = "Analytics";
  if (active === "/learn/ceo-dashboard") internalTab = "CEO Dashboard";
  if (active === "/learn/assignment") internalTab = "Course Assignment";
  if (active === "/learn/audit") internalTab = "Roles & Audit";

  return (
    <div className="w-full max-w-[1500px] mx-auto animate-in fade-in duration-500 pb-12">
      
      {/* MAIN CONTENT AREA */}
      <div className="w-full space-y-8">
        
        {/* === VIEW: DASHBOARD === */}
        {internalTab === "Dashboard" && (
          <>
            {/* Header */}
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-black tracking-tight text-foreground flex items-center gap-2">
                Good morning, Aditya.
              </h1>
              <p className="text-muted-foreground text-sm font-medium">
                You are 74% through your assigned learning path. Two deadlines land this week.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Total Courses</div>
                <div className="text-2xl font-black text-foreground">42</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Curriculums</div>
                <div className="text-2xl font-black text-foreground">18</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-primary font-black text-[10px] uppercase tracking-widest mb-1">Assigned</div>
                <div className="text-2xl font-black text-primary">9</div>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 shadow-sm">
                <div className="text-emerald-600 font-black text-[10px] uppercase tracking-widest mb-1">Completed</div>
                <div className="text-2xl font-black text-emerald-700 dark:text-emerald-400">5 <span className="text-[10px] text-emerald-600 ml-1">+2 this month</span></div>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 shadow-sm">
                <div className="text-amber-600 font-black text-[10px] uppercase tracking-widest mb-1">Pending</div>
                <div className="text-2xl font-black text-amber-700 dark:text-amber-400">4 <span className="text-[10px] text-amber-600 ml-1">2 due this week</span></div>
              </div>
              <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4 shadow-sm">
                <div className="text-indigo-600 font-black text-[10px] uppercase tracking-widest mb-1">Learning Hrs</div>
                <div className="text-2xl font-black text-indigo-700 dark:text-indigo-400">68.5 <span className="text-[10px] text-indigo-600 ml-1">+6.4h</span></div>
              </div>
            </div>

            {/* Detailed Progress Grid */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div className="xl:col-span-2 bg-card border border-border/50 rounded-2xl p-6 shadow-sm flex items-center justify-between">
                <div>
                  <h3 className="font-black text-lg mb-2">Learning Path Progress</h3>
                  <p className="text-sm font-medium text-muted-foreground max-w-sm mb-4">5 of 9 assigned courses completed. Keep going to unlock the Performance Marketing certification.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-amber-500/10 text-amber-600 text-xs font-bold rounded">12 day streak</span>
                    <span className="px-2 py-1 bg-emerald-500/10 text-emerald-600 text-xs font-bold rounded">Rank #4</span>
                  </div>
                </div>
                <div className="w-24 h-24 rounded-full border-8 border-primary/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-8 border-primary" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 74%, 0 74%)' }} />
                  <span className="text-xl font-black text-primary z-10">74%</span>
                </div>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <h3 className="font-black text-emerald-700 dark:text-emerald-400">Certificates Earned</h3>
                <div className="text-5xl font-black text-emerald-600">5</div>
              </div>

              <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <h3 className="font-black text-foreground">Quiz Average</h3>
                <div className="text-5xl font-black text-primary">86%</div>
              </div>
            </div>

            {/* Recent Activity Bar */}
            <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm font-bold">Last learning activity: <span className="text-primary cursor-pointer hover:underline">Meta Ads · Audience architecture</span></span>
                <span className="text-xs text-muted-foreground font-medium">— 2h ago</span>
              </div>
              <button 
                onClick={() => setActive('/learn/course/course-1')}
                className="px-4 py-1.5 bg-primary text-primary-foreground font-bold text-sm rounded-lg hover:opacity-90 transition-opacity"
              >
                Resume
              </button>
            </div>
            
            {/* Charts Section Mockup */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-card border border-border/50 rounded-2xl p-6 h-64 flex flex-col items-center justify-center text-muted-foreground text-sm font-medium">
                <BarChart3 className="w-8 h-8 mb-2 opacity-50" />
                Weekly Learning Hours Chart
              </div>
              <div className="bg-card border border-border/50 rounded-2xl p-6 h-64 flex flex-col items-center justify-center text-muted-foreground text-sm font-medium">
                <BarChart3 className="w-8 h-8 mb-2 opacity-50" />
                Monthly Completion Chart
              </div>
            </div>
          </>
        )}


        {/* === VIEW: COURSES (CATALOGUE) === */}
        {internalTab === "Courses" && (
          <>
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
              <div>
                <h1 className="text-2xl font-black tracking-tight text-foreground">Course Catalogue</h1>
                <p className="text-muted-foreground mt-1 text-sm font-medium">
                  Create unlimited courses with thumbnails, banners, versioning, owners and multi-module curriculums.
                </p>
              </div>
              <button className="px-4 py-2 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity shadow-sm flex items-center gap-2 text-sm">
                <Plus className="w-4 h-4" /> New course
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3 bg-muted/30 p-3 rounded-2xl border border-border/50">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="text" placeholder="Search course or tag..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-9 pr-4 py-2 bg-background border border-border/50 rounded-lg text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none shadow-sm" />
              </div>
              <select className="px-3 py-2 bg-background border border-border/50 rounded-lg text-sm font-medium shadow-sm outline-none">
                <option>All departments</option>
              </select>
              <select className="px-3 py-2 bg-background border border-border/50 rounded-lg text-sm font-medium shadow-sm outline-none">
                <option>All categories</option>
              </select>
              <button className="text-sm font-bold text-muted-foreground hover:text-foreground px-2">Reset</button>
              <span className="text-xs font-bold text-muted-foreground ml-auto">Showing {filteredCourses.length} of {mockCourses.length} courses</span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredCourses.map((course) => (
                <div key={course.id} onClick={() => setActive(`/learn/course/${course.id}`)} className="group bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col">
                  <div className={`h-32 ${course.thumbnail} relative p-4 flex flex-col justify-between`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                    <span className="relative z-10 self-start px-2 py-1 bg-white/20 backdrop-blur-md rounded text-[10px] font-black uppercase text-white shadow-sm border border-white/20">
                      {course.category.split('·')[0]?.trim()}
                    </span>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-black text-foreground text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">{course.title}</h3>
                    <p className="text-[10px] font-bold text-muted-foreground mb-4 uppercase tracking-wider">{course.category}</p>
                    
                    <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground mb-4">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.duration}</span>
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {course.learners}</span>
                      <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-500" /> {course.rating}</span>
                    </div>

                    <div className="mt-auto">
                      {course.progress > 0 ? (
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[10px] font-bold">
                            <span className={course.progress === 100 ? 'text-emerald-500' : 'text-primary'}>{course.status}</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-muted/50 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${course.progress === 100 ? 'bg-emerald-500' : 'bg-primary'}`} style={{ width: `${course.progress}%` }} />
                          </div>
                        </div>
                      ) : (
                        <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Not Started</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}


        {/* === VIEW: MY LEARNING === */}
        {internalTab === "My Learning" && (
          <>
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-black tracking-tight text-foreground">My Learning</h1>
            </div>
            
            <div className="flex gap-4 border-b border-border/50 mb-6">
              <button className="px-4 py-2 border-b-2 border-primary text-primary font-bold text-sm">Continue</button>
              <button className="px-4 py-2 border-b-2 border-transparent text-muted-foreground hover:text-foreground font-bold text-sm transition-colors">Assigned</button>
              <button className="px-4 py-2 border-b-2 border-transparent text-muted-foreground hover:text-foreground font-bold text-sm transition-colors">Completed</button>
            </div>

            <div className="space-y-4">
              {mockCourses.filter(c => c.progress > 0 && c.progress < 100).map(course => (
                <div key={course.id} className="bg-card border border-border/50 rounded-xl p-4 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActive(`/learn/course/${course.id}`)}>
                  <div className={`w-full md:w-48 h-24 ${course.thumbnail} rounded-lg shrink-0 relative overflow-hidden flex items-center justify-center`}>
                    <PlayCircle className="w-8 h-8 text-white/50" />
                  </div>
                  <div className="flex-1 w-full space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 bg-primary/10 text-primary rounded">{course.category.split('·')[0]?.trim()}</span>
                    </div>
                    <h3 className="font-black text-lg text-foreground">{course.title}</h3>
                    <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {course.duration}</span>
                      <span>{course.completedModules} of {course.modules} modules complete</span>
                    </div>
                  </div>
                  <div className="w-full md:w-48 shrink-0 flex flex-col gap-2">
                    <div className="flex justify-between text-xs font-bold text-primary">
                      <span>In Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${course.progress}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}


        {/* === VIEW: CERTIFICATES === */}
        {internalTab === "Certificates" && (
          <>
            <div className="mb-6">
              <h1 className="text-2xl font-black tracking-tight text-foreground">Certificates</h1>
              <p className="text-muted-foreground mt-1 text-sm font-medium">
                Every completed course auto-generates a numbered certificate with QR verification.
              </p>
            </div>

            <div className="grid gap-4 grid-cols-2 md:grid-cols-4 mb-8">
              <div className="bg-card border border-border/50 rounded-xl p-5 text-center shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Earned</div>
                <div className="text-3xl font-black text-emerald-600">5</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-5 text-center shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Average Score</div>
                <div className="text-3xl font-black text-primary">92%</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-5 text-center shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">This Year</div>
                <div className="text-3xl font-black text-indigo-600">5</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-5 text-center shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Verification</div>
                <div className="text-xl mt-1 font-black text-foreground flex items-center justify-center gap-1"><QrCode className="w-5 h-5"/> QR</div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {certificates.map(cert => (
                <div key={cert.id} className="bg-card border border-border/50 rounded-2xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                    <Award className="w-24 h-24" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded mb-3 inline-block">Score: {cert.score}%</span>
                    <h3 className="font-black text-lg text-foreground mb-1 pr-12 line-clamp-2">{cert.title}</h3>
                    <p className="text-xs font-bold text-muted-foreground mb-4">Completed: {cert.date}</p>
                    
                    <div className="space-y-1 text-xs font-medium text-muted-foreground">
                      <p>Instructor: <span className="font-bold text-foreground">{cert.instructor}</span></p>
                      <p>Cert No: <span className="font-mono">{cert.certNo}</span></p>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-2">
                    <button className="flex-1 py-2 bg-background border border-border/50 rounded-lg text-sm font-bold hover:bg-muted transition-colors flex justify-center items-center gap-2">
                      <Download className="w-4 h-4" /> PDF
                    </button>
                    <button className="flex-1 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-bold hover:bg-primary/20 transition-colors">
                      Verify
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* === VIEW: LEADERBOARD === */}
        {internalTab === "Leaderboard" && (
          <>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-black tracking-tight text-foreground">Leaderboard</h1>
                <p className="text-muted-foreground mt-1 text-sm font-medium">Points, XP, levels, badges and challenges that keep learning competitive.</p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4 mb-8">
              <div className="bg-card border border-border/50 rounded-xl p-5 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Your XP</div>
                <div className="text-3xl font-black text-primary">9,880</div>
                <div className="text-[10px] font-bold text-emerald-600 mt-2">+740 this week</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-5 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Level</div>
                <div className="text-3xl font-black text-foreground">11</div>
                <div className="text-[10px] font-bold text-muted-foreground mt-2">1,120 XP to level 12</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-5 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Rank</div>
                <div className="text-3xl font-black text-foreground">#4</div>
                <div className="text-[10px] font-bold text-muted-foreground mt-2">of 412 learners</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-5 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Streak</div>
                <div className="text-3xl font-black text-amber-600">12d</div>
                <div className="text-[10px] font-bold text-muted-foreground mt-2">best 19d</div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Leaderboard Table */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="font-black text-lg">Top Learners</h3>
                <div className="bg-card border border-border/50 rounded-2xl shadow-sm overflow-hidden">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-muted/30 text-muted-foreground">
                      <tr>
                        <th className="px-4 py-3 font-bold">Rank</th>
                        <th className="px-4 py-3 font-bold">Learner</th>
                        <th className="px-4 py-3 font-bold">Department</th>
                        <th className="px-4 py-3 font-bold">Stats</th>
                        <th className="px-4 py-3 font-bold text-right">XP</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                      {[
                        { rank: 1, name: "Sneha Pillai", dept: "Operations", level: 14, hours: "96h", badges: 18, xp: "12,840" },
                        { rank: 2, name: "Vikram Iyer", dept: "Engineering", level: 13, hours: "88h", badges: 16, xp: "11,920" },
                        { rank: 3, name: "Meera Kapoor", dept: "Design", level: 12, hours: "79h", badges: 15, xp: "10,450" },
                        { rank: 4, name: "You · Aditya Menon", dept: "Marketing", level: 11, hours: "68h", badges: 13, xp: "9,880", isMe: true },
                        { rank: 5, name: "Rahul Sharma", dept: "Operations", level: 11, hours: "64h", badges: 12, xp: "9,120" },
                      ].map(user => (
                        <tr key={user.rank} className={user.isMe ? 'bg-primary/5' : 'hover:bg-muted/30'}>
                          <td className="px-4 py-3 font-black text-muted-foreground">#{user.rank}</td>
                          <td className="px-4 py-3 font-bold">
                            {user.name}
                            <div className="text-[10px] text-muted-foreground mt-0.5">Level {user.level}</div>
                          </td>
                          <td className="px-4 py-3 text-muted-foreground">{user.dept}</td>
                          <td className="px-4 py-3 text-xs text-muted-foreground">{user.hours} · {user.badges} badges</td>
                          <td className="px-4 py-3 font-black text-primary text-right">{user.xp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Side Panels */}
              <div className="space-y-6">
                <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-black text-lg mb-4">Department Race</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Human Resources", stat: "93%", hours: "152h", color: "bg-emerald-500" },
                      { name: "Operations", stat: "88%", hours: "231h", color: "bg-primary" },
                      { name: "Engineering", stat: "78%", hours: "412h", color: "bg-primary" },
                      { name: "Marketing", stat: "71%", hours: "286h", color: "bg-primary" },
                      { name: "Sales", stat: "54%", hours: "198h", color: "bg-amber-500" },
                    ].map(d => (
                      <div key={d.name} className="space-y-1">
                        <div className="flex justify-between text-xs font-bold">
                          <span>{d.name}</span>
                          <span>{d.stat} · {d.hours}</span>
                        </div>
                        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                          <div className={`h-full ${d.color}`} style={{ width: d.stat }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-black text-primary text-lg mb-4">Current Challenges</h3>
                  <div className="space-y-3">
                    <div className="bg-background border border-border/50 rounded-xl p-3">
                      <div className="text-xs font-bold mb-1">Weekly Challenge</div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Complete 3 lessons before Sunday</p>
                      <div className="text-[10px] font-black uppercase text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded inline-block">+250 XP</div>
                    </div>
                    <div className="bg-background border border-border/50 rounded-xl p-3">
                      <div className="text-xs font-bold mb-1">Monthly Challenge</div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Finish Digital Marketing Mastery</p>
                      <div className="text-[10px] font-black uppercase text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded inline-block">+1,500 XP</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* === VIEW: ANALYTICS === */}
        {internalTab === "Analytics" && (
          <>
            <div className="mb-6">
              <h1 className="text-2xl font-black tracking-tight text-foreground">Learning analytics</h1>
              <p className="text-muted-foreground mt-1 text-sm font-medium">Every learning activity is tracked — watch time, skipped time, session length, scores and streaks.</p>
            </div>
            
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-6 mb-8">
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Active Learners</div>
                <div className="text-2xl font-black text-foreground">412</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Avg Completion</div>
                <div className="text-2xl font-black text-foreground">71%</div>
                <div className="text-[10px] font-bold text-emerald-600 mt-1">+6% vs last month</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Watch Time</div>
                <div className="text-2xl font-black text-foreground">1,642h</div>
                <div className="text-[10px] font-bold text-muted-foreground mt-1">this month</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Skipped Time</div>
                <div className="text-2xl font-black text-foreground">38h</div>
                <div className="text-[10px] font-bold text-amber-600 mt-1">2.3% of total</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Avg Session</div>
                <div className="text-2xl font-black text-foreground">26m</div>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 shadow-sm">
                <div className="text-emerald-700 dark:text-emerald-400 font-black text-[10px] uppercase tracking-widest mb-1">Avg Quiz Score</div>
                <div className="text-2xl font-black text-emerald-600">83%</div>
              </div>
            </div>

            <div className="bg-card border border-border/50 rounded-2xl shadow-sm overflow-hidden mb-8">
              <div className="flex gap-4 p-4 border-b border-border/50 bg-muted/30">
                <button className="px-4 py-2 bg-background border border-border/50 text-foreground font-bold text-sm rounded-lg shadow-sm">Per employee</button>
                <button className="px-4 py-2 text-muted-foreground hover:text-foreground font-bold text-sm transition-colors">Per course</button>
                <button className="px-4 py-2 text-muted-foreground hover:text-foreground font-bold text-sm transition-colors">Per department</button>
              </div>
              <table className="w-full text-sm text-left">
                <thead className="bg-muted/10 text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 font-bold">Learner</th>
                    <th className="px-4 py-3 font-bold">Department</th>
                    <th className="px-4 py-3 font-bold">Completion</th>
                    <th className="px-4 py-3 font-bold">Watch Time</th>
                    <th className="px-4 py-3 font-bold">Quiz Avg</th>
                    <th className="px-4 py-3 font-bold">Streak</th>
                    <th className="px-4 py-3 font-bold">Last Active</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  <tr className="hover:bg-muted/30">
                    <td className="px-4 py-3 font-bold">Aditya Menon <span className="ml-2 text-[10px] font-black uppercase bg-primary/10 text-primary px-1.5 py-0.5 rounded">Employee</span></td>
                    <td className="px-4 py-3 text-muted-foreground">Marketing</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-16 bg-muted rounded-full overflow-hidden"><div className="h-full bg-primary w-[74%]" /></div>
                        <span className="font-bold">74%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">68h 30m</td>
                    <td className="px-4 py-3 font-bold text-emerald-600">86%</td>
                    <td className="px-4 py-3 text-amber-600 font-bold">12d</td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">2h ago</td>
                  </tr>
                  <tr className="hover:bg-muted/30">
                    <td className="px-4 py-3 font-bold">Dev Rathore <span className="ml-2 text-[10px] font-black uppercase bg-amber-500/10 text-amber-600 px-1.5 py-0.5 rounded">Intern</span></td>
                    <td className="px-4 py-3 text-muted-foreground">Sales</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-16 bg-muted rounded-full overflow-hidden"><div className="h-full bg-amber-500 w-[12%]" /></div>
                        <span className="font-bold">12%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">2h 15m</td>
                    <td className="px-4 py-3 font-bold text-amber-600">45%</td>
                    <td className="px-4 py-3 text-muted-foreground font-bold">0d</td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">3 days ago</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-card border border-border/50 rounded-2xl p-6 h-64 flex flex-col items-center justify-center text-muted-foreground text-sm font-medium">
              <BarChart3 className="w-8 h-8 mb-2 opacity-50" />
              Weekly learning hours chart will load here
            </div>
          </>
        )}

        {/* === VIEW: CEO DASHBOARD === */}
        {internalTab === "CEO Dashboard" && (
          <>
            <div className="mb-6">
              <h1 className="text-2xl font-black tracking-tight text-foreground">Executive / Company learning KPIs</h1>
              <p className="text-muted-foreground mt-1 text-sm font-medium">How HK DigiVerse is learning this quarter — enrolment, completion, effectiveness and ROI.</p>
            </div>
            
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-6">
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Enrolled</div>
                <div className="text-xl font-black text-foreground">412</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Assigned</div>
                <div className="text-xl font-black text-foreground">1,284</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Completed</div>
                <div className="text-xl font-black text-emerald-600">913</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Pending</div>
                <div className="text-xl font-black text-amber-600">371</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Avg Completion</div>
                <div className="text-xl font-black text-foreground">71%</div>
                <div className="text-[10px] font-bold text-emerald-600">+6%</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Avg Quiz Score</div>
                <div className="text-xl font-black text-primary">83%</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Hours This Mth</div>
                <div className="text-xl font-black text-foreground">1,642</div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 shadow-sm">
                <div className="text-primary font-black text-[10px] uppercase tracking-widest mb-1">Course Effectiveness</div>
                <div className="text-2xl font-black text-primary">78% effective</div>
                <p className="text-xs font-medium text-muted-foreground mt-2">Post-training assessment lift</p>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 shadow-sm">
                <div className="text-emerald-700 dark:text-emerald-400 font-black text-[10px] uppercase tracking-widest mb-1">Training ROI</div>
                <div className="text-2xl font-black text-emerald-600">3.4x</div>
                <p className="text-xs font-medium text-muted-foreground mt-2">Value returned per ₹1 invested</p>
              </div>
              <div className="bg-card border border-border/50 rounded-2xl p-5 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Most Active Learner</div>
                <div className="text-lg font-black text-foreground line-clamp-1 mt-1">Sneha Pillai</div>
                <div className="text-sm font-bold text-primary mt-1">96h</div>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5 shadow-sm">
                <div className="text-amber-700 dark:text-amber-400 font-black text-[10px] uppercase tracking-widest mb-1">Least Active Learner</div>
                <div className="text-lg font-black text-foreground line-clamp-1 mt-1">Dev Rathore</div>
                <div className="text-sm font-bold text-amber-600 mt-1">2h <span className="text-[10px] text-amber-700 uppercase ml-2 bg-amber-500/20 px-1.5 py-0.5 rounded">Needs intervention</span></div>
              </div>
            </div>

            <div className="bg-card border border-border/50 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-4 border-b border-border/50">
                <h3 className="font-black text-lg">Upcoming deadlines (Mandatory tracks)</h3>
              </div>
              <table className="w-full text-sm text-left">
                <thead className="bg-muted/10 text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 font-bold">Course</th>
                    <th className="px-4 py-3 font-bold">Audience</th>
                    <th className="px-4 py-3 font-bold">Due</th>
                    <th className="px-4 py-3 font-bold">Pending learners</th>
                    <th className="px-4 py-3 font-bold">Risk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  <tr className="hover:bg-muted/30">
                    <td className="px-4 py-3 font-bold">Information Security & Data Privacy</td>
                    <td className="px-4 py-3 text-muted-foreground">Company wide</td>
                    <td className="px-4 py-3 font-bold text-amber-600">31 Jul 2026</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-24 bg-muted rounded-full overflow-hidden"><div className="h-full bg-amber-500 w-[60%]" /></div>
                        <span className="font-bold text-xs">168</span>
                      </div>
                    </td>
                    <td className="px-4 py-3"><span className="text-[10px] font-black uppercase bg-rose-500/10 text-rose-600 px-2 py-0.5 rounded">High</span></td>
                  </tr>
                  <tr className="hover:bg-muted/30">
                    <td className="px-4 py-3 font-bold">Digital Marketing Mastery</td>
                    <td className="px-4 py-3 text-muted-foreground">Marketing dept</td>
                    <td className="px-4 py-3 font-bold">12 Aug 2026</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-24 bg-muted rounded-full overflow-hidden"><div className="h-full bg-primary w-[30%]" /></div>
                        <span className="font-bold text-xs">41</span>
                      </div>
                    </td>
                    <td className="px-4 py-3"><span className="text-[10px] font-black uppercase bg-amber-500/10 text-amber-600 px-2 py-0.5 rounded">Medium</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* === VIEW: COURSE ASSIGNMENT === */}
        {internalTab === "Course Assignment" && (
          <>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-2xl font-black tracking-tight text-foreground">Assignment & automation rules</h1>
                <p className="text-muted-foreground mt-1 text-sm font-medium">Employees only see courses assigned to them. Rules fire automatically during onboarding.</p>
              </div>
              <button className="px-4 py-2 bg-emerald-600 text-white font-bold text-sm rounded-lg hover:bg-emerald-700 transition-colors shadow-sm flex items-center gap-2">
                <Plus className="w-4 h-4" /> New rule
              </button>
            </div>

            <div className="grid gap-4 grid-cols-2 md:grid-cols-4 mb-8">
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Active Rules</div>
                <div className="text-2xl font-black text-foreground">4</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Assignments This Month</div>
                <div className="text-2xl font-black text-foreground">186</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-primary font-black text-[10px] uppercase tracking-widest mb-1">Auto-assigned</div>
                <div className="text-2xl font-black text-primary">142</div>
                <div className="text-[10px] font-bold text-muted-foreground mt-1">76% of total</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Manual</div>
                <div className="text-2xl font-black text-foreground">44</div>
              </div>
            </div>

            <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm mb-8">
              <h3 className="font-black text-lg mb-1">Assign a course</h3>
              <p className="text-muted-foreground text-sm font-medium mb-4">Pick a course and target audience</p>
              
              <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1 space-y-1.5 w-full">
                  <label className="text-xs font-bold text-foreground">Course</label>
                  <select className="w-full px-3 py-2 bg-background border border-border/50 rounded-lg text-sm font-medium shadow-sm outline-none">
                    <option>Digital Marketing Mastery</option>
                  </select>
                </div>
                <div className="flex-1 space-y-1.5 w-full">
                  <label className="text-xs font-bold text-foreground">Audience</label>
                  <select className="w-full px-3 py-2 bg-background border border-border/50 rounded-lg text-sm font-medium shadow-sm outline-none">
                    <option>Entire company</option>
                    <option>Marketing Department</option>
                  </select>
                </div>
                <div className="flex-1 space-y-1.5 w-full">
                  <label className="text-xs font-bold text-foreground">Deadline</label>
                  <select className="w-full px-3 py-2 bg-background border border-border/50 rounded-lg text-sm font-medium shadow-sm outline-none">
                    <option>30 days from assignment</option>
                  </select>
                </div>
                <button className="px-6 py-2.5 bg-emerald-600 text-white font-bold rounded-lg shadow-sm hover:bg-emerald-700 transition-colors shrink-0 w-full md:w-auto">
                  Assign course
                </button>
              </div>
            </div>

            <h3 className="font-black text-lg mb-4">Onboarding automation</h3>
            <p className="text-muted-foreground text-sm font-medium mb-4">These bundles are assigned the moment a new joiner is created in HRMS.</p>

            <div className="space-y-4">
              {[
                { name: "Every New Employee", scope: "Company wide", courses: ["HR Policy & Code of Conduct", "Company Introduction", "HRMS Usage Essentials"], active: true },
                { name: "Every New Designer", scope: "Design · Designation based", courses: ["Photoshop Production", "Illustrator Vector Kit", "Brand Guidelines"], active: true },
                { name: "Annual Compliance", scope: "Company wide · Recurring", courses: ["Information Security & Data Privacy", "POSH Awareness"], active: false },
              ].map(rule => (
                <div key={rule.name} className={`bg-card border border-border/50 rounded-xl p-5 shadow-sm flex items-center justify-between ${!rule.active && 'opacity-60 grayscale'}`}>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-black text-foreground">{rule.name}</h4>
                      <span className="text-[10px] font-black uppercase bg-muted/50 text-muted-foreground px-2 py-0.5 rounded">{rule.scope}</span>
                    </div>
                    <p className="text-xs font-medium text-muted-foreground mt-2">
                      Courses: <span className="font-bold text-foreground">{rule.courses.join(", ")}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ml-4 shrink-0">
                    <span className={`text-xs font-bold ${rule.active ? 'text-emerald-600' : 'text-muted-foreground'}`}>{rule.active ? 'Active' : 'Paused'}</span>
                    <div className={`w-10 h-5 rounded-full relative transition-colors ${rule.active ? 'bg-emerald-500' : 'bg-muted'}`}>
                      <div className={`w-3.5 h-3.5 rounded-full bg-white absolute top-0.5 transition-transform ${rule.active ? 'left-[22px]' : 'left-1'}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* === VIEW: ROLES & AUDIT === */}
        {internalTab === "Roles & Audit" && (
          <>
            <div className="mb-6">
              <h1 className="text-2xl font-black tracking-tight text-foreground">Roles & audit</h1>
              <p className="text-muted-foreground mt-1 text-sm font-medium">Only assigned users can access assigned courses. Every learning click is logged.</p>
            </div>

            <div className="grid gap-4 grid-cols-2 md:grid-cols-4 mb-8">
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Roles</div>
                <div className="text-2xl font-black text-foreground">6</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Users</div>
                <div className="text-2xl font-black text-foreground">421</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-muted-foreground font-black text-[10px] uppercase tracking-widest mb-1">Events Today</div>
                <div className="text-2xl font-black text-foreground">3,184</div>
              </div>
              <div className="bg-card border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="text-emerald-600 font-black text-[10px] uppercase tracking-widest mb-1">Policy Violations</div>
                <div className="text-2xl font-black text-emerald-700 dark:text-emerald-400">0</div>
                <div className="text-[10px] font-bold text-muted-foreground mt-1">last 30 days</div>
              </div>
            </div>

            <div className="grid xl:grid-cols-2 gap-8">
              <div>
                <h3 className="font-black text-lg mb-4">Role based access</h3>
                <div className="bg-card border border-border/50 rounded-2xl shadow-sm overflow-hidden">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-muted/10 text-muted-foreground">
                      <tr>
                        <th className="px-4 py-3 font-bold">Role</th>
                        <th className="px-4 py-3 font-bold">Access</th>
                        <th className="px-4 py-3 font-bold text-right">People</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                      <tr className="hover:bg-muted/30">
                        <td className="px-4 py-3 font-bold">Admin</td>
                        <td className="px-4 py-3 text-xs text-muted-foreground">Full platform control, audit logs</td>
                        <td className="px-4 py-3 font-bold text-right">3</td>
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="px-4 py-3 font-bold">HR</td>
                        <td className="px-4 py-3 text-xs text-muted-foreground">Assign courses, compliance reporting</td>
                        <td className="px-4 py-3 font-bold text-right">8</td>
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="px-4 py-3 font-bold">Employee</td>
                        <td className="px-4 py-3 text-xs text-muted-foreground">Assigned courses, certificates</td>
                        <td className="px-4 py-3 font-bold text-right">341</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-black text-lg mb-4">Audit log</h3>
                <div className="bg-card border border-border/50 rounded-2xl shadow-sm overflow-hidden">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-muted/10 text-muted-foreground">
                      <tr>
                        <th className="px-4 py-3 font-bold">Actor</th>
                        <th className="px-4 py-3 font-bold">Action</th>
                        <th className="px-4 py-3 font-bold">Time / IP</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                      <tr className="hover:bg-muted/30">
                        <td className="px-4 py-3 font-bold">Priya Nair</td>
                        <td className="px-4 py-3 text-xs text-foreground font-medium">Assigned 'InfoSec' to Company wide</td>
                        <td className="px-4 py-3 text-xs text-muted-foreground">09:12<br/><span className="text-[10px] font-mono opacity-60">10.4.2.18</span></td>
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="px-4 py-3 font-bold text-primary">System</td>
                        <td className="px-4 py-3 text-xs text-foreground font-medium">Auto-assigned onboarding bundle</td>
                        <td className="px-4 py-3 text-xs text-muted-foreground">Yesterday<br/><span className="text-[10px] font-mono opacity-60">internal</span></td>
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="px-4 py-3 font-bold">Aditya Menon</td>
                        <td className="px-4 py-3 text-xs text-foreground font-medium">Watched lesson l5 (58% · Desktop)</td>
                        <td className="px-4 py-3 text-xs text-muted-foreground">08:47<br/><span className="text-[10px] font-mono opacity-60">10.4.7.51</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
