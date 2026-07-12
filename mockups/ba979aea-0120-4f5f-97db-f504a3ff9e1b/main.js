import {
  AuthService
} from "./chunk-PWDBURR2.js";
import {
  CartService
} from "./chunk-VWLYAYX2.js";
import "./chunk-YUSCFUEV.js";
import {
  CommonModule,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  catchError,
  computed,
  inject,
  provideHttpClient,
  provideRouter,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RUEYC2SA.js";

// src/app/app.component.ts
var _forTrack0 = ($index, $item) => $item.path;
function AppComponent_Conditional_0_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cartCount());
  }
}
function AppComponent_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275text(1);
    \u0275\u0275template(2, AppComponent_Conditional_0_For_5_Conditional_2_Template, 2, 1, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", item_r3.path);
    \u0275\u0275attribute("data-testid", "nav-" + item_r3.label.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(2, item_r3.showCartBadge && ctx_r1.cartCount() > 0 ? 2 : -1);
  }
}
function AppComponent_Conditional_0_For_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cartCount());
  }
}
function AppComponent_Conditional_0_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AppComponent_Conditional_0_For_11_Conditional_5_Template, 2, 1, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", item_r4.path);
    \u0275\u0275attribute("data-testid", "tab-" + item_r4.label.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, item_r4.showCartBadge && ctx_r1.cartCount() > 0 ? 5 : -1);
  }
}
function AppComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 0)(1, "a", 1);
    \u0275\u0275text(2, "Storefront");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275repeaterCreate(4, AppComponent_Conditional_0_For_5_Template, 3, 4, "a", 3, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "span", 4);
    \u0275\u0275elementStart(7, "button", 5);
    \u0275\u0275listener("click", function AppComponent_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(8, "Logout");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "nav", 6);
    \u0275\u0275repeaterCreate(10, AppComponent_Conditional_0_For_11_Template, 6, 5, "a", 7, _forTrack0);
    \u0275\u0275elementStart(12, "a", 8);
    \u0275\u0275listener("click", function AppComponent_Conditional_0_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275elementStart(13, "span", 9);
    \u0275\u0275text(14, "\u21A9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Logout");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.navItems());
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.navItems());
  }
}
var NAV_ITEMS = [
  { path: "/catalog", label: "Shop", icon: "\u{1F6CD}\uFE0F", scope: "all" },
  { path: "/cart", label: "Cart", icon: "\u{1F6D2}", scope: "all", showCartBadge: true },
  { path: "/orders", label: "Orders", icon: "\u{1F4E6}", scope: "all" },
  { path: "/admin/products", label: "Admin", icon: "\u2699\uFE0F", scope: "admin" }
];
var AppComponent = class _AppComponent {
  constructor(auth, cart) {
    this.auth = auth;
    this.cart = cart;
    this.isLoggedIn = this.auth.isLoggedIn;
    this.cartCount = this.cart.count;
    this.navItems = computed(() => NAV_ITEMS.filter((item) => item.scope === "all" || this.auth.isAdmin()));
  }
  logout() {
    this.auth.logout();
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CartService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "navbar"], ["routerLink", "/catalog", 1, "brand"], [1, "nav-links"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "spacer"], ["data-testid", "nav-logout", 1, "btn-ghost", 3, "click"], [1, "tabbar"], ["routerLinkActive", "active", 1, "tab-link", 3, "routerLink"], ["data-testid", "tab-logout", 1, "tab-link", 3, "click"], [1, "tab-icon"], [1, "cart-count"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AppComponent_Conditional_0_Template, 17, 0);
        \u0275\u0275element(1, "router-outlet");
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.isLoggedIn() ? 0 : -1);
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 29 });
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
var TOKEN_KEY2 = "auth_token";
var USER_KEY = "auth_user";
var adminGuard = () => {
  const router = inject(Router);
  const token = localStorage.getItem(TOKEN_KEY2);
  if (!token) {
    return router.createUrlTree(["/login"]);
  }
  try {
    const user = JSON.parse(localStorage.getItem(USER_KEY) ?? "null");
    if (user?.role === "admin") {
      return true;
    }
  } catch {
  }
  return router.createUrlTree(["/catalog"]);
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "catalog", pathMatch: "full" },
  {
    path: "login",
    loadComponent: () => import("./login.component-XYL4UZJH.js").then((m) => m.LoginComponent),
    data: { flow: { flowId: "login", node: "login", entry: true, edgesTo: ["catalog", "signup"], label: "Login" } }
  },
  {
    path: "signup",
    loadComponent: () => import("./signup.component-RGCZJYRN.js").then((m) => m.SignupComponent),
    data: { flow: { flowId: "signup", node: "signup", entry: true, edgesTo: ["catalog", "login"], label: "Sign up" } }
  },
  {
    path: "catalog",
    loadComponent: () => import("./catalog-list.component-VNGXSMO7.js").then((m) => m.CatalogListComponent),
    canActivate: [authGuard],
    data: { flow: { flowId: "catalog", node: "catalog", showInNavbar: true, label: "Shop", scope: "all", edgesTo: ["catalog-detail", "cart"] } }
  },
  {
    path: "catalog/:id",
    loadComponent: () => import("./catalog-detail.component-XNBVDVGW.js").then((m) => m.CatalogDetailComponent),
    canActivate: [authGuard],
    data: { flow: { flowId: "catalog-detail", node: "catalog-detail", label: "Product", scope: "all", edgesTo: ["catalog", "cart"] } }
  },
  {
    path: "cart",
    loadComponent: () => import("./cart.component-7EWXB3YM.js").then((m) => m.CartComponent),
    canActivate: [authGuard],
    data: { flow: { flowId: "cart", node: "cart", showInNavbar: true, label: "Cart", scope: "all", edgesTo: ["catalog", "checkout"] } }
  },
  {
    path: "checkout",
    loadComponent: () => import("./checkout.component-WGBSHZPR.js").then((m) => m.CheckoutComponent),
    canActivate: [authGuard],
    data: { flow: { flowId: "checkout", node: "checkout", label: "Checkout", scope: "all", edgesTo: ["orders", "cart"] } }
  },
  {
    path: "orders",
    loadComponent: () => import("./orders.component-QHZMNPBW.js").then((m) => m.OrdersComponent),
    canActivate: [authGuard],
    data: { flow: { flowId: "orders", node: "orders", showInNavbar: true, label: "Orders", scope: "all", edgesTo: ["order-detail", "catalog"] } }
  },
  {
    path: "orders/:id",
    loadComponent: () => import("./order-detail.component-QA3LDGD2.js").then((m) => m.OrderDetailComponent),
    canActivate: [authGuard],
    data: { flow: { flowId: "order-detail", node: "order-detail", label: "Order detail", scope: "all", edgesTo: ["orders"] } }
  },
  {
    path: "admin/products",
    loadComponent: () => import("./admin-products.component-NI2F2N22.js").then((m) => m.AdminProductsComponent),
    canActivate: [adminGuard],
    data: { flow: { flowId: "admin-products", node: "admin-products", showInNavbar: true, label: "Admin", scope: "admin", edgesTo: ["catalog"] } }
  },
  { path: "**", redirectTo: "catalog" }
];

// src/app/core/interceptors/auth.interceptor.ts
var TOKEN_KEY3 = "auth_token";
var authInterceptor = (req, next) => {
  const router = inject(Router);
  const token = localStorage.getItem(TOKEN_KEY3);
  const authReq = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;
  return next(authReq).pipe(catchError((error) => {
    if (error.status === 401) {
      localStorage.removeItem(TOKEN_KEY3);
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
