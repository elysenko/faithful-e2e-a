import {
  AuthService
} from "./chunk-JCBFPNP7.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-GPQOFHD2.js";
import {
  catchError,
  inject,
  provideHttpClient,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-2VXAXVQ7.js";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [["data-testid", "app-ready", 1, "app-shell"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "router-outlet");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [RouterOutlet], styles: ["\n\n.app-shell[_ngcontent-%COMP%] {\n  display: contents;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 11 });
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
  const router = inject(Router);
  const auth = inject(AuthService);
  if (!auth.isLoggedIn()) {
    return router.createUrlTree(["/login"]);
  }
  if (!auth.isAdmin()) {
    return router.createUrlTree(["/catalog"]);
  }
  return true;
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "catalog", pathMatch: "full" },
  {
    path: "login",
    loadComponent: () => import("./login.component-SI4OBCOI.js").then((m) => m.LoginComponent),
    data: { flow: { flowId: "login", node: "login", entry: true, edgesTo: ["catalog", "signup"], label: "Login" } }
  },
  {
    path: "signup",
    loadComponent: () => import("./signup.component-ZMSIIRV7.js").then((m) => m.SignupComponent),
    data: { flow: { flowId: "signup", node: "signup", edgesTo: ["catalog", "login"], label: "Sign up" } }
  },
  {
    path: "",
    loadComponent: () => import("./storefront-layout.component-47XNLXJX.js").then((m) => m.StorefrontLayoutComponent),
    children: [
      {
        path: "catalog",
        loadComponent: () => import("./catalog.component-6NRPWEX7.js").then((m) => m.CatalogComponent),
        data: { flow: { flowId: "catalog", node: "catalog", showInNavbar: true, label: "Catalog", scope: "all", edgesTo: ["product-detail", "cart"] } }
      },
      {
        path: "products/:id",
        loadComponent: () => import("./product-detail.component-KI45EGL4.js").then((m) => m.ProductDetailComponent),
        data: { flow: { flowId: "product-detail", node: "product-detail", label: "Product", edgesTo: ["cart", "login"] } }
      },
      {
        path: "cart",
        canActivate: [authGuard],
        loadComponent: () => import("./cart.component-LM54D7YQ.js").then((m) => m.CartComponent),
        data: { flow: { flowId: "cart", node: "cart", showInNavbar: true, label: "Cart", scope: "all", edgesTo: ["checkout", "catalog"] } }
      },
      {
        path: "checkout",
        canActivate: [authGuard],
        loadComponent: () => import("./checkout.component-63VB2TET.js").then((m) => m.CheckoutComponent),
        data: { flow: { flowId: "checkout", node: "checkout", label: "Checkout", edgesTo: ["order-detail"] } }
      },
      {
        path: "orders",
        canActivate: [authGuard],
        loadComponent: () => import("./order-history.component-CZAWA4SP.js").then((m) => m.OrderHistoryComponent),
        data: { flow: { flowId: "orders", node: "orders", showInNavbar: true, label: "Orders", scope: "all", edgesTo: ["order-detail"] } }
      },
      {
        path: "orders/:id",
        canActivate: [authGuard],
        loadComponent: () => import("./order-detail.component-56IPH6Z5.js").then((m) => m.OrderDetailComponent),
        data: { flow: { flowId: "order-detail", node: "order-detail", label: "Order detail", edgesTo: ["orders"] } }
      },
      {
        path: "admin/products",
        canActivate: [adminGuard],
        loadComponent: () => import("./admin-products.component-DFDV3TIK.js").then((m) => m.AdminProductsComponent),
        data: { flow: { flowId: "admin-products", node: "admin-products", showInNavbar: true, label: "Products", scope: "admin", edgesTo: ["admin-product-new", "admin-product-edit"] } }
      },
      {
        path: "admin/products/new",
        canActivate: [adminGuard],
        loadComponent: () => import("./admin-product-form.component-7TM4YSNT.js").then((m) => m.AdminProductFormComponent),
        data: { flow: { flowId: "admin-product-new", node: "admin-product-new", label: "New product", scope: "admin", edgesTo: ["admin-products"] } }
      },
      {
        path: "admin/products/:id/edit",
        canActivate: [adminGuard],
        loadComponent: () => import("./admin-product-form.component-7TM4YSNT.js").then((m) => m.AdminProductFormComponent),
        data: { flow: { flowId: "admin-product-edit", node: "admin-product-edit", label: "Edit product", scope: "admin", edgesTo: ["admin-products"] } }
      },
      {
        path: "admin/orders",
        canActivate: [adminGuard],
        loadComponent: () => import("./admin-orders.component-SBAOIN67.js").then((m) => m.AdminOrdersComponent),
        data: { flow: { flowId: "admin-orders", node: "admin-orders", showInNavbar: true, label: "All Orders", scope: "admin" } }
      }
    ]
  },
  { path: "**", redirectTo: "catalog" }
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
