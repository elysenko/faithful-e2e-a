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
} from "./chunk-A62IECG2.js";

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
function role() {
  try {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw).role ?? null : null;
  } catch {
    return null;
  }
}
var authGuard = () => {
  const router = inject(Router);
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token)
    return router.createUrlTree(["/login"]);
  if (role() === "customer")
    return router.createUrlTree(["/portal"]);
  return true;
};
var portalGuard = () => {
  const router = inject(Router);
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token)
    return router.createUrlTree(["/portal/login"]);
  if (role() !== "customer")
    return router.createUrlTree(["/dashboard"]);
  return true;
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  // ---- Public auth ----
  {
    path: "login",
    loadComponent: () => import("./login.component-XH5RYY2F.js").then((m) => m.LoginComponent),
    data: { flow: { flowId: "login", node: "login", entry: true, edgesTo: ["dashboard", "signup", "portal-login"], label: "Login" } }
  },
  {
    path: "signup",
    loadComponent: () => import("./signup.component-63JEODXD.js").then((m) => m.SignupComponent),
    data: { flow: { flowId: "signup", node: "signup", edgesTo: ["dashboard", "login"], label: "Sign up" } }
  },
  {
    path: "portal/login",
    loadComponent: () => import("./portal-login.component-C3WU6TEY.js").then((m) => m.PortalLoginComponent),
    data: { flow: { flowId: "portal-login", node: "portal-login", edgesTo: ["portal-home", "login"], label: "Portal Login" } }
  },
  // ---- Internal app (guarded) ----
  {
    path: "",
    loadComponent: () => import("./app-shell.component-NGCURFWK.js").then((m) => m.AppShellComponent),
    canActivate: [authGuard],
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./dashboard.component-PHTEZARF.js").then((m) => m.DashboardComponent),
        data: { flow: { flowId: "dashboard", node: "dashboard", showInNavbar: true, label: "Dashboard", scope: "all", edgesTo: ["accounts", "email", "orders", "tasks"] } }
      },
      {
        path: "accounts",
        loadComponent: () => import("./accounts.component-NMQVPCMY.js").then((m) => m.AccountsComponent),
        data: { flow: { flowId: "accounts", node: "accounts", showInNavbar: true, label: "Accounts", edgesTo: ["account-detail"] } }
      },
      {
        path: "accounts/:id",
        loadComponent: () => import("./account-detail.component-TMNAS4HP.js").then((m) => m.AccountDetailComponent),
        data: { flow: { flowId: "account-detail", node: "account-detail", label: "Account", edgesTo: ["contact-detail", "project-detail", "quotes"] } }
      },
      {
        path: "contacts",
        loadComponent: () => import("./contacts.component-B6OJF3WJ.js").then((m) => m.ContactsComponent),
        data: { flow: { flowId: "contacts", node: "contacts", showInNavbar: true, label: "Contacts", edgesTo: ["contact-detail"] } }
      },
      {
        path: "contacts/:id",
        loadComponent: () => import("./contact-detail.component-WIQU5HLU.js").then((m) => m.ContactDetailComponent),
        data: { flow: { flowId: "contact-detail", node: "contact-detail", label: "Contact", edgesTo: ["account-detail", "email"] } }
      },
      {
        path: "projects",
        loadComponent: () => import("./projects.component-TFEU553V.js").then((m) => m.ProjectsComponent),
        data: { flow: { flowId: "projects", node: "projects", showInNavbar: true, label: "Projects", edgesTo: ["project-detail"] } }
      },
      {
        path: "projects/:id",
        loadComponent: () => import("./project-detail.component-RTEG5XXE.js").then((m) => m.ProjectDetailComponent),
        data: { flow: { flowId: "project-detail", node: "project-detail", label: "Project", edgesTo: ["quotes", "orders"] } }
      },
      {
        path: "design-ins",
        loadComponent: () => import("./design-ins.component-XAXCLNMI.js").then((m) => m.DesignInsComponent),
        data: { flow: { flowId: "design-ins", node: "design-ins", showInNavbar: true, label: "Design-Ins", edgesTo: ["quotes"] } }
      },
      {
        path: "quotes",
        loadComponent: () => import("./quotes.component-UDLK2H2E.js").then((m) => m.QuotesComponent),
        data: { flow: { flowId: "quotes", node: "quotes", showInNavbar: true, label: "Quotes", edgesTo: ["quote-detail"] } }
      },
      {
        path: "quotes/:id",
        loadComponent: () => import("./quote-detail.component-BPJDOFOS.js").then((m) => m.QuoteDetailComponent),
        data: { flow: { flowId: "quote-detail", node: "quote-detail", label: "Quote", edgesTo: ["validation", "orders"] } }
      },
      {
        path: "validation",
        loadComponent: () => import("./validation.component-LGBAFQVQ.js").then((m) => m.ValidationComponent),
        data: { flow: { flowId: "validation", node: "validation", showInNavbar: true, label: "Validation", edgesTo: ["quotes"] } }
      },
      {
        path: "orders",
        loadComponent: () => import("./orders.component-UDILGUP4.js").then((m) => m.OrdersComponent),
        data: { flow: { flowId: "orders", node: "orders", showInNavbar: true, label: "Orders", edgesTo: ["order-detail"] } }
      },
      {
        path: "orders/:id",
        loadComponent: () => import("./order-detail.component-Z2GW2HNY.js").then((m) => m.OrderDetailComponent),
        data: { flow: { flowId: "order-detail", node: "order-detail", label: "Order", edgesTo: ["warranty"] } }
      },
      {
        path: "warranty",
        loadComponent: () => import("./warranty.component-5ITDEWLM.js").then((m) => m.WarrantyComponent),
        data: { flow: { flowId: "warranty", node: "warranty", showInNavbar: true, label: "Warranty", edgesTo: ["orders"] } }
      },
      {
        path: "revenue",
        loadComponent: () => import("./revenue.component-2MYVLKY4.js").then((m) => m.RevenueComponent),
        data: { flow: { flowId: "revenue", node: "revenue", showInNavbar: true, label: "Revenue", edgesTo: ["reports"] } }
      },
      {
        path: "forecasting",
        loadComponent: () => import("./forecasting.component-G5XCUDKL.js").then((m) => m.ForecastingComponent),
        data: { flow: { flowId: "forecasting", node: "forecasting", showInNavbar: true, label: "Forecasting", edgesTo: ["design-ins"] } }
      },
      {
        path: "email",
        loadComponent: () => import("./email.component-72O2FGGJ.js").then((m) => m.EmailComponent),
        data: { flow: { flowId: "email", node: "email", showInNavbar: true, label: "Email", edgesTo: ["tasks", "contact-detail"] } }
      },
      {
        path: "documents",
        loadComponent: () => import("./documents.component-DDHQW7RD.js").then((m) => m.DocumentsComponent),
        data: { flow: { flowId: "documents", node: "documents", showInNavbar: true, label: "Documents", edgesTo: ["orders"] } }
      },
      {
        path: "tasks",
        loadComponent: () => import("./tasks.component-F75WTPBL.js").then((m) => m.TasksComponent),
        data: { flow: { flowId: "tasks", node: "tasks", showInNavbar: true, label: "Tasks", edgesTo: ["email"] } }
      },
      {
        path: "catalog",
        loadComponent: () => import("./catalog.component-Q2MU34OH.js").then((m) => m.CatalogComponent),
        data: { flow: { flowId: "catalog", node: "catalog", showInNavbar: true, label: "Catalog", edgesTo: ["validation"] } }
      },
      {
        path: "reports",
        loadComponent: () => import("./reports.component-S6VGNOC2.js").then((m) => m.ReportsComponent),
        data: { flow: { flowId: "reports", node: "reports", showInNavbar: true, label: "Reports", edgesTo: ["accounts"] } }
      },
      {
        path: "settings",
        loadComponent: () => import("./settings.component-VMDJCHXL.js").then((m) => m.SettingsComponent),
        data: { flow: { flowId: "settings", node: "settings", showInNavbar: true, label: "Settings", edgesTo: ["dashboard"] } }
      }
    ]
  },
  // ---- Customer portal (separately guarded) ----
  {
    path: "portal",
    loadComponent: () => import("./portal-shell.component-ZME7NSCO.js").then((m) => m.PortalShellComponent),
    canActivate: [portalGuard],
    children: [
      {
        path: "",
        loadComponent: () => import("./portal-dashboard.component-VQ6ISZQ5.js").then((m) => m.PortalDashboardComponent),
        data: { flow: { flowId: "portal-home", node: "portal-home", label: "Portal Home", edgesTo: ["portal-orders", "portal-documents", "portal-pricing", "portal-notifications"] } }
      },
      {
        path: "orders",
        loadComponent: () => import("./portal-orders.component-A2ZKLJDG.js").then((m) => m.PortalOrdersComponent),
        data: { flow: { flowId: "portal-orders", node: "portal-orders", label: "Portal Orders", edgesTo: ["portal-order-detail"] } }
      },
      {
        path: "orders/:id",
        loadComponent: () => import("./portal-order-detail.component-XRDIKYZB.js").then((m) => m.PortalOrderDetailComponent),
        data: { flow: { flowId: "portal-order-detail", node: "portal-order-detail", label: "Portal Order", edgesTo: ["portal-orders"] } }
      },
      {
        path: "documents",
        loadComponent: () => import("./portal-documents.component-57434YFD.js").then((m) => m.PortalDocumentsComponent),
        data: { flow: { flowId: "portal-documents", node: "portal-documents", label: "Portal Documents", edgesTo: ["portal-home"] } }
      },
      {
        path: "pricing-requests",
        loadComponent: () => import("./portal-pricing-requests.component-GGDCQPZO.js").then((m) => m.PortalPricingRequestsComponent),
        data: { flow: { flowId: "portal-pricing", node: "portal-pricing", label: "Pricing Requests", edgesTo: ["portal-project"] } }
      },
      {
        path: "project-requests",
        loadComponent: () => import("./portal-project-requests.component-QM6YW2OY.js").then((m) => m.PortalProjectRequestsComponent),
        data: { flow: { flowId: "portal-project", node: "portal-project", label: "Project Requests", edgesTo: ["portal-home"] } }
      },
      {
        path: "notifications",
        loadComponent: () => import("./portal-notifications.component-MAAJ3HHY.js").then((m) => m.PortalNotificationsComponent),
        data: { flow: { flowId: "portal-notifications", node: "portal-notifications", label: "Notifications", edgesTo: ["portal-home"] } }
      }
    ]
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
    // HashLocation + base:'./' → reliable static hosting under a stripped/prefixed ingress path.
    provideRouter(routes, withHashLocation(), withInMemoryScrolling({ scrollPositionRestoration: "top", anchorScrolling: "enabled" })),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
