import {
  AuthService
} from "./chunk-T6HJ4SPB.js";
import {
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
} from "./chunk-PGTF2OAP.js";
import {
  CommonModule,
  computed,
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
} from "./chunk-5S2USPPB.js";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
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
    }, dependencies: [RouterOutlet], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 10 });
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
  return router.createUrlTree([role === "manager" ? "/dashboard" : "/my-lease"]);
};

// src/app/shared/layout.component.ts
var _forTrack0 = ($index, $item) => $item.path;
var _c0 = (a0) => ({ exact: a0 });
function LayoutComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6)(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.path)("routerLinkActiveOptions", \u0275\u0275pureFunction1(4, _c0, item_r1.path === "/my-lease"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function LayoutComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 20)(1, "span", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r2.path)("routerLinkActiveOptions", \u0275\u0275pureFunction1(4, _c0, item_r2.path === "/my-lease"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
function LayoutComponent_Conditional_32_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275listener("click", function LayoutComponent_Conditional_32_For_9_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.closeDrawer());
    });
    \u0275\u0275elementStart(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r6.path);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.label);
  }
}
function LayoutComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function LayoutComponent_Conditional_32_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDrawer());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "aside", 25)(2, "div", 2)(3, "span", 3);
    \u0275\u0275text(4, "RD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 4);
    \u0275\u0275text(6, "RentDesk");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "nav", 5);
    \u0275\u0275repeaterCreate(8, LayoutComponent_Conditional_32_For_9_Template, 5, 3, "a", 26, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 27);
    \u0275\u0275listener("click", function LayoutComponent_Conditional_32_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.logout());
    });
    \u0275\u0275text(11, "Sign out");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r3.nav());
  }
}
var LayoutComponent = class _LayoutComponent {
  constructor(auth) {
    this.auth = auth;
    this.drawerOpen = signal(false);
    this.allNav = [
      { label: "Dashboard", path: "/dashboard", icon: "\u{1F4CA}", managerOnly: true },
      { label: "Units", path: "/units", icon: "\u{1F3E2}", managerOnly: true },
      { label: "Leases", path: "/leases", icon: "\u{1F4C4}", managerOnly: true },
      { label: "Tenants", path: "/tenants", icon: "\u{1F465}", managerOnly: true },
      { label: "Post Charges", path: "/post-charges", icon: "\u{1F4B8}", managerOnly: true },
      { label: "Delinquency", path: "/delinquency", icon: "\u26A0\uFE0F", managerOnly: true },
      { label: "Settings", path: "/admin/settings", icon: "\u2699\uFE0F", managerOnly: true },
      { label: "My Lease", path: "/my-lease", icon: "\u{1F3E0}" },
      { label: "Statement", path: "/my-lease/statement", icon: "\u{1F9FE}" }
    ];
    this.nav = computed(() => {
      const isManager = this.auth.isManager();
      return this.allNav.filter((n) => {
        if (n.managerOnly)
          return isManager;
        return !isManager;
      });
    });
    this.bottomNav = computed(() => this.nav().slice(0, 5));
    this.userName = computed(() => this.auth.user()?.name || this.auth.user()?.email || "Account");
    this.roleLabel = computed(() => this.auth.isManager() ? "Manager" : "Tenant");
  }
  toggleDrawer() {
    this.drawerOpen.update((v) => !v);
  }
  closeDrawer() {
    this.drawerOpen.set(false);
  }
  logout() {
    this.auth.logout();
  }
  static {
    this.\u0275fac = function LayoutComponent_Factory(t) {
      return new (t || _LayoutComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 4, consts: [[1, "shell"], [1, "sidebar"], [1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "side-nav"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "side-foot"], [1, "who"], [1, "who-name"], [1, "who-role"], [1, "btn", "btn-outline", "btn-sm", "btn-block", 3, "click"], [1, "main"], [1, "topbar"], ["aria-label", "Open menu", 1, "hamburger", 3, "click"], [1, "topbar-brand"], [1, "spacer"], [1, "badge", "badge-info"], [1, "content"], [1, "bottom-nav"], ["routerLinkActive", "active", 1, "tab", 3, "routerLink", "routerLinkActiveOptions"], [1, "nav-icon"], [1, "tab-icon"], [1, "tab-label"], [1, "drawer-backdrop", 3, "click"], [1, "drawer"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "btn", "btn-outline", "btn-block", 3, "click"], ["routerLinkActive", "active", 1, "nav-link", 3, "click", "routerLink"]], template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "RD");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "RentDesk");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "nav", 5);
        \u0275\u0275repeaterCreate(8, LayoutComponent_For_9_Template, 5, 6, "a", 6, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "button", 11);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_16_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(17, "Sign out");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "div", 12)(19, "header", 13)(20, "button", 14);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_20_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275text(21, "\u2630");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 15);
        \u0275\u0275text(23, "RentDesk");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "span", 16);
        \u0275\u0275elementStart(25, "span", 17);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "main", 18);
        \u0275\u0275element(28, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "nav", 19);
        \u0275\u0275repeaterCreate(30, LayoutComponent_For_31_Template, 5, 6, "a", 20, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(32, LayoutComponent_Conditional_32_Template, 12, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.nav());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.userName());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.roleLabel());
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.roleLabel());
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.bottomNav());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(32, ctx.drawerOpen() ? 32 : -1);
      }
    }, dependencies: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet], styles: ["\n\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  min-height: 100svh;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: var(--sidebar-w);\n  flex-shrink: 0;\n  background: var(--color-surface);\n  border-right: 1px solid var(--color-border);\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  height: 100svh;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-4) var(--space-5);\n  height: var(--header-h);\n  border-bottom: 1px solid var(--color-border);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius);\n  background: var(--color-brand);\n  color: #fff;\n  font-weight: 800;\n  font-size: var(--fs-sm);\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: var(--fs-md);\n  color: var(--color-ink);\n}\n.side-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--space-3);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  overflow-y: auto;\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-height: 44px;\n  padding: 0 var(--space-3);\n  border-radius: var(--radius);\n  color: var(--color-ink-soft);\n  font-weight: 600;\n  font-size: var(--fs-base);\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n  text-decoration: none;\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  background: var(--color-brand-light);\n  color: var(--color-brand-dark);\n}\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 22px;\n  text-align: center;\n}\n.side-foot[_ngcontent-%COMP%] {\n  padding: var(--space-4);\n  border-top: 1px solid var(--color-border);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.who-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: var(--fs-sm);\n}\n.who-role[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  color: var(--color-muted);\n}\n.main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.topbar[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  gap: var(--space-3);\n  height: var(--header-h);\n  padding: 0 var(--space-4);\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n.hamburger[_ngcontent-%COMP%] {\n  min-height: 44px;\n  min-width: 44px;\n  border: none;\n  background: transparent;\n  font-size: 1.4rem;\n  cursor: pointer;\n  color: var(--color-ink);\n}\n.topbar-brand[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: var(--fs-md);\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--space-5);\n  max-width: var(--container);\n  width: 100%;\n  margin: 0 auto;\n  overscroll-behavior-y: contain;\n}\n.bottom-nav[_ngcontent-%COMP%] {\n  display: none;\n}\n.tab[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  min-height: 48px;\n  color: var(--color-muted);\n  font-size: var(--fs-xs);\n  font-weight: 600;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: var(--color-brand);\n}\n.tab-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.drawer-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(19, 26, 43, 0.45);\n  z-index: 40;\n}\n.drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 80%;\n  max-width: 300px;\n  background: var(--color-surface);\n  z-index: 50;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n  padding-bottom: var(--space-4);\n  box-shadow: var(--shadow-lg);\n}\n.drawer[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.drawer[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  margin: 0 var(--space-4);\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .topbar[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .bottom-nav[_ngcontent-%COMP%] {\n    display: flex;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: calc(var(--bottomnav-h) + var(--safe-bottom));\n    padding-bottom: var(--safe-bottom);\n    background: var(--color-surface);\n    border-top: 1px solid var(--color-border);\n    z-index: 30;\n  }\n  .content[_ngcontent-%COMP%] {\n    padding: var(--space-4);\n    padding-bottom: calc(var(--bottomnav-h) + var(--space-5));\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/shared/layout.component.ts", lineNumber: 20 });
})();

// src/app/app.routes.ts
var MANAGER = { roles: ["manager"] };
var routes = [
  {
    path: "login",
    loadComponent: () => import("./login.component-7OP6Q3LC.js").then((m) => m.LoginComponent),
    data: { flow: { flowId: "login", node: "/login", label: "Login", entry: true, edgesTo: ["signup", "dashboard", "my-lease"] } }
  },
  {
    path: "signup",
    loadComponent: () => import("./signup.component-HVPYFJ5W.js").then((m) => m.SignupComponent),
    data: { flow: { flowId: "signup", node: "/signup", label: "Sign up", edgesTo: ["login", "dashboard"] } }
  },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      // ---- Tenant ----
      {
        path: "my-lease",
        loadComponent: () => import("./my-lease.component-JOTE2KRL.js").then((m) => m.MyLeaseComponent),
        data: { flow: { flowId: "my-lease", node: "/my-lease", label: "My Lease", showInNavbar: true, scope: "tenant", edgesTo: ["statement", "receipt"] } }
      },
      {
        path: "my-lease/statement",
        loadComponent: () => import("./statement.component-RFD3QSFW.js").then((m) => m.StatementComponent),
        data: { flow: { flowId: "statement", node: "/my-lease/statement", label: "Statement", showInNavbar: true, scope: "tenant", edgesTo: ["my-lease", "receipt"] } }
      },
      {
        path: "receipt/:id",
        loadComponent: () => import("./receipt.component-QZDVO7BH.js").then((m) => m.ReceiptComponent),
        data: { flow: { flowId: "receipt", node: "/receipt/:id", label: "Receipt", scope: "tenant", edgesTo: ["my-lease", "statement"] } }
      },
      // ---- Manager ----
      {
        path: "dashboard",
        canActivate: [roleGuard],
        data: { roles: MANAGER.roles, flow: { flowId: "dashboard", node: "/dashboard", label: "Dashboard", showInNavbar: true, scope: "manager", edgesTo: ["leases", "units", "delinquency", "post-charges"] } },
        loadComponent: () => import("./dashboard.component-UK3A7AEJ.js").then((m) => m.DashboardComponent)
      },
      {
        path: "units",
        canActivate: [roleGuard],
        data: { roles: MANAGER.roles, flow: { flowId: "units", node: "/units", label: "Units", showInNavbar: true, scope: "manager", edgesTo: ["unit-new", "unit-detail"] } },
        loadComponent: () => import("./units-list.component-55Z4DDWY.js").then((m) => m.UnitsListComponent)
      },
      {
        path: "units/new",
        canActivate: [roleGuard],
        data: { roles: MANAGER.roles, flow: { flowId: "unit-new", node: "/units/new", label: "New Unit", scope: "manager", edgesTo: ["units"] } },
        loadComponent: () => import("./unit-form.component-4JJ7FJ7T.js").then((m) => m.UnitFormComponent)
      },
      {
        path: "units/:id",
        canActivate: [roleGuard],
        data: { roles: MANAGER.roles, flow: { flowId: "unit-detail", node: "/units/:id", label: "Unit", scope: "manager", edgesTo: ["units"] } },
        loadComponent: () => import("./unit-form.component-4JJ7FJ7T.js").then((m) => m.UnitFormComponent)
      },
      {
        path: "leases",
        canActivate: [roleGuard],
        data: { roles: MANAGER.roles, flow: { flowId: "leases", node: "/leases", label: "Leases", showInNavbar: true, scope: "manager", edgesTo: ["lease-new", "lease-detail"] } },
        loadComponent: () => import("./leases-list.component-GPQVUWKQ.js").then((m) => m.LeasesListComponent)
      },
      {
        path: "leases/new",
        canActivate: [roleGuard],
        data: { roles: MANAGER.roles, flow: { flowId: "lease-new", node: "/leases/new", label: "New Lease", scope: "manager", edgesTo: ["leases"] } },
        loadComponent: () => import("./lease-new.component-WAOP5ICV.js").then((m) => m.LeaseNewComponent)
      },
      {
        path: "leases/:id",
        canActivate: [roleGuard],
        data: { roles: MANAGER.roles, flow: { flowId: "lease-detail", node: "/leases/:id", label: "Lease", scope: "manager", edgesTo: ["leases"] } },
        loadComponent: () => import("./lease-detail.component-CHBQADVQ.js").then((m) => m.LeaseDetailComponent)
      },
      {
        path: "tenants",
        canActivate: [roleGuard],
        data: { roles: MANAGER.roles, flow: { flowId: "tenants", node: "/tenants", label: "Tenants", showInNavbar: true, scope: "manager", edgesTo: ["tenant-new"] } },
        loadComponent: () => import("./tenants-list.component-I2IMP3H3.js").then((m) => m.TenantsListComponent)
      },
      {
        path: "tenants/new",
        canActivate: [roleGuard],
        data: { roles: MANAGER.roles, flow: { flowId: "tenant-new", node: "/tenants/new", label: "New Tenant", scope: "manager", edgesTo: ["tenants"] } },
        loadComponent: () => import("./tenant-new.component-TKCDO7QT.js").then((m) => m.TenantNewComponent)
      },
      {
        path: "post-charges",
        canActivate: [roleGuard],
        data: { roles: MANAGER.roles, flow: { flowId: "post-charges", node: "/post-charges", label: "Post Charges", showInNavbar: true, scope: "manager", edgesTo: ["leases", "delinquency"] } },
        loadComponent: () => import("./post-charges.component-ZE75TFCH.js").then((m) => m.PostChargesComponent)
      },
      {
        path: "delinquency",
        canActivate: [roleGuard],
        data: { roles: MANAGER.roles, flow: { flowId: "delinquency", node: "/delinquency", label: "Delinquency", showInNavbar: true, scope: "manager", edgesTo: ["lease-detail"] } },
        loadComponent: () => import("./delinquency.component-CMQGAAET.js").then((m) => m.DelinquencyComponent)
      },
      {
        path: "admin/settings",
        canActivate: [roleGuard],
        data: { roles: MANAGER.roles, flow: { flowId: "admin-settings", node: "/admin/settings", label: "Settings", showInNavbar: true, scope: "manager", edgesTo: ["dashboard"] } },
        loadComponent: () => import("./admin-settings.component-NBK2O2TU.js").then((m) => m.AdminSettingsComponent)
      },
      {
        path: "",
        loadComponent: () => import("./landing.component-OEDNWOPQ.js").then((m) => m.LandingComponent),
        data: { flow: { flowId: "landing", node: "/", label: "Home", edgesTo: ["dashboard", "my-lease"] } }
      }
    ]
  },
  {
    path: "**",
    loadComponent: () => import("./landing.component-OEDNWOPQ.js").then((m) => m.LandingComponent),
    data: { flow: { flowId: "not-found", node: "**", label: "Redirect", edgesTo: ["dashboard", "my-lease"] } }
  }
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
