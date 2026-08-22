import { useState } from "react";
import { X,  Search, BookOpen, Clock, TrendingUp, Sparkles, Filter, Bookmark, Plus, BarChart2  } from "lucide-react";
import { DialogClose,  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger  } from "@/components/ui/dialog";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { SearchableSelect } from "@/components/ui/select";

type Category = "All" | "Engineering" | "Market Intel" | "Design" | "Company Policies";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  author: { name: string; avatar: string };
  date: string;
  readTime: string;
  bookmarked?: boolean;
}

const MOCK_ARTICLES: Article[] = [
  {
    id: "1",
    title: "Q3 Competitor Analysis: Industry Shifts",
    excerpt: "An in-depth look at how our top 3 competitors are adjusting their pricing models and what it means for our upcoming launch.",
    category: "Market Intel",
    author: { name: "Sarah Chen", avatar: "https://i.pravatar.cc/150?u=sarah" },
    date: "2 days ago",
    readTime: "8 min read",
    bookmarked: true,
  },
  {
    id: "2",
    title: "React 19 Migration Strategy",
    excerpt: "A comprehensive guide on how we plan to incrementally adopt React 19 features without blocking the main product roadmap.",
    category: "Engineering",
    author: { name: "Alex Johnson", avatar: "https://i.pravatar.cc/150?u=alex" },
    date: "1 week ago",
    readTime: "12 min read",
  },
  {
    id: "3",
    title: "The New Glassmorphism Trend in B2B",
    excerpt: "Why enterprise software is moving towards softer, translucent UI elements and how we can apply it to our dashboard.",
    category: "Design",
    author: { name: "Elena Rodriguez", avatar: "https://i.pravatar.cc/150?u=elena" },
    date: "Aug 10, 2026",
    readTime: "5 min read",
  },
  {
    id: "4",
    title: "Remote Work Policy Updates for 2027",
    excerpt: "Details on the updated hybrid work schedules, home office stipends, and core collaboration hours.",
    category: "Company Policies",
    author: { name: "HR Team", avatar: "https://i.pravatar.cc/150?u=hr" },
    date: "Aug 05, 2026",
    readTime: "4 min read",
  },
  {
    id: "5",
    title: "AI Integrations: Cost vs. Benefit",
    excerpt: "Evaluating the operational costs of using LLMs in our support pipeline versus the estimated deflection rate.",
    category: "Engineering",
    author: { name: "David Kim", avatar: "https://i.pravatar.cc/150?u=david" },
    date: "Jul 28, 2026",
    readTime: "10 min read",
    bookmarked: true,
  },
  {
    id: "6",
    title: "User Onboarding Drop-off Investigation",
    excerpt: "Research findings from user testing on why 30% of users drop off at the billing step.",
    category: "Market Intel",
    author: { name: "Mia Wong", avatar: "https://i.pravatar.cc/150?u=mia" },
    date: "Jul 15, 2026",
    readTime: "15 min read",
  }
];

const TRENDING_TOPICS = [
  { name: "AI Adoption", count: 24, trend: "+12%" },
  { name: "Q4 Roadmap", count: 18, trend: "+5%" },
  { name: "Security Audit", count: 12, trend: "-2%" },
  { name: "Design System", count: 9, trend: "+8%" },
];

export function Research() {
  const [articles, setArticles] = useState<Article[]>(MOCK_ARTICLES);
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // New Document State
  const [isNewDocOpen, setIsNewDocOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newExcerpt, setNewExcerpt] = useState("");
  const [newCategory, setNewCategory] = useState<Category>("Engineering");

  const categories: Category[] = ["All", "Engineering", "Market Intel", "Design", "Company Policies"];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (a.bookmarked && !b.bookmarked) return -1;
    if (!a.bookmarked && b.bookmarked) return 1;
    return 0;
  });

  const handleCreateDocument = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newExcerpt.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const newDoc: Article = {
      id: Math.random().toString(36).substr(2, 9),
      title: newTitle,
      excerpt: newExcerpt,
      category: newCategory,
      author: { name: "Alex (You)", avatar: "https://i.pravatar.cc/150?u=alex" },
      date: "Just now",
      readTime: "1 min read",
    };

    setArticles([newDoc, ...articles]);
    setIsNewDocOpen(false);
    toast.success("Document created successfully!");
    
    // Reset form
    setNewTitle("");
    setNewExcerpt("");
    setNewCategory("Engineering");
  };

  const handleToggleBookmark = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setArticles(articles.map(article => {
      if (article.id === id) {
        const isNowBookmarked = !article.bookmarked;
        toast.success(isNowBookmarked ? `Bookmarked "${article.title}"` : `Removed "${article.title}" from bookmarks`);
        return { ...article, bookmarked: isNowBookmarked };
      }
      return article;
    }));
  };

  return (
    <div className="space-y-8 h-[calc(100vh-8rem)] flex flex-col overflow-hidden pb-4">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden bg-card shrink-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
          <BookOpen className="w-64 h-64 text-white" />
        </div>
        
        <div className="relative p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Knowledge & Research Hub
          </h1>
          <p className="text-border max-w-2xl text-lg mb-8">
            Discover internal documentation, market intelligence, and deep-dives from across the company.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-3xl">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search articles, policies, or topics..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-muted-foreground backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <Dialog open={isNewDocOpen} onOpenChange={setIsNewDocOpen}>
              <DialogTrigger asChild>
                <button className="px-6 py-3.5 bg-primary hover:bg-primary text-primary-foreground font-bold rounded-2xl transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 shrink-0">
                  <Plus className="w-5 h-5" />
                  <span className="hidden sm:inline">New Document</span>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden rounded-[2rem] gap-0 border-border/60 shadow-2xl [&>button]:hidden bg-card">
                <div className="flex items-center justify-between px-6 md:px-8 py-6 border-b border-border/50 bg-muted/30">
          <div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight">Create New Document</h2>
            
          </div>
          <DialogClose asChild>
            <button className="p-2 text-muted-foreground hover:text-foreground/80 hover:bg-muted rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </DialogClose>
        </div>
                <form onSubmit={handleCreateDocument} className="flex flex-col max-h-[70vh]">
                <div className="p-6 md:p-8 space-y-6 overflow-y-auto">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Document Title</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Q4 Marketing Strategy"
                      value={newTitle}
                      onChange={e => setNewTitle(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Category</label>
                    <SearchableSelect 
                      value={newCategory}
                      onChange={(val) => setNewCategory(val as Category)}
                      options={categories.filter(c => c !== "All").map(c => ({ label: c, value: c }))}
                      className="w-full h-[38px] px-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Summary / Excerpt</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Brief description of the document contents..."
                      value={newExcerpt}
                      onChange={e => setNewExcerpt(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>
                  </div>
<div className="px-6 md:px-8 py-4 md:py-6 bg-muted/30 border-t border-border/50 flex justify-end gap-3 mt-auto shrink-0">
                    <button 
                      type="button" 
                      onClick={() => setIsNewDocOpen(false)}
                      className="px-4 py-2 bg-white border border-border text-foreground/80 hover:bg-muted/50 font-bold text-sm rounded-xl transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="px-4 py-2 bg-primary hover:bg-primary text-primary-foreground font-bold text-sm rounded-xl transition-colors"
                    >
                      Publish Document
                    </button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-0">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide shrink-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-200 border",
                  activeCategory === cat 
                    ? "bg-primary text-primary-foreground border-primary shadow-md" 
                    : "bg-white text-foreground/80 border-border hover:border-border hover:bg-muted/50"
                )}
              >
                {cat}
              </button>
            ))}
            <div className="flex-1"></div>
            <button className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors bg-white border border-border rounded-xl shrink-0">
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Articles Grid */}
          <div className="flex-1 overflow-y-auto pr-2 pb-10">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredArticles.map(article => (
                  <div key={article.id} className="group bg-white border border-border rounded-2xl p-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex flex-col cursor-pointer">
                    <div className="flex justify-between items-start mb-3">
                      <span className="px-2.5 py-1 bg-muted text-foreground/80 text-xs font-bold rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        {article.category}
                      </span>
                      <button 
                        onClick={(e) => handleToggleBookmark(e, article.id)}
                        className="text-border hover:text-amber-500 transition-colors"
                      >
                        <Bookmark className={cn("w-5 h-5", article.bookmarked && "fill-amber-500 text-amber-500")} />
                      </button>
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-6 flex-1">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
                      <div className="flex items-center gap-2">
                        <img src={article.author.avatar} alt={article.author.name} className="w-6 h-6 rounded-full ring-2 ring-white" />
                        <span className="text-xs font-medium text-foreground/80">{article.author.name}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
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
                <h3 className="text-lg font-bold text-foreground/80 mb-1">No articles found</h3>
                <p className="text-muted-foreground text-sm max-w-sm">We couldn't find any documents matching your search criteria. Try using different keywords.</p>
              </div>
            )}
          </div>
        </div>


      </div>
    </div>
  );
}
