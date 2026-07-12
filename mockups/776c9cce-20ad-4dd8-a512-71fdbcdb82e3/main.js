import {
  AuthService
} from "./chunk-IBNCHXSA.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withHashLocation,
  withInMemoryScrolling,
  withInterceptors
} from "./chunk-GFN35O44.js";
import {
  catchError,
  inject,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-KFEQ7DOY.js";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  min-height: 100svh;\n}\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 40;\n  height: var(--header-h);\n  display: flex;\n  align-items: center;\n  gap: var(--space-5);\n  padding: 0 var(--space-5);\n  background: var(--color-steel-dark);\n  color: #fff;\n  box-shadow: var(--shadow);\n}\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  color: #fff;\n  text-decoration: none;\n  font-weight: 700;\n}\n.brand[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius);\n  background: var(--color-brand);\n  color: #fff;\n  font-family: var(--font-mono);\n  font-size: var(--fs-sm);\n}\n.brand-text[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  letter-spacing: .3px;\n}\n.topnav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.topnav-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 0 var(--space-3);\n  border-radius: var(--radius);\n  color: #d4dae2;\n  font-size: var(--fs-base);\n}\n.topnav-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .08);\n  text-decoration: none;\n}\n.topnav-link.active[_ngcontent-%COMP%] {\n  background: var(--color-brand);\n  color: #fff;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.user-chip[_ngcontent-%COMP%] {\n  color: #cfd6de;\n  font-size: var(--fs-sm);\n}\n.topbar-right[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #fff;\n  border-color: rgba(255, 255, 255, .35);\n}\n.topbar-right[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .1);\n}\n.app-main[_ngcontent-%COMP%] {\n  display: block;\n}\n.bottomnav[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .topnav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .user-chip[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .app-main.with-shell[_ngcontent-%COMP%] {\n    padding-bottom: 68px;\n  }\n  .bottomnav[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 50;\n    display: flex;\n    justify-content: space-around;\n    background: var(--color-surface);\n    border-top: 1px solid var(--color-border);\n    padding-bottom: env(safe-area-inset-bottom);\n    box-shadow: 0 -2px 10px rgba(20, 24, 31, .08);\n  }\n  .bottomnav-item[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 48px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 2px;\n    padding: var(--space-2) 0;\n    border: none;\n    background: transparent;\n    color: var(--color-muted);\n    font-family: inherit;\n    font-size: var(--fs-xs);\n    cursor: pointer;\n  }\n  .bottomnav-item.active[_ngcontent-%COMP%] {\n    color: var(--color-brand);\n  }\n  .bottomnav-item[_ngcontent-%COMP%]:active {\n    background: var(--color-surface-alt);\n  }\n  .bn-icon[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n    line-height: 1;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 11 });
})();

// src/app/core/guards/auth.guard.ts
var ACCESS_KEY = "access_token";
var authGuard = () => {
  const router = inject(Router);
  const token = localStorage.getItem(ACCESS_KEY) ?? localStorage.getItem("auth_token");
  return token ? true : router.createUrlTree(["/login"]);
};

// src/app/core/guards/role.guard.ts
var roleGuard = (route) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const allowed = route.data?.["roles"] ?? [];
  if (allowed.length === 0 || auth.hasRole(...allowed))
    return true;
  return router.createUrlTree(["/home"]);
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "login",
    loadComponent: () => import("./login.component-CQT423YK.js").then((m) => m.LoginComponent),
    data: { flow: { flowId: "login", node: "login", entry: true, edgesTo: ["home", "signup"], label: "Login" } }
  },
  {
    path: "signup",
    loadComponent: () => import("./signup.component-ICJ4UEQR.js").then((m) => m.SignupComponent),
    data: { flow: { flowId: "signup", node: "signup", edgesTo: ["home", "login"], label: "Sign up" } }
  },
  {
    path: "",
    loadComponent: () => import("./layout.component-V5E33HNF.js").then((m) => m.LayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: "home",
        loadComponent: () => import("./home.component-GNECP645.js").then((m) => m.HomeComponent),
        data: { flow: {
          flowId: "home",
          node: "home",
          showInNavbar: true,
          label: "Home",
          scope: "all",
          edgesTo: ["schedule", "boats", "members", "conditions", "practice-detail"]
        } }
      },
      {
        path: "schedule",
        loadComponent: () => import("./schedule.component-GUHPU7ER.js").then((m) => m.ScheduleComponent),
        data: { flow: {
          flowId: "schedule",
          node: "schedule",
          showInNavbar: true,
          label: "Schedule",
          scope: "all",
          edgesTo: ["practice-detail", "practice-new", "home"]
        } }
      },
      {
        path: "practices/new",
        loadComponent: () => import("./practice-form.component-CD6Z5BUB.js").then((m) => m.PracticeFormComponent),
        canActivate: [roleGuard],
        data: {
          roles: ["coach"],
          flow: { flowId: "practice-new", node: "practice-new", label: "New practice", scope: "coach", edgesTo: ["schedule"] }
        }
      },
      {
        path: "practices/:id",
        loadComponent: () => import("./practice-detail.component-66IWTPSS.js").then((m) => m.PracticeDetailComponent),
        data: { flow: {
          flowId: "practice-detail",
          node: "practice-detail",
          label: "Practice detail",
          scope: "all",
          edgesTo: ["schedule", "practice-edit", "boats"]
        } }
      },
      {
        path: "practices/:id/edit",
        loadComponent: () => import("./practice-form.component-CD6Z5BUB.js").then((m) => m.PracticeFormComponent),
        canActivate: [roleGuard],
        data: {
          roles: ["coach"],
          flow: { flowId: "practice-edit", node: "practice-edit", label: "Edit practice", scope: "coach", edgesTo: ["practice-detail"] }
        }
      },
      {
        path: "boats",
        loadComponent: () => import("./boats.component-XL5ZHXKC.js").then((m) => m.BoatsComponent),
        data: { flow: {
          flowId: "boats",
          node: "boats",
          showInNavbar: true,
          label: "Boats",
          scope: "all",
          edgesTo: ["boat-new", "boat-detail", "home"]
        } }
      },
      {
        path: "boats/new",
        loadComponent: () => import("./boat-form.component-HH6HHFJZ.js").then((m) => m.BoatFormComponent),
        canActivate: [roleGuard],
        data: {
          roles: ["coach"],
          flow: { flowId: "boat-new", node: "boat-new", label: "New boat", scope: "coach", edgesTo: ["boats"] }
        }
      },
      {
        path: "boats/:id",
        loadComponent: () => import("./boat-form.component-HH6HHFJZ.js").then((m) => m.BoatFormComponent),
        canActivate: [roleGuard],
        data: {
          roles: ["coach"],
          flow: { flowId: "boat-detail", node: "boat-detail", label: "Edit boat", scope: "coach", edgesTo: ["boats"] }
        }
      },
      {
        path: "members",
        loadComponent: () => import("./members.component-MBQILAI7.js").then((m) => m.MembersComponent),
        data: { flow: {
          flowId: "members",
          node: "members",
          showInNavbar: true,
          label: "Members",
          scope: "all",
          edgesTo: ["member-detail", "home"]
        } }
      },
      {
        path: "members/:id",
        loadComponent: () => import("./member-detail.component-47XU5GFE.js").then((m) => m.MemberDetailComponent),
        data: { flow: { flowId: "member-detail", node: "member-detail", label: "Member detail", scope: "all", edgesTo: ["members"] } }
      },
      {
        path: "conditions",
        loadComponent: () => import("./conditions.component-INLSBBMI.js").then((m) => m.ConditionsComponent),
        data: { flow: {
          flowId: "conditions",
          node: "conditions",
          showInNavbar: true,
          label: "Conditions",
          scope: "all",
          edgesTo: ["condition-new", "home"]
        } }
      },
      {
        path: "conditions/new",
        loadComponent: () => import("./condition-new.component-IMDODGSH.js").then((m) => m.ConditionNewComponent),
        data: { flow: { flowId: "condition-new", node: "condition-new", label: "Log conditions", scope: "all", edgesTo: ["conditions"] } }
      },
      {
        path: "admin/settings",
        loadComponent: () => import("./admin-settings.component-YDWPWQUM.js").then((m) => m.AdminSettingsComponent),
        canActivate: [roleGuard],
        data: {
          roles: ["coach"],
          flow: { flowId: "admin-settings", node: "admin-settings", showInNavbar: true, label: "Settings", scope: "coach", edgesTo: ["home"] }
        }
      }
    ]
  },
  { path: "**", redirectTo: "home" }
];

// src/app/core/interceptors/auth.interceptor.ts
var TOKEN_KEY = "auth_token";
var authInterceptor = (req, next) => {
  const router = inject(Router);
  const token = localStorage.getItem(TOKEN_KEY);
  const authReq = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;
  return next(authReq).pipe(catchError((error) => {
    if (error.status === 401) {
      localStorage.removeItem(TOKEN_KEY);
      router.navigate(["/login"]);
    }
    return throwError(() => error);
  }));
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
