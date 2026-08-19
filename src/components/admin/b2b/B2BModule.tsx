import { useState } from "react";
import { 
  Building2, Users, IndianRupee, Target, Briefcase, Handshake, 
  MapPin, AlertTriangle, ArrowRight, ArrowUpRight, CheckCircle2, 
  Clock, ArrowDownRight, Activity, Search, Filter, Plus, FileText, 
  MoreVertical, Check, X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";

// --- Sub-components ---

function B2BOverview() {
  const metrics = [
    { label: "Total Partners", value: "42", change: "+3", trend: "up" },
    { label: "Active Partners", value: "38", change: "90% active", trend: "neutral" },
    { label: "Total Leads", value: "156", change: "+12", trend: "up" },
    { label: "Conversion Rate", value: "24%", change: "+2%", trend: "up" },
    { label: "Total Deal Value", value: "₹12.5M", change: "this year", trend: "neutral" },
    { label: "Commission Generated", value: "₹1.8M", change: "this year", trend: "neutral" },
    { label: "Pending Commission", value: "₹4.2L", change: "awaiting settlement", trend: "neutral" },
    { label: "Paid Commission", value: "₹1.38M", change: "this year", trend: "neutral" }
  ];

  const dealValueData = [
    { month: 'Jan', value: 400000 }, { month: 'Feb', value: 300000 }, { month: 'Mar', value: 500000 },
    { month: 'Apr', value: 450000 }, { month: 'May', value: 600000 }, { month: 'Jun', value: 700000 },
    { month: 'Jul', value: 900000 }, { month: 'Aug', value: 1200000 }
  ];

  const commissionData = [
    { month: 'Jan', generated: 40000, paid: 40000 },
    { month: 'Feb', generated: 30000, paid: 30000 },
    { month: 'Mar', generated: 50000, paid: 40000 },
    { month: 'Apr', generated: 45000, paid: 45000 },
    { month: 'May', generated: 60000, paid: 50000 },
    { month: 'Jun', generated: 70000, paid: 60000 },
    { month: 'Jul', generated: 90000, paid: 0 },
    { month: 'Aug', generated: 120000, paid: 0 }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, i) => (
          <div key={i} className="bg-card border border-border/50 rounded-2xl p-5 shadow-sm">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">{metric.label}</p>
            <h3 className="text-2xl font-black text-foreground">{metric.value}</h3>
            <p className={cn("text-[10px] font-bold mt-1 uppercase", metric.trend === 'up' ? 'text-emerald-500' : 'text-muted-foreground')}>
              {metric.change}
            </p>
          </div>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-sm min-h-[300px] flex flex-col">
          <h3 className="text-lg font-black mb-6">Deal Value (Last 12 Months)</h3>
          <div className="flex-1 w-full h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dealValueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.5} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "var(--muted-foreground)" }} dy={10} />
                <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "var(--card)", borderColor: "var(--border)", borderRadius: "12px", color: "var(--foreground)", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)", padding: "12px" }}
                  labelStyle={{ color: "var(--muted-foreground)", marginBottom: "4px", fontWeight: "bold" }}
                  itemStyle={{ fontWeight: "bold" }}
                  cursor={{ fill: "var(--muted)", opacity: 0.2 }}
                />
                <Line type="monotone" dataKey="value" stroke="var(--chart-1)" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-sm min-h-[300px] flex flex-col">
          <h3 className="text-lg font-black mb-6">Commission Generated vs Paid</h3>
          <div className="flex-1 w-full h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={commissionData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.5} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "var(--muted-foreground)" }} dy={10} />
                <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "var(--card)", borderColor: "var(--border)", borderRadius: "12px", color: "var(--foreground)", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)", padding: "12px" }}
                  labelStyle={{ color: "var(--muted-foreground)", marginBottom: "4px", fontWeight: "bold" }}
                  itemStyle={{ fontWeight: "bold" }}
                  cursor={{ fill: "var(--muted)", opacity: 0.2 }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} />
                <Bar dataKey="generated" name="Generated" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="paid" name="Paid" fill="var(--chart-2)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

function B2BPartners() {
  const partners = [
    { name: "TechNova Solutions", type: "Technology", status: "Active", deals: 12, value: "₹2.5M" },
    { name: "ABC Business Group", type: "Consulting", status: "Active", deals: 8, value: "₹1.2M" },
    { name: "XYZ Packaging", type: "Manufacturing", status: "Inactive", deals: 3, value: "₹850K" },
  ];

  return (
    <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-black">Partner Directory</h3>
        <Dialog>
          <DialogTrigger asChild>
            <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:bg-primary/90 transition-colors">
              <Plus className="w-4 h-4" /> Add Partner
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-black">Add New Partner</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-muted-foreground">Company Name</label>
                <input className="w-full flex h-10 rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="e.g. Acme Corp" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-muted-foreground">Partner Type</label>
                <select className="w-full flex h-10 rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <option>Technology</option>
                  <option>Consulting</option>
                  <option>Manufacturing</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-muted-foreground">Primary Contact Email</label>
                <input type="email" className="w-full flex h-10 rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="contact@company.com" />
              </div>
            </div>
            <DialogFooter>
              <button onClick={() => toast.success("Partner invitation sent successfully!")} className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:bg-primary/90 transition-colors">
                Send Invitation
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border/50">
              <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Partner Name</th>
              <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Type</th>
              <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Deals Closed</th>
              <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Total Value</th>
              <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {partners.map((partner, i) => (
              <tr key={i} className="hover:bg-muted/30 transition-colors">
                <td className="p-4 font-bold text-foreground">{partner.name}</td>
                <td className="p-4 text-sm font-medium text-muted-foreground">{partner.type}</td>
                <td className="p-4">
                  <span className={cn("px-2 py-1 text-xs font-bold uppercase rounded-md", partner.status === 'Active' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-muted text-muted-foreground')}>
                    {partner.status}
                  </span>
                </td>
                <td className="p-4 font-bold">{partner.deals}</td>
                <td className="p-4 font-bold text-emerald-600">{partner.value}</td>
                <td className="p-4 text-right">
                  <button onClick={() => toast.info(`Viewing details for ${partner.name}`)} className="p-2 hover:bg-muted rounded-lg transition-colors"><MoreVertical className="w-4 h-4 text-muted-foreground" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function B2BGenericTable({ title, columns, data }: { title: string, columns: string[], data: any[][] }) {
  return (
    <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-black">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border/50">
              {columns.map((col, i) => (
                <th key={i} className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-muted/30 transition-colors">
                {row.map((cell, j) => (
                  <td key={j} className="p-4 text-sm font-medium text-foreground">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- Main Module Wrapper ---

export function B2BModule({ active }: { active: string }) {
  const currentTab = active.split("/").pop();

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8 pb-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground mb-1">
            <span>Dashboard</span>
            <span>/</span>
            <span>B2B Partnership</span>
            <span>/</span>
            <span className="text-foreground capitalize">{currentTab === 'b2b' ? 'Overview' : currentTab}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-foreground capitalize">
            {currentTab === 'b2b' ? 'B2B Overview' : currentTab?.replace("-", " ")}
          </h1>
        </div>
      </div>

      {/* Content Rendering */}
      {currentTab === 'b2b' && <B2BOverview />}
      {currentTab === 'partners' && <B2BPartners />}
      {currentTab === 'leads' && <B2BGenericTable title="Partner Leads" columns={["Lead Name", "Partner", "Status", "Date", "Expected Value"]} data={[["Tech Corp", "TechNova Solutions", "New", "12 Aug 2026", "₹500K"], ["Design Co", "ABC Business Group", "Contacted", "10 Aug 2026", "₹200K"]]} />}
      {currentTab === 'opportunities' && <B2BGenericTable title="Opportunities" columns={["Opportunity", "Partner", "Stage", "Probability", "Value"]} data={[["ERP Implementation", "TechNova Solutions", "Proposal", "70%", "₹1.5M"], ["Marketing Retainer", "ABC Business Group", "Negotiation", "90%", "₹400K"]]} />}
      {currentTab === 'deals' && <B2BGenericTable title="Closed Deals" columns={["Deal Name", "Partner", "Close Date", "Value", "Commission Due"]} data={[["Web Portal", "TechNova Solutions", "12 Aug 2026", "₹850K", "₹85K"], ["Brand Refresh", "ABC Business Group", "05 Aug 2026", "₹300K", "₹30K"]]} />}
      {currentTab === 'invoices' && <B2BGenericTable title="Invoices" columns={["Invoice #", "Partner", "Date", "Amount", "Status"]} data={[["INV-2026-001", "TechNova Solutions", "12 Aug 2026", "₹850K", "Paid"], ["INV-2026-002", "ABC Business Group", "05 Aug 2026", "₹300K", "Pending"]]} />}
      {currentTab === 'commission' && <B2BGenericTable title="Commission Tracking" columns={["Partner", "Deal", "Commission %", "Amount", "Status"]} data={[["TechNova Solutions", "Web Portal", "10%", "₹85K", "Pending"], ["ABC Business Group", "Brand Refresh", "10%", "₹30K", "Paid"]]} />}
      {currentTab === 'settlement' && <B2BGenericTable title="Monthly Settlements" columns={["Month", "Partner", "Total Commission", "Status", "Settlement Date"]} data={[["August 2026", "TechNova Solutions", "₹120K", "Pending", "-"], ["July 2026", "ABC Business Group", "₹45K", "Settled", "01 Aug 2026"]]} />}
      {currentTab === 'performance' && (
        <div className="flex flex-col items-center justify-center h-[400px] text-center space-y-4 bg-card border border-border/50 rounded-3xl p-6 shadow-sm">
          <Activity className="w-16 h-16 text-muted-foreground/20" />
          <h2 className="text-2xl font-black">Performance Analytics</h2>
          <p className="text-muted-foreground max-w-md">Detailed partner performance graphs and matrices will be rendered here.</p>
        </div>
      )}
    </div>
  );
}
