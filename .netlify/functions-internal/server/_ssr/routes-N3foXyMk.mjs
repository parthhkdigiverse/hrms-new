import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { $ as MessageCircle, $t as ChartColumn, A as Shapes, At as Factory, B as Printer, Bt as CircleX, C as Sparkles, Ct as Gift, D as Shirt, Dt as Files, E as Shuffle, Et as Flame, F as ScrollText, Ft as CloudUpload, G as Phone, Gt as CircleAlert, H as Plane, Ht as CircleMinus, I as Scissors, It as CloudSun, J as Paperclip, Jt as ChevronLeft, K as Pencil, Kt as ChevronUp, L as Rocket, Lt as Clock, M as Settings2, Mt as Dumbbell, N as Send, Nt as Download, O as Shield, Ot as FileText, P as Search, Pt as Cpu, Q as MessageSquareWarning, Qt as ChartPie, R as ReceiptText, Rt as ClipboardList, S as SquareCheckBig, St as GraduationCap, T as SlidersHorizontal, Tt as Funnel, U as Pin, Ut as CircleCheck, V as Plus, Vt as CirclePlay, W as PinOff, Wt as CircleCheckBig, X as MessageSquare, Xt as Check, Y as MonitorPlay, Yt as ChevronDown, Z as MessagesSquare, Zt as CheckCheck, _ as Trash2, _t as History, a as Wallet, an as Building2, at as LogOut, b as Stethoscope, bt as HardHat, c as UtensilsCrossed, cn as Bell, ct as List, d as UserPlus, dn as ArrowUpRight, dt as LayoutGrid, en as Car, et as Menu, f as Upload, fn as ArrowRight, ft as LayoutDashboard, g as TrendingDown, gt as IndianRupee, h as TrendingUp, hn as Activity, ht as Info, i as X, in as CalendarDays, it as Mail, j as Settings, jt as Ellipsis, k as ShieldCheck, kt as FileSpreadsheet, l as Users, ln as Banknote, lt as ListTodo, m as TriangleAlert, mn as ArrowDownRight, mt as Kanban, n as ZoomIn, nn as CalendarRange, nt as Maximize, o as Vote, on as Briefcase, ot as Lock, p as Trophy, pn as ArrowRightLeft, pt as Landmark, q as Pen, qt as ChevronRight, r as Zap, rn as CalendarPlus, rt as MapPin, s as Video, sn as BookOpen, st as LockOpen, t as ZoomOut, tn as Calendar, tt as Megaphone, u as User, un as Award, ut as ListPlus, v as Target, vt as HeartPulse, w as Smile, wt as Gem, x as Star, xt as GripVertical, y as Table2, yt as Hash, z as Receipt, zt as Circle } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as YAxis, c as Line, d as Pie, f as Cell, h as Legend, i as LineChart, l as CartesianGrid, m as Tooltip, n as PieChart, o as XAxis, p as ResponsiveContainer, r as BarChart, s as Area, t as AreaChart, u as Bar } from "../_libs/recharts+[...].mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { i as Trigger, n as Portal, r as Root2, t as Content2 } from "../_libs/@radix-ui/react-popover+[...].mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
import { C as eachDayOfInterval, D as isSameDay, F as startOfWeek, I as addMonths, _ as endOfWeek, a as isToday, f as format, j as addWeeks, n as subMonths, s as isSameMonth, t as subWeeks, w as endOfMonth, x as startOfMonth } from "../_libs/date-fns.mjs";
import { n as getDefaultClassNames, t as DayPicker } from "../_libs/react-day-picker.mjs";
import { a as Trigger$1, i as Root3, n as Portal$1, r as Provider, t as Content2$1 } from "../_libs/radix-ui__react-tooltip.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-N3foXyMk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var navItems = [
	{
		title: "Dashboard",
		url: "/dashboard",
		icon: LayoutDashboard,
		section: "Overview"
	},
	{
		title: "Approvals Hub",
		icon: CheckCheck,
		section: "Overview",
		badge: 9,
		children: [
			{
				title: "Pending Queue",
				url: "/approvals",
				badge: 9
			},
			{
				title: "Leave Approvals",
				url: "/approvals/leave",
				badge: 4
			},
			{
				title: "Invoice Approvals",
				url: "/approvals/invoices",
				badge: 3
			},
			{
				title: "Penalty & Remarks",
				url: "/approvals/penalties",
				badge: 2
			},
			{
				title: "Daily Progress",
				url: "/approvals/daily-progress"
			},
			{
				title: "Approval History",
				url: "/approvals/history"
			}
		]
	},
	{
		title: "Reports & Analytics",
		icon: ChartColumn,
		section: "Overview",
		children: [
			{
				title: "Overview",
				url: "/reports"
			},
			{
				title: "Attendance Report",
				url: "/reports/attendance"
			},
			{
				title: "Payroll Cost",
				url: "/reports/payroll"
			},
			{
				title: "Hiring Funnel",
				url: "/reports/hiring"
			},
			{
				title: "Project & Work Report",
				url: "/reports/work"
			},
			{
				title: "Custom Reports",
				url: "/reports/custom"
			}
		]
	},
	{
		title: "Employees",
		icon: Users,
		section: "People",
		children: [
			{
				title: "Employee List",
				url: "/employees/list"
			},
			{
				title: "Org Structure",
				url: "/employees/org"
			},
			{
				title: "Attendance List",
				url: "/employees/attendance"
			},
			{
				title: "Leave Requests",
				url: "/employees/leave-requests",
				badge: 4
			}
		]
	},
	{
		title: "Recruitment",
		icon: Building2,
		section: "People",
		children: [{
			title: "Interviews",
			url: "/recruitment/interviews",
			badge: 2
		}, {
			title: "Hirings",
			url: "/recruitment/hirings"
		}]
	},
	{
		title: "Training & Courses",
		icon: BookOpen,
		section: "People",
		children: [{
			title: "Course Library",
			url: "/training/library"
		}, {
			title: "Manage Courses",
			url: "/training/manage"
		}]
	},
	{
		title: "Schedule",
		url: "/schedule",
		icon: CalendarRange,
		section: "Work"
	},
	{
		title: "Payroll",
		icon: IndianRupee,
		section: "Finance",
		children: [
			{
				title: "Payroll Dashboard",
				url: "/payroll/dashboard",
				icon: LayoutGrid
			},
			{
				title: "Salary Structure",
				url: "/payroll/structure",
				icon: Wallet
			},
			{
				title: "Payroll Settings",
				url: "/payroll/settings",
				icon: Settings2
			},
			{
				title: "Payroll Processing",
				url: "/payroll/processing",
				icon: CirclePlay
			},
			{
				title: "Bonus & Deductions",
				url: "/payroll/bonuses",
				icon: Gift
			},
			{
				title: "Payslips",
				url: "/payroll/payslips",
				icon: FileText
			}
		]
	},
	{
		title: "Company Finance",
		icon: Landmark,
		section: "Finance",
		children: [
			{
				title: "Transactions",
				url: "/finance/transactions"
			},
			{
				title: "Plan",
				url: "/finance/plan"
			},
			{
				title: "Summary",
				url: "/finance/summary"
			},
			{
				title: "Client Transactions",
				url: "/finance/clients"
			},
			{
				title: "Audit Logs",
				url: "/finance/audit"
			}
		]
	},
	{
		title: "Invoice",
		icon: FileText,
		section: "Finance",
		children: [
			{
				title: "All Invoices",
				url: "/invoice/all"
			},
			{
				title: "Invoice Ledger",
				url: "/invoice/ledger"
			},
			{
				title: "Create Invoice",
				url: "/invoice/create"
			},
			{
				title: "Create Proforma Invoice",
				url: "/invoice/proforma"
			}
		]
	},
	{
		title: "Clients & Projects",
		url: "/work/projects",
		icon: Briefcase,
		section: "Work"
	},
	{
		title: "Work Logs",
		url: "/work/logs",
		icon: ScrollText,
		section: "Work"
	},
	{
		title: "Research",
		url: "/work/research",
		icon: BookOpen,
		section: "Work"
	},
	{
		title: "Sales",
		icon: ReceiptText,
		section: "Work",
		children: [
			{
				title: "Dashboard",
				url: "/work/sales/dashboard",
				icon: LayoutDashboard
			},
			{
				title: "Pipeline",
				url: "/work/sales/pipeline",
				icon: Kanban
			},
			{
				title: "Leads",
				url: "/work/sales/leads",
				icon: Users
			},
			{
				title: "Tasks & Follow-ups",
				url: "/work/sales/tasks",
				icon: ClipboardList
			},
			{
				title: "Sales Analytics",
				url: "/work/sales/analytics",
				icon: ChartColumn
			},
			{
				title: "Team Performance",
				url: "/work/sales/team",
				icon: Trophy
			},
			{
				title: "Reports",
				url: "/work/sales/reports",
				icon: FileText
			},
			{
				title: "Settings",
				url: "/work/sales/settings",
				icon: SlidersHorizontal
			}
		]
	},
	{
		title: "Tasks",
		url: "/tasks",
		icon: ClipboardList,
		section: "Work"
	},
	{
		title: "Chat",
		url: "/chat",
		icon: MessagesSquare,
		section: "Work",
		badge: 3
	},
	{
		title: "Documents",
		icon: Files,
		section: "Work",
		children: [{
			title: "Employee Documents",
			url: "/documents/employee"
		}, {
			title: "Document Generator",
			url: "/documents/generator"
		}]
	},
	{
		title: "Workspace",
		icon: MonitorPlay,
		section: "Workplace",
		children: [
			{
				title: "Seating Arrangement",
				url: "/workspace/seating"
			},
			{
				title: "Resource Management",
				url: "/workspace/resources"
			},
			{
				title: "Gallery",
				url: "/workspace/gallery"
			},
			{
				title: "Assets",
				url: "/workspace/assets"
			}
		]
	},
	{
		title: "Penalty",
		url: "/penalty",
		icon: MessageSquareWarning,
		section: "Workplace"
	},
	{
		title: "Remarks",
		url: "/remarks",
		icon: Star,
		section: "Workplace"
	},
	{
		title: "Activity Tracker",
		url: "/activity-tracker",
		icon: Activity,
		section: "Workplace"
	},
	{
		title: "Elections",
		url: "/elections",
		icon: Vote,
		section: "Workplace"
	},
	{
		title: "Settings",
		url: "/settings",
		icon: Settings,
		section: "Admin"
	},
	{
		title: "Restrictions",
		url: "/restrictions",
		icon: Shield,
		section: "Admin"
	},
	{
		title: "Activity Logs",
		url: "/activity-logs",
		icon: ScrollText,
		section: "Admin"
	}
];
var sectionOrder = [
	"Overview",
	"People",
	"Finance",
	"Work",
	"Workplace",
	"Admin"
];
var quickCreateActions = [
	{
		title: "New Invoice",
		url: "/invoice/create",
		icon: ReceiptText,
		hint: "Billing"
	},
	{
		title: "New Task",
		url: "/tasks?new=1",
		icon: ListPlus,
		hint: "Work"
	},
	{
		title: "Add Employee",
		url: "/employees/list?new=1",
		icon: UserPlus,
		hint: "People"
	},
	{
		title: "Apply Leave",
		url: "/leave?new=1",
		icon: CalendarPlus,
		hint: "Work"
	}
];
var mobileBarItems = [
	{
		title: "Home",
		url: "/dashboard",
		icon: LayoutDashboard
	},
	{
		title: "Tasks",
		url: "/tasks",
		icon: ClipboardList
	},
	{
		title: "Approvals",
		url: "/approvals",
		icon: CheckCheck
	},
	{
		title: "Chat",
		url: "/chat",
		icon: MessagesSquare
	}
];
function Badge({ count }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "ml-auto shrink-0 rounded-full bg-sidebar-primary px-1.5 py-0.5 text-[10px] font-semibold leading-none text-sidebar-primary-foreground",
		children: count
	});
}
function CreateMenu({ collapsed, onNavigate }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const close = () => setOpen(false);
		window.addEventListener("click", close);
		return () => window.removeEventListener("click", close);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		onClick: (e) => e.stopPropagation(),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setOpen((o) => !o),
			title: collapsed ? "Create" : void 0,
			"aria-label": "Create",
			"aria-expanded": open,
			className: cn("flex w-full items-center gap-2 rounded-lg bg-sidebar-primary px-3 py-2 text-sm font-semibold text-sidebar-primary-foreground transition-opacity hover:opacity-90", collapsed && "justify-center px-0"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 shrink-0" }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Create" })]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("absolute z-50 mt-1 w-56 overflow-hidden rounded-xl border border-sidebar-border bg-sidebar-surface p-1 shadow-lg", collapsed ? "left-full top-0 ml-2" : "left-0 right-0"),
			children: quickCreateActions.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => {
					onNavigate(a.url);
					setOpen(false);
				},
				className: "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm hover:bg-sidebar-accent",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.icon, { className: "h-4 w-4 shrink-0 text-sidebar-muted" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex-1 truncate",
						children: a.title
					}),
					a.hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] uppercase text-sidebar-muted",
						children: a.hint
					})
				]
			}, a.url))
		})]
	});
}
function SidebarBody({ collapsed, setCollapsed, active, setActive, isMobile, onClose, isLocked }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const [openGroups, setOpenGroups] = (0, import_react.useState)(["Approvals Hub"]);
	const [pinned, setPinned] = (0, import_react.useState)(["Attendance"]);
	const [collapsedSections, setCollapsedSections] = (0, import_react.useState)([]);
	const [recents, setRecents] = (0, import_react.useState)(() => {
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem("sidebar-recents");
			return saved ? JSON.parse(saved) : [];
		}
		return [];
	});
	const q = query.trim().toLowerCase();
	const go = (url) => {
		setActive(url);
		onClose?.();
		let title = "";
		for (const item of navItems) {
			if (item.url === url) {
				title = item.title;
				break;
			}
			const child = item.children?.find((c) => c.url === url);
			if (child) {
				title = child.title;
				break;
			}
		}
		if (title) setRecents((prev) => {
			const filtered = prev.filter((r) => r.url !== url);
			const updated = [{
				title,
				url
			}, ...filtered].slice(0, 5);
			localStorage.setItem("sidebar-recents", JSON.stringify(updated));
			return updated;
		});
	};
	const toggleSection = (section) => {
		setCollapsedSections((prev) => prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]);
	};
	const filtered = (0, import_react.useMemo)(() => {
		if (!q) return navItems;
		return navItems.map((item) => {
			const selfMatch = item.title.toLowerCase().includes(q);
			const children = item.children?.filter((c) => c.title.toLowerCase().includes(q));
			if (selfMatch) return item;
			if (children && children.length) return {
				...item,
				children
			};
			return null;
		}).filter(Boolean);
	}, [q]);
	const grouped = (0, import_react.useMemo)(() => sectionOrder.map((section) => ({
		section,
		items: filtered.filter((i) => i.section === section)
	})).filter((g) => g.items.length > 0), [filtered]);
	const pinnedLinks = (0, import_react.useMemo)(() => {
		const out = [];
		for (const item of navItems) {
			if (item.url && pinned.includes(item.title)) out.push({
				title: item.title,
				url: item.url
			});
			for (const c of item.children ?? []) if (pinned.includes(c.title)) out.push({
				title: c.title,
				url: c.url
			});
		}
		return out;
	}, [pinned]);
	const toggleGroup = (title) => {
		const item = navItems.find((i) => i.title === title);
		if (!item) return;
		setOpenGroups((prev) => {
			if (prev.includes(title)) return prev.filter((t) => t !== title);
			else {
				const siblingGroupTitles = navItems.filter((i) => i.section === item.section && i.title !== title && i.children?.length).map((i) => i.title);
				return [...prev.filter((t) => !siblingGroupTitles.includes(t)), title];
			}
		});
	};
	const togglePin = (title) => setPinned((prev) => prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 px-3 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sidebar-primary text-sm font-black text-sidebar-primary-foreground",
					children: "H"
				}),
				!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-sm font-bold",
						children: "HR Suite"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-[11px] text-sidebar-muted",
						children: "Workspace"
					})]
				}),
				isMobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					"aria-label": "Close menu",
					className: "ml-auto grid h-8 w-8 shrink-0 place-items-center rounded-lg text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				}) : !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCollapsed((c) => !c),
					"aria-label": isLocked ? "Collapse sidebar" : "Lock sidebar open",
					title: isLocked ? "Collapse sidebar" : "Lock sidebar open",
					className: "ml-auto grid h-8 w-8 shrink-0 place-items-center rounded-lg text-sidebar-muted transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
					children: isLocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4 text-sidebar-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockOpen, { className: "h-4 w-4" })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-3 pb-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateMenu, {
				collapsed,
				onNavigate: go
			})
		}),
		!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-3 pb-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-sidebar-muted" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search menu…",
						className: "h-9 w-full rounded-lg border border-sidebar-border bg-sidebar-surface pl-8 pr-8 text-sm outline-none placeholder:text-sidebar-muted focus:ring-2 focus:ring-sidebar-ring/40"
					}),
					query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setQuery(""),
						"aria-label": "Clear search",
						className: "absolute right-2 top-1/2 -translate-y-1/2 text-sidebar-muted hover:text-sidebar-accent-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "flex-1 overflow-y-auto px-2 pb-4",
			children: [
				!collapsed && !q && pinnedLinks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => toggleSection("Pinned"),
						className: "flex w-full items-center justify-between px-2 pb-1 pt-2 text-[10px] font-bold uppercase tracking-wider text-sidebar-muted hover:text-sidebar-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pinned" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-3.5 w-3.5 transition-transform", collapsedSections.includes("Pinned") ? "-rotate-90" : "") })]
					}), !collapsedSections.includes("Pinned") && pinnedLinks.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => go(p.url),
						className: cn("group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition-colors", active === p.url ? "bg-sidebar-primary font-semibold text-sidebar-primary-foreground" : "hover:bg-sidebar-accent"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, { className: "h-3.5 w-3.5 shrink-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								role: "button",
								"aria-label": `Unpin ${p.title}`,
								onClick: (e) => {
									e.stopPropagation();
									togglePin(p.title);
								},
								className: "ml-auto hidden shrink-0 group-hover:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinOff, { className: "h-3.5 w-3.5" })
							})
						]
					}, p.url))]
				}),
				!collapsed && !q && recents.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => toggleSection("Recents"),
						className: "flex w-full items-center justify-between px-2 pb-1 pt-2 text-[10px] font-bold uppercase tracking-wider text-sidebar-muted hover:text-sidebar-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Recents" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-3.5 w-3.5 transition-transform", collapsedSections.includes("Recents") ? "-rotate-90" : "") })]
					}), !collapsedSections.includes("Recents") && recents.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => go(r.url),
						className: cn("group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition-colors", active === r.url ? "bg-sidebar-primary font-semibold text-sidebar-primary-foreground" : "hover:bg-sidebar-accent"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 shrink-0 text-sidebar-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							children: r.title
						})]
					}, r.url))]
				}),
				grouped.map((group) => {
					const isSectionCollapsed = collapsedSections.includes(group.section);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1",
						children: [!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => toggleSection(group.section),
							className: "flex w-full items-center justify-between px-2 pb-1 pt-3 text-[10px] font-bold uppercase tracking-wider text-sidebar-muted hover:text-sidebar-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: group.section }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-3.5 w-3.5 transition-transform", isSectionCollapsed ? "-rotate-90" : "") })]
						}), (!isSectionCollapsed || collapsed) && group.items.map((item) => {
							const isOpen = openGroups.includes(item.title) || Boolean(q);
							const hasChildren = Boolean(item.children?.length);
							const selfActive = item.url === active;
							const childActive = item.children?.some((c) => c.url === active);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								title: collapsed ? item.title : void 0,
								onClick: () => hasChildren ? toggleGroup(item.title) : item.url && go(item.url),
								className: cn("flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors", collapsed && "justify-center px-0", selfActive ? "bg-sidebar-primary font-semibold text-sidebar-primary-foreground" : childActive && !isOpen ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground" : "hover:bg-sidebar-accent"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4.5 w-4.5 shrink-0" }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 flex-1 truncate text-left",
										children: item.title
									}),
									item.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { count: item.badge }) : null,
									hasChildren && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-4 w-4 shrink-0 transition-transform", isOpen && "rotate-180") })
								] })]
							}), !collapsed && hasChildren && isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "my-0.5 ml-[19px] border-l border-sidebar-border pl-2",
								children: item.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => go(child.url),
									className: cn("group flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-[13px] transition-colors", child.url === active ? "bg-sidebar-surface font-semibold text-sidebar-accent-foreground shadow-sm" : "text-sidebar-foreground/80 hover:bg-sidebar-accent"),
									children: [
										child.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(child.icon, { className: cn("h-4 w-4 shrink-0 transition-colors", child.url === active ? "text-sidebar-accent-foreground" : "text-sidebar-muted group-hover:text-sidebar-accent-foreground") }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "min-w-0 flex-1 truncate text-left",
											children: child.title
										}),
										child.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { count: child.badge }) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											role: "button",
											"aria-label": `Pin ${child.title}`,
											onClick: (e) => {
												e.stopPropagation();
												togglePin(child.title);
											},
											className: "hidden shrink-0 text-sidebar-muted group-hover:block",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, { className: "h-3.5 w-3.5" })
										})
									]
								}, child.url))
							})] }, item.title);
						})]
					}, group.section);
				}),
				q && grouped.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-3 py-6 text-center text-sm text-sidebar-muted",
					children: "No matches"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 border-t border-sidebar-border px-3 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sidebar-accent text-xs font-bold text-sidebar-accent-foreground",
				children: "AR"
			}), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-sm font-medium",
					children: "Aarav R."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-[11px] text-sidebar-muted",
					children: "HR Admin"
				})]
			})]
		})
	] });
}
function AppSidebar({ active = "/dashboard", setActive }) {
	const [collapsed, setCollapsed] = (0, import_react.useState)(false);
	const [internalActive, setInternalActive] = (0, import_react.useState)(active);
	const currentActive = setActive ? active : internalActive;
	const handleSetActive = setActive || setInternalActive;
	const [drawerOpen, setDrawerOpen] = (0, import_react.useState)(false);
	const [isHovered, setIsHovered] = (0, import_react.useState)(false);
	const effectivelyCollapsed = collapsed && !isHovered;
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = drawerOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [drawerOpen]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "fixed inset-x-0 top-0 z-40 flex h-14 items-center gap-2 border-b border-sidebar-border bg-sidebar px-3 text-sidebar-foreground md:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setDrawerOpen(true),
				"aria-label": "Open menu",
				className: "grid h-9 w-9 place-items-center rounded-lg hover:bg-sidebar-accent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-bold",
				children: "HR Suite"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("fixed inset-0 z-50 md:hidden", drawerOpen ? "pointer-events-auto" : "pointer-events-none"),
			"aria-hidden": !drawerOpen,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				onClick: () => setDrawerOpen(false),
				className: cn("absolute inset-0 bg-black/50 transition-opacity duration-200", drawerOpen ? "opacity-100" : "opacity-0")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: cn("absolute inset-y-0 left-0 flex w-[280px] max-w-[85vw] flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground shadow-2xl transition-transform duration-200", drawerOpen ? "translate-x-0" : "-translate-x-full"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarBody, {
					collapsed: false,
					setCollapsed: () => {},
					active: currentActive,
					setActive: handleSetActive,
					isMobile: true,
					onClose: () => setDrawerOpen(false)
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "fixed inset-x-0 bottom-0 z-40 flex border-t border-sidebar-border bg-sidebar text-sidebar-foreground md:hidden",
			children: mobileBarItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => handleSetActive(item.url),
				className: cn("flex flex-1 flex-col items-center gap-1 py-2 text-[10px] font-medium", currentActive === item.url ? "text-sidebar-primary" : "text-sidebar-muted"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-5 w-5" }), item.title]
			}, item.url))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			onMouseEnter: () => setIsHovered(true),
			onMouseLeave: () => setIsHovered(false),
			className: cn("hidden h-screen shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-[width] duration-200 md:sticky md:top-0 md:flex", effectivelyCollapsed ? "w-[68px]" : "w-[268px]"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarBody, {
				collapsed: effectivelyCollapsed,
				setCollapsed,
				active: currentActive,
				setActive: handleSetActive,
				isLocked: !collapsed
			})
		})
	] });
}
var teamMembers = [
	{
		name: "Aarav Shah",
		role: "Sales Executive",
		region: "Gujarat",
		avatar: "AS",
		target: 12e5,
		achieved: 1385e3,
		assigned: 96,
		contacted: 88,
		meetings: 27,
		demos: 18,
		proposals: 14,
		won: 11,
		lost: 9,
		collection: 109e4,
		conversionRate: 11,
		followUpDone: 89,
		avgResponse: 22
	},
	{
		name: "Karan Patel",
		role: "Sales Executive",
		region: "South",
		avatar: "KP",
		target: 1e6,
		achieved: 88e4,
		assigned: 71,
		contacted: 66,
		meetings: 22,
		demos: 14,
		proposals: 11,
		won: 8,
		lost: 6,
		collection: 88e4,
		conversionRate: 11,
		followUpDone: 91,
		avgResponse: 16
	},
	{
		name: "Riya Mehta",
		role: "Sales Head",
		region: "West",
		avatar: "RM",
		target: 15e5,
		achieved: 174e4,
		assigned: 84,
		contacted: 79,
		meetings: 31,
		demos: 21,
		proposals: 17,
		won: 12,
		lost: 7,
		collection: 174e4,
		conversionRate: 14,
		followUpDone: 92,
		avgResponse: 18
	},
	{
		name: "Devansh Rao",
		role: "Admin",
		region: "HQ",
		avatar: "DR",
		target: 5e5,
		achieved: 43e4,
		assigned: 28,
		contacted: 25,
		meetings: 8,
		demos: 5,
		proposals: 4,
		won: 3,
		lost: 2,
		collection: 43e4,
		conversionRate: 11,
		followUpDone: 88,
		avgResponse: 25
	},
	{
		name: "Neha Verma",
		role: "Sales Executive",
		region: "North",
		avatar: "NV",
		target: 1e6,
		achieved: 61e4,
		assigned: 78,
		contacted: 62,
		meetings: 19,
		demos: 11,
		proposals: 9,
		won: 6,
		lost: 11,
		collection: 61e4,
		conversionRate: 8,
		followUpDone: 74,
		avgResponse: 41
	},
	{
		name: "Het Kansara",
		role: "CEO",
		region: "All India",
		avatar: "HK",
		target: 2e6,
		achieved: 248e4,
		assigned: 61,
		contacted: 58,
		meetings: 24,
		demos: 15,
		proposals: 12,
		won: 9,
		lost: 5,
		collection: 248e4,
		conversionRate: 15,
		followUpDone: 96,
		avgResponse: 12
	},
	{
		name: "Simran Kaur",
		role: "Sales Executive",
		region: "East",
		avatar: "SK",
		target: 9e5,
		achieved: 47e4,
		assigned: 64,
		contacted: 44,
		meetings: 12,
		demos: 6,
		proposals: 5,
		won: 3,
		lost: 13,
		collection: 3e5,
		conversionRate: 5,
		followUpDone: 61,
		avgResponse: 66
	}
];
var leads = [
	{
		id: "LD-1000",
		company: "Shree Ganesh Jewellers",
		contact: "Mahesh Soni",
		city: "Surat",
		state: "Gujarat",
		stage: "New Lead",
		category: "Jewellery",
		source: "Meta Ads",
		owner: "Riya Mehta",
		priority: "High",
		budget: 6e4,
		aiScore: 34,
		nextFollowUp: "2026-07-31",
		createdAt: "2026-07-15"
	},
	{
		id: "LD-1001",
		company: "Spice Route Restaurant",
		contact: "Ankit Raval",
		city: "Ahmedabad",
		state: "Gujarat",
		stage: "Contacted",
		category: "Restaurants",
		source: "Google Ads",
		owner: "Aarav Shah",
		priority: "Medium",
		budget: 145e3,
		aiScore: 62,
		nextFollowUp: "2026-08-01",
		createdAt: "2026-07-10"
	},
	{
		id: "LD-1002",
		company: "Skyline Realtors",
		contact: "Priya Nair",
		city: "Mumbai",
		state: "Maharashtra",
		stage: "Meeting",
		category: "Real Estate",
		source: "Website",
		owner: "Neha Verma",
		priority: "High",
		budget: 32e4,
		aiScore: 78,
		nextFollowUp: "2026-07-30",
		createdAt: "2026-07-05"
	},
	{
		id: "LD-1003",
		company: "Dr. Kapoor Clinic",
		contact: "Dr. Rohan Kapoor",
		city: "Delhi",
		state: "Delhi",
		stage: "Demo",
		category: "Doctors",
		source: "Referral",
		owner: "Karan Patel",
		priority: "High",
		budget: 285e3,
		aiScore: 73,
		nextFollowUp: "2026-07-29",
		createdAt: "2026-06-20"
	},
	{
		id: "LD-1004",
		company: "BrightMind Academy",
		contact: "Sneha Iyer",
		city: "Pune",
		state: "Maharashtra",
		stage: "Proposal",
		category: "Education",
		source: "LinkedIn",
		owner: "Simran Kaur",
		priority: "Medium",
		budget: 18e4,
		aiScore: 81,
		nextFollowUp: "2026-08-02",
		createdAt: "2026-06-15"
	},
	{
		id: "LD-1005",
		company: "Lifeline Hospital",
		contact: "Vikas Bhatt",
		city: "Rajkot",
		state: "Gujarat",
		stage: "Proposal",
		category: "Hospital",
		source: "Cold Call",
		owner: "Devansh Rao",
		priority: "High",
		budget: 52e4,
		aiScore: 88,
		nextFollowUp: "2026-07-28",
		createdAt: "2026-06-10"
	},
	{
		id: "LD-1006",
		company: "Precision Industries",
		contact: "Jayesh Modi",
		city: "Vadodara",
		state: "Gujarat",
		stage: "Negotiation",
		category: "Manufacturing",
		source: "Trade Show",
		owner: "Riya Mehta",
		priority: "High",
		budget: 45e4,
		aiScore: 90,
		nextFollowUp: "2026-07-31",
		createdAt: "2026-06-01"
	},
	{
		id: "LD-1007",
		company: "Anaya Textiles",
		contact: "Rekha Jain",
		city: "Bhilwara",
		state: "Rajasthan",
		stage: "Negotiation",
		category: "Textile",
		source: "Referral",
		owner: "Aarav Shah",
		priority: "Medium",
		budget: 585e3,
		aiScore: 59,
		nextFollowUp: "2026-08-03",
		createdAt: "2026-05-20"
	},
	{
		id: "LD-1008",
		company: "TrustCap Finserv",
		contact: "Sameer Desai",
		city: "Bengaluru",
		state: "Karnataka",
		stage: "Won",
		category: "Finance",
		source: "Website",
		owner: "Neha Verma",
		priority: "High",
		budget: 39e4,
		aiScore: 95,
		nextFollowUp: "",
		createdAt: "2026-05-15"
	},
	{
		id: "LD-1009",
		company: "Velocity Motors",
		contact: "Imran Shaikh",
		city: "Hyderabad",
		state: "Telangana",
		stage: "Won",
		category: "Automobile",
		source: "Google Ads",
		owner: "Karan Patel",
		priority: "Medium",
		budget: 275e3,
		aiScore: 93,
		nextFollowUp: "",
		createdAt: "2026-05-10"
	},
	{
		id: "LD-1010",
		company: "Wanderlust Holidays",
		contact: "Meera Pillai",
		city: "Kochi",
		state: "Kerala",
		stage: "Lost",
		category: "Travel",
		source: "Instagram",
		owner: "Simran Kaur",
		priority: "Low",
		budget: 26e4,
		aiScore: 98,
		nextFollowUp: "",
		createdAt: "2026-05-01"
	},
	{
		id: "LD-1011",
		company: "Nexlogic Softwares",
		contact: "Tarun Gupta",
		city: "Noida",
		state: "Uttar Pradesh",
		stage: "Demo",
		category: "IT Company",
		source: "LinkedIn",
		owner: "Devansh Rao",
		priority: "Medium",
		budget: 34e4,
		aiScore: 70,
		nextFollowUp: "2026-08-01",
		createdAt: "2026-06-25"
	},
	{
		id: "LD-1012",
		company: "Glow Studio Salon",
		contact: "Nidhi Arora",
		city: "Chandigarh",
		state: "Punjab",
		stage: "Meeting",
		category: "Salon",
		source: "Meta Ads",
		owner: "Riya Mehta",
		priority: "Low",
		budget: 95e3,
		aiScore: 55,
		nextFollowUp: "2026-07-30",
		createdAt: "2026-07-01"
	},
	{
		id: "LD-1013",
		company: "IronCore Fitness",
		contact: "Rahul Yadav",
		city: "Jaipur",
		state: "Rajasthan",
		stage: "Meeting",
		category: "Gym",
		source: "WhatsApp",
		owner: "Aarav Shah",
		priority: "Medium",
		budget: 185e3,
		aiScore: 64,
		nextFollowUp: "2026-08-05",
		createdAt: "2026-07-12"
	},
	{
		id: "LD-1014",
		company: "Sthapati Constructions",
		contact: "Arvind Menon",
		city: "Chennai",
		state: "Tamil Nadu",
		stage: "New Lead",
		category: "Construction",
		source: "Just Dial",
		owner: "Neha Verma",
		priority: "High",
		budget: 56e4,
		aiScore: 84,
		nextFollowUp: "2026-07-31",
		createdAt: "2026-07-20"
	},
	{
		id: "LD-1015",
		company: "Kamdhenu Traders",
		contact: "Bhavesh Trivedi",
		city: "Indore",
		state: "Madhya Pradesh",
		stage: "Contacted",
		category: "Others",
		source: "Cold Call",
		owner: "Karan Patel",
		priority: "Low",
		budget: 12e4,
		aiScore: 42,
		nextFollowUp: "2026-08-02",
		createdAt: "2026-07-18"
	},
	{
		id: "LD-1016",
		company: "Zenith Diamonds",
		contact: "Falguni Shah",
		city: "Surat",
		state: "Gujarat",
		stage: "Meeting",
		category: "Jewellery",
		source: "Referral",
		owner: "Simran Kaur",
		priority: "High",
		budget: 78e4,
		aiScore: 92,
		nextFollowUp: "2026-07-29",
		createdAt: "2026-06-28"
	},
	{
		id: "LD-1017",
		company: "Urban Tandoor",
		contact: "Deepak Sharma",
		city: "Gurugram",
		state: "Haryana",
		stage: "Demo",
		category: "Restaurants",
		source: "Google Ads",
		owner: "Devansh Rao",
		priority: "Medium",
		budget: 235e3,
		aiScore: 57,
		nextFollowUp: "2026-08-04",
		createdAt: "2026-07-08"
	},
	{
		id: "LD-1018",
		company: "Green Acres Realty",
		contact: "Sunita Rane",
		city: "Nashik",
		state: "Maharashtra",
		stage: "Proposal",
		category: "Real Estate",
		source: "Website",
		owner: "Riya Mehta",
		priority: "High",
		budget: 68e4,
		aiScore: 85,
		nextFollowUp: "2026-07-28",
		createdAt: "2026-06-18"
	},
	{
		id: "LD-1019",
		company: "Smile Dental Care",
		contact: "Dr. Alka Joshi",
		city: "Bhopal",
		state: "Madhya Pradesh",
		stage: "Proposal",
		category: "Doctors",
		source: "Partner",
		owner: "Aarav Shah",
		priority: "Medium",
		budget: 175e3,
		aiScore: 76,
		nextFollowUp: "2026-08-01",
		createdAt: "2026-06-22"
	},
	{
		id: "LD-1020",
		company: "Scholars Point",
		contact: "Rajiv Kulkarni",
		city: "Nagpur",
		state: "Maharashtra",
		stage: "Negotiation",
		category: "Education",
		source: "Meta Ads",
		owner: "Neha Verma",
		priority: "Medium",
		budget: 21e4,
		aiScore: 69,
		nextFollowUp: "2026-07-30",
		createdAt: "2026-06-05"
	},
	{
		id: "LD-1021",
		company: "Aarogya Multispeciality",
		contact: "Naveen Reddy",
		city: "Vijayawada",
		state: "Andhra Pradesh",
		stage: "Demo",
		category: "Hospital",
		source: "Referral",
		owner: "Karan Patel",
		priority: "High",
		budget: 48e4,
		aiScore: 82,
		nextFollowUp: "2026-08-03",
		createdAt: "2026-06-30"
	},
	{
		id: "LD-1022",
		company: "Metalix Engineering",
		contact: "Suresh Pawar",
		city: "Aurangabad",
		state: "Maharashtra",
		stage: "Won",
		category: "Manufacturing",
		source: "Trade Show",
		owner: "Simran Kaur",
		priority: "Medium",
		budget: 35e4,
		aiScore: 91,
		nextFollowUp: "",
		createdAt: "2026-05-05"
	},
	{
		id: "LD-1023",
		company: "Silk Trail Exports",
		contact: "Kavita Sen",
		city: "Kolkata",
		state: "West Bengal",
		stage: "Lost",
		category: "Textile",
		source: "Email Campaign",
		owner: "Devansh Rao",
		priority: "Low",
		budget: 22e4,
		aiScore: 38,
		nextFollowUp: "",
		createdAt: "2026-04-15"
	},
	{
		id: "LD-1024",
		company: "FinEdge Advisors",
		contact: "Manoj Khurana",
		city: "Ludhiana",
		state: "Punjab",
		stage: "Contacted",
		category: "Finance",
		source: "LinkedIn",
		owner: "Riya Mehta",
		priority: "Medium",
		budget: 31e4,
		aiScore: 58,
		nextFollowUp: "2026-08-05",
		createdAt: "2026-07-14"
	},
	{
		id: "LD-1025",
		company: "DriveOn Automobiles",
		contact: "Pankaj Bansal",
		city: "Lucknow",
		state: "Uttar Pradesh",
		stage: "Demo",
		category: "Automobile",
		source: "India Mart",
		owner: "Aarav Shah",
		priority: "High",
		budget: 42e4,
		aiScore: 74,
		nextFollowUp: "2026-07-31",
		createdAt: "2026-06-28"
	},
	{
		id: "LD-1026",
		company: "Voyage Trips",
		contact: "Ritu Malhotra",
		city: "Goa",
		state: "Goa",
		stage: "Meeting",
		category: "Travel",
		source: "Instagram",
		owner: "Neha Verma",
		priority: "Low",
		budget: 145e3,
		aiScore: 52,
		nextFollowUp: "2026-08-02",
		createdAt: "2026-07-05"
	},
	{
		id: "LD-1027",
		company: "CloudNova Labs",
		contact: "Aditya Menon",
		city: "Bengaluru",
		state: "Karnataka",
		stage: "Negotiation",
		category: "IT Company",
		source: "Website",
		owner: "Karan Patel",
		priority: "High",
		budget: 58e4,
		aiScore: 87,
		nextFollowUp: "2026-07-29",
		createdAt: "2026-05-28"
	},
	{
		id: "LD-1028",
		company: "Blush Beauty Bar",
		contact: "Pooja Shetty",
		city: "Mangaluru",
		state: "Karnataka",
		stage: "New Lead",
		category: "Salon",
		source: "Meta Ads",
		owner: "Simran Kaur",
		priority: "Medium",
		budget: 88e3,
		aiScore: 41,
		nextFollowUp: "2026-08-06",
		createdAt: "2026-07-22"
	},
	{
		id: "LD-1029",
		company: "PowerHouse Gym",
		contact: "Vivek Chauhan",
		city: "Dehradun",
		state: "Uttarakhand",
		stage: "Contacted",
		category: "Gym",
		source: "WhatsApp",
		owner: "Devansh Rao",
		priority: "Medium",
		budget: 195e3,
		aiScore: 56,
		nextFollowUp: "2026-08-04",
		createdAt: "2026-07-16"
	},
	{
		id: "LD-1030",
		company: "Sunrise Infra",
		contact: "Harsh Vora",
		city: "Ahmedabad",
		state: "Gujarat",
		stage: "Meeting",
		category: "Construction",
		source: "Referral",
		owner: "Riya Mehta",
		priority: "High",
		budget: 72e4,
		aiScore: 79,
		nextFollowUp: "2026-07-28",
		createdAt: "2026-06-20"
	},
	{
		id: "LD-1031",
		company: "Om Enterprises",
		contact: "Kiran Bhosale",
		city: "Kolhapur",
		state: "Maharashtra",
		stage: "Demo",
		category: "Others",
		source: "Cold Call",
		owner: "Aarav Shah",
		priority: "Low",
		budget: 155e3,
		aiScore: 48,
		nextFollowUp: "2026-08-01",
		createdAt: "2026-07-02"
	},
	{
		id: "LD-1032",
		company: "Royal Gold Palace",
		contact: "Nirav Zaveri",
		city: "Rajkot",
		state: "Gujarat",
		stage: "Proposal",
		category: "Jewellery",
		source: "Referral",
		owner: "Neha Verma",
		priority: "High",
		budget: 92e4,
		aiScore: 89,
		nextFollowUp: "2026-07-30",
		createdAt: "2026-06-12"
	},
	{
		id: "LD-1033",
		company: "Cafe Mocha House",
		contact: "Sagar Naik",
		city: "Panaji",
		state: "Goa",
		stage: "Negotiation",
		category: "Restaurants",
		source: "Google Ads",
		owner: "Karan Patel",
		priority: "Medium",
		budget: 165e3,
		aiScore: 63,
		nextFollowUp: "2026-08-03",
		createdAt: "2026-06-08"
	},
	{
		id: "LD-1034",
		company: "Landmark Estates",
		contact: "Preeti Saxena",
		city: "Jaipur",
		state: "Rajasthan",
		stage: "Won",
		category: "Real Estate",
		source: "Partner",
		owner: "Simran Kaur",
		priority: "High",
		budget: 54e4,
		aiScore: 96,
		nextFollowUp: "",
		createdAt: "2026-04-20"
	},
	{
		id: "LD-1035",
		company: "Ortho Plus Centre",
		contact: "Dr. Sanjay Rao",
		city: "Pune",
		state: "Maharashtra",
		stage: "Won",
		category: "Doctors",
		source: "Referral",
		owner: "Devansh Rao",
		priority: "Medium",
		budget: 29e4,
		aiScore: 94,
		nextFollowUp: "",
		createdAt: "2026-05-08"
	},
	{
		id: "LD-1036",
		company: "EduSpark Institute",
		contact: "Ashwin Kumar",
		city: "Coimbatore",
		state: "Tamil Nadu",
		stage: "Contacted",
		category: "Education",
		source: "YouTube",
		owner: "Riya Mehta",
		priority: "Medium",
		budget: 195e3,
		aiScore: 50,
		nextFollowUp: "2026-08-05",
		createdAt: "2026-07-19"
	},
	{
		id: "LD-1037",
		company: "Nova Care Hospital",
		contact: "Ramesh Iyengar",
		city: "Mysuru",
		state: "Karnataka",
		stage: "Lost",
		category: "Hospital",
		source: "Cold Call",
		owner: "Aarav Shah",
		priority: "Low",
		budget: 38e4,
		aiScore: 32,
		nextFollowUp: "",
		createdAt: "2026-04-10"
	},
	{
		id: "LD-1038",
		company: "Apex Polymers",
		contact: "Girish Kadam",
		city: "Thane",
		state: "Maharashtra",
		stage: "Lost",
		category: "Manufacturing",
		source: "India Mart",
		owner: "Neha Verma",
		priority: "Low",
		budget: 41e4,
		aiScore: 29,
		nextFollowUp: "",
		createdAt: "2026-04-01"
	},
	{
		id: "LD-1039",
		company: "Weavers Hub",
		contact: "Anita Das",
		city: "Bhubaneswar",
		state: "Odisha",
		stage: "Demo",
		category: "Textile",
		source: "Trade Show",
		owner: "Karan Patel",
		priority: "Medium",
		budget: 245e3,
		aiScore: 66,
		nextFollowUp: "2026-08-02",
		createdAt: "2026-06-25"
	},
	{
		id: "LD-1040",
		company: "Prosperity Wealth",
		contact: "Nikhil Jain",
		city: "Raipur",
		state: "Chhattisgarh",
		stage: "Meeting",
		category: "Finance",
		source: "LinkedIn",
		owner: "Simran Kaur",
		priority: "Medium",
		budget: 33e4,
		aiScore: 71,
		nextFollowUp: "2026-07-30",
		createdAt: "2026-07-08"
	},
	{
		id: "LD-1041",
		company: "Turbo Wheels",
		contact: "Faisal Khan",
		city: "Kanpur",
		state: "Uttar Pradesh",
		stage: "Negotiation",
		category: "Automobile",
		source: "Website",
		owner: "Devansh Rao",
		priority: "High",
		budget: 385e3,
		aiScore: 83,
		nextFollowUp: "2026-07-29",
		createdAt: "2026-05-25"
	},
	{
		id: "LD-1042",
		company: "Himalaya Tours",
		contact: "Tenzin Dorjee",
		city: "Shimla",
		state: "Himachal Pradesh",
		stage: "New Lead",
		category: "Travel",
		source: "Instagram",
		owner: "Riya Mehta",
		priority: "Low",
		budget: 125e3,
		aiScore: 45,
		nextFollowUp: "2026-08-06",
		createdAt: "2026-07-24"
	},
	{
		id: "LD-1043",
		company: "ByteWorks Systems",
		contact: "Shruti Kulkarni",
		city: "Hyderabad",
		state: "Telangana",
		stage: "Contacted",
		category: "IT Company",
		source: "Google Ads",
		owner: "Aarav Shah",
		priority: "High",
		budget: 47e4,
		aiScore: 68,
		nextFollowUp: "2026-08-01",
		createdAt: "2026-07-17"
	},
	{
		id: "LD-1044",
		company: "Serene Spa & Salon",
		contact: "Anjali Gupta",
		city: "Kolkata",
		state: "West Bengal",
		stage: "Meeting",
		category: "Salon",
		source: "Meta Ads",
		owner: "Neha Verma",
		priority: "Low",
		budget: 105e3,
		aiScore: 53,
		nextFollowUp: "2026-08-03",
		createdAt: "2026-07-09"
	},
	{
		id: "LD-1045",
		company: "FitZone Arena",
		contact: "Manish Tiwari",
		city: "Patna",
		state: "Bihar",
		stage: "Demo",
		category: "Gym",
		source: "WhatsApp",
		owner: "Karan Patel",
		priority: "Medium",
		budget: 215e3,
		aiScore: 60,
		nextFollowUp: "2026-08-04",
		createdAt: "2026-07-06"
	},
	{
		id: "LD-1046",
		company: "Pinnacle Builders",
		contact: "Vinay Shetty",
		city: "Udaipur",
		state: "Rajasthan",
		stage: "Proposal",
		category: "Construction",
		source: "Referral",
		owner: "Simran Kaur",
		priority: "High",
		budget: 65e4,
		aiScore: 86,
		nextFollowUp: "2026-07-28",
		createdAt: "2026-06-15"
	},
	{
		id: "LD-1047",
		company: "Vardhman Agencies",
		contact: "Alok Mishra",
		city: "Varanasi",
		state: "Uttar Pradesh",
		stage: "Negotiation",
		category: "Others",
		source: "Partner",
		owner: "Devansh Rao",
		priority: "Medium",
		budget: 195e3,
		aiScore: 72,
		nextFollowUp: "2026-08-05",
		createdAt: "2026-06-02"
	}
];
var pipelineStages = [
	{
		stage: "New Lead",
		color: "#6366f1"
	},
	{
		stage: "Contacted",
		color: "#8b5cf6"
	},
	{
		stage: "Meeting",
		color: "#3b82f6"
	},
	{
		stage: "Demo",
		color: "#06b6d4"
	},
	{
		stage: "Proposal",
		color: "#f59e0b"
	},
	{
		stage: "Negotiation",
		color: "#f97316"
	},
	{
		stage: "Won",
		color: "#10b981"
	},
	{
		stage: "Lost",
		color: "#ef4444"
	}
];
var dashboardStats = {
	todayRevenue: 142e3,
	monthlyRevenue: 341e4,
	monthlyTarget: 5e6,
	achievementPct: 68.2,
	todayLeads: 37,
	activeLeads: 412,
	hotLeads: 64,
	qualifiedLeads: 148,
	proposalSent: 52,
	negotiation: 28,
	wonDeals: 31,
	wonTarget: 74,
	lostDeals: 17,
	todayFollowUps: 42,
	overdueFollowUps: 11,
	avgDealSize: 186e3,
	leadConversionPct: 24.6,
	salesCycleDays: 27,
	revenueForecast: 482e4,
	collectionPending: 965e3,
	targetRemaining: 159e4,
	salesHealthScore: 92
};
var revenueVsTarget = [
	{
		month: "Aug",
		revenue: 28,
		target: 40
	},
	{
		month: "Sep",
		revenue: 32,
		target: 42
	},
	{
		month: "Oct",
		revenue: 38,
		target: 44
	},
	{
		month: "Nov",
		revenue: 35,
		target: 45
	},
	{
		month: "Dec",
		revenue: 42,
		target: 48
	},
	{
		month: "Jan",
		revenue: 30,
		target: 46
	},
	{
		month: "Feb",
		revenue: 36,
		target: 48
	},
	{
		month: "Mar",
		revenue: 44,
		target: 50
	},
	{
		month: "Apr",
		revenue: 39,
		target: 50
	},
	{
		month: "May",
		revenue: 46,
		target: 50
	},
	{
		month: "Jun",
		revenue: 41,
		target: 50
	},
	{
		month: "Jul",
		revenue: 34,
		target: 50
	}
];
var conversionFunnel = [
	{
		stage: "Total Leads",
		value: 1240,
		color: "#6366f1"
	},
	{
		stage: "Contacted",
		value: 820,
		color: "#8b5cf6"
	},
	{
		stage: "Meetings",
		value: 310,
		color: "#3b82f6"
	},
	{
		stage: "Demos",
		value: 185,
		color: "#06b6d4"
	},
	{
		stage: "Proposals",
		value: 128,
		color: "#f59e0b"
	},
	{
		stage: "Won",
		value: 78,
		color: "#10b981"
	}
];
var leadSourceData = [
	{
		source: "Meta Ads",
		leads: 180,
		won: 34
	},
	{
		source: "Google Ads",
		leads: 156,
		won: 28
	},
	{
		source: "Referral",
		leads: 142,
		won: 42
	},
	{
		source: "Website",
		leads: 120,
		won: 22
	},
	{
		source: "LinkedIn",
		leads: 98,
		won: 18
	},
	{
		source: "Cold Call",
		leads: 85,
		won: 12
	},
	{
		source: "WhatsApp",
		leads: 72,
		won: 14
	},
	{
		source: "Trade Show",
		leads: 65,
		won: 20
	},
	{
		source: "Instagram",
		leads: 58,
		won: 10
	},
	{
		source: "Others",
		leads: 264,
		won: 38
	}
];
var categoryMix = [
	{
		name: "Jewellery",
		value: 22,
		color: "#f59e0b"
	},
	{
		name: "Real Estate",
		value: 18,
		color: "#3b82f6"
	},
	{
		name: "Restaurants",
		value: 14,
		color: "#ef4444"
	},
	{
		name: "Hospital",
		value: 12,
		color: "#10b981"
	},
	{
		name: "IT Company",
		value: 10,
		color: "#8b5cf6"
	},
	{
		name: "Manufacturing",
		value: 8,
		color: "#6366f1"
	},
	{
		name: "Others",
		value: 16,
		color: "#94a3b8"
	}
];
var monthlyGrowth = [
	{
		month: "Jan",
		growth: 8.2
	},
	{
		month: "Feb",
		growth: 12.5
	},
	{
		month: "Mar",
		growth: 6.1
	},
	{
		month: "Apr",
		growth: -2.4
	},
	{
		month: "May",
		growth: 15.8
	},
	{
		month: "Jun",
		growth: 9.3
	},
	{
		month: "Jul",
		growth: 11.7
	}
];
var aiInsights = [
	{
		type: "convert",
		title: "Likely to convert",
		text: "Zenith Diamonds (score 92) — send revised quote today."
	},
	{
		type: "cold",
		title: "Cold lead alert",
		text: "Silk Trail Exports untouched for 9 days — reassign or nurture."
	},
	{
		type: "timing",
		title: "Best follow-up time",
		text: "Tue–Thu, 11:00 AM shows 2.3× higher pickup rate."
	},
	{
		type: "action",
		title: "Next best action",
		text: "Schedule demo for CloudNova Labs before negotiation stalls."
	},
	{
		type: "summary",
		title: "AI follow-up summary",
		text: "Pipeline is healthy but proposal-stage velocity dropped 4.6%. Prioritise the 28 negotiation deals worth ₹41 L."
	}
];
var founderSnapshot = {
	topPerformer: {
		name: "Aarav Shah",
		pct: 115
	},
	bottomPerformer: {
		name: "Simran Kaur",
		pct: 52
	},
	revenueToday: 142e3,
	revenuePayments: 6,
	revenueMonth: 341e4,
	revenueMonthPct: 68,
	pendingPayments: 965e3,
	pendingInvoices: 14,
	pendingProposals: 52,
	pendingProposalValue: 112e5,
	highestLeadSource: "Meta Ads",
	highestLeadSourceLeads: 180,
	highestLeadSourceWon: 34,
	bestCategory: "Jewellery",
	bestCategoryRevenue: 98e4,
	bestCampaign: "Growth-July",
	bestCampaignROAS: 6.4,
	upcomingClosings: 9,
	upcomingClosingsValue: 128e4,
	inactiveLeads: 38,
	inactiveDays: 14,
	overdueFollowUpOwners: [
		"Simran",
		"Neha",
		"Karan"
	]
};
var salesTasks = [
	{
		id: "T-001",
		type: "Call Client",
		company: "Shree Ganesh Jewellers",
		assignee: "Riya Mehta",
		dueDate: "2026-07-30",
		status: "today",
		priority: "High"
	},
	{
		id: "T-002",
		type: "Payment Collection",
		company: "Glow Studio Salon",
		assignee: "Riya Mehta",
		dueDate: "2026-07-30",
		status: "today",
		priority: "High"
	},
	{
		id: "T-003",
		type: "Recurring Follow-up",
		company: "FinEdge Advisors",
		assignee: "Riya Mehta",
		dueDate: "2026-07-30",
		status: "today",
		priority: "Medium"
	},
	{
		id: "T-004",
		type: "Proposal",
		company: "EduSpark Institute",
		assignee: "Riya Mehta",
		dueDate: "2026-07-30",
		status: "today",
		priority: "High"
	},
	{
		id: "T-005",
		type: "Birthday Wish",
		company: "Shree Ganesh Jewellers",
		assignee: "Riya Mehta",
		dueDate: "2026-07-30",
		status: "today",
		priority: "Low"
	},
	{
		id: "T-006",
		type: "Call Client",
		company: "Glow Studio Salon",
		assignee: "Riya Mehta",
		dueDate: "2026-07-30",
		status: "today",
		priority: "Medium"
	},
	{
		id: "T-007",
		type: "Payment Collection",
		company: "FinEdge Advisors",
		assignee: "Riya Mehta",
		dueDate: "2026-07-30",
		status: "today",
		priority: "High"
	},
	{
		id: "T-008",
		type: "Call Client",
		company: "Zenith Diamonds",
		assignee: "Aarav Shah",
		dueDate: "2026-07-28",
		status: "overdue",
		priority: "High"
	},
	{
		id: "T-009",
		type: "Meeting",
		company: "CloudNova Labs",
		assignee: "Karan Patel",
		dueDate: "2026-07-27",
		status: "overdue",
		priority: "High"
	},
	{
		id: "T-010",
		type: "Demo",
		company: "Royal Gold Palace",
		assignee: "Neha Verma",
		dueDate: "2026-07-29",
		status: "overdue",
		priority: "Medium"
	},
	{
		id: "T-011",
		type: "Proposal",
		company: "Precision Industries",
		assignee: "Riya Mehta",
		dueDate: "2026-07-26",
		status: "overdue",
		priority: "High"
	},
	{
		id: "T-012",
		type: "WhatsApp",
		company: "DriveOn Automobiles",
		assignee: "Aarav Shah",
		dueDate: "2026-08-01",
		status: "upcoming",
		priority: "Medium"
	},
	{
		id: "T-013",
		type: "Call Client",
		company: "Skyline Realtors",
		assignee: "Neha Verma",
		dueDate: "2026-08-02",
		status: "upcoming",
		priority: "High"
	},
	{
		id: "T-014",
		type: "Meeting",
		company: "Anaya Textiles",
		assignee: "Aarav Shah",
		dueDate: "2026-08-03",
		status: "upcoming",
		priority: "Medium"
	},
	{
		id: "T-015",
		type: "Email",
		company: "BrightMind Academy",
		assignee: "Simran Kaur",
		dueDate: "2026-08-04",
		status: "upcoming",
		priority: "Low"
	},
	{
		id: "T-016",
		type: "Demo",
		company: "Lifeline Hospital",
		assignee: "Devansh Rao",
		dueDate: "2026-08-05",
		status: "upcoming",
		priority: "High"
	},
	{
		id: "T-017",
		type: "Payment Collection",
		company: "TrustCap Finserv",
		assignee: "Neha Verma",
		dueDate: "2026-07-25",
		status: "completed",
		priority: "High"
	},
	{
		id: "T-018",
		type: "Call Client",
		company: "Velocity Motors",
		assignee: "Karan Patel",
		dueDate: "2026-07-24",
		status: "completed",
		priority: "Medium"
	}
];
var quarterlyGrowth = [
	{
		quarter: "Q1 FY26",
		revenue: 92,
		growth: 12.4
	},
	{
		quarter: "Q2 FY26",
		revenue: 108,
		growth: 17.4
	},
	{
		quarter: "Q3 FY26",
		revenue: 124,
		growth: 14.8
	},
	{
		quarter: "Q4 FY26",
		revenue: 120,
		growth: -3.2
	}
];
var revenueForecast = [
	{
		month: "Aug",
		actual: 0,
		forecast: 52
	},
	{
		month: "Sep",
		actual: 0,
		forecast: 55
	},
	{
		month: "Oct",
		actual: 0,
		forecast: 58
	},
	{
		month: "Nov",
		actual: 0,
		forecast: 54
	},
	{
		month: "Dec",
		actual: 0,
		forecast: 60
	},
	{
		month: "Jan",
		actual: 0,
		forecast: 48
	}
];
var avgDealSizeTrend = [
	{
		month: "Jan",
		size: 1.52
	},
	{
		month: "Feb",
		size: 1.58
	},
	{
		month: "Mar",
		size: 1.65
	},
	{
		month: "Apr",
		size: 1.71
	},
	{
		month: "May",
		size: 1.78
	},
	{
		month: "Jun",
		size: 1.82
	},
	{
		month: "Jul",
		size: 1.86
	}
];
var lostReasons = [
	{
		reason: "Budget constraints",
		count: 32,
		pct: 30.8
	},
	{
		reason: "Chose competitor",
		count: 24,
		pct: 23.1
	},
	{
		reason: "No response",
		count: 18,
		pct: 17.3
	},
	{
		reason: "Timing not right",
		count: 14,
		pct: 13.5
	},
	{
		reason: "Feature gap",
		count: 10,
		pct: 9.6
	},
	{
		reason: "Other",
		count: 6,
		pct: 5.8
	}
];
var salespersonPerformance = [
	{
		name: "Aarav Shah",
		revenue: 13.85,
		target: 12
	},
	{
		name: "Riya Mehta",
		revenue: 17.4,
		target: 15
	},
	{
		name: "Karan Patel",
		revenue: 8.8,
		target: 10
	},
	{
		name: "Het Kansara",
		revenue: 24.8,
		target: 20
	},
	{
		name: "Neha Verma",
		revenue: 6.1,
		target: 10
	},
	{
		name: "Devansh Rao",
		revenue: 4.3,
		target: 5
	},
	{
		name: "Simran Kaur",
		revenue: 4.7,
		target: 9
	}
];
function formatCurrency$1(amount) {
	if (amount >= 1e7) return `\u20b9${(amount / 1e7).toFixed(2)} Cr`;
	if (amount >= 1e5) return `\u20b9${(amount / 1e5).toFixed(2)} L`;
	if (amount >= 1e3) return `\u20b9${(amount / 1e3).toFixed(1)}K`;
	return `\u20b9${amount.toLocaleString("en-IN")}`;
}
var SalesContext = (0, import_react.createContext)(void 0);
function SalesProvider({ children }) {
	const [leads$1, setLeads] = (0, import_react.useState)(leads);
	const [stages, setStages] = (0, import_react.useState)(pipelineStages.map((s) => s.stage));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesContext.Provider, {
		value: {
			leads: leads$1,
			setLeads,
			stages,
			setStages
		},
		children
	});
}
function useSales() {
	const context = (0, import_react.useContext)(SalesContext);
	if (context === void 0) throw new Error("useSales must be used within a SalesProvider");
	return context;
}
function StatCard({ label, value, sub, icon: Icon, trend, color = "emerald" }) {
	const [period, setPeriod] = (0, import_react.useState)("last month");
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative rounded-2xl border border-border bg-card p-4 transition-shadow hover:shadow-lg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium text-muted-foreground",
						children: label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl font-bold tracking-tight",
						children: value
					}),
					sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground",
						children: sub
					})
				]
			}), Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("grid h-9 w-9 shrink-0 place-items-center rounded-xl", color === "emerald" && "bg-emerald-50 text-emerald-600", color === "blue" && "bg-blue-50 text-blue-600", color === "amber" && "bg-amber-50 text-amber-600", color === "rose" && "bg-rose-50 text-rose-600", color === "violet" && "bg-violet-50 text-violet-600", color === "cyan" && "bg-cyan-50 text-cyan-600"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4.5 w-4.5" })
			})]
		}), trend && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 flex items-center gap-1 text-[11px]",
			children: [trend === "up" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3 w-3 text-emerald-500" }) : trend === "down" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { className: "h-3 w-3 text-rose-500" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative inline-block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setIsOpen(!isOpen),
					className: cn("flex items-center gap-0.5 hover:underline decoration-dashed underline-offset-2 transition-colors", trend === "up" ? "text-emerald-700 hover:text-emerald-800" : trend === "down" ? "text-rose-700 hover:text-rose-800" : "text-muted-foreground hover:text-foreground"),
					children: [
						"vs ",
						period,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3" })
					]
				}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute left-0 top-full mt-1 z-20 w-28 rounded-lg border border-border bg-white shadow-lg overflow-hidden animate-in fade-in zoom-in-95",
					children: [
						"yesterday",
						"last week",
						"last month",
						"last quarter",
						"last year"
					].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setPeriod(p);
							setIsOpen(false);
						},
						className: cn("block w-full text-left px-3 py-2 text-[11px] font-medium transition-colors hover:bg-muted", period === p ? "text-emerald-700 bg-emerald-50" : "text-muted-foreground"),
						children: ["vs ", p]
					}, p))
				})]
			})]
		})]
	});
}
function SectionTitle({ title, subtitle, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-end justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-lg font-bold tracking-tight",
			children: title
		}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: subtitle
		})] }), action && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: action.onClick,
			className: "flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold text-emerald-600 transition-colors hover:bg-emerald-50",
			children: [
				action.label,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })
			]
		})]
	});
}
function HealthScore() {
	const score = dashboardStats.salesHealthScore;
	const circumference = 2 * Math.PI * 42;
	const offset = circumference - score / 100 * circumference;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-xs font-bold uppercase tracking-widest text-emerald-700",
				children: "Sales Health Score"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-28 w-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "h-28 w-28 -rotate-90",
					viewBox: "0 0 100 100",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "50",
						cy: "50",
						r: "42",
						fill: "none",
						stroke: "#d1fae5",
						strokeWidth: "8"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "50",
						cy: "50",
						r: "42",
						fill: "none",
						stroke: "#10b981",
						strokeWidth: "8",
						strokeDasharray: circumference,
						strokeDashoffset: offset,
						strokeLinecap: "round",
						className: "transition-all duration-1000"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 flex flex-col items-center justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-3xl font-black text-emerald-700",
						children: score
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] text-emerald-600",
						children: "out of 100"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-emerald-600",
				children: "+6 pts vs last week"
			})
		]
	});
}
var quickActionList = [
	{
		label: "Add Lead",
		icon: Plus
	},
	{
		label: "Bulk Upload Leads",
		icon: Upload
	},
	{
		label: "Import CSV",
		icon: FileText
	},
	{
		label: "Export Excel",
		icon: FileSpreadsheet
	},
	{
		label: "Export PDF",
		icon: FileText
	},
	{
		label: "Add Meeting",
		icon: CalendarPlus
	},
	{
		label: "Schedule Follow-up",
		icon: Bell
	},
	{
		label: "Create Task",
		icon: ListTodo
	},
	{
		label: "Create Quotation",
		icon: FileText
	},
	{
		label: "Convert Lead",
		icon: ArrowRightLeft
	},
	{
		label: "Add Payment",
		icon: IndianRupee
	},
	{
		label: "Add Note",
		icon: FileText
	}
];
function RevenueChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			title: "Revenue vs Target",
			subtitle: "Rolling 12 months"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 h-64",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
					data: revenueVsTarget,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "revGrad",
							x1: "0",
							y1: "0",
							x2: "0",
							y2: "1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: "#10b981",
								stopOpacity: .3
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: "#10b981",
								stopOpacity: 0
							})]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							strokeDasharray: "3 3",
							stroke: "#f0f0f0"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "month",
							tick: { fontSize: 11 }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							tick: { fontSize: 11 },
							tickFormatter: (v) => `₹${v}L`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { formatter: (v) => [`₹${v}L`, ""] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
							type: "monotone",
							dataKey: "target",
							stroke: "#94a3b8",
							strokeDasharray: "4 4",
							fill: "none",
							strokeWidth: 2
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
							type: "monotone",
							dataKey: "revenue",
							stroke: "#10b981",
							fill: "url(#revGrad)",
							strokeWidth: 2.5
						})
					]
				})
			})
		})]
	});
}
function FunnelChartSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			title: "Conversion Funnel",
			subtitle: "Lead to won journey"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 space-y-2",
			children: conversionFunnel.map((item, i) => {
				const maxVal = conversionFunnel[0]?.value || 1;
				const pct = item.value / maxVal * 100;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-20 text-right text-xs font-medium text-muted-foreground",
							children: item.stage
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-7 overflow-hidden rounded-lg bg-muted/50",
								style: { width: "100%" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-full items-center rounded-lg px-2 text-[11px] font-bold text-white transition-all duration-700",
									style: {
										width: `${pct}%`,
										backgroundColor: item.color
									},
									children: item.value.toLocaleString()
								})
							})
						}),
						i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] text-muted-foreground",
							children: [(item.value / (conversionFunnel[i - 1]?.value || 1) * 100).toFixed(0), "%"]
						})
					]
				}, item.stage);
			})
		})]
	});
}
function LeadSourceChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: "Lead Source Analysis" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 h-64",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
					data: leadSourceData,
					layout: "vertical",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							strokeDasharray: "3 3",
							stroke: "#f0f0f0"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							type: "number",
							tick: { fontSize: 11 }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							dataKey: "source",
							type: "category",
							tick: { fontSize: 10 },
							width: 75
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
							dataKey: "leads",
							fill: "#6366f1",
							radius: [
								0,
								4,
								4,
								0
							],
							barSize: 12,
							name: "Leads"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
							dataKey: "won",
							fill: "#10b981",
							radius: [
								0,
								4,
								4,
								0
							],
							barSize: 12,
							name: "Won"
						})
					]
				})
			})
		})]
	});
}
function CategoryPieChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: "Category Mix" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 h-64",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
						data: categoryMix,
						cx: "50%",
						cy: "50%",
						innerRadius: 55,
						outerRadius: 85,
						paddingAngle: 3,
						dataKey: "value",
						children: categoryMix.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: entry.color }, entry.name))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { formatter: (v) => [`${v}%`, ""] })] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1",
				children: categoryMix.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1 text-[10px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block h-2 w-2 rounded-full",
						style: { backgroundColor: c.color }
					}), c.name]
				}, c.name))
			})
		]
	});
}
function MonthlyGrowthChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: "Monthly Growth" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 h-64",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
					data: monthlyGrowth,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							strokeDasharray: "3 3",
							stroke: "#f0f0f0"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "month",
							tick: { fontSize: 11 }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							tick: { fontSize: 11 },
							tickFormatter: (v) => `${v}%`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { formatter: (v) => [`${v}%`, "Growth"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
							dataKey: "growth",
							radius: [
								6,
								6,
								0,
								0
							],
							barSize: 28,
							children: monthlyGrowth.map((entry, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: entry.growth >= 0 ? "#10b981" : "#ef4444" }, i))
						})
					]
				})
			})
		})]
	});
}
function FounderSnapshot({ setActive }) {
	const items = [
		{
			label: "Top Performer",
			value: founderSnapshot.topPerformer.name,
			sub: `${founderSnapshot.topPerformer.pct}% of target`,
			color: "emerald"
		},
		{
			label: "Bottom Performer",
			value: founderSnapshot.bottomPerformer.name,
			sub: `${founderSnapshot.bottomPerformer.pct}% of target`,
			color: "rose"
		},
		{
			label: "Revenue Today",
			value: formatCurrency$1(founderSnapshot.revenueToday),
			sub: `${founderSnapshot.revenuePayments} payments received`,
			color: "blue"
		},
		{
			label: "Revenue This Month",
			value: formatCurrency$1(founderSnapshot.revenueMonth),
			sub: `${founderSnapshot.revenueMonthPct}% of ₹50 L target`,
			color: "emerald"
		},
		{
			label: "Pending Payments",
			value: formatCurrency$1(founderSnapshot.pendingPayments),
			sub: `${founderSnapshot.pendingInvoices} invoices`,
			color: "amber"
		},
		{
			label: "Pending Proposals",
			value: String(founderSnapshot.pendingProposals),
			sub: `${formatCurrency$1(founderSnapshot.pendingProposalValue)} value`,
			color: "violet"
		},
		{
			label: "Highest Lead Source",
			value: founderSnapshot.highestLeadSource,
			sub: `${founderSnapshot.highestLeadSourceLeads} leads · ${founderSnapshot.highestLeadSourceWon} won`,
			color: "blue"
		},
		{
			label: "Best Category",
			value: founderSnapshot.bestCategory,
			sub: `${formatCurrency$1(founderSnapshot.bestCategoryRevenue)} revenue`,
			color: "amber"
		},
		{
			label: "Best Campaign",
			value: founderSnapshot.bestCampaign,
			sub: `ROAS ${founderSnapshot.bestCampaignROAS}x`,
			color: "emerald"
		},
		{
			label: "Upcoming Closings",
			value: `${founderSnapshot.upcomingClosings} deals`,
			sub: `${formatCurrency$1(founderSnapshot.upcomingClosingsValue)} this week`,
			color: "cyan"
		},
		{
			label: "Inactive Leads",
			value: String(founderSnapshot.inactiveLeads),
			sub: `No activity ${founderSnapshot.inactiveDays}+ days`,
			color: "rose"
		},
		{
			label: "Overdue Follow-up Owners",
			value: `${founderSnapshot.overdueFollowUpOwners.length} employees`,
			sub: founderSnapshot.overdueFollowUpOwners.join(", "),
			color: "amber"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			title: "Founder Snapshot",
			action: {
				label: "Team performance",
				onClick: () => setActive?.("/work/sales/team")
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-background p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
						children: item.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-bold",
						children: item.value
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground",
						children: item.sub
					})
				]
			}, item.label))
		})]
	});
}
function AIInsights() {
	const iconMap = {
		convert: TrendingUp,
		cold: TriangleAlert,
		timing: Clock,
		action: Zap,
		summary: Activity
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-white p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 text-violet-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-bold",
				children: "AI Sales Intelligence"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 space-y-3",
			children: aiInsights.map((insight) => {
				const Icon = iconMap[insight.type] || Sparkles;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3 rounded-xl border border-border bg-white/70 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-violet-100 text-violet-600",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold text-violet-700",
						children: insight.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12px] leading-relaxed text-muted-foreground",
						children: insight.text
					})] })]
				}, insight.title);
			})
		})]
	});
}
function HotLeads({ setActive }) {
	const { leads } = useSales();
	const hotLeads = (0, import_react.useMemo)(() => leads.filter((l) => l.stage !== "Won" && l.stage !== "Lost").sort((a, b) => b.aiScore - a.aiScore).slice(0, 6), [leads]);
	const stageColor = {
		"New Lead": "bg-indigo-100 text-indigo-700",
		Contacted: "bg-violet-100 text-violet-700",
		Meeting: "bg-blue-100 text-blue-700",
		Demo: "bg-cyan-100 text-cyan-700",
		Proposal: "bg-amber-100 text-amber-700",
		Negotiation: "bg-orange-100 text-orange-700"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			title: "Hot Leads Needing Attention",
			subtitle: "Ranked by AI lead score",
			action: {
				label: "All leads",
				onClick: () => setActive?.("/work/sales/leads")
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
			children: hotLeads.map((lead) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group cursor-pointer rounded-xl border border-border bg-background p-4 transition-all hover:border-emerald-300 hover:shadow-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: lead.company
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							lead.contact,
							" · ",
							lead.city
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-9 w-9 place-items-center rounded-full bg-emerald-50 text-sm font-black text-emerald-700",
						children: lead.aiScore
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("rounded-full px-2 py-0.5 text-[10px] font-semibold", stageColor[lead.stage] || "bg-gray-100 text-gray-700"),
						children: lead.stage
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold",
						children: formatCurrency$1(lead.budget)
					})]
				})]
			}, lead.id))
		})]
	});
}
function SalesDashboard({ setActive, onAction }) {
	const [isQuickActionsOpen, setIsQuickActionsOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-black tracking-tight sm:text-3xl",
					children: "CEO Sales Dashboard"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: [(/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
						weekday: "long",
						day: "numeric",
						month: "long",
						year: "numeric"
					}), " · Complete sales operating system for HK DigiVerse"]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setIsQuickActionsOpen(!isQuickActionsOpen),
								className: "flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4" }),
									" Quick Actions ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3" })
								]
							}), isQuickActionsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute right-0 top-full mt-2 w-56 rounded-xl border border-border bg-white p-2 shadow-xl animate-in fade-in zoom-in-95",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-2 px-2 pb-2 border-b border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold text-muted-foreground uppercase tracking-wider",
										children: "Actions"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "max-h-[300px] overflow-y-auto",
									children: quickActionList.map(({ label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											onAction?.(label);
											setIsQuickActionsOpen(false);
										},
										className: "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: label
										})]
									}, label))
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActive?.("/work/sales/analytics"),
							className: "rounded-lg border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-accent",
							children: "Analytics"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActive?.("/work/sales/pipeline"),
							className: "rounded-lg border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-accent",
							children: "Pipeline"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[1fr_240px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-white p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold",
							children: "Good Morning, Het 👋"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Here is today's sales summary."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-4",
							children: [
								["42", "follow-ups due today"],
								["8", "meetings scheduled"],
								["3", "proposals pending"],
								["₹8,45,000", "pipeline value"],
								["6", "hot leads need attention"],
								["2", "leads haven't been contacted for 5 days"],
								["68%", "Revenue achieved of monthly target"],
								["₹12.8 Lakhs", "Expected closing this week"]
							].map(([val, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-black text-emerald-700",
									children: val
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-muted-foreground",
									children: label
								})]
							}, label))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HealthScore, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Today's Revenue",
						value: "₹1.42 L",
						icon: IndianRupee,
						color: "emerald",
						trend: "up"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Monthly Revenue",
						value: "₹34.10 L",
						sub: "68% of target",
						icon: IndianRupee,
						color: "blue",
						trend: "up"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Monthly Target",
						value: "₹50.00 L",
						sub: "68% of target",
						icon: Target,
						color: "amber"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Achievement %",
						value: "68.2%",
						sub: "68% of target",
						icon: TrendingUp,
						color: "emerald"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Today's Leads",
						value: "37",
						icon: Users,
						color: "blue",
						trend: "up"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Active Leads",
						value: "412",
						icon: Users,
						color: "violet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Hot Leads",
						value: "64",
						icon: Flame,
						color: "rose"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Qualified Leads",
						value: "148",
						icon: CircleCheck,
						color: "emerald"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Proposal Sent",
						value: "52",
						icon: FileText,
						color: "amber"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Negotiation",
						value: "28",
						icon: Activity,
						color: "cyan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Won Deals",
						value: "31",
						sub: "74% of target",
						icon: CircleCheck,
						color: "emerald",
						trend: "up"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Lost Deals",
						value: "17",
						icon: CircleX,
						color: "rose",
						trend: "down"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Today's Follow-ups",
						value: "42",
						sub: "55% of target",
						icon: Phone,
						color: "blue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Overdue Follow-ups",
						value: "11",
						icon: TriangleAlert,
						color: "rose"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Average Deal Size",
						value: "₹1.86 L",
						icon: IndianRupee,
						color: "emerald",
						trend: "up"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Lead Conversion %",
						value: "24.6%",
						sub: "62% of target",
						icon: TrendingUp,
						color: "violet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Sales Cycle (Days)",
						value: "27",
						icon: Clock,
						color: "cyan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Revenue Forecast",
						value: "₹48.20 L",
						sub: "82% of target",
						icon: ChartColumn,
						color: "emerald",
						trend: "up"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Collection Pending",
						value: "₹9.65 L",
						icon: IndianRupee,
						color: "amber"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Target Remaining",
						value: "₹15.90 L",
						sub: "32% of target",
						icon: Target,
						color: "rose"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevenueChart, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FunnelChartSection, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadSourceChart, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryPieChart, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthlyGrowthChart, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[1fr_380px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FounderSnapshot, { setActive }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AIInsights, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HotLeads, { setActive })
		]
	});
}
function DealCard({ lead }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		draggable: true,
		onDragStart: (e) => {
			e.dataTransfer.setData("leadId", lead.id);
			e.dataTransfer.effectAllowed = "move";
		},
		className: "cursor-grab active:cursor-grabbing rounded-xl border border-border bg-white p-3 shadow-sm transition-all hover:border-emerald-300 hover:shadow-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold leading-snug",
				children: lead.company
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-0.5 text-[11px] text-muted-foreground",
				children: [
					lead.contact,
					" · ",
					lead.city
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-medium text-muted-foreground",
					children: lead.owner
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-bold text-emerald-700",
					children: formatCurrency$1(lead.budget)
				})]
			})
		]
	});
}
function KanbanColumn({ stage, color, items, onDropCard }) {
	const total = items.reduce((s, l) => s + l.budget, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onDragOver: (e) => {
			e.preventDefault();
			e.dataTransfer.dropEffect = "move";
		},
		onDrop: (e) => {
			e.preventDefault();
			const leadId = e.dataTransfer.getData("leadId");
			if (leadId) onDropCard(leadId, stage);
		},
		className: "flex w-[260px] shrink-0 flex-col rounded-2xl border border-border bg-muted/30 transition-colors hover:bg-muted/50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-b border-border px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-2.5 w-2.5 rounded-full",
						style: { backgroundColor: color }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-bold",
						children: stage
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-auto rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold",
						children: items.length
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 space-y-2 overflow-y-auto p-3",
				style: { maxHeight: "calc(100vh - 320px)" },
				children: [items.map((lead) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DealCard, { lead }, lead.id)), items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-6 text-center text-xs text-muted-foreground",
					children: "No deals"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border px-4 py-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[10px] font-bold uppercase text-muted-foreground",
					children: ["Total: ", formatCurrency$1(total)]
				})
			})
		]
	});
}
function TableView({ data, onStageChange, activeStages }) {
	const { stages } = useSales();
	const stageColor = {
		"New Lead": "bg-indigo-100 text-indigo-700",
		Contacted: "bg-violet-100 text-violet-700",
		Meeting: "bg-blue-100 text-blue-700",
		Demo: "bg-cyan-100 text-cyan-700",
		Proposal: "bg-amber-100 text-amber-700",
		Negotiation: "bg-orange-100 text-orange-700",
		Won: "bg-emerald-100 text-emerald-700",
		Lost: "bg-rose-100 text-rose-700"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto rounded-2xl border border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-b border-border bg-muted/50 text-xs font-bold uppercase tracking-wider text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3 text-left",
						children: "Company"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3 text-left",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3 text-left",
						children: "Stage"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3 text-left",
						children: "Owner"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3 text-right",
						children: "Budget"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3 text-center",
						children: "AI Score"
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: data.map((lead) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-b border-border transition-colors hover:bg-accent/50",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-3 font-medium",
						children: lead.company
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: [
							lead.contact,
							" · ",
							lead.city
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-3",
						onClick: (e) => e.stopPropagation(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: lead.stage,
							onChange: (e) => onStageChange(lead.id, e.target.value),
							className: cn("cursor-pointer appearance-none rounded-full px-2 py-0.5 text-[10px] font-semibold outline-none ring-2 ring-transparent transition-all focus:ring-emerald-500/50", stageColor[lead.stage] || "bg-emerald-100 text-emerald-700"),
							style: { textAlignLast: "center" },
							children: Array.from(/* @__PURE__ */ new Set([...stages, lead.stage])).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s,
								className: "bg-background text-foreground text-xs font-medium",
								children: s
							}, s))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: lead.owner
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-3 text-right font-semibold",
						children: formatCurrency$1(lead.budget)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-3 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("inline-flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold", lead.aiScore >= 80 ? "bg-emerald-100 text-emerald-700" : lead.aiScore >= 50 ? "bg-amber-100 text-amber-700" : "bg-rose-100 text-rose-700"),
							children: lead.aiScore
						})
					})
				]
			}, lead.id)) })]
		})
	});
}
function TimelineView({ data }) {
	const sorted = (0, import_react.useMemo)(() => [...data].sort((a, b) => b.createdAt.localeCompare(a.createdAt)), [data]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-0",
		children: sorted.slice(0, 20).map((lead, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-3 rounded-full bg-emerald-500" }), i < sorted.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px flex-1 bg-border" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: lead.createdAt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-sm font-semibold",
						children: lead.company
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							lead.contact,
							" · ",
							lead.city,
							" · ",
							lead.stage,
							" · ",
							formatCurrency$1(lead.budget)
						]
					})
				]
			})]
		}, lead.id))
	});
}
function SalesPipeline({ onAction }) {
	const { leads, setLeads, stages } = useSales();
	const [view, setView] = (0, import_react.useState)("kanban");
	const [search, setSearch] = (0, import_react.useState)("");
	const handleStageChange = (id, newStage) => {
		setLeads(leads.map((l) => l.id === id ? {
			...l,
			stage: newStage
		} : l));
		toast.success("Stage updated", { description: `Lead moved to ${newStage}` });
	};
	const filtered = (0, import_react.useMemo)(() => {
		const q = search.trim().toLowerCase();
		if (!q) return leads;
		return leads.filter((l) => l.company.toLowerCase().includes(q) || l.contact.toLowerCase().includes(q) || l.owner.toLowerCase().includes(q));
	}, [search, leads]);
	const activeStages = (0, import_react.useMemo)(() => {
		const leadStages = Array.from(new Set(leads.map((l) => l.stage)));
		const allStages = [...stages];
		for (const ls of leadStages) if (!allStages.includes(ls)) allStages.push(ls);
		return allStages;
	}, [stages, leads]);
	const grouped = (0, import_react.useMemo)(() => {
		const map = {};
		for (const s of activeStages) map[s] = [];
		for (const l of filtered) {
			if (!map[l.stage]) map[l.stage] = [];
			map[l.stage].push(l);
		}
		return map;
	}, [filtered, activeStages]);
	const totalValue = filtered.reduce((s, l) => s + l.budget, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-black tracking-tight sm:text-3xl",
				children: "Sales Pipeline"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: [
					filtered.length,
					" open opportunities · ",
					formatCurrency$1(totalValue),
					" weighted pipeline value"
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: search,
							onChange: (e) => setSearch(e.target.value),
							placeholder: "Search deals…",
							className: "h-10 w-full max-w-sm rounded-xl border border-border bg-background pl-9 pr-4 text-sm outline-none focus:ring-2 focus:ring-emerald-500/30"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex rounded-xl border border-border bg-muted/40 p-0.5",
						children: [
							[
								"kanban",
								LayoutGrid,
								"Kanban"
							],
							[
								"table",
								Table2,
								"Table"
							],
							[
								"timeline",
								Clock,
								"Timeline"
							]
						].map(([v, Icon, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setView(v),
							className: cn("flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors", view === v ? "bg-white text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" }),
								" ",
								label
							]
						}, v))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => onAction?.("Add Lead"),
						className: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add Deal"]
					})
				]
			}),
			view === "kanban" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-4 overflow-x-auto pb-4 scrollbar-hide",
				children: activeStages.map((stage) => {
					const predefinedColor = [
						"#6366f1",
						"#8b5cf6",
						"#3b82f6",
						"#06b6d4",
						"#f59e0b",
						"#f97316",
						"#10b981",
						"#f43f5e"
					];
					const color = predefinedColor[activeStages.indexOf(stage) % predefinedColor.length] || "#6366f1";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanbanColumn, {
						stage,
						color,
						items: grouped[stage] || [],
						onDropCard: handleStageChange
					}, stage);
				})
			}),
			view === "table" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableView, {
				data: filtered,
				onStageChange: handleStageChange,
				activeStages
			}),
			view === "timeline" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-border bg-card p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineView, { data: filtered })
			})
		]
	});
}
var stageColors = {
	"New Lead": "bg-indigo-100 text-indigo-700",
	Contacted: "bg-violet-100 text-violet-700",
	Meeting: "bg-blue-100 text-blue-700",
	Demo: "bg-cyan-100 text-cyan-700",
	Proposal: "bg-amber-100 text-amber-700",
	Negotiation: "bg-orange-100 text-orange-700",
	Won: "bg-emerald-100 text-emerald-700",
	Lost: "bg-rose-100 text-rose-700"
};
var priorityColors = {
	High: "bg-rose-100 text-rose-700",
	Medium: "bg-amber-100 text-amber-700",
	Low: "bg-blue-100 text-blue-700"
};
function SalesLeads({ onAction }) {
	const { leads, setLeads, stages } = useSales();
	const [tab, setTab] = (0, import_react.useState)("all");
	const [stageFilter, setStageFilter] = (0, import_react.useState)("All");
	const [search, setSearch] = (0, import_react.useState)("");
	const [selectedLead, setSelectedLead] = (0, import_react.useState)(null);
	const handleStageChange = (id, newStage) => {
		setLeads(leads.map((l) => l.id === id ? {
			...l,
			stage: newStage
		} : l));
		toast.success("Stage updated", { description: `Lead moved to ${newStage}` });
	};
	const filtered = (0, import_react.useMemo)(() => {
		let result = leads;
		if (tab === "my") result = result.filter((l) => l.owner === "Riya Mehta");
		if (stageFilter !== "All") result = result.filter((l) => l.stage === stageFilter);
		const q = search.trim().toLowerCase();
		if (q) result = result.filter((l) => l.company.toLowerCase().includes(q) || l.contact.toLowerCase().includes(q) || l.city.toLowerCase().includes(q) || l.owner.toLowerCase().includes(q));
		return result;
	}, [
		tab,
		stageFilter,
		search,
		leads
	]);
	const activeStages = (0, import_react.useMemo)(() => {
		const leadStages = Array.from(new Set(leads.map((l) => l.stage)));
		const all = [...stages];
		for (const ls of leadStages) if (!all.includes(ls)) all.push(ls);
		return all;
	}, [stages, leads]);
	const allStages = (0, import_react.useMemo)(() => ["All", ...activeStages], [activeStages]);
	const stageCounts = (0, import_react.useMemo)(() => {
		const base = tab === "my" ? leads.filter((l) => l.owner === "Riya Mehta") : leads;
		const counts = { All: base.length };
		for (const s of activeStages) counts[s] = 0;
		for (const l of base) counts[l.stage] = (counts[l.stage] || 0) + 1;
		return counts;
	}, [
		tab,
		leads,
		activeStages
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-black tracking-tight sm:text-3xl",
					children: "All Leads"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "CEO, Admin and Sales Head can view the entire company database"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 self-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onAction?.("Import CSV"),
						className: "flex items-center gap-1.5 rounded-xl border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-accent",
						children: "Import CSV"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => onAction?.("Add Lead"),
						className: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add Lead"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex rounded-xl border border-border bg-muted/40 p-0.5 w-fit",
				children: ["all", "my"].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(t),
					className: cn("rounded-lg px-4 py-1.5 text-xs font-semibold transition-colors", tab === t ? "bg-white text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
					children: t === "all" ? "All Leads" : "My Leads"
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5",
				children: allStages.map((stage) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setStageFilter(stage),
					className: cn("flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition-colors", stageFilter === stage ? "bg-emerald-600 text-white" : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"),
					children: [stage, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("ml-0.5 rounded-full px-1.5 text-[10px]", stageFilter === stage ? "bg-white/20" : "bg-background"),
						children: stageCounts[stage] || 0
					})]
				}, stage))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: search,
					onChange: (e) => setSearch(e.target.value),
					placeholder: "Search leads…",
					className: "h-10 w-full rounded-xl border border-border bg-background pl-9 pr-4 text-sm outline-none focus:ring-2 focus:ring-emerald-500/30"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-x-auto rounded-2xl border border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border bg-muted/50 text-xs font-bold uppercase tracking-wider text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 text-left",
								children: "Company"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 text-left",
								children: "Category"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 text-left",
								children: "Source"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 text-left",
								children: "Stage"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 text-left",
								children: "Owner"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 text-left",
								children: "Priority"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 text-right",
								children: "Budget"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 text-left",
								children: "Next Follow-up"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 text-center",
								children: "AI"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: filtered.map((lead) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						onClick: () => setSelectedLead(lead),
						className: "cursor-pointer border-b border-border transition-colors hover:bg-accent/50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: lead.company
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[11px] text-muted-foreground",
									children: [
										lead.contact,
										" · ",
										lead.city,
										", ",
										lead.state
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-xs text-muted-foreground",
								children: lead.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-xs text-muted-foreground",
								children: lead.source
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								onClick: (e) => e.stopPropagation(),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: lead.stage,
									onChange: (e) => handleStageChange(lead.id, e.target.value),
									className: cn("cursor-pointer appearance-none rounded-full px-2 py-0.5 text-[10px] font-semibold outline-none ring-2 ring-transparent transition-all focus:ring-emerald-500/50", stageColors[lead.stage] || "bg-emerald-100 text-emerald-700"),
									style: { textAlignLast: "center" },
									children: Array.from(/* @__PURE__ */ new Set([...stages, lead.stage])).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: s,
										className: "bg-background text-foreground text-xs font-medium",
										children: s
									}, s))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-xs",
								children: lead.owner
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("rounded-full px-2 py-0.5 text-[10px] font-semibold", priorityColors[lead.priority]),
									children: lead.priority
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-right text-xs font-semibold",
								children: formatCurrency$1(lead.budget)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-xs text-muted-foreground",
								children: lead.nextFollowUp || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("inline-flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold", lead.aiScore >= 80 ? "bg-emerald-100 text-emerald-700" : lead.aiScore >= 50 ? "bg-amber-100 text-amber-700" : "bg-rose-100 text-rose-700"),
									children: lead.aiScore
								})
							})
						]
					}, lead.id)) })]
				}), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-10 text-center text-sm text-muted-foreground",
					children: "No leads found"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [
					"Showing ",
					filtered.length,
					" of ",
					leads.length,
					" leads"
				]
			}),
			selectedLead && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-50 flex justify-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 bg-black/40",
					onClick: () => setSelectedLead(null)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full max-w-md animate-in slide-in-from-right overflow-y-auto border-l border-border bg-background p-6 shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setSelectedLead(null),
						className: "absolute right-4 top-4 rounded-lg p-1 hover:bg-accent",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold text-muted-foreground",
									children: selectedLead.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-1 text-xl font-black",
									children: selectedLead.company
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted-foreground",
									children: [
										selectedLead.contact,
										" · ",
										selectedLead.city,
										", ",
										selectedLead.state
									]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: selectedLead.stage,
									onChange: (e) => {
										handleStageChange(selectedLead.id, e.target.value);
										setSelectedLead({
											...selectedLead,
											stage: e.target.value
										});
									},
									className: cn("cursor-pointer appearance-none rounded-full px-3 py-1 text-xs font-semibold outline-none ring-2 ring-transparent transition-all focus:ring-emerald-500/50", stageColors[selectedLead.stage] || "bg-emerald-100 text-emerald-700"),
									style: { textAlignLast: "center" },
									children: Array.from(/* @__PURE__ */ new Set([...stages, selectedLead.stage])).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: s,
										className: "bg-background text-foreground font-medium",
										children: s
									}, s))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: cn("rounded-full px-3 py-1 text-xs font-semibold", priorityColors[selectedLead.priority]),
									children: [selectedLead.priority, " Priority"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [
									["Category", selectedLead.category],
									["Source", selectedLead.source],
									["Owner", selectedLead.owner],
									["Budget", formatCurrency$1(selectedLead.budget)],
									["AI Score", String(selectedLead.aiScore)],
									["Next Follow-up", selectedLead.nextFollowUp || "N/A"],
									["Created", selectedLead.createdAt]
								].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
										children: label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm font-semibold",
										children: value
									})]
								}, label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: (e) => {
											e.stopPropagation();
											toast("Calling lead...");
										},
										className: "flex-1 rounded-xl bg-emerald-600 py-2 text-sm font-semibold text-white hover:bg-emerald-700",
										children: "Call"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: (e) => {
											e.stopPropagation();
											toast("Opening WhatsApp...");
										},
										className: "flex-1 rounded-xl border border-border py-2 text-sm font-semibold hover:bg-accent",
										children: "WhatsApp"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: (e) => {
											e.stopPropagation();
											toast("Drafting email...");
										},
										className: "flex-1 rounded-xl border border-border py-2 text-sm font-semibold hover:bg-accent",
										children: "Email"
									})
								]
							})
						]
					})]
				})]
			})
		]
	});
}
var typeIcons = {
	"Call Client": Phone,
	"Payment Collection": FileText,
	"Recurring Follow-up": Clock,
	Proposal: FileText,
	"Birthday Wish": Gift,
	Meeting: Users,
	Demo: Video,
	WhatsApp: MessageCircle,
	Email: Mail
};
var statusConfig = {
	overdue: {
		label: "Overdue",
		color: "text-rose-600",
		bg: "bg-rose-50 border-rose-200",
		icon: TriangleAlert,
		iconColor: "text-rose-500"
	},
	today: {
		label: "Due Today",
		color: "text-amber-600",
		bg: "bg-amber-50 border-amber-200",
		icon: Clock,
		iconColor: "text-amber-500"
	},
	upcoming: {
		label: "Upcoming",
		color: "text-blue-600",
		bg: "bg-blue-50 border-blue-200",
		icon: Calendar,
		iconColor: "text-blue-500"
	},
	completed: {
		label: "Completed",
		color: "text-emerald-600",
		bg: "bg-emerald-50 border-emerald-200",
		icon: CircleCheck,
		iconColor: "text-emerald-500"
	}
};
function TaskRow({ task }) {
	const [done, setDone] = (0, import_react.useState)(task.status === "completed");
	const Icon = typeIcons[task.type] || Phone;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-3 rounded-xl border px-4 py-3 transition-all", done ? "border-emerald-200 bg-emerald-50/50 opacity-70" : "border-border bg-card hover:shadow-sm"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					setDone(!done);
					if (!done) toast.success("Task completed!", { description: task.type + " for " + task.company });
				},
				className: cn("grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 transition-colors", done ? "border-emerald-500 bg-emerald-500 text-white" : "border-muted-foreground/30 hover:border-emerald-400"),
				children: done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("grid h-8 w-8 shrink-0 place-items-center rounded-lg", task.priority === "High" ? "bg-rose-100 text-rose-600" : task.priority === "Medium" ? "bg-amber-100 text-amber-600" : "bg-blue-100 text-blue-600"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: cn("text-sm font-medium", done && "line-through"),
					children: [
						task.type,
						" — ",
						task.company
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[11px] text-muted-foreground",
					children: [
						task.assignee,
						" · due ",
						task.dueDate
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("rounded-full px-2 py-0.5 text-[10px] font-semibold", task.priority === "High" ? "bg-rose-100 text-rose-700" : task.priority === "Medium" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"),
				children: task.priority
			})
		]
	});
}
function SalesTasks({ onAction }) {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const counts = (0, import_react.useMemo)(() => {
		const c = {
			overdue: 0,
			today: 0,
			upcoming: 0,
			completed: 0
		};
		for (const t of salesTasks) c[t.status]++;
		return c;
	}, []);
	const grouped = (0, import_react.useMemo)(() => {
		const order = [
			"overdue",
			"today",
			"upcoming",
			"completed"
		];
		if (filter !== "all") return [{
			status: filter,
			tasks: salesTasks.filter((t) => t.status === filter)
		}];
		return order.map((s) => ({
			status: s,
			tasks: salesTasks.filter((t) => t.status === s)
		})).filter((g) => g.tasks.length > 0);
	}, [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-black tracking-tight sm:text-3xl",
					children: "Sales Tasks & Follow-ups"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Auto-created from pipeline activity — nothing slips through"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => onAction?.("Create Task"),
					className: "flex items-center gap-1.5 self-start rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Create Task"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
				children: [
					{
						label: "Due Today",
						value: counts.today,
						color: "amber",
						icon: Clock
					},
					{
						label: "Overdue",
						value: counts.overdue,
						color: "rose",
						icon: TriangleAlert
					},
					{
						label: "Upcoming (7d)",
						value: counts.upcoming,
						color: "blue",
						icon: Calendar
					},
					{
						label: "Completed This Week",
						value: counts.completed + 126,
						color: "emerald",
						icon: CircleCheck
					}
				].map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flex items-center gap-3 rounded-2xl border p-4", stat.color === "amber" && "border-amber-200 bg-amber-50", stat.color === "rose" && "border-rose-200 bg-rose-50", stat.color === "blue" && "border-blue-200 bg-blue-50", stat.color === "emerald" && "border-emerald-200 bg-emerald-50"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("grid h-10 w-10 shrink-0 place-items-center rounded-xl", stat.color === "amber" && "bg-amber-100 text-amber-600", stat.color === "rose" && "bg-rose-100 text-rose-600", stat.color === "blue" && "bg-blue-100 text-blue-600", stat.color === "emerald" && "bg-emerald-100 text-emerald-600"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stat.icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-black",
						children: stat.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium text-muted-foreground",
						children: stat.label
					})] })]
				}, stat.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5",
				children: [
					"all",
					"overdue",
					"today",
					"upcoming",
					"completed"
				].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setFilter(f),
					className: cn("rounded-full px-3.5 py-1.5 text-xs font-semibold capitalize transition-colors", filter === f ? "bg-emerald-600 text-white" : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"),
					children: f === "all" ? "All Tasks" : f
				}, f))
			}),
			grouped.map((group) => {
				const cfg = statusConfig[group.status];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(cfg.icon, { className: cn("h-4 w-4", cfg.iconColor) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: cn("text-sm font-bold", cfg.color),
							children: cfg.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold",
							children: group.tasks.length
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: group.tasks.map((task) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaskRow, { task }, task.id))
				})] }, group.status);
			})
		]
	});
}
function ChartCard({ title, subtitle, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-2xl border border-border bg-card p-5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-bold",
				children: title
			}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: subtitle
			})]
		}), children]
	});
}
function SalesAnalytics({ onAction }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-black tracking-tight sm:text-3xl",
					children: "Sales Analytics"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Every number you need to steer revenue — updated live"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => onAction?.("Export PDF"),
					className: "flex items-center gap-1.5 self-start rounded-xl border border-border bg-white px-4 py-2 text-sm font-semibold transition-colors hover:bg-accent hover:text-emerald-700",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Export Report"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
					title: "Revenue Trend",
					subtitle: "12-month actual vs target",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-72",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
								data: revenueVsTarget,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "aRevGrad",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0%",
											stopColor: "#10b981",
											stopOpacity: .3
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "100%",
											stopColor: "#10b981",
											stopOpacity: 0
										})]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "#f0f0f0"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "month",
										tick: { fontSize: 11 }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										tick: { fontSize: 11 },
										tickFormatter: (v) => `₹${v}L`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { formatter: (v) => [`₹${v}L`, ""] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										type: "monotone",
										dataKey: "target",
										stroke: "#94a3b8",
										strokeDasharray: "4 4",
										fill: "none",
										strokeWidth: 2,
										name: "Target"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										type: "monotone",
										dataKey: "revenue",
										stroke: "#10b981",
										fill: "url(#aRevGrad)",
										strokeWidth: 2.5,
										name: "Revenue"
									})
								]
							})
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
					title: "Conversion Funnel",
					subtitle: "1,240 leads → 78 won (6.3%)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2.5",
						children: conversionFunnel.map((item, i) => {
							const maxVal = conversionFunnel[0]?.value || 1;
							const pct = item.value / maxVal * 100;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-20 text-right text-xs font-medium text-muted-foreground",
										children: item.stage
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-8 overflow-hidden rounded-lg bg-muted/40",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-full items-center rounded-lg px-3 text-xs font-bold text-white transition-all duration-700",
												style: {
													width: `${pct}%`,
													backgroundColor: item.color
												},
												children: item.value.toLocaleString()
											})
										})
									}),
									i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "w-10 text-right text-[10px] text-muted-foreground",
										children: [(item.value / (conversionFunnel[i - 1]?.value || 1) * 100).toFixed(0), "%"]
									})
								]
							}, item.stage);
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
					title: "Lead Source Analysis",
					subtitle: "Leads vs won by channel",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-72",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: leadSourceData,
								layout: "vertical",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "#f0f0f0"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										type: "number",
										tick: { fontSize: 11 }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										dataKey: "source",
										type: "category",
										tick: { fontSize: 10 },
										width: 75
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "leads",
										fill: "#6366f1",
										radius: [
											0,
											4,
											4,
											0
										],
										barSize: 10,
										name: "Leads"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "won",
										fill: "#10b981",
										radius: [
											0,
											4,
											4,
											0
										],
										barSize: 10,
										name: "Won"
									})
								]
							})
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ChartCard, {
					title: "Lead Category Analysis",
					subtitle: "Volume share by business category",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-72",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
								data: categoryMix,
								cx: "50%",
								cy: "50%",
								innerRadius: 60,
								outerRadius: 90,
								paddingAngle: 3,
								dataKey: "value",
								children: categoryMix.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: entry.color }, entry.name))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { formatter: (v) => [`${v}%`, ""] })] })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1",
						children: categoryMix.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 text-[10px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block h-2 w-2 rounded-full",
									style: { backgroundColor: c.color }
								}),
								c.name,
								" (",
								c.value,
								"%)"
							]
						}, c.name))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
					title: "Salesperson Performance",
					subtitle: "Revenue vs target achievement",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-72",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: salespersonPerformance,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "#f0f0f0"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "name",
										tick: { fontSize: 10 }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										tick: { fontSize: 11 },
										tickFormatter: (v) => `₹${v}L`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { formatter: (v) => [`₹${v}L`, ""] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "revenue",
										fill: "#10b981",
										radius: [
											4,
											4,
											0,
											0
										],
										barSize: 16,
										name: "Revenue"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "target",
										fill: "#94a3b8",
										radius: [
											4,
											4,
											0,
											0
										],
										barSize: 16,
										name: "Target"
									})
								]
							})
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
					title: "Quarterly Growth",
					subtitle: "Revenue by quarter with growth %",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-72",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: quarterlyGrowth,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "#f0f0f0"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "quarter",
										tick: { fontSize: 10 }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										tick: { fontSize: 11 },
										tickFormatter: (v) => `₹${v}L`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { formatter: (v, name) => [name === "revenue" ? `₹${v}L` : `${v}%`, name === "revenue" ? "Revenue" : "Growth"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "revenue",
										fill: "#6366f1",
										radius: [
											6,
											6,
											0,
											0
										],
										barSize: 32,
										name: "Revenue",
										children: quarterlyGrowth.map((entry, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: entry.growth >= 0 ? "#6366f1" : "#ef4444" }, i))
									})
								]
							})
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
						title: "Revenue Forecast",
						subtitle: "AI projected vs actual, next 6 months",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-64",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
									data: revenueForecast,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											strokeDasharray: "3 3",
											stroke: "#f0f0f0"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "month",
											tick: { fontSize: 11 }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											tick: { fontSize: 11 },
											tickFormatter: (v) => `₹${v}L`
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { formatter: (v) => [`₹${v}L`, ""] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											type: "monotone",
											dataKey: "forecast",
											stroke: "#8b5cf6",
											strokeWidth: 2.5,
											strokeDasharray: "6 3",
											dot: { r: 4 },
											name: "Forecast"
										})
									]
								})
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
						title: "Average Deal Size",
						subtitle: "Trending upward 5.7% MoM",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-64",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
									data: avgDealSizeTrend,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											strokeDasharray: "3 3",
											stroke: "#f0f0f0"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "month",
											tick: { fontSize: 11 }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											tick: { fontSize: 11 },
											tickFormatter: (v) => `₹${v}L`,
											domain: [1.4, 2]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { formatter: (v) => [`₹${v}L`, "Deal Size"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											type: "monotone",
											dataKey: "size",
											stroke: "#10b981",
											strokeWidth: 2.5,
											dot: {
												r: 4,
												fill: "#10b981"
											}
										})
									]
								})
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
						title: "Lost Reason Analysis",
						subtitle: "104 deals lost in last 90 days",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2.5",
							children: lostReasons.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium",
									children: r.reason
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-muted-foreground",
									children: [
										r.count,
										" (",
										r.pct,
										"%)"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 h-2 overflow-hidden rounded-full bg-muted/50",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full bg-rose-400 transition-all duration-700",
									style: { width: `${r.pct}%` }
								})
							})] }, r.reason))
						})
					})
				]
			})
		]
	});
}
function MemberCard({ member }) {
	const pct = Math.round(member.achieved / member.target * 100);
	const isTop = pct >= 100;
	const isLow = pct < 60;
	const metrics = [
		{
			label: "Assigned",
			value: member.assigned
		},
		{
			label: "Contacted",
			value: member.contacted
		},
		{
			label: "Meetings",
			value: member.meetings
		},
		{
			label: "Demos",
			value: member.demos
		},
		{
			label: "Proposals",
			value: member.proposals
		},
		{
			label: "Won / Lost",
			value: `${member.won} / ${member.lost}`
		},
		{
			label: "Collection",
			value: formatCurrency$1(member.collection)
		},
		{
			label: "Conversion",
			value: `${member.conversionRate}%`
		},
		{
			label: "Follow-up done",
			value: `${member.followUpDone}%`
		},
		{
			label: "Avg response",
			value: `${member.avgResponse} min`
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-2xl border bg-card p-5 transition-shadow hover:shadow-lg", isTop ? "border-emerald-200" : isLow ? "border-rose-200" : "border-border"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-black", isTop ? "bg-emerald-100 text-emerald-700" : isLow ? "bg-rose-100 text-rose-700" : "bg-blue-100 text-blue-700"),
						children: member.avatar
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold",
							children: member.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] text-muted-foreground",
							children: [
								member.role,
								" · ",
								member.region
							]
						})]
					}),
					isTop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-5 w-5 text-amber-500" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: "Target achievement"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: cn("text-lg font-black", isTop ? "text-emerald-600" : isLow ? "text-rose-600" : "text-foreground"),
							children: [pct, "%"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 h-2.5 overflow-hidden rounded-full bg-muted/50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("h-full rounded-full transition-all duration-700", isTop ? "bg-emerald-500" : isLow ? "bg-rose-500" : "bg-blue-500"),
							style: { width: `${Math.min(pct, 100)}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex justify-between text-[10px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatCurrency$1(member.achieved) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["of ", formatCurrency$1(member.target)] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5",
				children: metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] text-muted-foreground",
						children: m.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold",
						children: m.value
					})]
				}, m.label))
			})
		]
	});
}
function SalesTeamPerformance({ onAction }) {
	const sorted = [...teamMembers].sort((a, b) => b.achieved / b.target - a.achieved / a.target);
	const top = sorted[0];
	const bottom = sorted[sorted.length - 1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-black tracking-tight sm:text-3xl",
					children: "Employee Performance"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Leaderboard, scorecards and follow-up discipline across the sales org"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => onAction?.("Export Excel"),
					className: "flex items-center gap-1.5 self-start rounded-xl border border-border bg-white px-4 py-2 text-sm font-semibold transition-colors hover:bg-accent hover:text-emerald-700",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Export Report"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [top && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-white p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-emerald-100",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-6 w-6 text-emerald-600" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-wider text-emerald-600",
							children: "Top Performer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-black",
							children: top.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								Math.round(top.achieved / top.target * 100),
								"% of target · ",
								formatCurrency$1(top.achieved)
							]
						})
					] })]
				}), bottom && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 rounded-2xl border border-rose-200 bg-gradient-to-r from-rose-50 to-white p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-rose-100",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { className: "h-6 w-6 text-rose-600" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-wider text-rose-600",
							children: "Needs Support"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-black",
							children: bottom.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								Math.round(bottom.achieved / bottom.target * 100),
								"% of target · ",
								formatCurrency$1(bottom.achieved)
							]
						})
					] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-4 text-lg font-bold",
				children: "Leaderboard"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
				children: sorted.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberCard, { member }, member.name))
			})] })
		]
	});
}
var reportTypes = [
	{
		id: "revenue",
		title: "Revenue & Forecast",
		description: "Detailed breakdown of closed won deals and pipeline forecast.",
		icon: IndianRupee,
		color: "emerald"
	},
	{
		id: "performance",
		title: "Team Performance",
		description: "Individual metrics, conversion rates, and activity logs.",
		icon: Users,
		color: "blue"
	},
	{
		id: "leads",
		title: "Lead Generation",
		description: "Source analysis, category mix, and drop-off rates.",
		icon: TrendingUp,
		color: "violet"
	},
	{
		id: "activity",
		title: "Activity & Tasks",
		description: "Follow-ups completed, overdue tasks, and response times.",
		icon: Calendar,
		color: "amber"
	}
];
function SalesReports({ onAction }) {
	const [selectedReport, setSelectedReport] = (0, import_react.useState)(reportTypes[0]?.id || "");
	const [dateRange, setDateRange] = (0, import_react.useState)("This Month");
	const [format, setFormat] = (0, import_react.useState)("PDF");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-black tracking-tight sm:text-3xl",
			children: "Reports & Exports"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Generate and download detailed sales analytics reports"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[1fr_360px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold",
						children: "Select Report Type"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: reportTypes.map((report) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							onClick: () => setSelectedReport(report.id),
							className: cn("cursor-pointer rounded-2xl border p-4 transition-all hover:shadow-md", selectedReport === report.id ? "border-emerald-500 bg-emerald-50/30 ring-1 ring-emerald-500" : "border-border bg-card hover:border-emerald-300"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("mb-3 grid h-10 w-10 place-items-center rounded-xl", report.color === "emerald" && "bg-emerald-100 text-emerald-600", report.color === "blue" && "bg-blue-100 text-blue-600", report.color === "violet" && "bg-violet-100 text-violet-600", report.color === "amber" && "bg-amber-100 text-amber-600"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(report.icon, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold",
									children: report.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground leading-relaxed",
									children: report.description
								})
							]
						}, report.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-2xl border border-border bg-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mb-4 text-sm font-bold flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartPie, { className: "h-4 w-4 text-emerald-600" }), " Recent Reports"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: [
								{
									name: "Q3 Performance Review.pdf",
									date: "Oct 12, 2023",
									size: "2.4 MB"
								},
								{
									name: "September Revenue.csv",
									date: "Oct 1, 2023",
									size: "840 KB"
								},
								{
									name: "Lost Deals Analysis.pdf",
									date: "Sep 28, 2023",
									size: "1.1 MB"
								}
							].map((file, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-xl border border-border p-3 transition-colors hover:bg-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-8 w-8 place-items-center rounded-lg bg-muted text-muted-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold",
										children: file.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] text-muted-foreground",
										children: [
											file.date,
											" · ",
											file.size
										]
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => onAction?.(`Export ${file.name.endsWith(".csv") ? "Excel" : "PDF"}`),
									className: "text-emerald-600 hover:text-emerald-700",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" })
								})]
							}, i))
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-6 h-fit sticky top-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold",
						children: "Configuration"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-6 mt-1 text-xs text-muted-foreground",
						children: "Customize your report output"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-xs font-bold uppercase text-muted-foreground",
								children: "Date Range"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-2",
								children: [
									"Today",
									"This Week",
									"This Month",
									"Last Month",
									"This Quarter",
									"Custom"
								].map((range) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setDateRange(range),
									className: cn("rounded-lg border px-3 py-2 text-xs font-semibold transition-colors", dateRange === range ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-border bg-transparent text-muted-foreground hover:bg-accent"),
									children: range
								}, range))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-xs font-bold uppercase text-muted-foreground",
								children: "Apply Filters"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => toast("Filter options opened"),
								className: "flex w-full items-center justify-between rounded-lg border border-border bg-background px-3 py-2 text-sm text-muted-foreground hover:bg-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-4 w-4" }), " All Users & Teams"]
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-xs font-bold uppercase text-muted-foreground",
								children: "Export Format"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								children: [
									"PDF",
									"CSV",
									"Excel"
								].map((fmt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setFormat(fmt),
									className: cn("flex-1 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors", format === fmt ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-border bg-transparent text-muted-foreground hover:bg-accent"),
									children: fmt
								}, fmt))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => onAction?.(`Export ${format === "CSV" ? "Excel" : format}`),
									className: "flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }),
										" Generate ",
										format,
										" Report"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-center text-[10px] text-muted-foreground",
									children: "Report will be generated based on current real-time data."
								})]
							})
						]
					})
				]
			})]
		})]
	});
}
var TABS$1 = [
	"Pipeline Stages",
	"Lead Categories",
	"Lead Sources",
	"Assignment",
	"Notifications",
	"Permissions",
	"Audit Log"
];
var INITIAL_LEAD_CATEGORIES = [
	{
		name: "Jewellery",
		icon: Gem,
		color: "bg-amber-500",
		iconName: "Gem"
	},
	{
		name: "Restaurants",
		icon: UtensilsCrossed,
		color: "bg-orange-500",
		iconName: "UtensilsCrossed"
	},
	{
		name: "Real Estate",
		icon: Building2,
		color: "bg-emerald-600",
		iconName: "Building2"
	},
	{
		name: "Doctors",
		icon: Stethoscope,
		color: "bg-blue-500",
		iconName: "Stethoscope"
	},
	{
		name: "Education",
		icon: GraduationCap,
		color: "bg-indigo-500",
		iconName: "GraduationCap"
	},
	{
		name: "Hospital",
		icon: HeartPulse,
		color: "bg-rose-500",
		iconName: "HeartPulse"
	},
	{
		name: "Manufacturing",
		icon: Factory,
		color: "bg-slate-500",
		iconName: "Factory"
	},
	{
		name: "Textile",
		icon: Shirt,
		color: "bg-orange-600",
		iconName: "Shirt"
	},
	{
		name: "Finance",
		icon: Landmark,
		color: "bg-teal-600",
		iconName: "Landmark"
	},
	{
		name: "Automobile",
		icon: Car,
		color: "bg-slate-800",
		iconName: "Car"
	},
	{
		name: "Travel",
		icon: Plane,
		color: "bg-sky-500",
		iconName: "Plane"
	},
	{
		name: "IT Company",
		icon: Cpu,
		color: "bg-indigo-600",
		iconName: "Cpu"
	},
	{
		name: "Salon",
		icon: Scissors,
		color: "bg-pink-500",
		iconName: "Scissors"
	},
	{
		name: "Gym",
		icon: Dumbbell,
		color: "bg-green-600",
		iconName: "Dumbbell"
	},
	{
		name: "Construction",
		icon: HardHat,
		color: "bg-yellow-700",
		iconName: "HardHat"
	},
	{
		name: "Others",
		icon: Shapes,
		color: "bg-slate-400",
		iconName: "Shapes"
	}
];
var INITIAL_LEAD_SOURCES = [
	"Meta Ads",
	"Google Ads",
	"Instagram",
	"Facebook",
	"WhatsApp",
	"Website",
	"Reference",
	"Cold Calling",
	"LinkedIn",
	"Walk-in",
	"Exhibition",
	"BNI",
	"PBN",
	"Organic",
	"Others"
];
var AVAILABLE_ICONS = [
	{
		name: "Gem",
		icon: Gem
	},
	{
		name: "Utensils",
		icon: UtensilsCrossed
	},
	{
		name: "Building",
		icon: Building2
	},
	{
		name: "Stethoscope",
		icon: Stethoscope
	},
	{
		name: "Education",
		icon: GraduationCap
	},
	{
		name: "Heart",
		icon: HeartPulse
	},
	{
		name: "Factory",
		icon: Factory
	},
	{
		name: "Shirt",
		icon: Shirt
	},
	{
		name: "Landmark",
		icon: Landmark
	},
	{
		name: "Car",
		icon: Car
	},
	{
		name: "Plane",
		icon: Plane
	},
	{
		name: "Cpu",
		icon: Cpu
	},
	{
		name: "Scissors",
		icon: Scissors
	},
	{
		name: "Dumbbell",
		icon: Dumbbell
	},
	{
		name: "HardHat",
		icon: HardHat
	},
	{
		name: "Shapes",
		icon: Shapes
	}
];
var COLORS = [
	"bg-amber-500",
	"bg-orange-500",
	"bg-emerald-600",
	"bg-blue-500",
	"bg-indigo-500",
	"bg-rose-500",
	"bg-slate-500",
	"bg-teal-600",
	"bg-sky-500",
	"bg-pink-500",
	"bg-green-600",
	"bg-yellow-700"
];
var ASSIGNMENT_RULES = [
	{
		name: "Auto Assignment",
		active: true
	},
	{
		name: "Round Robin",
		active: true
	},
	{
		name: "Manual Assignment",
		active: false
	},
	{
		name: "Department Wise",
		active: false
	},
	{
		name: "Region Wise",
		active: false
	},
	{
		name: "Business Category Wise",
		active: false
	}
];
var ELIGIBLE_OWNERS = [
	"Het Kansara · CEO",
	"Riya Mehta · Sales Head",
	"Aarav Shah · Sales Executive",
	"Neha Verma · Sales Executive",
	"Karan Patel · Sales Executive",
	"Simran Kaur · Sales Executive",
	"Devansh Rao · Admin"
];
var NOTIFICATIONS = [
	{
		title: "New Lead Assigned",
		subtitle: "Skyline Realtors assigned to Riya Mehta",
		active: true
	},
	{
		title: "Follow-up Reminder",
		subtitle: "42 follow-ups are due today",
		active: true
	},
	{
		title: "Meeting Reminder",
		subtitle: "Demo with CloudNova Labs at 3:30 PM",
		active: true
	},
	{
		title: "Target Achieved",
		subtitle: "Aarav Shah crossed 115% of monthly target",
		active: true
	},
	{
		title: "Lead Converted",
		subtitle: "Zenith Diamonds moved to Won — ₹6,20,000",
		active: true
	},
	{
		title: "Payment Received",
		subtitle: "₹2,40,000 received from Precision Industries",
		active: true
	},
	{
		title: "Proposal Approved",
		subtitle: "Urban Tandoor approved quotation QT-4398",
		active: true
	}
];
var INITIAL_PERMISSIONS = [
	{
		role: "CEO",
		perms: [
			"View all leads",
			"Edit all",
			"Delete leads",
			"Manage targets",
			"Manage users",
			"View audit log"
		]
	},
	{
		role: "Admin",
		perms: [
			"View all leads",
			"Edit all",
			"Delete leads",
			"Manage settings",
			"View audit log"
		]
	},
	{
		role: "Sales Head",
		perms: [
			"View team leads",
			"Assign leads",
			"Approve proposals",
			"Bulk edit"
		]
	},
	{
		role: "Sales Executive",
		perms: [
			"View own leads",
			"Add lead",
			"Log follow-up",
			"Create quotation"
		]
	}
];
var AVAILABLE_PERMISSIONS = [
	"View all leads",
	"View team leads",
	"View own leads",
	"Add lead",
	"Edit all",
	"Bulk edit",
	"Delete leads",
	"Assign leads",
	"Manage targets",
	"Manage users",
	"Manage settings",
	"View audit log",
	"Approve proposals",
	"Log follow-up",
	"Create quotation"
];
var AUDIT_LOG = [
	{
		action: "Moved Skyline Realtors to Negotiation",
		by: "by Riya Mehta",
		time: "Today 11:42"
	},
	{
		action: "Deleted duplicate lead LD-1043",
		by: "by Het Kansara",
		time: "Today 10:07"
	},
	{
		action: "Created quotation QT-4412 (₹4,50,000)",
		by: "by Aarav Shah",
		time: "Yesterday 18:20"
	},
	{
		action: "Round-robin assigned 12 new Meta Ads leads",
		by: "by System",
		time: "Yesterday 09:00"
	},
	{
		action: "Updated budget for BrightMind Academy",
		by: "by Neha Verma",
		time: "28 Jul 16:11"
	}
];
function ToggleSwitch({ active }) {
	const [isOn, setIsOn] = (0, import_react.useState)(active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => setIsOn(!isOn),
		className: cn("relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none", isOn ? "bg-emerald-500" : "bg-muted"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", isOn ? "translate-x-5" : "translate-x-0") })
	});
}
function SalesSettings() {
	const { stages, setStages } = useSales();
	const [activeTab, setActiveTab] = (0, import_react.useState)("Lead Categories");
	const [categories, setCategories] = (0, import_react.useState)(INITIAL_LEAD_CATEGORIES);
	const [sources, setSources] = (0, import_react.useState)(INITIAL_LEAD_SOURCES);
	const [permissions, setPermissions] = (0, import_react.useState)(INITIAL_PERMISSIONS);
	const [newCategoryName, setNewCategoryName] = (0, import_react.useState)("");
	const [newSourceName, setNewSourceName] = (0, import_react.useState)("");
	const [newStageName, setNewStageName] = (0, import_react.useState)("");
	const [newCategoryIconIdx, setNewCategoryIconIdx] = (0, import_react.useState)(0);
	const [isIconPickerOpen, setIsIconPickerOpen] = (0, import_react.useState)(false);
	const [deleteConfirm, setDeleteConfirm] = (0, import_react.useState)({
		isOpen: false,
		type: null,
		index: -1,
		name: ""
	});
	const [editRoleIdx, setEditRoleIdx] = (0, import_react.useState)(null);
	const [tempPerms, setTempPerms] = (0, import_react.useState)([]);
	const [editingCategoryIdx, setEditingCategoryIdx] = (0, import_react.useState)(null);
	const [editCategoryName, setEditCategoryName] = (0, import_react.useState)("");
	const [editCategoryIconIdx, setEditCategoryIconIdx] = (0, import_react.useState)(0);
	const [isEditIconPickerOpen, setIsEditIconPickerOpen] = (0, import_react.useState)(false);
	const [editingSourceIdx, setEditingSourceIdx] = (0, import_react.useState)(null);
	const [editSourceName, setEditSourceName] = (0, import_react.useState)("");
	const [editingStageIdx, setEditingStageIdx] = (0, import_react.useState)(null);
	const [editStageName, setEditStageName] = (0, import_react.useState)("");
	const handleEditPermissions = (idx) => {
		const rolePerms = permissions[idx]?.perms;
		if (rolePerms) {
			setTempPerms([...rolePerms]);
			setEditRoleIdx(idx);
		}
	};
	const handleSavePermissions = () => {
		if (editRoleIdx !== null && permissions[editRoleIdx]) {
			const updated = [...permissions];
			const role = updated[editRoleIdx];
			if (role) {
				role.perms = [...tempPerms];
				setPermissions(updated);
				toast.success(`${role.role} permissions updated`);
			}
		}
		setEditRoleIdx(null);
	};
	const handleTogglePerm = (p) => {
		setTempPerms((prev) => prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]);
	};
	const handleAddCategory = () => {
		if (!newCategoryName.trim()) {
			toast.error("Please enter a category name first");
			return;
		}
		const selectedIcon = AVAILABLE_ICONS[newCategoryIconIdx];
		if (!selectedIcon) return;
		const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)] || "bg-slate-500";
		setCategories([{
			name: newCategoryName,
			icon: selectedIcon.icon,
			color: randomColor,
			iconName: selectedIcon.name
		}, ...categories]);
		setNewCategoryName("");
		setNewCategoryIconIdx(0);
		toast.success("Category added successfully");
	};
	const confirmDeleteCategory = (idx, name) => {
		setDeleteConfirm({
			isOpen: true,
			type: "category",
			index: idx,
			name
		});
	};
	const handleAddSource = () => {
		if (!newSourceName.trim()) {
			toast.error("Please enter a lead source name first");
			return;
		}
		setSources([newSourceName, ...sources]);
		setNewSourceName("");
		toast.success("Lead source added");
	};
	const confirmDeleteSource = (idx, name) => {
		setDeleteConfirm({
			isOpen: true,
			type: "source",
			index: idx,
			name
		});
	};
	const handleAddStage = () => {
		if (!newStageName.trim()) {
			toast.error("Please enter a stage name first");
			return;
		}
		setStages([...stages, newStageName]);
		setNewStageName("");
		toast.success("Pipeline stage added");
	};
	const confirmDeleteStage = (idx, name) => {
		setDeleteConfirm({
			isOpen: true,
			type: "stage",
			index: idx,
			name
		});
	};
	const executeDelete = () => {
		if (deleteConfirm.type === "category") {
			setCategories(categories.filter((_, i) => i !== deleteConfirm.index));
			toast.success(`${deleteConfirm.name} deleted successfully`);
		} else if (deleteConfirm.type === "source") {
			setSources(sources.filter((_, i) => i !== deleteConfirm.index));
			toast.success(`Lead source deleted`);
		} else if (deleteConfirm.type === "stage") {
			setStages(stages.filter((_, i) => i !== deleteConfirm.index));
			toast.success(`Pipeline stage deleted`);
		}
		setDeleteConfirm({
			isOpen: false,
			type: null,
			index: -1,
			name: ""
		});
	};
	const startEditCategory = (idx) => {
		const cat = categories[idx];
		if (!cat) return;
		setEditingCategoryIdx(idx);
		setEditCategoryName(cat.name);
		const iconIdx = AVAILABLE_ICONS.findIndex((i) => i.name === cat.iconName);
		setEditCategoryIconIdx(iconIdx !== -1 ? iconIdx : 0);
	};
	const saveEditCategory = () => {
		if (editingCategoryIdx === null) return;
		if (!editCategoryName.trim()) {
			toast.error("Name cannot be empty");
			return;
		}
		const updated = [...categories];
		const iconObj = AVAILABLE_ICONS[editCategoryIconIdx];
		if (!iconObj || !updated[editingCategoryIdx]) return;
		updated[editingCategoryIdx] = {
			...updated[editingCategoryIdx],
			name: editCategoryName,
			iconName: iconObj.name,
			icon: iconObj.icon
		};
		setCategories(updated);
		setEditingCategoryIdx(null);
		toast.success("Category updated");
	};
	const startEditSource = (idx) => {
		const src = sources[idx];
		if (!src) return;
		setEditingSourceIdx(idx);
		setEditSourceName(src);
	};
	const saveEditSource = () => {
		if (editingSourceIdx === null) return;
		if (!editSourceName.trim()) {
			toast.error("Name cannot be empty");
			return;
		}
		const updated = [...sources];
		updated[editingSourceIdx] = editSourceName;
		setSources(updated);
		setEditingSourceIdx(null);
		toast.success("Lead source updated");
	};
	const startEditStage = (idx) => {
		const stage = stages[idx];
		if (!stage) return;
		setEditingStageIdx(idx);
		setEditStageName(stage);
	};
	const saveEditStage = () => {
		if (editingStageIdx === null) return;
		if (!editStageName.trim()) {
			toast.error("Name cannot be empty");
			return;
		}
		const updated = [...stages];
		updated[editingStageIdx] = editStageName;
		setStages(updated);
		setEditingStageIdx(null);
		toast.success("Pipeline stage updated");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-black tracking-tight",
					children: "CRM Settings"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700",
					children: "Live"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Categories, sources, assignment rules, permissions and audit trail"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap items-center gap-1.5 rounded-full bg-muted/40 p-1 w-fit",
				children: TABS$1.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActiveTab(tab),
					className: cn("rounded-full px-4 py-2 text-sm font-medium transition-colors", activeTab === tab ? "bg-white text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted"),
					children: tab
				}, tab))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-emerald-100/50 bg-emerald-50/10 p-6 md:p-8",
				children: [
					activeTab === "Pipeline Stages" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-in fade-in slide-in-from-bottom-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8 flex flex-col sm:flex-row items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "New pipeline stage",
								value: newStageName,
								onChange: (e) => setNewStageName(e.target.value),
								onKeyDown: (e) => e.key === "Enter" && handleAddStage(),
								className: "w-full sm:w-80 rounded-full border border-border bg-white px-5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500/30"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleAddStage,
								className: "flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add Stage"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-2 w-full max-w-sm",
							children: stages.map((stage, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-between rounded-xl border border-border bg-white px-4 py-3 shadow-sm transition-colors hover:bg-muted/30",
								children: editingStageIdx === i ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 w-full",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: editStageName,
											onChange: (e) => setEditStageName(e.target.value),
											onKeyDown: (e) => e.key === "Enter" && saveEditStage(),
											className: "flex-1 rounded-md border border-border px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-emerald-500/30",
											autoFocus: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: saveEditStage,
											className: "text-emerald-600 hover:text-emerald-700",
											title: "Save",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setEditingStageIdx(null),
											className: "text-muted-foreground hover:text-foreground",
											title: "Cancel",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm font-bold text-emerald-800",
									children: [
										i + 1,
										". ",
										stage
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => startEditStage(i),
										className: "text-muted-foreground hover:text-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => confirmDeleteStage(i, stage),
										className: "text-rose-400 hover:text-rose-600",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
									})]
								})] })
							}, i))
						})]
					}),
					activeTab === "Lead Categories" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-in fade-in slide-in-from-bottom-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8 flex flex-col sm:flex-row items-center gap-4 relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-center gap-2 w-full sm:w-auto",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setIsIconPickerOpen(!isIconPickerOpen),
										className: "flex shrink-0 items-center justify-center h-11 w-11 rounded-full border border-border bg-white hover:bg-muted transition-colors shadow-sm",
										title: "Choose Icon",
										children: (() => {
											const IconComp = AVAILABLE_ICONS[newCategoryIconIdx]?.icon;
											return IconComp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComp, { className: "h-5 w-5 text-emerald-600" }) : null;
										})()
									}),
									isIconPickerOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-14 left-0 z-20 w-64 rounded-2xl border border-border bg-white p-3 shadow-xl grid grid-cols-4 gap-2 animate-in fade-in zoom-in-95",
										children: AVAILABLE_ICONS.map((iconObj, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												setNewCategoryIconIdx(idx);
												setIsIconPickerOpen(false);
											},
											className: cn("flex h-10 w-10 items-center justify-center rounded-xl transition-colors", idx === newCategoryIconIdx ? "bg-emerald-100 text-emerald-700" : "text-muted-foreground hover:bg-emerald-50 hover:text-emerald-600"),
											title: iconObj.name,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(iconObj.icon, { className: "h-5 w-5" })
										}, idx))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										placeholder: "New category name",
										value: newCategoryName,
										onChange: (e) => setNewCategoryName(e.target.value),
										onKeyDown: (e) => e.key === "Enter" && handleAddCategory(),
										className: "w-full sm:w-80 rounded-full border border-border bg-white px-5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500/30"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleAddCategory,
								className: "flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add Category"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
							children: categories.map((cat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-between rounded-2xl border border-border bg-white p-4 transition-shadow hover:shadow-sm",
								children: editingCategoryIdx === i ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2 w-full relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setIsEditIconPickerOpen(!isEditIconPickerOpen),
												className: cn("flex shrink-0 items-center justify-center h-10 w-10 rounded-full text-white", cat.color),
												title: "Choose Icon",
												children: (() => {
													const IconComp = AVAILABLE_ICONS[editCategoryIconIdx]?.icon;
													return IconComp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComp, { className: "h-5 w-5" }) : null;
												})()
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: editCategoryName,
												onChange: (e) => setEditCategoryName(e.target.value),
												onKeyDown: (e) => e.key === "Enter" && saveEditCategory(),
												className: "flex-1 rounded-md border border-border px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-emerald-500/30",
												autoFocus: true
											})]
										}),
										isEditIconPickerOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute top-12 left-0 z-20 w-64 rounded-2xl border border-border bg-white p-3 shadow-xl grid grid-cols-4 gap-2 animate-in fade-in zoom-in-95",
											children: AVAILABLE_ICONS.map((iconObj, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => {
													setEditCategoryIconIdx(idx);
													setIsEditIconPickerOpen(false);
												},
												className: cn("flex h-10 w-10 items-center justify-center rounded-xl transition-colors", idx === editCategoryIconIdx ? "bg-emerald-100 text-emerald-700" : "text-muted-foreground hover:bg-emerald-50 hover:text-emerald-600"),
												title: iconObj.name,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(iconObj.icon, { className: "h-5 w-5" })
											}, idx))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-end gap-2 mt-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: saveEditCategory,
												className: "text-emerald-600 hover:text-emerald-700 font-medium text-sm",
												children: "Save"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => {
													setEditingCategoryIdx(null);
													setIsEditIconPickerOpen(false);
												},
												className: "text-muted-foreground hover:text-foreground font-medium text-sm",
												children: "Cancel"
											})]
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: cn("grid h-10 w-10 shrink-0 place-items-center rounded-full text-white", cat.color),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(cat.icon, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-sm",
										children: cat.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] text-muted-foreground",
										children: ["Icon: ", cat.iconName]
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => startEditCategory(i),
										className: "hover:text-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => confirmDeleteCategory(i, cat.name),
										className: "hover:text-rose-600",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
									})]
								})] })
							}, i))
						})]
					}),
					activeTab === "Lead Sources" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-in fade-in slide-in-from-bottom-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8 flex flex-col sm:flex-row items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "New lead source",
								value: newSourceName,
								onChange: (e) => setNewSourceName(e.target.value),
								onKeyDown: (e) => e.key === "Enter" && handleAddSource(),
								className: "w-full sm:w-80 rounded-full border border-border bg-white px-5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500/30"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleAddSource,
								className: "flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add Source"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-3",
							children: sources.map((source, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50",
								children: editingSourceIdx === i ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: editSourceName,
											onChange: (e) => setEditSourceName(e.target.value),
											onKeyDown: (e) => e.key === "Enter" && saveEditSource(),
											className: "w-24 rounded-md border border-border px-2 py-1 text-xs outline-none focus:ring-2 focus:ring-emerald-500/30 bg-transparent",
											autoFocus: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: saveEditSource,
											className: "text-emerald-600 hover:text-emerald-700",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setEditingSourceIdx(null),
											className: "text-muted-foreground hover:text-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									source,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => startEditSource(i),
										className: "ml-1 text-muted-foreground hover:text-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => confirmDeleteSource(i, source),
										className: "text-rose-400 hover:text-rose-600",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
									})
								] })
							}, i))
						})]
					}),
					activeTab === "Assignment" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-in fade-in slide-in-from-bottom-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mb-6 flex items-center gap-2 text-lg font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { className: "h-5 w-5 text-emerald-600" }), " Lead Assignment Rules"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: ASSIGNMENT_RULES.map((rule, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between rounded-xl border border-border bg-white p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-sm",
										children: rule.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleSwitch, { active: rule.active })]
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mb-3 text-sm font-bold",
									children: "Eligible owners"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: ELIGIBLE_OWNERS.map((owner, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-emerald-100 bg-emerald-50/50 px-3 py-1 text-xs font-semibold",
										children: owner
									}, i))
								})]
							})
						]
					}),
					activeTab === "Notifications" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-in fade-in slide-in-from-bottom-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mb-6 flex items-center gap-2 text-lg font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-5 w-5 text-emerald-600" }), " Notification Triggers"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: NOTIFICATIONS.map((notif, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-xl border border-border bg-white p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-sm",
									children: notif.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-xs text-muted-foreground",
									children: notif.subtitle
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleSwitch, { active: notif.active })]
							}, i))
						})]
					}),
					activeTab === "Permissions" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-in fade-in slide-in-from-bottom-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "flex items-center gap-2 text-lg font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-5 w-5 text-emerald-600" }), " Role Permissions"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 mb-6 text-sm text-muted-foreground",
								children: "Only CEO and Admin can delete leads. Every action is written to the audit log."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 md:grid-cols-2",
								children: permissions.map((perm, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-white p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-bold",
											children: perm.role
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => handleEditPermissions(i),
											className: "flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" }), " Edit"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: perm.perms.map((p, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-muted/70 px-3 py-1.5 text-xs font-medium",
											children: p
										}, j))
									})]
								}, i))
							})
						]
					}),
					activeTab === "Audit Log" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-in fade-in slide-in-from-bottom-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mb-6 flex items-center gap-2 text-lg font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "h-5 w-5 text-emerald-600" }), " Audit Log"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: AUDIT_LOG.map((log, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border bg-white p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-sm",
									children: log.action
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-xs text-muted-foreground",
									children: log.by
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground sm:text-right",
									children: log.time
								})]
							}, i))
						})]
					})
				]
			}),
			deleteConfirm.isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm rounded-3xl bg-white p-6 shadow-xl animate-in zoom-in-95",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-xl font-black tracking-tight mb-2",
							children: ["Delete ", deleteConfirm.type === "category" ? "Category" : deleteConfirm.type === "source" ? "Source" : "Stage"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground mb-6",
							children: [
								"Are you sure you want to delete ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-bold text-foreground",
									children: [
										"\"",
										deleteConfirm.name,
										"\""
									]
								}),
								"? This action cannot be undone."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setDeleteConfirm({
									isOpen: false,
									type: null,
									index: -1,
									name: ""
								}),
								className: "flex-1 rounded-xl border border-border py-2.5 text-sm font-semibold hover:bg-accent transition-colors",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: executeDelete,
								className: "flex-1 rounded-xl bg-rose-600 py-2.5 text-sm font-semibold text-white hover:bg-rose-700 transition-colors",
								children: "Delete"
							})]
						})
					]
				})
			}),
			editRoleIdx !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl animate-in zoom-in-95 max-h-[90vh] flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-xl font-black tracking-tight mb-2",
							children: [
								"Edit ",
								permissions[editRoleIdx]?.role || "Role",
								" Permissions"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mb-6",
							children: "Select the capabilities this role should have access to."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-y-auto pr-2 mb-6 space-y-2 flex-1",
							children: AVAILABLE_PERMISSIONS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-3 rounded-xl border border-border p-3 cursor-pointer hover:bg-muted/50 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: tempPerms.includes(p),
									onChange: () => handleTogglePerm(p),
									className: "h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: p
								})]
							}, p))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3 pt-2 mt-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setEditRoleIdx(null),
								className: "flex-1 rounded-xl border border-border py-2.5 text-sm font-semibold hover:bg-accent transition-colors",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: handleSavePermissions,
								className: "flex-1 rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors",
								children: "Save Changes"
							})]
						})
					]
				})
			})
		]
	});
}
var formatCurrency = (amount) => {
	return new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 0
	}).format(amount);
};
var MOCK_EMPLOYEES = [
	{
		id: "1",
		empId: "HKD-001",
		name: "Ananya Sharma",
		designation: "Senior Software Engineer",
		department: "Engineering",
		joiningDate: "11 Mar 2024",
		type: "Full Time",
		effectiveDate: "01 Jul 2026",
		grossSalary: 81400,
		components: [],
		history: [{
			date: "01 Apr 2026",
			amount: 81400,
			reason: "Annual Appraisal",
			type: "Promotion",
			actionBy: "HR Admin"
		}, {
			date: "05 Jun 2022",
			amount: 65e3,
			reason: "Joined Company",
			type: "Initial",
			actionBy: "HR Admin"
		}],
		attendance: {
			workingDays: 26,
			present: 24,
			leave: 2,
			absent: 0,
			overtimeHrs: 6
		}
	},
	{
		id: "2",
		empId: "HKD-002",
		name: "Rahul Verma",
		designation: "Backend Developer",
		department: "Engineering",
		joiningDate: "12 Oct 2023",
		type: "Full Time",
		effectiveDate: "01 Jul 2026",
		grossSalary: 68e3,
		components: [],
		history: [{
			date: "01 Apr 2026",
			amount: 68e3,
			reason: "Annual Appraisal",
			type: "Promotion",
			actionBy: "HR Admin"
		}, {
			date: "12 Oct 2023",
			amount: 55e3,
			reason: "Joined Company",
			type: "Initial",
			actionBy: "HR Admin"
		}],
		attendance: {
			workingDays: 26,
			present: 26,
			leave: 0,
			absent: 0,
			overtimeHrs: 12
		}
	},
	{
		id: "3",
		empId: "HKD-003",
		name: "Priya Nair",
		designation: "Product Designer",
		department: "Design",
		joiningDate: "15 Jan 2024",
		type: "Full Time",
		effectiveDate: "01 Jul 2026",
		grossSalary: 72500,
		components: [],
		history: [{
			date: "15 Jan 2024",
			amount: 72500,
			reason: "Joined Company",
			type: "Initial",
			actionBy: "HR Admin"
		}],
		attendance: {
			workingDays: 26,
			present: 25,
			leave: 1,
			absent: 0,
			overtimeHrs: 0
		}
	}
];
var MOCK_AUDIT_LOGS = [
	{
		id: 1,
		action: "Approved payroll for Jun 2026 — locked as read-only",
		by: "CEO",
		date: "2026-07-24 18:22"
	},
	{
		id: 2,
		action: "Added Loan EMI deduction ₹3,000 for HKD-002",
		by: "Accounts",
		date: "2026-07-22 11:05"
	},
	{
		id: 3,
		action: "Created referral bonus BD-1044 (pending approval)",
		by: "HR Admin",
		date: "2026-07-18 09:47"
	},
	{
		id: 4,
		action: "Salary revision HKD-001 ₹74,000 → ₹92,000 (Promotion)",
		by: "CEO",
		date: "2026-07-01 10:12"
	},
	{
		id: 5,
		action: "Salary revision HKD-003 ₹32,000 → ₹38,000 (Increase)",
		by: "HR Admin",
		date: "2026-07-01 10:03"
	}
];
var MOCK_PAYROLL_TRENDS = [
	{
		month: "Jan",
		cost: 3.8
	},
	{
		month: "Feb",
		cost: 3.8
	},
	{
		month: "Mar",
		cost: 3.8
	},
	{
		month: "Apr",
		cost: 4.1
	},
	{
		month: "May",
		cost: 4.1
	},
	{
		month: "Jun",
		cost: 4.1
	},
	{
		month: "Jul",
		cost: 4.22
	}
];
var MOCK_DEPARTMENT_COSTS = [
	{
		name: "Engineering",
		value: 45,
		color: "#0088FE"
	},
	{
		name: "Sales",
		value: 25,
		color: "#00C49F"
	},
	{
		name: "Marketing",
		value: 15,
		color: "#FFBB28"
	},
	{
		name: "HR & Admin",
		value: 15,
		color: "#FF8042"
	}
];
var MOCK_BONUS_DEDUCTIONS = [
	{
		ref: "BD-1041",
		type: "Bonus",
		typeLabel: "Festival Bonus",
		appliedTo: "All employees",
		appliedToSub: "Entire Company",
		reason: "Diwali festival bonus 2026",
		creator: "HR Admin",
		date: "05 Jul 2026",
		amount: 5e3,
		state: "Approved"
	},
	{
		ref: "BD-1042",
		type: "Bonus",
		typeLabel: "Performance Bonus",
		appliedTo: "Ananya Sharma",
		appliedToSub: "Individual",
		reason: "Q2 delivery excellence",
		creator: "HR Admin",
		date: "12 Jul 2026",
		amount: 8e3,
		state: "Approved"
	},
	{
		ref: "BD-1043",
		type: "Bonus",
		typeLabel: "Sales Incentive",
		appliedTo: "Sales",
		appliedToSub: "Department",
		reason: "Q2 target 128% achieved",
		creator: "Accounts",
		date: "14 Jul 2026",
		amount: 12e3,
		state: "Approved"
	},
	{
		ref: "BD-1044",
		type: "Bonus",
		typeLabel: "Referral Bonus",
		appliedTo: "Meera Krishnan",
		appliedToSub: "Individual",
		reason: "Referral joined & confirmed",
		creator: "HR Admin",
		date: "18 Jul 2026",
		amount: 6e3,
		state: "Pending"
	},
	{
		ref: "BD-1045",
		type: "Deduction",
		typeLabel: "Late Coming",
		appliedTo: "Vikram Joshi",
		appliedToSub: "Individual",
		reason: "6 late marks beyond grace",
		creator: "HR Admin",
		date: "20 Jul 2026",
		amount: -500,
		state: "Approved"
	},
	{
		ref: "BD-1046",
		type: "Deduction",
		typeLabel: "Advance Recovery",
		appliedTo: "Vikram Joshi",
		appliedToSub: "Individual",
		reason: "Salary advance EMI 2/4",
		creator: "Accounts",
		date: "21 Jul 2026",
		amount: -2500,
		state: "Approved"
	},
	{
		ref: "BD-1047",
		type: "Deduction",
		typeLabel: "Loan EMI",
		appliedTo: "Rahul Verma",
		appliedToSub: "Individual",
		reason: "Personal loan EMI 7/12",
		creator: "Accounts",
		date: "22 Jul 2026",
		amount: -3e3,
		state: "Approved"
	},
	{
		ref: "BD-1048",
		type: "Bonus",
		typeLabel: "Project Bonus",
		appliedTo: "Imran Qureshi",
		appliedToSub: "Individual",
		reason: "Audit closure ahead of schedule",
		creator: "CEO",
		date: "24 Jul 2026",
		amount: 5e3,
		state: "Approved"
	}
];
var MOCK_PAYROLL_RUNS = [
	{
		id: "1",
		employee: "Ananya Sharma",
		empId: "HKD-001",
		working: 26,
		present: 24,
		absent: 0,
		leave: 2,
		otHrs: 6,
		gross: 92e3,
		deduction: 11708,
		netSalary: 93596,
		status: "Not Generated"
	},
	{
		id: "2",
		employee: "Rahul Verma",
		empId: "HKD-002",
		working: 26,
		present: 25,
		absent: 1,
		leave: 0,
		otHrs: 0,
		gross: 66e3,
		deduction: 9610,
		netSalary: 68390,
		status: "Not Generated"
	},
	{
		id: "3",
		employee: "Priya Nair",
		empId: "HKD-003",
		working: 26,
		present: 22,
		absent: 2,
		leave: 2,
		otHrs: 4,
		gross: 38e3,
		deduction: 4872,
		netSalary: 34592,
		status: "Not Generated"
	},
	{
		id: "4",
		employee: "Imran Qureshi",
		empId: "HKD-004",
		working: 26,
		present: 26,
		absent: 0,
		leave: 0,
		otHrs: 9,
		gross: 71e3,
		deduction: 6910,
		netSalary: 75228,
		status: "Not Generated"
	},
	{
		id: "5",
		employee: "Sneha Patil",
		empId: "HKD-005",
		working: 26,
		present: 23,
		absent: 1,
		leave: 2,
		otHrs: 2,
		gross: 45e3,
		deduction: 5281,
		netSalary: 40583,
		status: "Not Generated"
	},
	{
		id: "6",
		employee: "Vikram Joshi",
		empId: "HKD-006",
		working: 26,
		present: 20,
		absent: 4,
		leave: 2,
		otHrs: 0,
		gross: 36e3,
		deduction: 7983,
		netSalary: 28017,
		status: "Not Generated"
	},
	{
		id: "7",
		employee: "Meera Krishnan",
		empId: "HKD-007",
		working: 26,
		present: 25,
		absent: 0,
		leave: 1,
		otHrs: 3,
		gross: 52e3,
		deduction: 3690,
		netSalary: 55810,
		status: "Not Generated"
	}
];
function PayrollDashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-black tracking-tight",
					children: "Payroll Dashboard"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700",
					children: "July 2026"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Track salary expense, pending approvals and payroll analytics."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-bold text-emerald-900",
								children: "Current Month Payroll"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-lg bg-emerald-200/50 p-2 text-emerald-700",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-4 w-4" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-black text-emerald-950",
								children: "₹4,16,981"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs font-medium text-emerald-700",
								children: "Net payable · July 2026"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-white p-5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-bold text-muted-foreground",
								children: "Total Salary Expense"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-lg bg-muted p-2 text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-black",
								children: "₹4,22,000"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs font-medium text-muted-foreground",
								children: "Gross of all employees"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-white p-5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-bold text-muted-foreground",
								children: "Employees Paid"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-lg bg-muted p-2 text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-3xl font-black",
								children: ["6 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-lg text-muted-foreground font-medium",
									children: "/ 8"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs font-medium text-amber-600",
								children: "2 pending approval"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-white p-5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-bold text-muted-foreground",
								children: "Pending Payroll"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-lg bg-amber-100 p-2 text-amber-600",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-black",
								children: "2"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs font-medium text-muted-foreground",
								children: "Awaiting CEO approval"
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-4",
				children: [
					{
						label: "Average Salary",
						value: "₹52,750",
						sub: "Company average",
						icon: IndianRupee
					},
					{
						label: "Highest Salary",
						value: "₹92,000",
						sub: "HKD-001 · Engineering",
						icon: ArrowUpRight,
						color: "text-emerald-600"
					},
					{
						label: "Lowest Salary",
						value: "₹22,000",
						sub: "HKD-008 · Operations",
						icon: ArrowDownRight,
						color: "text-rose-600"
					},
					{
						label: "Upcoming Salary Date",
						value: "01 Aug",
						sub: "Auto-credit via bank file",
						icon: Clock
					}
				].map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 rounded-xl border border-border bg-white p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-full bg-muted p-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stat.icon, { className: cn("h-4 w-4", stat.color || "text-muted-foreground") })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase text-muted-foreground",
							children: stat.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-black leading-none mt-1",
							children: stat.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[10px] text-muted-foreground",
							children: stat.sub
						})
					] })]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-white p-6 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-6 flex items-center justify-between",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold",
								children: "Payroll Cost Trend"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Monthly payroll expense in ₹ lakhs"
							})] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-[240px] w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
									data: MOCK_PAYROLL_TRENDS,
									margin: {
										top: 5,
										right: 10,
										left: -20,
										bottom: 0
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											strokeDasharray: "3 3",
											vertical: false,
											stroke: "#e5e7eb"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "month",
											axisLine: false,
											tickLine: false,
											tick: {
												fontSize: 12,
												fill: "#6b7280"
											},
											dy: 10
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											axisLine: false,
											tickLine: false,
											tick: {
												fontSize: 12,
												fill: "#6b7280"
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											contentStyle: {
												borderRadius: "12px",
												border: "none",
												boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
											},
											formatter: (value) => [`₹${value}L`, "Cost"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											type: "monotone",
											dataKey: "cost",
											stroke: "#10b981",
											strokeWidth: 3,
											dot: {
												fill: "#10b981",
												strokeWidth: 2,
												r: 4
											},
											activeDot: {
												r: 6,
												strokeWidth: 0
											}
										})
									]
								})
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-white p-6 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-6 flex items-center justify-between",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold",
								children: "Department Salary Cost"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Gross monthly cost in ₹ thousands"
							})] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-[240px] w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: MOCK_DEPARTMENT_COSTS,
									margin: {
										top: 5,
										right: 10,
										left: 0,
										bottom: 0
									},
									layout: "vertical",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											strokeDasharray: "3 3",
											horizontal: false,
											stroke: "#e5e7eb"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											type: "number",
											axisLine: false,
											tickLine: false,
											tick: {
												fontSize: 12,
												fill: "#6b7280"
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											dataKey: "name",
											type: "category",
											axisLine: false,
											tickLine: false,
											tick: {
												fontSize: 12,
												fill: "#374151",
												fontWeight: 500
											},
											width: 90
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											cursor: { fill: "#f3f4f6" },
											contentStyle: {
												borderRadius: "12px",
												border: "none",
												boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
											},
											formatter: (value) => [`₹${value}k`, "Cost"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "value",
											radius: [
												0,
												4,
												4,
												0
											],
											children: MOCK_DEPARTMENT_COSTS.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: entry.color }, `cell-${index}`))
										})
									]
								})
							})
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-white p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Bonus Given"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xl font-bold text-emerald-600",
										children: "₹31,000"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-muted-foreground mt-1",
										children: "July 2026"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-white p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Total Deduction"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xl font-bold text-rose-600",
										children: "₹52,349"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-muted-foreground mt-1",
										children: "PF, TDS, PT, etc."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-white p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Headcount"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xl font-bold",
										children: "8"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-muted-foreground mt-1",
										children: "Active + notice"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-white p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Salary Growth"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xl font-bold text-emerald-600",
										children: "+9.4%"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-muted-foreground mt-1",
										children: "FY26 Avg"
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-white p-6 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-6 flex items-center justify-between",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "h-5 w-5 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold",
									children: "Audit Log"
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative space-y-6 before:absolute before:inset-y-0 before:left-2.5 before:w-px before:bg-border",
							children: MOCK_AUDIT_LOGS.map((log, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative pl-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-emerald-100",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-1.5 rounded-full bg-emerald-600" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium leading-tight",
										children: log.action
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: [
											log.by,
											" · ",
											log.date
										]
									})
								]
							}, log.id))
						})]
					})]
				})]
			})
		]
	});
}
function SalaryStructure() {
	const [employees, setEmployees] = (0, import_react.useState)(MOCK_EMPLOYEES);
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [selectedEmpId, setSelectedEmpId] = (0, import_react.useState)(employees[0]?.id || null);
	const [isEditing, setIsEditing] = (0, import_react.useState)(false);
	const [editForm, setEditForm] = (0, import_react.useState)(null);
	const filteredEmployees = employees.filter((e) => e.name.toLowerCase().includes(searchTerm.toLowerCase()) || e.empId.toLowerCase().includes(searchTerm.toLowerCase()) || e.department.toLowerCase().includes(searchTerm.toLowerCase()));
	const selectedEmp = (0, import_react.useMemo)(() => {
		return selectedEmpId ? employees.find((e) => e.id === selectedEmpId) : null;
	}, [selectedEmpId, employees]);
	const earnings = selectedEmp ? selectedEmp.components.filter((c) => c.type === "earnings") : [];
	const deductions = selectedEmp ? selectedEmp.components.filter((c) => c.type === "deductions") : [];
	const handleEditClick = () => {
		if (!selectedEmp) return;
		setEditForm({
			components: JSON.parse(JSON.stringify(selectedEmp.components)),
			reason: "Annual appraisal",
			date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
		});
		setIsEditing(true);
	};
	const handleSaveRevision = () => {
		if (!selectedEmp || !editForm) return;
		const newGross = editForm.components.filter((c) => c.type === "earnings").reduce((sum, c) => sum + Number(c.amount), 0);
		const newHistoryEntry = {
			date: new Date(editForm.date).toLocaleDateString("en-GB", {
				day: "2-digit",
				month: "short",
				year: "numeric"
			}),
			amount: newGross,
			reason: editForm.reason,
			actionBy: "HR Admin",
			type: newGross > selectedEmp.grossSalary ? "Increase" : "Promotion"
		};
		setEmployees((prev) => prev.map((emp) => {
			if (emp.id === selectedEmp.id) return {
				...emp,
				grossSalary: newGross,
				components: editForm.components.map((c) => ({
					...c,
					amount: Number(c.amount)
				})),
				history: [newHistoryEntry, ...emp.history]
			};
			return emp;
		}));
		setIsEditing(false);
	};
	const updateEditComponent = (id, amount) => {
		setEditForm((prev) => ({
			...prev,
			components: prev.components.map((c) => c.id === id ? {
				...c,
				amount
			} : c)
		}));
	};
	const getInitials = (name) => {
		return name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-[1400px] space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-black tracking-tight",
				children: "Salary Structure"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Salary is auto-fetched from the employee profile and applied by effective date"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-white p-5 shadow-sm flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold text-muted-foreground uppercase tracking-wider",
							children: "Employees on payroll"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-3xl font-black mt-2",
							children: "8"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-lg bg-emerald-100/50 p-3 text-emerald-600",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-white p-5 shadow-sm flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold text-muted-foreground uppercase tracking-wider",
							children: "Total monthly gross"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-3xl font-black mt-2",
							children: "₹4,22,000"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-lg bg-blue-100/50 p-3 text-blue-600",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-5 w-5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-white p-5 shadow-sm flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold text-muted-foreground uppercase tracking-wider",
							children: "Revisions this year"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-end gap-2 mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-black",
								children: "5"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium text-muted-foreground mb-1",
								children: "Append-only history"
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-lg bg-purple-100/50 p-3 text-purple-600",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-5 w-5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold text-amber-900 uppercase tracking-wider",
							children: "Pending revisions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-end gap-2 mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-black text-amber-950",
								children: "1"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium text-amber-700 mb-1",
								children: "Awaiting CEO approval"
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-lg bg-amber-200/50 p-3 text-amber-700",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-5 w-5" })
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[1.5fr_1fr] gap-6 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-white shadow-sm overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-4 border-b border-border bg-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-full max-w-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "Search employee, ID, department...",
								value: searchTerm,
								onChange: (e) => setSearchTerm(e.target.value),
								className: "w-full rounded-md border-none bg-transparent py-2 pl-9 pr-4 text-sm outline-none placeholder:text-muted-foreground/70"
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-white text-muted-foreground/70 border-b border-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 text-left text-[11px] font-bold uppercase tracking-wider",
										children: "Employee"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 text-left text-[11px] font-bold uppercase tracking-wider",
										children: "Department"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 text-left text-[11px] font-bold uppercase tracking-wider",
										children: "Joining"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 text-left text-[11px] font-bold uppercase tracking-wider",
										children: "Type"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 text-left text-[11px] font-bold uppercase tracking-wider",
										children: "Effective From"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border/50",
								children: filteredEmployees.map((emp) => {
									const isSelected = selectedEmpId === emp.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: cn("transition-colors cursor-pointer", isSelected ? "bg-emerald-50/60" : "hover:bg-muted/30"),
										onClick: () => setSelectedEmpId(emp.id),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-6 py-4",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-white text-xs font-bold",
														children: getInitials(emp.name)
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-slate-900",
														children: emp.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-xs text-muted-foreground",
														children: [
															emp.empId,
															" · ",
															emp.designation
														]
													})] })]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-6 py-4 text-slate-700 font-medium",
												children: emp.department
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "px-6 py-4 text-slate-700 font-medium",
												children: [
													emp.joiningDate.split(" ").slice(0, 2).join(" "),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													emp.joiningDate.split(" ")[2]
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-6 py-4 text-slate-700 font-medium",
												children: emp.type
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "px-6 py-4 text-slate-700 font-medium",
												children: [
													emp.effectiveDate.split(" ").slice(0, 2).join(" "),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													emp.effectiveDate.split(" ")[2]
												]
											})
										]
									}, emp.id);
								})
							})]
						})
					})]
				}), selectedEmp && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-white shadow-sm p-8 sticky top-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between mb-8 pb-6 border-b border-border/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold text-slate-900",
							children: selectedEmp.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground mt-1",
							children: [
								selectedEmp.empId,
								" · ",
								selectedEmp.designation
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2",
							children: !isEditing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleEditClick,
								className: "flex items-center gap-2 text-sm font-bold bg-white border border-border text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Revise Salary"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setIsEditing(false),
								className: "flex items-center gap-2 text-sm font-bold bg-muted text-muted-foreground px-4 py-2 rounded-lg hover:bg-muted/80 transition-colors shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), " Cancel Revision"]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-8 flex-1 overflow-y-auto pr-2 pb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-emerald-900 p-6 text-white flex items-center justify-between shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-emerald-100 text-sm font-medium",
									children: "Net In-hand Salary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-3xl font-black mt-1",
									children: formatCurrency(selectedEmp.grossSalary - deductions.reduce((s, c) => s + c.amount, 0))
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right text-sm space-y-1 text-emerald-100 font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Gross: ", formatCurrency(selectedEmp.grossSalary)] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-emerald-300",
										children: ["Deductions: -", formatCurrency(deductions.reduce((s, c) => s + c.amount, 0))]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mb-4 flex items-center gap-2 font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4 text-emerald-600" }), " Earnings"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl border border-border overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
										className: "divide-y divide-border",
										children: (isEditing ? editForm.components.filter((c) => c.type === "earnings") : earnings).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2.5 font-medium",
											children: c.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2.5 text-right",
											children: isEditing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "number",
												value: c.amount,
												onChange: (e) => updateEditComponent(c.id, e.target.value),
												className: "w-24 text-right border border-border rounded p-1 outline-none focus:border-emerald-500"
											}) : formatCurrency(c.amount)
										})] }, c.id))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tfoot", {
										className: "bg-muted/50",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2.5 font-bold",
											children: "Total Gross"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2.5 text-right font-bold text-emerald-600",
											children: formatCurrency(isEditing ? editForm.components.filter((c) => c.type === "earnings").reduce((s, c) => s + Number(c.amount), 0) : selectedEmp.grossSalary)
										})] })
									})]
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mb-4 flex items-center gap-2 font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-rose-600" }), " Deductions"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl border border-border overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
										className: "divide-y divide-border",
										children: (isEditing ? editForm.components.filter((c) => c.type === "deductions") : deductions).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2.5 font-medium",
											children: c.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2.5 text-right",
											children: isEditing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "number",
												value: c.amount,
												onChange: (e) => updateEditComponent(c.id, e.target.value),
												className: "w-24 text-right border border-border rounded p-1 outline-none focus:border-emerald-500"
											}) : formatCurrency(c.amount)
										})] }, c.id))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tfoot", {
										className: "bg-muted/50",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2.5 font-bold",
											children: "Total Deductions"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2.5 text-right font-bold text-rose-600",
											children: formatCurrency(isEditing ? editForm.components.filter((c) => c.type === "deductions").reduce((s, c) => s + Number(c.amount), 0) : deductions.reduce((s, c) => s + c.amount, 0))
										})] })
									})]
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mb-4 flex items-center gap-2 font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "h-4 w-4 text-indigo-600" }), " Salary Revision History"]
							}), isEditing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border p-5 bg-emerald-50/50 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-bold text-emerald-900",
										children: "Finalize Revision"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "text-xs font-bold text-muted-foreground flex gap-1",
											children: ["Effective Date ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-rose-500",
												children: "*"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "date",
											required: true,
											value: editForm.date,
											onChange: (e) => setEditForm({
												...editForm,
												date: e.target.value
											}),
											className: "mt-1 w-full rounded-md border border-border p-2 text-sm outline-none focus:border-emerald-500 bg-white"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "text-xs font-bold text-muted-foreground flex gap-1",
											children: ["Reason for change ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-rose-500",
												children: "*"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											required: true,
											value: editForm.reason,
											onChange: (e) => setEditForm({
												...editForm,
												reason: e.target.value
											}),
											className: "mt-1 w-full rounded-md border border-border p-2 text-sm outline-none focus:border-emerald-500 bg-white",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Select reason..."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Annual appraisal",
													children: "Annual appraisal"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Promotion",
													children: "Promotion"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Mid-year adjustment",
													children: "Mid-year adjustment"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Correction",
													children: "Correction"
												})
											]
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											if (!editForm.date || !editForm.reason) {
												alert("Effective date and Reason are required!");
												return;
											}
											handleSaveRevision();
										},
										className: "w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-lg transition-colors mt-2",
										children: "Save & Apply Revision"
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl border border-border p-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative space-y-6 before:absolute before:inset-y-0 before:left-2 before:w-px before:bg-border",
									children: selectedEmp.history.map((hist, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative pl-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white", hist.type === "Initial" ? "bg-slate-400" : hist.type === "Promotion" ? "bg-indigo-500" : "bg-emerald-500") }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-[11px] font-bold text-muted-foreground flex items-center gap-1.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3 w-3" }),
													" ",
													hist.date
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-lg font-black",
												children: formatCurrency(hist.amount)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-1.5 inline-flex items-center rounded-md bg-muted px-2 py-1 text-[10px] font-semibold text-muted-foreground",
												children: [
													hist.type,
													" · ",
													hist.reason
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-[10px] text-muted-foreground",
												children: ["Authorized by ", hist.actionBy]
											})
										]
									}, i))
								})
							})] })
						]
					})]
				})]
			})
		]
	});
}
var defaultLeaveTypes = [
	"Sick Leave",
	"Casual Leave",
	"Annual Leave",
	"Unpaid Leave"
];
var SettingsContext = (0, import_react.createContext)(void 0);
function SettingsProvider({ children }) {
	const [leaveTypes, setLeaveTypes] = (0, import_react.useState)(() => {
		const saved = localStorage.getItem("hrms_leave_types");
		if (saved) try {
			return JSON.parse(saved);
		} catch (e) {
			return defaultLeaveTypes;
		}
		return defaultLeaveTypes;
	});
	(0, import_react.useEffect)(() => {
		localStorage.setItem("hrms_leave_types", JSON.stringify(leaveTypes));
	}, [leaveTypes]);
	const addLeaveType = (type) => {
		if (!leaveTypes.includes(type)) setLeaveTypes((prev) => [...prev, type]);
	};
	const removeLeaveType = (type) => {
		setLeaveTypes((prev) => prev.filter((t) => t !== type));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsContext.Provider, {
		value: {
			leaveTypes,
			addLeaveType,
			removeLeaveType
		},
		children
	});
}
function useSettingsContext() {
	const context = (0, import_react.useContext)(SettingsContext);
	if (context === void 0) throw new Error("useSettingsContext must be used within a SettingsProvider");
	return context;
}
var TABS = [
	"General",
	"Leave & Holidays",
	"Attendance & OT",
	"Benefits",
	"Lock & Approval"
];
function Switch({ checked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("w-11 h-6 rounded-full relative cursor-pointer transition-colors duration-200 ease-in-out", checked ? "bg-[#00A56C]" : "bg-slate-200"),
		onClick: onChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ease-in-out", checked ? "translate-x-5" : "translate-x-0") })
	});
}
function PayrollSettings() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("General");
	const { leaveTypes, addLeaveType, removeLeaveType } = useSettingsContext();
	const [newLeaveTypeInput, setNewLeaveTypeInput] = (0, import_react.useState)("");
	const [workingDays, setWorkingDays] = (0, import_react.useState)("26");
	const [calcMethod, setCalcMethod] = (0, import_react.useState)("Working Days");
	const [selectedOffs, setSelectedOffs] = (0, import_react.useState)(["Sunday", "Alternate Saturday"]);
	const [settings, setSettings] = (0, import_react.useState)({
		paidLeave: "18",
		unpaidLeaveCap: "6",
		halfDayRule: "4 hours",
		carryForward: true,
		maxCarryForward: "12",
		encashment: true,
		lateGrace: "15",
		latePenalty: "₹300 per instance",
		absentRule: "No punch = Absent",
		missingPunch: "Regularize within 3 days",
		enableOT: true,
		otRate: "₹250",
		doubleOTAfter: "4 hrs",
		holidayOT: "2x",
		healthIns: true,
		healthCoCont: "1200",
		healthEmpCont: "650",
		maternity: true,
		paternity: true,
		medical: true,
		travelReimburse: true,
		mealBenefit: true,
		internetReimburse: true,
		mobileAllowance: false,
		bonusEligible: true,
		lockPayroll: true
	});
	const toggleOff = (day) => {
		setSelectedOffs((prev) => prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]);
	};
	const getSelectedText = () => {
		if (selectedOffs.length === 0) return "None";
		return selectedOffs.join(" + ");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-[1400px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold tracking-tight text-slate-900",
					children: "Payroll Settings"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-[13px] text-muted-foreground/80",
					children: "Company-wide payroll rules applied to every processing cycle"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-1.5 bg-[#F6F8F7] p-1.5 rounded-xl w-full border-b border-border/50",
				children: TABS.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActiveTab(tab),
					className: cn("px-5 py-2 text-[13px] font-semibold rounded-lg transition-all", activeTab === tab ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"),
					children: tab
				}, tab))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-8",
				children: [
					activeTab === "General" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-2 gap-6 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[16px] border border-border/60 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-[15px] font-bold text-slate-900",
										children: "Working Days Per Month"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] text-muted-foreground/80 mt-1",
										children: "Base divisor used for per-day salary calculation"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-border/40 mb-6" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[12px] font-semibold text-slate-500 mb-2 block",
										children: "Working days"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: workingDays,
										onChange: (e) => setWorkingDays(e.target.value),
										className: "w-full rounded-[10px] border border-border/80 p-2.5 text-[13px] font-medium text-slate-700 outline-none focus:border-emerald-500 bg-white shadow-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "26",
												children: "26"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "28",
												children: "28"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "30",
												children: "30"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "actual",
												children: "Actual days"
											})
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[12px] font-semibold text-slate-500 mb-2 block",
										children: "Salary calculation method"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: calcMethod,
										onChange: (e) => setCalcMethod(e.target.value),
										className: "w-full rounded-[10px] border border-border/80 p-2.5 text-[13px] font-medium text-slate-700 outline-none focus:border-emerald-500 bg-white shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Working Days",
											children: "Working Days"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Calendar Days",
											children: "Calendar Days"
										})]
									})] })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[16px] border border-border/60 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-[15px] font-bold text-slate-900",
										children: "Weekly Off"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] text-muted-foreground/80 mt-1",
										children: "Non-working days excluded from attendance loss"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-border/40 mb-6" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2.5 mb-5",
									children: [
										"Sunday",
										"Saturday",
										"Alternate Saturday",
										"Custom"
									].map((day) => {
										const isSelected = selectedOffs.includes(day);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => toggleOff(day),
											className: cn("px-4 py-1.5 rounded-full text-[13px] font-semibold transition-colors", isSelected ? "bg-[#00A56C] text-white border border-[#00A56C]" : "bg-white border border-border/80 text-slate-600 hover:bg-slate-50"),
											children: day
										}, day);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[13px] text-slate-500",
									children: ["Selected: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-slate-600",
										children: getSelectedText()
									})]
								})
							]
						})]
					}),
					activeTab === "Leave & Holidays" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-2 gap-6 items-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[16px] border border-border/60 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-[15px] font-bold text-slate-900",
											children: "Holiday Calendar"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[13px] text-muted-foreground/80 mt-1",
											children: "Holidays treated as paid non-working days"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-border/40 mb-6" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between p-3.5 border border-border/80 rounded-xl",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[14px] font-semibold text-slate-800",
													children: "Company Holidays"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "px-3 py-1 bg-[#E8F5F1] text-[#00A56C] text-[12px] font-bold rounded-full",
													children: "4 days"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between p-3.5 border border-border/80 rounded-xl",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[14px] font-semibold text-slate-800",
													children: "National Holidays"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "px-3 py-1 bg-[#E8F5F1] text-[#00A56C] text-[12px] font-bold rounded-full",
													children: "3 days"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between p-3.5 border border-border/80 rounded-xl",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[14px] font-semibold text-slate-800",
													children: "Festival Holidays"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "px-3 py-1 bg-[#E8F5F1] text-[#00A56C] text-[12px] font-bold rounded-full",
													children: "8 days"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between p-3.5 border border-border/80 rounded-xl",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[14px] font-semibold text-slate-800",
													children: "Optional Holidays"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "px-3 py-1 bg-[#E8F5F1] text-[#00A56C] text-[12px] font-bold rounded-full",
													children: "2 of 5 selectable"
												})]
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[16px] border border-border/60 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-[15px] font-bold text-slate-900",
											children: "Leave Policy"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[13px] text-muted-foreground/80 mt-1",
											children: "Paid, unpaid, half-day, carry forward and encashment"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-border/40 mb-6" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-3 gap-4 mb-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-[12px] font-semibold text-slate-500 mb-2 block",
												children: "Paid leave / year"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: settings.paidLeave,
												onChange: (e) => setSettings({
													...settings,
													paidLeave: e.target.value
												}),
												className: "w-full rounded-[10px] border border-border/80 p-2.5 text-[13px] font-medium text-slate-700 outline-none focus:border-emerald-500 bg-white shadow-sm"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-[12px] font-semibold text-slate-500 mb-2 block",
												children: "Unpaid leave cap"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: settings.unpaidLeaveCap,
												onChange: (e) => setSettings({
													...settings,
													unpaidLeaveCap: e.target.value
												}),
												className: "w-full rounded-[10px] border border-border/80 p-2.5 text-[13px] font-medium text-slate-700 outline-none focus:border-emerald-500 bg-white shadow-sm"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-[12px] font-semibold text-slate-500 mb-2 block",
												children: "Half day rule"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												value: settings.halfDayRule,
												onChange: (e) => setSettings({
													...settings,
													halfDayRule: e.target.value
												}),
												className: "w-full rounded-[10px] border border-border/80 p-2.5 text-[13px] font-medium text-slate-700 outline-none focus:border-emerald-500 bg-white shadow-sm",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "4 hours" })
											})] })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between p-4 border border-border/80 rounded-xl mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[14px] font-semibold text-slate-800",
											children: "Carry Forward Leave"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[12px] text-slate-500 mt-0.5",
											children: "Unused paid leaves move to next year"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
											checked: settings.carryForward,
											onChange: () => setSettings({
												...settings,
												carryForward: !settings.carryForward
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-[12px] font-semibold text-slate-500 mb-2 block",
											children: "Maximum carry forward days"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: settings.maxCarryForward,
											onChange: (e) => setSettings({
												...settings,
												maxCarryForward: e.target.value
											}),
											className: "w-full rounded-[10px] border border-border/80 p-2.5 text-[13px] font-medium text-slate-700 outline-none focus:border-emerald-500 bg-white shadow-sm"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between p-4 border border-border/80 rounded-xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[14px] font-semibold text-slate-800",
											children: "Leave Encashment"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[12px] text-slate-500 mt-0.5",
											children: "Encash unused leave at year end"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
											checked: settings.encashment,
											onChange: () => setSettings({
												...settings,
												encashment: !settings.encashment
											})
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[16px] border border-border/60 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] mt-6 col-span-1 lg:col-span-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-[15px] font-bold text-slate-900",
											children: "Leave Types"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[13px] text-muted-foreground/80 mt-1",
											children: "Configure available leave types for employees"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-border/40 mb-6" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2 mb-6",
										children: leaveTypes.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-lg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[13px] font-semibold text-slate-700",
												children: type
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => removeLeaveType(type),
												className: "p-0.5 text-slate-400 hover:text-rose-500 rounded-md transition-colors",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-3.5 h-3.5" })
											})]
										}, type))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 max-w-md",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											placeholder: "New leave type (e.g. Maternity Leave)",
											value: newLeaveTypeInput,
											onChange: (e) => setNewLeaveTypeInput(e.target.value),
											onKeyDown: (e) => {
												if (e.key === "Enter" && newLeaveTypeInput.trim()) {
													addLeaveType(newLeaveTypeInput.trim());
													setNewLeaveTypeInput("");
												}
											},
											className: "flex-1 rounded-[10px] border border-border/80 p-2.5 text-[13px] font-medium text-slate-700 outline-none focus:border-indigo-500 bg-white shadow-sm"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => {
												if (newLeaveTypeInput.trim()) {
													addLeaveType(newLeaveTypeInput.trim());
													setNewLeaveTypeInput("");
												}
											},
											className: "px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-[10px] text-[13px] font-bold shadow-sm flex items-center gap-2 transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" }), " Add"]
										})]
									})
								]
							})
						]
					}),
					activeTab === "Attendance & OT" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-2 gap-6 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[16px] border border-border/60 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-[15px] font-bold text-slate-900",
										children: "Attendance Rules"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] text-muted-foreground/80 mt-1",
										children: "Grace, penalty and punch rules affecting payable days"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-border/40 mb-6" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-5 mb-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[12px] font-semibold text-slate-500 mb-2 block",
										children: "Late coming grace (minutes)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: settings.lateGrace,
										onChange: (e) => setSettings({
											...settings,
											lateGrace: e.target.value
										}),
										className: "w-full rounded-[10px] border border-border/80 p-2.5 text-[13px] font-medium text-slate-700 outline-none focus:border-emerald-500 bg-white shadow-sm"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[12px] font-semibold text-slate-500 mb-2 block",
										children: "Late penalty"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: settings.latePenalty,
										onChange: (e) => setSettings({
											...settings,
											latePenalty: e.target.value
										}),
										className: "w-full rounded-[10px] border border-border/80 p-2.5 text-[13px] font-medium text-slate-700 outline-none focus:border-emerald-500 bg-white shadow-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "₹300 per instance" })
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-5 mb-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[12px] font-semibold text-slate-500 mb-2 block",
										children: "Half day rule"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: settings.halfDayRule,
										onChange: (e) => setSettings({
											...settings,
											halfDayRule: e.target.value
										}),
										className: "w-full rounded-[10px] border border-border/80 p-2.5 text-[13px] font-medium text-slate-700 outline-none focus:border-emerald-500 bg-white shadow-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Below 4 hrs" })
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[12px] font-semibold text-slate-500 mb-2 block",
										children: "Absent rule"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: settings.absentRule,
										onChange: (e) => setSettings({
											...settings,
											absentRule: e.target.value
										}),
										className: "w-full rounded-[10px] border border-border/80 p-2.5 text-[13px] font-medium text-slate-700 outline-none focus:border-emerald-500 bg-white shadow-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "No punch = Absent" })
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 gap-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[12px] font-semibold text-slate-500 mb-2 block",
										children: "Missing punch rule"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: settings.missingPunch,
										onChange: (e) => setSettings({
											...settings,
											missingPunch: e.target.value
										}),
										className: "w-full rounded-[10px] border border-border/80 p-2.5 text-[13px] font-medium text-slate-700 outline-none focus:border-emerald-500 bg-white shadow-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Regularize within 3 days" })
									})] })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[16px] border border-border/60 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-[15px] font-bold text-slate-900",
										children: "Overtime"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] text-muted-foreground/80 mt-1",
										children: "OT computed from approved attendance only"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-border/40 mb-6" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between p-4 border border-border/80 rounded-xl mb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[14px] font-semibold text-slate-800",
										children: "Enable Overtime"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[12px] text-slate-500 mt-0.5",
										children: "OT paid with monthly payroll"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										checked: settings.enableOT,
										onChange: () => setSettings({
											...settings,
											enableOT: !settings.enableOT
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-[12px] font-semibold text-slate-500 mb-2 block",
											children: "OT rate / hour"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: settings.otRate,
											onChange: (e) => setSettings({
												...settings,
												otRate: e.target.value
											}),
											className: "w-full rounded-[10px] border border-border/80 p-2.5 text-[13px] font-medium text-slate-700 outline-none focus:border-emerald-500 bg-white shadow-sm"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-[12px] font-semibold text-slate-500 mb-2 block",
											children: "Double OT after"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: settings.doubleOTAfter,
											onChange: (e) => setSettings({
												...settings,
												doubleOTAfter: e.target.value
											}),
											className: "w-full rounded-[10px] border border-border/80 p-2.5 text-[13px] font-medium text-slate-700 outline-none focus:border-emerald-500 bg-white shadow-sm"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-[12px] font-semibold text-slate-500 mb-2 block",
											children: "Holiday OT multiplier"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: settings.holidayOT,
											onChange: (e) => setSettings({
												...settings,
												holidayOT: e.target.value
											}),
											className: "w-full rounded-[10px] border border-border/80 p-2.5 text-[13px] font-medium text-slate-700 outline-none focus:border-emerald-500 bg-white shadow-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "2x" })
										})] })
									]
								})
							]
						})]
					}),
					activeTab === "Benefits" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-2 gap-6 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[16px] border border-border/60 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-[15px] font-bold text-slate-900",
										children: "Health & Statutory Benefits"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] text-muted-foreground/80 mt-1",
										children: "Company and employee contributions"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-border/40 mb-6" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border border-border/80 rounded-xl overflow-hidden",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[14px] font-semibold text-slate-800",
													children: "Health Insurance"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[12px] text-slate-500 mt-0.5",
													children: "Company ₹1,200 · Employee ₹650"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
													checked: settings.healthIns,
													onChange: () => setSettings({
														...settings,
														healthIns: !settings.healthIns
													})
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "px-4 pb-4 grid grid-cols-2 gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-[11px] font-semibold text-slate-500 mb-1.5 block",
													children: "Company contribution"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: settings.healthCoCont,
													onChange: (e) => setSettings({
														...settings,
														healthCoCont: e.target.value
													}),
													className: "w-full rounded-[8px] border border-border/80 p-2 text-[13px] font-medium text-slate-700 outline-none focus:border-emerald-500 bg-white"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-[11px] font-semibold text-slate-500 mb-1.5 block",
													children: "Employee contribution"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: settings.healthEmpCont,
													onChange: (e) => setSettings({
														...settings,
														healthEmpCont: e.target.value
													}),
													className: "w-full rounded-[8px] border border-border/80 p-2 text-[13px] font-medium text-slate-700 outline-none focus:border-emerald-500 bg-white"
												})] })]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-4 border border-border/80 rounded-xl",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[14px] font-semibold text-slate-800",
												children: "Maternity Leave"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[12px] text-slate-500 mt-0.5",
												children: "Days allowed: 182"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
												checked: settings.maternity,
												onChange: () => setSettings({
													...settings,
													maternity: !settings.maternity
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-4 border border-border/80 rounded-xl",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[14px] font-semibold text-slate-800",
												children: "Paternity Leave"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[12px] text-slate-500 mt-0.5",
												children: "Days allowed: 15"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
												checked: settings.paternity,
												onChange: () => setSettings({
													...settings,
													paternity: !settings.paternity
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-4 border border-border/80 rounded-xl",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[14px] font-semibold text-slate-800",
												children: "Medical Benefit"
											}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
												checked: settings.medical,
												onChange: () => setSettings({
													...settings,
													medical: !settings.medical
												})
											})]
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[16px] border border-border/60 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-[15px] font-bold text-slate-900",
										children: "Reimbursements & Perks"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] text-muted-foreground/80 mt-1",
										children: "Applied as monthly allowances in payslips"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-border/40 mb-6" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-4 border border-border/80 rounded-xl",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[14px] font-semibold text-slate-800",
												children: "Travel Reimbursement"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
												checked: settings.travelReimburse,
												onChange: () => setSettings({
													...settings,
													travelReimburse: !settings.travelReimburse
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-4 border border-border/80 rounded-xl",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[14px] font-semibold text-slate-800",
												children: "Meal Benefit"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
												checked: settings.mealBenefit,
												onChange: () => setSettings({
													...settings,
													mealBenefit: !settings.mealBenefit
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-4 border border-border/80 rounded-xl",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[14px] font-semibold text-slate-800",
												children: "Internet Reimbursement"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
												checked: settings.internetReimburse,
												onChange: () => setSettings({
													...settings,
													internetReimburse: !settings.internetReimburse
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-4 border border-border/80 rounded-xl bg-slate-50/30",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: cn("text-[14px] font-semibold", settings.mobileAllowance ? "text-slate-800" : "text-slate-400"),
												children: "Mobile Allowance"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
												checked: settings.mobileAllowance,
												onChange: () => setSettings({
													...settings,
													mobileAllowance: !settings.mobileAllowance
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-4 border border-border/80 rounded-xl",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[14px] font-semibold text-slate-800",
												children: "Bonus Eligibility"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[12px] text-slate-500 mt-0.5",
												children: "After 6 months of service"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
												checked: settings.bonusEligible,
												onChange: () => setSettings({
													...settings,
													bonusEligible: !settings.bonusEligible
												})
											})]
										})
									]
								})
							]
						})]
					}),
					activeTab === "Lock & Approval" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-2 gap-6 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[16px] border border-border/60 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-[15px] font-bold text-slate-900",
										children: "Payroll Lock"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] text-muted-foreground/80 mt-1",
										children: "Prevent edits once payroll is approved"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-border/40 mb-6" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between p-4 border border-border/80 rounded-xl mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[14px] font-semibold text-slate-800",
										children: "Lock payroll after approval"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[12px] text-slate-500 mt-0.5",
										children: "Approved payroll becomes read-only forever"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										checked: settings.lockPayroll,
										onChange: () => setSettings({
											...settings,
											lockPayroll: !settings.lockPayroll
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] text-slate-500 leading-relaxed",
									children: "Payroll records can never be deleted — corrections are posted as adjustments in the next cycle."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[16px] border border-border/60 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-[15px] font-bold text-slate-900",
										children: "Approval Workflow"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] text-muted-foreground/80 mt-1",
										children: "Sequential approvals required before disbursement"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-border/40 mb-6" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4 relative before:absolute before:inset-y-0 before:left-[19px] before:w-px before:bg-border/60",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4 p-4 border border-border/80 rounded-xl bg-white relative z-10",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-8 h-8 rounded-full bg-[#00A56C] text-white flex items-center justify-center text-[14px] font-bold shrink-0",
												children: "1"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[14px] font-bold text-slate-900",
												children: "HR"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[12px] text-slate-500 mt-0.5",
												children: "Verifies attendance, leave and salary revisions"
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4 p-4 border border-border/80 rounded-xl bg-white relative z-10",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-8 h-8 rounded-full bg-[#00A56C] text-white flex items-center justify-center text-[14px] font-bold shrink-0",
												children: "2"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[14px] font-bold text-slate-900",
												children: "Accounts"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[12px] text-slate-500 mt-0.5",
												children: "Validates deductions, recoveries and tax"
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4 p-4 border border-border/80 rounded-xl bg-white relative z-10",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-8 h-8 rounded-full bg-[#00A56C] text-white flex items-center justify-center text-[14px] font-bold shrink-0",
												children: "3"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[14px] font-bold text-slate-900",
												children: "CEO"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[12px] text-slate-500 mt-0.5",
												children: "Final approval — locks payroll"
											})] })]
										})
									]
								})
							]
						})]
					})
				]
			})
		]
	});
}
function PayrollProcessing() {
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const filteredRuns = MOCK_PAYROLL_RUNS.filter((r) => r.employee.toLowerCase().includes(searchTerm.toLowerCase()) || r.empId.toLowerCase().includes(searchTerm.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-[1400px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex items-end justify-between border-b border-border pb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold tracking-tight text-slate-900",
					children: "Payroll Processing"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[14px] text-muted-foreground",
					children: "July 2026 · Attendance, leave, OT, bonuses and recoveries fetched automatically"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "appearance-none pl-4 pr-10 py-2 bg-white border border-border/80 rounded-lg text-[13px] font-semibold text-slate-700 outline-none focus:border-emerald-500 shadow-sm min-w-[120px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "July" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "August" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "appearance-none pl-4 pr-10 py-2 bg-white border border-border/80 rounded-lg text-[13px] font-semibold text-slate-700 outline-none focus:border-emerald-500 shadow-sm min-w-[100px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "2026" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "2027" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-4 gap-4 mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[#0b6c4b] rounded-2xl p-5 shadow-sm relative text-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-start mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[12px] font-medium text-emerald-50",
									children: "Company Payroll Expense"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[14px] font-bold text-emerald-100",
									children: "₹"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[32px] font-black",
								children: "₹4,69,330"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] text-emerald-100 mt-1",
								children: "Gross + OT + bonus"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border/60 rounded-2xl p-5 shadow-sm relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-start mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[12px] font-medium text-slate-500",
									children: "Employees Processed"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 text-[#0b6c4b]" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[32px] font-black text-slate-900",
								children: "0"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] text-slate-500 mt-1",
								children: "8 eligible"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border/60 rounded-2xl p-5 shadow-sm relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-start mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] font-medium text-slate-500",
								children: "Total Bonus"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-4 w-4 text-[#0b6c4b]" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[32px] font-black text-slate-900",
							children: "₹31,000"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border/60 rounded-2xl p-5 shadow-sm relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-start mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] font-medium text-slate-500",
								children: "Total Deduction"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleMinus, { className: "h-4 w-4 text-[#0b6c4b]" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[32px] font-black text-slate-900",
							children: "₹52,349"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3 mb-6 bg-white border border-border/60 p-2 rounded-2xl shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-4 py-1.5 bg-slate-50 border border-border rounded-full text-[12px] font-bold text-slate-700 whitespace-nowrap ml-2",
						children: "Status: Not Generated"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-6 bg-border/60 mx-1 hidden sm:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-2 bg-[#00a56c] hover:bg-[#00925e] text-white px-4 py-2 rounded-lg text-[13px] font-bold shadow-sm transition-colors whitespace-nowrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, { className: "h-4 w-4" }), " Generate Payroll"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						disabled: true,
						className: "flex items-center gap-2 bg-white border border-border/60 px-4 py-2 rounded-lg text-slate-400 text-[13px] font-semibold opacity-60 whitespace-nowrap cursor-not-allowed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), " Approve Payroll"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						disabled: true,
						className: "flex items-center gap-2 bg-white border border-border/60 px-4 py-2 rounded-lg text-slate-400 text-[13px] font-semibold opacity-60 whitespace-nowrap cursor-not-allowed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4" }), " Lock Payroll"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-2 bg-white border border-border/80 px-4 py-2 rounded-lg text-slate-700 text-[13px] font-semibold hover:bg-slate-50 transition-colors shadow-sm whitespace-nowrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "h-4 w-4" }), " Export Excel"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-2 bg-white border border-border/80 px-4 py-2 rounded-lg text-slate-700 text-[13px] font-semibold hover:bg-slate-50 transition-colors shadow-sm whitespace-nowrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4" }), " Export PDF"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-2 bg-white border border-border/80 px-4 py-2 rounded-lg text-slate-700 text-[13px] font-semibold hover:bg-slate-50 transition-colors shadow-sm whitespace-nowrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), " Send Payslips"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-border/60 rounded-2xl shadow-sm overflow-hidden flex flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5 border-b border-border/60 bg-white flex justify-between items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[15px] font-bold text-slate-900",
						children: "Payroll Preview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12px] text-muted-foreground mt-0.5",
						children: "Computed from effective salary as on 01 July 2026"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "Search employees...",
								value: searchTerm,
								onChange: (e) => setSearchTerm(e.target.value),
								className: "pl-9 pr-4 py-1.5 border border-border/80 rounded-lg text-[13px] w-64 outline-none focus:border-emerald-500 bg-slate-50 focus:bg-white transition-colors"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "flex items-center gap-2 border border-border/80 bg-white px-3 py-1.5 rounded-lg text-[13px] font-semibold text-slate-700 hover:bg-slate-50 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-4 w-4" }), " Filter"]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left border-collapse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border/60 bg-slate-50/50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest",
									children: "Employee"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center",
									children: "Working"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center",
									children: "Present"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center",
									children: "Absent"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center",
									children: "Leave"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center",
									children: "OT Hrs"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right",
									children: "Gross"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right",
									children: "Deduction"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right",
									children: "Net Salary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center",
									children: "Status"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
							className: "divide-y divide-border/40",
							children: [filteredRuns.map((run) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-slate-50/50 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-4 px-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-8 h-8 rounded-full bg-[#0b6c4b] text-white flex items-center justify-center text-[11px] font-bold shrink-0",
												children: run.employee.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase()
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[13px] font-bold text-slate-900 leading-tight",
												children: run.employee
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-slate-500 mt-0.5",
												children: run.empId
											})] })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-4 px-5 text-center text-[13px] text-slate-700",
										children: run.working
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-4 px-5 text-center text-[13px] text-slate-700",
										children: run.present
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-4 px-5 text-center text-[13px] text-slate-700",
										children: run.absent
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-4 px-5 text-center text-[13px] text-slate-700",
										children: run.leave
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-4 px-5 text-center text-[13px] text-slate-700",
										children: run.otHrs
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-4 px-5 text-right text-[13px] font-medium text-slate-700",
										children: formatCurrency(run.gross)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "py-4 px-5 text-right text-[13px] font-medium text-rose-500",
										children: ["-", formatCurrency(run.deduction)]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-4 px-5 text-right text-[14px] font-bold text-slate-900",
										children: formatCurrency(run.netSalary)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-4 px-5 text-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex items-center justify-center px-3 py-1.5 rounded-full text-[10px] font-bold bg-white text-slate-700 border border-border/80 tracking-wide",
											children: run.status
										})
									})
								]
							}, run.id)), filteredRuns.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								colSpan: 10,
								className: "py-12 text-center text-muted-foreground text-sm",
								children: [
									"No employees found matching \"",
									searchTerm,
									"\""
								]
							}) })]
						})]
					})
				})]
			})
		]
	});
}
function BonusDeductions() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("All");
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const filteredEntries = MOCK_BONUS_DEDUCTIONS.filter((entry) => {
		const matchesTab = activeTab === "All" || activeTab === "Bonuses" && entry.type === "Bonus" || activeTab === "Deductions" && entry.type === "Deduction";
		const matchesSearch = entry.typeLabel.toLowerCase().includes(searchTerm.toLowerCase()) || entry.appliedTo.toLowerCase().includes(searchTerm.toLowerCase()) || entry.ref.toLowerCase().includes(searchTerm.toLowerCase());
		return matchesTab && matchesSearch;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-[1400px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold tracking-tight text-slate-900",
					children: "Bonus & Deductions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-[13px] text-muted-foreground/80",
					children: "Apply to an individual, a department or the entire company"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-lg text-[13px] font-bold shadow-sm transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add Entry"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-4 gap-4 mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[#0b6c4b] rounded-2xl p-5 shadow-sm relative text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-start mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] font-medium text-emerald-50",
								children: "Total Bonus (July)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-4 w-4 text-emerald-100" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[32px] font-black",
							children: "₹36,000"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border/60 rounded-2xl p-5 shadow-sm relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-start mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] font-medium text-slate-500",
								children: "Total Deduction (July)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleMinus, { className: "h-4 w-4 text-[#0b6c4b]" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[32px] font-black text-slate-900",
							children: "₹6,000"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border/60 rounded-2xl p-5 shadow-sm relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-between items-start mb-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] font-medium text-slate-500",
								children: "Entries This Cycle"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[32px] font-black text-slate-900",
							children: "8"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border/60 rounded-2xl p-5 shadow-sm relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-between items-start mb-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[12px] font-medium text-slate-500",
									children: "Pending Approval"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[32px] font-black text-slate-900",
								children: "1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] text-slate-500 mt-1",
								children: "Requires CEO sign-off"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-flex bg-slate-50 border border-border/60 p-1 rounded-full gap-1",
					children: [
						"All",
						"Bonuses",
						"Deductions"
					].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveTab(tab),
						className: cn("px-4 py-1.5 text-[13px] font-semibold rounded-full transition-colors", activeTab === tab ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"),
						children: tab
					}, tab))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Search entries...",
							value: searchTerm,
							onChange: (e) => setSearchTerm(e.target.value),
							className: "pl-9 pr-4 py-1.5 border border-border/80 rounded-lg text-[13px] w-64 outline-none focus:border-emerald-500 bg-white shadow-sm"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-2 border border-border/80 bg-white px-3 py-1.5 rounded-lg text-[13px] font-semibold text-slate-700 hover:bg-slate-50 shadow-sm transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-4 w-4" }), " Filter"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-white border border-border/60 rounded-2xl shadow-sm overflow-hidden flex flex-col",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left border-collapse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest",
									children: "Ref"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest",
									children: "Type"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest",
									children: "Applied To"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest",
									children: "Reason"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest",
									children: "Created By"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest",
									children: "Date"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right",
									children: "Amount"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-4 px-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center",
									children: "Approval"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
							className: "divide-y divide-border/40",
							children: [filteredEntries.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-slate-50/50 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-4 px-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[13px] font-bold text-slate-900",
											children: entry.ref
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-4 px-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold", entry.type === "Bonus" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600 border border-slate-200"),
											children: entry.typeLabel
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "py-4 px-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[13px] font-bold text-slate-700",
											children: entry.appliedTo
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-slate-400 font-medium",
											children: entry.appliedToSub
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-4 px-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[13px] text-slate-500 font-medium",
											children: entry.reason
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-4 px-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[13px] text-slate-500 font-medium",
											children: entry.creator
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-4 px-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[13px] text-slate-500 font-medium",
											children: entry.date
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-4 px-5 text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: cn("text-[14px] font-bold", entry.type === "Bonus" ? "text-slate-900" : "text-rose-600"),
											children: [entry.type === "Bonus" ? "+" : "-", formatCurrency(Math.abs(entry.amount))]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-4 px-5 text-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("inline-flex items-center justify-center px-3 py-1 rounded-full text-[11px] font-bold", entry.state === "Approved" ? "bg-[#00a56c] text-white" : "bg-white text-slate-700 border border-border/80"),
											children: entry.state
										})
									})
								]
							}, entry.ref)), filteredEntries.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								colSpan: 8,
								className: "py-12 text-center text-muted-foreground text-sm",
								children: [
									"No entries found matching \"",
									searchTerm,
									"\""
								]
							}) })]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-[11px] text-slate-500 px-1 font-medium",
				children: "History entries are permanent — reason, creator, date and approval state are retained forever."
			})
		]
	});
}
function Payslips() {
	const [selectedEmpId, setSelectedEmpId] = (0, import_react.useState)(MOCK_EMPLOYEES[0]?.id || "");
	const selectedEmp = MOCK_EMPLOYEES.find((e) => e.id === selectedEmpId) || MOCK_EMPLOYEES[0];
	if (!selectedEmp) return null;
	const totalEarnings = 105304;
	const totalDeductions = 11708;
	const netPayable = 93596;
	const initials = selectedEmp.name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-[1200px] mx-auto pb-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 flex items-end justify-between border-b border-border pb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold tracking-tight text-slate-900",
				children: "Payslip"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-[14px] text-muted-foreground",
				children: "Pay period: 01 Jul 2026 – 31 Jul 2026"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: selectedEmpId,
							onChange: (e) => setSelectedEmpId(e.target.value),
							className: "appearance-none pl-4 pr-10 py-2 bg-white border border-border/80 rounded-lg text-[13px] font-semibold text-slate-700 outline-none focus:border-emerald-500 shadow-sm min-w-[200px]",
							children: MOCK_EMPLOYEES.map((emp) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: emp.id,
								children: emp.name
							}, emp.id))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-2 bg-white border border-border/80 px-4 py-2 rounded-lg text-slate-700 text-[13px] font-semibold hover:bg-slate-50 transition-colors shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4" }), " PDF"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-2 bg-white border border-border/80 px-4 py-2 rounded-lg text-slate-700 text-[13px] font-semibold hover:bg-slate-50 transition-colors shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " Email"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-2 bg-white border border-border/80 px-4 py-2 rounded-lg text-slate-700 text-[13px] font-semibold hover:bg-slate-50 transition-colors shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-2 bg-white border border-border/80 px-4 py-2 rounded-lg text-slate-700 text-[13px] font-semibold hover:bg-slate-50 transition-colors shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "h-4 w-4" }), " Print"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-2 bg-[#0c7851] hover:bg-[#00925e] text-white px-5 py-2 rounded-lg text-[13px] font-semibold shadow-sm transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download"]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white rounded-t-3xl rounded-b-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden mx-auto border border-border/40",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-[#0c7851] px-8 py-6 text-white flex justify-between items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-6 w-6 text-white" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[22px] font-bold tracking-tight",
							children: "HK DigiVerse Pvt. Ltd."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12px] text-white/80 mt-0.5",
							children: "3rd Floor, Cyber Park, Pune 411045 · GSTIN 27AABCH1234K1Z9"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-bold uppercase tracking-widest text-white/80 mb-0.5",
							children: "PAYSLIP"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-bold",
							children: "July 2026"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-8 py-8 flex gap-8 border-b border-border/60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-16 h-16 rounded-full bg-[#0c7851] text-white flex items-center justify-center text-xl font-bold shrink-0",
						children: initials
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 grid grid-cols-3 gap-y-6 gap-x-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] text-slate-500 mb-1",
								children: "Employee Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[14px] font-semibold text-slate-900",
								children: selectedEmp.name
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] text-slate-500 mb-1",
								children: "Employee ID"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[14px] font-semibold text-slate-900",
								children: selectedEmp.empId
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] text-slate-500 mb-1",
								children: "Department"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[14px] font-semibold text-slate-900",
								children: selectedEmp.department
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] text-slate-500 mb-1",
								children: "Designation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[14px] font-semibold text-slate-900",
								children: selectedEmp.designation
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] text-slate-500 mb-1",
								children: "Joining Date"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[14px] font-semibold text-slate-900",
								children: selectedEmp.joiningDate
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] text-slate-500 mb-1",
								children: "Employment Type"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[14px] font-semibold text-slate-900",
								children: selectedEmp.type
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] text-slate-500 mb-1",
								children: "Bank Account"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[14px] font-semibold text-slate-900",
								children: "HDFC Bank ••••4821"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] text-slate-500 mb-1",
								children: "PAN"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[14px] font-semibold text-slate-900",
								children: "AXQPS4412J"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] text-slate-500 mb-1",
								children: "UAN"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[14px] font-semibold text-slate-900",
								children: "100234556711"
							})] })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-8 py-8 grid grid-cols-2 gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-[12px] font-semibold text-slate-400 uppercase tracking-wider mb-6",
						children: "Earnings & Allowances"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 mb-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "Basic Salary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹36,800"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "HRA"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹18,400"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "Special Allowance"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹12,880"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "Medical Allowance"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹4,600"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "Travel Allowance"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹4,600"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "Internet Allowance"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹2,760"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "Food Allowance"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹3,680"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "Performance Allowance"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹5,520"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "Other Allowance"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹2,760"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "Overtime (6 hrs)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹5,304"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "Bonus"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹8,000"
								})]
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-[12px] font-semibold text-slate-400 uppercase tracking-wider mb-6",
						children: "Deductions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 mb-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "Professional Tax"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹200"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "TDS"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹5,520"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "Provident Fund"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹1,800"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "ESIC"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹0"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "Health Insurance"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹650"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "Loan Recovery"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹0"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "Advance Salary Recovery"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹0"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "Penalty"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹0"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "Late Coming Deduction"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹0"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "Leave Deduction"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹3,538"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[14px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: "Other Deduction"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-slate-900",
									children: "₹0"
								})]
							})
						]
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-8 pb-8 pt-4 grid grid-cols-2 gap-16 border-t border-border/40 mt-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[14px] font-bold text-slate-900",
							children: "Total Earnings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[14px] font-bold text-slate-900",
							children: formatCurrency(totalEarnings)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[14px] font-bold text-slate-900",
							children: "Total Deductions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[14px] font-bold text-slate-900",
							children: formatCurrency(totalDeductions)
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-6 mb-6 mt-2 bg-[#0c7851] rounded-2xl p-6 text-white flex items-center justify-between shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12px] font-semibold text-white/80 uppercase tracking-wider mb-1",
						children: "NET SALARY PAYABLE"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[32px] font-black leading-none",
						children: formatCurrency(netPayable)
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-white px-4 py-2 rounded-full text-[#0c7851] text-[13px] font-bold shadow-sm",
						children: "Credited to HDFC Bank ••••4821"
					})]
				})
			]
		})]
	});
}
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
function QuickActionModals({ activeAction, onClose }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (activeAction && activeAction !== "Export Excel" && activeAction !== "Export PDF") setIsOpen(true);
		else setIsOpen(false);
	}, [activeAction]);
	const handleClose = () => {
		setIsOpen(false);
		setTimeout(onClose, 200);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			handleClose();
			toast.success(`${activeAction} successful!`, { description: "The system has been updated." });
		}, 1e3);
	};
	if (!activeAction) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: isOpen,
		onOpenChange: (open) => !open && handleClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-[425px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: activeAction }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
				activeAction === "Add Lead" && "Enter the details of the new prospective client.",
				activeAction === "Add Meeting" && "Schedule a new meeting with a lead or client.",
				activeAction === "Schedule Follow-up" && "Set a reminder to follow up on an ongoing deal.",
				activeAction === "Create Task" && "Add a new task to your personal or team to-do list.",
				activeAction === "Add Payment" && "Log a received payment against a deal or invoice.",
				activeAction === "Add Note" && "Quickly jot down a note for future reference.",
				activeAction === "Create Quotation" && "Generate a quick quotation estimate.",
				activeAction === "Convert Lead" && "Mark a lead as successfully won and convert to client.",
				(activeAction === "Bulk Upload Leads" || activeAction === "Import CSV") && "Upload a spreadsheet to import multiple records at once."
			] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "grid gap-4 py-4",
				children: [
					activeAction === "Add Lead" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "name",
								children: "Contact Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								placeholder: "John Doe",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "company",
								children: "Company"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "company",
								placeholder: "Acme Corp",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "email",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									type: "email",
									placeholder: "john@acme.com"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "phone",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "phone",
									type: "tel",
									placeholder: "+91 98765 43210"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "source",
								children: "Lead Source"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								defaultValue: "organic",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select source" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "organic",
										children: "Organic Search"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "referral",
										children: "Referral"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "linkedin",
										children: "LinkedIn"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "cold_call",
										children: "Cold Call"
									})
								] })]
							})]
						})
					] }),
					(activeAction === "Add Meeting" || activeAction === "Schedule Follow-up") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "title",
								children: "Title"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "title",
								placeholder: activeAction === "Add Meeting" ? "Product Demo" : "Follow up on proposal",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "lead",
								children: "Related Lead/Client"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								defaultValue: "1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select lead" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "1",
										children: "TechNova Solutions"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "2",
										children: "Global Retail Ltd"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "3",
										children: "Apex Industries"
									})
								] })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "date",
									children: "Date"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "date",
									type: "date",
									required: true
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "time",
									children: "Time"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "time",
									type: "time",
									required: true
								})]
							})]
						})
					] }),
					activeAction === "Create Task" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "task",
								children: "Task Description"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "task",
								placeholder: "e.g. Draft contract for Apex Industries",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "priority",
								children: "Priority"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								defaultValue: "medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select priority" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "high",
										children: "High"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "medium",
										children: "Medium"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "low",
										children: "Low"
									})
								] })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "dueDate",
								children: "Due Date"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "dueDate",
								type: "date",
								required: true
							})]
						})
					] }),
					activeAction === "Add Payment" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "client",
								children: "Client / Deal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								defaultValue: "1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select client" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "1",
									children: "TechNova Solutions - Phase 1"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "2",
									children: "Global Retail - Retainer"
								})] })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "amount",
								children: "Amount Received (₹)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "amount",
								type: "number",
								placeholder: "50000",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "method",
								children: "Payment Method"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								defaultValue: "bank",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select method" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "bank",
										children: "Bank Transfer (NEFT/RTGS)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "upi",
										children: "UPI"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "card",
										children: "Credit Card"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "cash",
										children: "Cash"
									})
								] })]
							})]
						})
					] }),
					activeAction === "Add Note" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "note",
							children: "Note Content"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "note",
							placeholder: "Type your note here...",
							className: "h-32",
							required: true
						})]
					}) }),
					activeAction === "Create Quotation" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "q_client",
								children: "Client Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "q_client",
								placeholder: "Acme Corp",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "q_amount",
								children: "Estimated Amount (₹)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "q_amount",
								type: "number",
								placeholder: "100000",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "q_desc",
								children: "Description"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "q_desc",
								placeholder: "Brief description of the services...",
								required: true
							})]
						})
					] }),
					activeAction === "Convert Lead" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-center py-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8" })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Select a Lead to Convert" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								defaultValue: "1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select lead" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "1",
									children: "TechNova Solutions (₹5.2 L)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "2",
									children: "Global Retail Ltd (₹3.8 L)"
								})] })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2 mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "c_value",
								children: "Final Deal Value (₹)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "c_value",
								type: "number",
								defaultValue: 52e4,
								required: true
							})]
						})
					] }),
					(activeAction === "Bulk Upload Leads" || activeAction === "Import CSV") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-border px-6 py-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 place-items-center rounded-full bg-emerald-50 text-emerald-600",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-foreground",
								children: "Click to upload or drag and drop"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "CSV or Excel files only (max 5MB)"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								children: "Choose File"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: handleClose,
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "bg-emerald-600 hover:bg-emerald-700",
							disabled: isSubmitting,
							children: isSubmitting ? "Processing..." : activeAction.includes("Upload") || activeAction.includes("Import") ? "Upload Data" : "Save Changes"
						})]
					})
				]
			})]
		})
	});
}
function DashboardHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white rounded-[32px] p-8 border border-border/60 shadow-sm relative overflow-hidden mb-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] font-bold text-[#00A56C] uppercase tracking-widest mb-2",
					children: "CEO Command Center"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-[34px] font-black text-slate-900 tracking-tight flex items-center gap-2 mb-2 leading-none",
					children: ["Good Evening, Het ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-3xl",
						children: "👋"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[14px] text-slate-500",
					children: "Today's overview for HK DigiVerse — everything moving across the company, in one screen."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3 justify-end max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-1.5 px-4 py-2 bg-white border border-border/80 rounded-full text-[12px] font-bold text-slate-700 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:bg-slate-50 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "h-3.5 w-3.5 text-slate-500" }), " Add Employee"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-1.5 px-4 py-2 bg-white border border-border/80 rounded-full text-[12px] font-bold text-slate-700 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:bg-slate-50 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, { className: "h-3.5 w-3.5 text-slate-500" }), " Add Task"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-1.5 px-4 py-2 bg-white border border-border/80 rounded-full text-[12px] font-bold text-slate-700 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:bg-slate-50 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-3.5 w-3.5 text-slate-500" }), " Add Client"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-1.5 px-4 py-2 bg-white border border-border/80 rounded-full text-[12px] font-bold text-slate-700 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:bg-slate-50 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, { className: "h-3.5 w-3.5 text-slate-500" }), " Create Invoice"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-1.5 px-4 py-2 bg-white border border-border/80 rounded-full text-[12px] font-bold text-slate-700 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:bg-slate-50 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-slate-500" }), " Schedule Meeting"]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-4 gap-4 mt-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-50/40 rounded-2xl p-5 border border-border/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-bold text-slate-400 mb-1",
						children: "Current Time"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[22px] font-black text-[#00A56C]",
						children: "05:28:41 PM"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-50/40 rounded-2xl p-5 border border-border/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-bold text-slate-400 mb-1",
						children: "Today's Date"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[22px] font-black text-blue-500",
						children: "11 Aug 2026"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-50/40 rounded-2xl p-5 border border-border/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-bold text-slate-400 mb-1",
						children: "Working Day"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[22px] font-black text-amber-500",
						children: "Day 22 of 26"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-slate-50/40 rounded-2xl p-5 border border-border/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-bold text-slate-400 mb-1",
						children: "Financial Month"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[22px] font-black text-[#00A56C]",
						children: "August"
					})]
				})
			]
		})]
	});
}
var TOP_METRICS = [
	{
		label: "Total Employees",
		emoji: "👥",
		value: "148",
		change: "↗ 4.2%",
		trend: "up",
		color: "emerald",
		chartColor: "#00A56C"
	},
	{
		label: "Present Today",
		emoji: "🟢",
		value: "131",
		change: "↗ 2.8%",
		trend: "up",
		color: "emerald",
		chartColor: "#00A56C"
	},
	{
		label: "Absent Today",
		emoji: "🔴",
		value: "9",
		change: "↘ 12.5%",
		trend: "down",
		color: "rose",
		chartColor: "#e11d48"
	},
	{
		label: "Late Today",
		emoji: "🟠",
		value: "8",
		change: "↗ 6.1%",
		trend: "up",
		color: "emerald",
		chartColor: "#f59e0b"
	},
	{
		label: "Total Interns",
		emoji: "🎓",
		value: "22",
		change: "↗ 10.0%",
		trend: "up",
		color: "emerald",
		chartColor: "#3b82f6"
	},
	{
		label: "Pending Leaves",
		emoji: "📋",
		value: "6",
		change: "↘ 18.2%",
		trend: "down",
		color: "rose",
		chartColor: "#f59e0b"
	},
	{
		label: "Active Clients",
		emoji: "💼",
		value: "64",
		change: "↗ 7.4%",
		trend: "up",
		color: "emerald",
		chartColor: "#00A56C"
	},
	{
		label: "Running Projects",
		emoji: "📂",
		value: "31",
		change: "↗ 3.1%",
		trend: "up",
		color: "emerald",
		chartColor: "#3b82f6"
	},
	{
		label: "Pending Tasks",
		emoji: "📌",
		value: "187",
		change: "↘ 5.6%",
		trend: "down",
		color: "rose",
		chartColor: "#f59e0b"
	},
	{
		label: "Monthly Revenue",
		emoji: "💰",
		value: "₹48.20 L",
		change: "↗ 12.6%",
		trend: "up",
		color: "emerald",
		chartColor: "#00A56C"
	},
	{
		label: "Monthly Expense",
		emoji: "💸",
		value: "₹29.60 L",
		change: "↗ 4.8%",
		trend: "up",
		color: "emerald",
		chartColor: "#e11d48"
	},
	{
		label: "Net Profit",
		emoji: "📈",
		value: "₹18.60 L",
		change: "↗ 21.4%",
		trend: "up",
		color: "emerald",
		chartColor: "#00A56C"
	}
];
var DEPARTMENTS = [
	{
		name: "Creative",
		total: 26,
		present: 23,
		tasks: 34,
		completed: 118
	},
	{
		name: "Development",
		total: 42,
		present: 39,
		tasks: 61,
		completed: 244
	},
	{
		name: "Sales",
		total: 24,
		present: 21,
		tasks: 29,
		completed: 156
	},
	{
		name: "HR",
		total: 12,
		present: 11,
		tasks: 12,
		completed: 64
	},
	{
		name: "Digital Marketing",
		total: 28,
		present: 25,
		tasks: 38,
		completed: 172
	},
	{
		name: "Accounts",
		total: 16,
		present: 12,
		tasks: 13,
		completed: 88
	}
];
var PROJECTS_GANTT = [
	{
		name: "Aurora Commerce Revamp",
		client: "Aurora Retail",
		status: "Active",
		progress: 65,
		color: "emerald"
	},
	{
		name: "Nimbus CRM Rollout",
		client: "Nimbus Tech",
		status: "Delayed",
		progress: 42,
		color: "rose"
	},
	{
		name: "Vertex Brand Campaign",
		client: "Vertex Foods",
		status: "Active",
		progress: 88,
		color: "emerald"
	},
	{
		name: "Solaris Mobile App",
		client: "Solaris Energy",
		status: "Active",
		progress: 12,
		color: "emerald"
	},
	{
		name: "Kite Social Launch",
		client: "Kite Media",
		status: "Over Budget",
		progress: 95,
		color: "amber"
	}
];
var UPCOMING_FOLLOW_UPS = [
	{
		client: "Aurora Retail",
		assignee: "Aarav Mehta",
		date: "Today"
	},
	{
		client: "Vertex Foods",
		assignee: "Sneha Iyer",
		date: "Tomorrow"
	},
	{
		client: "Kite Media",
		assignee: "Manav Desai",
		date: "14 Aug"
	}
];
var KEY_ACCOUNTS = [
	{
		name: "Aurora Retail",
		since: "2022",
		value: "High",
		health: "Good"
	},
	{
		name: "Nimbus Tech",
		since: "2023",
		value: "Medium",
		health: "Warning"
	},
	{
		name: "Vertex Foods",
		since: "2021",
		value: "High",
		health: "Good"
	},
	{
		name: "Solaris Energy",
		since: "2020",
		value: "Premium",
		health: "Good"
	}
];
var ACTIVITY_FEED = [
	{
		icon: "UserPlus",
		title: "Aditya Bhatt joined Development",
		time: "12 min ago",
		color: "indigo"
	},
	{
		icon: "CheckCircle",
		title: "Leave approved for Priya Nair",
		time: "38 min ago",
		color: "emerald"
	},
	{
		icon: "CheckSquare",
		title: "Task Gateway patch completed by Riya Shah",
		time: "1 hr ago",
		color: "blue"
	},
	{
		icon: "IndianRupee",
		title: "Invoice #INV-2214 paid — ₹4,80,000",
		time: "2 hrs ago",
		color: "emerald"
	},
	{
		icon: "Briefcase",
		title: "New client added — Kite Media",
		time: "3 hrs ago",
		color: "indigo"
	},
	{
		icon: "Rocket",
		title: "Project Solaris Mobile App started",
		time: "5 hrs ago",
		color: "amber"
	},
	{
		icon: "Banknote",
		title: "July salary processed for 148 employees",
		time: "Yesterday",
		color: "emerald"
	}
];
var PROFIT_TREND = [
	{
		month: "Jan",
		profit: 12.4
	},
	{
		month: "Feb",
		profit: 11.2
	},
	{
		month: "Mar",
		profit: 14.8
	},
	{
		month: "Apr",
		profit: 13.5
	},
	{
		month: "May",
		profit: 15.2
	},
	{
		month: "Jun",
		profit: 16.1
	},
	{
		month: "Jul",
		profit: 16.8
	}
];
var CASH_FLOW = [
	{
		month: "Jan",
		revenue: 42,
		expense: 29
	},
	{
		month: "Feb",
		revenue: 40,
		expense: 28
	},
	{
		month: "Mar",
		revenue: 45,
		expense: 30
	},
	{
		month: "Apr",
		revenue: 44,
		expense: 30
	},
	{
		month: "May",
		revenue: 46,
		expense: 31
	},
	{
		month: "Jun",
		revenue: 48,
		expense: 31
	},
	{
		month: "Jul",
		revenue: 48,
		expense: 31
	}
];
var TOP_PERFORMERS = [
	{
		name: "Riya Shah",
		dept: "Development",
		isTop: true
	},
	{
		name: "Aarav Mehta",
		dept: "Sales",
		isTop: false
	},
	{
		name: "Neha Patel",
		dept: "Creative",
		isTop: false
	},
	{
		name: "Karan Joshi",
		dept: "Digital Marketing",
		isTop: false
	},
	{
		name: "Ishita Rao",
		dept: "Accounts",
		isTop: false
	}
];
var SPOTLIGHT_EMPLOYEES = [
	{
		name: "Riya Shah",
		role: "Employee of the Month · Development"
	},
	{
		name: "Aarav Mehta",
		role: "Top Closer · Sales"
	},
	{
		name: "Neha Patel",
		role: "Creative Star · Design"
	}
];
var LATE_LEADERBOARD = [
	{
		name: "Manav Desai",
		late: 9
	},
	{
		name: "Sahil Kapoor",
		late: 7
	},
	{
		name: "Dev Trivedi",
		late: 6
	},
	{
		name: "Anaya Singh",
		late: 4
	}
];
var NEEDS_ATTENTION = [
	{
		name: "Manav Desai",
		dept: "Sales",
		score: 54
	},
	{
		name: "Priya Nair",
		dept: "Creative",
		score: 58
	},
	{
		name: "Dev Trivedi",
		dept: "Development",
		score: 61
	}
];
var WEEKLY_ATTENDANCE = [
	{
		day: "Mon",
		present: 135,
		late: 12,
		wfh: 28,
		absent: 5
	},
	{
		day: "Tue",
		present: 140,
		late: 8,
		wfh: 25,
		absent: 3
	},
	{
		day: "Wed",
		present: 132,
		late: 18,
		wfh: 30,
		absent: 8
	},
	{
		day: "Thu",
		present: 138,
		late: 6,
		wfh: 26,
		absent: 4
	},
	{
		day: "Fri",
		present: 128,
		late: 15,
		wfh: 35,
		absent: 7
	},
	{
		day: "Sat",
		present: 110,
		late: 5,
		wfh: 45,
		absent: 12
	}
];
var SALES_METRICS = {
	today: "₹3.4 L",
	monthly: "₹48.2 L",
	target: "₹58.0 L",
	conversion: "24.6%",
	achievement: 83
};
var FINANCE_METRICS = {
	todayIncome: "₹5.8 L",
	todayExpense: "₹2.1 L",
	outstanding: "₹31.2 L",
	pendingClient: "₹18.6 L",
	pendingVendor: "₹6.4 L"
};
var MY_TASKS = [
	{
		title: "Approve Q3 hiring plan",
		assignee: "You",
		due: "Today",
		status: "pending"
	},
	{
		title: "Review Aurora design system",
		assignee: "Neha Patel",
		due: "Today",
		status: "pending"
	},
	{
		title: "Sign vendor contract – Nimbus",
		assignee: "You",
		due: "Tomorrow",
		status: "pending"
	},
	{
		title: "Finalize appraisal matrix",
		assignee: "HR Team",
		due: "02 Aug",
		status: "pending"
	},
	{
		title: "Ship payment gateway patch",
		assignee: "Riya Shah",
		due: "Today",
		status: "completed"
	}
];
var HR_UPDATES = {
	birthdays: [{
		name: "Neha Patel",
		date: "Today"
	}, {
		name: "Sahil Kapoor",
		date: "02 Aug"
	}],
	anniversaries: [{
		name: "Riya Shah",
		tenure: "3 years"
	}, {
		name: "Ishita Rao",
		tenure: "5 years"
	}],
	interviews: [{
		role: "Frontend Engineer",
		time: "11:00 AM"
	}, {
		role: "Performance Marketer",
		time: "03:30 PM"
	}],
	joining: [{
		name: "Aditya Bhatt",
		date: "01 Aug"
	}],
	exit: [{
		name: "Rohan Verma",
		date: "15 Aug"
	}],
	probation: [{
		name: "Tanvi Shah",
		date: "07 Aug"
	}],
	document: [{
		name: "Nikhil – Passport",
		date: "18 Aug"
	}],
	policies: [{
		name: "Hybrid Work Policy v2",
		status: "Published"
	}]
};
var COMPANY_NEWS = [
	{
		title: "HK DigiVerse crosses 60 active clients",
		desc: "A new milestone driven by the Sales and Delivery teams."
	},
	{
		title: "Appraisal cycle starts 05 August",
		desc: "Managers must submit review drafts before 03 August."
	},
	{
		title: "Revised hybrid work policy",
		desc: "Minimum 3 office days per week from this month."
	}
];
var AI_SUMMARY = {
	prediction: "₹54.5 L",
	predictionText: "Forecast close for this month (94% target)",
	actions: [
		"Review Creative dept workload distribution",
		"Escalate Vertex Foods payment to accounts",
		"Reallocate 2 developers to Solaris app",
		"Approve 6 pending leave requests"
	]
};
var OVERALL_KPIS = [
	{
		label: "Overall Productivity",
		value: "88%"
	},
	{
		label: "Company Growth",
		value: "12%"
	},
	{
		label: "Employee Utilization",
		value: "92%"
	},
	{
		label: "Project Completion",
		value: "85%"
	},
	{
		label: "Avg Response Time",
		value: "1.2 hrs"
	},
	{
		label: "Client Retention",
		value: "98%"
	},
	{
		label: "Employee Retention",
		value: "94%"
	},
	{
		label: "Monthly Burn Rate",
		value: "₹29.0L"
	},
	{
		label: "Profit Margin",
		value: "38.5%"
	},
	{
		label: "Revenue / Employee",
		value: "₹3.2L"
	},
	{
		label: "Avg Client Value",
		value: "₹7.5L"
	},
	{
		label: "Avg Task Time",
		value: "2.4 days"
	}
];
function CollapsibleSection({ section, title, children, defaultExpanded = true, titleIcon }) {
	const [isExpanded, setIsExpanded] = (0, import_react.useState)(defaultExpanded);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col h-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 pl-2 flex items-center justify-between cursor-pointer select-none group",
			onClick: () => setIsExpanded(!isExpanded),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] font-bold text-[#00A56C] uppercase tracking-widest mb-0.5",
				children: section
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [titleIcon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[18px] font-black text-slate-900 tracking-tight group-hover:text-[#00A56C] transition-colors",
					children: title
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-8 w-8 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-5 w-5 text-slate-400 transition-transform duration-300", !isExpanded ? "rotate-180" : "") })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("transition-all duration-500 overflow-hidden", isExpanded ? "opacity-100" : "opacity-0 max-h-0"),
			children
		})]
	});
}
function CompanyHealth() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleSection, {
			section: "Section 02",
			title: "Company Health",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-4 gap-6",
				children: TOP_METRICS.map((metric, i) => {
					const isUp = metric.trend === "up";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border/60 rounded-3xl p-5 shadow-[0_2px_15px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col h-[140px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-start z-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[14px] leading-none",
										children: metric.emoji
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] font-bold text-slate-500",
										children: metric.label
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-0.5", isUp ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"),
									children: metric.change
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[26px] font-black text-slate-900 leading-none mt-3 z-10",
								children: metric.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] text-slate-400 mt-auto z-10",
								children: "vs last month"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-x-0 bottom-0 h-16 pointer-events-none opacity-40",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
									width: "100%",
									height: "100%",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
										data: metric.chartData || PROFIT_TREND,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
											id: `grad-${i}`,
											x1: "0",
											y1: "0",
											x2: "0",
											y2: "1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "5%",
												stopColor: metric.chartColor || "#10b981",
												stopOpacity: .8
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "95%",
												stopColor: metric.chartColor || "#10b981",
												stopOpacity: 0
											})]
										}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
											type: "monotone",
											dataKey: "profit",
											stroke: metric.chartColor || "#10b981",
											strokeWidth: 2,
											fill: `url(#grad-${i})`
										})]
									})
								})
							})
						]
					}, i);
				})
			})
		})
	});
}
function EmployeePerformance() {
	const [currentSpotlight, setCurrentSpotlight] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => {
			setCurrentSpotlight((prev) => (prev + 1) % SPOTLIGHT_EMPLOYEES.length);
		}, 3e3);
		return () => clearInterval(timer);
	}, []);
	const spotlight = SPOTLIGHT_EMPLOYEES[currentSpotlight];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleSection, {
			section: "Section 03",
			title: "Employee Performance",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-slate-900",
								children: "Top 5 Performers"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-slate-500",
								children: "Ranked by weighted productivity score"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: TOP_PERFORMERS.map((emp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center justify-center w-6 h-6 rounded-full bg-white font-bold text-[11px] text-slate-400 shadow-sm",
										children: emp.isTop ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-3 w-3 text-amber-500" }) : i + 1
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] font-bold text-slate-900 leading-tight",
										children: emp.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-slate-500",
										children: emp.dept
									})] })]
								})
							}, i))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-slate-900 rounded-3xl p-6 text-white shadow-sm relative overflow-hidden flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-0 right-0 p-4 opacity-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-32 w-32" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-xs font-bold text-slate-300 uppercase tracking-wider mb-6 flex items-center justify-between",
							children: ["Spotlight", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1",
								children: SPOTLIGHT_EMPLOYEES.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("h-1 rounded-full transition-all duration-300", i === currentSpotlight ? "w-3 bg-white" : "w-1 bg-white/30") }, i))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-h-[80px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-black mb-1 animate-in fade-in slide-in-from-right-4 duration-500",
								children: spotlight?.name
							}, spotlight?.name), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-slate-400 text-sm animate-in fade-in slide-in-from-right-4 duration-500 delay-75",
								children: spotlight?.role
							}, spotlight?.role)]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-slate-900 mb-6",
								children: "Late Coming Leaderboard"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4",
								children: LATE_LEADERBOARD.map((emp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[14px] text-slate-500 font-medium",
										children: emp.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[12px] font-medium text-amber-500 bg-amber-50 px-3 py-1 rounded-full",
										children: [emp.late, " late"]
									})]
								}, i))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-slate-900 mb-6",
								children: "Needs Attention"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-6",
								children: NEEDS_ATTENTION.map((emp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[14px] text-slate-900",
											children: emp.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[12px] text-rose-500",
											children: [emp.score, "%"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-rose-500 rounded-full",
											style: { width: `${emp.score}%` }
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[12px] text-slate-400",
										children: emp.dept
									})
								] }, i))
							})]
						})]
					})
				]
			})
		})
	});
}
function AttendanceAnalytics() {
	const generateHeatmap = () => {
		const weeks = [];
		let dayCount = 1;
		for (let w = 0; w < 5; w++) {
			const days = [];
			for (let d = 0; d < 7; d++) {
				const val = d === 5 || d === 6 ? 0 : Math.floor(Math.random() * 4) + 1;
				days.push({
					val,
					date: dayCount > 31 ? dayCount - 31 : dayCount
				});
				dayCount++;
			}
			weeks.push(days);
		}
		return weeks;
	};
	const heatmap = generateHeatmap();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleSection, {
			section: "Section 04",
			title: "Attendance Analytics",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-slate-900",
								children: "Weekly Attendance"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-slate-500",
								children: "Present vs late vs WFH vs absent"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-[250px] mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: WEEKLY_ATTENDANCE,
									margin: {
										top: 10,
										right: 0,
										left: -20,
										bottom: 0
									},
									barGap: 2,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											strokeDasharray: "0",
											vertical: false,
											stroke: "#f1f5f9"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "day",
											axisLine: false,
											tickLine: false,
											tick: {
												fontSize: 11,
												fill: "#64748b"
											},
											dy: 10
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											axisLine: false,
											tickLine: false,
											tick: {
												fontSize: 11,
												fill: "#64748b"
											},
											ticks: [
												0,
												40,
												80,
												120,
												160
											],
											domain: [0, 160]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											contentStyle: {
												borderRadius: "8px",
												border: "none",
												boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
											},
											cursor: { fill: "transparent" }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
											iconType: "circle",
											wrapperStyle: {
												fontSize: "12px",
												paddingTop: "10px"
											},
											formatter: (value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-slate-500 font-medium capitalize",
												children: value
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "present",
											fill: "#20b2aa",
											radius: [
												4,
												4,
												0,
												0
											],
											barSize: 16
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "late",
											fill: "#f5a623",
											radius: [
												4,
												4,
												0,
												0
											],
											barSize: 16
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "wfh",
											fill: "#4a90e2",
											radius: [
												4,
												4,
												0,
												0
											],
											barSize: 16
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "absent",
											fill: "#e74c3c",
											radius: [
												4,
												4,
												0,
												0
											],
											barSize: 16
										})
									]
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold text-slate-900 mb-1",
									children: "Work From Home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-500 mb-4",
									children: "26 employees remote today"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-end gap-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-3xl font-black text-blue-500 leading-none",
										children: "17%"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-1.5 w-full bg-slate-100 rounded-full mt-4 overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-blue-500 rounded-full",
										style: { width: "17%" }
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold text-slate-900 mb-1",
									children: "Late Analysis"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-500 mb-4",
									children: "Avg delay 18 min · peak on Wednesdays"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-end gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-3xl font-black text-amber-500 leading-none",
										children: "8"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] font-bold text-slate-400 mb-1",
										children: "late today"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-1.5 w-full bg-slate-100 rounded-full mt-4 overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-amber-500 rounded-full",
										style: { width: "8%" }
									})
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm md:col-span-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold text-slate-900",
									children: "Heatmap Calendar"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-500",
									children: "Attendance intensity over the last 5 weeks"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-2 mb-1",
									children: [
										"Mon",
										"Tue",
										"Wed",
										"Thu",
										"Fri",
										"Sat",
										"Sun"
									].map((day, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex-1 text-center text-[10px] font-bold text-slate-400 uppercase tracking-wider",
										children: day
									}, i))
								}), heatmap.map((week, w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-2",
									children: week.map((day, d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `flex-1 h-10 flex items-center justify-center rounded-lg text-[12px] font-medium transition-all cursor-default hover:scale-[1.02] ${day.val === 0 ? "bg-slate-50 text-slate-400" : day.val === 1 ? "bg-emerald-100 text-emerald-800" : day.val === 2 ? "bg-emerald-300 text-emerald-900" : day.val === 3 ? "bg-emerald-500 text-white" : "bg-emerald-700 text-white"}`,
										children: day.date
									}, d))
								}, w))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-end items-center gap-2 mt-4 text-[10px] text-slate-500",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Low" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-sm bg-emerald-100" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-sm bg-emerald-300" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-sm bg-emerald-500" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-sm bg-emerald-700" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "High" })
								]
							})
						]
					})
				]
			})
		})
	});
}
function DepartmentStatus() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleSection, {
			section: "Section 05",
			title: "Department Status",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: DEPARTMENTS.map((dept, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-black text-slate-900 mb-1",
							children: dept.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] text-slate-500",
							children: [dept.total, " Employees"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1",
								children: "Present Today"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xl font-black text-[#00A56C] leading-none",
								children: [dept.present, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm text-slate-400 font-medium",
									children: ["/", dept.total]
								})]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1",
									children: "Tasks"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xl font-black text-indigo-600 leading-none",
									children: [dept.completed, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm text-slate-400 font-medium",
										children: ["/", dept.completed + dept.tasks]
									})]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-1.5 w-full bg-slate-100 rounded-full overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full bg-indigo-500 rounded-full",
								style: { width: `${dept.completed / (dept.completed + dept.tasks) * 100}%` }
							})
						})]
					})]
				}, i))
			})
		})
	});
}
function ProjectDelivery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleSection, {
			section: "Section 06",
			title: "Project Delivery",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white border border-border/60 rounded-3xl p-5 shadow-sm flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2",
								children: "Total Projects"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-black text-slate-900",
								children: "42"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white border border-border/60 rounded-3xl p-5 shadow-sm flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2",
								children: "Active"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-black text-[#00A56C]",
								children: "24"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white border border-border/60 rounded-3xl p-5 shadow-sm flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2",
								children: "Completed"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-black text-blue-500",
								children: "12"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-rose-50 border border-rose-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold text-rose-400 uppercase tracking-wider mb-2",
								children: "Delayed"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-black text-rose-600",
								children: "4"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-amber-50 border border-amber-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-2",
								children: "Over Budget"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-black text-amber-600",
								children: "2"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white border border-border/60 rounded-3xl p-5 shadow-sm flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2",
								children: "Deadline Today"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-black text-slate-900",
								children: "1"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex justify-between items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-slate-900",
							children: "Gantt preview of live delivery"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-slate-500",
							children: "Top active and at-risk projects"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-[11px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg",
							children: "View All"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-5",
						children: PROJECTS_GANTT.map((proj, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-end mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] font-bold text-slate-900",
								children: proj.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-slate-500",
								children: proj.client
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-[10px] font-bold px-2 py-0.5 rounded-md border", proj.status === "Delayed" ? "text-rose-600 bg-rose-50 border-rose-100" : proj.status === "Over Budget" ? "text-amber-600 bg-amber-50 border-amber-100" : "text-[#00A56C] bg-emerald-50 border-emerald-100"),
								children: proj.status
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-2 w-full bg-slate-100 rounded-full overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("h-full rounded-full transition-all duration-1000", proj.color === "emerald" ? "bg-[#00A56C]" : proj.color === "rose" ? "bg-rose-500" : "bg-amber-500"),
								style: { width: `${proj.progress}%` }
							})
						})] }, i))
					})]
				})]
			})
		})
	});
}
function SalesOverview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleSection, {
			section: "Section 07",
			title: "Sales Overview",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-start mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1",
									children: "Today's Sales"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[28px] font-black text-slate-900 leading-none",
									children: SALES_METRICS.today
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 border border-emerald-100",
									children: "On Track"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4 mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
									children: "Monthly Sales"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xl font-black text-[#00A56C]",
									children: SALES_METRICS.monthly
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
									children: "Sales Target"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xl font-black text-slate-900",
									children: SALES_METRICS.target
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
								children: "Lead Conversion"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xl font-black text-blue-500",
								children: SALES_METRICS.conversion
							})] })
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-end mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-bold text-slate-500 uppercase tracking-wider",
									children: "Target Achievement"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-bold text-slate-500",
									children: "6 working days remaining"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2 w-full bg-slate-100 rounded-full overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-[#00A56C] rounded-full",
									style: { width: `${SALES_METRICS.achievement}%` }
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-slate-900 rounded-3xl p-6 text-white shadow-sm relative overflow-hidden flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-0 right-0 p-4 opacity-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-32 w-32" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs font-bold text-slate-300 uppercase tracking-wider mb-6",
								children: "Top Salesperson"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-black mb-1",
								children: "Aarav Mehta"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-slate-400 text-sm",
								children: "₹12.8 L closed this month"
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-slate-900",
								children: "Upcoming Follow Ups"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-slate-500",
								children: "Scheduled client interactions"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: UPCOMING_FOLLOW_UPS.map((follow, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-blue-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] font-bold text-slate-900 leading-tight",
										children: follow.client
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-slate-500",
										children: follow.assignee
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md border border-blue-100",
									children: follow.date
								})]
							}, i))
						})]
					})
				]
			})
		})
	});
}
function FinanceOverview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleSection, {
			section: "Section 08",
			title: "Finance Overview",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-emerald-50 border border-emerald-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-bold text-emerald-600 uppercase tracking-wider mb-2",
									children: "Today's Income"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[26px] font-black text-emerald-700 leading-none",
									children: FINANCE_METRICS.todayIncome
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-rose-50 border border-rose-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-bold text-rose-600 uppercase tracking-wider mb-2",
									children: "Today's Expense"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[26px] font-black text-rose-700 leading-none",
									children: FINANCE_METRICS.todayExpense
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-white border border-border/60 rounded-3xl p-5 shadow-sm flex flex-col justify-between col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2",
									children: "Outstanding Payments"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-3xl font-black text-slate-900",
									children: FINANCE_METRICS.outstanding
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-white border border-border/60 rounded-3xl p-5 shadow-sm flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 leading-tight",
									children: "Pending Client Payments"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[22px] font-black text-blue-500 mt-2",
									children: FINANCE_METRICS.pendingClient
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-white border border-border/60 rounded-3xl p-5 shadow-sm flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 leading-tight",
									children: "Pending Vendor Payments"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[22px] font-black text-amber-500 mt-2",
									children: FINANCE_METRICS.pendingVendor
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-slate-900",
								children: "Cash Flow"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-slate-500",
								children: "Revenue vs expense (₹ thousands)"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-[200px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
									data: CASH_FLOW,
									margin: {
										top: 5,
										right: 0,
										left: -20,
										bottom: 0
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
											id: "colorRev",
											x1: "0",
											y1: "0",
											x2: "0",
											y2: "1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "5%",
												stopColor: "#10b981",
												stopOpacity: .3
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "95%",
												stopColor: "#10b981",
												stopOpacity: 0
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
											id: "colorExp",
											x1: "0",
											y1: "0",
											x2: "0",
											y2: "1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "5%",
												stopColor: "#e11d48",
												stopOpacity: .3
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "95%",
												stopColor: "#e11d48",
												stopOpacity: 0
											})]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											strokeDasharray: "3 3",
											vertical: false,
											stroke: "#f1f5f9"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "month",
											axisLine: false,
											tickLine: false,
											tick: {
												fontSize: 10,
												fill: "#64748b"
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											axisLine: false,
											tickLine: false,
											tick: {
												fontSize: 10,
												fill: "#64748b"
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
											borderRadius: "8px",
											border: "none",
											boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
										} }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
											type: "monotone",
											dataKey: "revenue",
											stroke: "#10b981",
											strokeWidth: 2,
											fillOpacity: 1,
											fill: "url(#colorRev)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
											type: "monotone",
											dataKey: "expense",
											stroke: "#e11d48",
											strokeWidth: 2,
											fillOpacity: 1,
											fill: "url(#colorExp)"
										})
									]
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-slate-900",
								children: "Profit Trend"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-slate-500",
								children: "Net profit per month"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-[200px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
									data: PROFIT_TREND,
									margin: {
										top: 5,
										right: 0,
										left: -20,
										bottom: 0
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
											id: "colorProfit",
											x1: "0",
											y1: "0",
											x2: "0",
											y2: "1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "5%",
												stopColor: "#3b82f6",
												stopOpacity: .3
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "95%",
												stopColor: "#3b82f6",
												stopOpacity: 0
											})]
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											strokeDasharray: "3 3",
											vertical: false,
											stroke: "#f1f5f9"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "month",
											axisLine: false,
											tickLine: false,
											tick: {
												fontSize: 10,
												fill: "#64748b"
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											axisLine: false,
											tickLine: false,
											tick: {
												fontSize: 10,
												fill: "#64748b"
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
											borderRadius: "8px",
											border: "none",
											boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
										} }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
											type: "monotone",
											dataKey: "profit",
											stroke: "#3b82f6",
											strokeWidth: 2,
											fillOpacity: 1,
											fill: "url(#colorProfit)"
										})
									]
								})
							})
						})]
					})
				]
			})
		})
	});
}
function TasksAndClients() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-1 md:grid-cols-2 gap-12 mb-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CollapsibleSection, {
			section: "Section 09",
			title: "Tasks & Deadlines",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold text-slate-900",
						children: "My Tasks & Team Tasks"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-slate-500",
						children: "Active tasks across projects"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: MY_TASKS.map((task, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-0.5",
							children: task.status === "completed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-[#00A56C]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-5 w-5 text-slate-300" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("text-[13px] font-bold leading-tight mb-1", task.status === "completed" ? "text-slate-400 line-through" : "text-slate-900"),
								children: task.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] text-slate-500",
								children: [
									task.assignee,
									" · due ",
									task.due
								]
							})]
						})]
					}, i))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-rose-50 border border-rose-100 rounded-3xl p-5 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-bold text-rose-600 uppercase tracking-wider mb-1",
						children: "Overdue"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[26px] font-black text-rose-700 leading-none",
						children: "14"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-emerald-50 border border-emerald-100 rounded-3xl p-5 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-bold text-emerald-600 uppercase tracking-wider mb-1",
						children: "Completed Today"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[26px] font-black text-emerald-700 leading-none",
						children: "38"
					})]
				})]
			})]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CollapsibleSection, {
			section: "Section 10",
			title: "Client Management",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4 mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border/60 rounded-3xl p-5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1",
							children: "Total Clients"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[26px] font-black text-slate-900 leading-none",
							children: "78"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border/60 rounded-3xl p-5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1",
							children: "Active Clients"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[26px] font-black text-[#00A56C] leading-none",
							children: "64"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border/60 rounded-3xl p-5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1",
							children: "New This Month"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[26px] font-black text-blue-500 leading-none",
							children: "6"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border/60 rounded-3xl p-5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1",
							children: "Satisfaction"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[26px] font-black text-amber-500 leading-none",
							children: ["4.6", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[14px] text-slate-400",
								children: "/5"
							})]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold text-slate-900",
						children: "Key Accounts"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-slate-500",
						children: "Top revenue generating clients"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: KEY_ACCOUNTS.map((account, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[14px] font-bold text-indigo-700",
								children: account.name.charAt(0)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] font-bold text-slate-900 leading-tight",
								children: account.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] text-slate-500",
								children: ["Client since ", account.since]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("text-[10px] font-bold px-2 py-0.5 rounded-md border", account.health === "Good" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-amber-50 text-amber-600 border-amber-100"),
							children: account.health
						})]
					}, i))
				})]
			})]
		}) })]
	});
}
function HRAndNews() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleSection, {
			section: "Section 11",
			title: "HR Updates",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-4 w-4 text-rose-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[13px] font-bold text-slate-900",
								children: "Upcoming Birthdays"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: HR_UPDATES.birthdays.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between items-center text-[11px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-slate-700",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: item.date
								})]
							}, i))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-4 w-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[13px] font-bold text-slate-900",
								children: "Work Anniversaries"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: HR_UPDATES.anniversaries.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between items-center text-[11px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-slate-700",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: item.tenure
								})]
							}, i))
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-border/60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4 w-4 text-blue-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[13px] font-bold text-slate-900",
								children: "Interview Schedule"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: HR_UPDATES.interviews.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between items-center text-[11px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-slate-700",
									children: item.role
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: item.time
								})]
							}, i))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "h-4 w-4 text-[#00A56C]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[13px] font-bold text-slate-900",
								children: "New Joining"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: HR_UPDATES.joining.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between items-center text-[11px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-slate-700",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: item.date
								})]
							}, i))
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-border/60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4 text-rose-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[13px] font-bold text-slate-900",
								children: "Employee Exit"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: HR_UPDATES.exit.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between items-center text-[11px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-slate-700",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: item.date
								})]
							}, i))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-indigo-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[13px] font-bold text-slate-900",
								children: "Probation Ending"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: HR_UPDATES.probation.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between items-center text-[11px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-slate-700",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: item.date
								})]
							}, i))
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-border/60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[13px] font-bold text-slate-900",
								children: "Document Expiry"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: HR_UPDATES.document.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between items-center text-[11px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-slate-700",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-500",
									children: item.date
								})]
							}, i))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "h-4 w-4 text-blue-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[13px] font-bold text-slate-900",
								children: "Policy Updates"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: HR_UPDATES.policies.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between items-center text-[11px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-slate-700",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-emerald-600 font-bold bg-emerald-50 px-1.5 rounded",
									children: item.status
								})]
							}, i))
						})] })]
					})
				]
			})
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CollapsibleSection, {
			section: "Section 12",
			title: "Company News",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4 mb-6",
				children: COMPANY_NEWS.map((news, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[15px] font-bold text-slate-900 mb-1",
						children: news.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12px] text-slate-500",
						children: news.desc
					})]
				}, i))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-slate-900 rounded-3xl p-8 text-white shadow-sm relative overflow-hidden flex flex-col justify-between h-48",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4",
					children: "Today's motivation"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xl font-bold leading-snug",
					children: "“Discipline compounds faster than talent. Show up, ship, repeat.”"
				})] })
			})]
		}) })]
	});
}
var IconMap = {
	UserPlus,
	CheckCircle: CircleCheckBig,
	CheckSquare: SquareCheckBig,
	IndianRupee,
	Briefcase,
	Rocket,
	Banknote
};
function ActivityAndAI() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleSection, {
				section: "Section 13",
				title: "Today's Calendar",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm h-[320px] overflow-y-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-slate-500 mb-6",
						children: "Meetings · birthdays · leaves · interviews · deadlines"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-between items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] font-bold text-slate-900",
									children: "Board sync"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-500",
									children: "Meeting"
								})] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-between items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] font-bold text-slate-900",
									children: "Frontend Engineer"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-500",
									children: "Interview"
								})] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-between items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] font-bold text-slate-900",
									children: "Neha Patel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-500",
									children: "Birthday"
								})] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-between items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] font-bold text-slate-900",
									children: "Kite Social Launch"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-500",
									children: "Deadline"
								})] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-between items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] font-bold text-slate-900",
									children: "Priya Nair – Sick"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-500",
									children: "Leave"
								})] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-between items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] font-bold text-slate-900",
									children: "Monthly town hall"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-500",
									children: "Event"
								})] })
							})
						]
					})]
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleSection, {
				section: "Section 14",
				title: "Recent Activity",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm h-[320px] overflow-y-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-slate-500 mb-6",
						children: "Everything happening across the company"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-5",
						children: ACTIVITY_FEED.map((activity, i) => {
							const Icon = IconMap[activity.icon];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("mt-0.5 p-1.5 rounded-full bg-opacity-10 shrink-0", activity.color === "emerald" ? "bg-emerald-500 text-emerald-600" : activity.color === "indigo" ? "bg-indigo-500 text-indigo-600" : activity.color === "amber" ? "bg-amber-500 text-amber-600" : "bg-blue-500 text-blue-600"),
									children: Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3 w-3" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[12px] font-medium text-slate-900 leading-snug",
									children: activity.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-slate-500 mt-0.5",
									children: activity.time
								})] })]
							}, i);
						})
					})]
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleSection, {
				section: "Section 15",
				title: "AI Summary",
				titleIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 text-indigo-500" }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-indigo-900 rounded-3xl p-6 text-white shadow-sm h-[320px] overflow-y-auto relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-indigo-200 mb-6",
							children: "Generated from attendance, sales, finance and delivery signals"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-bold text-indigo-300 uppercase tracking-wider mb-1",
									children: "Sales Prediction"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[28px] font-black text-white leading-none mb-1",
									children: AI_SUMMARY.prediction
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-indigo-300",
									children: AI_SUMMARY.predictionText
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-bold text-indigo-300 uppercase tracking-wider mb-3",
							children: "Suggested Actions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: AI_SUMMARY.actions.map((action, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 text-indigo-400 mt-0.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[12px] font-medium leading-snug text-indigo-100",
									children: action
								})]
							}, i))
						})] })
					]
				})
			}) })
		]
	});
}
function OverallKPIs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleSection, {
				section: "Section 16",
				title: "Overall KPIs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm mb-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-8",
						children: OVERALL_KPIS.map((kpi, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2",
								children: kpi.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xl font-black text-slate-900 leading-none",
								children: kpi.value
							}),
							kpi.value.includes("%") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1 w-full bg-slate-100 rounded-full mt-3 overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-[#00A56C] rounded-full",
									style: { width: kpi.value }
								})
							})
						] }, i))
					})
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleSection, {
			section: "Section 17",
			title: "Status & Targets",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-4 gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-3 bg-amber-50 text-amber-500 rounded-2xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudSun, { className: "h-6 w-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[15px] font-bold text-slate-900",
							children: "31°C · Ahmedabad"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-slate-500",
							children: "Partly cloudy · humidity 68%"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-3 bg-blue-50 text-blue-500 rounded-2xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-6 w-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[15px] font-bold text-slate-900",
							children: "07:13:03"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-slate-500",
							children: "Until office closes at 7:00 PM"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-border/60 rounded-3xl p-6 shadow-sm flex items-center gap-4 md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-3 bg-emerald-50 text-emerald-600 rounded-2xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "h-6 w-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-end mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[15px] font-bold text-slate-900",
									children: "Sales Target"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-bold text-emerald-600",
									children: "82% achieved"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2 w-full bg-slate-100 rounded-full overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-emerald-500 rounded-full",
									style: { width: "82%" }
								})
							})]
						})]
					})
				]
			})
		}) })]
	});
}
function Dashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompanyHealth, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmployeePerformance, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttendanceAnalytics, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DepartmentStatus, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectDelivery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesOverview, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinanceOverview, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TasksAndClients, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HRAndNews, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityAndAI, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverallKPIs, {})
		]
	});
}
var AVAILABLE_DEPARTMENTS = [
	"Development",
	"Sales",
	"Creative",
	"HR",
	"Product",
	"Marketing",
	"Finance"
];
var EMPLOYEES = [
	{
		id: "EMP-001",
		name: "Riya Shah",
		role: "Senior Frontend Engineer",
		department: "Development",
		status: "Active",
		email: "riya.shah@hkdigiverse.com",
		phone: "+91 98765 43210",
		joinDate: "2021-04-12",
		avatar: "https://i.pravatar.cc/150?u=riya",
		performanceScore: 98
	},
	{
		id: "EMP-002",
		name: "Aarav Mehta",
		role: "Sales Director",
		department: "Sales",
		status: "Active",
		email: "aarav.mehta@hkdigiverse.com",
		phone: "+91 98765 43211",
		joinDate: "2020-02-15",
		avatar: "https://i.pravatar.cc/150?u=aarav",
		performanceScore: 95
	},
	{
		id: "EMP-003",
		name: "Neha Patel",
		role: "UI/UX Lead",
		department: "Creative",
		status: "On Leave",
		email: "neha.patel@hkdigiverse.com",
		phone: "+91 98765 43212",
		joinDate: "2022-08-01",
		avatar: "https://i.pravatar.cc/150?u=neha",
		performanceScore: 92
	},
	{
		id: "EMP-004",
		name: "Vikram Singh",
		role: "Backend Developer",
		department: "Development",
		status: "Remote",
		email: "vikram.singh@hkdigiverse.com",
		phone: "+91 98765 43213",
		joinDate: "2023-01-10",
		avatar: "https://i.pravatar.cc/150?u=vikram",
		performanceScore: 88
	},
	{
		id: "EMP-005",
		name: "Ananya Desai",
		role: "HR Manager",
		department: "HR",
		status: "Active",
		email: "ananya.desai@hkdigiverse.com",
		phone: "+91 98765 43214",
		joinDate: "2019-11-20",
		avatar: "https://i.pravatar.cc/150?u=ananya",
		performanceScore: 94
	},
	{
		id: "EMP-006",
		name: "Rahul Verma",
		role: "Product Manager",
		department: "Product",
		status: "Active",
		email: "rahul.verma@hkdigiverse.com",
		phone: "+91 98765 43215",
		joinDate: "2021-06-05",
		avatar: "https://i.pravatar.cc/150?u=rahul",
		performanceScore: 91
	},
	{
		id: "EMP-007",
		name: "Priya Sharma",
		role: "Marketing Specialist",
		department: "Marketing",
		status: "Remote",
		email: "priya.sharma@hkdigiverse.com",
		phone: "+91 98765 43216",
		joinDate: "2022-03-15",
		avatar: "https://i.pravatar.cc/150?u=priya",
		performanceScore: 86
	},
	{
		id: "EMP-008",
		name: "Karan Patel",
		role: "QA Engineer",
		department: "Development",
		status: "On Leave",
		email: "karan.patel@hkdigiverse.com",
		phone: "+91 98765 43217",
		joinDate: "2023-05-12",
		avatar: "https://i.pravatar.cc/150?u=karan",
		performanceScore: 82
	},
	{
		id: "EMP-009",
		name: "Sneha Reddy",
		role: "Account Executive",
		department: "Sales",
		status: "Active",
		email: "sneha.reddy@hkdigiverse.com",
		phone: "+91 98765 43218",
		joinDate: "2022-11-01",
		avatar: "https://i.pravatar.cc/150?u=sneha",
		performanceScore: 89
	},
	{
		id: "EMP-010",
		name: "Dev Trivedi",
		role: "Creative Director",
		department: "Creative",
		status: "Active",
		email: "dev.trivedi@hkdigiverse.com",
		phone: "+91 98765 43219",
		joinDate: "2018-09-25",
		avatar: "https://i.pravatar.cc/150?u=dev",
		performanceScore: 97
	},
	{
		id: "EMP-011",
		name: "Siddharth Rao",
		role: "Financial Analyst",
		department: "Finance",
		status: "Active",
		email: "siddharth.rao@hkdigiverse.com",
		phone: "+91 98765 43220",
		joinDate: "2020-07-14",
		avatar: "https://i.pravatar.cc/150?u=siddharth",
		performanceScore: 93
	},
	{
		id: "EMP-012",
		name: "Kavya Iyer",
		role: "Content Writer",
		department: "Marketing",
		status: "Remote",
		email: "kavya.iyer@hkdigiverse.com",
		phone: "+91 98765 43221",
		joinDate: "2023-02-28",
		avatar: "https://i.pravatar.cc/150?u=kavya",
		performanceScore: 85
	}
];
var DepartmentContext = (0, import_react.createContext)(void 0);
function DepartmentProvider({ children }) {
	const [departments, setDepartments] = (0, import_react.useState)(() => {
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem("hrms_departments");
			if (saved) return JSON.parse(saved);
		}
		return AVAILABLE_DEPARTMENTS;
	});
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") localStorage.setItem("hrms_departments", JSON.stringify(departments));
	}, [departments]);
	const addDepartment = (dept) => {
		if (!departments.includes(dept) && dept.trim() !== "") setDepartments([...departments, dept.trim()]);
	};
	const removeDepartment = (dept) => {
		setDepartments(departments.filter((d) => d !== dept));
	};
	const updateDepartment = (oldDept, newDept) => {
		if (newDept.trim() === "") return;
		setDepartments(departments.map((d) => d === oldDept ? newDept.trim() : d));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DepartmentContext.Provider, {
		value: {
			departments,
			addDepartment,
			removeDepartment,
			updateDepartment
		},
		children
	});
}
function useDepartments() {
	const context = (0, import_react.useContext)(DepartmentContext);
	if (context === void 0) throw new Error("useDepartments must be used within a DepartmentProvider");
	return context;
}
function EmployeeProfileModal({ employee, onClose }) {
	const joinDateObj = new Date(employee.joinDate);
	const diffTime = Math.abs((/* @__PURE__ */ new Date()).getTime() - joinDateObj.getTime());
	const diffDays = Math.ceil(diffTime / 864e5);
	const diffMonths = Math.floor(diffDays / 30);
	const diffYears = Math.floor(diffMonths / 12);
	const tenureText = diffYears > 0 ? `${diffYears} year${diffYears > 1 ? "s" : ""}, ${diffMonths % 12} month${diffMonths % 12 !== 1 ? "s" : ""}` : `${diffMonths} month${diffMonths !== 1 ? "s" : ""}`;
	const attendanceRate = Math.min(100, Math.max(85, Math.floor(employee.performanceScore + (Math.random() * 5 - 2))));
	const projectsCompleted = Math.floor(diffMonths * 1.5);
	Math.floor(diffMonths * 1.2);
	const awards = Math.floor(diffYears * 1.5);
	const getStatusColor = (status) => {
		switch (status) {
			case "Active": return "bg-emerald-500 text-white";
			case "On Leave": return "bg-amber-500 text-white";
			case "Remote": return "bg-blue-500 text-white";
			default: return "bg-slate-500 text-white";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-h-full items-center justify-center p-4 text-center sm:p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden flex flex-col text-left animate-in zoom-in-95 duration-200 relative my-auto",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-32 shrink-0 bg-gradient-to-r from-emerald-500 to-teal-600 relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/30 text-white rounded-full transition-colors backdrop-blur-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-8 pb-8 pt-0 relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row gap-6 items-start md:items-end -mt-12 mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: employee.avatar,
									alt: employee.name,
									className: "w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-lg bg-white"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("absolute -bottom-2 -right-2 px-3 py-1 rounded-xl text-[10px] font-bold border-2 border-white shadow-sm", getStatusColor(employee.status)),
									children: employee.status
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl font-black text-slate-900 tracking-tight",
									children: employee.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[15px] font-medium text-slate-500",
									children: [
										employee.role,
										" · ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#00A56C]",
											children: employee.department
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2 w-full md:w-auto mt-4 md:mt-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#00A56C] hover:bg-[#00A56C]/90 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-sm shadow-emerald-500/20 active:scale-95 text-[13px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4" }), " Message"]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3",
								children: "Contact Information"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 text-[13px] text-slate-600 font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-2 bg-slate-50 rounded-lg text-slate-400",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4" })
										}), employee.email]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 text-[13px] text-slate-600 font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-2 bg-slate-50 rounded-lg text-slate-400",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4" })
										}), employee.phone]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 text-[13px] text-slate-600 font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-2 bg-slate-50 rounded-lg text-slate-400",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4" })
										}), "Mumbai, India"]
									})
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3",
								children: "Employment"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 text-[13px] text-slate-600 font-medium",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "p-2 bg-slate-50 rounded-lg text-slate-400",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-4 h-4" })
											}),
											"Joined ",
											employee.joinDate
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 text-[13px] text-slate-600 font-medium",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "p-2 bg-slate-50 rounded-lg text-slate-400",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-4 h-4" })
											}),
											"Tenure: ",
											tenureText
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 text-[13px] text-slate-600 font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-2 bg-slate-50 rounded-lg text-slate-400",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "w-4 h-4" })
										}), "Full-time Employee"]
									})
								]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-2 space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3",
								children: "Lifetime Statistics"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 sm:grid-cols-4 gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-center items-center text-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "w-5 h-5 text-indigo-500 mb-2" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-2xl font-black text-slate-900 leading-none mb-1",
												children: employee.performanceScore
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider",
												children: "Perf. Score"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-center items-center text-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-5 h-5 text-emerald-500 mb-2" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-2xl font-black text-slate-900 leading-none mb-1",
												children: [attendanceRate, "%"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider",
												children: "Attendance"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-center items-center text-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "w-5 h-5 text-amber-500 mb-2" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-2xl font-black text-slate-900 leading-none mb-1",
												children: projectsCompleted
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider",
												children: "Projects"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-center items-center text-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "w-5 h-5 text-rose-500 mb-2" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-2xl font-black text-slate-900 leading-none mb-1",
												children: awards
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider",
												children: "Awards"
											})
										]
									})
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3",
								children: "Recent Highlights"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3 items-start bg-white border border-slate-100 p-3 rounded-xl shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-2 bg-emerald-50 text-emerald-500 rounded-lg shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "w-4 h-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] font-bold text-slate-900",
										children: "Employee of the Month"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-slate-500 mt-0.5",
										children: "Awarded last month for outstanding contribution to the core product."
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3 items-start bg-white border border-slate-100 p-3 rounded-xl shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-2 bg-blue-50 text-blue-500 rounded-lg shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] font-bold text-slate-900",
										children: "Completed Leadership Training"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-slate-500 mt-0.5",
										children: "Successfully finished the Level 2 management curriculum."
									})] })]
								})]
							})] })]
						})]
					})]
				})]
			})
		})
	});
}
function EmployeeFormModal({ isOpen, onClose, onSubmit, initialData }) {
	const { departments } = useDepartments();
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		role: "",
		department: "Development",
		email: "",
		phone: "",
		status: "Active",
		joinDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] || ""
	});
	(0, import_react.useEffect)(() => {
		if (initialData) setFormData(initialData);
		else setFormData({
			name: "",
			role: "",
			department: "Development",
			email: "",
			phone: "",
			status: "Active",
			joinDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] || ""
		});
	}, [initialData, isOpen]);
	if (!isOpen) return null;
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.name || !formData.email || !formData.role) {
			toast.error("Please fill in all required fields.");
			return;
		}
		onSubmit(formData);
		onClose();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[60] overflow-y-auto bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-h-full items-center justify-center p-4 text-center sm:p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col text-left animate-in zoom-in-95 duration-200 relative my-auto",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-8 py-6 border-b border-slate-100 bg-slate-50/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-black text-slate-900",
						children: initialData ? "Edit Employee" : "Add New Employee"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-slate-500 mt-1",
						children: initialData ? "Update employee details in the directory." : "Add a new member to your organization."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "p-8 space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[12px] font-bold text-slate-700 uppercase tracking-wider",
									children: "Full Name *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									required: true,
									value: formData.name,
									onChange: (e) => setFormData({
										...formData,
										name: e.target.value
									}),
									className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A56C]/20 focus:border-[#00A56C]/50 transition-all",
									placeholder: "e.g. John Doe"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[12px] font-bold text-slate-700 uppercase tracking-wider",
									children: "Email Address *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									required: true,
									value: formData.email,
									onChange: (e) => setFormData({
										...formData,
										email: e.target.value
									}),
									className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A56C]/20 focus:border-[#00A56C]/50 transition-all",
									placeholder: "john@example.com"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[12px] font-bold text-slate-700 uppercase tracking-wider",
									children: "Job Role *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									required: true,
									value: formData.role,
									onChange: (e) => setFormData({
										...formData,
										role: e.target.value
									}),
									className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A56C]/20 focus:border-[#00A56C]/50 transition-all",
									placeholder: "e.g. Senior Designer"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[12px] font-bold text-slate-700 uppercase tracking-wider",
									children: "Department"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: formData.department,
									onChange: (e) => setFormData({
										...formData,
										department: e.target.value
									}),
									className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A56C]/20 focus:border-[#00A56C]/50 transition-all",
									children: departments.map((dept) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: dept,
										children: dept
									}, dept))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[12px] font-bold text-slate-700 uppercase tracking-wider",
									children: "Phone Number"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "tel",
									value: formData.phone,
									onChange: (e) => setFormData({
										...formData,
										phone: e.target.value
									}),
									className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A56C]/20 focus:border-[#00A56C]/50 transition-all",
									placeholder: "+1 234 567 890"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[12px] font-bold text-slate-700 uppercase tracking-wider",
									children: "Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: formData.status,
									onChange: (e) => setFormData({
										...formData,
										status: e.target.value
									}),
									className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A56C]/20 focus:border-[#00A56C]/50 transition-all",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Active",
											children: "Active"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Remote",
											children: "Remote"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "On Leave",
											children: "On Leave"
										})
									]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-6 border-t border-slate-100 flex justify-end gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "px-6 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "px-6 py-2.5 text-sm font-bold text-white bg-[#00A56C] hover:bg-[#00A56C]/90 rounded-xl transition-all shadow-sm shadow-emerald-500/20 active:scale-95",
							children: initialData ? "Save Changes" : "Add Employee"
						})]
					})]
				})]
			})
		})
	});
}
var ORG_DATA = {
	id: "CEO-01",
	name: "Arjun Mehta",
	role: "Chief Executive Officer",
	department: "Executive",
	avatar: "https://i.pravatar.cc/150?u=arjun",
	status: "Active",
	children: [
		{
			id: "VP-01",
			name: "Riya Shah",
			role: "VP of Engineering",
			department: "Engineering",
			avatar: "https://i.pravatar.cc/150?u=riya",
			status: "Active",
			children: [{
				id: "ENG-01",
				name: "Vikram Singh",
				role: "Frontend Lead",
				department: "Engineering",
				avatar: "https://i.pravatar.cc/150?u=vikram",
				status: "Remote",
				children: [{
					id: "ENG-01-1",
					name: "Rahul Verma",
					role: "Frontend Developer",
					department: "Engineering",
					avatar: "https://i.pravatar.cc/150?u=rahul",
					status: "Active"
				}, {
					id: "ENG-01-2",
					name: "Sneha Reddy",
					role: "UI Engineer",
					department: "Engineering",
					avatar: "https://i.pravatar.cc/150?u=sneha",
					status: "Active"
				}]
			}, {
				id: "ENG-02",
				name: "Karan Patel",
				role: "Backend Lead",
				department: "Engineering",
				avatar: "https://i.pravatar.cc/150?u=karan",
				status: "On Leave"
			}]
		},
		{
			id: "VP-02",
			name: "Aarav Mehta",
			role: "VP of Sales",
			department: "Sales",
			avatar: "https://i.pravatar.cc/150?u=aarav",
			status: "Active",
			children: [{
				id: "SAL-01",
				name: "Neha Patel",
				role: "Regional Director",
				department: "Sales",
				avatar: "https://i.pravatar.cc/150?u=neha",
				status: "Active",
				children: [{
					id: "SAL-01-1",
					name: "Dev Trivedi",
					role: "Account Executive",
					department: "Sales",
					avatar: "https://i.pravatar.cc/150?u=dev",
					status: "Active"
				}, {
					id: "SAL-01-2",
					name: "Kavya Iyer",
					role: "Sales Representative",
					department: "Sales",
					avatar: "https://i.pravatar.cc/150?u=kavya",
					status: "Remote"
				}]
			}]
		},
		{
			id: "VP-03",
			name: "Ananya Desai",
			role: "VP of HR",
			department: "Human Resources",
			avatar: "https://i.pravatar.cc/150?u=ananya",
			status: "Active",
			children: [{
				id: "HR-01",
				name: "Priya Sharma",
				role: "Recruitment Lead",
				department: "Human Resources",
				avatar: "https://i.pravatar.cc/150?u=priya",
				status: "Active"
			}, {
				id: "HR-02",
				name: "Siddharth Rao",
				role: "Culture Manager",
				department: "Human Resources",
				avatar: "https://i.pravatar.cc/150?u=siddharth",
				status: "Remote"
			}]
		}
	]
};
var EmployeeContext = (0, import_react.createContext)(void 0);
function EmployeeProvider({ children }) {
	const [employees, setEmployees] = (0, import_react.useState)(() => {
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem("hrms_employees");
			if (saved) return JSON.parse(saved);
		}
		return EMPLOYEES;
	});
	const [treeData, setTreeData] = (0, import_react.useState)(() => {
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem("hrms_org_tree");
			if (saved) return JSON.parse(saved);
		}
		return ORG_DATA;
	});
	(0, import_react.useEffect)(() => {
		localStorage.setItem("hrms_employees", JSON.stringify(employees));
	}, [employees]);
	(0, import_react.useEffect)(() => {
		localStorage.setItem("hrms_org_tree", JSON.stringify(treeData));
	}, [treeData]);
	const addEmployee = (employee) => {
		setEmployees((prev) => [employee, ...prev]);
	};
	const updateEmployee = (id, updates) => {
		setEmployees((prev) => prev.map((emp) => emp.id === id ? {
			...emp,
			...updates
		} : emp));
	};
	const deleteEmployee = (id) => {
		setEmployees((prev) => prev.filter((emp) => emp.id !== id));
		const newTree = JSON.parse(JSON.stringify(treeData));
		const removeNode = (node) => {
			if (node.children) {
				const index = node.children.findIndex((c) => c.id === id);
				if (index !== -1) {
					node.children.splice(index, 1);
					return true;
				}
				for (const child of node.children) if (removeNode(child)) return true;
			}
			return false;
		};
		if (removeNode(newTree)) setTreeData(newTree);
	};
	const updateTree = (newTree) => {
		setTreeData(newTree);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmployeeContext.Provider, {
		value: {
			employees,
			treeData,
			addEmployee,
			updateEmployee,
			deleteEmployee,
			updateTree
		},
		children
	});
}
function useEmployeesContext() {
	const context = (0, import_react.useContext)(EmployeeContext);
	if (context === void 0) throw new Error("useEmployeesContext must be used within an EmployeeProvider");
	return context;
}
function EmployeeList() {
	const { employees, addEmployee, updateEmployee, deleteEmployee } = useEmployeesContext();
	const [viewMode, setViewMode] = (0, import_react.useState)("grid");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedDept, setSelectedDept] = (0, import_react.useState)(null);
	const [selectedEmployee, setSelectedEmployee] = (0, import_react.useState)(null);
	const [isFormOpen, setIsFormOpen] = (0, import_react.useState)(false);
	const [editingEmployee, setEditingEmployee] = (0, import_react.useState)(null);
	const { departments } = useDepartments();
	const filteredEmployees = employees.filter((emp) => {
		const matchesSearch = emp.name.toLowerCase().includes(searchQuery.toLowerCase()) || emp.role.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesDept = selectedDept ? emp.department === selectedDept : true;
		return matchesSearch && matchesDept;
	});
	const getStatusColor = (status) => {
		switch (status) {
			case "Active": return "bg-emerald-500";
			case "On Leave": return "bg-amber-500";
			case "Remote": return "bg-blue-500";
			default: return "bg-slate-500";
		}
	};
	const handleFormSubmit = (formData) => {
		if (editingEmployee) {
			updateEmployee(editingEmployee.id, formData);
			toast.success("Employee updated successfully.");
		} else {
			const newEmployee = {
				...formData,
				id: `EMP-${Math.floor(Math.random() * 1e3).toString().padStart(3, "0")}`,
				avatar: `https://i.pravatar.cc/150?u=${formData.name?.split(" ")[0]?.toLowerCase() || "new"}`,
				performanceScore: 85
			};
			addEmployee(newEmployee);
			toast.success("New employee added.");
		}
		setIsFormOpen(false);
		setEditingEmployee(null);
	};
	const handleDeleteEmployee = (id, name) => {
		if (window.confirm(`Are you sure you want to completely delete ${name} from the company records?`)) {
			deleteEmployee(id);
			toast.success(`${name} has been deleted.`);
		}
	};
	const openAddForm = () => {
		setEditingEmployee(null);
		setIsFormOpen(true);
	};
	const openEditForm = (emp) => {
		setEditingEmployee(emp);
		setIsFormOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full max-w-[1400px] mx-auto animate-in fade-in zoom-in-95 duration-300",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-[28px] font-black text-slate-900 tracking-tight mb-2",
					children: "Employee Directory"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[14px] text-slate-500",
					children: "Manage your team members and their account permissions here."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: openAddForm,
					className: "flex items-center gap-2 bg-[#00A56C] hover:bg-[#00A56C]/90 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-sm shadow-emerald-500/20 active:scale-95",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" }), "Add Employee"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-border/60 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex w-full md:w-auto flex-1 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1 max-w-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Search by name or role...",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							className: "w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-[13px] focus:outline-none focus:ring-2 focus:ring-[#00A56C]/20 transition-all font-medium"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2",
						children: departments.map((dept) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSelectedDept(selectedDept === dept ? null : dept),
							className: cn("px-4 py-2 rounded-xl text-[12px] font-bold transition-all border", selectedDept === dept ? "bg-[#00A56C] text-white border-[#00A56C]" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"),
							children: dept
						}, dept))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 bg-slate-100 p-1 rounded-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setViewMode("grid"),
						className: cn("p-2 rounded-lg transition-all", viewMode === "grid" ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-900"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "w-4 h-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setViewMode("list"),
						className: cn("p-2 rounded-lg transition-all", viewMode === "list" ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-900"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "w-4 h-4" })
					})]
				})]
			}),
			viewMode === "grid" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
				children: filteredEmployees.map((emp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => openEditForm(emp),
							className: "p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 rounded-full transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "w-4 h-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => handleDeleteEmployee(emp.id, emp.name),
							className: "p-2 text-slate-400 hover:bg-red-50 hover:text-red-600 rounded-full transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-4 h-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: emp.avatar,
									alt: emp.name,
									className: "w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white", getStatusColor(emp.status)),
									children: emp.status === "Active" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full animate-ping bg-emerald-400 opacity-75" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[16px] font-black text-slate-900 mb-1",
								children: emp.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] font-medium text-slate-500 mb-4",
								children: emp.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-lg mb-6",
								children: emp.department
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSelectedEmployee(emp),
								className: "w-full bg-[#00A56C]/10 text-[#00A56C] hover:bg-[#00A56C]/20 py-2.5 rounded-xl text-[12px] font-bold transition-colors",
								children: "View Profile"
							})
						]
					})]
				}, emp.id))
			}),
			viewMode === "list" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-white border border-border/60 rounded-3xl overflow-hidden shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left border-collapse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "bg-slate-50/50 border-b border-slate-100",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider",
									children: "Employee"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider",
									children: "Department"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider",
									children: "Contact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider",
									children: "Joined"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-right",
									children: "Actions"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: filteredEmployees.map((emp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-slate-50 hover:bg-slate-50/50 transition-colors group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: emp.avatar,
											alt: emp.name,
											className: "w-10 h-10 rounded-full object-cover"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[14px] font-bold text-slate-900",
											children: emp.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[12px] text-slate-500",
											children: emp.role
										})] })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-lg",
										children: emp.department
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("w-2 h-2 rounded-full", getStatusColor(emp.status)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[13px] font-medium text-slate-700",
											children: emp.status
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-1 text-[12px] text-slate-500",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-3 h-3" }),
												" ",
												emp.email
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3 h-3" }),
												" ",
												emp.phone
											]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[13px] font-medium text-slate-700",
										children: emp.joinDate
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4 text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-end gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setSelectedEmployee(emp),
											className: "text-[12px] font-bold text-[#00A56C] hover:text-[#00A56C]/80 px-3 py-1.5 rounded-lg hover:bg-[#00A56C]/10 transition-colors opacity-0 group-hover:opacity-100",
											children: "View"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => openEditForm(emp),
											className: "text-[12px] font-bold text-blue-600 hover:text-blue-800 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors opacity-0 group-hover:opacity-100",
											children: "Edit"
										})]
									})
								})
							]
						}, emp.id)) })]
					})
				})
			}),
			selectedEmployee && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmployeeProfileModal, {
				employee: selectedEmployee,
				onClose: () => setSelectedEmployee(null)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmployeeFormModal, {
				isOpen: isFormOpen,
				onClose: () => setIsFormOpen(false),
				onSubmit: handleFormSubmit,
				initialData: editingEmployee
			})
		]
	});
}
function ManageDepartmentsModal({ isOpen, onClose }) {
	const { departments, addDepartment, removeDepartment } = useDepartments();
	const [newDept, setNewDept] = (0, import_react.useState)("");
	if (!isOpen) return null;
	const handleAdd = (e) => {
		e.preventDefault();
		if (!newDept.trim()) return;
		if (departments.includes(newDept.trim())) {
			toast.error("Department already exists");
			return;
		}
		addDepartment(newDept.trim());
		setNewDept("");
		toast.success("Department added");
	};
	const handleRemove = (dept) => {
		removeDepartment(dept);
		toast.success("Department removed");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[60] overflow-y-auto bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-h-full items-center justify-center p-4 text-center sm:p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden flex flex-col text-left animate-in zoom-in-95 duration-200 relative my-auto",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-black text-slate-900",
						children: "Manage Departments"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-slate-500 mt-1",
						children: "Add or remove organization departments."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleAdd,
						className: "flex gap-2 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: newDept,
							onChange: (e) => setNewDept(e.target.value),
							placeholder: "New department name...",
							className: "flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A56C]/20 focus:border-[#00A56C]/50 transition-all"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: !newDept.trim(),
							className: "px-4 py-2 bg-[#00A56C] hover:bg-[#00A56C]/90 text-white rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" }), "Add"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2 max-h-[40vh] overflow-y-auto pr-2",
						children: departments.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-sm text-slate-500 py-4",
							children: "No departments found."
						}) : departments.map((dept) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-bold text-slate-700",
								children: dept
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleRemove(dept),
								className: "p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors",
								title: "Remove department",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-4 h-4" })
							})]
						}, dept))
					})]
				})]
			})
		})
	});
}
function AddOrgNodeModal({ isOpen, onClose, onSubmit, parentName }) {
	const { departments } = useDepartments();
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		role: "",
		department: departments[0] || "Engineering",
		status: "Active"
	});
	if (!isOpen) return null;
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.name || !formData.role || !formData.department) {
			toast.error("Please fill in all fields");
			return;
		}
		onSubmit({
			...formData,
			avatar: `https://i.pravatar.cc/150?u=${(formData.name.split(" ")[0] || "").toLowerCase()}`
		});
		setFormData({
			name: "",
			role: "",
			department: departments[0] || "Engineering",
			status: "Active"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[60] overflow-y-auto bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-h-full items-center justify-center p-4 text-center sm:p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden flex flex-col text-left animate-in zoom-in-95 duration-200 relative my-auto",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-black text-slate-900",
						children: "Add Team Member"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-slate-500 mt-1",
						children: parentName ? `Adding new report under ${parentName}` : "Add a new member to the organization"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "p-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[12px] font-bold text-slate-700 uppercase tracking-wider",
								children: "Full Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								value: formData.name,
								onChange: (e) => setFormData({
									...formData,
									name: e.target.value
								}),
								className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A56C]/20 focus:border-[#00A56C]/50 transition-all",
								placeholder: "e.g. John Doe"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[12px] font-bold text-slate-700 uppercase tracking-wider",
								children: "Job Role"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								value: formData.role,
								onChange: (e) => setFormData({
									...formData,
									role: e.target.value
								}),
								className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A56C]/20 focus:border-[#00A56C]/50 transition-all",
								placeholder: "e.g. Senior Designer"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[12px] font-bold text-slate-700 uppercase tracking-wider",
								children: "Department"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: formData.department,
								onChange: (e) => setFormData({
									...formData,
									department: e.target.value
								}),
								className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A56C]/20 focus:border-[#00A56C]/50 transition-all",
								children: departments.map((dept) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: dept,
									children: dept
								}, dept))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[12px] font-bold text-slate-700 uppercase tracking-wider",
								children: "Status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: formData.status,
								onChange: (e) => setFormData({
									...formData,
									status: e.target.value
								}),
								className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A56C]/20 focus:border-[#00A56C]/50 transition-all",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Active",
										children: "Active"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Remote",
										children: "Remote"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "On Leave",
										children: "On Leave"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-4 flex justify-end gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onClose,
								className: "px-6 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "px-6 py-2.5 text-sm font-bold text-white bg-[#00A56C] hover:bg-[#00A56C]/90 rounded-xl transition-all shadow-sm shadow-emerald-500/20 active:scale-95",
								children: "Add Member"
							})]
						})
					]
				})]
			})
		})
	});
}
function DeleteConfirmModal({ isOpen, onClose, onConfirm, node }) {
	if (!isOpen || !node) return null;
	const hasChildren = node.children && node.children.length > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[70] overflow-y-auto bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-h-full items-center justify-center p-4 text-center sm:p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden flex flex-col text-left animate-in zoom-in-95 duration-200 relative my-auto",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-red-50/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-2 bg-red-100 text-red-600 rounded-xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "w-5 h-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-black text-slate-900",
							children: "Remove Employee"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-slate-500 mt-1",
							children: ["Confirm deletion of ", node.name]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 space-y-4",
					children: [hasChildren ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-sm font-medium",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold block mb-1",
								children: "Warning: Direct Reports Found"
							}),
							node.name,
							" has ",
							node.children.length,
							" direct report(s). Deleting them will also remove their entire team from the organization chart."
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-slate-600 text-sm",
						children: [
							"Are you sure you want to remove ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: node.name }),
							" from the organization chart? This action cannot be undone."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-4 flex justify-end gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "px-6 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								onConfirm();
								onClose();
							},
							className: "px-6 py-2.5 text-sm font-bold text-white bg-red-500 hover:bg-red-600 rounded-xl transition-all shadow-sm shadow-red-500/20 active:scale-95",
							children: hasChildren ? "Delete Entire Branch" : "Remove Employee"
						})]
					})]
				})]
			})
		})
	});
}
function UnassignedSidebar() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(true);
	const { employees, treeData } = useEmployeesContext();
	const getTreeNames = (node, names) => {
		names.add(node.name);
		if (node.children) node.children.forEach((child) => getTreeNames(child, names));
		return names;
	};
	const assignedNames = getTreeNames(treeData, /* @__PURE__ */ new Set());
	const unassignedEmployees = employees.filter((emp) => !assignedNames.has(emp.name));
	const handleDragStart = (e, id) => {
		e.dataTransfer.setData("nodeId", id);
		e.dataTransfer.effectAllowed = "move";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("absolute right-0 top-0 bottom-0 bg-white border-l border-slate-200 shadow-xl transition-all duration-300 flex flex-col z-40", isOpen ? "w-[300px]" : "w-[0px] border-l-0"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setIsOpen(!isOpen),
			className: "absolute -left-10 top-1/2 -translate-y-1/2 bg-white border border-slate-200 border-r-0 p-2 rounded-l-xl shadow-sm text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors z-50",
			children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-5 h-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-5 h-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex flex-col h-full overflow-hidden w-[300px]", !isOpen && "hidden"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 border-b border-slate-100 bg-slate-50/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-5 h-5 text-indigo-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold text-slate-900",
						children: "Unassigned Pool"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-slate-500",
					children: "Drag these employees onto a manager card in the chart to assign them."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/30",
				children: unassignedEmployees.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-full flex flex-col items-center justify-center text-center p-6 text-slate-400",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-8 h-8 text-slate-300" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-slate-600",
							children: "All caught up!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs mt-1",
							children: "Everyone is assigned to the organization chart."
						})
					]
				}) : unassignedEmployees.map((emp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					draggable: true,
					onDragStart: (e) => handleDragStart(e, emp.id),
					className: "bg-white border border-slate-200 rounded-xl p-3 shadow-sm hover:shadow-md hover:border-indigo-200 cursor-grab active:cursor-grabbing transition-all flex items-center gap-3 group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-slate-300 group-hover:text-indigo-300 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "w-4 h-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: emp.avatar,
							alt: emp.name,
							className: "w-10 h-10 rounded-full object-cover border border-slate-100 pointer-events-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold text-slate-900 truncate leading-tight mb-0.5",
								children: emp.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-slate-500 truncate",
								children: emp.role
							})]
						})
					]
				}, emp.id))
			})]
		})]
	});
}
var OrgNodeCard = ({ node, isExpanded, toggleExpand, onMoveNode, onAddClick, onDeleteClick }) => {
	const hasChildren = node.children && node.children.length > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		draggable: true,
		onDragStart: (e) => {
			e.dataTransfer.setData("nodeId", node.id);
			e.stopPropagation();
		},
		onDragOver: (e) => {
			e.preventDefault();
			e.stopPropagation();
		},
		onDrop: (e) => {
			e.preventDefault();
			e.stopPropagation();
			const draggedId = e.dataTransfer.getData("nodeId");
			if (draggedId) onMoveNode(draggedId, node.id);
		},
		className: "bg-white border border-slate-200 shadow-sm rounded-2xl p-4 w-[220px] z-10 relative transition-all hover:shadow-md hover:-translate-y-1 group inline-block mx-auto cursor-grab active:cursor-grabbing",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all z-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onPointerDown: (e) => {
					e.stopPropagation();
					e.preventDefault();
					onAddClick(node);
				},
				className: "p-1.5 bg-slate-50 hover:bg-[#00A56C] hover:text-white text-slate-400 rounded-lg shadow-sm border border-slate-200 transition-colors",
				title: "Add report under this person",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3.5 h-3.5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onPointerDown: (e) => {
					e.stopPropagation();
					e.preventDefault();
					onDeleteClick(node.id);
				},
				className: "p-1.5 bg-slate-50 hover:bg-red-500 hover:text-white text-slate-400 rounded-lg shadow-sm border border-slate-200 transition-colors",
				title: "Remove this person",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: node.avatar,
						alt: node.name,
						className: "w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm pointer-events-none"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white", node.status === "Active" ? "bg-emerald-500" : node.status === "On Leave" ? "bg-amber-500" : "bg-blue-500") })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-[14px] font-bold text-slate-900 mb-0.5",
					children: node.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-slate-500 font-medium mb-3",
					children: node.role
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "px-2.5 py-1 bg-slate-50 text-slate-600 border border-slate-100 text-[10px] font-bold uppercase tracking-wider rounded-lg mb-2 inline-block",
					children: node.department
				}),
				hasChildren && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: toggleExpand,
					className: "mt-2 w-full py-1.5 flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl transition-colors text-[11px] font-bold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-3 h-3" }),
						node.children.length,
						" Reports",
						isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "w-3 h-3 ml-1" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-3 h-3 ml-1" })
					]
				})
			]
		})]
	});
};
var OrgTree = ({ node, onMoveNode, onAddClick, onDeleteClick }) => {
	const [isExpanded, setIsExpanded] = (0, import_react.useState)(true);
	const hasChildren = node.children && node.children.length > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "relative p-[20px] pt-[20px] text-center float-left table-cell org-node",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrgNodeCard, {
			node,
			isExpanded,
			toggleExpand: () => setIsExpanded(!isExpanded),
			onMoveNode,
			onAddClick,
			onDeleteClick
		}), hasChildren && isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "pt-[20px] relative flex justify-center org-children animate-in fade-in slide-in-from-top-4 duration-300 m-0 p-0",
			children: node.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrgTree, {
				node: child,
				onMoveNode,
				onAddClick,
				onDeleteClick
			}, child.id))
		})]
	});
};
function OrgStructure() {
	const [zoom, setZoom] = (0, import_react.useState)(1);
	const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
	const [addModalOpen, setAddModalOpen] = (0, import_react.useState)(false);
	const [selectedParent, setSelectedParent] = (0, import_react.useState)(null);
	const [nodeToDelete, setNodeToDelete] = (0, import_react.useState)(null);
	const { employees, treeData, updateTree, addEmployee } = useEmployeesContext();
	const handleMoveNode = (draggedId, targetId) => {
		if (draggedId === targetId) return;
		const newTree = JSON.parse(JSON.stringify(treeData));
		const unassignedEmployee = employees.find((emp) => emp.id === draggedId);
		let draggedNode = null;
		if (draggedId === newTree.id) {
			toast.error("Cannot move the root node");
			return;
		}
		const findNode = (node, id) => {
			if (node.id === id) return node;
			if (node.children) for (const child of node.children) {
				const found = findNode(child, id);
				if (found) return found;
			}
			return null;
		};
		const nodeToMove = unassignedEmployee || findNode(newTree, draggedId);
		if (!nodeToMove) return;
		if (!unassignedEmployee) {
			let isCircular = false;
			const checkDescendant = (node) => {
				if (node.id === targetId) isCircular = true;
				if (node.children) node.children.forEach(checkDescendant);
			};
			checkDescendant(nodeToMove);
			if (isCircular) {
				toast.error("Cannot move a manager under their own report");
				return;
			}
		}
		const removeNode = (node) => {
			if (node.children) {
				const index = node.children.findIndex((c) => c.id === draggedId);
				if (index !== -1) {
					draggedNode = node.children[index] || null;
					node.children.splice(index, 1);
					return true;
				}
				for (const child of node.children) if (removeNode(child)) return true;
			}
			return false;
		};
		if (unassignedEmployee) draggedNode = {
			id: unassignedEmployee.id,
			name: unassignedEmployee.name,
			role: unassignedEmployee.role,
			department: unassignedEmployee.department,
			status: unassignedEmployee.status,
			avatar: unassignedEmployee.avatar,
			children: []
		};
		else removeNode(newTree);
		if (!draggedNode) return;
		const insertNode = (node) => {
			if (node.id === targetId) {
				if (!node.children) node.children = [];
				node.children.push(draggedNode);
				return true;
			}
			if (node.children) {
				for (const child of node.children) if (insertNode(child)) return true;
			}
			return false;
		};
		if (insertNode(newTree)) {
			updateTree(newTree);
			toast.success("Employee moved successfully");
		}
	};
	const handleAddNode = (nodeData) => {
		if (!selectedParent) return;
		const newTree = JSON.parse(JSON.stringify(treeData));
		const newId = `EMP-${Math.random().toString(36).substr(2, 9)}`;
		const insertChild = (node) => {
			if (node.id === selectedParent.id) {
				if (!node.children) node.children = [];
				node.children.push({
					...nodeData,
					id: newId
				});
				return true;
			}
			if (node.children) {
				for (const child of node.children) if (insertChild(child)) return true;
			}
			return false;
		};
		if (insertChild(newTree)) {
			updateTree(newTree);
			addEmployee({
				id: newId,
				name: nodeData.name,
				role: nodeData.role,
				department: "Engineering",
				status: "Active",
				email: `${(nodeData.name.split(" ")[0] || "").toLowerCase()}@example.com`,
				phone: "+1 555-0000",
				avatar: nodeData.avatar,
				performanceScore: 85,
				joinDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] || ""
			});
			toast.success(`${nodeData.name} added under ${selectedParent.name}`);
			setAddModalOpen(false);
		}
	};
	const handleDeleteNode = (nodeId) => {
		const newTree = JSON.parse(JSON.stringify(treeData));
		if (nodeId === newTree.id) {
			toast.error("Cannot delete the root organization node.");
			return;
		}
		const findNode = (node, id) => {
			if (node.id === id) return node;
			if (node.children) for (const child of node.children) {
				const found = findNode(child, id);
				if (found) return found;
			}
			return null;
		};
		const node = findNode(newTree, nodeId);
		if (node) setNodeToDelete(node);
	};
	const confirmDelete = () => {
		if (!nodeToDelete) return;
		const newTree = JSON.parse(JSON.stringify(treeData));
		const removeNode = (node) => {
			if (node.children) {
				const index = node.children.findIndex((c) => c.id === nodeToDelete.id);
				if (index !== -1) {
					node.children.splice(index, 1);
					return true;
				}
				for (const child of node.children) if (removeNode(child)) return true;
			}
			return false;
		};
		if (removeNode(newTree)) {
			updateTree(newTree);
			toast.success("Team member unassigned from this branch");
		}
		setNodeToDelete(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full max-w-[1400px] mx-auto animate-in fade-in zoom-in-95 duration-300 flex flex-col h-[calc(100vh-120px)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-[28px] font-black text-slate-900 tracking-tight mb-2",
					children: "Organizational Structure"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[14px] text-slate-500",
					children: "Visual hierarchy of teams. Drag and drop cards to reorganize."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setIsModalOpen(true),
						className: "flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "w-4 h-4" }), "Manage Departments"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 bg-white border border-slate-200 p-1.5 rounded-2xl shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setZoom(Math.max(.4, zoom - .1)),
								className: "p-2 hover:bg-slate-100 rounded-xl text-slate-600 transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomOut, { className: "w-4 h-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[12px] font-bold text-slate-600 w-12 text-center",
								children: [Math.round(zoom * 100), "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setZoom(Math.min(2, zoom + .1)),
								className: "p-2 hover:bg-slate-100 rounded-xl text-slate-600 transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, { className: "w-4 h-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-6 bg-slate-200 mx-1" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setZoom(1),
								className: "p-2 hover:bg-slate-100 rounded-xl text-slate-600 transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize, { className: "w-4 h-4" })
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 flex relative overflow-hidden rounded-3xl border border-slate-200/60 shadow-inner",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 bg-slate-50/50 overflow-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { dangerouslySetInnerHTML: { __html: `
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
        ` } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-w-max p-12 flex justify-center items-start min-h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								transform: `scale(${zoom})`,
								transformOrigin: "top center",
								transition: "transform 0.3s ease"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "flex justify-center m-0 p-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrgTree, {
									node: treeData,
									onMoveNode: handleMoveNode,
									onAddClick: (node) => {
										setSelectedParent(node);
										setAddModalOpen(true);
									},
									onDeleteClick: handleDeleteNode
								})
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnassignedSidebar, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManageDepartmentsModal, {
				isOpen: isModalOpen,
				onClose: () => setIsModalOpen(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddOrgNodeModal, {
				isOpen: addModalOpen,
				onClose: () => setAddModalOpen(false),
				onSubmit: handleAddNode,
				...selectedParent?.name ? { parentName: selectedParent.name } : {}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeleteConfirmModal, {
				isOpen: !!nodeToDelete,
				node: nodeToDelete,
				onClose: () => setNodeToDelete(null),
				onConfirm: confirmDelete
			})
		]
	});
}
function Calendar$1({ className, classNames, showOutsideDays = true, captionLayout = "label", buttonVariant = "ghost", formatters, components, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayPicker, {
		showOutsideDays,
		className: cn("bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, className),
		captionLayout,
		formatters: {
			formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
			...formatters
		},
		classNames: {
			root: cn("w-fit", defaultClassNames.root),
			months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
			month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
			nav: cn("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaultClassNames.nav),
			button_previous: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_previous),
			button_next: cn(buttonVariants({ variant: buttonVariant }), "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50", defaultClassNames.button_next),
			month_caption: cn("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", defaultClassNames.month_caption),
			dropdowns: cn("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", defaultClassNames.dropdowns),
			dropdown_root: cn("has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border", defaultClassNames.dropdown_root),
			dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
			caption_label: cn("select-none font-medium", captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5", defaultClassNames.caption_label),
			table: "w-full border-collapse",
			weekdays: cn("flex", defaultClassNames.weekdays),
			weekday: cn("text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal", defaultClassNames.weekday),
			week: cn("mt-2 flex w-full", defaultClassNames.week),
			week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
			week_number: cn("text-muted-foreground select-none text-[0.8rem]", defaultClassNames.week_number),
			day: cn("group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md", defaultClassNames.day),
			range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
			range_middle: cn("rounded-none", defaultClassNames.range_middle),
			range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
			today: cn("bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none", defaultClassNames.today),
			outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
			disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
			hidden: cn("invisible", defaultClassNames.hidden),
			...classNames
		},
		components: {
			Root: ({ className, rootRef, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-slot": "calendar",
					ref: rootRef,
					className: cn(className),
					...props
				});
			},
			Chevron: ({ className, orientation, ...props }) => {
				if (orientation === "left") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
					className: cn("size-4", className),
					...props
				});
				if (orientation === "right") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: cn("size-4", className),
					...props
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: cn("size-4", className),
					...props
				});
			},
			DayButton: CalendarDayButton,
			WeekNumber: ({ children, ...props }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					...props,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-(--cell-size) items-center justify-center text-center",
						children
					})
				});
			},
			...components
		},
		...props
	});
}
function CalendarDayButton({ className, day, modifiers, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	const ref = import_react.useRef(null);
	import_react.useEffect(() => {
		if (modifiers["focused"]) ref.current?.focus();
	}, [modifiers]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		ref,
		variant: "ghost",
		size: "icon",
		"data-day": day.date.toLocaleDateString(),
		"data-selected-single": modifiers["selected"] && !modifiers["range_start"] && !modifiers["range_end"] && !modifiers["range_middle"],
		"data-range-start": modifiers["range_start"],
		"data-range-end": modifiers["range_end"],
		"data-range-middle": modifiers["range_middle"],
		className: cn("data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70", defaultClassNames.day, className),
		...props
	});
}
var Popover = Root2;
var PopoverTrigger = Trigger;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)", className),
	...props
}) }));
PopoverContent.displayName = Content2.displayName;
function AttendanceList() {
	const { employees } = useEmployeesContext();
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("All");
	const [dateRange, setDateRange] = (0, import_react.useState)({
		from: new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() - 7)),
		to: /* @__PURE__ */ new Date()
	});
	const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
	const itemsPerPage = 10;
	const attendanceData = (0, import_react.useMemo)(() => {
		const records = [];
		for (let i = 0; i < 7; i++) {
			const dateObj = /* @__PURE__ */ new Date();
			dateObj.setDate(dateObj.getDate() - i);
			const dateStr = dateObj.toISOString().split("T")[0] || "";
			if (dateObj.getDay() === 0 || dateObj.getDay() === 6) continue;
			employees.forEach((emp) => {
				const hash = emp.id.charCodeAt(emp.id.length - 1) + i;
				let status = "Present";
				let checkIn = "09:00 AM";
				let checkOut = "05:30 PM";
				let totalHours = "8.5h";
				if (hash % 10 === 0) {
					status = "Absent";
					checkIn = null;
					checkOut = null;
					totalHours = null;
				} else if (hash % 7 === 0) {
					status = "On Leave";
					checkIn = null;
					checkOut = null;
					totalHours = null;
				} else if (hash % 5 === 0) {
					status = "Late";
					checkIn = "10:15 AM";
					checkOut = "06:00 PM";
					totalHours = "7.75h";
				} else {
					(hash % 15).toString().padStart(2, "0");
					checkIn = `08:${45 + hash % 15} AM`;
					if (45 + hash % 15 >= 60) checkIn = `09:${(45 + hash % 15 - 60).toString().padStart(2, "0")} AM`;
				}
				records.push({
					employeeId: `${emp.id}-${dateStr}`,
					employeeName: emp.name,
					role: emp.role,
					department: emp.department,
					avatar: emp.avatar || "",
					date: dateStr,
					status,
					checkIn,
					checkOut,
					totalHours
				});
			});
		}
		return records;
	}, [employees]);
	const filteredData = (0, import_react.useMemo)(() => {
		return attendanceData.filter((record) => {
			const matchesSearch = record.employeeName.toLowerCase().includes(searchQuery.toLowerCase()) || record.role.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesStatus = statusFilter === "All" || record.status === statusFilter;
			let matchesDate = true;
			if (dateRange?.from) {
				const recordDate = new Date(record.date);
				const fromDate = new Date(dateRange.from);
				fromDate.setHours(0, 0, 0, 0);
				if (dateRange.to) {
					const toDate = new Date(dateRange.to);
					toDate.setHours(23, 59, 59, 999);
					matchesDate = recordDate >= fromDate && recordDate <= toDate;
				} else matchesDate = recordDate.getTime() === fromDate.getTime();
			}
			return matchesSearch && matchesStatus && matchesDate;
		});
	}, [
		attendanceData,
		searchQuery,
		statusFilter,
		dateRange
	]);
	const totalPages = Math.ceil(filteredData.length / itemsPerPage);
	const paginatedData = (0, import_react.useMemo)(() => {
		const start = (currentPage - 1) * itemsPerPage;
		return filteredData.slice(start, start + itemsPerPage);
	}, [filteredData, currentPage]);
	(0, import_react.useMemo)(() => setCurrentPage(1), [
		searchQuery,
		statusFilter,
		dateRange
	]);
	const stats = (0, import_react.useMemo)(() => {
		return {
			present: filteredData.filter((r) => r.status === "Present" || r.status === "Late").length,
			absent: filteredData.filter((r) => r.status === "Absent").length,
			onLeave: filteredData.filter((r) => r.status === "On Leave").length,
			late: filteredData.filter((r) => r.status === "Late").length
		};
	}, [filteredData]);
	const getStatusBadge = (status) => {
		switch (status) {
			case "Present": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5" }), " Present"]
			});
			case "Absent": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "w-3.5 h-3.5" }), " Absent"]
			});
			case "Late": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3.5 h-3.5" }), " Late"]
			});
			case "On Leave": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3.5 h-3.5" }), " On Leave"]
			});
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full flex flex-col space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-black text-slate-900 tracking-tight",
					children: "Daily Attendance"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-slate-500 mt-1",
					children: "Past 7 Days"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 shadow-sm flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-4 h-4" }), " Export"]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-4",
				children: [
					{
						label: "Total Present",
						value: stats.present,
						color: "text-emerald-600",
						bg: "bg-emerald-50"
					},
					{
						label: "Total Absent",
						value: stats.absent,
						color: "text-rose-600",
						bg: "bg-rose-50"
					},
					{
						label: "Late Arrivals",
						value: stats.late,
						color: "text-amber-600",
						bg: "bg-amber-50"
					},
					{
						label: "On Leave",
						value: stats.onLeave,
						color: "text-blue-600",
						bg: "bg-blue-50"
					}
				].map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white border border-slate-200 rounded-2xl p-5 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold text-slate-500",
						children: stat.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("text-3xl font-black mt-2", stat.color),
						children: stat.value
					})]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden flex flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-full sm:w-72",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "Search by name or role...",
								value: searchQuery,
								onChange: (e) => setSearchQuery(e.target.value),
								className: "w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 w-full sm:w-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: cn("flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 hover:bg-slate-50 transition-colors", !dateRange && "text-slate-400"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "mr-1 h-4 w-4" }), dateRange?.from ? dateRange.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										format(dateRange.from, "LLL dd, y"),
										" -",
										" ",
										format(dateRange.to, "LLL dd, y")
									] }) : format(dateRange.from, "LLL dd, y") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pick a date range" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
								className: "w-auto p-0",
								align: "end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar$1, {
									initialFocus: true,
									mode: "range",
									defaultMonth: dateRange?.from || /* @__PURE__ */ new Date(),
									selected: dateRange,
									onSelect: setDateRange,
									numberOfMonths: 2
								})
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 hide-scrollbar",
								children: [
									"All",
									"Present",
									"Absent",
									"Late",
									"On Leave"
								].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setStatusFilter(status),
									className: cn("px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-200", statusFilter === status ? "bg-slate-900 text-white shadow-md" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900"),
									children: status
								}, status))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 overflow-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left border-collapse",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-slate-50/80 sticky top-0 z-10 backdrop-blur-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider border-b border-slate-200",
										children: "Employee"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider border-b border-slate-200",
										children: "Date"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider border-b border-slate-200",
										children: "Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider border-b border-slate-200",
										children: "Check In"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider border-b border-slate-200",
										children: "Check Out"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider border-b border-slate-200",
										children: "Total Hours"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-6 py-4 border-b border-slate-200" })
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-slate-100",
								children: paginatedData.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 7,
									className: "px-6 py-12 text-center text-slate-500",
									children: "No attendance records found matching your filters."
								}) }) : paginatedData.map((record) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-slate-50/50 transition-colors group",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: record.avatar,
													alt: record.employeeName,
													className: "w-10 h-10 rounded-full object-cover border border-slate-200"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-bold text-slate-900",
													children: record.employeeName
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-slate-500 font-medium",
													children: record.role
												})] })]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-medium text-slate-700",
												children: record.date
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4",
											children: getStatusBadge(record.status)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-medium text-slate-700",
												children: record.checkIn || "--:--"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-medium text-slate-700",
												children: record.checkOut || "--:--"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn("text-sm font-bold", record.totalHours ? "text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md" : "text-slate-400"),
												children: record.totalHours || "-"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4 text-right",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "w-5 h-5" })
											})
										})
									]
								}, record.employeeId))
							})]
						})
					}),
					totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 border-t border-slate-200 bg-white flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-slate-500",
							children: [
								"Showing ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-slate-900",
									children: (currentPage - 1) * itemsPerPage + 1
								}),
								" to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-slate-900",
									children: Math.min(currentPage * itemsPerPage, filteredData.length)
								}),
								" of ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-slate-900",
									children: filteredData.length
								}),
								" records"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setCurrentPage((p) => Math.max(1, p - 1)),
									disabled: currentPage === 1,
									className: "p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-4 h-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-sm font-bold text-slate-700 px-2",
									children: [
										"Page ",
										currentPage,
										" of ",
										totalPages
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setCurrentPage((p) => Math.min(totalPages, p + 1)),
									disabled: currentPage === totalPages,
									className: "p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4" })
								})
							]
						})]
					})
				]
			})
		]
	});
}
var MOCK_REQUESTS = [
	{
		id: "LR-001",
		employeeId: "EMP-012",
		employeeName: "Sneha Rao",
		avatar: "https://i.pravatar.cc/150?u=sneha",
		role: "UX Designer",
		department: "Design",
		type: "Sick Leave",
		startDate: "2026-08-14",
		endDate: "2026-08-15",
		durationDays: 2,
		reason: "Fever and cold, doctor advised rest.",
		status: "Pending",
		appliedOn: "2026-08-10"
	},
	{
		id: "LR-002",
		employeeId: "EMP-004",
		employeeName: "David Chen",
		avatar: "https://i.pravatar.cc/150?u=david",
		role: "Product Manager",
		department: "Product",
		type: "Annual Leave",
		startDate: "2026-09-01",
		endDate: "2026-09-07",
		durationDays: 5,
		reason: "Family vacation to Hawaii.",
		status: "Pending",
		appliedOn: "2026-08-09"
	},
	{
		id: "LR-003",
		employeeId: "EMP-028",
		employeeName: "Amit Patel",
		avatar: "https://i.pravatar.cc/150?u=amit",
		role: "Frontend Developer",
		department: "Engineering",
		type: "Casual Leave",
		startDate: "2026-08-18",
		endDate: "2026-08-18",
		durationDays: 1,
		reason: "Personal errands to attend to.",
		status: "Pending",
		appliedOn: "2026-08-08"
	},
	{
		id: "LR-004",
		employeeId: "EMP-041",
		employeeName: "Sarah Smith",
		avatar: "https://i.pravatar.cc/150?u=sarah",
		role: "Marketing Specialist",
		department: "Marketing",
		type: "Sick Leave",
		startDate: "2026-08-12",
		endDate: "2026-08-13",
		durationDays: 2,
		reason: "Dental surgery appointment.",
		status: "Pending",
		appliedOn: "2026-08-07"
	},
	{
		id: "LR-005",
		employeeId: "EMP-005",
		employeeName: "Elena Rodriguez",
		avatar: "https://i.pravatar.cc/150?u=elena",
		role: "HR Manager",
		department: "Human Resources",
		type: "Annual Leave",
		startDate: "2026-07-20",
		endDate: "2026-07-24",
		durationDays: 5,
		reason: "Summer vacation.",
		status: "Approved",
		appliedOn: "2026-07-01"
	},
	{
		id: "LR-006",
		employeeId: "EMP-019",
		employeeName: "Vikram Singh",
		avatar: "https://i.pravatar.cc/150?u=vikram",
		role: "Backend Engineer",
		department: "Engineering",
		type: "Unpaid Leave",
		startDate: "2026-08-01",
		endDate: "2026-08-02",
		durationDays: 2,
		reason: "Extended travel delay.",
		status: "Rejected",
		appliedOn: "2026-07-28"
	}
];
var getLeaveTypeColor = (type) => {
	switch (type) {
		case "Sick Leave": return "text-rose-600 bg-rose-50 border-rose-100";
		case "Casual Leave": return "text-amber-600 bg-amber-50 border-amber-100";
		case "Annual Leave": return "text-indigo-600 bg-indigo-50 border-indigo-100";
		case "Unpaid Leave": return "text-slate-600 bg-slate-50 border-slate-200";
		default: return "text-teal-600 bg-teal-50 border-teal-100";
	}
};
var getLeaveTypeIcon = (type) => {
	switch (type) {
		case "Sick Leave": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "w-3.5 h-3.5" });
		case "Casual Leave": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3.5 h-3.5" });
		case "Annual Leave": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "w-3.5 h-3.5" });
		case "Unpaid Leave": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-3.5 h-3.5" });
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-3.5 h-3.5" });
	}
};
function LeaveRequests() {
	const { leaveTypes } = useSettingsContext();
	const [requests, setRequests] = (0, import_react.useState)(MOCK_REQUESTS);
	const [activeTab, setActiveTab] = (0, import_react.useState)("Pending");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [isAddOpen, setIsAddOpen] = (0, import_react.useState)(false);
	const [newLeaveType, setNewLeaveType] = (0, import_react.useState)(leaveTypes[0] || "Sick Leave");
	const [newStartDate, setNewStartDate] = (0, import_react.useState)("");
	const [newEndDate, setNewEndDate] = (0, import_react.useState)("");
	const [newReason, setNewReason] = (0, import_react.useState)("");
	const handleAction = (id, action) => {
		setRequests((prev) => prev.map((r) => r.id === id ? {
			...r,
			status: action
		} : r));
		toast.success(`Leave request ${action.toLowerCase()} successfully`);
	};
	const handleAddLeave = (e) => {
		e.preventDefault();
		if (!newStartDate || !newEndDate || !newReason) {
			toast.error("Please fill all required fields");
			return;
		}
		const start = new Date(newStartDate);
		const end = new Date(newEndDate);
		const diffTime = Math.abs(end.getTime() - start.getTime());
		const durationDays = Math.ceil(diffTime / 864e5) + 1;
		const newRequest = {
			id: `LR-${Math.random().toString(36).substr(2, 9)}`,
			employeeId: "EMP-NEW",
			employeeName: "Current User",
			avatar: "https://i.pravatar.cc/150?u=current",
			role: "Software Engineer",
			department: "Engineering",
			type: newLeaveType,
			startDate: newStartDate,
			endDate: newEndDate,
			durationDays,
			reason: newReason,
			status: "Pending",
			appliedOn: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] || ""
		};
		setRequests((prev) => [newRequest, ...prev]);
		setIsAddOpen(false);
		toast.success("Leave request submitted successfully");
		setNewLeaveType(leaveTypes[0] || "Sick Leave");
		setNewStartDate("");
		setNewEndDate("");
		setNewReason("");
	};
	const filteredRequests = (0, import_react.useMemo)(() => {
		return requests.filter((r) => r.status === activeTab).filter((r) => r.employeeName.toLowerCase().includes(searchQuery.toLowerCase()) || r.department.toLowerCase().includes(searchQuery.toLowerCase())).sort((a, b) => new Date(b.appliedOn).getTime() - new Date(a.appliedOn).getTime());
	}, [
		requests,
		activeTab,
		searchQuery
	]);
	const pendingCount = requests.filter((r) => r.status === "Pending").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full flex flex-col space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-black text-slate-900 tracking-tight",
					children: "Leave Requests"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-slate-500 mt-1",
					children: "Manage and review employee time off"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 w-full sm:w-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1 sm:flex-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "Search employee...",
								value: searchQuery,
								onChange: (e) => setSearchQuery(e.target.value),
								className: "w-full sm:w-64 pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 shadow-sm flex items-center gap-2",
							children: ["Filter ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-4 h-4" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
							open: isAddOpen,
							onOpenChange: setIsAddOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-sm flex items-center gap-2 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" }), " Add Leave"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
								className: "sm:max-w-[425px] rounded-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
									className: "text-xl font-black text-slate-900",
									children: "Request Leave"
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: handleAddLeave,
									className: "space-y-4 mt-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-sm font-bold text-slate-700",
												children: "Leave Type"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												value: newLeaveType,
												onChange: (e) => setNewLeaveType(e.target.value),
												className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20",
												children: leaveTypes.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: type,
													children: type
												}, type))
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-sm font-bold text-slate-700",
													children: "Start Date"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "date",
													required: true,
													value: newStartDate,
													onChange: (e) => setNewStartDate(e.target.value),
													className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-sm font-bold text-slate-700",
													children: "End Date"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "date",
													required: true,
													value: newEndDate,
													onChange: (e) => setNewEndDate(e.target.value),
													className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-sm font-bold text-slate-700",
												children: "Reason"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												required: true,
												value: newReason,
												onChange: (e) => setNewReason(e.target.value),
												placeholder: "Briefly explain your reason...",
												className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pt-4 flex justify-end gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setIsAddOpen(false),
												className: "px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm rounded-xl transition-colors",
												children: "Cancel"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "submit",
												className: "px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition-colors",
												children: "Submit Request"
											})]
										})
									]
								})]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex border-b border-slate-200",
				children: [
					"Pending",
					"Approved",
					"Rejected"
				].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setActiveTab(status),
					className: cn("px-6 py-3 text-sm font-bold border-b-2 transition-colors relative", activeTab === status ? "border-indigo-600 text-indigo-600" : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"),
					children: [status, status === "Pending" && pendingCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 inline-flex items-center justify-center bg-rose-500 text-white text-[10px] w-4 h-4 rounded-full",
						children: pendingCount
					})]
				}, status))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 overflow-auto pb-6",
				children: filteredRequests.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center h-64 bg-slate-50/50 rounded-3xl border border-dashed border-slate-200",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "w-8 h-8 text-slate-300" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-slate-900 font-bold",
							children: [
								"No ",
								activeTab.toLowerCase(),
								" requests"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-slate-500 text-sm mt-1",
							children: "You're all caught up!"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",
					children: filteredRequests.map((request) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-start mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: request.avatar,
										alt: request.employeeName,
										className: "w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-slate-900 leading-tight",
										children: request.employeeName
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-slate-500",
										children: [
											request.role,
											" • ",
											request.department
										]
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: cn("px-2.5 py-1 rounded-full border text-[11px] font-bold flex items-center gap-1", getLeaveTypeColor(request.type)),
									children: [getLeaveTypeIcon(request.type), request.type]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 bg-slate-50/50 rounded-xl p-4 border border-slate-100",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-4 h-4 text-slate-400 mt-0.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm font-bold text-slate-700",
										children: [
											request.startDate,
											" to ",
											request.endDate
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-slate-500 font-medium mt-0.5",
										children: [
											request.durationDays,
											" ",
											request.durationDays === 1 ? "Day" : "Days"
										]
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-4 h-4 rounded-full bg-slate-200/50 flex items-center justify-center shrink-0 mt-0.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-black text-slate-400",
											children: "i"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-slate-600 italic line-clamp-2",
										children: [
											"\"",
											request.reason,
											"\""
										]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 pt-4 border-t border-slate-100 flex items-center justify-between",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] text-slate-400 font-medium",
										children: ["Applied on ", request.appliedOn]
									}),
									request.status === "Pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => handleAction(request.id, "Rejected"),
											className: "p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors",
											title: "Reject",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => handleAction(request.id, "Approved"),
											className: "px-4 py-2 bg-slate-900 hover:bg-indigo-600 text-white text-sm font-bold rounded-lg transition-colors flex items-center gap-2 shadow-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4" }), " Approve"]
										})]
									}),
									request.status !== "Pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: cn("px-3 py-1 rounded-lg text-xs font-bold", request.status === "Approved" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"),
										children: request.status
									})
								]
							})
						]
					}, request.id))
				})
			})
		]
	});
}
var MOCK_CANDIDATES = [
	{
		id: "C-001",
		name: "Alex Johnson",
		role: "Senior Frontend Engineer",
		avatar: "https://i.pravatar.cc/150?u=alex",
		stage: "Technical",
		date: "Today",
		time: "2:00 PM - 3:00 PM",
		interviewer: "Sarah Lee",
		interviewerAvatar: "https://i.pravatar.cc/150?u=sarah"
	},
	{
		id: "C-002",
		name: "Maria Garcia",
		role: "Product Designer",
		avatar: "https://i.pravatar.cc/150?u=maria",
		stage: "Screening",
		date: "Today",
		time: "4:00 PM - 4:30 PM",
		interviewer: "David Kim",
		interviewerAvatar: "https://i.pravatar.cc/150?u=david"
	},
	{
		id: "C-003",
		name: "James Smith",
		role: "Backend Developer",
		avatar: "https://i.pravatar.cc/150?u=james",
		stage: "Cultural",
		date: "Tomorrow",
		time: "10:00 AM - 11:00 AM",
		interviewer: "Elena Rodriguez",
		interviewerAvatar: "https://i.pravatar.cc/150?u=elena"
	},
	{
		id: "C-004",
		name: "Sophia Chen",
		role: "Marketing Manager",
		avatar: "https://i.pravatar.cc/150?u=sophia",
		stage: "Offer",
		date: "Tomorrow",
		time: "1:00 PM - 1:30 PM",
		interviewer: "Michael Scott",
		interviewerAvatar: "https://i.pravatar.cc/150?u=michael"
	},
	{
		id: "C-005",
		name: "Liam O'Connor",
		role: "DevOps Engineer",
		avatar: "https://i.pravatar.cc/150?u=liam",
		stage: "Technical",
		date: "Aug 14, 2026",
		time: "11:00 AM - 12:30 PM",
		interviewer: "Sarah Lee",
		interviewerAvatar: "https://i.pravatar.cc/150?u=sarah"
	}
];
var INITIAL_STAGES = [
	{
		label: "Screening",
		color: "text-blue-700",
		bgColor: "bg-blue-50"
	},
	{
		label: "Technical",
		color: "text-indigo-700",
		bgColor: "bg-indigo-50"
	},
	{
		label: "Cultural",
		color: "text-purple-700",
		bgColor: "bg-purple-50"
	},
	{
		label: "Offer",
		color: "text-emerald-700",
		bgColor: "bg-emerald-50"
	}
];
function Interviews() {
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [candidates, setCandidates] = (0, import_react.useState)(MOCK_CANDIDATES);
	const [isScheduleOpen, setIsScheduleOpen] = (0, import_react.useState)(false);
	const [stages, setStages] = (0, import_react.useState)(INITIAL_STAGES);
	const [isAddingStage, setIsAddingStage] = (0, import_react.useState)(false);
	const [newStageName, setNewStageName] = (0, import_react.useState)("");
	const [activeDropdown, setActiveDropdown] = (0, import_react.useState)(null);
	const handleDeleteStage = (stageLabel) => {
		const stageCandidates = candidates.filter((c) => c.stage === stageLabel);
		if (stageCandidates.length > 0) {
			toast.error(`Cannot delete stage "${stageLabel}". Please move or delete the ${stageCandidates.length} candidates in this stage first.`);
			return;
		}
		setStages((prev) => prev.filter((s) => s.label !== stageLabel));
		toast.success(`Stage deleted`);
	};
	const [renamingStage, setRenamingStage] = (0, import_react.useState)(null);
	const [renameInput, setRenameInput] = (0, import_react.useState)("");
	const handleRenameStage = (oldLabel) => {
		if (!renameInput.trim() || renameInput.trim() === oldLabel) {
			setRenamingStage(null);
			return;
		}
		const newLabel = renameInput.trim();
		setStages((prev) => prev.map((s) => s.label === oldLabel ? {
			...s,
			label: newLabel
		} : s));
		setCandidates((prev) => prev.map((c) => c.stage === oldLabel ? {
			...c,
			stage: newLabel
		} : c));
		setRenamingStage(null);
		toast.success("Stage renamed");
	};
	const handleAddStage = () => {
		if (!newStageName.trim()) return;
		setStages((prev) => [...prev, {
			label: newStageName.trim(),
			color: "text-slate-700",
			bgColor: "bg-slate-100"
		}]);
		setNewStageName("");
		setIsAddingStage(false);
		toast.success("Stage added successfully");
	};
	const handleDragStart = (e, candidateId) => {
		e.dataTransfer.setData("candidateId", candidateId);
	};
	const handleDragOver = (e) => {
		e.preventDefault();
	};
	const handleDrop = (e, stageLabel) => {
		e.preventDefault();
		const candidateId = e.dataTransfer.getData("candidateId");
		if (!candidateId) return;
		setCandidates((prev) => prev.map((c) => c.id === candidateId ? {
			...c,
			stage: stageLabel
		} : c));
	};
	const [newName, setNewName] = (0, import_react.useState)("");
	const [newRole, setNewRole] = (0, import_react.useState)("");
	const [newStage, setNewStage] = (0, import_react.useState)(stages[0]?.label || "Screening");
	const [newDate, setNewDate] = (0, import_react.useState)("");
	const [newTime, setNewTime] = (0, import_react.useState)("");
	const [newInterviewer, setNewInterviewer] = (0, import_react.useState)("");
	const handleSchedule = (e) => {
		e.preventDefault();
		if (!newName || !newRole || !newDate || !newTime || !newInterviewer) {
			toast.error("Please fill all required fields");
			return;
		}
		const newCandidate = {
			id: `C-${Math.random().toString(36).substr(2, 9)}`,
			name: newName,
			role: newRole,
			avatar: `https://i.pravatar.cc/150?u=${newName.replace(/\s/g, "")}`,
			stage: newStage,
			date: newDate,
			time: newTime,
			interviewer: newInterviewer,
			interviewerAvatar: `https://i.pravatar.cc/150?u=${newInterviewer.replace(/\s/g, "")}`
		};
		setCandidates((prev) => [...prev, newCandidate]);
		setIsScheduleOpen(false);
		toast.success("Interview scheduled successfully!");
		setNewName("");
		setNewRole("");
		setNewStage("Screening");
		setNewDate("");
		setNewTime("");
		setNewInterviewer("");
	};
	const filteredCandidates = candidates.filter((c) => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.role.toLowerCase().includes(searchQuery.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full flex flex-col space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-[1600px] mx-auto w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-black text-slate-900 tracking-tight",
				children: "Interviews"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-slate-500 mt-1",
				children: "Manage candidate pipeline and schedules"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 w-full sm:w-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex-1 sm:flex-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						placeholder: "Search candidates...",
						value: searchQuery,
						onChange: (e) => setSearchQuery(e.target.value),
						className: "w-full sm:w-64 pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
					open: isScheduleOpen,
					onOpenChange: setIsScheduleOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-sm flex items-center gap-2 transition-colors whitespace-nowrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" }), " Schedule"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
						className: "sm:max-w-[425px] rounded-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "text-xl font-black text-slate-900",
							children: "Schedule Interview"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSchedule,
							className: "space-y-4 mt-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-sm font-bold text-slate-700",
										children: "Candidate Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										value: newName,
										onChange: (e) => setNewName(e.target.value),
										className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-sm font-bold text-slate-700",
										children: "Role / Position"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										value: newRole,
										onChange: (e) => setNewRole(e.target.value),
										className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-sm font-bold text-slate-700",
										children: "Interview Stage"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: newStage,
										onChange: (e) => setNewStage(e.target.value),
										className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20",
										children: stages.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: s.label,
											children: s.label
										}, s.label))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-sm font-bold text-slate-700",
											children: "Date"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											placeholder: "e.g. Aug 15",
											required: true,
											value: newDate,
											onChange: (e) => setNewDate(e.target.value),
											className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-sm font-bold text-slate-700",
											children: "Time"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											placeholder: "e.g. 2:00 PM",
											required: true,
											value: newTime,
											onChange: (e) => setNewTime(e.target.value),
											className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-sm font-bold text-slate-700",
										children: "Interviewer Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										value: newInterviewer,
										onChange: (e) => setNewInterviewer(e.target.value),
										className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-4 flex justify-end gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setIsScheduleOpen(false),
										className: "px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm rounded-xl transition-colors",
										children: "Cancel"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition-colors",
										children: "Schedule Interview"
									})]
								})
							]
						})]
					})]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 overflow-x-auto hide-scrollbar pb-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-6 min-w-max h-full",
				children: [stages.map((stage) => {
					const stageCandidates = filteredCandidates.filter((c) => c.stage === stage.label);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-[320px] flex flex-col bg-slate-50/50 rounded-2xl border border-slate-200/60 p-4 transition-colors",
						onDragOver: handleDragOver,
						onDrop: (e) => handleDrop(e, stage.label),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-4 px-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [renamingStage === stage.label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									autoFocus: true,
									value: renameInput,
									onChange: (e) => setRenameInput(e.target.value),
									onBlur: () => handleRenameStage(stage.label),
									onKeyDown: (e) => {
										if (e.key === "Enter") handleRenameStage(stage.label);
										if (e.key === "Escape") setRenamingStage(null);
									},
									className: "font-bold text-slate-900 bg-white border border-indigo-200 rounded px-2 py-0.5 text-sm w-32 outline-none focus:ring-2 focus:ring-indigo-500/20"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold text-slate-900",
									children: stage.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("px-2 py-0.5 rounded-full text-xs font-bold", stage.bgColor, stage.color),
									children: stageCandidates.length
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setActiveDropdown(activeDropdown === stage.label ? null : stage.label),
									className: "p-1 hover:bg-slate-200 rounded text-slate-400 hover:text-slate-700 transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "w-4 h-4" })
								}), activeDropdown === stage.label && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute right-0 top-full mt-1 w-36 bg-white rounded-xl shadow-lg border border-slate-100 py-1 z-10 animate-in fade-in zoom-in duration-200",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											setRenameInput(stage.label);
											setRenamingStage(stage.label);
											setActiveDropdown(null);
										},
										className: "w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 font-medium transition-colors",
										children: "Rename Stage"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											handleDeleteStage(stage.label);
											setActiveDropdown(null);
										},
										className: "w-full text-left px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 font-medium transition-colors",
										children: "Delete Stage"
									})]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 flex-1 overflow-y-auto hide-scrollbar",
							children: [stageCandidates.map((candidate) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								draggable: true,
								onDragStart: (e) => handleDragStart(e, candidate.id),
								className: "bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group cursor-grab active:cursor-grabbing",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-between items-start mb-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: candidate.avatar,
											alt: candidate.name,
											className: "w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors",
											children: candidate.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-medium text-slate-500",
											children: candidate.role
										})] })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 mt-4 pt-4 border-t border-slate-100",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs font-medium text-slate-600",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-3.5 h-3.5 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											candidate.date,
											" • ",
											candidate.time
										] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs font-medium text-slate-600",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "w-3.5 h-3.5 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: candidate.interviewer })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1 text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Meet" })]
										})]
									})]
								})]
							}, candidate.id)), stageCandidates.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-slate-200 rounded-xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-slate-400",
									children: "No candidates in this stage"
								})
							})]
						})]
					}, stage.label);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-[320px] flex flex-col shrink-0 h-full min-h-[300px]",
					children: isAddingStage ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-slate-50/50 rounded-2xl border border-slate-200/60 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							autoFocus: true,
							placeholder: "Stage Name",
							value: newStageName,
							onChange: (e) => setNewStageName(e.target.value),
							onKeyDown: (e) => {
								if (e.key === "Enter") handleAddStage();
								if (e.key === "Escape") {
									setIsAddingStage(false);
									setNewStageName("");
								}
							},
							className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: handleAddStage,
								className: "px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg transition-colors",
								children: "Add"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setIsAddingStage(false);
									setNewStageName("");
								},
								className: "px-3 py-1.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs rounded-lg transition-colors",
								children: "Cancel"
							})]
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setIsAddingStage(true),
						className: "flex items-center justify-center gap-2 h-14 bg-slate-50/50 hover:bg-slate-100 border-2 border-dashed border-slate-200 text-slate-500 hover:text-slate-700 font-bold text-sm rounded-2xl transition-colors w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" }), " Add Stage"]
					})
				})]
			})
		})]
	});
}
var MOCK_JOBS = [
	{
		id: "JOB-01",
		title: "Senior Frontend Engineer",
		department: "Engineering",
		location: "Remote",
		type: "Full-time",
		status: "Active",
		applicants: 142,
		interviewing: 12,
		offers: 1,
		postedDate: "2 weeks ago",
		hiringManager: "Alex Turner",
		managerAvatar: "https://i.pravatar.cc/150?u=alex"
	},
	{
		id: "JOB-02",
		title: "Product Marketing Manager",
		department: "Marketing",
		location: "New York, NY",
		type: "Full-time",
		status: "Active",
		applicants: 89,
		interviewing: 5,
		offers: 0,
		postedDate: "1 week ago",
		hiringManager: "Sarah Connor",
		managerAvatar: "https://i.pravatar.cc/150?u=sarah"
	},
	{
		id: "JOB-03",
		title: "UX Researcher",
		department: "Design",
		location: "San Francisco, CA",
		type: "Contract",
		status: "Draft",
		applicants: 0,
		interviewing: 0,
		offers: 0,
		postedDate: "Just now",
		hiringManager: "David Kim",
		managerAvatar: "https://i.pravatar.cc/150?u=david"
	},
	{
		id: "JOB-04",
		title: "Data Scientist",
		department: "Engineering",
		location: "Remote",
		type: "Full-time",
		status: "Active",
		applicants: 215,
		interviewing: 8,
		offers: 2,
		postedDate: "3 weeks ago",
		hiringManager: "Elena Rodriguez",
		managerAvatar: "https://i.pravatar.cc/150?u=elena"
	}
];
function Hirings() {
	const { departments } = useDepartments();
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [jobs, setJobs] = (0, import_react.useState)(MOCK_JOBS);
	const [isPostOpen, setIsPostOpen] = (0, import_react.useState)(false);
	const [selectedJob, setSelectedJob] = (0, import_react.useState)(null);
	const [referJob, setReferJob] = (0, import_react.useState)(null);
	const [newTitle, setNewTitle] = (0, import_react.useState)("");
	const [newDepartment, setNewDepartment] = (0, import_react.useState)(departments[0] || "Engineering");
	const [newLocation, setNewLocation] = (0, import_react.useState)("");
	const [newType, setNewType] = (0, import_react.useState)("Full-time");
	const [newHiringManager, setNewHiringManager] = (0, import_react.useState)("");
	const handlePostJob = (e) => {
		e.preventDefault();
		if (!newTitle || !newLocation || !newHiringManager) {
			toast.error("Please fill all required fields");
			return;
		}
		const newJob = {
			id: `JOB-${Math.random().toString(36).substr(2, 9)}`,
			title: newTitle,
			department: newDepartment,
			location: newLocation,
			type: newType,
			status: "Active",
			applicants: 0,
			interviewing: 0,
			offers: 0,
			postedDate: "Just now",
			hiringManager: newHiringManager,
			managerAvatar: `https://i.pravatar.cc/150?u=${newHiringManager.replace(/\s/g, "")}`
		};
		setJobs((prev) => [newJob, ...prev]);
		setIsPostOpen(false);
		toast.success("Job posted successfully!");
		setNewTitle("");
		setNewDepartment(departments[0] || "Engineering");
		setNewLocation("");
		setNewType("Full-time");
		setNewHiringManager("");
	};
	const filteredJobs = jobs.filter((job) => job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.department.toLowerCase().includes(searchQuery.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full flex flex-col space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-[1600px] mx-auto w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-black text-slate-900 tracking-tight",
					children: "Job Openings"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-slate-500 mt-1",
					children: "Manage active requisitions and hiring pipelines"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 w-full sm:w-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1 sm:flex-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "Search jobs...",
								value: searchQuery,
								onChange: (e) => setSearchQuery(e.target.value),
								className: "w-full sm:w-64 pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "p-2 bg-white border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 shadow-sm transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "w-4 h-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
							open: isPostOpen,
							onOpenChange: setIsPostOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-sm flex items-center gap-2 transition-colors whitespace-nowrap",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" }), " Post Job"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
								className: "sm:max-w-[425px] rounded-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
									className: "text-xl font-black text-slate-900",
									children: "Post New Job"
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: handlePostJob,
									className: "space-y-4 mt-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-sm font-bold text-slate-700",
												children: "Job Title"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												required: true,
												value: newTitle,
												onChange: (e) => setNewTitle(e.target.value),
												className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-sm font-bold text-slate-700",
													children: "Department"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
													value: newDepartment,
													onChange: (e) => setNewDepartment(e.target.value),
													className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20",
													children: departments.map((dept) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: dept,
														children: dept
													}, dept))
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-sm font-bold text-slate-700",
													children: "Employment Type"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
													value: newType,
													onChange: (e) => setNewType(e.target.value),
													className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Full-time" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Part-time" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Contract" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Internship" })
													]
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-sm font-bold text-slate-700",
												children: "Location"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												placeholder: "e.g. Remote or San Francisco, CA",
												required: true,
												value: newLocation,
												onChange: (e) => setNewLocation(e.target.value),
												className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-sm font-bold text-slate-700",
												children: "Hiring Manager"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												required: true,
												value: newHiringManager,
												onChange: (e) => setNewHiringManager(e.target.value),
												className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pt-4 flex justify-end gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setIsPostOpen(false),
												className: "px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm rounded-xl transition-colors",
												children: "Cancel"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "submit",
												className: "px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition-colors",
												children: "Post Job"
											})]
										})
									]
								})]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
				children: [
					{
						label: "Active Jobs",
						value: "3",
						trend: "+1 this month"
					},
					{
						label: "Total Applicants",
						value: "446",
						trend: "+12% vs last month"
					},
					{
						label: "Interviews Scheduled",
						value: "25",
						trend: "+5 this week"
					},
					{
						label: "Offers Extended",
						value: "3",
						trend: "1 accepted"
					}
				].map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white p-5 rounded-2xl border border-slate-200 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-slate-500 mb-1",
						children: stat.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-black text-slate-900",
							children: stat.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-emerald-600 mb-1",
							children: stat.trend
						})]
					})]
				}, stat.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-4",
				children: filteredJobs.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 border-b border-slate-100 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-start mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600",
										children: job.department
									}), job.status === "Active" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600",
										children: "Active"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-600",
										children: "Draft"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors",
									children: job.title
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "w-5 h-5" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-y-3 mb-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-sm text-slate-600 font-medium",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "w-4 h-4 text-slate-400" }),
											" ",
											job.type
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-sm text-slate-600 font-medium",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 text-slate-400" }),
											" ",
											job.location
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-sm text-slate-600 font-medium",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-4 h-4 text-slate-400" }),
											" ",
											job.postedDate
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-sm text-slate-600 font-medium",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-4 h-4 text-slate-400" }),
											" ",
											job.applicants,
											" applied"
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-xs font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-slate-500",
										children: "Pipeline Pipeline"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-indigo-600",
										children: [job.interviewing, " Interviewing"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "h-2 w-full bg-slate-100 rounded-full overflow-hidden flex",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-slate-300 rounded-l-full",
											style: { width: "40%" }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-indigo-500",
											style: { width: "30%" }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-emerald-500 rounded-r-full",
											style: { width: "10%" }
										})
									]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 bg-slate-50/50 rounded-b-2xl flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: job.managerAvatar,
								alt: job.hiringManager,
								className: "w-8 h-8 rounded-full border-2 border-white shadow-sm"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider",
								children: "Hiring Manager"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-slate-700",
								children: job.hiringManager
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setReferJob(job),
								className: "text-xs font-bold text-slate-500 hover:text-slate-700 flex items-center gap-1.5 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "w-3.5 h-3.5" }), " Refer"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setSelectedJob(job),
								className: "text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors",
								children: ["View Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-3 h-3" })]
							})]
						})]
					})]
				}, job.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!selectedJob,
				onOpenChange: (open) => !open && setSelectedJob(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: selectedJob?.title }) }), selectedJob && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-4 pt-2 border-b border-slate-100 pb-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-slate-50 px-3 py-1.5 rounded-lg flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold text-slate-400 uppercase tracking-wider",
										children: "Department"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-bold text-slate-700",
										children: selectedJob.department
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-slate-50 px-3 py-1.5 rounded-lg flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold text-slate-400 uppercase tracking-wider",
										children: "Location"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-bold text-slate-700",
										children: selectedJob.location
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-slate-50 px-3 py-1.5 rounded-lg flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold text-slate-400 uppercase tracking-wider",
										children: "Type"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-bold text-slate-700",
										children: selectedJob.type
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-sm font-bold text-slate-900 mb-3",
								children: "Hiring Manager"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: selectedJob.managerAvatar,
									alt: selectedJob.hiringManager,
									className: "w-10 h-10 rounded-full"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-bold text-slate-700",
									children: selectedJob.hiringManager
								}) })]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-sm font-bold text-slate-900 mb-3",
								children: "Pipeline"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-slate-500 font-medium",
										children: "Total Applicants"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-slate-900",
										children: selectedJob.applicants
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-slate-500 font-medium",
										children: "Interviewing"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-indigo-600",
										children: selectedJob.interviewing
									})]
								})]
							})] })]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!referJob,
				onOpenChange: (open) => !open && setReferJob(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: ["Refer someone for ", referJob?.title] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							toast.success("Referral submitted successfully! Thank you.");
							setReferJob(null);
						},
						className: "space-y-4 pt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-bold text-slate-700",
									children: "Candidate Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									required: true,
									className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-bold text-slate-700",
									children: "Candidate Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									required: true,
									className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-bold text-slate-700",
									children: "LinkedIn Profile (Optional)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "url",
									className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-bold text-slate-700",
									children: "Resume / CV"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									required: true,
									className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-bold text-slate-700",
									children: "Why are they a good fit?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									required: true,
									rows: 3,
									className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-4 flex justify-end gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setReferJob(null),
									className: "px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm rounded-xl transition-colors",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition-colors",
									children: "Submit Referral"
								})]
							})
						]
					})]
				})
			})
		]
	});
}
var MOCK_EVENTS = [
	{
		id: "1",
		title: "Team Standup",
		date: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"),
		startTime: "10:00",
		endTime: "10:30",
		color: "bg-blue-500"
	},
	{
		id: "2",
		title: "Product Sync",
		date: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"),
		startTime: "13:00",
		endTime: "14:00",
		color: "bg-emerald-500"
	},
	{
		id: "3",
		title: "Client Call",
		date: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"),
		startTime: "15:30",
		endTime: "16:30",
		color: "bg-purple-500"
	}
];
function Schedule() {
	const [currentDate, setCurrentDate] = (0, import_react.useState)(/* @__PURE__ */ new Date());
	const [view, setView] = (0, import_react.useState)("Month");
	const monthStart = startOfMonth(currentDate);
	const monthEnd = endOfMonth(currentDate);
	const startDate = startOfWeek(monthStart);
	const endDate = endOfWeek(monthEnd);
	const weekStart = startOfWeek(currentDate);
	const weekEnd = endOfWeek(currentDate);
	const monthDays = eachDayOfInterval({
		start: startDate,
		end: endDate
	});
	const weekDays = eachDayOfInterval({
		start: weekStart,
		end: weekEnd
	});
	const next = () => {
		if (view === "Month") setCurrentDate(addMonths(currentDate, 1));
		else if (view === "Week") setCurrentDate(addWeeks(currentDate, 1));
	};
	const prev = () => {
		if (view === "Month") setCurrentDate(subMonths(currentDate, 1));
		else if (view === "Week") setCurrentDate(subWeeks(currentDate, 1));
	};
	const today = () => setCurrentDate(/* @__PURE__ */ new Date());
	const hours = Array.from({ length: 13 }, (_, i) => i + 8);
	const getEventsForDay = (dateStr) => {
		return MOCK_EVENTS.filter((e) => e.date === dateStr);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col h-[calc(100vh-6rem)] bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center justify-between px-6 py-4 border-b border-slate-200",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-2 bg-indigo-600 rounded-lg text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-5 h-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-xl font-bold text-slate-800 tracking-tight",
							children: "Calendar"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-px bg-slate-200 mx-2" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: today,
						className: "px-4 py-1.5 text-sm font-semibold border border-slate-200 rounded-md hover:bg-slate-50 transition-colors",
						children: "Today"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: prev,
							className: "p-1.5 hover:bg-slate-100 rounded-full transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-5 h-5 text-slate-600" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: next,
							className: "p-1.5 hover:bg-slate-100 rounded-full transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-5 h-5 text-slate-600" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-medium text-slate-700 w-48",
						children: format(currentDate, "MMMM yyyy")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Search...",
							className: "pl-9 pr-4 py-1.5 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none w-48"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1 bg-slate-100 p-1 rounded-lg",
						children: [
							"Month",
							"Week",
							"Day"
						].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setView(v),
							className: cn("px-3 py-1 text-sm font-medium rounded-md transition-all", view === v ? "bg-white text-indigo-600 shadow-sm" : "text-slate-600 hover:text-slate-900"),
							children: v
						}, v))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-2 px-3 py-1.5 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-sm ml-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" }), " Create"]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "w-64 border-r border-slate-200 p-4 hidden lg:flex flex-col gap-6 overflow-y-auto hide-scrollbar bg-slate-50/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "-ml-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar$1, {
						mode: "single",
						selected: currentDate,
						onSelect: (date) => date && setCurrentDate(date),
						className: "bg-transparent"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between group cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-bold text-slate-800",
							children: "My Calendars"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-4 h-4 text-slate-400 group-hover:text-slate-600" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-3 cursor-pointer group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									defaultChecked: true,
									className: "w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500/20 border-slate-300"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium text-slate-700 group-hover:text-slate-900",
									children: "My Schedule"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-3 cursor-pointer group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									defaultChecked: true,
									className: "w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500/20 border-slate-300"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium text-slate-700 group-hover:text-slate-900",
									children: "Work Anniversaries"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-3 cursor-pointer group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									defaultChecked: true,
									className: "w-4 h-4 rounded text-rose-600 focus:ring-rose-500/20 border-slate-300"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium text-slate-700 group-hover:text-slate-900",
									children: "Birthdays"
								})]
							})
						]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 overflow-y-auto flex flex-col bg-white",
				children: [
					view === "Month" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 flex flex-col min-h-[600px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-7 border-b border-slate-200",
							children: [
								"Sun",
								"Mon",
								"Tue",
								"Wed",
								"Thu",
								"Fri",
								"Sat"
							].map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "py-2 text-center text-xs font-bold text-slate-500 uppercase tracking-wider",
								children: day
							}, day))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 grid grid-cols-7 border-l border-slate-200 auto-rows-fr",
							children: monthDays.map((day, idx) => {
								const dateStr = format(day, "yyyy-MM-dd");
								const dayEvents = getEventsForDay(dateStr);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: cn("p-1 border-r border-b border-slate-200 transition-colors hover:bg-slate-50 cursor-pointer overflow-hidden", !isSameMonth(day, monthStart) && "bg-slate-50/50 text-slate-400"),
									onClick: () => {
										setCurrentDate(day);
										setView("Day");
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex justify-center mb-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("w-7 h-7 flex items-center justify-center text-sm font-medium rounded-full", isToday(day) ? "bg-indigo-600 text-white" : isSameDay(day, currentDate) ? "bg-indigo-100 text-indigo-700" : "text-slate-700"),
											children: format(day, "d")
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-1 overflow-y-auto max-h-[80px] hide-scrollbar px-1",
										children: dayEvents.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: cn("text-[10px] px-1.5 py-0.5 rounded truncate text-white font-medium shadow-sm", event.color),
											children: [
												event.startTime,
												" ",
												event.title
											]
										}, event.id))
									})]
								}, day.toString());
							})
						})]
					}),
					view === "Week" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 flex flex-col min-h-[600px] relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex border-b border-slate-200 sticky top-0 bg-white z-20 ml-16",
							children: weekDays.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 flex flex-col items-center justify-center py-3 border-l border-slate-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1",
									children: format(day, "EEE")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("text-xl flex items-center justify-center rounded-full w-10 h-10 transition-colors", isToday(day) ? "bg-indigo-600 text-white font-bold" : isSameDay(day, currentDate) ? "bg-indigo-100 text-indigo-700 font-bold" : "text-slate-800 font-medium"),
									children: format(day, "d")
								})]
							}, day.toString()))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 overflow-y-auto relative bg-slate-50/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-h-[960px]",
								children: [
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-16 flex-shrink-0 border-r border-slate-200 bg-white relative z-10",
										children: hours.map((hour) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-20 relative border-b border-transparent",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-2.5 right-3 text-[11px] font-semibold text-slate-400 bg-white px-1",
												children: hour > 12 ? `${hour - 12} PM` : hour === 12 ? "12 PM" : `${hour} AM`
											})
										}, hour))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex-1 flex relative",
										children: weekDays.map((day) => {
											const dateStr = format(day, "yyyy-MM-dd");
											const dayEvents = getEventsForDay(dateStr);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1 border-l border-slate-200 relative min-w-0",
												children: [hours.map((hour) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-20 border-b border-slate-200/60 w-full absolute left-0 right-0 pointer-events-none",
													style: { top: `${(hour - 8) * 80}px` }
												}, hour)), dayEvents.map((event) => {
													if (!event.startTime || !event.endTime) return null;
													const startParts = event.startTime.split(":").map(Number);
													const endParts = event.endTime.split(":").map(Number);
													const startH = startParts[0] || 0;
													const startM = startParts[1] || 0;
													const endH = endParts[0] || 0;
													const endM = endParts[1] || 0;
													const top = (startH - 8 + startM / 60) * 80;
													const height = (endH - startH + (endM - startM) / 60) * 80;
													if (startH < 8) return null;
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: cn("absolute left-1 right-1 rounded-md p-2 text-white shadow-sm overflow-hidden border border-white/20 transition-all hover:brightness-110 cursor-pointer z-10", event.color),
														style: {
															top: `${top}px`,
															height: `${height}px`
														},
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-xs font-bold truncate leading-tight",
															children: event.title
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "text-[10px] opacity-90 truncate mt-0.5",
															children: [
																event.startTime,
																" - ",
																event.endTime
															]
														})]
													}, event.id);
												})]
											}, day.toString());
										})
									})
								]
							})
						})]
					}),
					view === "Day" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 flex flex-col items-center justify-center p-12 text-center text-slate-500",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-16 h-16 text-slate-200 mb-4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold text-slate-700",
								children: "Day View"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm mt-2",
								children: [
									"Currently showing ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-indigo-600",
										children: format(currentDate, "MMMM do, yyyy")
									}),
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setView("Week"),
								className: "mt-6 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors",
								children: "Back to Week View"
							})
						]
					})
				]
			})]
		})]
	});
}
var MOCK_LOGS = [
	{
		id: "1",
		employee: "Sarah Connor",
		avatar: "https://i.pravatar.cc/150?u=sarah",
		date: "2026-08-12",
		project: "Mobile App Redesign",
		task: "UI Mockups",
		hours: 4.5,
		status: "Approved",
		description: "Completed initial wireframes for onboarding."
	},
	{
		id: "2",
		employee: "John Doe",
		avatar: "https://i.pravatar.cc/150?u=john",
		date: "2026-08-12",
		project: "Backend API",
		task: "Database Migration",
		hours: 6,
		status: "Pending",
		description: "Started migration scripts for user table."
	},
	{
		id: "3",
		employee: "Emily Chen",
		avatar: "https://i.pravatar.cc/150?u=emily",
		date: "2026-08-11",
		project: "Marketing Site",
		task: "SEO Optimization",
		hours: 3,
		status: "Approved",
		description: "Updated meta tags and alt text across all pages."
	},
	{
		id: "4",
		employee: "Michael Brown",
		avatar: "https://i.pravatar.cc/150?u=michael",
		date: "2026-08-11",
		project: "Mobile App Redesign",
		task: "Bug Fixing",
		hours: 2.5,
		status: "Rejected",
		description: "Fixed login screen crash."
	}
];
function WorkLogs() {
	const [logs, setLogs] = (0, import_react.useState)(MOCK_LOGS);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [isLogTimeOpen, setIsLogTimeOpen] = (0, import_react.useState)(false);
	const [newDate, setNewDate] = (0, import_react.useState)(format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"));
	const [newProject, setNewProject] = (0, import_react.useState)("");
	const [newTask, setNewTask] = (0, import_react.useState)("");
	const [newHours, setNewHours] = (0, import_react.useState)("");
	const [newDescription, setNewDescription] = (0, import_react.useState)("");
	const handleLogTime = (e) => {
		e.preventDefault();
		if (!newDate || !newProject || !newHours) {
			toast.error("Please fill all required fields");
			return;
		}
		const newLog = {
			id: Math.random().toString(36).substr(2, 9),
			employee: "Alex Johnson (You)",
			avatar: "https://i.pravatar.cc/150?u=alex",
			date: newDate,
			project: newProject,
			task: newTask || "General",
			hours: parseFloat(newHours),
			status: "Pending",
			description: newDescription
		};
		setLogs([newLog, ...logs]);
		setIsLogTimeOpen(false);
		toast.success("Time logged successfully!");
		setNewProject("");
		setNewTask("");
		setNewHours("");
		setNewDescription("");
	};
	const filteredLogs = logs.filter((log) => log.employee.toLowerCase().includes(searchQuery.toLowerCase()) || log.project.toLowerCase().includes(searchQuery.toLowerCase()) || log.task.toLowerCase().includes(searchQuery.toLowerCase()));
	const totalHours = logs.reduce((sum, log) => sum + log.hours, 0);
	const pendingCount = logs.filter((l) => l.status === "Pending").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-slate-900 tracking-tight",
					children: "Work Logs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-slate-500 mt-1",
					children: "Track and manage employee time and activities"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 w-full sm:w-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1 sm:w-64",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "Search logs...",
								value: searchQuery,
								onChange: (e) => setSearchQuery(e.target.value),
								className: "w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "px-3 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl flex items-center gap-2 transition-colors shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-bold hidden sm:inline",
								children: "Filter"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
							open: isLogTimeOpen,
							onOpenChange: setIsLogTimeOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl flex items-center gap-2 transition-colors shadow-sm shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "Log Time"
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
								className: "sm:max-w-[425px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Log Time" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: handleLogTime,
									className: "space-y-4 pt-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-sm font-bold text-slate-700",
												children: "Date"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "date",
												required: true,
												value: newDate,
												onChange: (e) => setNewDate(e.target.value),
												className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-sm font-bold text-slate-700",
													children: "Project"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													placeholder: "e.g. Mobile App",
													required: true,
													value: newProject,
													onChange: (e) => setNewProject(e.target.value),
													className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-sm font-bold text-slate-700",
													children: "Hours"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "number",
													step: "0.1",
													min: "0.1",
													max: "24",
													placeholder: "e.g. 4.5",
													required: true,
													value: newHours,
													onChange: (e) => setNewHours(e.target.value),
													className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-sm font-bold text-slate-700",
												children: "Task"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												placeholder: "e.g. Bug Fixing",
												value: newTask,
												onChange: (e) => setNewTask(e.target.value),
												className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-sm font-bold text-slate-700",
												children: "Description"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												rows: 3,
												placeholder: "What did you work on?",
												value: newDescription,
												onChange: (e) => setNewDescription(e.target.value),
												className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pt-4 flex justify-end gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setIsLogTimeOpen(false),
												className: "px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm rounded-xl transition-colors",
												children: "Cancel"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "submit",
												className: "px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition-colors",
												children: "Save Log"
											})]
										})
									]
								})]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white p-5 rounded-2xl border border-slate-200 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold text-slate-500 mb-1",
							children: "Total Hours Logged"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-3xl font-black text-slate-900",
							children: [totalHours, "h"]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-6 h-6 text-indigo-600" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white p-5 rounded-2xl border border-slate-200 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold text-slate-500 mb-1",
							children: "Pending Approvals"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-3xl font-black text-amber-600",
							children: pendingCount
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-6 h-6 text-amber-600" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white p-5 rounded-2xl border border-slate-200 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold text-slate-500 mb-1",
							children: "Approved Logs"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-3xl font-black text-emerald-600",
							children: logs.length - pendingCount
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-6 h-6 text-emerald-600" })
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-slate-50 border-b border-slate-200",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider",
									children: "Employee"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider",
									children: "Date & Time"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider",
									children: "Project / Task"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider",
									children: "Description"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider",
									children: "Actions"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
							className: "divide-y divide-slate-100",
							children: [filteredLogs.map((log) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-slate-50/50 transition-colors group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 whitespace-nowrap",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: log.avatar,
												alt: log.employee,
												className: "w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-bold text-slate-900 text-sm",
												children: log.employee
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-6 py-4 whitespace-nowrap",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-semibold text-slate-900",
											children: format(new Date(log.date), "MMM d, yyyy")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs font-medium text-slate-500 flex items-center gap-1 mt-0.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3 h-3" }),
												" ",
												log.hours,
												" hours"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-6 py-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-bold text-indigo-600",
											children: log.project
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs font-medium text-slate-500 flex items-center gap-1 mt-0.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-3 h-3" }),
												" ",
												log.task
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm text-slate-600 line-clamp-2 max-w-xs",
											children: log.description
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 whitespace-nowrap",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: cn("px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 w-fit", log.status === "Approved" && "bg-emerald-50 text-emerald-700", log.status === "Pending" && "bg-amber-50 text-amber-700", log.status === "Rejected" && "bg-rose-50 text-rose-700"),
											children: [
												log.status === "Approved" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5" }),
												log.status === "Pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3.5 h-3.5" }),
												log.status === "Rejected" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "w-3.5 h-3.5" }),
												log.status
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "w-5 h-5" })
										})
									})
								]
							}, log.id)), filteredLogs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								colSpan: 6,
								className: "px-6 py-12 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollText, { className: "w-6 h-6 text-slate-400" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-bold text-slate-900",
										children: "No logs found"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-slate-500 mt-1",
										children: "Try adjusting your search or filters."
									})
								]
							}) })]
						})]
					})
				})
			})
		]
	});
}
var TooltipProvider = Provider;
var Tooltip$1 = Root3;
var TooltipTrigger = Trigger$1;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal$1, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)", className),
	...props
}) }));
TooltipContent.displayName = Content2$1.displayName;
var MOCK_TASKS = [
	{
		id: "1",
		title: "Design System Updates",
		description: "Update color tokens for dark mode.",
		status: "In Progress",
		priority: "High",
		dueDate: "2026-08-15",
		assignees: [{
			name: "Alex",
			avatar: "https://i.pravatar.cc/150?u=alex"
		}, {
			name: "Sarah",
			avatar: "https://i.pravatar.cc/150?u=sarah"
		}],
		commentsCount: 4,
		attachmentsCount: 2
	},
	{
		id: "2",
		title: "API Integration",
		description: "Connect frontend to new user endpoints.",
		status: "Todo",
		priority: "High",
		dueDate: "2026-08-18",
		assignees: [{
			name: "John",
			avatar: "https://i.pravatar.cc/150?u=john"
		}],
		commentsCount: 0,
		attachmentsCount: 0
	},
	{
		id: "3",
		title: "User Testing",
		description: "Conduct 5 interviews for the new flow.",
		status: "Todo",
		priority: "Medium",
		dueDate: "2026-08-20",
		assignees: [{
			name: "Emily",
			avatar: "https://i.pravatar.cc/150?u=emily"
		}],
		commentsCount: 1,
		attachmentsCount: 0
	},
	{
		id: "4",
		title: "Landing Page Copy",
		description: "Review and approve hero text.",
		status: "In Review",
		priority: "Medium",
		dueDate: "2026-08-14",
		assignees: [{
			name: "Alex",
			avatar: "https://i.pravatar.cc/150?u=alex"
		}],
		commentsCount: 2,
		attachmentsCount: 1
	},
	{
		id: "5",
		title: "Setup CI/CD",
		description: "GitHub actions for auto-deployment.",
		status: "Done",
		priority: "Low",
		dueDate: "2026-08-10",
		assignees: [{
			name: "Michael",
			avatar: "https://i.pravatar.cc/150?u=michael"
		}],
		commentsCount: 0,
		attachmentsCount: 0
	}
];
function Tasks() {
	const [tasks, setTasks] = (0, import_react.useState)(MOCK_TASKS);
	const [view, setView] = (0, import_react.useState)("board");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [isNewTaskOpen, setIsNewTaskOpen] = (0, import_react.useState)(false);
	const [editingTaskId, setEditingTaskId] = (0, import_react.useState)(null);
	const [newTaskTitle, setNewTaskTitle] = (0, import_react.useState)("");
	const [newTaskDesc, setNewTaskDesc] = (0, import_react.useState)("");
	const [newTaskPriority, setNewTaskPriority] = (0, import_react.useState)("Medium");
	const [newTaskDueDate, setNewTaskDueDate] = (0, import_react.useState)("");
	const [inlineEditingTaskId, setInlineEditingTaskId] = (0, import_react.useState)(null);
	const [inlineTaskTitle, setInlineTaskTitle] = (0, import_react.useState)("");
	const [inlineTaskDesc, setInlineTaskDesc] = (0, import_react.useState)("");
	const [inlineTaskStatus, setInlineTaskStatus] = (0, import_react.useState)("Todo");
	const [inlineTaskPriority, setInlineTaskPriority] = (0, import_react.useState)("Medium");
	const [inlineTaskDueDate, setInlineTaskDueDate] = (0, import_react.useState)("");
	const startInlineEdit = (task) => {
		setInlineEditingTaskId(task.id);
		setInlineTaskTitle(task.title);
		setInlineTaskDesc(task.description);
		setInlineTaskStatus(task.status);
		setInlineTaskPriority(task.priority);
		setInlineTaskDueDate(task.dueDate);
	};
	const saveInlineEdit = () => {
		if (!inlineEditingTaskId) return;
		setTasks(tasks.map((t) => t.id === inlineEditingTaskId ? {
			...t,
			title: inlineTaskTitle,
			description: inlineTaskDesc,
			status: inlineTaskStatus,
			priority: inlineTaskPriority,
			dueDate: inlineTaskDueDate
		} : t));
		setInlineEditingTaskId(null);
		toast.success("Task updated!");
	};
	const handleCreateTask = (e) => {
		e.preventDefault();
		if (!newTaskTitle) {
			toast.error("Task title is required");
			return;
		}
		if (editingTaskId) {
			setTasks(tasks.map((t) => t.id === editingTaskId ? {
				...t,
				title: newTaskTitle,
				description: newTaskDesc,
				priority: newTaskPriority,
				dueDate: newTaskDueDate || t.dueDate
			} : t));
			toast.success("Task updated successfully!");
		} else {
			const newTask = {
				id: Math.random().toString(36).substr(2, 9),
				title: newTaskTitle,
				description: newTaskDesc,
				status: "Todo",
				priority: newTaskPriority,
				dueDate: newTaskDueDate || format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"),
				assignees: [{
					name: "Alex (You)",
					avatar: "https://i.pravatar.cc/150?u=alex"
				}],
				commentsCount: 0,
				attachmentsCount: 0
			};
			setTasks([newTask, ...tasks]);
			toast.success("Task created successfully!");
		}
		setIsNewTaskOpen(false);
		setEditingTaskId(null);
		setNewTaskTitle("");
		setNewTaskDesc("");
		setNewTaskPriority("Medium");
		setNewTaskDueDate("");
	};
	const openEditTask = (task) => {
		setEditingTaskId(task.id);
		setNewTaskTitle(task.title);
		setNewTaskDesc(task.description);
		setNewTaskPriority(task.priority);
		setNewTaskDueDate(task.dueDate);
		setIsNewTaskOpen(true);
	};
	const filteredTasks = tasks.filter((t) => t.title.toLowerCase().includes(searchQuery.toLowerCase()));
	const columns = [
		{
			title: "To Do",
			status: "Todo"
		},
		{
			title: "In Progress",
			status: "In Progress"
		},
		{
			title: "In Review",
			status: "In Review"
		},
		{
			title: "Done",
			status: "Done"
		}
	];
	const getPriorityColor = (priority) => {
		switch (priority) {
			case "High": return "bg-rose-100 text-rose-700";
			case "Medium": return "bg-amber-100 text-amber-700";
			case "Low": return "bg-emerald-100 text-emerald-700";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 h-[calc(100vh-8rem)] flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shrink-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold text-slate-900 tracking-tight",
				children: "Tasks"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-slate-500 mt-1",
				children: "Manage your team's work and track progress."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 w-full sm:w-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1 sm:w-64",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Search tasks...",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							className: "w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center bg-white border border-slate-200 rounded-xl p-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setView("board"),
							className: cn("p-1.5 rounded-lg transition-colors", view === "board" ? "bg-indigo-50 text-indigo-600" : "text-slate-400 hover:text-slate-600"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "w-4 h-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setView("list"),
							className: cn("p-1.5 rounded-lg transition-colors", view === "list" ? "bg-indigo-50 text-indigo-600" : "text-slate-400 hover:text-slate-600"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "w-4 h-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
						open: isNewTaskOpen,
						onOpenChange: (open) => {
							setIsNewTaskOpen(open);
							if (!open) {
								setEditingTaskId(null);
								setNewTaskTitle("");
								setNewTaskDesc("");
								setNewTaskPriority("Medium");
								setNewTaskDueDate("");
							}
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl flex items-center gap-2 transition-colors shadow-sm shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "New Task"
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
							className: "sm:max-w-[425px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editingTaskId ? "Edit Task" : "Create New Task" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleCreateTask,
								className: "space-y-4 pt-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-sm font-bold text-slate-700",
											children: "Task Title"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											required: true,
											placeholder: "e.g. Design Logo",
											value: newTaskTitle,
											onChange: (e) => setNewTaskTitle(e.target.value),
											className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-sm font-bold text-slate-700",
											children: "Description"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											rows: 3,
											placeholder: "Task details...",
											value: newTaskDesc,
											onChange: (e) => setNewTaskDesc(e.target.value),
											className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-sm font-bold text-slate-700",
												children: "Priority"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: newTaskPriority,
												onChange: (e) => setNewTaskPriority(e.target.value),
												className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "High",
														children: "High"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Medium",
														children: "Medium"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Low",
														children: "Low"
													})
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-sm font-bold text-slate-700",
												children: "Due Date"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "date",
												value: newTaskDueDate,
												onChange: (e) => setNewTaskDueDate(e.target.value),
												className: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-4 flex justify-end gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setIsNewTaskOpen(false),
											className: "px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm rounded-xl transition-colors",
											children: "Cancel"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											className: "px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition-colors",
											children: editingTaskId ? "Save Changes" : "Create Task"
										})]
									})
								]
							})]
						})]
					})
				]
			})]
		}), view === "board" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 overflow-x-auto overflow-y-hidden pb-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-6 h-full min-w-max",
				children: columns.map((col) => {
					const colTasks = filteredTasks.filter((t) => t.status === col.status);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-80 flex flex-col bg-slate-50/50 rounded-2xl border border-slate-200 shrink-0",
						onDragOver: (e) => e.preventDefault(),
						onDrop: (e) => {
							e.preventDefault();
							const taskId = e.dataTransfer.getData("taskId");
							setTasks(tasks.map((t) => t.id === taskId ? {
								...t,
								status: col.status
							} : t));
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 border-b border-slate-200 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-slate-700",
								children: col.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-slate-200 text-slate-600 text-xs font-bold px-2 py-0.5 rounded-full",
								children: colTasks.length
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 p-3 overflow-y-auto space-y-3",
							children: colTasks.map((task) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								draggable: true,
								onDragStart: (e) => e.dataTransfer.setData("taskId", task.id),
								className: "bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-start mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider", getPriorityColor(task.priority)),
											children: task.priority
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: (e) => {
												e.stopPropagation();
												openEditTask(task);
											},
											className: "text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-slate-700",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "w-4 h-4" })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-bold text-slate-800 text-sm mb-1 leading-tight",
										children: task.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-slate-500 mb-4 line-clamp-2",
										children: task.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mt-auto",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center -space-x-2",
											children: task.assignees.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: a.avatar,
												alt: a.name,
												className: "w-6 h-6 rounded-full border-2 border-white",
												title: a.name
											}, i))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3 text-slate-400",
											children: [task.commentsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1 text-xs font-medium",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "w-3 h-3" }),
													" ",
													task.commentsCount
												]
											}), task.attachmentsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1 text-xs font-medium",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { className: "w-3 h-3" }),
													" ",
													task.attachmentsCount
												]
											})]
										})]
									})
								]
							}, task.id))
						})]
					}, col.status);
				})
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-slate-50 border-b border-slate-200 sticky top-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider",
								children: "Task"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider",
								children: "Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider",
								children: "Priority"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider",
								children: "Due Date"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider",
								children: "Assignee"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-6 py-4" })
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y divide-slate-100",
						children: filteredTasks.map((task) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
							className: "hover:bg-slate-50/50 transition-colors group cursor-pointer",
							onClick: () => !inlineEditingTaskId && startInlineEdit(task),
							children: inlineEditingTaskId === task.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-6 py-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: inlineTaskTitle,
										onChange: (e) => setInlineTaskTitle(e.target.value),
										className: "w-full px-2 py-1 text-sm font-bold border border-slate-200 rounded mb-1 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: inlineTaskDesc,
										onChange: (e) => setInlineTaskDesc(e.target.value),
										className: "w-full px-2 py-1 text-xs text-slate-500 border border-slate-200 rounded focus:ring-2 focus:ring-indigo-500/20 focus:outline-none"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4 whitespace-nowrap",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: inlineTaskStatus,
										onChange: (e) => setInlineTaskStatus(e.target.value),
										className: "px-2 py-1 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-md focus:outline-none",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Todo",
												children: "Todo"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "In Progress",
												children: "In Progress"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "In Review",
												children: "In Review"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Done",
												children: "Done"
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4 whitespace-nowrap",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: inlineTaskPriority,
										onChange: (e) => setInlineTaskPriority(e.target.value),
										className: "px-2 py-1 text-xs font-bold border border-slate-200 rounded-md bg-white focus:outline-none",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "High",
												children: "High"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Medium",
												children: "Medium"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Low",
												children: "Low"
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4 whitespace-nowrap",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "date",
										value: inlineTaskDueDate,
										onChange: (e) => setInlineTaskDueDate(e.target.value),
										className: "px-2 py-1 text-sm text-slate-600 border border-slate-200 rounded bg-white focus:outline-none"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4 whitespace-nowrap",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center -space-x-2",
										children: task.assignees.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: a.avatar,
											alt: a.name,
											className: "w-7 h-7 rounded-full border-2 border-white shadow-sm",
											title: a.name
										}, i))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4 whitespace-nowrap text-right",
									onClick: (e) => e.stopPropagation(),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-end gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setInlineEditingTaskId(null),
											className: "px-2 py-1 text-xs font-bold text-slate-500 hover:bg-slate-200 rounded transition-colors",
											children: "Cancel"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: saveInlineEdit,
											className: "px-2 py-1 text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700 rounded transition-colors",
											children: "Save"
										})]
									})
								})
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-6 py-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-bold text-slate-900 text-sm mb-0.5",
										children: task.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-slate-500 truncate max-w-[250px] sm:max-w-md",
											children: task.description
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "max-w-xs text-sm",
										children: task.description
									}) })] }) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4 whitespace-nowrap",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md",
										children: task.status
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4 whitespace-nowrap",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider inline-block", getPriorityColor(task.priority)),
										children: task.priority
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-6 py-4 whitespace-nowrap text-sm text-slate-600 flex items-center gap-1.5 pt-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-3.5 h-3.5" }),
										" ",
										new Date(task.dueDate).toLocaleDateString("en-US", {
											month: "short",
											day: "numeric"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4 whitespace-nowrap",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center -space-x-2",
										children: task.assignees.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: a.avatar,
											alt: a.name,
											className: "w-7 h-7 rounded-full border-2 border-white shadow-sm",
											title: a.name
										}, i))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4 whitespace-nowrap text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity",
										children: "Click row to edit"
									})
								})
							] })
						}, task.id))
					})]
				})
			})
		})]
	});
}
var CHANNELS = [
	{
		id: "1",
		name: "general",
		unread: 0
	},
	{
		id: "2",
		name: "engineering",
		unread: 3
	},
	{
		id: "3",
		name: "marketing",
		unread: 0
	},
	{
		id: "4",
		name: "design",
		unread: 1
	}
];
var DIRECT_MESSAGES = [
	{
		id: "1",
		name: "Sarah Connor",
		avatar: "https://i.pravatar.cc/150?u=sarah",
		online: true,
		unread: 2
	},
	{
		id: "2",
		name: "John Doe",
		avatar: "https://i.pravatar.cc/150?u=john",
		online: false,
		unread: 0
	},
	{
		id: "3",
		name: "Emily Chen",
		avatar: "https://i.pravatar.cc/150?u=emily",
		online: true,
		unread: 0
	}
];
var MOCK_MESSAGES = [
	{
		id: "1",
		sender: "Sarah Connor",
		avatar: "https://i.pravatar.cc/150?u=sarah",
		time: "10:24 AM",
		content: "Hey team, just deployed the new auth service. Can someone review the PR?",
		isMe: false
	},
	{
		id: "2",
		sender: "John Doe",
		avatar: "https://i.pravatar.cc/150?u=john",
		time: "10:26 AM",
		content: "I'll take a look right now.",
		isMe: false
	},
	{
		id: "3",
		sender: "Alex Johnson",
		avatar: "https://i.pravatar.cc/150?u=alex",
		time: "10:30 AM",
		content: "Thanks John. Let me know if you need any context on the token refresh logic.",
		isMe: true
	},
	{
		id: "4",
		sender: "Sarah Connor",
		avatar: "https://i.pravatar.cc/150?u=sarah",
		time: "10:32 AM",
		content: "Perfect. It should be pretty straightforward, mostly just updated the JWT expiration handling.",
		isMe: false
	}
];
function Chat() {
	const [activeChannel, setActiveChannel] = (0, import_react.useState)("engineering");
	const [messages, setMessages] = (0, import_react.useState)(MOCK_MESSAGES);
	const [newMessage, setNewMessage] = (0, import_react.useState)("");
	const handleSend = (e) => {
		e.preventDefault();
		if (!newMessage.trim()) return;
		setMessages([...messages, {
			id: Date.now().toString(),
			sender: "Alex Johnson",
			avatar: "https://i.pravatar.cc/150?u=alex",
			time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			}),
			content: newMessage,
			isMe: true
		}]);
		setNewMessage("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-[calc(100vh-8rem)] bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-64 border-r border-slate-200 bg-slate-50/50 flex flex-col hidden md:flex",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 border-b border-slate-200 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-bold text-slate-800 tracking-tight",
						children: "Messages"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Jump to...",
							className: "w-full pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto px-2 pb-4 space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-2 mb-2 flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Channels" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3.5 h-3.5 cursor-pointer hover:text-slate-700" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-0.5",
						children: CHANNELS.map((channel) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveChannel(channel.name),
							className: cn("w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-sm transition-colors", activeChannel === channel.name ? "bg-indigo-50 text-indigo-700 font-bold" : "text-slate-600 hover:bg-slate-100 font-medium"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hash, { className: "w-4 h-4 opacity-70" }), channel.name]
							}), channel.unread > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-indigo-600 text-white text-[10px] font-bold px-1.5 rounded-full",
								children: channel.unread
							})]
						}, channel.id))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-2 mb-2 flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Direct Messages" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3.5 h-3.5 cursor-pointer hover:text-slate-700" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-0.5",
						children: DIRECT_MESSAGES.map((dm) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveChannel(dm.name),
							className: cn("w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-sm transition-colors", activeChannel === dm.name ? "bg-indigo-50 text-indigo-700 font-bold" : "text-slate-600 hover:bg-slate-100 font-medium"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: dm.avatar,
										alt: dm.name,
										className: "w-5 h-5 rounded-full"
									}), dm.online && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-500 border border-white rounded-full" })]
								}), dm.name]
							}), dm.unread > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-indigo-600 text-white text-[10px] font-bold px-1.5 rounded-full",
								children: dm.unread
							})]
						}, dm.id))
					})] })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 flex flex-col bg-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-white shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-bold text-slate-800 text-lg tracking-tight flex items-center gap-1",
							children: [activeChannel.toLowerCase() === activeChannel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hash, { className: "w-5 h-5 text-slate-400" }) : null, activeChannel]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-5 h-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "w-5 h-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-6 bg-slate-200 mx-1" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "w-5 h-5" })
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto p-6 space-y-6",
					children: messages.map((msg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("flex gap-4 max-w-3xl", msg.isMe ? "ml-auto flex-row-reverse" : ""),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: msg.avatar,
							alt: msg.sender,
							className: "w-10 h-10 rounded-full shrink-0 shadow-sm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("flex flex-col gap-1", msg.isMe ? "items-end" : "items-start"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-sm text-slate-900",
									children: msg.sender
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium text-slate-400",
									children: msg.time
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("px-4 py-2.5 rounded-2xl text-sm leading-relaxed", msg.isMe ? "bg-indigo-600 text-white rounded-tr-none" : "bg-slate-100 text-slate-800 rounded-tl-none"),
								children: msg.content
							})]
						})]
					}, msg.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 bg-white border-t border-slate-200 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSend,
						className: "relative flex items-end gap-2 bg-slate-50 border border-slate-200 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-300 transition-all",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "p-2 text-slate-400 hover:text-slate-600 transition-colors shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-5 h-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: newMessage,
								onChange: (e) => setNewMessage(e.target.value),
								placeholder: `Message ${activeChannel.toLowerCase() === activeChannel ? "#" : ""}${activeChannel}`,
								className: "w-full bg-transparent border-none focus:outline-none resize-none max-h-32 min-h-[2.5rem] py-2 text-sm text-slate-800",
								rows: 1,
								onKeyDown: (e) => {
									if (e.key === "Enter" && !e.shiftKey) {
										e.preventDefault();
										handleSend(e);
									}
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 shrink-0 pb-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "p-1.5 text-slate-400 hover:text-slate-600 transition-colors hidden sm:block",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smile, { className: "w-5 h-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "p-1.5 text-slate-400 hover:text-slate-600 transition-colors hidden sm:block",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { className: "w-5 h-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										disabled: !newMessage.trim(),
										className: "p-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ml-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" })
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center mt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] font-medium text-slate-400",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Return" }),
								" to send, ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Shift + Return" }),
								" for new line"
							]
						})
					})]
				})
			]
		})]
	});
}
var improvements = [
	["Grouped sections", "40+ flat items are now split into Overview, People, Time, Finance, Work, Workplace and Admin."],
	["Menu search", "Type to filter items and sub-items instantly — the fastest path in a deep menu."],
	["Pinned shortcuts", "Hover any item to pin it to the top; each user keeps their own 3–5 daily screens."],
	["Icon-collapse mode", "Shrinks to a 68px icon rail instead of disappearing, so the content area gets more room."],
	["Single-column accordions", "Sub-items sit on a guide rail with a clear active pill — no more losing your place."],
	["Live badges", "Counts on Leave Requests, Interviews, Tasks and Chat surface work without opening pages."]
];
var suggestions = [
	["Command palette (⌘K)", "Jump to any screen or record, plus quick actions like 'Create Invoice'."],
	["Recently visited", "Auto-list the last 5 screens under Pinned — zero setup for the user."],
	["Role-based menus", "Hide Finance/Restrictions from non-admins; a shorter menu is a faster menu."],
	["Notifications inbox", "One bell for approvals, penalties and remarks instead of hunting per module."],
	["Approvals hub", "Merge Leave Requests, Penalty and Invoice approvals into one queue."],
	["Reports & Analytics", "Attendance, payroll cost and hiring funnel in one place — currently missing."],
	["Global 'Create' button", "Invoice, task, employee, leave — the top 4 create actions in one menu."],
	["Mobile drawer", "Off-canvas sidebar with a bottom bar for the 4 most used screens."]
];
function Index() {
	const [active, setActiveState] = (0, import_react.useState)(() => {
		if (typeof window !== "undefined") return localStorage.getItem("activeSidebarTab") || "/dashboard";
		return "/dashboard";
	});
	const setActive = (val) => {
		setActiveState(val);
		if (typeof window !== "undefined") localStorage.setItem("activeSidebarTab", val);
	};
	const [activeAction, setActiveAction] = (0, import_react.useState)(null);
	const handleQuickAction = (label) => {
		if (label === "Export Excel" || label === "Export PDF") {
			const type = label.split(" ")[1];
			toast.loading(`Exporting data to ${type}...`, { duration: 1500 });
			setTimeout(() => toast.success(`${type} export complete!`, { description: "Your file has been downloaded." }), 1500);
		} else setActiveAction(label);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DepartmentProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmployeeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-screen overflow-hidden bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSidebar, {
				active,
				setActive
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "min-w-0 flex-1 overflow-x-hidden px-6 pb-24 pt-20 sm:px-10 md:pb-8 md:pt-8",
				children: [
					active === "/dashboard" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SalesProvider, { children: [
						active === "/work/sales/dashboard" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesDashboard, {
							setActive,
							onAction: handleQuickAction
						}),
						active === "/work/sales/pipeline" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesPipeline, { onAction: handleQuickAction }),
						active === "/work/sales/leads" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesLeads, { onAction: handleQuickAction }),
						active === "/work/sales/tasks" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesTasks, { onAction: handleQuickAction }),
						active === "/work/sales/analytics" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesAnalytics, { onAction: handleQuickAction }),
						active === "/work/sales/team" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesTeamPerformance, { onAction: handleQuickAction }),
						active === "/work/sales/reports" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesReports, { onAction: handleQuickAction }),
						active === "/work/sales/settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesSettings, {})
					] }),
					active === "/payroll/dashboard" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PayrollDashboard, {}),
					active === "/payroll/structure" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalaryStructure, {}),
					active === "/payroll/settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PayrollSettings, {}),
					active === "/payroll/processing" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PayrollProcessing, {}),
					active === "/payroll/bonuses" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BonusDeductions, {}),
					active === "/payroll/payslips" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Payslips, {}),
					active === "/employees/list" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmployeeList, {}),
					active === "/employees/org" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrgStructure, {}),
					active === "/employees/attendance" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttendanceList, {}),
					active === "/employees/leave-requests" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaveRequests, {}),
					active === "/recruitment/interviews" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Interviews, {}),
					active === "/recruitment/hirings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hirings, {}),
					active === "/schedule" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Schedule, {}),
					active === "/work/logs" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkLogs, {}),
					active === "/tasks" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tasks, {}),
					active === "/chat" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chat, {}),
					active !== "/dashboard" && active !== "/schedule" && active !== "/work/logs" && active !== "/tasks" && active !== "/chat" && !active.startsWith("/work/sales") && !active.startsWith("/payroll") && !active.startsWith("/employees") && !active.startsWith("/recruitment") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "mb-8 max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold uppercase tracking-widest text-muted-foreground",
									children: "Navigation review"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-2 text-3xl font-black tracking-tight sm:text-4xl",
									children: "Your sidebar, reorganized"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-muted-foreground",
									children: "Same menu items from your screenshots — regrouped, searchable and collapsible. Click around the sidebar to try it."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "mb-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mb-4 text-lg font-bold",
								children: "What changed"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
								children: improvements.map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border bg-card p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: body
									})]
								}, title))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "max-w-5xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mb-4 text-lg font-bold",
								children: "Worth adding next"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "grid gap-3 sm:grid-cols-2",
								children: suggestions.map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-xl border border-dashed border-border p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: body
									})]
								}, title))
							})]
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActionModals, {
				activeAction,
				onClose: () => setActiveAction(null)
			})
		]
	}) }) }) });
}
//#endregion
export { Index as component };
