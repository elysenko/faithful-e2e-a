import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  catchError,
  inject,
  provideHttpClient,
  provideRouter,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-NK42F6RC.js";

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
    }, dependencies: [RouterOutlet], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 10 });
})();

// src/app/core/guards/auth.guard.ts
var TOKEN_KEY = "auth_token";
var authGuard = () => {
  const router = inject(Router);
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    return true;
  }
  return router.createUrlTree(["/admin/login"]);
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "feed", pathMatch: "full" },
  {
    path: "feed",
    loadComponent: () => import("./feed.component-CSQASDHR.js").then((m) => m.FeedComponent),
    data: {
      flow: {
        flowId: "feed",
        node: "feed",
        entry: true,
        showInNavbar: true,
        label: "Feed",
        scope: "all",
        edgesTo: ["admin-login"]
      }
    }
  },
  {
    path: "admin/login",
    loadComponent: () => import("./admin-login.component-2XJ2W7SP.js").then((m) => m.AdminLoginComponent),
    data: {
      flow: {
        flowId: "admin-login",
        node: "admin-login",
        label: "Admin Login",
        edgesTo: ["admin-dashboard"]
      }
    }
  },
  {
    path: "admin",
    loadComponent: () => import("./admin-shell.component-GVENGUCY.js").then((m) => m.AdminShellComponent),
    canActivate: [authGuard],
    data: {
      flow: {
        flowId: "admin",
        node: "admin",
        label: "Admin",
        scope: "admin",
        edgesTo: ["admin-dashboard", "admin-sources", "admin-categories"]
      }
    },
    children: [
      {
        path: "",
        loadComponent: () => import("./admin-dashboard.component-5VCD7LO4.js").then((m) => m.AdminDashboardComponent),
        data: {
          flow: {
            flowId: "admin-dashboard",
            node: "admin-dashboard",
            showInNavbar: true,
            label: "Dashboard",
            scope: "admin",
            edgesTo: ["admin-sources", "admin-categories"]
          }
        }
      },
      {
        path: "sources",
        loadComponent: () => import("./admin-sources.component-ZP7T32BW.js").then((m) => m.AdminSourcesComponent),
        data: {
          flow: {
            flowId: "admin-sources",
            node: "admin-sources",
            showInNavbar: true,
            label: "Sources",
            scope: "admin",
            edgesTo: ["admin-dashboard", "admin-categories"]
          }
        }
      },
      {
        path: "categories",
        loadComponent: () => import("./admin-categories.component-WCKWWK4I.js").then((m) => m.AdminCategoriesComponent),
        data: {
          flow: {
            flowId: "admin-categories",
            node: "admin-categories",
            showInNavbar: true,
            label: "Categories",
            scope: "admin",
            edgesTo: ["admin-dashboard", "admin-sources"]
          }
        }
      }
    ]
  },
  { path: "**", redirectTo: "feed" }
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
      router.navigate(["/admin/login"]);
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
