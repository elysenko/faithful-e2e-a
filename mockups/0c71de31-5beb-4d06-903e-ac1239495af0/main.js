import {
  AuthService
} from "./chunk-VYGALJPV.js";
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
} from "./chunk-AWJ4GWCF.js";
import {
  CommonModule,
  catchError,
  filter,
  inject,
  signal,
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
  ɵɵtextInterpolate
} from "./chunk-T5L7N4YZ.js";

// src/app/app.component.ts
function AppComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275text(1, "Settings");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 0)(1, "a", 3)(2, "span", 4);
    \u0275\u0275text(3, "</>");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 5);
    \u0275\u0275text(5, "CodeDeck");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "nav", 6)(7, "a", 7);
    \u0275\u0275text(8, "Workspaces");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AppComponent_Conditional_0_Conditional_9_Template, 2, 0, "a", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9)(11, "span", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 11);
    \u0275\u0275listener("click", function AppComponent_Conditional_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(14, "Logout");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional(9, ctx_r1.auth.isAdmin() ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_2_0 = ctx_r1.auth.user()) == null ? null : tmp_2_0.name) || "Account");
  }
}
function AppComponent_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15)(1, "span", 13);
    \u0275\u0275text(2, "\u2699\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4, "Settings");
    \u0275\u0275elementEnd()();
  }
}
function AppComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 2)(1, "a", 12)(2, "span", 13);
    \u0275\u0275text(3, "\u{1F5C2}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5, "Workspaces");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AppComponent_Conditional_3_Conditional_6_Template, 5, 0, "a", 15);
    \u0275\u0275elementStart(7, "button", 16);
    \u0275\u0275listener("click", function AppComponent_Conditional_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275elementStart(8, "span", 13);
    \u0275\u0275text(9, "\u238B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 14);
    \u0275\u0275text(11, "Logout");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(6, ctx_r1.auth.isAdmin() ? 6 : -1);
  }
}
var AppComponent = class _AppComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.showShell = signal(false);
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      const url = e.urlAfterRedirects;
      const isAuthPage = url.startsWith("/login") || url.startsWith("/signup");
      this.showShell.set(!isAuthPage && this.auth.isLoggedIn());
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 4, consts: [[1, "topbar"], [1, "app-main"], ["aria-label", "Primary", 1, "bottomnav"], ["routerLink", "/workspaces", 1, "brand"], [1, "brand-mark"], [1, "brand-text"], [1, "topnav"], ["routerLink", "/workspaces", "routerLinkActive", "active", 1, "topnav-link"], ["routerLink", "/admin/settings", "routerLinkActive", "active", 1, "topnav-link"], [1, "topbar-right"], ["data-testid", "current-user", 1, "user-chip"], ["type", "button", "data-testid", "logout-btn", 1, "btn", "btn-outline", "btn-sm", 3, "click"], ["routerLink", "/workspaces", "routerLinkActive", "active", 1, "bottomnav-item"], [1, "bn-icon"], [1, "bn-label"], ["routerLink", "/admin/settings", "routerLinkActive", "active", 1, "bottomnav-item"], ["type", "button", 1, "bottomnav-item", 3, "click"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AppComponent_Conditional_0_Template, 15, 2, "header", 0);
        \u0275\u0275elementStart(1, "main", 1);
        \u0275\u0275element(2, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, AppComponent_Conditional_3_Template, 12, 1, "nav", 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.showShell() ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("with-shell", ctx.showShell());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(3, ctx.showShell() ? 3 : -1);
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  min-height: 100svh;\n}\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 40;\n  height: var(--header-h);\n  display: flex;\n  align-items: center;\n  gap: var(--space-5);\n  padding: 0 var(--space-5);\n  background: var(--color-steel-dark);\n  color: #fff;\n  box-shadow: var(--shadow);\n}\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  color: #fff;\n  text-decoration: none;\n  font-weight: 700;\n}\n.brand[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius);\n  background: var(--color-brand);\n  color: #fff;\n  font-family: var(--font-mono);\n  font-size: var(--fs-sm);\n}\n.brand-text[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  letter-spacing: .3px;\n}\n.topnav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.topnav-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 0 var(--space-3);\n  border-radius: var(--radius);\n  color: #d4dae2;\n  font-size: var(--fs-base);\n}\n.topnav-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .08);\n  text-decoration: none;\n}\n.topnav-link.active[_ngcontent-%COMP%] {\n  background: var(--color-brand);\n  color: #fff;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.user-chip[_ngcontent-%COMP%] {\n  color: #cfd6de;\n  font-size: var(--fs-sm);\n}\n.topbar-right[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #fff;\n  border-color: rgba(255, 255, 255, .35);\n}\n.topbar-right[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .1);\n}\n.app-main[_ngcontent-%COMP%] {\n  display: block;\n}\n.bottomnav[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .topnav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .user-chip[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .app-main.with-shell[_ngcontent-%COMP%] {\n    padding-bottom: 68px;\n  }\n  .bottomnav[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 50;\n    display: flex;\n    justify-content: space-around;\n    background: var(--color-surface);\n    border-top: 1px solid var(--color-border);\n    padding-bottom: env(safe-area-inset-bottom);\n    box-shadow: 0 -2px 10px rgba(20, 24, 31, .08);\n  }\n  .bottomnav-item[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 48px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 2px;\n    padding: var(--space-2) 0;\n    border: none;\n    background: transparent;\n    color: var(--color-muted);\n    font-family: inherit;\n    font-size: var(--fs-xs);\n    cursor: pointer;\n  }\n  .bottomnav-item.active[_ngcontent-%COMP%] {\n    color: var(--color-brand);\n  }\n  .bottomnav-item[_ngcontent-%COMP%]:active {\n    background: var(--color-surface-alt);\n  }\n  .bn-icon[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n    line-height: 1;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 14 });
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
  { path: "", redirectTo: "workspaces", pathMatch: "full" },
  {
    path: "login",
    loadComponent: () => import("./login.component-EHT52QYY.js").then((m) => m.LoginComponent),
    data: { flow: { flowId: "login", node: "login", entry: true, edgesTo: ["signup", "workspaces"], label: "Login" } }
  },
  {
    path: "signup",
    loadComponent: () => import("./signup.component-KVZSZ7MN.js").then((m) => m.SignupComponent),
    data: { flow: { flowId: "signup", node: "signup", edgesTo: ["login", "workspaces"], label: "Sign up" } }
  },
  {
    path: "workspaces",
    loadComponent: () => import("./workspace-list.component-VK3U7F62.js").then((m) => m.WorkspaceListComponent),
    canActivate: [authGuard],
    data: { flow: { flowId: "workspaces", node: "workspaces", showInNavbar: true, label: "Workspaces", scope: "all", edgesTo: ["workspace-editor"] } }
  },
  {
    path: "workspaces/:id",
    loadComponent: () => import("./workspace-editor.component-SRV5RGZE.js").then((m) => m.WorkspaceEditorComponent),
    canActivate: [authGuard],
    data: { flow: { flowId: "workspace-editor", node: "workspace-editor", label: "Editor", edgesTo: ["workspaces"] } }
  },
  {
    path: "admin/settings",
    loadComponent: () => import("./settings.component-UIHXRBWH.js").then((m) => m.AdminSettingsComponent),
    canActivate: [authGuard],
    data: { flow: { flowId: "admin-settings", node: "admin-settings", showInNavbar: true, label: "Settings", scope: "admin", edgesTo: ["workspaces"] } }
  },
  { path: "**", redirectTo: "workspaces" }
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
