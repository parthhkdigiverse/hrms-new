import { useState, useRef, useEffect } from "react";
import {
  GraduationCap,
  BookOpen,
  PlayCircle,
  CheckCircle2,
  Clock,
  Video,
  FileText,
  Search,
  ChevronRight,
  ArrowLeft,
  Filter,
  BarChart2,
  Award,
  Edit2,
  Trash2,
  MoreVertical
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

import { useSharedCourses, Course, Module, Curriculum, calculateCourseProgress } from "@/hooks/useSharedCourses";

export function LearningModule({ basePath, setActive }: { basePath?: string, setActive?: (val: string) => void }) {
  const activeTab = basePath === "/learning/my-courses" ? "my-courses" : "catalog";
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleNav = (e: Event) => {
      const url = (e as CustomEvent).detail;
      if (url === "/learning/courses" || url === "/learning/my-courses") {
        setSelectedCourse(null);
      }
    };
    window.addEventListener("appNavigate", handleNav);
    return () => window.removeEventListener("appNavigate", handleNav);
  }, []);

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { courses, setCourses } = useSharedCourses();
  
  // Modals state
  const [isAddCourseOpen, setIsAddCourseOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({ title: "", description: "", category: "", instructor: "" });
  
  const [isAddModuleOpen, setIsAddModuleOpen] = useState(false);
  const [newModule, setNewModule] = useState({ title: "", description: "" });
  
  const [isAddCurriculumOpen, setIsAddCurriculumOpen] = useState(false);
  const [newCurriculum, setNewCurriculum] = useState({ 
    title: "", 
    type: "video" as Curriculum["type"], 
    duration: "", 
    contentUrl: "",
    enableMidVideoQuiz: false,
    quizTimeSeconds: 15,
    quizPassingThreshold: 100,
    quizQuestions: [{
      question: "",
      options: ["", "", "", ""],
      correctAnswerIndex: 0
    }]
  });
  const [targetModuleId, setTargetModuleId] = useState<string | null>(null);

  // Edit States
  const [editingCourseId, setEditingCourseId] = useState<string | null>(null);
  const [editingModuleId, setEditingModuleId] = useState<string | null>(null);
  const [editingCurriculumId, setEditingCurriculumId] = useState<string | null>(null);

  // Video Player States


  const categories = ["All", ...Array.from(new Set(courses.map(c => c.category)))];

  const displayedCourses = courses.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "my-courses" ? c.progress > 0 : true;
    const matchesCategory = activeCategory === "All" || c.category === activeCategory;
    return matchesSearch && matchesTab && matchesCategory;
  });

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCourseId) {
      const updated = courses.map(c => c.id === editingCourseId ? { ...c, title: newCourse.title, description: newCourse.description, category: newCourse.category, instructor: newCourse.instructor } : c);
      setCourses(updated);
      if (selectedCourse && selectedCourse.id === editingCourseId) {
        setSelectedCourse(updated.find(c => c.id === editingCourseId) || null);
      }
    } else {
      const course: Course = {
        id: "c" + Math.random().toString(36).substr(2, 9),
        title: newCourse.title,
        description: newCourse.description,
        category: newCourse.category || "General",
        instructor: newCourse.instructor,
        thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=300&h=200&auto=format&fit=crop",
        totalModules: 0,
        totalDuration: "0h 0m",
        progress: 0,
        modules: []
      };
      setCourses([course, ...courses]);
    }
    setIsAddCourseOpen(false);
    setEditingCourseId(null);
    setNewCourse({ title: "", description: "", category: "", instructor: "" });
  };

  const handleDeleteCourse = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCourses(courses.filter(c => c.id !== id));
    if (selectedCourse?.id === id) setSelectedCourse(null);
  };

  const handleAddModule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse) return;
    
    if (editingModuleId) {
      const updatedModules = selectedCourse.modules.map(m => m.id === editingModuleId ? { ...m, title: newModule.title, description: newModule.description } : m);
      const updatedCourse = calculateCourseProgress({ ...selectedCourse, modules: updatedModules });
      setCourses(courses.map(c => c.id === updatedCourse.id ? updatedCourse : c));
      setSelectedCourse(updatedCourse);
    } else {
      const module: Module = {
        id: "m" + Math.random().toString(36).substr(2, 9),
        title: newModule.title,
        description: newModule.description,
        curriculums: []
      };
      const updatedCourse = calculateCourseProgress({ ...selectedCourse, modules: [...selectedCourse.modules, module], totalModules: selectedCourse.totalModules + 1 });
      setCourses(courses.map(c => c.id === updatedCourse.id ? updatedCourse : c));
      setSelectedCourse(updatedCourse);
    }
    setIsAddModuleOpen(false);
    setEditingModuleId(null);
    setNewModule({ title: "", description: "" });
  };

  const handleDeleteModule = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedCourse) return;
    const updatedModules = selectedCourse.modules.filter(m => m.id !== id);
    const updatedCourse = calculateCourseProgress({ ...selectedCourse, modules: updatedModules, totalModules: Math.max(0, selectedCourse.totalModules - 1) });
    setCourses(courses.map(c => c.id === updatedCourse.id ? updatedCourse : c));
    setSelectedCourse(updatedCourse);
  };

  const handleAddCurriculum = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse || !targetModuleId) return;
    
    if (editingCurriculumId) {
      const updatedModules = selectedCourse.modules.map(m => {
        if (m.id === targetModuleId) {
          return {
            ...m,
            curriculums: m.curriculums.map(cur => cur.id === editingCurriculumId ? { 
              ...cur, 
              title: newCurriculum.title, 
              type: newCurriculum.type, 
              duration: newCurriculum.duration, 
              contentUrl: newCurriculum.contentUrl,
              midVideoQuiz: (newCurriculum.type === 'video' && newCurriculum.enableMidVideoQuiz) || newCurriculum.type === 'quiz' ? {
                timeSeconds: newCurriculum.quizTimeSeconds,
                passingThreshold: newCurriculum.quizPassingThreshold,
                questions: newCurriculum.quizQuestions
              } : undefined
            } : cur)
          };
        }
        return m;
      });
      const updatedCourse = calculateCourseProgress({ ...selectedCourse, modules: updatedModules });
      setCourses(courses.map(c => c.id === updatedCourse.id ? updatedCourse : c));
      setSelectedCourse(updatedCourse);
    } else {
      const curriculum: Curriculum = {
        id: "cur" + Math.random().toString(36).substr(2, 9),
        title: newCurriculum.title,
        type: newCurriculum.type,
        duration: newCurriculum.duration || "10m",
        completed: false,
        contentUrl: newCurriculum.contentUrl,
        viewCount: 0,
        progress: 0,
        midVideoQuiz: (newCurriculum.type === 'video' && newCurriculum.enableMidVideoQuiz) || newCurriculum.type === 'quiz' ? {
          timeSeconds: newCurriculum.quizTimeSeconds,
          passingThreshold: newCurriculum.quizPassingThreshold,
          questions: newCurriculum.quizQuestions
        } : undefined
      };
      const updatedModules = selectedCourse.modules.map(m => {
        if (m.id === targetModuleId) {
          return { ...m, curriculums: [...m.curriculums, curriculum] };
        }
        return m;
      });
      const updatedCourse = calculateCourseProgress({ ...selectedCourse, modules: updatedModules });
      setCourses(courses.map(c => c.id === updatedCourse.id ? updatedCourse : c));
      setSelectedCourse(updatedCourse);
    }
    setIsAddCurriculumOpen(false);
    setEditingCurriculumId(null);
    setNewCurriculum({ 
      title: "", 
      type: "video", 
      duration: "", 
      contentUrl: "",
      enableMidVideoQuiz: false,
      quizTimeSeconds: 15,
      quizPassingThreshold: 100,
      quizQuestions: [{
        question: "",
        options: ["", "", "", ""],
        correctAnswerIndex: 0
      }]
    });
  };

  const handleDeleteCurriculum = (moduleId: string, curriculumId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedCourse) return;
    const updatedModules = selectedCourse.modules.map(m => {
      if (m.id === moduleId) {
        return { ...m, curriculums: m.curriculums.filter(cur => cur.id !== curriculumId) };
      }
      return m;
    });
    const updatedCourse = calculateCourseProgress({ ...selectedCourse, modules: updatedModules });
    setCourses(courses.map(c => c.id === updatedCourse.id ? updatedCourse : c));
    setSelectedCourse(updatedCourse);
  };

  const handleCurriculumClick = (moduleId: string, curriculum: Curriculum) => {
    if (!selectedCourse) return;
    
    // Update view count locally
    const updatedModules = selectedCourse.modules.map(m => {
      if (m.id === moduleId) {
        return {
          ...m,
          curriculums: m.curriculums.map(c => c.id === curriculum.id ? { ...c, viewCount: (c.viewCount || 0) + 1 } : c)
        };
      }
      return m;
    });
    const updatedCourse = calculateCourseProgress({ ...selectedCourse, modules: updatedModules });
    setCourses(courses.map(c => c.id === updatedCourse.id ? updatedCourse : c));
    setSelectedCourse(updatedCourse);
    
    window.open(`/learning/viewer/${selectedCourse.id}/${moduleId}/${curriculum.id}`, '_blank');
  };



  // --- Course Detail View ---
  if (selectedCourse) {
    return (
      <div className="space-y-6 animate-in fade-in duration-300 pb-10">
        {/* Header Back Button */}
        <button 
          onClick={() => setSelectedCourse(null)}
          className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Courses
        </button>

        {/* Course Header Banner */}
        <div className="relative overflow-hidden rounded-[2rem] bg-card border border-border shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />
          <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
            <img 
              src={selectedCourse.thumbnail} 
              alt={selectedCourse.title} 
              className="w-full md:w-64 h-40 object-cover rounded-2xl shadow-md border border-border/50"
            />
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-lg uppercase tracking-wider">
                  {selectedCourse.category}
                </span>
                <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {selectedCourse.totalDuration}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-black text-foreground tracking-tight">{selectedCourse.title}</h1>
                  <p className="text-sm text-muted-foreground mt-2 max-w-2xl">{selectedCourse.description}</p>
                </div>
                <div className="flex items-center gap-2 self-start">
                  <button 
                    onClick={() => {
                      setEditingCourseId(selectedCourse.id);
                      setNewCourse({
                        title: selectedCourse.title,
                        description: selectedCourse.description,
                        category: selectedCourse.category,
                        instructor: selectedCourse.instructor
                      });
                      setIsAddCourseOpen(true);
                    }}
                    className="p-2 hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={(e) => handleDeleteCourse(selectedCourse.id, e)}
                    className="p-2 hover:bg-red-500/10 text-muted-foreground hover:text-red-500 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold border border-border/50">
                    {selectedCourse.instructor.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Instructor</p>
                    <p className="text-xs font-bold text-foreground">{selectedCourse.instructor}</p>
                  </div>
                </div>
                <div className="flex-1 max-w-[200px]">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Progress</span>
                    <span className="text-xs font-black text-primary">{selectedCourse.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-500 ease-out" 
                      style={{ width: `${selectedCourse.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Modules List */}
        <div className="max-w-4xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-foreground flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Course Modules
            </h2>
            <button 
              onClick={() => setIsAddModuleOpen(true)}
              className="text-xs font-bold bg-primary text-primary-foreground px-3 py-1.5 rounded-lg hover:bg-primary/90 transition-colors"
            >
              + Add Module
            </button>
          </div>
          <div className="space-y-4">
            {selectedCourse.modules.map((module, idx) => (
              <div key={module.id} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm transition-all">
                <div 
                  onClick={() => setActiveModuleId(activeModuleId === module.id ? null : module.id)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-muted/30 transition-colors cursor-pointer group/module"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">{module.title}</h3>
                      <div className="flex items-center gap-3 mt-1 text-xs font-semibold text-muted-foreground">
                        <span>{module.curriculums.length} lessons</span>
                        <span className="opacity-50">•</span>
                        <span>{module.description}</span>
                        {module.progress !== undefined && (
                          <>
                            <span className="opacity-50">•</span>
                            <div className="flex items-center gap-2">
                              <span>{module.progress}%</span>
                              <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden border border-border/50">
                                <div className="h-full bg-primary" style={{ width: `${module.progress}%` }} />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditingModuleId(module.id);
                        setNewModule({ title: module.title, description: module.description });
                        setIsAddModuleOpen(true);
                      }}
                      className="p-1.5 opacity-0 group-hover/module:opacity-100 hover:bg-muted text-muted-foreground hover:text-foreground rounded-md transition-all"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={(e) => handleDeleteModule(module.id, e)}
                      className="p-1.5 opacity-0 group-hover/module:opacity-100 hover:bg-red-500/10 text-muted-foreground hover:text-red-500 rounded-md transition-all mr-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <ChevronRight className={cn("w-5 h-5 text-muted-foreground transition-transform duration-300", activeModuleId === module.id && "rotate-90")} />
                  </div>
                </div>
                
                {/* Curriculums / Lessons List */}
                {activeModuleId === module.id && (
                  <div className="border-t border-border bg-muted/10 divide-y divide-border/50">
                    {module.curriculums.map((curriculum, cIdx) => (
                      <div 
                        key={curriculum.id}
                        onClick={() => handleCurriculumClick(module.id, curriculum)}
                        className="flex items-center justify-between p-4 pl-20 hover:bg-muted/40 cursor-pointer transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          {curriculum.completed ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                          ) : curriculum.type === "video" ? (
                            <PlayCircle className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          ) : curriculum.type === "document" ? (
                            <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          ) : (
                            <Award className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          )}
                          <span className={cn("text-sm font-semibold transition-colors", curriculum.completed ? "text-foreground/70" : "text-foreground group-hover:text-primary")}>
                            {cIdx + 1}. {curriculum.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-muted-foreground mr-4 flex items-center gap-2">
                            {curriculum.viewCount !== undefined && <span className="px-1.5 py-0.5 bg-muted rounded border border-border/50 flex items-center gap-1 text-[10px] uppercase tracking-wider text-muted-foreground/80 font-black"><span className="text-xs">👁️</span> {curriculum.viewCount} views</span>}
                            <span>
                              {curriculum.type === "video" && <Video className="w-3.5 h-3.5 inline mr-1" />}
                              {curriculum.type === "document" && <FileText className="w-3.5 h-3.5 inline mr-1" />}
                              {curriculum.type === "quiz" && <Award className="w-3.5 h-3.5 inline mr-1" />}
                              {curriculum.duration}
                            </span>
                          </span>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setTargetModuleId(module.id);
                              setEditingCurriculumId(curriculum.id);
                              setNewCurriculum({
                                title: curriculum.title,
                                type: curriculum.type,
                                duration: curriculum.duration,
                                contentUrl: curriculum.contentUrl || "",
                                enableMidVideoQuiz: !!curriculum.midVideoQuiz,
                                quizTimeSeconds: curriculum.midVideoQuiz?.timeSeconds || 15,
                                quizPassingThreshold: curriculum.midVideoQuiz?.passingThreshold || 100,
                                quizQuestions: curriculum.midVideoQuiz?.questions || [{
                                  question: "",
                                  options: ["", "", "", ""],
                                  correctAnswerIndex: 0
                                }]
                              });
                              setIsAddCurriculumOpen(true);
                            }}
                            className="p-1.5 opacity-0 group-hover:opacity-100 hover:bg-muted/60 text-muted-foreground hover:text-foreground rounded-md transition-all"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button 
                            onClick={(e) => handleDeleteCurriculum(module.id, curriculum.id, e)}
                            className="p-1.5 opacity-0 group-hover:opacity-100 hover:bg-red-500/10 text-muted-foreground hover:text-red-500 rounded-md transition-all"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="p-3 pl-20 bg-background/50 border-t border-border/50">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setTargetModuleId(module.id);
                          setIsAddCurriculumOpen(true);
                        }}
                        className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        + Add Curriculum
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>



        {/* Add Module Modal */}
        <Dialog open={isAddModuleOpen} onOpenChange={setIsAddModuleOpen}>
          <DialogContent className="sm:max-w-[500px] p-6 rounded-[2rem] bg-card border-border shadow-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-black">Add New Module</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddModule} className="space-y-4 mt-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Module Title</label>
                <input required type="text" value={newModule.title} onChange={e => setNewModule({...newModule, title: e.target.value})} className="w-full px-3 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. Introduction to Topics" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Description</label>
                <textarea required value={newModule.description} onChange={e => setNewModule({...newModule, description: e.target.value})} className="w-full px-3 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none" placeholder="What will be covered in this module..." rows={2} />
              </div>
              <div className="pt-4 flex justify-end gap-3 border-t border-border/50">
                <button type="button" onClick={() => setIsAddModuleOpen(false)} className="px-4 py-2 bg-white border border-border text-foreground hover:bg-muted/50 font-bold text-sm rounded-xl">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:bg-primary/90">Add Module</button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {/* Add Curriculum Modal */}
        <Dialog open={isAddCurriculumOpen} onOpenChange={setIsAddCurriculumOpen}>
          <DialogContent className="sm:max-w-[400px] max-h-[90vh] overflow-y-auto p-6 rounded-[2rem] bg-card border-border shadow-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-black">Add Curriculum Lesson</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddCurriculum} className="space-y-4 mt-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Lesson Title</label>
                <input required type="text" value={newCurriculum.title} onChange={e => setNewCurriculum({...newCurriculum, title: e.target.value})} className="w-full px-3 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. Setting up the environment" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Type</label>
                  <select value={newCurriculum.type} onChange={e => setNewCurriculum({...newCurriculum, type: e.target.value as Curriculum["type"]})} className="w-full h-[38px] px-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option value="video">Video</option>
                    <option value="document">Document</option>
                    <option value="quiz">Quiz</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Duration</label>
                  <input required type="text" value={newCurriculum.duration} onChange={e => setNewCurriculum({...newCurriculum, duration: e.target.value})} className="w-full px-3 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. 15m" />
                </div>
              </div>
              {newCurriculum.type !== "quiz" && (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Content URL (Optional)</label>
                  <input type="text" value={newCurriculum.contentUrl} onChange={e => setNewCurriculum({...newCurriculum, contentUrl: e.target.value})} className="w-full px-3 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. https://www.youtube.com/embed/..." />
                </div>
              )}

              {(newCurriculum.type === "video" || newCurriculum.type === "quiz") && (
                <div className="space-y-3 p-4 bg-muted/30 border border-border rounded-xl">
                  {newCurriculum.type === "video" && (
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-bold text-foreground flex items-center gap-2">
                        <input type="checkbox" checked={newCurriculum.enableMidVideoQuiz} onChange={e => setNewCurriculum({...newCurriculum, enableMidVideoQuiz: e.target.checked})} className="rounded border-border text-primary focus:ring-primary" />
                        Enable Mid-Video Quiz
                      </label>
                    </div>
                  )}
                  
                  {(newCurriculum.type === "quiz" || newCurriculum.enableMidVideoQuiz) && (
                    <div className="space-y-4 pt-2">
                      <div className="grid grid-cols-2 gap-4">
                        {newCurriculum.type === "video" && (
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Show at Time (s)</label>
                            <input type="number" value={newCurriculum.quizTimeSeconds} onChange={e => setNewCurriculum({...newCurriculum, quizTimeSeconds: parseInt(e.target.value) || 0})} className="w-full px-3 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                          </div>
                        )}
                        <div className={`space-y-2 ${newCurriculum.type === "quiz" ? "col-span-2" : ""}`}>
                          <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Threshold (%)</label>
                          <input type="number" min="0" max="100" value={newCurriculum.quizPassingThreshold} onChange={e => setNewCurriculum({...newCurriculum, quizPassingThreshold: parseInt(e.target.value) || 0})} className="w-full px-3 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                        </div>
                      </div>

                      <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                        {newCurriculum.quizQuestions.map((q, qIdx) => (
                          <div key={qIdx} className="space-y-3 p-3 border border-border rounded-lg bg-background relative">
                            {newCurriculum.quizQuestions.length > 1 && (
                              <button type="button" onClick={() => {
                                const newQs = newCurriculum.quizQuestions.filter((_, i) => i !== qIdx);
                                setNewCurriculum({...newCurriculum, quizQuestions: newQs});
                              }} className="absolute top-2 right-2 text-muted-foreground hover:text-red-500">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                            <div className="space-y-1">
                              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Question {qIdx + 1}</label>
                              <input required type="text" value={q.question} onChange={e => {
                                setNewCurriculum({
                                  ...newCurriculum, 
                                  quizQuestions: newCurriculum.quizQuestions.map((item, i) => i === qIdx ? { ...item, question: e.target.value } : item)
                                });
                              }} className="w-full px-3 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="What is..." />
                            </div>
                            <div className="space-y-1">
                              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Options & Correct Answer</label>
                              {q.options.map((opt, optIdx) => (
                                <div key={optIdx} className="flex items-center gap-2 mt-1">
                                  <input type="radio" name={`correctAnswer-${qIdx}`} checked={q.correctAnswerIndex === optIdx} onChange={() => {
                                    setNewCurriculum({
                                      ...newCurriculum, 
                                      quizQuestions: newCurriculum.quizQuestions.map((item, i) => i === qIdx ? { ...item, correctAnswerIndex: optIdx } : item)
                                    });
                                  }} className="text-primary focus:ring-primary" />
                                  <input required type="text" value={opt} onChange={e => {
                                    setNewCurriculum({
                                      ...newCurriculum, 
                                      quizQuestions: newCurriculum.quizQuestions.map((item, i) => {
                                        if (i === qIdx) {
                                          const newOpts = [...item.options];
                                          newOpts[optIdx] = e.target.value;
                                          return { ...item, options: newOpts };
                                        }
                                        return item;
                                      })
                                    });
                                  }} className="flex-1 px-3 py-1 bg-white border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder={`Option ${optIdx + 1}`} />
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <button type="button" onClick={() => {
                        setNewCurriculum({...newCurriculum, quizQuestions: [...newCurriculum.quizQuestions, { question: "", options: ["", "", "", ""], correctAnswerIndex: 0 }]});
                      }} className="w-full py-2 bg-primary/10 text-primary hover:bg-primary/20 font-bold text-sm rounded-xl transition-colors">
                        + Add Question
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div className="pt-4 flex justify-end gap-3 border-t border-border/50">
                <button type="button" onClick={() => setIsAddCurriculumOpen(false)} className="px-4 py-2 bg-white border border-border text-foreground hover:bg-muted/50 font-bold text-sm rounded-xl">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:bg-primary/90">Add Lesson</button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {/* Add Course Modal */}
        <Dialog open={isAddCourseOpen} onOpenChange={(open) => {
          setIsAddCourseOpen(open);
          if (!open) {
            setEditingCourseId(null);
            setNewCourse({ title: "", description: "", category: "", instructor: "" });
          }
        }}>
          <DialogContent className="sm:max-w-[500px] p-6 rounded-[2rem] bg-card border-border shadow-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-black">{editingCourseId ? "Edit Course" : "Create New Course"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddCourse} className="space-y-4 mt-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Course Title</label>
                <input required type="text" value={newCourse.title} onChange={e => setNewCourse({...newCourse, title: e.target.value})} className="w-full px-3 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. Sales Onboarding" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Description</label>
                <textarea required value={newCourse.description} onChange={e => setNewCourse({...newCourse, description: e.target.value})} className="w-full px-3 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none" placeholder="Brief summary of the course..." rows={3} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Category</label>
                  <input required type="text" value={newCourse.category} onChange={e => setNewCourse({...newCourse, category: e.target.value})} className="w-full px-3 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. Engineering" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Instructor</label>
                  <input required type="text" value={newCourse.instructor} onChange={e => setNewCourse({...newCourse, instructor: e.target.value})} className="w-full px-3 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. John Doe" />
                </div>
              </div>
              <div className="pt-4 flex justify-end gap-3 border-t border-border/50">
                <button type="button" onClick={() => {
                  setIsAddCourseOpen(false);
                  setEditingCourseId(null);
                  setNewCourse({ title: "", description: "", category: "", instructor: "" });
                }} className="px-4 py-2 bg-white border border-border text-foreground hover:bg-muted/50 font-bold text-sm rounded-xl">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:bg-primary/90">{editingCourseId ? "Save Changes" : "Create Course"}</button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  // --- Catalog / Main View ---
  return (
    <div className="space-y-6 h-full flex flex-col pb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shrink-0">
        <div>
          <h1 className="text-2xl font-black text-foreground tracking-tight flex items-center gap-2">
            <GraduationCap className="w-7 h-7 text-primary" />
            Learning Hub
          </h1>
          <p className="text-xs text-muted-foreground mt-1 font-semibold">Enhance your skills with our curated courses and training modules.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search courses..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-muted/40 border border-border/60 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="relative">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="px-3 py-2 bg-white border border-border text-foreground hover:bg-muted/50 font-bold text-xs rounded-xl transition-colors shadow-sm flex items-center gap-1.5 shrink-0"
            >
              <Filter className="w-4 h-4" />
              Filters {activeCategory !== "All" && <span className="w-2 h-2 rounded-full bg-primary" />}
            </button>
            {isFilterOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-border shadow-xl rounded-xl overflow-hidden z-50">
                <div className="px-3 py-2 text-[10px] font-bold text-muted-foreground uppercase tracking-wider bg-muted/30 border-b border-border/50">
                  Filter by Category
                </div>
                <div className="p-1 max-h-64 overflow-y-auto">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setIsFilterOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-3 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center justify-between",
                        activeCategory === cat ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground/80"
                      )}
                    >
                      {cat}
                      {activeCategory === cat && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button 
            onClick={() => {
              setEditingCourseId(null);
              setNewCourse({ title: "", description: "", category: "", instructor: "" });
              setIsAddCourseOpen(true);
            }}
            className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs rounded-xl transition-all shadow-sm flex items-center gap-1.5 shrink-0"
          >
            + Add Course
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 border-b border-border/50 pb-px shrink-0">
        <button
          onClick={() => { setActive && setActive("/learning/courses"); setSelectedCourse(null); }}
          className={cn(
            "px-4 py-2 text-sm font-bold border-b-2 transition-colors",
            activeTab === "catalog" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
          )}
        >
          Course Catalog
        </button>
        <button
          onClick={() => { setActive && setActive("/learning/my-courses"); setSelectedCourse(null); }}
          className={cn(
            "px-4 py-2 text-sm font-bold border-b-2 transition-colors",
            activeTab === "my-courses" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
          )}
        >
          My Learning
        </button>
      </div>

      {/* Courses Grid */}
      <div className="flex-1 overflow-y-auto pr-2">
        {displayedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCourses.map(course => (
              <div 
                key={course.id} 
                onClick={() => setSelectedCourse(course)}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold rounded-lg uppercase tracking-wider">
                    {course.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> {course.totalModules} Modules</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {course.totalDuration}</span>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                        {course.progress === 100 ? "Completed" : course.progress > 0 ? "In Progress" : "Not Started"}
                      </span>
                      <span className="text-xs font-black text-foreground">{course.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={cn("h-full rounded-full transition-all duration-500", course.progress === 100 ? "bg-green-500" : "bg-primary")} 
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-4 text-muted-foreground">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-foreground/80 mb-1">No courses found</h3>
            <p className="text-muted-foreground text-sm max-w-sm">We couldn't find any courses matching your filters.</p>
          </div>
        )}
      </div>

      {/* Add Course Modal */}
      <Dialog open={isAddCourseOpen} onOpenChange={(open) => {
        setIsAddCourseOpen(open);
        if (!open) {
          setEditingCourseId(null);
          setNewCourse({ title: "", description: "", category: "", instructor: "" });
        }
      }}>
        <DialogContent className="sm:max-w-[500px] p-6 rounded-[2rem] bg-card border-border shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-black">{editingCourseId ? "Edit Course" : "Create New Course"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddCourse} className="space-y-4 mt-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Course Title</label>
              <input required type="text" value={newCourse.title} onChange={e => setNewCourse({...newCourse, title: e.target.value})} className="w-full px-3 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. Sales Onboarding" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Description</label>
              <textarea required value={newCourse.description} onChange={e => setNewCourse({...newCourse, description: e.target.value})} className="w-full px-3 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none" placeholder="Brief summary of the course..." rows={3} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Category</label>
                <input required type="text" value={newCourse.category} onChange={e => setNewCourse({...newCourse, category: e.target.value})} className="w-full px-3 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. Engineering" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Instructor</label>
                <input required type="text" value={newCourse.instructor} onChange={e => setNewCourse({...newCourse, instructor: e.target.value})} className="w-full px-3 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. John Doe" />
              </div>
            </div>
            <div className="pt-4 flex justify-end gap-3 border-t border-border/50">
              <button type="button" onClick={() => {
                setIsAddCourseOpen(false);
                setEditingCourseId(null);
                setNewCourse({ title: "", description: "", category: "", instructor: "" });
              }} className="px-4 py-2 bg-white border border-border text-foreground hover:bg-muted/50 font-bold text-sm rounded-xl">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:bg-primary/90">{editingCourseId ? "Save Changes" : "Create Course"}</button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

    </div>
  );
}
