import {
  AuthService
} from "./chunk-WUH3AZNU.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withHashLocation,
  withInMemoryScrolling,
  withInterceptors
} from "./chunk-BEE4MSIP.js";
import {
  catchError,
  inject,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-VVK4PSXI.js";

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
  return router.createUrlTree(["/dashboard"]);
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  {
    path: "login",
    loadComponent: () => import("./login.component-X5IPEG2I.js").then((m) => m.LoginComponent),
    data: { flow: { flowId: "login", node: "login", entry: true, edgesTo: ["dashboard", "signup"], label: "Login" } }
  },
  {
    path: "signup",
    loadComponent: () => import("./signup.component-D4R4HBTD.js").then((m) => m.SignupComponent),
    data: { flow: { flowId: "signup", node: "signup", edgesTo: ["dashboard", "login"], label: "Sign up" } }
  },
  {
    path: "",
    loadComponent: () => import("./layout.component-ORJ4QKNK.js").then((m) => m.LayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./dashboard.component-KFGZTI42.js").then((m) => m.DashboardComponent),
        data: { flow: {
          flowId: "dashboard",
          node: "dashboard",
          showInNavbar: true,
          label: "Dashboard",
          scope: "all",
          edgesTo: ["customers", "suppliers", "products", "purchase-orders", "sales-orders", "invoices", "users", "admin-settings"]
        } }
      },
      {
        path: "customers",
        loadComponent: () => import("./customers-list.component-YJM5ZBNX.js").then((m) => m.CustomersListComponent),
        canActivate: [roleGuard],
        data: {
          roles: ["sales", "admin"],
          flow: { flowId: "customers", node: "customers", showInNavbar: true, label: "Customers", scope: "sales", edgesTo: ["customer-new", "customer-detail", "dashboard"] }
        }
      },
      {
        path: "customers/new",
        loadComponent: () => import("./customer-new.component-DU4G5RLQ.js").then((m) => m.CustomerNewComponent),
        canActivate: [roleGuard],
        data: {
          roles: ["sales", "admin"],
          flow: { flowId: "customer-new", node: "customer-new", label: "New customer", scope: "sales", edgesTo: ["customers"] }
        }
      },
      {
        path: "customers/:id",
        loadComponent: () => import("./customer-detail.component-STVETOZ7.js").then((m) => m.CustomerDetailComponent),
        canActivate: [roleGuard],
        data: {
          roles: ["sales", "admin"],
          flow: { flowId: "customer-detail", node: "customer-detail", label: "Customer detail", scope: "sales", edgesTo: ["customers", "sales-orders"] }
        }
      },
      {
        path: "suppliers",
        loadComponent: () => import("./suppliers-list.component-JW66UAEM.js").then((m) => m.SuppliersListComponent),
        canActivate: [roleGuard],
        data: {
          roles: ["purchasing", "admin"],
          flow: { flowId: "suppliers", node: "suppliers", showInNavbar: true, label: "Suppliers", scope: "purchasing", edgesTo: ["supplier-detail", "dashboard"] }
        }
      },
      {
        path: "suppliers/:id",
        loadComponent: () => import("./supplier-detail.component-QCC7MNTD.js").then((m) => m.SupplierDetailComponent),
        canActivate: [roleGuard],
        data: {
          roles: ["purchasing", "admin"],
          flow: { flowId: "supplier-detail", node: "supplier-detail", label: "Supplier detail", scope: "purchasing", edgesTo: ["suppliers", "purchase-orders"] }
        }
      },
      {
        path: "products",
        loadComponent: () => import("./products-list.component-FH2F2GGU.js").then((m) => m.ProductsListComponent),
        data: { flow: { flowId: "products", node: "products", showInNavbar: true, label: "Products", scope: "all", edgesTo: ["product-detail", "dashboard"] } }
      },
      {
        path: "products/:id",
        loadComponent: () => import("./product-form.component-4WIQYS2M.js").then((m) => m.ProductFormComponent),
        data: { flow: { flowId: "product-detail", node: "product-detail", label: "Product detail", scope: "all", edgesTo: ["products"] } }
      },
      {
        path: "purchase-orders",
        loadComponent: () => import("./po-list.component-WC5DLJVT.js").then((m) => m.PoListComponent),
        canActivate: [roleGuard],
        data: {
          roles: ["purchasing", "admin"],
          flow: { flowId: "purchase-orders", node: "purchase-orders", showInNavbar: true, label: "Purchase Orders", scope: "purchasing", edgesTo: ["po-new", "po-detail", "dashboard"] }
        }
      },
      {
        path: "purchase-orders/new",
        loadComponent: () => import("./po-new.component-DWLEVXPU.js").then((m) => m.PoNewComponent),
        canActivate: [roleGuard],
        data: {
          roles: ["purchasing", "admin"],
          flow: { flowId: "po-new", node: "po-new", label: "New purchase order", scope: "purchasing", edgesTo: ["purchase-orders"] }
        }
      },
      {
        path: "purchase-orders/:id",
        loadComponent: () => import("./po-detail.component-N6PJUYLW.js").then((m) => m.PoDetailComponent),
        canActivate: [roleGuard],
        data: {
          roles: ["purchasing", "admin"],
          flow: { flowId: "po-detail", node: "po-detail", label: "Purchase order", scope: "purchasing", edgesTo: ["purchase-orders", "products"] }
        }
      },
      {
        path: "sales-orders",
        loadComponent: () => import("./so-list.component-O2N7JEK6.js").then((m) => m.SoListComponent),
        canActivate: [roleGuard],
        data: {
          roles: ["sales", "admin"],
          flow: { flowId: "sales-orders", node: "sales-orders", showInNavbar: true, label: "Sales Orders", scope: "sales", edgesTo: ["so-new", "so-detail", "dashboard"] }
        }
      },
      {
        path: "sales-orders/new",
        loadComponent: () => import("./so-new.component-GFDONHNB.js").then((m) => m.SoNewComponent),
        canActivate: [roleGuard],
        data: {
          roles: ["sales", "admin"],
          flow: { flowId: "so-new", node: "so-new", label: "New sales order", scope: "sales", edgesTo: ["sales-orders"] }
        }
      },
      {
        path: "sales-orders/:id",
        loadComponent: () => import("./so-detail.component-OVSLKJ5F.js").then((m) => m.SoDetailComponent),
        canActivate: [roleGuard],
        data: {
          roles: ["sales", "admin"],
          flow: { flowId: "so-detail", node: "so-detail", label: "Sales order", scope: "sales", edgesTo: ["sales-orders", "invoice-detail"] }
        }
      },
      {
        path: "invoices",
        loadComponent: () => import("./invoices-list.component-EZM5MD6D.js").then((m) => m.InvoicesListComponent),
        canActivate: [roleGuard],
        data: {
          roles: ["sales", "admin"],
          flow: { flowId: "invoices", node: "invoices", showInNavbar: true, label: "Invoices", scope: "sales", edgesTo: ["invoice-detail", "dashboard"] }
        }
      },
      {
        path: "invoices/:id",
        loadComponent: () => import("./invoice-detail.component-A3EYSFDK.js").then((m) => m.InvoiceDetailComponent),
        canActivate: [roleGuard],
        data: {
          roles: ["sales", "admin"],
          flow: { flowId: "invoice-detail", node: "invoice-detail", label: "Invoice", scope: "sales", edgesTo: ["invoices"] }
        }
      },
      {
        path: "users",
        loadComponent: () => import("./users.component-YNQOTMLJ.js").then((m) => m.UsersComponent),
        canActivate: [roleGuard],
        data: {
          roles: ["admin"],
          flow: { flowId: "users", node: "users", showInNavbar: true, label: "Users", scope: "admin", edgesTo: ["dashboard"] }
        }
      },
      {
        path: "admin/settings",
        loadComponent: () => import("./admin-settings.component-GEIIZKMZ.js").then((m) => m.AdminSettingsComponent),
        canActivate: [roleGuard],
        data: {
          roles: ["admin"],
          flow: { flowId: "admin-settings", node: "admin-settings", showInNavbar: true, label: "Admin Settings", scope: "admin", edgesTo: ["dashboard"] }
        }
      }
    ]
  },
  { path: "**", redirectTo: "dashboard" }
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
