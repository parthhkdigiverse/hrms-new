import { useState } from "react";
import { ArrowLeft, PlayCircle, CheckCircle2, Clock, FileText, HelpCircle, Lock, Award, Share2, ArrowRight } from "lucide-react";

const mockCourseDetails = {
  id: "course-1",
  title: "Advanced React Patterns & Performance",
  category: "Development",
  instructor: "Sarah Drasner",
  progress: 45,
  modules: [
    {
      id: "m1",
      title: "Module 1: Introduction to Advanced Patterns",
      duration: "45m",
      isCompleted: true,
      lessons: [
        { id: "l1", title: "Welcome & Course Overview", duration: "5m", type: "video", isCompleted: true },
        { id: "l2", title: "Why Patterns Matter", duration: "15m", type: "video", isCompleted: true },
        { id: "l3", title: "Module 1 Quiz", duration: "25m", type: "quiz", isCompleted: true }
      ]
    },
    {
      id: "m2",
      title: "Module 2: Compound Components",
      duration: "1h 15m",
      isCompleted: false,
      lessons: [
        { id: "l4", title: "The Compound Component Pattern", duration: "20m", type: "video", isCompleted: true },
        { id: "l5", title: "Building a Flexible Tabs Component", duration: "35m", type: "video", isCompleted: false, isCurrent: true },
        { id: "l6", title: "React Context for Compound Components", duration: "20m", type: "video", isCompleted: false, isLocked: true }
      ]
    },
    {
      id: "m3",
      title: "Module 3: Custom Hooks Design",
      duration: "2h 30m",
      isCompleted: false,
      lessons: [
        { id: "l7", title: "Hook Composition", duration: "45m", type: "video", isCompleted: false, isLocked: true },
        { id: "l8", title: "Testing Custom Hooks", duration: "45m", type: "video", isCompleted: false, isLocked: true },
        { id: "l9", title: "Final Assignment", duration: "1h", type: "assignment", isCompleted: false, isLocked: true }
      ]
    }
  ]
};

export function CoursePlayer({ active, setActive }: { active: string, setActive: (url: string) => void }) {
  const id = active.split("/").pop();
  const [activeModule, setActiveModule] = useState("m2");

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-500 pb-12">
      
      {/* Header */}
      <div className="flex items-center justify-between gap-4 bg-card border border-border/50 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setActive('/learn/dashboard')}
            className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-[10px] font-black uppercase tracking-widest">
                {mockCourseDetails.category}
              </span>
              <span className="text-xs font-bold text-muted-foreground">
                Instructor: {mockCourseDetails.instructor}
              </span>
            </div>
            <h1 className="text-xl font-black tracking-tight text-foreground line-clamp-1">
              {mockCourseDetails.title}
            </h1>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end gap-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Course Progress</span>
            <div className="flex items-center gap-3">
              <div className="w-32 h-2 bg-muted/50 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-indigo-400 rounded-full"
                  style={{ width: `${mockCourseDetails.progress}%` }}
                />
              </div>
              <span className="text-sm font-bold text-foreground">{mockCourseDetails.progress}%</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-background border border-border/50 text-foreground font-bold rounded-lg hover:bg-muted/50 transition-colors shadow-sm flex items-center gap-2 text-sm shrink-0">
            <Share2 className="w-4 h-4" /> Share
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Player & Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Video Player Mock */}
          <div className="w-full aspect-video bg-black rounded-2xl border border-border/50 overflow-hidden relative shadow-lg group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl backdrop-blur-sm border-4 border-white/20">
                  <PlayCircle className="w-10 h-10 ml-1" />
                </button>
              </div>
              <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-white font-bold text-sm">Building a Flexible Tabs Component</span>
                  <span className="text-white/70 text-xs font-medium">12:45 / 35:00</span>
                </div>
                <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/3 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Details */}
          <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-black text-foreground mb-4">Building a Flexible Tabs Component</h2>
            <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground font-medium">
              <p>In this lesson, we will implement the Compound Component pattern to build a highly flexible and reusable Tabs component in React. We will learn how to implicitly share state between parent and child components using React Context, allowing for a clean and declarative API for developers using our Tabs.</p>
              
              <h4 className="text-foreground font-bold mt-6 mb-2">Learning Objectives:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Understand the limitations of prop-drilling for complex UI widgets.</li>
                <li>Create a React Context to manage internal UI state.</li>
                <li>Design a declarative component API (Tabs, TabList, Tab, TabPanels, TabPanel).</li>
              </ul>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border/50 flex justify-between items-center">
              <button className="px-5 py-2.5 bg-background border border-border/50 text-foreground font-bold rounded-xl hover:bg-muted/50 transition-colors shadow-sm">
                Previous Lesson
              </button>
              <button className="px-5 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-opacity shadow-sm flex items-center gap-2">
                Complete & Continue <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Course Content Modules */}
        <div className="space-y-4">
          <div className="bg-card border border-border/50 rounded-2xl p-5 shadow-sm sticky top-6">
            <h3 className="font-black text-lg text-foreground mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Course Content
            </h3>
            
            <div className="space-y-3">
              {mockCourseDetails.modules.map((module, mIdx) => (
                <div key={module.id} className="border border-border/50 rounded-xl overflow-hidden bg-background">
                  <button 
                    onClick={() => setActiveModule(activeModule === module.id ? "" : module.id)}
                    className={`w-full p-4 flex items-center justify-between transition-colors ${
                      activeModule === module.id ? "bg-muted/50" : "hover:bg-muted/30"
                    }`}
                  >
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Module {mIdx + 1}</span>
                      <span className="font-bold text-sm text-foreground text-left">{module.title}</span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 ml-4">
                      <span className="text-xs font-medium text-muted-foreground">{module.duration}</span>
                      {module.isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-muted-foreground/30" />
                      )}
                    </div>
                  </button>
                  
                  {activeModule === module.id && (
                    <div className="p-2 border-t border-border/50 bg-muted/10 space-y-1">
                      {module.lessons.map((lesson) => (
                        <button 
                          key={lesson.id}
                          disabled={lesson.isLocked}
                          className={`w-full p-2.5 rounded-lg flex items-start gap-3 transition-colors text-left ${
                            lesson.isCurrent 
                              ? "bg-primary/10 border border-primary/20" 
                              : lesson.isLocked 
                                ? "opacity-60 cursor-not-allowed" 
                                : "hover:bg-muted/50"
                          }`}
                        >
                          <div className="mt-0.5 shrink-0">
                            {lesson.isCompleted ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            ) : lesson.isLocked ? (
                              <Lock className="w-4 h-4 text-muted-foreground" />
                            ) : lesson.type === "video" ? (
                              <PlayCircle className={`w-4 h-4 ${lesson.isCurrent ? 'text-primary' : 'text-muted-foreground'}`} />
                            ) : lesson.type === "quiz" ? (
                              <HelpCircle className="w-4 h-4 text-amber-500" />
                            ) : (
                              <Award className="w-4 h-4 text-indigo-500" />
                            )}
                          </div>
                          <div className="flex-1 flex flex-col">
                            <span className={`text-xs font-bold ${lesson.isCurrent ? 'text-primary' : 'text-foreground'}`}>
                              {lesson.title}
                            </span>
                            <span className="text-[10px] font-medium text-muted-foreground">
                              {lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)} • {lesson.duration}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}
