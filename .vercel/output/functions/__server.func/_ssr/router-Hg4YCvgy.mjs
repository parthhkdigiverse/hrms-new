import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { _ as Link, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Hg4YCvgy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-Bq51cZhs.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var ThemeContext = (0, import_react.createContext)(void 0);
function hexToHSL(H) {
	let r = 0, g = 0, b = 0;
	const hex = H.replace("#", "");
	if (hex.length === 3) {
		r = parseInt(hex.charAt(0) + hex.charAt(0), 16) || 0;
		g = parseInt(hex.charAt(1) + hex.charAt(1), 16) || 0;
		b = parseInt(hex.charAt(2) + hex.charAt(2), 16) || 0;
	} else if (hex.length === 6) {
		r = parseInt(hex.substring(0, 2), 16) || 0;
		g = parseInt(hex.substring(2, 4), 16) || 0;
		b = parseInt(hex.substring(4, 6), 16) || 0;
	}
	r /= 255;
	g /= 255;
	b /= 255;
	const cmin = Math.min(r, g, b), cmax = Math.max(r, g, b), delta = cmax - cmin;
	let h = 0, s = 0, l = 0;
	if (delta == 0) h = 0;
	else if (cmax == r) h = (g - b) / delta % 6;
	else if (cmax == g) h = (b - r) / delta + 2;
	else h = (r - g) / delta + 4;
	const luminance = (r * 255 * 299 + g * 255 * 587 + b * 255 * 114) / 1e3;
	h = Math.round(h * 60);
	if (h < 0) h += 360;
	l = (cmax + cmin) / 2;
	s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
	s = +(s * 100).toFixed(1);
	l = +(l * 100).toFixed(1);
	return {
		h,
		s,
		l,
		luminance
	};
}
function ThemeProvider({ children }) {
	const [color, setColor] = (0, import_react.useState)("#10b981");
	const [isGradient, setIsGradient] = (0, import_react.useState)(false);
	const [gradientType, setGradientType] = (0, import_react.useState)("linear");
	const [gradientDirection, setGradientDirection] = (0, import_react.useState)("to right");
	const [gradientColor2, setGradientColor2] = (0, import_react.useState)("#0284c7");
	const [radius, setRadius] = (0, import_react.useState)(.75);
	const [fontFamily, setFontFamily] = (0, import_react.useState)("Inter");
	const [logoUrl, setLogoUrl] = (0, import_react.useState)("");
	const [companyName, setCompanyName] = (0, import_react.useState)("HR Suite");
	(0, import_react.useEffect)(() => {
		const savedColor = localStorage.getItem("app-theme-color");
		const savedIsGradient = localStorage.getItem("app-theme-is-gradient");
		const savedGradientType = localStorage.getItem("app-theme-gradient-type");
		const savedGradientDirection = localStorage.getItem("app-theme-gradient-direction");
		const savedGradientColor2 = localStorage.getItem("app-theme-gradient-color2");
		const savedRadius = localStorage.getItem("app-theme-radius");
		const savedFont = localStorage.getItem("app-theme-font");
		const savedLogo = localStorage.getItem("app-theme-logo");
		const savedName = localStorage.getItem("app-theme-name");
		if (savedColor) setColor(savedColor);
		if (savedIsGradient) setIsGradient(savedIsGradient === "true");
		if (savedGradientType) setGradientType(savedGradientType);
		if (savedGradientDirection) setGradientDirection(savedGradientDirection);
		if (savedGradientColor2) setGradientColor2(savedGradientColor2);
		if (savedRadius) setRadius(parseFloat(savedRadius));
		if (savedFont) setFontFamily(savedFont);
		if (savedLogo) setLogoUrl(savedLogo);
		if (savedName) setCompanyName(savedName);
	}, []);
	(0, import_react.useEffect)(() => {
		const root = window.document.documentElement;
		const hsl = hexToHSL(color);
		const primary = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
		root.style.setProperty("--primary", primary);
		root.style.setProperty("--ring", primary);
		root.style.setProperty("--sidebar-primary", primary);
		const bgTint = `hsl(${hsl.h}, ${Math.min(hsl.s, 40)}%, 98%)`;
		root.style.setProperty("--background", bgTint);
		const sidebarTint = `hsl(${hsl.h}, ${Math.min(hsl.s, 30)}%, 95%)`;
		root.style.setProperty("--sidebar", sidebarTint);
		root.style.setProperty("--chart-1", "hsl(152, 69%, 31%)");
		root.style.setProperty("--chart-2", "hsl(221, 83%, 53%)");
		root.style.setProperty("--chart-3", "hsl(38, 92%, 50%)");
		root.style.setProperty("--chart-4", "hsl(346, 87%, 53%)");
		root.style.setProperty("--chart-5", "hsl(262, 83%, 58%)");
		const primaryFg = hsl.luminance > 140 ? "#000000" : "#ffffff";
		root.style.setProperty("--primary-foreground", primaryFg);
		root.style.setProperty("--sidebar-primary-foreground", primaryFg);
		root.style.setProperty("--radius", `${radius}rem`);
		window.document.body.style.fontFamily = fontFamily === "System" ? "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" : `'${fontFamily}', sans-serif`;
		localStorage.setItem("app-theme-color", color);
		localStorage.setItem("app-theme-is-gradient", isGradient.toString());
		localStorage.setItem("app-theme-gradient-type", gradientType);
		localStorage.setItem("app-theme-gradient-direction", gradientDirection);
		localStorage.setItem("app-theme-gradient-color2", gradientColor2);
		localStorage.setItem("app-theme-radius", radius.toString());
		localStorage.setItem("app-theme-font", fontFamily);
		localStorage.setItem("app-theme-logo", logoUrl);
		localStorage.setItem("app-theme-name", companyName);
		let styleEl = document.getElementById("theme-gradient-override");
		if (!styleEl) {
			styleEl = document.createElement("style");
			styleEl.id = "theme-gradient-override";
			document.head.appendChild(styleEl);
		}
		if (isGradient) {
			const hsl2 = hexToHSL(gradientColor2);
			const color2 = `hsl(${hsl2.h}, ${hsl2.s}%, ${hsl2.l}%)`;
			const bgImage = gradientType === "linear" ? `linear-gradient(${gradientDirection}, var(--primary), ${color2})` : `radial-gradient(circle, var(--primary), ${color2})`;
			styleEl.innerHTML = `
        .bg-primary, .bg-sidebar-primary {
          background-image: ${bgImage} !important;
        }
      `;
		} else styleEl.innerHTML = "";
	}, [
		color,
		isGradient,
		gradientType,
		gradientDirection,
		gradientColor2,
		radius,
		fontFamily,
		logoUrl,
		companyName
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value: {
			color,
			setColor,
			isGradient,
			setIsGradient,
			gradientType,
			setGradientType,
			gradientDirection,
			setGradientDirection,
			gradientColor2,
			setGradientColor2,
			radius,
			setRadius,
			fontFamily,
			setFontFamily,
			logoUrl,
			setLogoUrl,
			companyName,
			setCompanyName
		},
		children
	});
}
function useTheme() {
	const context = (0, import_react.useContext)(ThemeContext);
	if (context === void 0) throw new Error("useTheme must be used within a ThemeProvider");
	return context;
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$2 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Lovable App" },
			{
				name: "description",
				content: "Lovable Generated Project"
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "Lovable App"
			},
			{
				property: "og:description",
				content: "Lovable Generated Project"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.ico",
			type: "image/x-icon"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$2.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitComponentImporter$1 = () => import("./routes-yijZpgtE.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "HR Suite — Optimized Sidebar Navigation" },
		{
			name: "description",
			content: "A grouped, searchable and collapsible sidebar for an HR, payroll and work management platform."
		},
		{
			property: "og:title",
			content: "HR Suite — Optimized Sidebar Navigation"
		},
		{
			property: "og:description",
			content: "Grouped sections, quick search, pinned shortcuts and badge counts for a 40+ item admin menu."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./recycle-bin-D9eFl4Xc.mjs");
var Route = createFileRoute("/recycle-bin")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	RecycleBinRoute: Route.update({
		id: "/recycle-bin",
		path: "/recycle-bin",
		getParentRoute: () => Route$2
	})
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { useTheme as n, router_exports as t };
