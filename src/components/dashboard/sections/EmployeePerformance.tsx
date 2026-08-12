import { useState, useEffect } from "react";
import { Sparkles, Trophy } from "lucide-react";
import { TOP_PERFORMERS, NEEDS_ATTENTION, LATE_LEADERBOARD, SPOTLIGHT_EMPLOYEES } from "../dashboard-data";
import { cn } from "@/lib/utils";
import { CollapsibleSection } from "./CollapsibleSection";

export function EmployeePerformance() {
  const [currentSpotlight, setCurrentSpotlight] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSpotlight((prev) => (prev + 1) % SPOTLIGHT_EMPLOYEES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const spotlight = SPOTLIGHT_EMPLOYEES[currentSpotlight];

  return (
    <div className="mb-12">
      <CollapsibleSection section="Section 03" title="Employee Performance">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Top 5 Performers */}
        <div className="bg-white border border-border/60 rounded-3xl p-6 shadow-sm">
          <div className="mb-4">
            <h3 className="font-bold text-foreground">Top 5 Performers</h3>
            <p className="text-[11px] text-muted-foreground">Ranked by weighted productivity score</p>
          </div>
          <div className="space-y-3">
            {TOP_PERFORMERS.map((emp, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-muted/50 border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white font-bold text-[11px] text-muted-foreground shadow-sm">
                    {emp.isTop ? <Trophy className="h-3 w-3 text-amber-500" /> : i + 1}
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-foreground leading-tight">{emp.name}</p>
                    <p className="text-[11px] text-muted-foreground">{emp.dept}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spotlight Carousel */}
        <div className="bg-primary rounded-3xl p-6 text-primary-foreground shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Sparkles className="h-32 w-32" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-primary-foreground/70 uppercase tracking-wider mb-6 flex items-center justify-between">
              Spotlight
              <div className="flex gap-1">
                {SPOTLIGHT_EMPLOYEES.map((_, i) => (
                  <div key={i} className={cn("h-1 rounded-full transition-all duration-300", i === currentSpotlight ? "w-3 bg-primary-foreground" : "w-1 bg-primary-foreground/30")} />
                ))}
              </div>
            </h3>
            <div className="min-h-[80px]">
              <p className="text-3xl font-black mb-1 animate-in fade-in slide-in-from-right-4 duration-500" key={spotlight?.name}>
                {spotlight?.name}
              </p>
              <p className="text-primary-foreground/80 text-sm animate-in fade-in slide-in-from-right-4 duration-500 delay-75" key={spotlight?.role}>
                {spotlight?.role}
              </p>
            </div>
          </div>
        </div>

        {/* Third Column: Stacked Cards */}
        <div className="flex flex-col gap-6">
          {/* Late Coming Leaderboard */}
          <div className="bg-white border border-border/60 rounded-3xl p-6 shadow-sm">
            <h3 className="font-bold text-foreground mb-6">Late Coming Leaderboard</h3>
            <div className="space-y-4">
              {LATE_LEADERBOARD.map((emp, i) => (
                <div key={i} className="flex justify-between items-center">
                  <p className="text-[14px] text-muted-foreground font-medium">{emp.name}</p>
                  <span className="text-[12px] font-medium text-amber-500 bg-amber-50 px-3 py-1 rounded-full">
                    {emp.late} late
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Needs Attention */}
          <div className="bg-white border border-border/60 rounded-3xl p-6 shadow-sm">
            <h3 className="font-bold text-foreground mb-6">Needs Attention</h3>
            <div className="space-y-6">
              {NEEDS_ATTENTION.map((emp, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-[14px] text-foreground">{emp.name}</p>
                    <p className="text-[12px] text-rose-500">{emp.score}%</p>
                  </div>
                  <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden mb-1">
                    <div 
                      className="h-full bg-rose-500 rounded-full" 
                      style={{ width: `${emp.score}%` }}
                    ></div>
                  </div>
                  <p className="text-[12px] text-muted-foreground">{emp.dept}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </CollapsibleSection>
    </div>
  );
}
