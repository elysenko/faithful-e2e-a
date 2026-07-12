import {
  AuthService
} from "./chunk-Q2IOEOSU.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withHashLocation,
  withInMemoryScrolling,
  withInterceptors
} from "./chunk-CBFZCQFA.js";
import {
  CommonModule,
  computed,
  filter,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-I3S7QF5E.js";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor() {
    this.brand = "MiniERP";
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [["data-testid", "app-ready"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "router-outlet");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  min-height: 100svh;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 17 });
})();

// src/app/core/guards/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn()) {
    return true;
  }
  return router.createUrlTree(["/login"]);
};

// src/app/core/guards/role.guard.ts
var roleGuard = (route) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const allowed = route.data?.["roles"] ?? [];
  if (!auth.isLoggedIn()) {
    return router.createUrlTree(["/login"]);
  }
  const role = auth.role();
  if (allowed.length === 0 || role && allowed.includes(role)) {
    return true;
  }
  return router.createUrlTree(["/"]);
};

// src/app/shared/layout.component.ts
var _forTrack0 = ($index, $item) => $item.link;
var _c0 = (a0) => ({ exact: a0 });
function LayoutComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.link)("routerLinkActiveOptions", \u0275\u0275pureFunction1(3, _c0, !!item_r1.exact));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function LayoutComponent_Conditional_20_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 20)(1, "span", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r4.link)("routerLinkActiveOptions", \u0275\u0275pureFunction1(4, _c0, !!item_r4.exact));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function LayoutComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function LayoutComponent_Conditional_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDrawer());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "aside", 15)(2, "div", 16)(3, "span", 4);
    \u0275\u0275text(4, "MiniERP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275listener("click", function LayoutComponent_Conditional_20_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDrawer());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 18)(8, "span", 10);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 11);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "nav", 19);
    \u0275\u0275repeaterCreate(13, LayoutComponent_Conditional_20_For_14_Template, 5, 6, "a", 20, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 21);
    \u0275\u0275listener("click", function LayoutComponent_Conditional_20_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275text(16, "Sign out");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.userName());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.roleLabel());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.nav());
  }
}
var LayoutComponent = class _LayoutComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.allNav = [
      { label: "Dashboard", icon: "\u{1F4CA}", link: "/", exact: true, scope: "all" },
      { label: "Customers", icon: "\u{1F465}", link: "/customers", scope: "all" },
      { label: "Suppliers", icon: "\u{1F3ED}", link: "/suppliers", scope: "all" },
      { label: "Products", icon: "\u{1F4E6}", link: "/products", scope: "all" },
      { label: "Purchase Orders", icon: "\u{1F9FE}", link: "/purchase-orders", scope: "all" },
      { label: "Sales Orders", icon: "\u{1F6D2}", link: "/sales-orders", scope: "all" },
      { label: "Invoices", icon: "\u{1F4B3}", link: "/invoices", scope: "all" },
      { label: "Settings", icon: "\u2699\uFE0F", link: "/admin/settings", scope: "admin" }
    ];
    this.drawerOpen = signal(false);
    this.nav = computed(() => {
      const admin = this.auth.isAdmin();
      return this.allNav.filter((n) => n.scope === "admin" ? admin : true);
    });
    this.userName = computed(() => this.auth.user()?.name || this.auth.user()?.email || "Account");
    this.roleLabel = computed(() => {
      const r = this.auth.role();
      return r ? r.charAt(0).toUpperCase() + r.slice(1) : "Guest";
    });
  }
  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.auth.refresh().subscribe({ error: () => {
      } });
    }
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => this.drawerOpen.set(false));
  }
  toggleDrawer() {
    this.drawerOpen.update((v) => !v);
  }
  logout() {
    this.drawerOpen.set(false);
    this.auth.logout();
  }
  static {
    this.\u0275fac = function LayoutComponent_Factory(t) {
      return new (t || _LayoutComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 3, consts: [[1, "app-header", "no-print"], ["type", "button", "aria-label", "Open menu", 1, "hamburger", 3, "click"], ["routerLink", "/", 1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "top-nav"], ["routerLinkActive", "active", 1, "top-nav-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "header-right"], [1, "user-chip"], [1, "role-dot"], [1, "user-name"], [1, "role-tag"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click"], [1, "app-main"], [1, "drawer-backdrop", "no-print", 3, "click"], ["aria-label", "Primary navigation", 1, "drawer", "no-print"], [1, "drawer-head"], ["type", "button", "aria-label", "Close menu", 1, "drawer-close", 3, "click"], [1, "drawer-user"], [1, "drawer-nav"], ["routerLinkActive", "active", 1, "drawer-link", 3, "routerLink", "routerLinkActiveOptions"], ["type", "button", 1, "btn", "btn-outline", "btn-block", 3, "click"], ["aria-hidden", "true", 1, "dn-icon"]], template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "button", 1);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_1_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275text(2, "\u2630");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "a", 2)(4, "span", 3);
        \u0275\u0275text(5, "M");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 4);
        \u0275\u0275text(7, "MiniERP");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "nav", 5);
        \u0275\u0275repeaterCreate(9, LayoutComponent_For_10_Template, 2, 5, "a", 6, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "span", 8);
        \u0275\u0275element(13, "span", 9);
        \u0275\u0275elementStart(14, "span", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 11);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "button", 12);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_18_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(19, "Sign out");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(20, LayoutComponent_Conditional_20_Template, 17, 2);
        \u0275\u0275elementStart(21, "main", 13);
        \u0275\u0275element(22, "router-outlet");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275repeater(ctx.nav());
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.userName());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.roleLabel());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(20, ctx.drawerOpen() ? 20 : -1);
      }
    }, dependencies: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  min-height: 100svh;\n}\n.app-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  height: var(--header-h);\n  padding: 0 var(--space-5);\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius);\n  background: var(--color-surface);\n  color: var(--color-ink);\n  font-size: var(--fs-lg);\n  cursor: pointer;\n}\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  font-weight: 800;\n  color: var(--color-ink);\n}\n.brand[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius);\n  background: var(--color-brand);\n  color: var(--color-text-inverse);\n  font-size: var(--fs-md);\n  font-weight: 800;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  font-weight: 800;\n}\n.top-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-1);\n  margin-left: var(--space-3);\n  flex-wrap: wrap;\n}\n.top-nav-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 0 var(--space-3);\n  border-radius: var(--radius);\n  color: var(--color-ink-soft);\n  font-weight: 600;\n  font-size: var(--fs-sm);\n  white-space: nowrap;\n}\n.top-nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n  text-decoration: none;\n}\n.top-nav-link.active[_ngcontent-%COMP%] {\n  background: var(--color-brand-light);\n  color: var(--color-brand-dark);\n}\n.header-right[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  font-size: var(--fs-sm);\n  color: var(--color-ink-soft);\n}\n.role-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--color-brand);\n}\n.role-tag[_ngcontent-%COMP%] {\n  padding: 2px var(--space-2);\n  border-radius: var(--radius-pill);\n  background: var(--color-brand-light);\n  color: var(--color-brand-dark);\n  font-size: var(--fs-xs);\n  font-weight: 700;\n}\n.app-main[_ngcontent-%COMP%] {\n  flex: 1;\n  overscroll-behavior-y: contain;\n}\n.drawer-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 40;\n  background: rgba(26, 23, 48, 0.45);\n}\n.drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 41;\n  width: 82%;\n  max-width: 320px;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n  padding: var(--space-4);\n  padding-bottom: calc(var(--space-4) + var(--safe-bottom));\n  background: var(--color-surface);\n  border-right: 1px solid var(--color-border);\n  box-shadow: var(--shadow-lg);\n  overflow-y: auto;\n  overscroll-behavior-y: contain;\n}\n.drawer-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.drawer-close[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: none;\n  background: transparent;\n  font-size: var(--fs-lg);\n  color: var(--color-muted);\n  cursor: pointer;\n}\n.drawer-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding-bottom: var(--space-3);\n  border-bottom: 1px solid var(--color-border);\n}\n.drawer-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n  flex: 1;\n}\n.drawer-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-height: 48px;\n  padding: 0 var(--space-3);\n  border-radius: var(--radius);\n  color: var(--color-ink-soft);\n  font-weight: 600;\n}\n.drawer-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n  text-decoration: none;\n}\n.drawer-link.active[_ngcontent-%COMP%] {\n  background: var(--color-brand-light);\n  color: var(--color-brand-dark);\n}\n.dn-icon[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n}\n@media (max-width: 768px) {\n  .app-header[_ngcontent-%COMP%] {\n    padding: 0 var(--space-4);\n    gap: var(--space-3);\n  }\n  .hamburger[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n  .top-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .user-chip[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/shared/layout.component.ts", lineNumber: 29 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "login",
    loadComponent: () => import("./login.component-LWTUDX2P.js").then((m) => m.LoginComponent),
    data: { flow: { node: "login", entry: true, edgesTo: ["dashboard", "signup"] } }
  },
  {
    path: "signup",
    loadComponent: () => import("./signup.component-DDDW35PB.js").then((m) => m.SignupComponent),
    data: { flow: { node: "signup", edgesTo: ["dashboard", "login"] } }
  },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      // ---- Dashboard (default) ----
      {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./dashboard.component-EDYZFX7O.js").then((m) => m.DashboardComponent),
        data: { flow: { node: "dashboard", showInNavbar: true, edgesTo: ["purchase-orders", "sales-orders", "invoices"] } }
      },
      // ---- Customers (writes: sales, admin) ----
      {
        path: "customers",
        loadComponent: () => import("./customers.component-CG6KLI2B.js").then((m) => m.CustomersComponent),
        data: { roles: ["sales", "admin"], flow: { node: "customers", showInNavbar: true, edgesTo: ["customer-detail"] } }
      },
      {
        path: "customers/:id",
        loadComponent: () => import("./customer-detail.component-4SNUQ5HE.js").then((m) => m.CustomerDetailComponent),
        data: { roles: ["sales", "admin"], flow: { node: "customer-detail", edgesTo: ["customers"] } }
      },
      // ---- Suppliers (writes: purchasing, admin) ----
      {
        path: "suppliers",
        loadComponent: () => import("./suppliers.component-YCHVEYCG.js").then((m) => m.SuppliersComponent),
        data: { roles: ["purchasing", "admin"], flow: { node: "suppliers", showInNavbar: true, edgesTo: ["supplier-detail"] } }
      },
      {
        path: "suppliers/:id",
        loadComponent: () => import("./supplier-detail.component-IKFFB6L5.js").then((m) => m.SupplierDetailComponent),
        data: { roles: ["purchasing", "admin"], flow: { node: "supplier-detail", edgesTo: ["suppliers"] } }
      },
      // ---- Products (writes: admin) ----
      {
        path: "products",
        loadComponent: () => import("./products.component-SAAXDMMZ.js").then((m) => m.ProductsComponent),
        data: { flow: { node: "products", showInNavbar: true, edgesTo: ["product-detail"] } }
      },
      {
        path: "products/:id",
        loadComponent: () => import("./product-detail.component-NS3OT5DB.js").then((m) => m.ProductDetailComponent),
        data: { flow: { node: "product-detail", edgesTo: ["products"] } }
      },
      // ---- Purchase orders (writes: purchasing, admin) ----
      {
        path: "purchase-orders",
        loadComponent: () => import("./purchase-orders.component-W4KHJK6U.js").then((m) => m.PurchaseOrdersComponent),
        data: { roles: ["purchasing", "admin"], flow: { node: "purchase-orders", showInNavbar: true, edgesTo: ["purchase-order-detail"] } }
      },
      {
        path: "purchase-orders/:id",
        loadComponent: () => import("./purchase-order-detail.component-DUVYHFBR.js").then((m) => m.PurchaseOrderDetailComponent),
        data: { roles: ["purchasing", "admin"], flow: { node: "purchase-order-detail", edgesTo: ["purchase-orders"] } }
      },
      // ---- Sales orders (writes: sales, admin) ----
      {
        path: "sales-orders",
        loadComponent: () => import("./sales-orders.component-EKTVVILI.js").then((m) => m.SalesOrdersComponent),
        data: { roles: ["sales", "admin"], flow: { node: "sales-orders", showInNavbar: true, edgesTo: ["sales-order-detail"] } }
      },
      {
        path: "sales-orders/:id",
        loadComponent: () => import("./sales-order-detail.component-Q6D67VRX.js").then((m) => m.SalesOrderDetailComponent),
        data: { roles: ["sales", "admin"], flow: { node: "sales-order-detail", edgesTo: ["sales-orders", "invoice-detail"] } }
      },
      // ---- Invoices (writes: sales, admin) ----
      {
        path: "invoices",
        loadComponent: () => import("./invoices.component-6EGNGMOJ.js").then((m) => m.InvoicesComponent),
        data: { roles: ["sales", "admin"], flow: { node: "invoices", showInNavbar: true, edgesTo: ["invoice-detail"] } }
      },
      {
        path: "invoices/:id",
        loadComponent: () => import("./invoice-detail.component-FGAT3LRW.js").then((m) => m.InvoiceDetailComponent),
        data: { roles: ["sales", "admin"], flow: { node: "invoice-detail", edgesTo: ["invoices", "invoice-print"] } }
      },
      {
        path: "invoices/:id/print",
        loadComponent: () => import("./invoice-print.component-TIELU2NY.js").then((m) => m.InvoicePrintComponent),
        data: { roles: ["sales", "admin"], flow: { node: "invoice-print", edgesTo: ["invoice-detail"] } }
      },
      // ---- Admin settings ----
      {
        path: "admin/settings",
        canActivate: [roleGuard],
        loadComponent: () => import("./settings.component-YV5J6TAQ.js").then((m) => m.SettingsComponent),
        data: { roles: ["admin"], flow: { node: "settings", showInNavbar: true, scope: "admin", edgesTo: ["dashboard"] } }
      }
    ]
  },
  { path: "**", redirectTo: "" }
];

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const token = localStorage.getItem("token") || localStorage.getItem("access_token");
  if (token) {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }
  return next(req);
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes, withHashLocation(), withInMemoryScrolling({ scrollPositionRestoration: "top" })),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
