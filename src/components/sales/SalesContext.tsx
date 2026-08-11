import { createContext, useContext, useState, ReactNode } from "react";
import { leads as initialLeads, pipelineStages, type Lead } from "./sales-data";

type SalesContextType = {
  leads: Lead[];
  setLeads: (leads: Lead[]) => void;
  stages: string[];
  setStages: (stages: string[]) => void;
};

const SalesContext = createContext<SalesContextType | undefined>(undefined);

export function SalesProvider({ children }: { children: ReactNode }) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [stages, setStages] = useState<string[]>(
    pipelineStages.map((s) => s.stage)
  );

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
