export interface SalaryComponent {
  id: string;
  name: string;
  amount: number;
  type: "earnings" | "deductions";
}

export interface SalaryHistory {
  date: string;
  amount: number;
  reason: string;
  actionBy: string;
  type: "Promotion" | "Increase" | "Initial";
}

export interface EmployeeSalary {
  id: string;
  empId: string;
  name: string;
  designation: string;
  department: string;
  joiningDate: string;
  type: string;
  effectiveDate: string;
  grossSalary: number;
  components: SalaryComponent[];
  history: SalaryHistory[];
}

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

export const MOCK_EMPLOYEES: EmployeeSalary[] = [
  {
    id: "e1",
    empId: "HKD-001",
    name: "Ananya Sharma",
    designation: "Senior Software Engineer",
    department: "Engineering",
    joiningDate: "11 Mar 2024",
    type: "Full Time",
    effectiveDate: "01 Jul 2026",
    grossSalary: 92000,
    components: [
      { id: "c1", name: "Basic Salary", amount: 36800, type: "earnings" },
      { id: "c2", name: "HRA", amount: 18400, type: "earnings" },
      { id: "c3", name: "Special Allowance", amount: 12880, type: "earnings" },
      { id: "c4", name: "Medical Allowance", amount: 4600, type: "earnings" },
      { id: "c5", name: "Travel Allowance", amount: 4600, type: "earnings" },
      { id: "c6", name: "Internet Allowance", amount: 2760, type: "earnings" },
      { id: "c7", name: "Food Allowance", amount: 3680, type: "earnings" },
      { id: "c8", name: "Performance Allowance", amount: 5520, type: "earnings" },
      { id: "c9", name: "Other Allowance", amount: 2760, type: "earnings" },
      
      { id: "d1", name: "Professional Tax", amount: 200, type: "deductions" },
      { id: "d2", name: "TDS", amount: 5520, type: "deductions" },
      { id: "d3", name: "Provident Fund", amount: 1800, type: "deductions" },
      { id: "d4", name: "ESIC", amount: 0, type: "deductions" },
      { id: "d5", name: "Health Insurance", amount: 650, type: "deductions" },
      { id: "d6", name: "Loan Recovery", amount: 0, type: "deductions" },
      { id: "d7", name: "Leave Deduction", amount: 3538, type: "deductions" }
    ],
    history: [
      { date: "01 Jul 2026", amount: 92000, reason: "Promoted to Senior Engineer", actionBy: "CEO", type: "Promotion" },
      { date: "01 Apr 2025", amount: 74000, reason: "Annual appraisal FY25", actionBy: "HR Admin", type: "Increase" },
      { date: "11 Mar 2024", amount: 62000, reason: "Joining salary", actionBy: "HR Admin", type: "Initial" }
    ]
  },
  {
    id: "e2",
    empId: "HKD-002",
    name: "Rahul Verma",
    designation: "Regional Sales Manager",
    department: "Sales",
    joiningDate: "09 Jan 2023",
    type: "Full Time",
    effectiveDate: "01 Jan 2026",
    grossSalary: 85000,
    components: [
      { id: "c1", name: "Basic Salary", amount: 34000, type: "earnings" },
      { id: "c2", name: "HRA", amount: 17000, type: "earnings" },
      { id: "c3", name: "Special Allowance", amount: 34000, type: "earnings" },
      { id: "d1", name: "Professional Tax", amount: 200, type: "deductions" },
      { id: "d2", name: "TDS", amount: 4800, type: "deductions" },
      { id: "d3", name: "Loan Recovery", amount: 3000, type: "deductions" }
    ],
    history: [
      { date: "01 Jan 2026", amount: 85000, reason: "Mid-year adjustment", actionBy: "HR Admin", type: "Increase" },
      { date: "15 Jun 2025", amount: 75000, reason: "Joining salary", actionBy: "HR Admin", type: "Initial" }
    ]
  },
  {
    id: "e3",
    empId: "HKD-003",
    name: "Priya Nair",
    designation: "HR Executive",
    department: "Human Resources",
    joiningDate: "02 Jun 2025",
    type: "Full Time",
    effectiveDate: "01 Jul 2026",
    grossSalary: 38000,
    components: [
      { id: "c1", name: "Basic Salary", amount: 15200, type: "earnings" },
      { id: "c2", name: "HRA", amount: 7600, type: "earnings" },
      { id: "c3", name: "Special Allowance", amount: 15200, type: "earnings" },
      { id: "d1", name: "Professional Tax", amount: 200, type: "deductions" },
      { id: "d2", name: "TDS", amount: 0, type: "deductions" },
      { id: "d3", name: "Provident Fund", amount: 1800, type: "deductions" }
    ],
    history: [
      { date: "01 Jul 2026", amount: 38000, reason: "Annual appraisal", actionBy: "HR Admin", type: "Increase" },
      { date: "10 Feb 2025", amount: 32000, reason: "Joining salary", actionBy: "HR Admin", type: "Initial" }
    ]
  },
  {
    id: "e4",
    empId: "HKD-004",
    name: "Imran Qureshi",
    designation: "Accounts Lead",
    department: "Finance",
    joiningDate: "21 Nov 2022",
    type: "Full Time",
    effectiveDate: "01 Oct 2025",
    grossSalary: 71000,
    components: [
      { id: "c1", name: "Basic Salary", amount: 28400, type: "earnings" },
      { id: "c2", name: "HRA", amount: 14200, type: "earnings" },
      { id: "c3", name: "Special Allowance", amount: 9940, type: "earnings" },
      { id: "c4", name: "Medical Allowance", amount: 3550, type: "earnings" },
      { id: "c5", name: "Travel Allowance", amount: 3550, type: "earnings" },
      { id: "c6", name: "Internet Allowance", amount: 2130, type: "earnings" },
      { id: "c7", name: "Food Allowance", amount: 2840, type: "earnings" },
      { id: "c8", name: "Performance Allowance", amount: 4260, type: "earnings" },
      { id: "c9", name: "Other Allowance", amount: 2130, type: "earnings" },
      { id: "d1", name: "Professional Tax", amount: 200, type: "deductions" },
      { id: "d2", name: "TDS", amount: 4260, type: "deductions" },
      { id: "d3", name: "Provident Fund", amount: 1800, type: "deductions" },
      { id: "d4", name: "ESIC", amount: 0, type: "deductions" },
      { id: "d5", name: "Health Insurance", amount: 650, type: "deductions" }
    ],
    history: [
      { date: "01 Apr 2026", amount: 71000, reason: "Annual appraisal", actionBy: "HR Admin", type: "Increase" },
      { date: "05 May 2024", amount: 55000, reason: "Joining salary", actionBy: "HR Admin", type: "Initial" }
    ]
  },
  {
    id: "e5",
    empId: "HKD-005",
    name: "Sneha Patil",
    designation: "Product Designer",
    department: "Design",
    joiningDate: "05 Jan 2026",
    type: "Full Time",
    effectiveDate: "05 Jan 2026",
    grossSalary: 54000,
    components: [
      { id: "c1", name: "Basic Salary", amount: 21600, type: "earnings" },
      { id: "c2", name: "HRA", amount: 10800, type: "earnings" },
      { id: "c3", name: "Special Allowance", amount: 21600, type: "earnings" },
      { id: "d1", name: "Professional Tax", amount: 200, type: "deductions" },
      { id: "d2", name: "TDS", amount: 1200, type: "deductions" },
      { id: "d3", name: "Provident Fund", amount: 1800, type: "deductions" }
    ],
    history: [
      { date: "15 Oct 2025", amount: 54000, reason: "Joining salary", actionBy: "HR Admin", type: "Initial" }
    ]
  },
  {
    id: "e6",
    empId: "HKD-006",
    name: "Vikram Joshi",
    designation: "QA Engineer",
    department: "Engineering",
    joiningDate: "17 Feb 2025",
    type: "Contract",
    effectiveDate: "01 Apr 2026",
    grossSalary: 42000,
    components: [
      { id: "c1", name: "Basic Salary", amount: 16800, type: "earnings" },
      { id: "c2", name: "HRA", amount: 8400, type: "earnings" },
      { id: "c3", name: "Special Allowance", amount: 16800, type: "earnings" },
      { id: "d1", name: "Professional Tax", amount: 200, type: "deductions" },
      { id: "d2", name: "Provident Fund", amount: 1800, type: "deductions" }
    ],
    history: [
      { date: "20 Nov 2025", amount: 42000, reason: "Joining salary", actionBy: "HR Admin", type: "Initial" }
    ]
  },
  {
    id: "e7",
    empId: "HKD-007",
    name: "Meera Krishnan",
    designation: "Growth Marketer",
    department: "Marketing",
    joiningDate: "19 Aug 2024",
    type: "Full Time",
    effectiveDate: "01 Jun 2026",
    grossSalary: 65000,
    components: [
      { id: "c1", name: "Basic Salary", amount: 26000, type: "earnings" },
      { id: "c2", name: "HRA", amount: 13000, type: "earnings" },
      { id: "c3", name: "Special Allowance", amount: 26000, type: "earnings" },
      { id: "d1", name: "Professional Tax", amount: 200, type: "deductions" },
      { id: "d2", name: "TDS", amount: 3100, type: "deductions" }
    ],
    history: [
      { date: "01 Sep 2025", amount: 65000, reason: "Joining salary", actionBy: "HR Admin", type: "Initial" }
    ]
  },
  {
    id: "e8",
    empId: "HKD-008",
    name: "Arjun Desai",
    designation: "Operations Associate",
    department: "Operations",
    joiningDate: "12 Dec 2025",
    type: "Full Time",
    effectiveDate: "12 Dec 2025",
    grossSalary: 22000,
    components: [
      { id: "c1", name: "Basic Salary", amount: 11000, type: "earnings" },
      { id: "c2", name: "HRA", amount: 5500, type: "earnings" },
      { id: "c3", name: "Special Allowance", amount: 5500, type: "earnings" },
      { id: "d1", name: "Professional Tax", amount: 200, type: "deductions" },
      { id: "d2", name: "Provident Fund", amount: 1320, type: "deductions" },
      { id: "d3", name: "ESIC", amount: 165, type: "deductions" }
    ],
    history: [
      { date: "12 Dec 2025", amount: 22000, reason: "Joining salary", actionBy: "HR Admin", type: "Initial" }
    ]
  }
];

export const MOCK_AUDIT_LOGS = [
  { id: 1, action: "Approved payroll for Jun 2026 — locked as read-only", by: "CEO", date: "2026-07-24 18:22" },
  { id: 2, action: "Added Loan EMI deduction ₹3,000 for HKD-002", by: "Accounts", date: "2026-07-22 11:05" },
  { id: 3, action: "Created referral bonus BD-1044 (pending approval)", by: "HR Admin", date: "2026-07-18 09:47" },
  { id: 4, action: "Salary revision HKD-001 ₹74,000 → ₹92,000 (Promotion)", by: "CEO", date: "2026-07-01 10:12" },
  { id: 5, action: "Salary revision HKD-003 ₹32,000 → ₹38,000 (Increase)", by: "HR Admin", date: "2026-07-01 10:03" }
];

export const MOCK_PAYROLL_TRENDS = [
  { month: "Jan", cost: 3.8 },
  { month: "Feb", cost: 3.8 },
  { month: "Mar", cost: 3.8 },
  { month: "Apr", cost: 4.1 },
  { month: "May", cost: 4.1 },
  { month: "Jun", cost: 4.1 },
  { month: "Jul", cost: 4.22 }
];

export const MOCK_DEPARTMENT_COSTS = [
  { name: "Engineering", cost: 134, fill: "#10b981" },
  { name: "Sales", cost: 85, fill: "#f59e0b" },
  { name: "Finance", cost: 68, fill: "#6366f1" },
  { name: "Marketing", cost: 65, fill: "#ec4899" },
  { name: "Design", cost: 54, fill: "#8b5cf6" },
  { name: "HR", cost: 38, fill: "#14b8a6" },
  { name: "Operations", cost: 22, fill: "#f43f5e" }
];
