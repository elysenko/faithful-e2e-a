import {
  AuthService
} from "./chunk-YCX24YH2.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-OCSIP44N.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YT626SJK.js";

// src/app/shared/layout.component.ts
var _forTrack0 = ($index, $item) => $item.link;
function LayoutComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.link);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.label, " ");
  }
}
function LayoutComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r2.link);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
var LayoutComponent = class _LayoutComponent {
  constructor(auth) {
    this.auth = auth;
    this.navItems = [
      { label: "Returns", icon: "\u{1F4C4}", link: "/returns" },
      { label: "Stats", icon: "\u{1F4CA}", link: "/admin/stats", admin: true },
      { label: "Users", icon: "\u{1F465}", link: "/admin/users", admin: true },
      { label: "Settings", icon: "\u2699\uFE0F", link: "/admin/settings", admin: true }
    ];
  }
  get visibleItems() {
    return this.navItems.filter((i) => !i.admin || this.auth.isAdmin());
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 4, consts: [[1, "app-header", "no-print"], ["routerLink", "/returns", 1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "top-nav"], ["routerLinkActive", "active", 1, "top-nav-link", 3, "routerLink"], [1, "header-right"], [1, "user-chip"], [1, "role-dot"], [1, "user-name"], [1, "role-tag"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click"], [1, "app-main"], ["aria-label", "Primary", 1, "bottom-nav", "no-print"], ["routerLinkActive", "active", 1, "bottom-nav-item", 3, "routerLink"], ["type", "button", 1, "bottom-nav-item", 3, "click"], ["aria-hidden", "true", 1, "bn-icon"], [1, "bn-label"]], template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "a", 1)(2, "span", 2);
        \u0275\u0275text(3, "EF");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "EasyFile");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "nav", 4);
        \u0275\u0275repeaterCreate(7, LayoutComponent_For_8_Template, 2, 2, "a", 5, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6)(10, "span", 7);
        \u0275\u0275element(11, "span", 8);
        \u0275\u0275elementStart(12, "span", 9);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "button", 11);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_16_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(17, "Sign out");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "main", 12);
        \u0275\u0275element(19, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "nav", 13);
        \u0275\u0275repeaterCreate(21, LayoutComponent_For_22_Template, 5, 3, "a", 14, _forTrack0);
        \u0275\u0275elementStart(23, "button", 15);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_23_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(24, "span", 16);
        \u0275\u0275text(25, "\u238B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 17);
        \u0275\u0275text(27, "Sign out");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.visibleItems);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("admin", ctx.auth.isAdmin());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(((tmp_2_0 = ctx.auth.user()) == null ? null : tmp_2_0.name) || "Filer");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.auth.isAdmin() ? "Admin" : "Filer");
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.visibleItems);
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  min-height: 100svh;\n}\n.app-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  height: var(--header-h);\n  padding: 0 var(--space-5);\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  font-weight: 800;\n  color: var(--color-ink);\n}\n.brand[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius);\n  background: var(--color-brand);\n  color: var(--color-text-inverse);\n  font-size: var(--fs-sm);\n  font-weight: 800;\n  letter-spacing: .02em;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.top-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-1);\n  margin-left: var(--space-4);\n}\n.top-nav-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 0 var(--space-3);\n  border-radius: var(--radius);\n  color: var(--color-ink-soft);\n  font-weight: 600;\n  font-size: var(--fs-sm);\n}\n.top-nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n  text-decoration: none;\n}\n.top-nav-link.active[_ngcontent-%COMP%] {\n  background: var(--color-brand-light);\n  color: var(--color-brand-dark);\n}\n.header-right[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  font-size: var(--fs-sm);\n  color: var(--color-ink-soft);\n}\n.role-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--color-muted);\n}\n.role-dot.admin[_ngcontent-%COMP%] {\n  background: var(--color-brand);\n}\n.role-tag[_ngcontent-%COMP%] {\n  padding: 2px var(--space-2);\n  border-radius: var(--radius-pill);\n  background: var(--color-surface-inset);\n  color: var(--color-muted);\n  font-size: var(--fs-xs);\n  font-weight: 700;\n}\n.app-main[_ngcontent-%COMP%] {\n  flex: 1;\n  overscroll-behavior-y: contain;\n}\n.bottom-nav[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .top-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .user-name[_ngcontent-%COMP%], .role-tag[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .bottom-nav[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 30;\n    display: flex;\n    justify-content: space-around;\n    height: calc(var(--bottomnav-h) + var(--safe-bottom));\n    padding-bottom: var(--safe-bottom);\n    background: var(--color-surface);\n    border-top: 1px solid var(--color-border);\n    box-shadow: 0 -2px 8px rgba(22, 33, 29, 0.06);\n  }\n  .bottom-nav-item[_ngcontent-%COMP%] {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 2px;\n    min-height: 48px;\n    border: none;\n    background: transparent;\n    color: var(--color-muted);\n    font-family: inherit;\n    font-size: var(--fs-xs);\n    font-weight: 600;\n    cursor: pointer;\n  }\n  .bottom-nav-item[_ngcontent-%COMP%]:hover {\n    text-decoration: none;\n  }\n  .bottom-nav-item.active[_ngcontent-%COMP%] {\n    color: var(--color-brand);\n  }\n  .bottom-nav-item[_ngcontent-%COMP%]:active {\n    background: var(--color-surface-alt);\n  }\n  .bn-icon[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n    line-height: 1;\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/shared/layout.component.ts", lineNumber: 25 });
})();
export {
  LayoutComponent
};
//# sourceMappingURL=layout.component-MP2OJZL3.js.map
