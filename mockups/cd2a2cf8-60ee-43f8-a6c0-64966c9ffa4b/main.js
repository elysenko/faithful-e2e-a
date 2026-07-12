import {
  AuthService
} from "./chunk-HSLVF4RF.js";
import {
  CartService
} from "./chunk-4SILDTGW.js";
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
} from "./chunk-JG2HHNQL.js";

// src/app/app.component.ts
var _forTrack0 = ($index, $item) => $item.path;
function AppComponent_For_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.cartCount());
  }
}
function AppComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275text(1);
    \u0275\u0275template(2, AppComponent_For_9_Conditional_2_Template, 2, 1, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", item_r2.path);
    \u0275\u0275attribute("data-testid", "nav-" + item_r2.label.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(2, item_r2.path === "/cart" && ctx_r0.cartCount() > 0 ? 2 : -1);
  }
}
function AppComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 13);
    \u0275\u0275listener("click", function AppComponent_Conditional_11_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.logout());
    });
    \u0275\u0275text(3, " Logout ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_1_0 = ctx_r0.user()) == null ? null : tmp_1_0.name) || ((tmp_1_0 = ctx_r0.user()) == null ? null : tmp_1_0.email));
  }
}
function AppComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275text(1, "Login");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_For_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.cartCount());
  }
}
function AppComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10)(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275template(3, AppComponent_For_17_Conditional_3_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", item_r4.path);
    \u0275\u0275attribute("data-testid", "tab-" + item_r4.label.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r4.icon, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(3, item_r4.path === "/cart" && ctx_r0.cartCount() > 0 ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
var AppComponent = class _AppComponent {
  constructor(auth, cart) {
    this.auth = auth;
    this.cart = cart;
    this.allNav = [
      { label: "Catalog", path: "/catalog", icon: "\u{1F6CD}\uFE0F" },
      { label: "Cart", path: "/cart", icon: "\u{1F6D2}" },
      { label: "Orders", path: "/orders", icon: "\u{1F4E6}" },
      { label: "Products", path: "/admin/products", icon: "\u2699\uFE0F", adminOnly: true },
      { label: "Sales", path: "/admin/orders", icon: "\u{1F4CA}", adminOnly: true }
    ];
    this.navItems = computed(() => this.allNav.filter((item) => !item.adminOnly || this.auth.isAdmin()));
    this.isLoggedIn = this.auth.isLoggedIn;
    this.isAdmin = this.auth.isAdmin;
    this.user = this.auth.user;
    this.cartCount = this.cart.count;
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 1, consts: [[1, "topbar"], [1, "topbar-inner"], ["routerLink", "/catalog", "data-testid", "brand", 1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "top-nav"], ["routerLinkActive", "active", 1, "top-nav-link", 3, "routerLink"], [1, "topbar-actions"], [1, "app-main"], ["aria-label", "Primary", 1, "bottom-tabs"], ["routerLinkActive", "active", 1, "tab", 3, "routerLink"], [1, "nav-badge"], [1, "user-chip"], ["data-testid", "logout", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["routerLink", "/login", "data-testid", "header-login", 1, "btn", "btn-primary", "btn-sm"], [1, "tab-icon"], [1, "tab-badge"], [1, "tab-label"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "a", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u{1F6CD}\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Storefront");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "nav", 5);
        \u0275\u0275repeaterCreate(8, AppComponent_For_9_Template, 3, 4, "a", 6, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275template(11, AppComponent_Conditional_11_Template, 4, 1)(12, AppComponent_Conditional_12_Template, 2, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "main", 8);
        \u0275\u0275element(14, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "nav", 9);
        \u0275\u0275repeaterCreate(16, AppComponent_For_17_Template, 6, 5, "a", 10, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.navItems());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(11, ctx.isLoggedIn() ? 11 : 12);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.navItems());
      }
    }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  min-height: 100svh;\n}\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.topbar-inner[_ngcontent-%COMP%] {\n  max-width: var(--content-max);\n  margin: 0 auto;\n  height: var(--navbar-height);\n  padding: 0 var(--space-4);\n  display: flex;\n  align-items: center;\n  gap: var(--space-5);\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  font-weight: 700;\n  font-size: var(--text-lg);\n  color: var(--color-text);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.top-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  flex: 1;\n}\n.top-nav-link[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  min-height: 40px;\n  padding: 0 var(--space-3);\n  border-radius: var(--radius-md);\n  color: var(--color-text-muted);\n  font-weight: 600;\n  font-size: var(--text-sm);\n}\n.top-nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n  color: var(--color-text);\n}\n.top-nav-link.active[_ngcontent-%COMP%] {\n  background: var(--color-primary-soft);\n  color: var(--color-primary);\n}\n.nav-badge[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: var(--color-text-on-primary);\n  border-radius: var(--radius-pill);\n  font-size: 11px;\n  padding: 1px 7px;\n}\n.topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.user-chip[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  color: var(--color-text-muted);\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.app-main[_ngcontent-%COMP%] {\n  min-height: calc(100svh - var(--navbar-height));\n}\n.bottom-tabs[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .top-nav[_ngcontent-%COMP%], .user-chip[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .topbar-inner[_ngcontent-%COMP%] {\n    gap: var(--space-3);\n    justify-content: space-between;\n  }\n  .bottom-tabs[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 30;\n    display: flex;\n    background: var(--color-surface);\n    border-top: 1px solid var(--color-border);\n    padding-bottom: env(safe-area-inset-bottom);\n    box-shadow: 0 -2px 12px rgba(17, 24, 39, 0.06);\n  }\n  .tab[_ngcontent-%COMP%] {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 2px;\n    min-height: 56px;\n    color: var(--color-text-muted);\n    font-size: 11px;\n    font-weight: 600;\n  }\n  .tab.active[_ngcontent-%COMP%] {\n    color: var(--color-primary);\n  }\n  .tab[_ngcontent-%COMP%]:active {\n    background: var(--color-surface-alt);\n  }\n  .tab-icon[_ngcontent-%COMP%] {\n    position: relative;\n    font-size: 20px;\n    line-height: 1;\n  }\n  .tab-badge[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -6px;\n    right: -10px;\n    background: var(--color-primary);\n    color: var(--color-text-on-primary);\n    border-radius: var(--radius-pill);\n    font-size: 10px;\n    padding: 0 5px;\n    line-height: 16px;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 21 });
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
  if (auth.isAdmin()) {
    return true;
  }
  return router.createUrlTree(["/catalog"]);
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "catalog", pathMatch: "full" },
  {
    path: "login",
    loadComponent: () => import("./login.component-TYT2KKDH.js").then((m) => m.LoginComponent),
    data: { flow: { flowId: "login", node: "login", entry: true, edgesTo: ["catalog", "signup"], label: "Login" } }
  },
  {
    path: "signup",
    loadComponent: () => import("./signup.component-M6G7GEAR.js").then((m) => m.SignupComponent),
    data: { flow: { flowId: "signup", node: "signup", edgesTo: ["catalog", "login"], label: "Sign up" } }
  },
  {
    path: "catalog",
    loadComponent: () => import("./catalog.component-DIUXFPNE.js").then((m) => m.CatalogComponent),
    data: { flow: { flowId: "catalog", node: "catalog", showInNavbar: true, label: "Catalog", scope: "all", edgesTo: ["product-detail", "cart"] } }
  },
  {
    path: "catalog/:id",
    loadComponent: () => import("./product-detail.component-XRW3P2WJ.js").then((m) => m.ProductDetailComponent),
    data: { flow: { flowId: "product-detail", node: "product-detail", label: "Product", edgesTo: ["cart", "catalog"] } }
  },
  {
    path: "cart",
    loadComponent: () => import("./cart.component-ESR4FB2M.js").then((m) => m.CartComponent),
    canActivate: [authGuard],
    data: { flow: { flowId: "cart", node: "cart", showInNavbar: true, label: "Cart", scope: "all", edgesTo: ["checkout", "catalog"] } }
  },
  {
    path: "checkout",
    loadComponent: () => import("./checkout.component-SICUI66K.js").then((m) => m.CheckoutComponent),
    canActivate: [authGuard],
    data: { flow: { flowId: "checkout", node: "checkout", label: "Checkout", edgesTo: ["orders"] } }
  },
  {
    path: "orders",
    loadComponent: () => import("./orders.component-7ZBCSGIM.js").then((m) => m.OrdersComponent),
    canActivate: [authGuard],
    data: { flow: { flowId: "orders", node: "orders", showInNavbar: true, label: "Orders", scope: "all", edgesTo: ["order-detail"] } }
  },
  {
    path: "orders/:id",
    loadComponent: () => import("./order-detail.component-FSNFJESC.js").then((m) => m.OrderDetailComponent),
    canActivate: [authGuard],
    data: { flow: { flowId: "order-detail", node: "order-detail", label: "Order detail", edgesTo: ["orders"] } }
  },
  {
    path: "admin/products",
    loadComponent: () => import("./admin-products.component-LOFX5Q2F.js").then((m) => m.AdminProductsComponent),
    canActivate: [authGuard, adminGuard],
    data: { flow: { flowId: "admin-products", node: "admin-products", showInNavbar: true, label: "Manage Products", scope: "admin", edgesTo: ["admin-product-new", "admin-product-edit"] } },
    children: [
      {
        path: "new",
        loadComponent: () => import("./admin-product-form.component-6573CFWW.js").then((m) => m.AdminProductFormComponent),
        data: { flow: { flowId: "admin-product-new", node: "admin-product-new", label: "New product", scope: "admin", edgesTo: ["admin-products"] } }
      },
      {
        path: ":id/edit",
        loadComponent: () => import("./admin-product-form.component-6573CFWW.js").then((m) => m.AdminProductFormComponent),
        data: { flow: { flowId: "admin-product-edit", node: "admin-product-edit", label: "Edit product", scope: "admin", edgesTo: ["admin-products"] } }
      }
    ]
  },
  {
    path: "admin/orders",
    loadComponent: () => import("./admin-orders.component-NKHMHJQN.js").then((m) => m.AdminOrdersComponent),
    canActivate: [authGuard, adminGuard],
    data: { flow: { flowId: "admin-orders", node: "admin-orders", showInNavbar: true, label: "All Orders", scope: "admin", edgesTo: ["order-detail"] } }
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
