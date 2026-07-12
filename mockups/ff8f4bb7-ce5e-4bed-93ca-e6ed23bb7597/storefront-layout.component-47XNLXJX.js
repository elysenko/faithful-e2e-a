import {
  AuthService
} from "./chunk-JCBFPNP7.js";
import {
  CartService
} from "./chunk-7KV6SYAR.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-GPQOFHD2.js";
import {
  CommonModule,
  inject,
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
} from "./chunk-2VXAXVQ7.js";

// src/app/shared/storefront-layout.component.ts
function StorefrontLayoutComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275text(1, "Orders");
    \u0275\u0275elementEnd();
  }
}
function StorefrontLayoutComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 18);
    \u0275\u0275text(1, "Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 20);
    \u0275\u0275text(3, "All Orders");
    \u0275\u0275elementEnd();
  }
}
function StorefrontLayoutComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.cartCount());
  }
}
function StorefrontLayoutComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 22);
    \u0275\u0275listener("click", function StorefrontLayoutComponent_Conditional_17_Template_button_click_2_listener() {
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
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.user()) == null ? null : tmp_1_0.name);
  }
}
function StorefrontLayoutComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275text(1, "Sign in");
    \u0275\u0275elementEnd();
  }
}
function StorefrontLayoutComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.cartCount());
  }
}
function StorefrontLayoutComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "span", 14);
    \u0275\u0275text(2, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4, "Orders");
    \u0275\u0275elementEnd()();
  }
}
function StorefrontLayoutComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 18)(1, "span", 14);
    \u0275\u0275text(2, "\u{1F6E0}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4, "Admin");
    \u0275\u0275elementEnd()();
  }
}
function StorefrontLayoutComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 24);
    \u0275\u0275listener("click", function StorefrontLayoutComponent_Conditional_35_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.logout());
    });
    \u0275\u0275elementStart(1, "span", 14);
    \u0275\u0275text(2, "\u21A9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4, "Logout");
    \u0275\u0275elementEnd()();
  }
}
function StorefrontLayoutComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25)(1, "span", 14);
    \u0275\u0275text(2, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4, "Sign in");
    \u0275\u0275elementEnd()();
  }
}
var StorefrontLayoutComponent = class _StorefrontLayoutComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.cartService = inject(CartService);
    this.user = this.auth.currentUser;
    this.isLoggedIn = this.auth.isLoggedIn;
    this.isAdmin = this.auth.isAdmin;
    this.cartCount = this.cartService.itemCount;
  }
  ngOnInit() {
    if (this.isLoggedIn()) {
      this.cartService.load().subscribe({ error: () => {
      } });
    }
  }
  logout() {
    this.cartService.clearLocal();
    this.auth.logout();
  }
  static {
    this.\u0275fac = function StorefrontLayoutComponent_Factory(t) {
      return new (t || _StorefrontLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StorefrontLayoutComponent, selectors: [["app-storefront-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 8, consts: [[1, "topbar"], [1, "topbar-inner"], ["routerLink", "/catalog", 1, "brand"], [1, "brand-mark"], [1, "brand-name"], ["aria-label", "Primary", 1, "desktop-nav"], ["routerLink", "/catalog", "routerLinkActive", "active"], ["routerLink", "/orders", "routerLinkActive", "active"], [1, "topbar-actions"], ["routerLink", "/cart", "aria-label", "Cart", 1, "cart-link"], ["aria-hidden", "true", 1, "cart-icon"], ["data-testid", "cart-badge", 1, "cart-badge"], [1, "content"], ["aria-label", "Primary mobile", 1, "bottom-nav"], ["aria-hidden", "true", 1, "tab-icon"], [1, "tab-label"], ["routerLink", "/cart", "routerLinkActive", "active"], [1, "tab-badge"], ["routerLink", "/admin/products", "routerLinkActive", "active"], ["tabindex", "0", "role", "button", 1, "tab-action"], ["routerLink", "/admin/orders", "routerLinkActive", "active"], [1, "user-name", "muted"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["routerLink", "/login", 1, "btn", "btn-primary", "btn-sm"], ["tabindex", "0", "role", "button", 1, "tab-action", 3, "click"], ["routerLink", "/login", "routerLinkActive", "active"]], template: function StorefrontLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "a", 2)(3, "span", 3);
        \u0275\u0275text(4, "IFS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Intermountain Fuse Supply");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "nav", 5)(8, "a", 6);
        \u0275\u0275text(9, "Catalog");
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, StorefrontLayoutComponent_Conditional_10_Template, 2, 0, "a", 7)(11, StorefrontLayoutComponent_Conditional_11_Template, 4, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8)(13, "a", 9)(14, "span", 10);
        \u0275\u0275text(15, "\u{1F6D2}");
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, StorefrontLayoutComponent_Conditional_16_Template, 2, 1, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, StorefrontLayoutComponent_Conditional_17_Template, 4, 1)(18, StorefrontLayoutComponent_Conditional_18_Template, 2, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "main", 12);
        \u0275\u0275element(20, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "nav", 13)(22, "a", 6)(23, "span", 14);
        \u0275\u0275text(24, "\u{1F3EC}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 15);
        \u0275\u0275text(26, "Catalog");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "a", 16)(28, "span", 14);
        \u0275\u0275text(29, "\u{1F6D2}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span", 15);
        \u0275\u0275text(31, "Cart");
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, StorefrontLayoutComponent_Conditional_32_Template, 2, 1, "span", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, StorefrontLayoutComponent_Conditional_33_Template, 5, 0, "a", 7)(34, StorefrontLayoutComponent_Conditional_34_Template, 5, 0, "a", 18)(35, StorefrontLayoutComponent_Conditional_35_Template, 5, 0, "a", 19)(36, StorefrontLayoutComponent_Conditional_36_Template, 5, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275conditional(10, ctx.isLoggedIn() ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(11, ctx.isAdmin() ? 11 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(16, ctx.cartCount() > 0 ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(17, ctx.isLoggedIn() ? 17 : 18);
        \u0275\u0275advance(15);
        \u0275\u0275conditional(32, ctx.cartCount() > 0 ? 32 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(33, ctx.isLoggedIn() ? 33 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(34, ctx.isAdmin() ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(35, ctx.isLoggedIn() ? 35 : 36);
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  min-height: 100svh;\n}\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.topbar-inner[_ngcontent-%COMP%] {\n  max-width: var(--container);\n  margin: 0 auto;\n  height: var(--header-h);\n  padding: 0 var(--sp-4);\n  display: flex;\n  align-items: center;\n  gap: var(--sp-4);\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-2);\n  color: var(--color-ink);\n}\n.brand[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  background: var(--color-brand);\n  color: #fff;\n  font-weight: 800;\n  font-size: var(--fs-sm);\n  border-radius: var(--radius);\n  letter-spacing: .04em;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: var(--fs-md);\n  white-space: nowrap;\n}\n.desktop-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-4);\n  margin-left: var(--sp-4);\n}\n.desktop-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-ink-soft);\n  font-weight: 600;\n  font-size: var(--fs-base);\n  padding: var(--sp-2) 0;\n  border-bottom: 2px solid transparent;\n}\n.desktop-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-brand);\n  text-decoration: none;\n}\n.desktop-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: var(--color-brand);\n  border-bottom-color: var(--color-brand);\n}\n.topbar-actions[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n}\n.cart-link[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  padding: var(--sp-2);\n}\n.cart-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.cart-badge[_ngcontent-%COMP%], .tab-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2px;\n  right: -4px;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 4px;\n  background: var(--color-brand);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  border-radius: var(--radius-pill);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  white-space: nowrap;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n}\n.bottom-nav[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .desktop-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .brand-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .user-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .content[_ngcontent-%COMP%] {\n    padding-bottom: 72px;\n  }\n  .bottom-nav[_ngcontent-%COMP%] {\n    display: flex;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 30;\n    background: var(--color-surface);\n    border-top: 1px solid var(--color-border);\n    box-shadow: 0 -2px 8px rgba(20, 24, 31, .06);\n    padding-bottom: env(safe-area-inset-bottom);\n  }\n  .bottom-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    position: relative;\n    flex: 1;\n    min-height: 56px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 2px;\n    color: var(--color-muted);\n    font-size: var(--fs-xs);\n    cursor: pointer;\n  }\n  .bottom-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: none;\n  }\n  .bottom-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    color: var(--color-brand);\n  }\n  .bottom-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n    background: var(--color-surface-alt);\n  }\n  .tab-icon[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    line-height: 1;\n  }\n  .tab-badge[_ngcontent-%COMP%] {\n    top: 6px;\n    right: calc(50% - 22px);\n  }\n}\n/*# sourceMappingURL=storefront-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StorefrontLayoutComponent, { className: "StorefrontLayoutComponent", filePath: "src/app/shared/storefront-layout.component.ts", lineNumber: 14 });
})();
export {
  StorefrontLayoutComponent
};
//# sourceMappingURL=storefront-layout.component-47XNLXJX.js.map
