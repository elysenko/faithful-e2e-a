import {
  AuthService
} from "./chunk-LHOH6PYM.js";
import {
  CommonModule,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
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
} from "./chunk-NK42F6RC.js";

// src/app/features/admin-shell/admin-shell.component.ts
var _forTrack0 = ($index, $item) => $item.path;
var _c0 = (a0) => ({ exact: a0 });
function AdminShellComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
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
function AdminShellComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
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
var AdminShellComponent = class _AdminShellComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.user = this.auth.user;
    this.nav = [
      { label: "Dashboard", icon: "\u{1F4CA}", path: "/admin", exact: true },
      { label: "Sources", icon: "\u{1F6F0}\uFE0F", path: "/admin/sources", exact: false },
      { label: "Categories", icon: "\u{1F3F7}\uFE0F", path: "/admin/categories", exact: false }
    ];
  }
  logout() {
    this.auth.logout();
  }
  static {
    this.\u0275fac = function AdminShellComponent_Factory(t) {
      return new (t || _AdminShellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminShellComponent, selectors: [["app-admin-shell"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 3, consts: [[1, "shell"], [1, "sidebar"], ["routerLink", "/admin", 1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "brand-tag"], [1, "side-nav"], ["routerLinkActive", "active", 1, "side-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "side-foot"], ["routerLink", "/feed", 1, "side-link", "muted"], ["aria-hidden", "true", 1, "icon"], [1, "user-box"], ["aria-hidden", "true", 1, "avatar"], [1, "user-meta"], [1, "user-name"], [1, "user-email"], [1, "btn", "btn-ghost", "logout", 3, "click"], [1, "main"], ["aria-label", "Admin sections", 1, "bottom-nav"], ["routerLinkActive", "active", 1, "tab", 3, "routerLink", "routerLinkActiveOptions"], ["routerLink", "/feed", 1, "tab"], [1, "tab-label"]], template: function AdminShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "a", 2)(3, "span", 3);
        \u0275\u0275text(4, "NW");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "NewsWire");
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8, "admin");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "nav", 6);
        \u0275\u0275repeaterCreate(10, AdminShellComponent_For_11_Template, 5, 6, "a", 7, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8)(13, "a", 9)(14, "span", 10);
        \u0275\u0275text(15, "\u{1F310}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span");
        \u0275\u0275text(17, "View public feed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 11)(19, "div", 12);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 13)(22, "span", 14);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 15);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "button", 16);
        \u0275\u0275listener("click", function AdminShellComponent_Template_button_click_26_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(27, "Sign out");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 17);
        \u0275\u0275element(29, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "nav", 18);
        \u0275\u0275repeaterCreate(31, AdminShellComponent_For_32_Template, 5, 6, "a", 19, _forTrack0);
        \u0275\u0275elementStart(33, "a", 20)(34, "span", 10);
        \u0275\u0275text(35, "\u{1F310}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "span", 21);
        \u0275\u0275text(37, "Feed");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.nav);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate((((tmp_1_0 = ctx.user()) == null ? null : tmp_1_0.name) || "A").charAt(0));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(((tmp_2_0 = ctx.user()) == null ? null : tmp_2_0.name) || "Admin");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(((tmp_3_0 = ctx.user()) == null ? null : tmp_3_0.email) || "admin@newswire.local");
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.nav);
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n.shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100svh;\n  display: flex;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0 auto 0 0;\n  width: var(--nav-width);\n  display: flex;\n  flex-direction: column;\n  padding: var(--sp-5) var(--sp-4);\n  background: var(--color-surface);\n  border-right: 1px solid var(--color-border);\n}\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--sp-2);\n  font-weight: 800;\n  font-size: var(--fs-lg);\n  margin-bottom: var(--sp-6);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  background: var(--color-accent);\n  color: #fff;\n  font-size: var(--fs-sm);\n  font-weight: 800;\n}\n.brand-tag[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fs-xs);\n  font-weight: 600;\n  color: var(--color-text-subtle);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.side-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-1);\n}\n.side-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  min-height: 46px;\n  padding: 0 var(--sp-3);\n  border-radius: var(--radius-md);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  color: var(--color-text-muted);\n  transition: background 0.12s ease, color 0.12s ease;\n}\n.side-link[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: var(--fs-base);\n}\n.side-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n  color: var(--color-text);\n}\n.side-link.active[_ngcontent-%COMP%] {\n  background: var(--color-primary-soft);\n  color: var(--color-primary);\n}\n.side-foot[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-3);\n}\n.side-link.muted[_ngcontent-%COMP%] {\n  color: var(--color-text-subtle);\n}\n.user-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  padding: var(--sp-2) var(--sp-3);\n  border-radius: var(--radius-md);\n  background: var(--color-surface-alt);\n}\n.avatar[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: var(--color-primary);\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 700;\n}\n.user-email[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  color: var(--color-text-subtle);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.logout[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  min-height: 44px;\n}\n.main[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: var(--nav-width);\n  min-width: 0;\n}\n.bottom-nav[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .main[_ngcontent-%COMP%] {\n    margin-left: 0;\n    padding-bottom: calc(var(--bottomnav-height) + env(safe-area-inset-bottom));\n  }\n  .bottom-nav[_ngcontent-%COMP%] {\n    display: flex;\n    position: fixed;\n    inset: auto 0 0 0;\n    z-index: 30;\n    background: var(--color-surface);\n    border-top: 1px solid var(--color-border);\n    padding-bottom: env(safe-area-inset-bottom);\n  }\n  .tab[_ngcontent-%COMP%] {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 2px;\n    min-height: var(--bottomnav-height);\n    padding: var(--sp-2) 0;\n    color: var(--color-text-subtle);\n    font-size: 10px;\n    font-weight: 600;\n    transition: color 0.12s ease;\n  }\n  .tab[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n  }\n  .tab[_ngcontent-%COMP%]:active {\n    background: var(--color-surface-alt);\n  }\n  .tab.active[_ngcontent-%COMP%] {\n    color: var(--color-primary);\n  }\n}\n/*# sourceMappingURL=admin-shell.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminShellComponent, { className: "AdminShellComponent", filePath: "src/app/features/admin-shell/admin-shell.component.ts", lineNumber: 20 });
})();
export {
  AdminShellComponent
};
//# sourceMappingURL=admin-shell.component-GVENGUCY.js.map
