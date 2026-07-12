import {
  AuthService
} from "./chunk-7JCEHVK2.js";
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
} from "./chunk-POJ4OZZ3.js";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(t) {
    return new (t || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 10 });
})();

// src/app/core/guards/auth.guard.ts
var TOKEN_KEY = "token";
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
  const router = inject(Router);
  const auth = inject(AuthService);
  if (!auth.isLoggedIn()) {
    return router.createUrlTree(["/login"]);
  }
  if (!auth.isAdmin()) {
    return router.createUrlTree(["/"]);
  }
  return true;
};

// src/app/app.routes.ts
var routes = [
  {
    path: "login",
    loadComponent: () => import("./login.component-IQTO3ZTT.js").then((m) => m.LoginComponent),
    data: { flow: { flowId: "login", node: "login", entry: true, edgesTo: ["catalog", "signup"], label: "Login" } }
  },
  {
    path: "signup",
    loadComponent: () => import("./signup.component-I4L6TD7T.js").then((m) => m.SignupComponent),
    data: { flow: { flowId: "signup", node: "signup", edgesTo: ["login", "catalog"], label: "Sign up" } }
  },
  {
    path: "",
    loadComponent: () => import("./storefront-layout.component-PWWKIYYR.js").then((m) => m.StorefrontLayoutComponent),
    children: [
      {
        path: "",
        loadComponent: () => import("./catalog.component-GJ7RFM7X.js").then((m) => m.CatalogComponent),
        data: { flow: { flowId: "catalog", node: "catalog", showInNavbar: true, label: "Catalog", scope: "all", edgesTo: ["product-detail", "cart"] } }
      },
      {
        path: "products/:id",
        loadComponent: () => import("./product-detail.component-IXQYSPHA.js").then((m) => m.ProductDetailComponent),
        data: { flow: { flowId: "product-detail", node: "product-detail", label: "Product", edgesTo: ["cart", "catalog"] } }
      },
      {
        path: "cart",
        loadComponent: () => import("./cart.component-Q75GF3W4.js").then((m) => m.CartComponent),
        canActivate: [authGuard],
        data: { flow: { flowId: "cart", node: "cart", showInNavbar: true, label: "Cart", scope: "shopper", edgesTo: ["checkout", "catalog"] } }
      },
      {
        path: "checkout",
        loadComponent: () => import("./checkout.component-WRLMHNRI.js").then((m) => m.CheckoutComponent),
        canActivate: [authGuard],
        data: { flow: { flowId: "checkout", node: "checkout", label: "Checkout", edgesTo: ["order-detail", "cart"] } }
      },
      {
        path: "orders",
        loadComponent: () => import("./order-history.component-SH4RJG5E.js").then((m) => m.OrderHistoryComponent),
        canActivate: [authGuard],
        data: { flow: { flowId: "orders", node: "orders", showInNavbar: true, label: "Orders", scope: "shopper", edgesTo: ["order-detail"] } }
      },
      {
        path: "orders/:id",
        loadComponent: () => import("./order-detail.component-HW3O4KMM.js").then((m) => m.OrderDetailComponent),
        canActivate: [authGuard],
        data: { flow: { flowId: "order-detail", node: "order-detail", label: "Order detail", edgesTo: ["orders"] } }
      },
      {
        path: "admin/products",
        loadComponent: () => import("./admin-products.component-VWC4U7HC.js").then((m) => m.AdminProductsComponent),
        canActivate: [adminGuard],
        data: { flow: { flowId: "admin-products", node: "admin-products", showInNavbar: true, label: "Manage products", scope: "admin", edgesTo: ["admin-orders", "catalog"] } }
      },
      {
        path: "admin/orders",
        loadComponent: () => import("./admin-orders.component-PLXODADV.js").then((m) => m.AdminOrdersComponent),
        canActivate: [adminGuard],
        data: { flow: { flowId: "admin-orders", node: "admin-orders", showInNavbar: true, label: "Manage orders", scope: "admin", edgesTo: ["order-detail"] } }
      }
    ]
  },
  { path: "**", redirectTo: "" }
];

// src/app/core/interceptors/auth.interceptor.ts
var TOKEN_KEY2 = "token";
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
    provideRouter(routes, withHashLocation(), withInMemoryScrolling({ scrollPositionRestoration: "top" })),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
