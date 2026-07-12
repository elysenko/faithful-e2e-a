import {
  AuthService
} from "./chunk-PNFJAIEQ.js";
import {
  CommonModule,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UQ66P35U.js";

// src/app/shared/layout.component.ts
var _forTrack0 = ($index, $item) => $item.path;
function LayoutComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6)(1, "span", 13);
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
function LayoutComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 15);
    \u0275\u0275listener("click", function LayoutComponent_Conditional_11_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275text(3, "Logout");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r2.user()) == null ? null : tmp_1_0.email);
  }
}
function LayoutComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16);
    \u0275\u0275text(1, "Editor login");
    \u0275\u0275elementEnd();
  }
}
function LayoutComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11)(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r4.path);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function LayoutComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function LayoutComponent_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2, "\u238B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Logout");
    \u0275\u0275elementEnd()();
  }
}
function LayoutComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19)(1, "span", 17);
    \u0275\u0275text(2, "\u{1F511}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Login");
    \u0275\u0275elementEnd()();
  }
}
var LayoutComponent = class _LayoutComponent {
  constructor(auth) {
    this.auth = auth;
    this.nav = [
      { label: "Bills", path: "/bills", icon: "\u{1F4DC}" },
      { label: "Legislators", path: "/legislators", icon: "\u{1F3DB}\uFE0F" },
      { label: "Conflicts", path: "/conflicts", icon: "\u26A0\uFE0F" }
    ];
    this.isEditor = this.auth.isEditor;
    this.user = this.auth.user;
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 2, consts: [[1, "bw-shell"], [1, "bw-header"], ["routerLink", "/bills", 1, "bw-brand"], [1, "bw-brand-mark"], [1, "bw-brand-name"], ["aria-label", "Primary", 1, "bw-topnav"], ["routerLinkActive", "active", 1, "bw-topnav-link", 3, "routerLink"], [1, "bw-header-right"], [1, "bw-content"], [1, "bw-content-inner"], ["aria-label", "Primary mobile", 1, "bw-tabbar"], ["routerLinkActive", "active", 1, "bw-tab", 3, "routerLink"], ["type", "button", 1, "bw-tab"], [1, "bw-nav-icon"], [1, "bw-user-chip"], ["type", "button", 1, "btn", "btn-outline", "btn-sm", 3, "click"], ["routerLink", "/login", 1, "btn", "btn-primary", "btn-sm"], [1, "bw-tab-icon"], ["type", "button", 1, "bw-tab", 3, "click"], ["routerLink", "/login", "routerLinkActive", "active", 1, "bw-tab"]], template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "a", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u{1F41D}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "BeehiveWatch");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "nav", 5);
        \u0275\u0275repeaterCreate(8, LayoutComponent_For_9_Template, 5, 3, "a", 6, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275template(11, LayoutComponent_Conditional_11_Template, 4, 1)(12, LayoutComponent_Conditional_12_Template, 2, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "main", 8)(14, "div", 9);
        \u0275\u0275element(15, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "nav", 10);
        \u0275\u0275repeaterCreate(17, LayoutComponent_For_18_Template, 5, 3, "a", 11, _forTrack0);
        \u0275\u0275template(19, LayoutComponent_Conditional_19_Template, 5, 0, "button", 12)(20, LayoutComponent_Conditional_20_Template, 5, 0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.nav);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(11, ctx.isEditor() ? 11 : 12);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.nav);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(19, ctx.isEditor() ? 19 : 20);
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.bw-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  min-height: 100svh;\n}\n.bw-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 40;\n  height: var(--header-h);\n  display: flex;\n  align-items: center;\n  gap: var(--space-5);\n  padding: 0 var(--space-5);\n  background: var(--color-steel-dark);\n  color: #fff;\n  box-shadow: var(--shadow);\n}\n.bw-brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  color: #fff;\n  font-weight: 700;\n}\n.bw-brand[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.bw-brand-mark[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius);\n  background: var(--color-brand);\n  font-size: 1.1rem;\n}\n.bw-brand-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n  letter-spacing: .3px;\n}\n.bw-topnav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n}\n.bw-topnav-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-2);\n  min-height: 40px;\n  padding: 0 var(--space-3);\n  border-radius: var(--radius);\n  color: #d4dae2;\n  font-size: var(--fs-base);\n}\n.bw-topnav-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .08);\n  text-decoration: none;\n}\n.bw-topnav-link.active[_ngcontent-%COMP%] {\n  background: var(--color-brand);\n  color: #fff;\n}\n.bw-nav-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1;\n}\n.bw-header-right[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.bw-user-chip[_ngcontent-%COMP%] {\n  color: #cfd6de;\n  font-size: var(--fs-sm);\n}\n.bw-header-right[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #fff;\n  border-color: rgba(255, 255, 255, .35);\n}\n.bw-header-right[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .1);\n}\n.bw-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: block;\n}\n.bw-content-inner[_ngcontent-%COMP%] {\n  max-width: var(--container);\n  margin: 0 auto;\n  padding: var(--space-5);\n}\n.bw-tabbar[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .bw-topnav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .bw-user-chip[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .bw-content-inner[_ngcontent-%COMP%] {\n    padding: var(--space-4);\n    padding-bottom: 84px;\n  }\n  .bw-tabbar[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 50;\n    display: flex;\n    justify-content: space-around;\n    background: var(--color-surface);\n    border-top: 1px solid var(--color-border);\n    padding-bottom: env(safe-area-inset-bottom);\n    box-shadow: 0 -2px 10px rgba(20, 24, 31, .08);\n  }\n  .bw-tab[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 48px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 2px;\n    padding: var(--space-2) 0;\n    border: none;\n    background: transparent;\n    color: var(--color-muted);\n    font-family: inherit;\n    font-size: var(--fs-xs);\n    text-decoration: none;\n    cursor: pointer;\n  }\n  .bw-tab.active[_ngcontent-%COMP%] {\n    color: var(--color-brand);\n  }\n  .bw-tab[_ngcontent-%COMP%]:active {\n    background: var(--color-surface-alt);\n  }\n  .bw-tab-icon[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n    line-height: 1;\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/shared/layout.component.ts", lineNumber: 22 });
})();
export {
  LayoutComponent
};
//# sourceMappingURL=layout.component-UWEVA7TQ.js.map
