import {
  AuthService
} from "./chunk-YCX24YH2.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withHashLocation,
  withInMemoryScrolling,
  withInterceptors
} from "./chunk-OCSIP44N.js";
import {
  catchError,
  inject,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-YT626SJK.js";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor() {
    this.brand = "EasyFile";
  }
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
    }, dependencies: [RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  min-height: 100svh;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 17 });
})();

// src/app/core/guards/auth.guard.ts
var ACCESS_KEY = "access_token";
var authGuard = () => {
  const router = inject(Router);
  const token = localStorage.getItem(ACCESS_KEY) ?? localStorage.getItem("auth_token");
  return token ? true : router.createUrlTree(["/login"]);
};

// src/app/core/guards/role.guard.ts
var roleGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.isAdmin() ? true : router.createUrlTree(["/returns"]);
};

// src/app/app.routes.ts
var routes = [
  { path: "", pathMatch: "full", redirectTo: "returns" },
  {
    path: "login",
    loadComponent: () => import("./login.component-KM6LJQ4V.js").then((m) => m.LoginComponent),
    data: { flow: { node: "login", entry: true, edgesTo: ["returns", "signup"] } }
  },
  {
    path: "signup",
    loadComponent: () => import("./signup.component-T3DS5PDM.js").then((m) => m.SignupComponent),
    data: { flow: { node: "signup", edgesTo: ["returns", "login"] } }
  },
  {
    path: "",
    loadComponent: () => import("./layout.component-MP2OJZL3.js").then((m) => m.LayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: "returns",
        loadComponent: () => import("./returns-list.component-F4WL4IRC.js").then((m) => m.ReturnsListComponent),
        data: { flow: { node: "returns", showInNavbar: true, edgesTo: ["wizard-filing-status"] } }
      },
      {
        path: "returns/:id/wizard",
        loadComponent: () => import("./wizard-shell.component-NRBE3ET3.js").then((m) => m.WizardShellComponent),
        data: { flow: { node: "wizard" } },
        children: [
          {
            path: "",
            pathMatch: "full",
            redirectTo: "filing-status"
          },
          {
            path: "filing-status",
            loadComponent: () => import("./filing-status.component-CTZNZX2N.js").then((m) => m.FilingStatusComponent),
            data: { flow: { node: "wizard-filing-status", edgesTo: ["wizard-dependents"] } }
          },
          {
            path: "dependents",
            loadComponent: () => import("./dependents.component-DJNY4LYI.js").then((m) => m.DependentsComponent),
            data: { flow: { node: "wizard-dependents", edgesTo: ["wizard-income"] } }
          },
          {
            path: "income",
            loadComponent: () => import("./income.component-A23LNLHF.js").then((m) => m.IncomeComponent),
            data: { flow: { node: "wizard-income", edgesTo: ["wizard-deductions"] } }
          },
          {
            path: "deductions",
            loadComponent: () => import("./deductions.component-NKCL536U.js").then((m) => m.DeductionsComponent),
            data: { flow: { node: "wizard-deductions", edgesTo: ["wizard-review"] } }
          },
          {
            path: "review",
            loadComponent: () => import("./review.component-XXLVU5QQ.js").then((m) => m.ReviewComponent),
            data: { flow: { node: "wizard-review", edgesTo: ["returns"] } }
          }
        ]
      },
      {
        path: "admin/stats",
        canActivate: [roleGuard],
        loadComponent: () => import("./admin-stats.component-W3HRZLKK.js").then((m) => m.AdminStatsComponent),
        data: { flow: { node: "admin-stats", showInNavbar: true, scope: "admin" } }
      },
      {
        path: "admin/users",
        canActivate: [roleGuard],
        loadComponent: () => import("./admin-users.component-2HLYG5HD.js").then((m) => m.AdminUsersComponent),
        data: { flow: { node: "admin-users", showInNavbar: true, scope: "admin" } }
      },
      {
        path: "admin/settings",
        canActivate: [roleGuard],
        loadComponent: () => import("./admin-settings.component-BFF5FAXB.js").then((m) => m.AdminSettingsComponent),
        data: { flow: { node: "admin-settings", showInNavbar: true, scope: "admin" } }
      }
    ]
  },
  { path: "**", redirectTo: "returns" }
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
