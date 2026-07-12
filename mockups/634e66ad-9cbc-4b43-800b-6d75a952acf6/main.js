import {
  toSignal
} from "./chunk-6BXBCN5T.js";
import {
  AuthService
} from "./chunk-CVPORU2Z.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withInterceptors
} from "./chunk-VMQX45X4.js";
import {
  CommonModule,
  catchError,
  computed,
  filter,
  inject,
  map,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VZ6O3Y2G.js";

// src/app/app.component.ts
function AppComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275text(1, "Admin");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6)(1, "span", 14);
    \u0275\u0275text(2, "\u2699\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Admin");
    \u0275\u0275elementEnd()();
  }
}
function AppComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 0)(1, "a", 1)(2, "span", 2);
    \u0275\u0275text(3, "\u25B2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5, "SiteView");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "nav", 4)(7, "a", 5);
    \u0275\u0275text(8, "Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AppComponent_Conditional_0_Conditional_9_Template, 2, 0, "a", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 7)(11, "span", 8);
    \u0275\u0275element(12, "span", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementStart(14, "span", 10);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 11);
    \u0275\u0275listener("click", function AppComponent_Conditional_0_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(17, "Logout");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "main", 12);
    \u0275\u0275element(19, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "nav", 13)(21, "a", 5)(22, "span", 14);
    \u0275\u0275text(23, "\u{1F3D7}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "Projects");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, AppComponent_Conditional_0_Conditional_26_Template, 5, 0, "a", 6);
    \u0275\u0275elementStart(27, "button", 15);
    \u0275\u0275listener("click", function AppComponent_Conditional_0_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275elementStart(28, "span", 14);
    \u0275\u0275text(29, "\u21A9\uFE0E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "Logout");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(9, ctx_r1.auth.isPlanner() ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("planner", ctx_r1.auth.isPlanner());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx_r1.auth.user()) == null ? null : tmp_3_0.name) || "User", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.auth.isPlanner() ? "Planner" : "Viewer");
    \u0275\u0275advance(11);
    \u0275\u0275conditional(26, ctx_r1.auth.isPlanner() ? 26 : -1);
  }
}
function AppComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var AppComponent = class _AppComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.currentUrl = toSignal(this.router.events.pipe(filter((e) => e instanceof NavigationEnd), map((e) => e.urlAfterRedirects)), { initialValue: this.router.url });
    this.showChrome = computed(() => {
      const url = this.currentUrl();
      return this.auth.isLoggedIn() && !url.startsWith("/login") && !url.startsWith("/signup");
    });
  }
  logout() {
    this.auth.logout();
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "app-header"], ["routerLink", "/projects", 1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "top-nav"], ["routerLink", "/projects", "routerLinkActive", "active"], ["routerLink", "/admin/settings", "routerLinkActive", "active"], [1, "header-right"], [1, "user-chip"], [1, "role-dot"], [1, "role-label"], [1, "btn", "btn-ghost", "logout", 3, "click"], [1, "app-main"], [1, "bottom-nav"], [1, "ico"], [3, "click"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AppComponent_Conditional_0_Template, 32, 6)(1, AppComponent_Conditional_1_Template, 1, 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.showChrome() ? 0 : 1);
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100svh;\n  min-height: 100vh;\n}\n.app-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  height: var(--header-h);\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  padding: 0 var(--space-5);\n  background: var(--color-primary);\n  color: var(--color-text-inverse);\n  box-shadow: var(--shadow-md);\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  color: var(--color-text-inverse);\n  font-weight: 800;\n  font-size: var(--fs-lg);\n  text-decoration: none;\n}\n.brand[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.top-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  margin-left: var(--space-4);\n}\n.top-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.82);\n  padding: 0.4rem 0.85rem;\n  border-radius: var(--radius-sm);\n  font-weight: 600;\n  font-size: var(--fs-sm);\n}\n.top-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.12);\n  text-decoration: none;\n}\n.top-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.18);\n  color: #fff;\n}\n.header-right[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  font-size: var(--fs-sm);\n  color: #fff;\n}\n.role-dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: var(--color-info);\n}\n.role-dot.planner[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n}\n.role-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  opacity: 0.75;\n}\n.logout[_ngcontent-%COMP%] {\n  min-height: 36px;\n  background: rgba(255, 255, 255, 0.14);\n  color: #fff;\n  border-color: rgba(255, 255, 255, 0.25);\n}\n.logout[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.24);\n}\n.app-main[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: var(--space-5);\n}\n.bottom-nav[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .top-nav[_ngcontent-%COMP%], .header-right[_ngcontent-%COMP%]   .user-chip[_ngcontent-%COMP%]   .role-label[_ngcontent-%COMP%], .header-right[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .app-header[_ngcontent-%COMP%] {\n    padding: 0 var(--space-4);\n  }\n  .app-main[_ngcontent-%COMP%] {\n    padding: var(--space-4);\n    padding-bottom: calc(var(--bottomnav-h) + var(--safe-bottom) + var(--space-4));\n  }\n  .bottom-nav[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 30;\n    display: flex;\n    justify-content: space-around;\n    align-items: stretch;\n    height: calc(var(--bottomnav-h) + var(--safe-bottom));\n    padding-bottom: var(--safe-bottom);\n    background: var(--color-surface);\n    border-top: 1px solid var(--color-border);\n    box-shadow: 0 -2px 12px rgba(27, 36, 48, 0.1);\n  }\n  .bottom-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .bottom-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 48px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 2px;\n    color: var(--color-text-muted);\n    font-size: var(--fs-xs);\n    font-weight: 600;\n    background: none;\n  }\n  .bottom-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: none;\n  }\n  .bottom-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    color: var(--color-primary);\n  }\n  .bottom-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .bottom-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n    background: var(--color-surface-inset);\n  }\n  .bottom-nav[_ngcontent-%COMP%]   .ico[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 15 });
})();

// src/app/core/guards/auth.guard.ts
var TOKEN_KEY = "auth_token";
var authGuard = () => {
  const router = inject(Router);
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    return true;
  }
  return router.createUrlTree(["/login"]);
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    loadComponent: () => import("./login.component-BX6WX2K6.js").then((m) => m.LoginComponent),
    data: { flow: { flowId: "login", node: "login", entry: true, edgesTo: ["signup", "projects"], label: "Login" } }
  },
  {
    path: "signup",
    loadComponent: () => import("./signup.component-S4OO65YS.js").then((m) => m.SignupComponent),
    data: { flow: { flowId: "signup", node: "signup", entry: true, edgesTo: ["login", "projects"], label: "Sign up" } }
  },
  {
    path: "projects",
    loadComponent: () => import("./projects-list.component-7SB4XZMV.js").then((m) => m.ProjectsListComponent),
    canActivate: [authGuard],
    data: {
      flow: {
        flowId: "projects",
        node: "projects",
        showInNavbar: true,
        label: "Projects",
        scope: "all",
        edgesTo: ["project-dashboard", "login"]
      }
    }
  },
  {
    path: "projects/:id",
    loadComponent: () => import("./project-shell.component-D6HMSPUB.js").then((m) => m.ProjectShellComponent),
    canActivate: [authGuard],
    data: { flow: { flowId: "project-shell", node: "project-shell", label: "Project", edgesTo: ["project-dashboard"] } },
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      {
        path: "dashboard",
        loadComponent: () => import("./dashboard.component-Y3X2GFLQ.js").then((m) => m.DashboardComponent),
        canActivate: [authGuard],
        data: {
          flow: {
            flowId: "project-dashboard",
            node: "project-dashboard",
            label: "Dashboard",
            edgesTo: ["project-schedule", "project-milestones", "project-budget", "project-siteplan"]
          }
        }
      },
      {
        path: "schedule",
        loadComponent: () => import("./gantt.component-3DNCQCXR.js").then((m) => m.GanttComponent),
        canActivate: [authGuard],
        data: { flow: { flowId: "project-schedule", node: "project-schedule", label: "Schedule", edgesTo: ["project-dashboard"] } }
      },
      {
        path: "milestones",
        loadComponent: () => import("./milestones.component-2MVIN4F6.js").then((m) => m.MilestonesComponent),
        canActivate: [authGuard],
        data: { flow: { flowId: "project-milestones", node: "project-milestones", label: "Milestones", edgesTo: ["project-dashboard"] } }
      },
      {
        path: "budget",
        loadComponent: () => import("./budget.component-7UOXN7XL.js").then((m) => m.BudgetComponent),
        canActivate: [authGuard],
        data: { flow: { flowId: "project-budget", node: "project-budget", label: "Budget", edgesTo: ["project-dashboard"] } }
      },
      {
        path: "siteplan",
        loadComponent: () => import("./siteplan.component-MFKCVHEQ.js").then((m) => m.SiteplanComponent),
        canActivate: [authGuard],
        data: { flow: { flowId: "project-siteplan", node: "project-siteplan", label: "Site Plan", edgesTo: ["project-dashboard"] } }
      }
    ]
  },
  {
    path: "admin/settings",
    loadComponent: () => import("./admin-settings.component-4NLQBDHE.js").then((m) => m.AdminSettingsComponent),
    canActivate: [authGuard],
    data: { flow: { flowId: "admin-settings", node: "admin-settings", showInNavbar: true, label: "Admin", scope: "admin", edgesTo: ["projects"] } }
  },
  { path: "**", redirectTo: "login" }
];

// src/app/core/interceptors/auth.interceptor.ts
var TOKEN_KEY2 = "auth_token";
var authInterceptor = (req, next) => {
  const router = inject(Router);
  const token = localStorage.getItem(TOKEN_KEY2);
  const authReq = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;
  return next(authReq).pipe(catchError((error) => {
    if (error.status === 401) {
      localStorage.removeItem(TOKEN_KEY2);
      router.navigate(["/login"]);
    }
    return throwError(() => error);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
