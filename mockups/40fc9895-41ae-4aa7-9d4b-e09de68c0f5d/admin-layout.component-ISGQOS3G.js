import {
  AuthService
} from "./chunk-X5DHVSOG.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QZ7UG3YY.js";

// src/app/features/admin/admin-layout/admin-layout.component.ts
var _forTrack0 = ($index, $item) => $item.path;
var _c0 = (a0) => ({ exact: a0 });
function AdminLayoutComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.path)("routerLinkActiveOptions", \u0275\u0275pureFunction1(4, _c0, item_r1.exact));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function AdminLayoutComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 23)(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r2.path)("routerLinkActiveOptions", \u0275\u0275pureFunction1(4, _c0, item_r2.exact));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
var AdminLayoutComponent = class _AdminLayoutComponent {
  constructor(auth) {
    this.auth = auth;
    this.nav = [
      { path: "/admin", label: "Dashboard", icon: "\u25A4", exact: true },
      { path: "/admin/sources", label: "Sources", icon: "\u26D3", exact: false },
      { path: "/admin/categories", label: "Categories", icon: "\u{1F3F7}", exact: false }
    ];
  }
  logout() {
    this.auth.logout();
  }
  static {
    this.\u0275fac = function AdminLayoutComponent_Factory(t) {
      return new (t || _AdminLayoutComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 49, vars: 3, consts: [[1, "admin-shell"], [1, "sidebar"], ["routerLink", "/admin", 1, "sidebar-brand"], ["aria-hidden", "true", 1, "brand-mark"], [1, "brand-name"], [1, "brand-tag"], ["aria-label", "Admin navigation", 1, "sidebar-nav"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLink", "routerLinkActiveOptions"], [1, "sidebar-foot"], ["routerLink", "/", 1, "nav-item"], ["aria-hidden", "true", 1, "nav-icon"], [1, "nav-label"], ["type", "button", 1, "nav-item", "nav-logout", 3, "click"], [1, "sidebar-user"], ["aria-hidden", "true", 1, "user-avatar"], [1, "user-meta"], [1, "user-name"], [1, "user-role"], [1, "mobile-topbar"], ["routerLink", "/admin", 1, "brand"], ["type", "button", "aria-label", "Sign out", 1, "mobile-signout", 3, "click"], [1, "admin-main"], ["aria-label", "Admin navigation", 1, "tabbar"], ["routerLinkActive", "active", 1, "tab", 3, "routerLink", "routerLinkActiveOptions"], ["routerLink", "/", 1, "tab"], ["aria-hidden", "true", 1, "tab-icon"], [1, "tab-label"]], template: function AdminLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "a", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u25B2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Newswire");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8, "Admin");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "nav", 6);
        \u0275\u0275repeaterCreate(10, AdminLayoutComponent_For_11_Template, 5, 6, "a", 7, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8)(13, "a", 9)(14, "span", 10);
        \u0275\u0275text(15, "\u21A9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 11);
        \u0275\u0275text(17, "View public feed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "button", 12);
        \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_18_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(19, "span", 10);
        \u0275\u0275text(20, "\u238B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 11);
        \u0275\u0275text(22, "Sign out");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 13)(24, "span", 14);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 15)(27, "span", 16);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 17);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(31, "header", 18)(32, "a", 19)(33, "span", 3);
        \u0275\u0275text(34, "\u25B2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span", 4);
        \u0275\u0275text(36, "Newswire Admin");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "button", 20);
        \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_37_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(38, "\u238B");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "main", 21);
        \u0275\u0275element(40, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "nav", 22);
        \u0275\u0275repeaterCreate(42, AdminLayoutComponent_For_43_Template, 5, 6, "a", 23, _forTrack0);
        \u0275\u0275elementStart(44, "a", 24)(45, "span", 25);
        \u0275\u0275text(46, "\u21A9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "span", 26);
        \u0275\u0275text(48, "Feed");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.nav);
        \u0275\u0275advance(15);
        \u0275\u0275textInterpolate((((tmp_1_0 = ctx.auth.user()) == null ? null : tmp_1_0.username) || "A")[0]);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(((tmp_2_0 = ctx.auth.user()) == null ? null : tmp_2_0.username) || "admin");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(((tmp_3_0 = ctx.auth.user()) == null ? null : tmp_3_0.role) || "admin");
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.nav);
      }
    }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n.admin-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100svh;\n  background: var(--color-bg);\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: var(--sidebar-width);\n  display: flex;\n  flex-direction: column;\n  padding: var(--space-5) var(--space-3);\n  background: var(--color-navy);\n  color: var(--color-text-on-dark);\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: 0 var(--space-3) var(--space-5);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: var(--text-lg);\n  font-weight: var(--font-bold);\n}\n.brand-tag[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.65rem;\n  font-weight: var(--font-bold);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  padding: 2px var(--space-2);\n  border-radius: var(--radius-pill);\n  background: rgba(255, 255, 255, 0.14);\n  color: var(--color-text-on-dark);\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.sidebar-foot[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n  padding-top: var(--space-4);\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-height: 44px;\n  padding: 0 var(--space-3);\n  border: none;\n  background: transparent;\n  border-radius: var(--radius-md);\n  color: rgba(243, 245, 248, 0.72);\n  font-size: var(--text-sm);\n  font-weight: var(--font-semibold);\n  text-align: left;\n  width: 100%;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: var(--color-text-on-dark);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.14);\n  color: var(--color-text-on-dark);\n}\n.nav-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  text-align: center;\n}\n.nav-logout[_ngcontent-%COMP%] {\n  color: rgba(243, 245, 248, 0.72);\n  cursor: pointer;\n}\n.sidebar-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  margin-top: var(--space-3);\n  padding: var(--space-3);\n  border-radius: var(--radius-md);\n  background: rgba(255, 255, 255, 0.06);\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  flex: 0 0 34px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: var(--color-primary);\n  color: #fff;\n  font-weight: var(--font-bold);\n  text-transform: uppercase;\n}\n.user-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  font-weight: var(--font-semibold);\n  color: var(--color-text-on-dark);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.user-role[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  color: rgba(243, 245, 248, 0.6);\n  text-transform: capitalize;\n}\n.admin-main[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-width);\n  padding: var(--space-6);\n  min-height: 100vh;\n  min-height: 100svh;\n}\n.mobile-topbar[_ngcontent-%COMP%] {\n  display: none;\n}\n.tabbar[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-topbar[_ngcontent-%COMP%] {\n    position: sticky;\n    top: 0;\n    z-index: 20;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: var(--header-height);\n    padding: 0 var(--space-4);\n    background: var(--color-navy);\n    color: var(--color-text-on-dark);\n  }\n  .mobile-topbar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--space-2);\n  }\n  .mobile-topbar[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n    font-size: var(--text-base);\n  }\n  .mobile-signout[_ngcontent-%COMP%] {\n    min-width: 44px;\n    min-height: 44px;\n    background: transparent;\n    border: none;\n    color: var(--color-text-on-dark);\n    font-size: 1.1rem;\n  }\n  .admin-main[_ngcontent-%COMP%] {\n    margin-left: 0;\n    padding: var(--space-4) var(--space-4) calc(76px + var(--safe-bottom));\n  }\n  .tabbar[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 30;\n    display: flex;\n    background: var(--color-surface);\n    border-top: 1px solid var(--color-border);\n    padding-bottom: var(--safe-bottom);\n    box-shadow: 0 -2px 10px rgba(18, 38, 63, 0.06);\n  }\n  .tab[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 56px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 2px;\n    color: var(--color-text-muted);\n    font-size: 0.7rem;\n    font-weight: var(--font-semibold);\n    transition: color var(--transition-fast), background var(--transition-fast);\n  }\n  .tab[_ngcontent-%COMP%]:active {\n    background: var(--color-surface-sunken);\n  }\n  .tab.active[_ngcontent-%COMP%] {\n    color: var(--color-primary);\n  }\n  .tab-icon[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n  }\n}\n/*# sourceMappingURL=admin-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src/app/features/admin/admin-layout/admin-layout.component.ts", lineNumber: 19 });
})();
export {
  AdminLayoutComponent
};
//# sourceMappingURL=admin-layout.component-ISGQOS3G.js.map
