import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface SettingsContextType {
  leaveTypes: string[];
  addLeaveType: (type: string) => void;
  removeLeaveType: (type: string) => void;
}

const defaultLeaveTypes = ["Sick Leave", "Casual Leave", "Annual Leave", "Unpaid Leave"];

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [leaveTypes, setLeaveTypes] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("hrms_leave_types");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          return defaultLeaveTypes;
        }
      }
    }
    return defaultLeaveTypes;
  });

  useEffect(() => {
    localStorage.setItem("hrms_leave_types", JSON.stringify(leaveTypes));
  }, [leaveTypes]);

  const addLeaveType = (type: string) => {
    if (!leaveTypes.includes(type)) {
      setLeaveTypes(prev => [...prev, type]);
    }
  };

  const removeLeaveType = (type: string) => {
    setLeaveTypes(prev => prev.filter(t => t !== type));
  };

  return (
    <SettingsContext.Provider value={{ leaveTypes, addLeaveType, removeLeaveType }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettingsContext() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettingsContext must be used within a SettingsProvider");
  }
  return context;
}
