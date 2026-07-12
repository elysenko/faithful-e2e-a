import {
  AuthService
} from "./chunk-KRRQR5IJ.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  withHashLocation,
  withInMemoryScrolling
} from "./chunk-OKK7IX5Q.js";
import {
  CommonModule,
  computed,
  inject,
  provideHttpClient,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-IS4ZVKQ7.js";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor() {
    this.brand = "Storefront";
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [["data-testid", "app-ready"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "router-outlet");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  min-height: 100svh;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 17 });
})();

// src/app/core/guards/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn()) {
    return true;
  }
  return router.createUrlTree(["/login"]);
};

// src/app/core/guards/role.guard.ts
var roleGuard = (route) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const allowed = route.data?.["roles"] ?? [];
  if (!auth.isLoggedIn()) {
    return router.createUrlTree(["/login"]);
  }
  const role = auth.role();
  if (allowed.length === 0 || role && allowed.includes(role)) {
    return true;
  }
  return router.createUrlTree(["/"]);
};

// src/app/shared/layout.component.ts
var _forTrack0 = ($index, $item) => $item.link;
var _c0 = (a0) => ({ exact: a0 });
function LayoutComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.link)("routerLinkActiveOptions", \u0275\u0275pureFunction1(3, _c0, !!item_r1.exact));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function LayoutComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275element(1, "span", 12);
    \u0275\u0275elementStart(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 15);
    \u0275\u0275listener("click", function LayoutComponent_Conditional_10_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275text(7, "Sign out");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("admin", ctx_r2.auth.isAdmin());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.userName());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.roleLabel());
  }
}
function LayoutComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16);
    \u0275\u0275text(1, "Log in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 17);
    \u0275\u0275text(3, "Sign up");
    \u0275\u0275elementEnd();
  }
}
function LayoutComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9)(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r4.link)("routerLinkActiveOptions", \u0275\u0275pureFunction1(4, _c0, !!item_r4.exact));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function LayoutComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function LayoutComponent_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275elementStart(1, "span", 18);
    \u0275\u0275text(2, "\u238B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4, "Sign out");
    \u0275\u0275elementEnd()();
  }
}
function LayoutComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 21)(1, "span", 18);
    \u0275\u0275text(2, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4, "Log in");
    \u0275\u0275elementEnd()();
  }
}
var LayoutComponent = class _LayoutComponent {
  constructor(auth) {
    this.auth = auth;
    this.allNav = [
      { label: "Catalog", icon: "\u{1F6CD}\uFE0F", link: "/", scope: "public", exact: true },
      { label: "Cart", icon: "\u{1F6D2}", link: "/cart", scope: "auth" },
      { label: "Orders", icon: "\u{1F4E6}", link: "/orders", scope: "auth" },
      { label: "Products", icon: "\u{1F3F7}\uFE0F", link: "/admin/products", scope: "admin" },
      { label: "Manage", icon: "\u2699\uFE0F", link: "/admin/orders", scope: "admin" }
    ];
    this.nav = computed(() => {
      const loggedIn = this.auth.isLoggedIn();
      const admin = this.auth.isAdmin();
      return this.allNav.filter((n) => {
        if (n.scope === "public")
          return true;
        if (n.scope === "auth")
          return loggedIn;
        return admin;
      });
    });
    this.bottomNav = computed(() => this.nav().slice(0, 5));
    this.userName = computed(() => this.auth.user()?.name || this.auth.user()?.email || "Account");
    this.roleLabel = computed(() => this.auth.isAdmin() ? "Admin" : "Shopper");
  }
  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.auth.refresh().subscribe({ error: () => {
      } });
    }
  }
  logout() {
    this.auth.logout();
  }
  static {
    this.\u0275fac = function LayoutComponent_Factory(t) {
      return new (t || _LayoutComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 2, consts: [[1, "app-header", "no-print"], ["routerLink", "/", 1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "top-nav"], ["routerLinkActive", "active", 1, "top-nav-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "header-right"], [1, "app-main"], ["aria-label", "Primary", 1, "bottom-nav", "no-print"], ["routerLinkActive", "active", 1, "bottom-nav-item", 3, "routerLink", "routerLinkActiveOptions"], ["type", "button", 1, "bottom-nav-item"], [1, "user-chip"], [1, "role-dot"], [1, "user-name"], [1, "role-tag"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click"], ["routerLink", "/login", 1, "btn", "btn-outline", "btn-sm"], ["routerLink", "/signup", 1, "btn", "btn-primary", "btn-sm"], ["aria-hidden", "true", 1, "bn-icon"], [1, "bn-label"], ["type", "button", 1, "bottom-nav-item", 3, "click"], ["routerLink", "/login", "routerLinkActive", "active", 1, "bottom-nav-item"]], template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "a", 1)(2, "span", 2);
        \u0275\u0275text(3, "S");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "Storefront");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "nav", 4);
        \u0275\u0275repeaterCreate(7, LayoutComponent_For_8_Template, 2, 5, "a", 5, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275template(10, LayoutComponent_Conditional_10_Template, 8, 4)(11, LayoutComponent_Conditional_11_Template, 4, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "main", 7);
        \u0275\u0275element(13, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "nav", 8);
        \u0275\u0275repeaterCreate(15, LayoutComponent_For_16_Template, 5, 6, "a", 9, _forTrack0);
        \u0275\u0275template(17, LayoutComponent_Conditional_17_Template, 5, 0, "button", 10)(18, LayoutComponent_Conditional_18_Template, 5, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.nav());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(10, ctx.auth.isLoggedIn() ? 10 : 11);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.bottomNav());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(17, ctx.auth.isLoggedIn() ? 17 : 18);
      }
    }, dependencies: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  min-height: 100svh;\n}\n.app-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  height: var(--header-h);\n  padding: 0 var(--space-5);\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  font-weight: 800;\n  color: var(--color-ink);\n}\n.brand[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius);\n  background: var(--color-brand);\n  color: var(--color-text-inverse);\n  font-size: var(--fs-md);\n  font-weight: 800;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.top-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-1);\n  margin-left: var(--space-4);\n}\n.top-nav-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 0 var(--space-3);\n  border-radius: var(--radius);\n  color: var(--color-ink-soft);\n  font-weight: 600;\n  font-size: var(--fs-sm);\n}\n.top-nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n  text-decoration: none;\n}\n.top-nav-link.active[_ngcontent-%COMP%] {\n  background: var(--color-brand-light);\n  color: var(--color-brand-dark);\n}\n.header-right[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  font-size: var(--fs-sm);\n  color: var(--color-ink-soft);\n}\n.role-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--color-muted);\n}\n.role-dot.admin[_ngcontent-%COMP%] {\n  background: var(--color-brand);\n}\n.role-tag[_ngcontent-%COMP%] {\n  padding: 2px var(--space-2);\n  border-radius: var(--radius-pill);\n  background: var(--color-surface-inset);\n  color: var(--color-muted);\n  font-size: var(--fs-xs);\n  font-weight: 700;\n}\n.app-main[_ngcontent-%COMP%] {\n  flex: 1;\n  overscroll-behavior-y: contain;\n}\n.bottom-nav[_ngcontent-%COMP%] {\n  display: none;\n}\n.bottom-nav-item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  min-height: 48px;\n  padding: var(--space-1) 0;\n  border: none;\n  background: transparent;\n  color: var(--color-muted);\n  font-family: inherit;\n  font-size: var(--fs-xs);\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n}\n.bottom-nav-item.active[_ngcontent-%COMP%] {\n  color: var(--color-brand);\n}\n.bn-icon[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  line-height: 1;\n}\n@media (max-width: 768px) {\n  .app-header[_ngcontent-%COMP%] {\n    padding: 0 var(--space-4);\n  }\n  .top-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .user-chip[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .bottom-nav[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 30;\n    display: flex;\n    justify-content: space-around;\n    height: calc(var(--bottomnav-h) + var(--safe-bottom));\n    padding-bottom: var(--safe-bottom);\n    background: var(--color-surface);\n    border-top: 1px solid var(--color-border);\n    box-shadow: 0 -2px 10px rgba(26, 23, 48, 0.06);\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/shared/layout.component.ts", lineNumber: 27 });
})();

// src/app/app.routes.ts
var ADMIN = { roles: ["admin"] };
var routes = [
  {
    path: "login",
    loadComponent: () => import("./login.component-MBAPQUAL.js").then((m) => m.LoginComponent),
    data: { flow: { node: "login", entry: true, edgesTo: ["catalog", "signup", "admin-products"] } }
  },
  {
    path: "signup",
    loadComponent: () => import("./signup.component-4KSOX5LG.js").then((m) => m.SignupComponent),
    data: { flow: { node: "signup", edgesTo: ["catalog", "login"] } }
  },
  {
    path: "",
    component: LayoutComponent,
    children: [
      // ---- Public browse ----
      {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./home.component-U3CS2SVO.js").then((m) => m.HomeComponent),
        data: { flow: { node: "catalog", showInNavbar: true, edgesTo: ["product-detail", "cart"] } }
      },
      {
        path: "products/:id",
        loadComponent: () => import("./product-detail.component-TDXWKJBG.js").then((m) => m.ProductDetailComponent),
        data: { flow: { node: "product-detail", edgesTo: ["catalog", "cart", "login"] } }
      },
      // ---- Shopper (any logged-in user) ----
      {
        path: "cart",
        canActivate: [authGuard],
        loadComponent: () => import("./cart.component-UBQECMXI.js").then((m) => m.CartComponent),
        data: { flow: { node: "cart", showInNavbar: true, scope: "shopper", edgesTo: ["checkout", "catalog", "product-detail"] } }
      },
      {
        path: "checkout",
        canActivate: [authGuard],
        loadComponent: () => import("./checkout.component-EBM6V3BQ.js").then((m) => m.CheckoutComponent),
        data: { flow: { node: "checkout", scope: "shopper", edgesTo: ["order-detail", "cart"] } }
      },
      {
        path: "orders",
        canActivate: [authGuard],
        loadComponent: () => import("./orders.component-Z6A5MMP3.js").then((m) => m.OrdersComponent),
        data: { flow: { node: "orders", showInNavbar: true, scope: "shopper", edgesTo: ["order-detail", "catalog"] } }
      },
      {
        path: "orders/:id",
        canActivate: [authGuard],
        loadComponent: () => import("./order-detail.component-XIML55P3.js").then((m) => m.OrderDetailComponent),
        data: { flow: { node: "order-detail", scope: "shopper", edgesTo: ["orders", "product-detail"] } }
      },
      // ---- Admin ----
      {
        path: "admin/products",
        canActivate: [authGuard, roleGuard],
        loadComponent: () => import("./admin-products.component-SY5MWMGF.js").then((m) => m.AdminProductsComponent),
        data: { roles: ADMIN.roles, flow: { node: "admin-products", showInNavbar: true, scope: "admin", edgesTo: ["admin-product-form", "admin-orders"] } }
      },
      {
        path: "admin/products/new",
        canActivate: [authGuard, roleGuard],
        loadComponent: () => import("./admin-product-form.component-5OGPE65V.js").then((m) => m.AdminProductFormComponent),
        data: { roles: ADMIN.roles, flow: { node: "admin-product-form", scope: "admin", edgesTo: ["admin-products"] } }
      },
      {
        path: "admin/products/:id",
        canActivate: [authGuard, roleGuard],
        loadComponent: () => import("./admin-product-form.component-5OGPE65V.js").then((m) => m.AdminProductFormComponent),
        data: { roles: ADMIN.roles, flow: { node: "admin-product-form", scope: "admin", edgesTo: ["admin-products"] } }
      },
      {
        path: "admin/orders",
        canActivate: [authGuard, roleGuard],
        loadComponent: () => import("./admin-orders.component-KV37MUZG.js").then((m) => m.AdminOrdersComponent),
        data: { roles: ADMIN.roles, flow: { node: "admin-orders", showInNavbar: true, scope: "admin", edgesTo: ["order-detail", "admin-products"] } }
      },
      {
        path: "admin/settings",
        canActivate: [authGuard, roleGuard],
        loadComponent: () => import("./admin-settings.component-H6SHINXI.js").then((m) => m.AdminSettingsComponent),
        data: { roles: ADMIN.roles, flow: { node: "admin-settings", scope: "admin", edgesTo: ["admin-products"] } }
      }
    ]
  },
  { path: "**", redirectTo: "" }
];

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const token = localStorage.getItem("token") || localStorage.getItem("access_token");
  if (token) {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }
  return next(req);
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
