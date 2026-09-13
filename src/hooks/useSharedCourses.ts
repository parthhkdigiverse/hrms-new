import { useState, useEffect } from 'react';

export interface Curriculum {
  id: string;
  title: string;
  type: "video" | "document" | "quiz";
  duration: string;
  completed: boolean;
  contentUrl?: string;
  viewCount?: number;
  progress?: number;
  midVideoQuiz?: {
    timeSeconds: number;
    passingThreshold: number;
    questions: {
      question: string;
      options: string[];
      correctAnswerIndex: number;
    }[];
  } | undefined;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  curriculums: Curriculum[];
  progress?: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  instructor: string;
  totalModules: number;
  totalDuration: string;
  progress: number; // 0-100
  modules: Module[];
  assignedUsers?: string[];
  certificateStatus?: "none" | "pending" | "approved";
}

export const calculateCourseProgress = (course: Course): Course => {
  const updatedModules = course.modules.map(mod => {
    const totalCurriculums = mod.curriculums.length;
    if (totalCurriculums === 0) return { ...mod, progress: 0 };
    
    const curProgress = mod.curriculums.reduce((acc, cur) => acc + (cur.progress || (cur.completed ? 100 : 0)), 0);
    return { ...mod, progress: Math.round(curProgress / totalCurriculums) };
  });

  const totalModules = updatedModules.length;
  const courseProgress = totalModules === 0 
    ? 0 
    : Math.round(updatedModules.reduce((acc, mod) => acc + (mod.progress || 0), 0) / totalModules);

  return { ...course, modules: updatedModules, progress: courseProgress };
};

const MOCK_COURSES: Course[] = [
  {
    id: "c1",
    title: "Advanced React & Next.js Masterclass",
    description: "Deep dive into React 19, Server Components, and advanced Next.js patterns for building scalable B2B applications.",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=300&h=200&auto=format&fit=crop",
    category: "Engineering",
    instructor: "Alex Johnson",
    totalModules: 4,
    totalDuration: "6h 30m",
    progress: 45,
    modules: [
      {
        id: "m1",
        title: "Introduction to React 19",
        description: "Understanding the new features and compiler.",
        curriculums: [
          { id: "cur1", title: "What's new in React 19?", type: "video", duration: "15m", completed: true, viewCount: 2, progress: 100 },
          { id: "cur2", title: "Setting up the compiler", type: "document", duration: "10m", completed: true, viewCount: 1, progress: 100 },
          { id: "cur3", title: "Knowledge Check", type: "quiz", duration: "5m", completed: true, viewCount: 1, progress: 100 },
        ],
        progress: 100
      },
      {
        id: "m2",
        title: "Server Components",
        description: "Mastering RSC for optimal performance.",
        curriculums: [
          { 
            id: "cur4", 
            title: "RSC Fundamentals", 
            type: "video", 
            duration: "25m", 
            completed: true, 
            viewCount: 3, 
            progress: 100,
            midVideoQuiz: {
              timeSeconds: 15,
              passingThreshold: 100,
              questions: [
                {
                  question: "Which of the following components render on the server by default in App Router?",
                  options: ["Client Components", "Server Components", "Both", "None"],
                  correctAnswerIndex: 1
                }
              ]
            }
          },
          { id: "cur5", title: "Data Fetching Strategies", type: "video", duration: "35m", completed: false, viewCount: 1, progress: 0 },
          { id: "cur6", title: "Suspense Boundaries", type: "document", duration: "15m", completed: false, viewCount: 0, progress: 0 },
        ],
        progress: 33
      }
    ]
  },
  {
    id: "c2",
    title: "B2B Sales Strategies for 2027",
    description: "Learn how to close enterprise deals using modern CRM tools, effective follow-ups, and negotiation tactics.",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300&h=200&auto=format&fit=crop",
    category: "Sales",
    instructor: "Sarah Chen",
    totalModules: 3,
    totalDuration: "4h 15m",
    progress: 0,
    modules: [
      {
        id: "m1",
        title: "Prospecting in the Modern Era",
        description: "Identifying high-value targets.",
        curriculums: [
          { id: "cur1", title: "Using LinkedIn Sales Navigator", type: "video", duration: "20m", completed: false, viewCount: 0, progress: 0 },
        ],
        progress: 0
      }
    ]
  },
  {
    id: "c3",
    title: "HR Policies & Compliance",
    description: "Mandatory training on workplace policies, remote work guidelines, and internal compliance.",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=300&h=200&auto=format&fit=crop",
    category: "HR & Onboarding",
    instructor: "HR Department",
    totalModules: 2,
    totalDuration: "1h 45m",
    progress: 100,
    modules: [
      {
        id: "m1",
        title: "Remote Work Guidelines",
        description: "Policies for hybrid and remote work.",
        curriculums: [
          { id: "cur1", title: "Core Hours & Communication", type: "video", duration: "15m", completed: true, viewCount: 1, progress: 100 },
          { id: "cur2", title: "Home Office Setup", type: "document", duration: "10m", completed: true, viewCount: 1, progress: 100 },
        ],
        progress: 100
      }
    ]
  }
];

export function useSharedCourses() {
  const [courses, setCoursesState] = useState<Course[]>(() => {
    try {
      const stored = localStorage.getItem("learning_courses");
      return stored ? JSON.parse(stored) : MOCK_COURSES;
    } catch (e) {
      return MOCK_COURSES;
    }
  });

  const setCourses = (newCourses: Course[]) => {
    setCoursesState(newCourses);
    localStorage.setItem("learning_courses", JSON.stringify(newCourses));
  };

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "learning_courses" && e.newValue) {
        setCoursesState(JSON.parse(e.newValue));
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return { courses, setCourses };
}
