import { useState } from "react";
import { ORG_DATA, OrgNodeData } from "./org-data";
import { ChevronDown, ChevronUp, Users, ZoomIn, ZoomOut, Maximize } from "lucide-react";
import { cn } from "@/lib/utils";

const OrgNodeCard = ({ node, isExpanded, toggleExpand }: { node: OrgNodeData, isExpanded: boolean, toggleExpand: () => void }) => {
  const hasChildren = node.children && node.children.length > 0;
  
  return (
    <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4 w-[220px] z-10 relative transition-all hover:shadow-md hover:-translate-y-1 group inline-block mx-auto">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-3">
          <img src={node.avatar} alt={node.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
          <span className={cn(
            "absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white",
            node.status === 'Active' ? 'bg-emerald-500' : 
            node.status === 'On Leave' ? 'bg-amber-500' : 'bg-blue-500'
          )} />
        </div>
        <h3 className="text-[14px] font-bold text-slate-900 mb-0.5">{node.name}</h3>
        <p className="text-[11px] text-slate-500 font-medium mb-3">{node.role}</p>
        <span className="px-2.5 py-1 bg-slate-50 text-slate-600 border border-slate-100 text-[10px] font-bold uppercase tracking-wider rounded-lg mb-2 inline-block">
          {node.department}
        </span>
        
        {hasChildren && (
          <button 
            onClick={toggleExpand}
            className="mt-2 w-full py-1.5 flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl transition-colors text-[11px] font-bold"
          >
            <Users className="w-3 h-3" />
            {node.children!.length} Reports
            {isExpanded ? <ChevronUp className="w-3 h-3 ml-1" /> : <ChevronDown className="w-3 h-3 ml-1" />}
          </button>
        )}
      </div>
    </div>
  );
};

const OrgTree = ({ node }: { node: OrgNodeData }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <li className="relative p-[20px] pt-[20px] text-center float-left table-cell org-node">
      <OrgNodeCard 
        node={node} 
        isExpanded={isExpanded} 
        toggleExpand={() => setIsExpanded(!isExpanded)} 
      />
      {hasChildren && isExpanded && (
        <ul className="pt-[20px] relative flex justify-center org-children animate-in fade-in slide-in-from-top-4 duration-300 m-0 p-0">
          {node.children!.map((child) => (
            <OrgTree key={child.id} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export function OrgStructure() {
  const [zoom, setZoom] = useState(1);

  return (
    <div className="w-full max-w-[1400px] mx-auto animate-in fade-in zoom-in-95 duration-300 flex flex-col h-[calc(100vh-120px)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 shrink-0">
        <div>
          <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-2">Organizational Structure</h1>
          <p className="text-[14px] text-slate-500">Visual hierarchy of teams and reporting lines across the company.</p>
        </div>
        
        <div className="flex items-center gap-2 bg-white border border-slate-200 p-1.5 rounded-2xl shadow-sm">
          <button 
            onClick={() => setZoom(Math.max(0.4, zoom - 0.1))}
            className="p-2 hover:bg-slate-100 rounded-xl text-slate-600 transition-colors"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-[12px] font-bold text-slate-600 w-12 text-center">
            {Math.round(zoom * 100)}%
          </span>
          <button 
            onClick={() => setZoom(Math.min(2, zoom + 0.1))}
            className="p-2 hover:bg-slate-100 rounded-xl text-slate-600 transition-colors"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <div className="w-px h-6 bg-slate-200 mx-1"></div>
          <button 
            onClick={() => setZoom(1)}
            className="p-2 hover:bg-slate-100 rounded-xl text-slate-600 transition-colors"
          >
            <Maximize className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Org Chart Container */}
      <div className="flex-1 bg-slate-50/50 border border-slate-200/60 rounded-3xl overflow-auto relative shadow-inner">
        
        {/* CSS for Org Chart lines */}
        <style dangerouslySetInnerHTML={{__html: `
          .org-children {
            padding-top: 20px; 
            position: relative;
            transition: all 0.5s;
          }
          
          .org-node {
            float: left; text-align: center;
            list-style-type: none;
            position: relative;
            padding: 20px 10px 0 10px;
            transition: all 0.5s;
          }

          /* Connectors */
          .org-node::before, .org-node::after {
            content: '';
            position: absolute; top: 0; right: 50%;
            border-top: 2px solid #cbd5e1;
            width: 50%; height: 20px;
          }
          .org-node::after {
            right: auto; left: 50%;
            border-left: 2px solid #cbd5e1;
          }

          /* We need to remove left-right connectors from elements without any siblings */
          .org-node:only-child::after, .org-node:only-child::before {
            display: none;
          }

          /* Remove space from the top of single children */
          .org-node:only-child { padding-top: 0; }

          /* Remove left connector from first child and right connector from last child */
          .org-node:first-child::before, .org-node:last-child::after {
            border: 0 none;
          }
          /* Adding back the vertical connector to the last nodes */
          .org-node:last-child::before {
            border-right: 2px solid #cbd5e1;
            border-radius: 0 5px 0 0;
          }
          .org-node:first-child::after {
            border-radius: 5px 0 0 0;
          }

          /* Vertical line going down from parents */
          .org-children::before {
            content: '';
            position: absolute; top: 0; left: 50%;
            border-left: 2px solid #cbd5e1;
            width: 0; height: 20px;
            transform: translateX(-50%);
          }
        `}} />

        <div className="min-w-max p-12 flex justify-center items-start min-h-full">
          <div style={{ transform: `scale(${zoom})`, transformOrigin: 'top center', transition: 'transform 0.3s ease' }}>
            <ul className="flex justify-center m-0 p-0">
              <OrgTree node={ORG_DATA} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
