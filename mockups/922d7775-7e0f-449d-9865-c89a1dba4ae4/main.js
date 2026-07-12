import {
  AuthService
} from "./chunk-E5YQJQ2W.js";
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
} from "./chunk-ZM34OTSI.js";
import {
  CommonModule,
  computed,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-HP7M3I25.js";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor() {
    this.brand = "CodeDeck";
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
function LayoutComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.link)("routerLinkActiveOptions", \u0275\u0275pureFunction1(4, _c0, !!item_r1.exact));
    \u0275\u0275attribute("data-testid", item_r1.link === "/" ? "nav-workspaces" : item_r1.link === "/admin/users" ? "nav-admin-users" : null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function LayoutComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r2.link)("routerLinkActiveOptions", \u0275\u0275pureFunction1(4, _c0, !!item_r2.exact));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
var LayoutComponent = class _LayoutComponent {
  constructor(auth) {
    this.auth = auth;
    this.allNav = [
      { label: "Workspaces", icon: "\u{1F5C2}\uFE0F", link: "/", exact: true, scope: "auth" },
      { label: "Users", icon: "\u{1F464}", link: "/admin/users", scope: "admin" },
      { label: "Settings", icon: "\u2699\uFE0F", link: "/admin/settings", scope: "admin" }
    ];
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 4, consts: [[1, "app-header", "no-print"], ["routerLink", "/", "data-testid", "layout-brand", 1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "top-nav"], ["routerLinkActive", "active", 1, "top-nav-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "header-right"], [1, "user-chip"], [1, "role-dot"], ["data-testid", "nav-user-email", 1, "user-name"], ["data-testid", "role-label", 1, "role-tag"], ["type", "button", "data-testid", "nav-logout", 1, "btn", "btn-outline", "btn-sm", 3, "click"], [1, "app-main"], ["aria-label", "Primary navigation", 1, "bottom-nav", "no-print"], ["routerLinkActive", "active", 1, "bottom-nav-link", 3, "routerLink", "routerLinkActiveOptions"], ["type", "button", 1, "bottom-nav-link", "bn-signout", 3, "click"], ["aria-hidden", "true", 1, "bn-icon"], [1, "bn-label"]], template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "a", 1)(2, "span", 2);
        \u0275\u0275text(3, "</>");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "CodeDeck");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "nav", 4);
        \u0275\u0275repeaterCreate(7, LayoutComponent_For_8_Template, 2, 6, "a", 5, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6)(10, "span", 7);
        \u0275\u0275element(11, "span", 8);
        \u0275\u0275elementStart(12, "span", 9);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "button", 11);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_16_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(17, "Sign out");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "div", 12);
        \u0275\u0275element(19, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "nav", 13);
        \u0275\u0275repeaterCreate(21, LayoutComponent_For_22_Template, 5, 6, "a", 14, _forTrack0);
        \u0275\u0275elementStart(23, "button", 15);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_23_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(24, "span", 16);
        \u0275\u0275text(25, "\u{1F6AA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 17);
        \u0275\u0275text(27, "Sign out");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.nav());
        \u0275\u0275advance(4);
        \u0275\u0275classProp("admin", ctx.auth.isAdmin());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.userName());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.roleLabel());
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.nav());
      }
    }, dependencies: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  min-height: 100svh;\n}\n.app-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  height: var(--header-h);\n  padding: 0 var(--space-5);\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  font-weight: 800;\n  color: var(--color-ink);\n}\n.brand[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius);\n  background: var(--color-brand);\n  color: var(--color-text-inverse);\n  font-family: var(--font-mono);\n  font-size: var(--fs-xs);\n  font-weight: 800;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  font-weight: 800;\n}\n.top-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-1);\n  margin-left: var(--space-3);\n  flex-wrap: wrap;\n}\n.top-nav-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 0 var(--space-3);\n  border-radius: var(--radius);\n  color: var(--color-ink-soft);\n  font-weight: 600;\n  font-size: var(--fs-sm);\n  white-space: nowrap;\n}\n.top-nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n  text-decoration: none;\n}\n.top-nav-link.active[_ngcontent-%COMP%] {\n  background: var(--color-brand-light);\n  color: var(--color-brand-dark);\n}\n.header-right[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  font-size: var(--fs-sm);\n  color: var(--color-ink-soft);\n}\n.role-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--color-muted);\n}\n.role-dot.admin[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n}\n.role-tag[_ngcontent-%COMP%] {\n  padding: 2px var(--space-2);\n  border-radius: var(--radius-pill);\n  background: var(--color-brand-light);\n  color: var(--color-brand-dark);\n  font-size: var(--fs-xs);\n  font-weight: 700;\n}\n.app-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overscroll-behavior-y: contain;\n}\n.bottom-nav[_ngcontent-%COMP%] {\n  display: none;\n}\n.bottom-nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  flex: 1;\n  min-height: 48px;\n  padding: var(--space-1) 0;\n  border: none;\n  background: transparent;\n  color: var(--color-muted);\n  font-family: inherit;\n  font-size: var(--fs-xs);\n  font-weight: 600;\n  cursor: pointer;\n}\n.bottom-nav-link[_ngcontent-%COMP%]:hover, .bottom-nav-link[_ngcontent-%COMP%]:active {\n  background: var(--color-surface-alt);\n  text-decoration: none;\n}\n.bottom-nav-link.active[_ngcontent-%COMP%] {\n  color: var(--color-brand-dark);\n}\n.bn-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  line-height: 1;\n}\n.bn-label[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n@media (max-width: 768px) {\n  .app-header[_ngcontent-%COMP%] {\n    padding: 0 var(--space-4);\n    gap: var(--space-3);\n  }\n  .top-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .user-chip[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .brand-name[_ngcontent-%COMP%] {\n    display: inline;\n  }\n  .app-main[_ngcontent-%COMP%] {\n    padding-bottom: calc(var(--bottomnav-h) + var(--safe-bottom));\n  }\n  .bottom-nav[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 30;\n    display: flex;\n    justify-content: space-around;\n    align-items: stretch;\n    height: calc(var(--bottomnav-h) + var(--safe-bottom));\n    padding-bottom: var(--safe-bottom);\n    background: var(--color-surface);\n    border-top: 1px solid var(--color-border);\n    box-shadow: 0 -2px 10px rgba(26, 23, 48, 0.06);\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/shared/layout.component.ts", lineNumber: 29 });
})();

// src/app/app.routes.ts
var ADMIN = { roles: ["admin"] };
var routes = [
  {
    path: "login",
    loadComponent: () => import("./login.component-LII6BXZC.js").then((m) => m.LoginComponent),
    data: { flow: { node: "login", entry: true, edgesTo: ["workspaces", "signup"] } }
  },
  {
    path: "signup",
    loadComponent: () => import("./signup.component-DJEDRCMA.js").then((m) => m.SignupComponent),
    data: { flow: { node: "signup", edgesTo: ["workspaces", "login"] } }
  },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      // ---- Workspaces list (default) ----
      {
        path: "",
        pathMatch: "full",
        canActivate: [authGuard],
        loadComponent: () => import("./workspaces-list.component-QTOS5XPP.js").then((m) => m.WorkspacesListComponent),
        data: {
          flow: { node: "workspaces", showInNavbar: true, edgesTo: ["workspace-editor"] }
        }
      },
      // ---- Workspace editor (file tree + tabs + editor + panels) ----
      {
        path: "workspaces/:id",
        canActivate: [authGuard],
        loadComponent: () => import("./workspace-editor.component-PTAFFC4F.js").then((m) => m.WorkspaceEditorComponent),
        data: { flow: { node: "workspace-editor", edgesTo: ["workspaces"] } }
      },
      // ---- Admin: user management (admin only) ----
      {
        path: "admin/users",
        canActivate: [authGuard, roleGuard],
        loadComponent: () => import("./admin-users.component-GVRSCJXQ.js").then((m) => m.AdminUsersComponent),
        data: {
          roles: ADMIN.roles,
          flow: { node: "admin-users", showInNavbar: true, scope: "admin", edgesTo: ["workspaces"] }
        }
      },
      // ---- Admin: settings (admin only) ----
      {
        path: "admin/settings",
        canActivate: [authGuard, roleGuard],
        loadComponent: () => import("./settings.component-UQ5SCAS5.js").then((m) => m.SettingsComponent),
        data: {
          roles: ADMIN.roles,
          flow: { node: "settings", showInNavbar: true, scope: "admin", edgesTo: ["workspaces"] }
        }
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
