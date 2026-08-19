import { useState, useMemo } from "react";
import { Plus, Trash2, FileText, Send, Save, ArrowLeft, Building2, Calendar, IndianRupee } from "lucide-react";
import { cn } from "@/lib/utils";

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
}

export function CreateInvoice({ onBack, isProforma = false }: { onBack?: (() => void) | undefined, isProforma?: boolean | undefined }) {
  const [clientName, setClientName] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  
  const [items, setItems] = useState<LineItem[]>([
    { id: "item1", description: "", quantity: 1, rate: 0 }
  ]);

  const taxRate = 0.18; // 18% GST mock

  const handleAddItem = () => {
    setItems([...items, { id: `item_${Date.now()}`, description: "", quantity: 1, rate: 0 }]);
  };

  const handleRemoveItem = (id: string) => {
    if (items.length === 1) return; // keep at least one
    setItems(items.filter(i => i.id !== id));
  };

  const updateItem = (id: string, field: keyof LineItem, value: any) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    }));
  };

  const subtotal = useMemo(() => {
    return items.reduce((acc, curr) => acc + (curr.quantity * curr.rate), 0);
  }, [items]);

  const taxAmount = subtotal * taxRate;
  const totalAmount = subtotal + taxAmount;

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          {onBack && (
            <button 
              onClick={onBack}
              className="p-2.5 bg-card border border-border/50 rounded-xl hover:bg-muted/50 transition-colors shadow-sm"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div>
            <h1 className="text-3xl font-black tracking-tight text-foreground flex items-center gap-2">
              <FileText className="w-8 h-8 text-primary" />
              {isProforma ? "Create Proforma Invoice" : "Create Invoice"}
            </h1>
            <p className="text-muted-foreground mt-1 text-sm font-medium">
              {isProforma 
                ? "Generate a preliminary bill of sale in advance of a delivery." 
                : "Generate a new standard invoice for a client."}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-card border border-border/50 text-foreground font-bold rounded-xl hover:bg-muted/50 transition-colors flex items-center gap-2 shadow-sm">
            <Save className="w-4 h-4" />
            Save Draft
          </button>
          <button className="px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-xl transition-colors flex items-center gap-2 shadow-sm">
            <Send className="w-4 h-4" />
            {isProforma ? "Generate Proforma" : "Generate Invoice"}
          </button>
        </div>
      </div>

      <div className="bg-card border border-border/50 rounded-3xl p-6 md:p-8 shadow-sm space-y-8 relative overflow-hidden">
        
        {/* Badging for Proforma */}
        {isProforma && (
          <div className="absolute top-8 right-[-40px] rotate-45 bg-amber-500 text-amber-950 font-black tracking-widest text-xs py-1.5 px-12 shadow-sm border border-amber-400">
            PROFORMA
          </div>
        )}

        {/* Invoice Details section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold flex items-center gap-2 text-foreground mb-2">
              <Building2 className="w-4 h-4 text-primary" />
              Bill To
            </h3>
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block">Client Name / Company</label>
              <input 
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g. Acme Corp"
                className="w-full px-4 py-2.5 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block">Client Address (Optional)</label>
              <textarea 
                placeholder="Billing address..."
                className="w-full px-4 py-2.5 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium resize-none h-20"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold flex items-center gap-2 text-foreground mb-2">
              <Calendar className="w-4 h-4 text-primary" />
              Dates & Reference
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block">Invoice Date</label>
                <input 
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                  className="w-full px-4 py-2.5 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block">Due Date</label>
                <input 
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full px-4 py-2.5 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block">PO Number / Reference</label>
              <input 
                type="text"
                placeholder="e.g. PO-98765"
                className="w-full px-4 py-2.5 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
              />
            </div>
          </div>
        </div>

        <hr className="border-border/50" />

        {/* Line Items Section */}
        <div>
          <h3 className="font-bold flex items-center gap-2 text-foreground mb-4">
            <IndianRupee className="w-4 h-4 text-primary" />
            Line Items
          </h3>
          
          <div className="space-y-3">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-4 py-2 bg-muted/30 rounded-xl border border-border/50">
              <div className="col-span-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Description</div>
              <div className="col-span-2 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Qty</div>
              <div className="col-span-2 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Rate (₹)</div>
              <div className="col-span-2 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Amount (₹)</div>
            </div>

            {/* Line Item Rows */}
            {items.map((item, index) => (
              <div key={item.id} className="grid grid-cols-12 gap-4 items-center px-4 group">
                <div className="col-span-6 relative">
                  <input 
                    type="text"
                    value={item.description}
                    onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                    placeholder="Item description..."
                    className="w-full px-4 py-2.5 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
                  />
                  {items.length > 1 && (
                    <button 
                      onClick={() => handleRemoveItem(item.id)}
                      className="absolute -left-8 top-1/2 -translate-y-1/2 p-1.5 text-rose-500 hover:bg-rose-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                      title="Remove Item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="col-span-2">
                  <input 
                    type="number"
                    min="1"
                    value={item.quantity || ""}
                    onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-2.5 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium text-right"
                  />
                </div>
                <div className="col-span-2">
                  <input 
                    type="number"
                    min="0"
                    value={item.rate || ""}
                    onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-2.5 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium text-right"
                  />
                </div>
                <div className="col-span-2 text-right font-bold text-sm text-foreground">
                  {(item.quantity * item.rate).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={handleAddItem}
            className="mt-4 px-4 py-2 bg-muted/50 hover:bg-muted text-foreground text-sm font-bold rounded-xl transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Line Item
          </button>
        </div>

        <hr className="border-border/50" />

        {/* Totals Section */}
        <div className="flex justify-end">
          <div className="w-full max-w-sm space-y-3 bg-muted/10 p-6 rounded-2xl border border-border/50">
            <div className="flex justify-between items-center text-sm font-bold text-muted-foreground">
              <span>Subtotal</span>
              <span>₹ {subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between items-center text-sm font-bold text-muted-foreground">
              <span>Tax (18%)</span>
              <span>₹ {taxAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="pt-3 border-t border-border/50 flex justify-between items-center">
              <span className="text-lg font-black text-foreground">Total</span>
              <span className="text-xl font-black text-primary">
                ₹ {totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block">Notes / Terms</label>
          <textarea 
            defaultValue={isProforma ? "This is a proforma invoice. It does not demand payment." : "Please process payment within the due date to avoid late fees."}
            className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium resize-none h-20"
          />
        </div>

      </div>
    </div>
  );
}
