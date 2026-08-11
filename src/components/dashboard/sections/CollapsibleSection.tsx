import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CollapsibleSectionProps {
  section: string;
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export function CollapsibleSection({ section, title, children, defaultExpanded = true }: CollapsibleSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="flex flex-col h-full">
      <div 
        className="mb-6 pl-2 flex items-center justify-between cursor-pointer select-none group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <p className="text-[10px] font-bold text-[#00A56C] uppercase tracking-widest mb-0.5">{section}</p>
          <h2 className="text-[22px] font-black text-slate-900 tracking-tight group-hover:text-[#00A56C] transition-colors">{title}</h2>
        </div>
        <div className="h-8 w-8 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors">
          <ChevronDown className={cn("h-5 w-5 text-slate-400 transition-transform duration-300", !isExpanded ? "rotate-180" : "")} />
        </div>
      </div>
      
      <div className={cn("transition-all duration-500 overflow-hidden", isExpanded ? "opacity-100" : "opacity-0 max-h-0")}>
        {children}
      </div>
    </div>
  );
}
