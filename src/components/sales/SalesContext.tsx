import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { leads as initialLeads, pipelineStages, type Lead } from "./sales-data";

type SalesContextType = {
  leads: Lead[];
  setLeads: (leads: Lead[]) => void;
  stages: string[];
  setStages: (stages: string[]) => void;
};

const SalesContext = createContext<SalesContextType | undefined>(undefined);

export function SalesProvider({ children }: { children: ReactNode }) {
  const [leads, setLeads] = useState<Lead[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('hrms_sales_leads');
      return saved ? JSON.parse(saved) : initialLeads;
    }
    return initialLeads;
  });
  
  const [stages, setStages] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('hrms_sales_stages');
      return saved ? JSON.parse(saved) : pipelineStages.map((s) => s.stage);
    }
    return pipelineStages.map((s) => s.stage);
  });

  useEffect(() => { if (typeof window !== 'undefined') localStorage.setItem('hrms_sales_leads', JSON.stringify(leads)); }, [leads]);
  useEffect(() => { if (typeof window !== 'undefined') localStorage.setItem('hrms_sales_stages', JSON.stringify(stages)); }, [stages]);

  return (
    <SalesContext.Provider value={{ leads, setLeads, stages, setStages }}>
      {children}
    </SalesContext.Provider>
  );
}

export function useSales() {
  const context = useContext(SalesContext);
  if (context === undefined) {
    throw new Error("useSales must be used within a SalesProvider");
  }
  return context;
}
