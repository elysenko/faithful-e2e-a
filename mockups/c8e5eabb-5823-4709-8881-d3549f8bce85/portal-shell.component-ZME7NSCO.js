import {
  AuthService
} from "./chunk-HEI6KB7T.js";
import {
  CommonModule,
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
} from "./chunk-A62IECG2.js";

// src/app/components/portal-shell/portal-shell.component.ts
var _forTrack0 = ($index, $item) => $item.route;
var _c0 = (a0) => ({ exact: a0 });
function PortalShellComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.route)("routerLinkActiveOptions", \u0275\u0275pureFunction1(4, _c0, item_r1.route === "/portal"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function PortalShellComponent_For_25_Template(rf, ctx) {
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
    \u0275\u0275property("routerLink", item_r2.route)("routerLinkActiveOptions", \u0275\u0275pureFunction1(4, _c0, item_r2.route === "/portal"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
var PortalShellComponent = class _PortalShellComponent {
  constructor(auth) {
    this.auth = auth;
    this.nav = [
      { label: "Overview", icon: "\u25A6", route: "/portal" },
      { label: "Orders", icon: "\u{1F4E6}", route: "/portal/orders" },
      { label: "Documents", icon: "\u{1F5CE}", route: "/portal/documents" },
      { label: "Requests", icon: "\u{1F4DD}", route: "/portal/pricing-requests" },
      { label: "Alerts", icon: "\u{1F514}", route: "/portal/notifications" }
    ];
  }
  logout() {
    this.auth.logout();
  }
  static {
    this.\u0275fac = function PortalShellComponent_Factory(t) {
      return new (t || _PortalShellComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortalShellComponent, selectors: [["app-portal-shell"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 1, consts: [["data-testid", "app-ready", 1, "portal"], [1, "portal-top"], [1, "portal-brand"], [1, "brand-mark"], [1, "brand-text"], [1, "portal-account"], [1, "badge", "badge-info"], [1, "portal-right"], [1, "user-name"], [1, "btn", "btn-sm", 3, "click"], [1, "portal-nav"], ["routerLinkActive", "active", 1, "pnav-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "portal-content", "scroll-y"], [1, "portal-tabbar"], ["routerLinkActive", "active", 1, "ptab", 3, "routerLink", "routerLinkActiveOptions"], [1, "pnav-label"], [1, "ptab-icon"], [1, "ptab-label"]], template: function PortalShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u25C8");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "strong");
        \u0275\u0275text(7, "Nexus Power");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "small");
        \u0275\u0275text(9, "Customer Portal");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 5)(11, "span", 6);
        \u0275\u0275text(12, "QES \u2014 Quality Electrical Solutions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 7)(14, "span", 8);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 9);
        \u0275\u0275listener("click", function PortalShellComponent_Template_button_click_16_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(17, "Sign out");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "nav", 10);
        \u0275\u0275repeaterCreate(19, PortalShellComponent_For_20_Template, 5, 6, "a", 11, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "main", 12);
        \u0275\u0275element(22, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "nav", 13);
        \u0275\u0275repeaterCreate(24, PortalShellComponent_For_25_Template, 5, 6, "a", 14, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(15);
        \u0275\u0275textInterpolate((tmp_0_0 = ctx.auth.user()) == null ? null : tmp_0_0.name);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.nav);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.nav);
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n.portal[_ngcontent-%COMP%] {\n  min-height: 100svh;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n.portal-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 0 20px;\n  height: var(--topbar-h);\n  background: var(--color-sidebar);\n  color: var(--color-text-invert);\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n.portal-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  color: var(--color-accent-500);\n  font-size: 22px;\n}\n.brand-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.brand-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: var(--fs-base);\n}\n.brand-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--color-text-faint);\n  font-size: 10px;\n  letter-spacing: 0.14em;\n}\n.portal-account[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.portal-right[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n}\n.portal-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  padding: 0 20px;\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n  position: sticky;\n  top: var(--topbar-h);\n  z-index: 15;\n}\n.pnav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 48px;\n  padding: 0 14px;\n  color: var(--color-text-muted);\n  font-weight: 600;\n  font-size: var(--fs-sm);\n  border-bottom: 2px solid transparent;\n}\n.pnav-link.active[_ngcontent-%COMP%] {\n  color: var(--color-brand-600);\n  border-bottom-color: var(--color-accent-600);\n  text-decoration: none;\n}\n.portal-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.portal-tabbar[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .portal-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .portal-account[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .user-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .portal-content[_ngcontent-%COMP%] {\n    padding-bottom: 72px;\n  }\n  .portal-tabbar[_ngcontent-%COMP%] {\n    display: flex;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: var(--color-surface);\n    border-top: 1px solid var(--color-border);\n    padding-bottom: var(--safe-bottom);\n    z-index: 40;\n  }\n  .ptab[_ngcontent-%COMP%] {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 2px;\n    min-height: 56px;\n    color: var(--color-text-muted);\n    font-size: 10px;\n  }\n  .ptab.active[_ngcontent-%COMP%] {\n    color: var(--color-brand-600);\n  }\n  .ptab-icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=portal-shell.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortalShellComponent, { className: "PortalShellComponent", filePath: "src/app/components/portal-shell/portal-shell.component.ts", lineNumber: 13 });
})();
export {
  PortalShellComponent
};
//# sourceMappingURL=portal-shell.component-ZME7NSCO.js.map
