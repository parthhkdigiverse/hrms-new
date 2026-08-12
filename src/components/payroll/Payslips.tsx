import { useState } from "react";
import { formatCurrency, MOCK_EMPLOYEES } from "./payroll-data";
import { 
  Download, 
  Mail, 
  Printer, 
  ChevronDown, 
  FileText, 
  MessageCircle,
  ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Payslips() {
  const [selectedEmpId, setSelectedEmpId] = useState(MOCK_EMPLOYEES[0]?.id || "");
  const selectedEmp = MOCK_EMPLOYEES.find(e => e.id === selectedEmpId) || MOCK_EMPLOYEES[0];

  if (!selectedEmp) return null;

  const totalEarnings = 105304;
  const totalDeductions = 11708;
  const netPayable = 93596;

  // Extract initials
  const initials = selectedEmp.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-[1200px] mx-auto pb-12">
      
      {/* Top Page Header */}
      <div className="mb-8 flex items-end justify-between border-b border-border pb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Payslip</h1>
          <p className="mt-1 text-[14px] text-muted-foreground">Pay period: 01 Jul 2026 – 31 Jul 2026</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <select 
              value={selectedEmpId}
              onChange={(e) => setSelectedEmpId(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2 bg-white border border-border/80 rounded-lg text-[13px] font-semibold text-foreground/80 outline-none focus:border-emerald-500 shadow-sm min-w-[200px]"
            >
              {MOCK_EMPLOYEES.map(emp => (
                <option key={emp.id} value={emp.id}>{emp.name}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
          
          <button className="flex items-center gap-2 bg-white border border-border/80 px-4 py-2 rounded-lg text-foreground/80 text-[13px] font-semibold hover:bg-muted/50 transition-colors shadow-sm">
            <FileText className="h-4 w-4" /> PDF
          </button>
          <button className="flex items-center gap-2 bg-white border border-border/80 px-4 py-2 rounded-lg text-foreground/80 text-[13px] font-semibold hover:bg-muted/50 transition-colors shadow-sm">
            <Mail className="h-4 w-4" /> Email
          </button>
          <button className="flex items-center gap-2 bg-white border border-border/80 px-4 py-2 rounded-lg text-foreground/80 text-[13px] font-semibold hover:bg-muted/50 transition-colors shadow-sm">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </button>
          <button className="flex items-center gap-2 bg-white border border-border/80 px-4 py-2 rounded-lg text-foreground/80 text-[13px] font-semibold hover:bg-muted/50 transition-colors shadow-sm">
            <Printer className="h-4 w-4" /> Print
          </button>
          <button className="flex items-center gap-2 bg-[#0c7851] hover:bg-[#00925e] text-white px-5 py-2 rounded-lg text-[13px] font-semibold shadow-sm transition-colors">
            <Download className="h-4 w-4" /> Download
          </button>
        </div>
      </div>

      {/* Payslip Document */}
      <div className="bg-white rounded-t-3xl rounded-b-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden mx-auto border border-border/40">
        
        {/* Document Header (Green) */}
        <div className="bg-[#0c7851] px-8 py-6 text-white flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 shrink-0">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-[22px] font-bold tracking-tight">HK DigiVerse Pvt. Ltd.</h2>
              <p className="text-[12px] text-white/80 mt-0.5">3rd Floor, Cyber Park, Pune 411045 · GSTIN 27AABCH1234K1Z9</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/80 mb-0.5">PAYSLIP</p>
            <h3 className="text-2xl font-bold">July 2026</h3>
          </div>
        </div>

        {/* Employee Details Grid */}
        <div className="px-8 py-8 flex gap-8 border-b border-border/60">
          <div className="w-16 h-16 rounded-full bg-[#0c7851] text-white flex items-center justify-center text-xl font-bold shrink-0">
            {initials}
          </div>
          <div className="flex-1 grid grid-cols-3 gap-y-6 gap-x-8">
            <div>
              <p className="text-[12px] text-muted-foreground mb-1">Employee Name</p>
              <p className="text-[14px] font-semibold text-foreground">{selectedEmp.name}</p>
            </div>
            <div>
              <p className="text-[12px] text-muted-foreground mb-1">Employee ID</p>
              <p className="text-[14px] font-semibold text-foreground">{selectedEmp.empId}</p>
            </div>
            <div>
              <p className="text-[12px] text-muted-foreground mb-1">Department</p>
              <p className="text-[14px] font-semibold text-foreground">{selectedEmp.department}</p>
            </div>
            <div>
              <p className="text-[12px] text-muted-foreground mb-1">Designation</p>
              <p className="text-[14px] font-semibold text-foreground">{selectedEmp.designation}</p>
            </div>
            <div>
              <p className="text-[12px] text-muted-foreground mb-1">Joining Date</p>
              <p className="text-[14px] font-semibold text-foreground">{selectedEmp.joiningDate}</p>
            </div>
            <div>
              <p className="text-[12px] text-muted-foreground mb-1">Employment Type</p>
              <p className="text-[14px] font-semibold text-foreground">{selectedEmp.type}</p>
            </div>
            <div>
              <p className="text-[12px] text-muted-foreground mb-1">Bank Account</p>
              <p className="text-[14px] font-semibold text-foreground">HDFC Bank ••••4821</p>
            </div>
            <div>
              <p className="text-[12px] text-muted-foreground mb-1">PAN</p>
              <p className="text-[14px] font-semibold text-foreground">AXQPS4412J</p>
            </div>
            <div>
              <p className="text-[12px] text-muted-foreground mb-1">UAN</p>
              <p className="text-[14px] font-semibold text-foreground">100234556711</p>
            </div>
          </div>
        </div>

        {/* Salary Breakdown */}
        <div className="px-8 py-8 grid grid-cols-2 gap-16">
          
          {/* Earnings */}
          <div>
            <h4 className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wider mb-6">Earnings & Allowances</h4>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">Basic Salary</span>
                <span className="font-semibold text-foreground">₹36,800</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">HRA</span>
                <span className="font-semibold text-foreground">₹18,400</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">Special Allowance</span>
                <span className="font-semibold text-foreground">₹12,880</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">Medical Allowance</span>
                <span className="font-semibold text-foreground">₹4,600</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">Travel Allowance</span>
                <span className="font-semibold text-foreground">₹4,600</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">Internet Allowance</span>
                <span className="font-semibold text-foreground">₹2,760</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">Food Allowance</span>
                <span className="font-semibold text-foreground">₹3,680</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">Performance Allowance</span>
                <span className="font-semibold text-foreground">₹5,520</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">Other Allowance</span>
                <span className="font-semibold text-foreground">₹2,760</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">Overtime (6 hrs)</span>
                <span className="font-semibold text-foreground">₹5,304</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">Bonus</span>
                <span className="font-semibold text-foreground">₹8,000</span>
              </div>
            </div>
          </div>

          {/* Deductions */}
          <div>
            <h4 className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wider mb-6">Deductions</h4>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">Professional Tax</span>
                <span className="font-semibold text-foreground">₹200</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">TDS</span>
                <span className="font-semibold text-foreground">₹5,520</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">Provident Fund</span>
                <span className="font-semibold text-foreground">₹1,800</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">ESIC</span>
                <span className="font-semibold text-foreground">₹0</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">Health Insurance</span>
                <span className="font-semibold text-foreground">₹650</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">Loan Recovery</span>
                <span className="font-semibold text-foreground">₹0</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">Advance Salary Recovery</span>
                <span className="font-semibold text-foreground">₹0</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">Penalty</span>
                <span className="font-semibold text-foreground">₹0</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">Late Coming Deduction</span>
                <span className="font-semibold text-foreground">₹0</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">Leave Deduction</span>
                <span className="font-semibold text-foreground">₹3,538</span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-muted-foreground">Other Deduction</span>
                <span className="font-semibold text-foreground">₹0</span>
              </div>
            </div>
          </div>
          
        </div>

        {/* Totals Border Row */}
        <div className="px-8 pb-8 pt-4 grid grid-cols-2 gap-16 border-t border-border/40 mt-auto">
          <div className="flex justify-between items-center">
            <span className="text-[14px] font-bold text-foreground">Total Earnings</span>
            <span className="text-[14px] font-bold text-foreground">{formatCurrency(totalEarnings)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[14px] font-bold text-foreground">Total Deductions</span>
            <span className="text-[14px] font-bold text-foreground">{formatCurrency(totalDeductions)}</span>
          </div>
        </div>

        {/* Footer Area: Net Salary (Green) */}
        <div className="mx-6 mb-6 mt-2 bg-[#0c7851] rounded-2xl p-6 text-white flex items-center justify-between shadow-sm">
          <div>
            <p className="text-[12px] font-semibold text-white/80 uppercase tracking-wider mb-1">NET SALARY PAYABLE</p>
            <p className="text-[32px] font-black leading-none">{formatCurrency(netPayable)}</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-full text-[#0c7851] text-[13px] font-bold shadow-sm">
            Credited to HDFC Bank ••••4821
          </div>
        </div>

      </div>

    </div>
  );
}
