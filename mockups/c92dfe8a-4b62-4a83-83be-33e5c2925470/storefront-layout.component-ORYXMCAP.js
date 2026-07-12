import {
  AuthService
} from "./chunk-2ZMDFIT5.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-JU25ONEJ.js";
import {
  CommonModule,
  computed,
  signal,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DARMOPX2.js";

// src/app/shared/storefront-layout.component.ts
var _forTrack0 = ($index, $item) => $item.route;
var _c0 = (a0) => ({ exact: a0 });
function StorefrontLayoutComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6)(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.route)("routerLinkActiveOptions", \u0275\u0275pureFunction1(4, _c0, item_r1.route === "/movements/new"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function StorefrontLayoutComponent_Conditional_28_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 20);
    \u0275\u0275listener("click", function StorefrontLayoutComponent_Conditional_28_For_8_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeDrawer());
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r5.route)("routerLinkActiveOptions", \u0275\u0275pureFunction1(4, _c0, item_r5.route === "/movements/new"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.label);
  }
}
function StorefrontLayoutComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function StorefrontLayoutComponent_Conditional_28_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDrawer());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "nav", 17)(2, "div", 18)(3, "span", 4);
    \u0275\u0275text(4, "StockRoom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275listener("click", function StorefrontLayoutComponent_Conditional_28_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDrawer());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(7, StorefrontLayoutComponent_Conditional_28_For_8_Template, 5, 6, "a", 6, _forTrack0);
    \u0275\u0275elementStart(9, "button", 11);
    \u0275\u0275listener("click", function StorefrontLayoutComponent_Conditional_28_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275text(10, "Log out");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r2.nav());
  }
}
var StorefrontLayoutComponent = class _StorefrontLayoutComponent {
  constructor(auth) {
    this.auth = auth;
    this.drawerOpen = signal(false);
    this.allNav = [
      { label: "Items", icon: "\u{1F4E6}", route: "/items", admin: false },
      { label: "Record Movement", icon: "\u{1F501}", route: "/movements/new", admin: false },
      { label: "Audit Log", icon: "\u{1F4CB}", route: "/movements", admin: true },
      { label: "Low-Stock Report", icon: "\u26A0\uFE0F", route: "/reports/low-stock", admin: true },
      { label: "Manage Items", icon: "\u{1F6E0}\uFE0F", route: "/admin/items", admin: true },
      { label: "Manage Locations", icon: "\u{1F4CD}", route: "/admin/locations", admin: true },
      { label: "Settings", icon: "\u2699\uFE0F", route: "/admin/settings", admin: true }
    ];
    this.nav = computed(() => this.allNav.filter((n) => !n.admin || this.auth.isAdmin()));
  }
  toggleDrawer() {
    this.drawerOpen.update((v) => !v);
  }
  closeDrawer() {
    this.drawerOpen.set(false);
  }
  logout() {
    this.closeDrawer();
    this.auth.logout();
  }
  static {
    this.\u0275fac = function StorefrontLayoutComponent_Factory(t) {
      return new (t || _StorefrontLayoutComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StorefrontLayoutComponent, selectors: [["app-storefront-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 12, consts: [[1, "layout"], [1, "sidebar"], [1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "nav"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "sidebar-foot"], [1, "who"], [1, "who-name"], [1, "badge"], [1, "btn", "btn-ghost", "btn-block", 3, "click"], [1, "topbar"], ["aria-label", "Menu", 1, "hamburger", 3, "click"], [1, "content"], [1, "nav-icon"], [1, "scrim", 3, "click"], [1, "drawer"], [1, "drawer-head"], ["aria-label", "Close", 1, "hamburger", 3, "click"], ["routerLinkActive", "active", 1, "nav-link", 3, "click", "routerLink", "routerLinkActiveOptions"]], template: function StorefrontLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u25A3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "StockRoom");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "nav", 5);
        \u0275\u0275repeaterCreate(8, StorefrontLayoutComponent_For_9_Template, 5, 6, "a", 6, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "button", 11);
        \u0275\u0275listener("click", function StorefrontLayoutComponent_Template_button_click_16_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(17, "Log out");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "header", 12)(19, "button", 13);
        \u0275\u0275listener("click", function StorefrontLayoutComponent_Template_button_click_19_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275text(20, "\u2630");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 2)(22, "span", 3);
        \u0275\u0275text(23, "\u25A3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 4);
        \u0275\u0275text(25, "StockRoom");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "span", 10);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(28, StorefrontLayoutComponent_Conditional_28_Template, 11, 0);
        \u0275\u0275elementStart(29, "main", 14);
        \u0275\u0275element(30, "router-outlet");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.nav());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(((tmp_1_0 = ctx.auth.user()) == null ? null : tmp_1_0.name) || ((tmp_1_0 = ctx.auth.user()) == null ? null : tmp_1_0.email) || "Signed in");
        \u0275\u0275advance();
        \u0275\u0275classProp("badge-info", ctx.auth.isAdmin())("badge-neutral", !ctx.auth.isAdmin());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.auth.isAdmin() ? "Manager" : "Clerk", " ");
        \u0275\u0275advance(11);
        \u0275\u0275classProp("badge-info", ctx.auth.isAdmin())("badge-neutral", !ctx.auth.isAdmin());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.auth.isAdmin() ? "Manager" : "Clerk", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(28, ctx.drawerOpen() ? 28 : -1);
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n.layout[_ngcontent-%COMP%] {\n  min-height: 100svh;\n  min-height: 100vh;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: var(--sidebar-width);\n  background: var(--color-surface);\n  border-right: 1px solid var(--color-border);\n  display: flex;\n  flex-direction: column;\n  padding: var(--space-4);\n  z-index: 20;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-2);\n  font-weight: 700;\n  font-size: var(--font-size-lg);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: 22px;\n}\n.brand-name[_ngcontent-%COMP%] {\n  letter-spacing: -0.01em;\n}\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-top: var(--space-4);\n  flex: 1;\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-height: 44px;\n  padding: 0 var(--space-3);\n  border-radius: var(--radius-md);\n  color: var(--color-text-muted);\n  font-weight: 600;\n  font-size: var(--font-size-sm);\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n  color: var(--color-text);\n  text-decoration: none;\n}\n.nav-link[_ngcontent-%COMP%]:active {\n  background: var(--color-primary-soft);\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  background: var(--color-primary-soft);\n  color: var(--color-primary);\n}\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 20px;\n  text-align: center;\n}\n.sidebar-foot[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-border);\n  padding-top: var(--space-3);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.who[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-2);\n}\n.who-name[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.content[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-width);\n  padding: var(--space-6);\n  max-width: 1200px;\n}\n.topbar[_ngcontent-%COMP%] {\n  display: none;\n}\n.drawer[_ngcontent-%COMP%], .scrim[_ngcontent-%COMP%] {\n  display: none;\n}\n.hamburger[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 22px;\n  line-height: 1;\n  padding: var(--space-2);\n  min-height: 44px;\n  min-width: 44px;\n  cursor: pointer;\n  color: var(--color-text);\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .topbar[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: var(--space-2);\n    height: var(--header-height);\n    padding: 0 var(--space-3);\n    padding-top: env(safe-area-inset-top);\n    background: var(--color-surface);\n    border-bottom: 1px solid var(--color-border);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .content[_ngcontent-%COMP%] {\n    margin-left: 0;\n    padding: var(--space-4);\n    padding-bottom: var(--space-8);\n  }\n  .scrim[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background: rgba(15, 23, 42, 0.45);\n    z-index: 40;\n  }\n  .drawer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: min(80vw, 300px);\n    background: var(--color-surface);\n    padding: var(--space-4);\n    padding-top: calc(var(--space-4) + env(safe-area-inset-top));\n    z-index: 50;\n    box-shadow: var(--shadow-lg);\n    overflow-y: auto;\n    overscroll-behavior-y: contain;\n  }\n  .drawer-head[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-weight: 700;\n    font-size: var(--font-size-lg);\n    margin-bottom: var(--space-3);\n  }\n  .drawer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    margin-top: var(--space-3);\n  }\n}\n/*# sourceMappingURL=storefront-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StorefrontLayoutComponent, { className: "StorefrontLayoutComponent", filePath: "src/app/shared/storefront-layout.component.ts", lineNumber: 20 });
})();
export {
  StorefrontLayoutComponent
};
//# sourceMappingURL=storefront-layout.component-ORYXMCAP.js.map
