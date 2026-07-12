import {
  AuthService
} from "./chunk-2ZMDFIT5.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withInterceptors
} from "./chunk-JU25ONEJ.js";
import {
  catchError,
  inject,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-DARMOPX2.js";

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
  return router.createUrlTree(["/login"]);
};

// src/app/core/guards/admin.guard.ts
var adminGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isLoggedIn()) {
    return router.createUrlTree(["/login"]);
  }
  if (auth.isAdmin()) {
    return true;
  }
  return router.createUrlTree(["/items"]);
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    loadComponent: () => import("./login.component-ORUYQYHG.js").then((m) => m.LoginComponent),
    data: { flow: { flowId: "login", node: "login", entry: true, edgesTo: ["signup", "items"], label: "Login" } }
  },
  {
    path: "signup",
    loadComponent: () => import("./signup.component-DZIJ57O5.js").then((m) => m.SignupComponent),
    data: { flow: { flowId: "signup", node: "signup", edgesTo: ["login", "items"], label: "Sign up" } }
  },
  {
    path: "",
    loadComponent: () => import("./storefront-layout.component-ORYXMCAP.js").then((m) => m.StorefrontLayoutComponent),
    children: [
      {
        path: "items",
        loadComponent: () => import("./items-list.component-SV6AE57L.js").then((m) => m.ItemsListComponent),
        canActivate: [authGuard],
        data: { flow: { flowId: "items", node: "items", showInNavbar: true, label: "Items", scope: "all", edgesTo: ["item-detail", "movement-new", "admin-items"] } }
      },
      {
        path: "items/:id",
        loadComponent: () => import("./item-detail.component-4FPOLAHR.js").then((m) => m.ItemDetailComponent),
        canActivate: [authGuard],
        data: { flow: { flowId: "item-detail", node: "item-detail", label: "Item detail", edgesTo: ["movement-new", "admin-item-edit"] } }
      },
      {
        path: "movements/new",
        loadComponent: () => import("./movement-form.component-QAIRNLMX.js").then((m) => m.MovementFormComponent),
        canActivate: [authGuard],
        data: { flow: { flowId: "movement-new", node: "movement-new", showInNavbar: true, label: "Record Movement", scope: "all", edgesTo: ["item-detail"] } }
      },
      {
        path: "movements",
        loadComponent: () => import("./audit-log.component-J4J53GQD.js").then((m) => m.AuditLogComponent),
        canActivate: [adminGuard],
        data: { flow: { flowId: "audit-log", node: "audit-log", showInNavbar: true, label: "Audit Log", scope: "admin" } }
      },
      {
        path: "reports/low-stock",
        loadComponent: () => import("./low-stock.component-2BKABE3Z.js").then((m) => m.LowStockComponent),
        canActivate: [adminGuard],
        data: { flow: { flowId: "low-stock", node: "low-stock", showInNavbar: true, label: "Low-Stock Report", scope: "admin", edgesTo: ["movement-new"] } }
      },
      {
        path: "admin/items",
        loadComponent: () => import("./admin-items.component-6HMSW3MP.js").then((m) => m.AdminItemsComponent),
        canActivate: [adminGuard],
        data: { flow: { flowId: "admin-items", node: "admin-items", showInNavbar: true, label: "Manage Items", scope: "admin", edgesTo: ["admin-item-edit"] } }
      },
      {
        path: "admin/items/:id/edit",
        loadComponent: () => import("./admin-items.component-6HMSW3MP.js").then((m) => m.AdminItemsComponent),
        canActivate: [adminGuard],
        data: { flow: { flowId: "admin-item-edit", node: "admin-item-edit", label: "Edit Item", edgesTo: ["admin-items"] } }
      },
      {
        path: "admin/locations",
        loadComponent: () => import("./admin-locations.component-KNSX5LOL.js").then((m) => m.AdminLocationsComponent),
        canActivate: [adminGuard],
        data: { flow: { flowId: "admin-locations", node: "admin-locations", showInNavbar: true, label: "Manage Locations", scope: "admin", edgesTo: ["admin-location-edit"] } }
      },
      {
        path: "admin/locations/:id/edit",
        loadComponent: () => import("./admin-locations.component-KNSX5LOL.js").then((m) => m.AdminLocationsComponent),
        canActivate: [adminGuard],
        data: { flow: { flowId: "admin-location-edit", node: "admin-location-edit", label: "Edit Location", edgesTo: ["admin-locations"] } }
      },
      {
        path: "admin/settings",
        loadComponent: () => import("./admin-settings.component-GUFYQFA7.js").then((m) => m.AdminSettingsComponent),
        canActivate: [adminGuard],
        data: { flow: { flowId: "admin-settings", node: "admin-settings", showInNavbar: true, label: "Settings", scope: "admin" } }
      }
    ]
  },
  { path: "**", redirectTo: "items" }
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
