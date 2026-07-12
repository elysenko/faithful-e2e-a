import {
  AuthService
} from "./chunk-WP3WOTWG.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-Y5LH5DTG.js";
import "./chunk-QKG44OY5.js";
import {
  ToastService
} from "./chunk-BTWCFMW5.js";
import {
  CommonModule,
  computed,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UGB4PC52.js";

// src/app/layout/main-layout.component.ts
var _forTrack0 = ($index, $item) => $item.path;
var _forTrack1 = ($index, $item) => $item.id;
function MainLayoutComponent_Conditional_3_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 11);
    \u0275\u0275elementEnd();
  }
}
function MainLayoutComponent_Conditional_3_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "rect", 12)(2, "path", 13);
    \u0275\u0275elementEnd();
  }
}
function MainLayoutComponent_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 7);
    \u0275\u0275template(2, MainLayoutComponent_Conditional_3_For_2_Conditional_2_Template, 2, 0, ":svg:svg", 8)(3, MainLayoutComponent_Conditional_3_For_2_Conditional_3_Template, 3, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function MainLayoutComponent_Conditional_3_For_2_Template_button_click_9_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.dismiss(t_r2.id));
    });
    \u0275\u0275text(10, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275classProp("toast-match", t_r2.kind === "match");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, t_r2.kind === "match" ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.body);
  }
}
function MainLayoutComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, MainLayoutComponent_Conditional_3_For_2_Template, 11, 5, "div", 5, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.toastSvc.toasts());
  }
}
function MainLayoutComponent_For_6_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "circle", 17)(2, "polygon", 18);
    \u0275\u0275elementEnd();
  }
}
function MainLayoutComponent_For_6_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "path", 19);
    \u0275\u0275elementEnd();
  }
}
function MainLayoutComponent_For_6_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "path", 20)(2, "circle", 21);
    \u0275\u0275elementEnd();
  }
}
function MainLayoutComponent_For_6_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "circle", 22)(2, "path", 23);
    \u0275\u0275elementEnd();
  }
}
function MainLayoutComponent_For_6_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "path", 24);
    \u0275\u0275elementEnd();
  }
}
function MainLayoutComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4)(1, "span", 14);
    \u0275\u0275template(2, MainLayoutComponent_For_6_Case_2_Template, 3, 0)(3, MainLayoutComponent_For_6_Case_3_Template, 2, 0)(4, MainLayoutComponent_For_6_Case_4_Template, 3, 0)(5, MainLayoutComponent_For_6_Case_5_Template, 3, 0)(6, MainLayoutComponent_For_6_Case_6_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r4.path);
    \u0275\u0275attribute("aria-label", item_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, (tmp_12_0 = item_r4.icon) === "discover" ? 2 : tmp_12_0 === "matches" ? 3 : tmp_12_0 === "profile" ? 4 : tmp_12_0 === "settings" ? 5 : tmp_12_0 === "shield" ? 6 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
var MainLayoutComponent = class _MainLayoutComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.toastSvc = inject(ToastService);
    this.isAdmin = this.auth.isAdmin;
    this.allItems = [
      { label: "Discover", path: "/feed", icon: "discover" },
      { label: "Matches", path: "/matches", icon: "matches" },
      { label: "Profile", path: "/profile/edit", icon: "profile" },
      { label: "Settings", path: "/settings", icon: "settings" },
      { label: "Admin", path: "/admin/moderation", icon: "shield", adminOnly: true }
    ];
    this.navItems = computed(() => this.allItems.filter((i) => !i.adminOnly || this.isAdmin()));
  }
  dismiss(id) {
    this.toastSvc.dismiss(id);
  }
  static {
    this.\u0275fac = function MainLayoutComponent_Factory(t) {
      return new (t || _MainLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayoutComponent, selectors: [["app-main-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [[1, "layout"], [1, "layout-content"], ["role", "status", "aria-live", "polite", 1, "toast-stack"], ["aria-label", "Primary", 1, "tabbar"], ["routerLinkActive", "tab-active", 1, "tab", 3, "routerLink"], [1, "toast", 3, "toast-match"], [1, "toast"], ["aria-hidden", "true", 1, "toast-icon"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.7", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "toast-body"], ["aria-label", "Dismiss", 1, "toast-close", 3, "click"], ["d", "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.4 1-1.1a5.5 5.5 0 0 0 0-7.8z"], ["x", "3", "y", "5", "width", "18", "height", "14", "rx", "2"], ["d", "m3 7 9 6 9-6"], ["aria-hidden", "true", 1, "tab-icon"], [1, "tab-label"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.7", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "12", "r", "9"], ["points", "16 8 10.5 10.5 8 16 13.5 13.5 16 8"], ["d", "M21 11.5a8.4 8.4 0 0 1-8.5 8.4 8.4 8.4 0 0 1-3.8-.9L3 21l2-5.7a8.4 8.4 0 0 1-.9-3.8A8.4 8.4 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5z"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"]], template: function MainLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "main", 1);
        \u0275\u0275element(2, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, MainLayoutComponent_Conditional_3_Template, 3, 0, "div", 2);
        \u0275\u0275elementStart(4, "nav", 3);
        \u0275\u0275repeaterCreate(5, MainLayoutComponent_For_6_Template, 9, 4, "a", 4, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.toastSvc.toasts().length ? 3 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.navItems());
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100svh;\n  background: var(--color-bg);\n}\n.layout-content[_ngcontent-%COMP%] {\n  overscroll-behavior-y: contain;\n}\n.tabbar[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 40;\n  display: flex;\n  justify-content: space-around;\n  align-items: stretch;\n  background: var(--color-surface);\n  border-top: 1px solid var(--color-border);\n  box-shadow: 0 -2px 10px rgba(19, 26, 33, 0.06);\n  padding-bottom: var(--safe-bottom);\n}\n.tab[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  min-height: var(--nav-height);\n  padding: var(--space-2) 0;\n  color: var(--color-text-faint);\n  transition: color 0.15s ease, background 0.15s ease;\n}\n.tab[_ngcontent-%COMP%]:active {\n  background: var(--color-surface-alt);\n}\n.tab-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  line-height: 1;\n}\n.tab-label[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  font-weight: 600;\n}\n.tab-active[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.tab-active[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%] {\n  transform: translateY(-1px);\n}\n.toast-stack[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: calc(var(--nav-height) + var(--safe-bottom) + var(--space-3));\n  z-index: 60;\n  width: min(92vw, var(--content-max));\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  padding: 0 var(--space-3);\n}\n.toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  background: var(--color-text);\n  color: var(--color-text-oncolor);\n  border-radius: var(--radius-md);\n  padding: var(--space-3) var(--space-4);\n  box-shadow: var(--shadow-lg);\n}\n.toast-match[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n}\n.toast-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.toast-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  font-size: var(--text-sm);\n}\n.toast-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: var(--text-base);\n}\n.toast-close[_ngcontent-%COMP%] {\n  color: inherit;\n  opacity: 0.8;\n  min-height: 32px;\n  min-width: 32px;\n  font-size: var(--text-base);\n}\n@media (min-width: 900px) {\n  .tabbar[_ngcontent-%COMP%] {\n    max-width: var(--content-max);\n    margin: 0 auto;\n    border-radius: var(--radius-lg) var(--radius-lg) 0 0;\n  }\n}\n/*# sourceMappingURL=main-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayoutComponent, { className: "MainLayoutComponent", filePath: "src/app/layout/main-layout.component.ts", lineNumber: 21 });
})();
export {
  MainLayoutComponent
};
//# sourceMappingURL=main-layout.component-PRNJIRDT.js.map
