import {
  AuthService
} from "./chunk-GASQOZOB.js";
import {
  CartService
} from "./chunk-5W3QQDJZ.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withHashLocation,
  withInMemoryScrolling,
  withInterceptors
} from "./chunk-5PRKSMZW.js";
import {
  CommonModule,
  catchError,
  inject,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-LLQROSRE.js";

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
  return router.createUrlTree(["/catalog"]);
};

// src/app/shared/storefront-layout.component.ts
function StorefrontLayoutComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275text(1, "Orders");
    \u0275\u0275elementEnd();
  }
}
function StorefrontLayoutComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275text(1, "Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 23);
    \u0275\u0275text(3, "Manage Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 24);
    \u0275\u0275text(5, "Settings");
    \u0275\u0275elementEnd();
  }
}
function StorefrontLayoutComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.cart.count());
  }
}
function StorefrontLayoutComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 26);
    \u0275\u0275listener("click", function StorefrontLayoutComponent_Conditional_18_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.logout());
    });
    \u0275\u0275text(3, "Logout");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.user()) == null ? null : tmp_1_0.email);
  }
}
function StorefrontLayoutComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275text(1, "Login");
    \u0275\u0275elementEnd();
  }
}
function StorefrontLayoutComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.cart.count());
  }
}
function StorefrontLayoutComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 21)(1, "span", 16);
    \u0275\u0275text(2, "\u2699\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4, "Admin");
    \u0275\u0275elementEnd()();
  }
}
function StorefrontLayoutComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function StorefrontLayoutComponent_Conditional_40_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.logout());
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2, "\u{1F6AA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4, "Logout");
    \u0275\u0275elementEnd()();
  }
}
function StorefrontLayoutComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 29)(1, "span", 16);
    \u0275\u0275text(2, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4, "Login");
    \u0275\u0275elementEnd()();
  }
}
var StorefrontLayoutComponent = class _StorefrontLayoutComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.cart = inject(CartService);
    this.isLoggedIn = this.auth.isLoggedIn;
    this.isAdmin = this.auth.isAdmin;
    this.user = this.auth.user;
  }
  logout() {
    this.auth.logout();
  }
  static {
    this.\u0275fac = function StorefrontLayoutComponent_Factory(t) {
      return new (t || _StorefrontLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StorefrontLayoutComponent, selectors: [["app-storefront-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 6, consts: [["data-testid", "app-ready", 1, "shell"], [1, "topbar"], [1, "topbar-inner"], ["routerLink", "/catalog", 1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "desktop-nav"], ["routerLink", "/catalog", "routerLinkActive", "active"], ["routerLink", "/orders", "routerLinkActive", "active"], [1, "topbar-actions"], ["routerLink", "/cart", "aria-label", "Cart", 1, "cart-link"], [1, "cart-icon"], ["data-testid", "cart-badge", 1, "cart-badge"], [1, "content"], [1, "tabbar"], ["routerLink", "/catalog", "routerLinkActive", "active", 1, "tab"], [1, "tab-ico"], [1, "tab-label"], ["routerLink", "/cart", "routerLinkActive", "active", 1, "tab"], [1, "tab-badge"], ["routerLink", "/orders", "routerLinkActive", "active", 1, "tab"], ["routerLink", "/admin/products", "routerLinkActive", "active", 1, "tab"], ["routerLink", "/admin/products", "routerLinkActive", "active"], ["routerLink", "/admin/orders", "routerLinkActive", "active"], ["routerLink", "/admin/settings", "routerLinkActive", "active"], [1, "user-email"], ["data-testid", "logout", 1, "btn", "btn-sm", 3, "click"], ["routerLink", "/login", 1, "btn", "btn-sm", "btn-primary"], [1, "tab", 3, "click"], ["routerLink", "/login", "routerLinkActive", "active", 1, "tab"]], template: function StorefrontLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "a", 3)(4, "span", 4);
        \u0275\u0275text(5, "\u26A1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 5);
        \u0275\u0275text(7, "Storefront");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "nav", 6)(9, "a", 7);
        \u0275\u0275text(10, "Catalog");
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, StorefrontLayoutComponent_Conditional_11_Template, 2, 0, "a", 8)(12, StorefrontLayoutComponent_Conditional_12_Template, 6, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 9)(14, "a", 10)(15, "span", 11);
        \u0275\u0275text(16, "\u{1F6D2}");
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, StorefrontLayoutComponent_Conditional_17_Template, 2, 1, "span", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, StorefrontLayoutComponent_Conditional_18_Template, 4, 1)(19, StorefrontLayoutComponent_Conditional_19_Template, 2, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "main", 13);
        \u0275\u0275element(21, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "nav", 14)(23, "a", 15)(24, "span", 16);
        \u0275\u0275text(25, "\u{1F3F7}\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 17);
        \u0275\u0275text(27, "Catalog");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "a", 18)(29, "span", 16);
        \u0275\u0275text(30, "\u{1F6D2}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 17);
        \u0275\u0275text(32, "Cart");
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, StorefrontLayoutComponent_Conditional_33_Template, 2, 1, "span", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "a", 20)(35, "span", 16);
        \u0275\u0275text(36, "\u{1F4E6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "span", 17);
        \u0275\u0275text(38, "Orders");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(39, StorefrontLayoutComponent_Conditional_39_Template, 5, 0, "a", 21)(40, StorefrontLayoutComponent_Conditional_40_Template, 5, 0)(41, StorefrontLayoutComponent_Conditional_41_Template, 5, 0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275conditional(11, ctx.isLoggedIn() ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(12, ctx.isAdmin() ? 12 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(17, ctx.cart.count() > 0 ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(18, ctx.isLoggedIn() ? 18 : 19);
        \u0275\u0275advance(15);
        \u0275\u0275conditional(33, ctx.cart.count() > 0 ? 33 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(39, ctx.isAdmin() ? 39 : ctx.isLoggedIn() ? 40 : 41);
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.shell[_ngcontent-%COMP%] {\n  min-height: 100svh;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  background: var(--color-steel-dark);\n  color: #fff;\n  box-shadow: var(--shadow);\n}\n.topbar-inner[_ngcontent-%COMP%] {\n  max-width: var(--container);\n  margin: 0 auto;\n  height: var(--header-h);\n  padding: 0 var(--sp-4);\n  display: flex;\n  align-items: center;\n  gap: var(--sp-5);\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-2);\n  font-weight: 800;\n  font-size: var(--fs-lg);\n  color: #fff;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  color: var(--color-brand);\n  font-size: 1.3em;\n}\n.desktop-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--sp-4);\n  margin-left: var(--sp-4);\n}\n.desktop-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d7dce4;\n  padding: var(--sp-2) var(--sp-1);\n  font-weight: 600;\n  border-bottom: 2px solid transparent;\n}\n.desktop-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.desktop-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #fff;\n  border-bottom-color: var(--color-brand);\n}\n.topbar-actions[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n}\n.user-email[_ngcontent-%COMP%] {\n  color: #b9c2d0;\n  font-size: var(--fs-sm);\n}\n.cart-link[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  min-width: 44px;\n  min-height: 44px;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n}\n.cart-badge[_ngcontent-%COMP%], .tab-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 2px;\n  background: var(--color-brand);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 4px;\n  border-radius: var(--radius-pill);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n}\n.tabbar[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .desktop-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .user-email[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .content[_ngcontent-%COMP%] {\n    padding-bottom: calc(64px + var(--safe-bottom));\n  }\n  .tabbar[_ngcontent-%COMP%] {\n    display: flex;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 30;\n    background: var(--color-surface);\n    border-top: 1px solid var(--color-border);\n    padding-bottom: var(--safe-bottom);\n    box-shadow: 0 -2px 8px rgba(20, 24, 31, .08);\n  }\n  .tab[_ngcontent-%COMP%] {\n    position: relative;\n    flex: 1;\n    min-height: 56px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 2px;\n    background: none;\n    border: none;\n    color: var(--color-muted);\n    font-size: var(--fs-xs);\n    font-family: inherit;\n    cursor: pointer;\n  }\n  .tab[_ngcontent-%COMP%]   .tab-ico[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .tab.active[_ngcontent-%COMP%] {\n    color: var(--color-brand);\n  }\n  .tab[_ngcontent-%COMP%]:active {\n    background: var(--color-surface-alt);\n  }\n  .tab-badge[_ngcontent-%COMP%] {\n    top: 6px;\n    right: 22%;\n  }\n}\n/*# sourceMappingURL=storefront-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StorefrontLayoutComponent, { className: "StorefrontLayoutComponent", filePath: "src/app/shared/storefront-layout.component.ts", lineNumber: 14 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "catalog", pathMatch: "full" },
  {
    path: "login",
    loadComponent: () => import("./login.component-JWRGSRKN.js").then((m) => m.LoginComponent),
    data: { flow: { flowId: "login", node: "login", entry: true, edgesTo: ["catalog", "signup"], label: "Login" } }
  },
  {
    path: "signup",
    loadComponent: () => import("./signup.component-2RTQCBIX.js").then((m) => m.SignupComponent),
    data: { flow: { flowId: "signup", node: "signup", edgesTo: ["catalog", "login"], label: "Sign up" } }
  },
  {
    path: "",
    component: StorefrontLayoutComponent,
    children: [
      {
        path: "catalog",
        loadComponent: () => import("./catalog.component-ZLX2GTSB.js").then((m) => m.CatalogComponent),
        data: { flow: { flowId: "catalog", node: "catalog", entry: true, showInNavbar: true, label: "Catalog", scope: "all", edgesTo: ["product-detail", "cart"] } }
      },
      {
        path: "product/:id",
        loadComponent: () => import("./product-detail.component-ADBKUQA7.js").then((m) => m.ProductDetailComponent),
        data: { flow: { flowId: "product-detail", node: "product-detail", label: "Product", edgesTo: ["cart", "catalog"] } }
      },
      {
        path: "cart",
        loadComponent: () => import("./cart.component-CM6BVPRJ.js").then((m) => m.CartComponent),
        canActivate: [authGuard],
        data: { flow: { flowId: "cart", node: "cart", showInNavbar: true, label: "Cart", scope: "all", edgesTo: ["checkout", "catalog"] } }
      },
      {
        path: "checkout",
        loadComponent: () => import("./checkout.component-ASTQNPQR.js").then((m) => m.CheckoutComponent),
        canActivate: [authGuard],
        data: { flow: { flowId: "checkout", node: "checkout", label: "Checkout", edgesTo: ["order-detail"] } }
      },
      {
        path: "orders",
        loadComponent: () => import("./order-history.component-IOCS5WLU.js").then((m) => m.OrderHistoryComponent),
        canActivate: [authGuard],
        data: { flow: { flowId: "orders", node: "orders", showInNavbar: true, label: "Orders", scope: "all", edgesTo: ["order-detail"] } }
      },
      {
        path: "orders/:id",
        loadComponent: () => import("./order-detail.component-E44HNWA5.js").then((m) => m.OrderDetailComponent),
        canActivate: [authGuard],
        data: { flow: { flowId: "order-detail", node: "order-detail", label: "Order detail", edgesTo: ["orders"] } }
      },
      {
        path: "admin/products",
        loadComponent: () => import("./admin-products.component-HUPQCKVA.js").then((m) => m.AdminProductsComponent),
        canActivate: [adminGuard],
        data: { flow: { flowId: "admin-products", node: "admin-products", showInNavbar: true, label: "Products", scope: "admin", edgesTo: ["admin-product-edit", "catalog"] } }
      },
      {
        path: "admin/products/:id/edit",
        loadComponent: () => import("./admin-products.component-HUPQCKVA.js").then((m) => m.AdminProductsComponent),
        canActivate: [adminGuard],
        data: { flow: { flowId: "admin-product-edit", node: "admin-product-edit", label: "Edit product", scope: "admin", edgesTo: ["admin-products"] } }
      },
      {
        path: "admin/orders",
        loadComponent: () => import("./admin-orders.component-N5OZ3N6F.js").then((m) => m.AdminOrdersComponent),
        canActivate: [adminGuard],
        data: { flow: { flowId: "admin-orders", node: "admin-orders", showInNavbar: true, label: "Manage Orders", scope: "admin", edgesTo: ["order-detail"] } }
      },
      {
        path: "admin/settings",
        loadComponent: () => import("./admin-settings.component-F5A5OLXI.js").then((m) => m.AdminSettingsComponent),
        canActivate: [adminGuard],
        data: { flow: { flowId: "admin-settings", node: "admin-settings", showInNavbar: true, label: "Settings", scope: "admin" } }
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
    provideRouter(routes, withHashLocation(), withInMemoryScrolling({ scrollPositionRestoration: "top" })),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
