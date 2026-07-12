import {
  AuthService
} from "./chunk-UUPNV6ZJ.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-GUFH4IQL.js";
import {
  CommonModule,
  computed,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ILXJTYNR.js";

// src/app/shared/layout.component.ts
var _forTrack0 = ($index, $item) => $item.path;
function LayoutComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6)(1, "span", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.path);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function LayoutComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 18)(1, "span", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r2.path);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
var LayoutComponent = class _LayoutComponent {
  constructor(auth) {
    this.auth = auth;
    this.brand = "LearnLoop";
    this.studentNav = [
      { label: "Catalog", icon: "\u{1F4DA}", path: "/catalog" },
      { label: "My Courses", icon: "\u{1F393}", path: "/my-courses" }
    ];
    this.instructorNav = [
      { label: "Courses", icon: "\u{1F4DA}", path: "/instructor/courses" },
      { label: "Settings", icon: "\u2699\uFE0F", path: "/admin/settings" }
    ];
    this.user = this.auth.user;
    this.nav = computed(() => this.auth.isInstructor() ? this.instructorNav : this.studentNav);
    this.roleLabel = computed(() => this.auth.isInstructor() ? "Instructor" : "Student");
    this.initials = computed(() => {
      const u = this.auth.user();
      const src = u?.name || u?.email || "?";
      return src.trim().slice(0, 1).toUpperCase();
    });
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 3, consts: [[1, "shell"], [1, "sidebar"], [1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "side-nav"], ["routerLinkActive", "active", 1, "side-link", 3, "routerLink"], [1, "side-foot"], [1, "user-chip"], [1, "avatar"], [1, "user-meta"], [1, "user-name"], [1, "user-role"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", "btn-block", 3, "click"], [1, "topbar"], ["type", "button", "aria-label", "Log out", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "content"], [1, "bottom-nav"], ["routerLinkActive", "active", 1, "tab", 3, "routerLink"], [1, "nav-icon"], [1, "tab-label"]], template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u{1F501}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "LearnLoop");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "nav", 5);
        \u0275\u0275repeaterCreate(8, LayoutComponent_For_9_Template, 5, 3, "a", 6, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "span", 9);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 10)(15, "span", 11);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span", 12);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "button", 13);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_19_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(20, "Log out");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "header", 14)(22, "span", 4);
        \u0275\u0275text(23, "LearnLoop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 15);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_24_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(25, "Log out");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "main", 16);
        \u0275\u0275element(27, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "nav", 17);
        \u0275\u0275repeaterCreate(29, LayoutComponent_For_30_Template, 5, 3, "a", 18, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.nav());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.initials());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(((tmp_2_0 = ctx.user()) == null ? null : tmp_2_0.name) || ((tmp_2_0 = ctx.user()) == null ? null : tmp_2_0.email));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.roleLabel());
        \u0275\u0275advance(11);
        \u0275\u0275repeater(ctx.nav());
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  min-height: 100svh;\n}\n.shell[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: var(--sidebar-w) 1fr;\n  min-height: 100vh;\n  min-height: 100svh;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  height: 100svh;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n  padding: var(--space-4);\n  background: var(--color-surface);\n  border-right: 1px solid var(--color-border);\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-2) var(--space-1);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  font-weight: 800;\n  color: var(--color-brand);\n  letter-spacing: -.01em;\n}\n.side-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n  flex: 1;\n}\n.side-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-height: 44px;\n  padding: 0 var(--space-3);\n  border-radius: var(--radius);\n  color: var(--color-ink-soft);\n  font-weight: 600;\n  font-size: var(--fs-base);\n}\n.side-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n  text-decoration: none;\n}\n.side-link.active[_ngcontent-%COMP%] {\n  background: var(--color-brand-light);\n  color: var(--color-brand-dark);\n}\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.side-foot[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  background: var(--color-brand);\n  color: #fff;\n  font-weight: 700;\n}\n.user-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-role[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  color: var(--color-muted);\n}\n.topbar[_ngcontent-%COMP%], .bottom-nav[_ngcontent-%COMP%] {\n  display: none;\n}\n.content[_ngcontent-%COMP%] {\n  padding: var(--space-5);\n  max-width: var(--container);\n  width: 100%;\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .shell[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .topbar[_ngcontent-%COMP%] {\n    position: sticky;\n    top: 0;\n    z-index: 20;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: var(--header-h);\n    padding: 0 var(--space-4);\n    background: var(--color-surface);\n    border-bottom: 1px solid var(--color-border);\n  }\n  .topbar[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n    font-size: var(--fs-md);\n  }\n  .content[_ngcontent-%COMP%] {\n    padding: var(--space-4);\n    padding-bottom: calc(var(--bottomnav-h) + var(--safe-bottom) + var(--space-4));\n  }\n  .bottom-nav[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 30;\n    display: flex;\n    justify-content: space-around;\n    background: var(--color-surface);\n    border-top: 1px solid var(--color-border);\n    padding-bottom: var(--safe-bottom);\n  }\n  .tab[_ngcontent-%COMP%] {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 2px;\n    min-height: 56px;\n    color: var(--color-muted);\n    font-size: var(--fs-xs);\n    font-weight: 600;\n  }\n  .tab[_ngcontent-%COMP%]:hover {\n    text-decoration: none;\n  }\n  .tab.active[_ngcontent-%COMP%] {\n    color: var(--color-brand);\n  }\n  .tab-label[_ngcontent-%COMP%] {\n    font-size: var(--fs-xs);\n  }\n  .tab[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/shared/layout.component.ts", lineNumber: 24 });
})();
export {
  LayoutComponent
};
//# sourceMappingURL=layout.component-AWZBK6PL.js.map
