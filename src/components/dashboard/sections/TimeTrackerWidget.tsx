import { useState, useEffect } from "react";
import { Clock, Coffee, LogIn, LogOut, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type PunchStatus = "Punched Out" | "Punched In" | "On Break";

export function TimeTrackerWidget() {
  const [status, setStatus] = useState<PunchStatus>("Punched Out");
  const [workSeconds, setWorkSeconds] = useState(0);
  const [breakSeconds, setBreakSeconds] = useState(0);

  // Simulated timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (status === "Punched In") {
      interval = setInterval(() => {
        setWorkSeconds(s => s + 1);
      }, 1000);
    } else if (status === "On Break") {
      interval = setInterval(() => {
        setBreakSeconds(s => s + 1);
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [status]);

  const formatTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handlePunch = () => {
    if (status === "Punched Out") {
      setStatus("Punched In");
    } else {
      setStatus("Punched Out");
    }
  };

  const handleBreak = () => {
    if (status === "Punched In") {
      setStatus("On Break");
    } else if (status === "On Break") {
      setStatus("Punched In");
    }
  };

  return (
    <div className="bg-card rounded-[32px] p-6 border border-border/60 shadow-sm relative overflow-hidden mb-8">
      <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
        <Clock className="w-48 h-48 text-foreground" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Status Indicator */}
        <div className="flex items-center gap-5 w-full md:w-auto">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-border">
            {status === "Punched Out" && <LogOut className="w-8 h-8 text-muted-foreground" />}
            {status === "Punched In" && <Clock className="w-8 h-8 text-primary" />}
            {status === "On Break" && <Coffee className="w-8 h-8 text-amber-500" />}
          </div>
          <div>
            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Current Status</p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                {status === "Punched In" && (
                  <>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </>
                )}
                {status === "On Break" && (
                  <>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                  </>
                )}
                {status === "Punched Out" && (
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-muted-foreground"></span>
                )}
              </span>
              <h2 className={cn("text-2xl font-black tracking-tight", 
                status === "Punched In" ? "text-primary" : 
                status === "On Break" ? "text-amber-500" : "text-muted-foreground"
              )}>
                {status}
              </h2>
            </div>
          </div>
        </div>

        {/* Timers */}
        <div className="flex items-center gap-8 px-8 border-x border-border/50">
          <div>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Work Hours</p>
            <p className="text-3xl font-black font-mono text-foreground">{formatTime(workSeconds)}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Break Hours</p>
            <p className="text-3xl font-black font-mono text-muted-foreground">{formatTime(breakSeconds)}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          {status !== "Punched Out" && (
            <button 
              onClick={handleBreak}
              className={cn("flex-1 md:flex-none px-6 py-3 rounded-2xl font-bold text-sm transition-colors flex items-center justify-center gap-2",
                status === "On Break" 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "bg-amber-100 text-amber-700 hover:bg-amber-200"
              )}
            >
              {status === "On Break" ? (
                <><CheckCircle2 className="w-4 h-4" /> End Break</>
              ) : (
                <><Coffee className="w-4 h-4" /> Take Break</>
              )}
            </button>
          )}

          <button 
            onClick={handlePunch}
            className={cn("flex-1 md:flex-none px-6 py-3 rounded-2xl font-bold text-sm transition-colors flex items-center justify-center gap-2",
              status === "Punched Out" 
                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20" 
                : "bg-destructive text-destructive-foreground hover:bg-destructive/90"
            )}
          >
            {status === "Punched Out" ? (
              <><LogIn className="w-4 h-4" /> Punch In</>
            ) : (
              <><LogOut className="w-4 h-4" /> Punch Out</>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
