import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  catchError,
  inject,
  provideHttpClient,
  provideRouter,
  throwError,
  withHashLocation,
  withInMemoryScrolling,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-UQ66P35U.js";

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
    }, dependencies: [RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  min-height: 100svh;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
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

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "bills", pathMatch: "full" },
  {
    path: "",
    loadComponent: () => import("./layout.component-UWEVA7TQ.js").then((m) => m.LayoutComponent),
    children: [
      // ---- Bills (public) ----
      {
        path: "bills",
        loadComponent: () => import("./bills-list.component-7EXVLHXQ.js").then((m) => m.BillsListComponent),
        data: {
          flow: {
            flowId: "bills",
            node: "bills",
            showInNavbar: true,
            label: "Bills",
            scope: "all",
            edgesTo: ["bill-detail", "bill-new", "legislators", "conflicts"]
          }
        }
      },
      {
        path: "bills/new",
        loadComponent: () => import("./bill-form.component-D2F3PGBI.js").then((m) => m.BillFormComponent),
        canActivate: [authGuard],
        data: {
          flow: { flowId: "bill-new", node: "bill-new", label: "New bill", scope: "editor", edgesTo: ["bills"] }
        }
      },
      {
        path: "bills/:id/edit",
        loadComponent: () => import("./bill-form.component-D2F3PGBI.js").then((m) => m.BillFormComponent),
        canActivate: [authGuard],
        data: {
          flow: {
            flowId: "bill-edit",
            node: "bill-edit",
            label: "Edit bill",
            scope: "editor",
            edgesTo: ["bill-detail", "bills"]
          }
        }
      },
      {
        path: "bills/:id",
        loadComponent: () => import("./bill-detail.component-NZ3TK4KH.js").then((m) => m.BillDetailComponent),
        data: {
          flow: {
            flowId: "bill-detail",
            node: "bill-detail",
            label: "Bill detail",
            scope: "all",
            edgesTo: ["bills", "bill-edit", "legislator-detail", "conflicts"]
          }
        }
      },
      // ---- Legislators (public) ----
      {
        path: "legislators",
        loadComponent: () => import("./legislators-list.component-XQDL5RSR.js").then((m) => m.LegislatorsListComponent),
        data: {
          flow: {
            flowId: "legislators",
            node: "legislators",
            showInNavbar: true,
            label: "Legislators",
            scope: "all",
            edgesTo: ["legislator-detail", "legislator-new", "bills"]
          }
        }
      },
      {
        path: "legislators/new",
        loadComponent: () => import("./legislator-form.component-ETMHEAZR.js").then((m) => m.LegislatorFormComponent),
        canActivate: [authGuard],
        data: {
          flow: {
            flowId: "legislator-new",
            node: "legislator-new",
            label: "New legislator",
            scope: "editor",
            edgesTo: ["legislators"]
          }
        }
      },
      {
        path: "legislators/:id/edit",
        loadComponent: () => import("./legislator-form.component-ETMHEAZR.js").then((m) => m.LegislatorFormComponent),
        canActivate: [authGuard],
        data: {
          flow: {
            flowId: "legislator-edit",
            node: "legislator-edit",
            label: "Edit legislator",
            scope: "editor",
            edgesTo: ["legislator-detail", "legislators"]
          }
        }
      },
      {
        path: "legislators/:id",
        loadComponent: () => import("./legislator-detail.component-RBJA6W5B.js").then((m) => m.LegislatorDetailComponent),
        data: {
          flow: {
            flowId: "legislator-detail",
            node: "legislator-detail",
            label: "Legislator detail",
            scope: "all",
            edgesTo: ["legislators", "legislator-edit", "bill-detail"]
          }
        }
      },
      // ---- Conflicts overview (public) ----
      {
        path: "conflicts",
        loadComponent: () => import("./conflicts.component-IDVRFRKQ.js").then((m) => m.ConflictsComponent),
        data: {
          flow: {
            flowId: "conflicts",
            node: "conflicts",
            showInNavbar: true,
            label: "Conflicts",
            scope: "all",
            edgesTo: ["bill-detail", "bills"]
          }
        }
      },
      // ---- Editor login ----
      {
        path: "login",
        loadComponent: () => import("./login.component-2QRDIR5T.js").then((m) => m.LoginComponent),
        data: {
          flow: { flowId: "login", node: "login", entry: true, label: "Editor login", edgesTo: ["bills"] }
        }
      }
    ]
  },
  { path: "**", redirectTo: "bills" }
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
