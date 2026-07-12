import {
  AuthService
} from "./chunk-IBNCHXSA.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-GFN35O44.js";
import {
  CommonModule,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-KFEQ7DOY.js";

// src/app/shared/layout.component.ts
var _forTrack0 = ($index, $item) => $item.path;
function LayoutComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275listener("click", function LayoutComponent_For_11_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275elementStart(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r3.path);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function LayoutComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22)(1, "span", 24);
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
var LayoutComponent = class _LayoutComponent {
  constructor(auth) {
    this.auth = auth;
    this.nav = [
      { label: "Home", path: "/home", icon: "\u{1F3E0}" },
      { label: "Schedule", path: "/schedule", icon: "\u{1F4C5}" },
      { label: "Boats", path: "/boats", icon: "\u{1F6A3}" },
      { label: "Members", path: "/members", icon: "\u{1F465}" },
      { label: "Conditions", path: "/conditions", icon: "\u{1F30A}" },
      { label: "Settings", path: "/admin/settings", icon: "\u2699\uFE0F", roles: ["coach"] }
    ];
    this.sidebarOpen = signal(false);
    this.visibleNav = computed(() => this.nav.filter((n) => !n.roles || this.auth.hasRole(...n.roles)));
    this.tabNav = computed(() => this.visibleNav().slice(0, 4));
    this.user = this.auth.user;
    this.role = this.auth.role;
  }
  ngOnInit() {
    this.auth.refreshCurrentUser().subscribe({
      error: () => {
      }
    });
  }
  initials() {
    const name = this.user()?.name ?? this.user()?.email ?? "";
    const parts = name.trim().split(/[\s@.]+/).filter(Boolean);
    const letters = parts.length >= 2 ? parts[0][0] + parts[1][0] : name.slice(0, 2);
    return (letters || "LC").toUpperCase();
  }
  toggleSidebar() {
    this.sidebarOpen.update((v) => !v);
  }
  closeSidebar() {
    this.sidebarOpen.set(false);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 44, vars: 8, consts: [[1, "erp-shell"], [1, "erp-sidebar"], [1, "erp-brand"], [1, "erp-brand-mark"], [1, "erp-brand-name"], [1, "erp-nav"], [1, "erp-nav-group"], ["routerLinkActive", "active", 1, "erp-nav-item", 3, "routerLink"], [1, "erp-sidebar-foot"], [1, "erp-user"], [1, "erp-avatar"], [1, "text-xs", 2, "color", "var(--color-faint)", "text-transform", "uppercase"], [1, "btn", "btn-dark", "btn-block", "btn-sm", 3, "click"], [1, "erp-scrim", 3, "click"], [1, "erp-main"], [1, "erp-header"], ["aria-label", "Toggle menu", 1, "erp-hamburger", 3, "click"], [1, "spacer"], [1, "badge", "badge-neutral"], [1, "erp-content"], [1, "erp-content-inner"], [1, "mobile-tabbar"], ["routerLinkActive", "active", 1, "mobile-tab", 3, "routerLink"], [1, "mobile-tab", 3, "click"], [1, "mobile-tab-icon"], ["routerLinkActive", "active", 1, "erp-nav-item", 3, "click", "routerLink"], [1, "erp-nav-icon"]], template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u{1F6A3}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "LakeCrew");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "nav", 5)(8, "div", 6);
        \u0275\u0275text(9, "Club");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(10, LayoutComponent_For_11_Template, 5, 3, "a", 7, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "span", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span")(17, "div");
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 11);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "button", 12);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_21_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(22, "Log out");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 13);
        \u0275\u0275listener("click", function LayoutComponent_Template_div_click_23_listener() {
          return ctx.closeSidebar();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 14)(25, "header", 15)(26, "button", 16);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_26_listener() {
          return ctx.toggleSidebar();
        });
        \u0275\u0275text(27, "\u2630");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "h1");
        \u0275\u0275text(29, "LakeCrew");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "span", 17);
        \u0275\u0275elementStart(31, "span", 18);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "main", 19)(34, "div", 20);
        \u0275\u0275element(35, "router-outlet");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "nav", 21);
        \u0275\u0275repeaterCreate(37, LayoutComponent_For_38_Template, 5, 3, "a", 22, _forTrack0);
        \u0275\u0275elementStart(39, "button", 23);
        \u0275\u0275listener("click", function LayoutComponent_Template_button_click_39_listener() {
          return ctx.toggleSidebar();
        });
        \u0275\u0275elementStart(40, "span", 24);
        \u0275\u0275text(41, "\u2630");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "span");
        \u0275\u0275text(43, "More");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.sidebarOpen());
        \u0275\u0275advance(9);
        \u0275\u0275repeater(ctx.visibleNav());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.initials());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(((tmp_3_0 = ctx.user()) == null ? null : tmp_3_0.name) || ((tmp_3_0 = ctx.user()) == null ? null : tmp_3_0.email));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.role());
        \u0275\u0275advance(3);
        \u0275\u0275classProp("show", ctx.sidebarOpen());
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.role());
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.tabNav());
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/shared/layout.component.ts", lineNumber: 21 });
})();
export {
  LayoutComponent
};
//# sourceMappingURL=layout.component-V5E33HNF.js.map
