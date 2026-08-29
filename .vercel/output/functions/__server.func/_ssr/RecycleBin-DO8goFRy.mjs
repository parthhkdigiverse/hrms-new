import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { I as require_jsx_runtime, d as DialogContent$1, f as DialogDescription$1, g as DialogTrigger$1, h as DialogTitle$1, l as Dialog$1, m as DialogPortal$1, p as DialogOverlay$1, u as DialogClose$1 } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { Kt as Info, Z as RotateCcw, ar as ArrowUpDown, i as X, lr as ArrowDown, q as Search, rr as ArrowUp, v as TriangleAlert, x as Trash2 } from "../_libs/lucide-react.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { m as format, p as formatDistanceToNow } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/RecycleBin-DO8goFRy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatDate(dateString) {
	if (!dateString) return "-";
	try {
		const d = new Date(dateString);
		if (isNaN(d.getTime())) return String(dateString);
		const format = typeof window !== "undefined" ? localStorage.getItem("hrms_date_format") || "MMM DD, YYYY" : "MMM DD, YYYY";
		const day = String(d.getDate()).padStart(2, "0");
		const monthNum = String(d.getMonth() + 1).padStart(2, "0");
		const year = d.getFullYear();
		const shortMonth = new Intl.DateTimeFormat("en-US", { month: "short" }).format(d);
		switch (format) {
			case "DD/MM/YYYY": return `${day}/${monthNum}/${year}`;
			case "MM/DD/YYYY": return `${monthNum}/${day}/${year}`;
			case "DD MMM YYYY": return `${day} ${shortMonth} ${year}`;
			case "YYYY-MM-DD": return `${year}-${monthNum}-${day}`;
			default: return `${shortMonth} ${day}, ${year}`;
		}
	} catch (e) {
		return String(dateString);
	}
}
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogClose = DialogClose$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-[calc(100%-2rem)] sm:w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose$1, {
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
function useSortableData(items, config = null) {
	const [sortConfig, setSortConfig] = (0, import_react.useState)(config);
	const sortedItems = (0, import_react.useMemo)(() => {
		let sortableItems = [...items];
		if (sortConfig !== null && sortConfig.key !== null && sortConfig.direction !== null) sortableItems.sort((a, b) => {
			const keys = sortConfig.key.split(".");
			let aValue = a;
			let bValue = b;
			for (const k of keys) {
				aValue = aValue ? aValue[k] : void 0;
				bValue = bValue ? bValue[k] : void 0;
			}
			if (typeof aValue === "string" && typeof bValue === "string") {
				const aLower = aValue.toLowerCase();
				const bLower = bValue.toLowerCase();
				if (aLower < bLower) return sortConfig.direction === "ascending" ? -1 : 1;
				if (aLower > bLower) return sortConfig.direction === "ascending" ? 1 : -1;
				return 0;
			}
			if (aValue < bValue) return sortConfig.direction === "ascending" ? -1 : 1;
			if (aValue > bValue) return sortConfig.direction === "ascending" ? 1 : -1;
			return 0;
		});
		return sortableItems;
	}, [items, sortConfig]);
	const requestSort = (key) => {
		let direction = "ascending";
		if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") direction = "descending";
		else if (sortConfig && sortConfig.key === key && sortConfig.direction === "descending") {
			direction = null;
			key = "";
		}
		setSortConfig({
			key: key || null,
			direction
		});
	};
	return {
		items: sortedItems,
		requestSort,
		sortConfig
	};
}
function SortableHeader({ label, sortKey, currentSort, onSort, align = "left", className, ...props }) {
	const isActive = currentSort?.key === sortKey;
	const isAscending = isActive && currentSort?.direction === "ascending";
	const isDescending = isActive && currentSort?.direction === "descending";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
		className: cn("cursor-pointer select-none group hover:bg-muted/50 transition-colors", className),
		onClick: () => onSort(sortKey),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex items-center gap-1.5", align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn(isActive ? "text-foreground font-bold" : "text-muted-foreground"),
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col opacity-40 group-hover:opacity-100 transition-opacity",
				children: isAscending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "w-3.5 h-3.5 text-primary opacity-100" }) : isDescending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "w-3.5 h-3.5 text-primary opacity-100" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, { className: "w-3.5 h-3.5 text-muted-foreground" })
			})]
		})
	});
}
function ConfirmModal({ isOpen, onClose, onConfirm, title, description, confirmText, itemName, variant = "destructive" }) {
	if (!isOpen) return null;
	const isRestore = variant === "restore";
	const isInfo = variant === "info";
	const headerBgClass = isRestore ? "bg-emerald-50/50" : isInfo ? "bg-blue-50/50" : "bg-red-50/50";
	const iconBgClass = isRestore ? "bg-emerald-100 text-emerald-600" : isInfo ? "bg-blue-100 text-blue-600" : "bg-red-100 text-red-600";
	const buttonClass = isRestore ? "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20" : isInfo ? "bg-blue-500 hover:bg-blue-600 shadow-blue-500/20" : "bg-red-500 hover:bg-red-600 shadow-red-500/20";
	const finalConfirmText = confirmText || (isRestore ? "Restore" : isInfo ? "Confirm" : "Delete");
	const actionNoun = isRestore ? "restoration" : isInfo ? "action" : "deletion";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: isOpen,
		onOpenChange: (open) => !open && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-md p-0 overflow-hidden rounded-[2rem] gap-0 border-border/60 shadow-2xl [&>button]:hidden bg-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex items-center justify-between px-6 py-5 border-b border-border/50 ${headerBgClass}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `p-2 rounded-xl ${iconBgClass}`,
						children: isRestore ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "w-5 h-5" }) : isInfo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "w-5 h-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "w-5 h-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-black text-foreground",
						children: title
					}), itemName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: [
							"Confirm ",
							actionNoun,
							" of ",
							itemName
						]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "p-2 text-muted-foreground hover:text-foreground/80 hover:bg-muted rounded-full transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6 md:p-8 space-y-6 overflow-y-auto max-h-[70vh]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-foreground/80 text-sm leading-relaxed",
					children: description
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-6 md:px-8 py-4 md:py-6 bg-muted/30 border-t border-border/50 flex justify-end gap-3 mt-auto shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "px-5 py-2.5 rounded-xl font-bold text-muted-foreground hover:bg-muted transition-colors",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							onConfirm();
							onClose();
						},
						className: `px-6 py-2.5 text-sm font-bold text-white rounded-xl transition-all shadow-sm active:scale-95 ${buttonClass}`,
						children: finalConfirmText
					})]
				})]
			})]
		})
	});
}
var RECYCLE_BIN_KEY = "hrms_recycle_bin";
function getRecycleBinItems() {
	try {
		const data = localStorage.getItem(RECYCLE_BIN_KEY);
		if (!data) return [];
		return JSON.parse(data);
	} catch (e) {
		console.error("Failed to parse recycle bin data", e);
		return [];
	}
}
function saveRecycleBinItems(items) {
	localStorage.setItem(RECYCLE_BIN_KEY, JSON.stringify(items));
}
function moveToRecycleBin(moduleName, itemName, data, storageKey, nestedConfig) {
	const items = getRecycleBinItems();
	const restoreDataObj = {
		storageKey,
		data,
		isNested: !!nestedConfig
	};
	if (nestedConfig?.parentId) restoreDataObj.parentId = nestedConfig.parentId;
	if (nestedConfig?.parentKey) restoreDataObj.parentKey = nestedConfig.parentKey;
	if (nestedConfig?.nestedArrayKey) restoreDataObj.nestedArrayKey = nestedConfig.nestedArrayKey;
	const newItem = {
		id: `rb_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
		module: moduleName,
		itemName,
		deletedAt: Date.now(),
		restoreData: restoreDataObj
	};
	items.unshift(newItem);
	saveRecycleBinItems(items);
}
function restoreItem(binId) {
	const items = getRecycleBinItems();
	const index = items.findIndex((item) => item.id === binId);
	if (index === -1) return false;
	const itemToRestore = items[index];
	if (!itemToRestore) return false;
	const { restoreData } = itemToRestore;
	try {
		const rawData = localStorage.getItem(restoreData.storageKey);
		let targetArray = rawData ? JSON.parse(rawData) : restoreData.nestedArrayKey === "restoreAsCategory" ? {} : [];
		if (restoreData.isNested && restoreData.parentKey && restoreData.nestedArrayKey) {
			if (restoreData.nestedArrayKey === "restoreAsCategory") targetArray[restoreData.parentId] = restoreData.data;
			else {
				const parentIndex = targetArray.findIndex((p) => p[restoreData.parentKey] === restoreData.parentId);
				if (parentIndex !== -1) {
					if (!targetArray[parentIndex][restoreData.nestedArrayKey]) targetArray[parentIndex][restoreData.nestedArrayKey] = [];
					targetArray[parentIndex][restoreData.nestedArrayKey].push(restoreData.data);
				} else {
					console.warn(`Parent ${restoreData.parentId} not found in ${restoreData.storageKey}`);
					return false;
				}
			}
		} else targetArray.push(restoreData.data);
		localStorage.setItem(restoreData.storageKey, JSON.stringify(targetArray));
		items.splice(index, 1);
		saveRecycleBinItems(items);
		return true;
	} catch (e) {
		console.error("Failed to restore item", e);
		return false;
	}
}
function permanentlyDeleteItem(binId) {
	saveRecycleBinItems(getRecycleBinItems().filter((item) => item.id !== binId));
}
function cleanupOldItems() {
	const items = getRecycleBinItems();
	const now = Date.now();
	const msInDay = 864e5;
	const validItems = items.filter((item) => {
		return (now - item.deletedAt) / msInDay <= 30;
	});
	if (validItems.length !== items.length) saveRecycleBinItems(validItems);
}
function RecycleBin() {
	const [items, setItems] = (0, import_react.useState)([]);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [confirmModalState, setConfirmModalState] = (0, import_react.useState)({
		isOpen: false,
		action: "restore",
		id: "",
		title: "",
		desc: "",
		itemName: ""
	});
	(0, import_react.useEffect)(() => {
		cleanupOldItems();
		setItems(getRecycleBinItems());
	}, []);
	const handleRestore = () => {
		if (restoreItem(confirmModalState.id)) {
			toast.success("Item restored successfully");
			setItems(getRecycleBinItems());
		} else toast.error("Failed to restore item. Target storage may have changed.");
		setConfirmModalState((prev) => ({
			...prev,
			isOpen: false
		}));
	};
	const handleDelete = () => {
		permanentlyDeleteItem(confirmModalState.id);
		toast.success("Item permanently deleted");
		setItems(getRecycleBinItems());
		setConfirmModalState((prev) => ({
			...prev,
			isOpen: false
		}));
	};
	const filteredItems = items.filter((i) => i.itemName.toLowerCase().includes(searchQuery.toLowerCase()) || i.module.toLowerCase().includes(searchQuery.toLowerCase()));
	const { items: sortedItems, requestSort, sortConfig } = useSortableData(filteredItems);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full space-y-6 animate-in fade-in duration-500 pb-12 relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-4xl font-black tracking-tight text-foreground flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-8 h-8 text-rose-500" }), "Recycle Bin"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground mt-2 font-medium",
					children: [
						"Restore deleted items within ",
						30,
						" days. Items older than this will be permanently removed."
					]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card border border-border/50 rounded-2xl shadow-sm overflow-hidden flex flex-col min-h-[500px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 md:p-6 border-b border-border/50 flex flex-col sm:flex-row justify-between gap-4 items-center bg-muted/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full sm:max-w-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Search deleted items...",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							className: "w-full pl-10 pr-4 py-2.5 bg-background border border-border/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs font-bold text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg border border-border/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [items.length, " items in bin"] })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-x-auto",
					children: filteredItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center h-full p-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-8 h-8 text-muted-foreground/50" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold text-foreground",
								children: "Recycle Bin is empty"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground mt-1 max-w-sm",
								children: "No items have been deleted recently, or they didn't match your search criteria."
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left border-collapse whitespace-nowrap min-w-[800px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-muted/30 text-[10px] font-black uppercase tracking-widest text-muted-foreground border-b border-border/50",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableHeader, {
									label: "Module",
									sortKey: "module",
									currentSort: sortConfig,
									onSort: requestSort,
									className: "p-4 w-[20%]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableHeader, {
									label: "Item Name",
									sortKey: "itemName",
									currentSort: sortConfig,
									onSort: requestSort,
									className: "p-4 w-[35%]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableHeader, {
									label: "Deleted On",
									sortKey: "deletedAt",
									currentSort: sortConfig,
									onSort: requestSort,
									className: "p-4 w-[20%]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 w-[15%]",
									children: "Days Left"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 w-[10%] text-right",
									children: "Actions"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-border/30",
							children: sortedItems.map((item) => {
								const deletedDate = new Date(item.deletedAt);
								const expiryDate = new Date(item.deletedAt + 2592e6);
								const daysLeft = Math.ceil((expiryDate.getTime() - Date.now()) / 864e5);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-muted/10 transition-colors group",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-flex px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded-md",
												children: item.module
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-bold text-foreground truncate max-w-[300px]",
												title: item.itemName,
												children: item.itemName
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium text-foreground",
												children: format(deletedDate, "dd/MM/yyyy")
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: formatDistanceToNow(deletedDate, { addSuffix: true })
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: cn("text-sm font-black flex items-center gap-1.5", daysLeft <= 3 ? "text-rose-500" : daysLeft <= 10 ? "text-amber-500" : "text-emerald-500"),
												children: [
													daysLeft <= 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "w-3.5 h-3.5" }),
													daysLeft,
													" ",
													daysLeft === 1 ? "day" : "days"
												]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-end gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setConfirmModalState({
														isOpen: true,
														action: "restore",
														id: item.id,
														title: "Restore Item",
														desc: `Are you sure you want to restore "${item.itemName}" back to its original location?`,
														itemName: item.itemName
													}),
													className: "p-2 text-muted-foreground hover:text-emerald-600 hover:bg-emerald-600/10 rounded-lg transition-colors tooltip-trigger",
													title: "Restore",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "w-4 h-4" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setConfirmModalState({
														isOpen: true,
														action: "delete",
														id: item.id,
														title: "Permanently Delete",
														desc: `Are you sure you want to permanently delete "${item.itemName}"? This action cannot be undone.`,
														itemName: item.itemName
													}),
													className: "p-2 text-muted-foreground hover:text-rose-600 hover:bg-rose-600/10 rounded-lg transition-colors tooltip-trigger",
													title: "Delete Permanently",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-4 h-4" })
												})]
											})
										})
									]
								}, item.id);
							})
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmModal, {
				isOpen: confirmModalState.isOpen,
				onClose: () => setConfirmModalState((prev) => ({
					...prev,
					isOpen: false
				})),
				onConfirm: confirmModalState.action === "restore" ? handleRestore : handleDelete,
				title: confirmModalState.title,
				description: confirmModalState.desc,
				itemName: confirmModalState.itemName,
				variant: confirmModalState.action === "restore" ? "restore" : "destructive"
			})
		]
	});
}
//#endregion
export { DialogDescription as a, DialogTitle as c, SortableHeader as d, cn as f, useSortableData as h, DialogContent as i, DialogTrigger as l, moveToRecycleBin as m, Dialog as n, DialogFooter as o, formatDate as p, DialogClose as r, DialogHeader as s, ConfirmModal as t, RecycleBin as u };
