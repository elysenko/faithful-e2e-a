import {
  AuthService
} from "./chunk-7JCEHVK2.js";
import {
  CartService
} from "./chunk-5BMZVV5A.js";
import {
  CommonModule,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  computed,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-POJ4OZZ3.js";

// src/app/shared/storefront-layout.component.ts
var _forTrack0 = ($index, $item) => $item.path;
var _c0 = (a0) => ({ exact: a0 });
function StorefrontLayoutComponent_For_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.badge);
  }
}
function StorefrontLayoutComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275text(1);
    \u0275\u0275template(2, StorefrontLayoutComponent_For_9_Conditional_2_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.path)("routerLinkActiveOptions", \u0275\u0275pureFunction1(4, _c0, !!item_r1.exact));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(2, item_r1.badge ? 2 : -1);
  }
}
function StorefrontLayoutComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 14);
    \u0275\u0275listener("click", function StorefrontLayoutComponent_Conditional_11_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275text(3, " Logout ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r2.auth.user()) == null ? null : tmp_1_0.name);
  }
}
function StorefrontLayoutComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275text(1, "Log in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 16);
    \u0275\u0275text(3, "Sign up");
    \u0275\u0275elementEnd();
  }
}
function StorefrontLayoutComponent_For_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.badge);
  }
}
function StorefrontLayoutComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10)(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275template(3, StorefrontLayoutComponent_For_17_Conditional_3_Template, 2, 1, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r4.path)("routerLinkActiveOptions", \u0275\u0275pureFunction1(5, _c0, !!item_r4.exact));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r4.icon, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(3, item_r4.badge ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function StorefrontLayoutComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function StorefrontLayoutComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2, "\u{1F6AA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4, "Logout");
    \u0275\u0275elementEnd()();
  }
}
function StorefrontLayoutComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 21)(1, "span", 17);
    \u0275\u0275text(2, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4, "Account");
    \u0275\u0275elementEnd()();
  }
}
var StorefrontLayoutComponent = class _StorefrontLayoutComponent {
  auth = inject(AuthService);
  cart = inject(CartService);
  navItems = computed(() => {
    const items = [{ label: "Catalog", path: "/", icon: "\u{1F6CD}\uFE0F", exact: true }];
    if (this.auth.isAdmin()) {
      items.push({ label: "Products", path: "/admin/products", icon: "\u{1F4E6}" });
      items.push({ label: "Orders", path: "/admin/orders", icon: "\u{1F9FE}" });
    } else {
      items.push({ label: "Cart", path: "/cart", icon: "\u{1F6D2}", badge: this.cart.count() });
      items.push({ label: "Orders", path: "/orders", icon: "\u{1F4E6}" });
    }
    return items;
  });
  logout() {
    this.auth.logout();
  }
  static \u0275fac = function StorefrontLayoutComponent_Factory(t) {
    return new (t || _StorefrontLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StorefrontLayoutComponent, selectors: [["app-storefront-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 2, consts: [["data-testid", "app-ready", 1, "shell"], [1, "topbar"], ["routerLink", "/", 1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "top-nav"], ["routerLinkActive", "active", 1, "top-nav-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "top-actions"], [1, "content"], [1, "tabbar"], ["routerLinkActive", "active", 1, "tab", 3, "routerLink", "routerLinkActiveOptions"], ["type", "button", 1, "tab"], [1, "nav-count"], [1, "user-chip"], ["type", "button", "data-testid", "logout", 1, "btn", "btn-sm", "btn-ghost", 3, "click"], ["routerLink", "/login", 1, "btn", "btn-sm", "btn-ghost"], ["routerLink", "/signup", 1, "btn", "btn-sm", "btn-primary"], [1, "tab-icon"], [1, "tab-badge"], [1, "tab-label"], ["type", "button", 1, "tab", 3, "click"], ["routerLink", "/login", "routerLinkActive", "active", 1, "tab"]], template: function StorefrontLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "a", 2)(3, "span", 3);
      \u0275\u0275text(4, "N");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "Northwind Store");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "nav", 5);
      \u0275\u0275repeaterCreate(8, StorefrontLayoutComponent_For_9_Template, 3, 6, "a", 6, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275template(11, StorefrontLayoutComponent_Conditional_11_Template, 4, 1)(12, StorefrontLayoutComponent_Conditional_12_Template, 4, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "main", 8);
      \u0275\u0275element(14, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "nav", 9);
      \u0275\u0275repeaterCreate(16, StorefrontLayoutComponent_For_17_Template, 6, 7, "a", 10, _forTrack0);
      \u0275\u0275template(18, StorefrontLayoutComponent_Conditional_18_Template, 5, 0, "button", 11)(19, StorefrontLayoutComponent_Conditional_19_Template, 5, 0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.navItems());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(11, ctx.auth.isLoggedIn() ? 11 : 12);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.navItems());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(18, ctx.auth.isLoggedIn() ? 18 : 19);
    }
  }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.shell[_ngcontent-%COMP%] {\n  min-height: 100svh;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  height: var(--topbar-h);\n  display: flex;\n  align-items: center;\n  gap: var(--sp-5);\n  padding: 0 var(--sp-5);\n  background: var(--color-sidebar);\n  color: var(--color-text-invert);\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #fff;\n  font-weight: 700;\n}\n.brand[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-sm);\n  display: grid;\n  place-items: center;\n  background: var(--color-accent-600);\n  color: #fff;\n  font-weight: 800;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  letter-spacing: 0.01em;\n}\n.top-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-left: var(--sp-4);\n  flex: 1;\n}\n.top-nav-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  min-height: 40px;\n  padding: 0 14px;\n  border-radius: var(--radius-sm);\n  color: var(--color-text-on-dark, #c6d4e6);\n  font-weight: 600;\n  font-size: var(--fs-sm);\n}\n.top-nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-sidebar-hover);\n  text-decoration: none;\n  color: #fff;\n}\n.top-nav-link.active[_ngcontent-%COMP%] {\n  background: var(--color-brand-600);\n  color: #fff;\n}\n.nav-count[_ngcontent-%COMP%] {\n  min-width: 20px;\n  height: 20px;\n  padding: 0 6px;\n  border-radius: 999px;\n  background: var(--color-accent-600);\n  color: #fff;\n  display: inline-grid;\n  place-items: center;\n  font-size: 11px;\n  font-weight: 700;\n}\n.top-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  margin-left: auto;\n}\n.top-actions[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  color: #dbe6f2;\n}\n.user-chip[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  color: #c6d4e6;\n  font-weight: 600;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.tabbar[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .top-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .brand-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .user-chip[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .tabbar[_ngcontent-%COMP%] {\n    display: flex;\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 30;\n    background: var(--color-surface);\n    border-top: 1px solid var(--color-border);\n    padding-bottom: var(--safe-bottom);\n    box-shadow: 0 -2px 10px rgba(11, 28, 44, 0.06);\n  }\n  .tab[_ngcontent-%COMP%] {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 2px;\n    min-height: 56px;\n    border: none;\n    background: transparent;\n    color: var(--color-text-muted);\n    font-size: 11px;\n    font-weight: 600;\n    cursor: pointer;\n  }\n  .tab.active[_ngcontent-%COMP%] {\n    color: var(--color-brand-600);\n  }\n  .tab-icon[_ngcontent-%COMP%] {\n    position: relative;\n    font-size: 20px;\n    line-height: 1;\n  }\n  .tab-badge[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -6px;\n    right: -12px;\n    min-width: 16px;\n    height: 16px;\n    padding: 0 4px;\n    border-radius: 999px;\n    background: var(--color-accent-600);\n    color: #fff;\n    display: grid;\n    place-items: center;\n    font-size: 10px;\n    font-weight: 700;\n  }\n}\n/*# sourceMappingURL=storefront-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StorefrontLayoutComponent, { className: "StorefrontLayoutComponent", filePath: "src/app/shared/storefront-layout.component.ts", lineNumber: 22 });
})();
export {
  StorefrontLayoutComponent
};
//# sourceMappingURL=storefront-layout.component-PWWKIYYR.js.map
