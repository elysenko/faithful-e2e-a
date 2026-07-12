import {
  BreakpointObserver,
  Breakpoints
} from "./chunk-KRZHNGDG.js";
import {
  AuthService
} from "./chunk-2Y3HOCZI.js";
import {
  CommonModule,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  filter,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UJBMV62H.js";

// src/app/layout/shell.component.ts
var _forTrack0 = ($index, $item) => $item.path;
function ShellComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.path);
    \u0275\u0275attribute("data-testid", "nav-" + item_r1.label.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function ShellComponent_Conditional_19_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275listener("click", function ShellComponent_Conditional_19_For_12_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeDrawer());
    });
    \u0275\u0275elementStart(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r5.path);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5.label, " ");
  }
}
function ShellComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function ShellComponent_Conditional_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDrawer());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "aside", 13)(2, "div", 14)(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 16)(6, "div", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "nav", 19);
    \u0275\u0275repeaterCreate(11, ShellComponent_Conditional_19_For_12_Template, 4, 3, "a", 20, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 21);
    \u0275\u0275listener("click", function ShellComponent_Conditional_19_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275text(14, "Logout");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.initials());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = (tmp_2_0 = ctx_r2.user()) == null ? null : tmp_2_0.name) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "Demo Admin");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_3_0 = (tmp_3_0 = ctx_r2.user()) == null ? null : tmp_3_0.email) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "demo@nimbus.crm");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.navItems);
  }
}
var ShellComponent = class _ShellComponent {
  constructor() {
    this.breakpoints = inject(BreakpointObserver);
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.navItems = [
      { path: "/dashboard", label: "Dashboard", icon: "\u25A4" },
      { path: "/accounts", label: "Accounts", icon: "\u25C8" },
      { path: "/contacts", label: "Contacts", icon: "\u2630" },
      { path: "/pipeline", label: "Pipeline", icon: "\u25A6" },
      { path: "/leads", label: "Leads", icon: "\u2726" },
      { path: "/tasks", label: "Tasks", icon: "\u2713" }
    ];
    this.isHandset = signal(false);
    this.drawerOpen = signal(false);
    this.user = this.auth.currentUser;
    this.breakpoints.observe([Breakpoints.Handset, Breakpoints.TabletPortrait]).subscribe((result) => {
      this.isHandset.set(result.matches);
      if (!result.matches) {
        this.drawerOpen.set(false);
      }
    });
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => this.drawerOpen.set(false));
  }
  toggleDrawer() {
    this.drawerOpen.update((v) => !v);
  }
  closeDrawer() {
    this.drawerOpen.set(false);
  }
  logout() {
    this.auth.logout();
  }
  initials() {
    const name = this.user()?.name ?? "User";
    return name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
  }
  static {
    this.\u0275fac = function ShellComponent_Factory(t) {
      return new (t || _ShellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShellComponent, selectors: [["app-shell"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 3, consts: [[1, "navbar"], [1, "navbar-inner"], ["type", "button", "aria-label", "Toggle navigation", "data-testid", "nav-hamburger", 1, "hamburger", 3, "click"], ["routerLink", "/dashboard", 1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "nav-links"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "nav-right"], [1, "avatar", 3, "title"], ["type", "button", "data-testid", "nav-logout", 1, "btn", "btn-ghost", "logout-btn", 3, "click"], [1, "content"], ["data-testid", "nav-drawer-overlay", 1, "drawer-overlay", 3, "click"], ["data-testid", "nav-drawer", 1, "drawer"], [1, "drawer-head"], [1, "avatar"], [1, "drawer-user"], [1, "drawer-name"], [1, "drawer-email", "muted"], [1, "drawer-links"], ["routerLinkActive", "active", 1, "drawer-link", 3, "routerLink"], ["type", "button", 1, "btn", "btn-ghost", "drawer-logout", 3, "click"], ["routerLinkActive", "active", 1, "drawer-link", 3, "click", "routerLink"], [1, "drawer-icon"]], template: function ShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function ShellComponent_Template_button_click_2_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(3, "span")(4, "span")(5, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "a", 3)(7, "span", 4);
        \u0275\u0275text(8, "\u25C6");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 5);
        \u0275\u0275text(10, "Nimbus CRM");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "nav", 6);
        \u0275\u0275repeaterCreate(12, ShellComponent_For_13_Template, 2, 3, "a", 7, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 8)(15, "div", 9);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 10);
        \u0275\u0275listener("click", function ShellComponent_Template_button_click_17_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(18, " Logout ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(19, ShellComponent_Conditional_19_Template, 15, 3);
        \u0275\u0275elementStart(20, "main", 11);
        \u0275\u0275element(21, "router-outlet");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.navItems);
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("title", (tmp_1_0 = ctx.user()) == null ? null : tmp_1_0.name);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.initials());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(19, ctx.drawerOpen() ? 19 : -1);
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100svh;\n}\n.navbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 40;\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n  box-shadow: var(--shadow-sm);\n}\n.navbar-inner[_ngcontent-%COMP%] {\n  max-width: var(--content-max);\n  margin: 0 auto;\n  height: var(--navbar-h);\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  padding: 0 var(--space-4);\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  color: var(--color-text);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: var(--text-lg);\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: var(--text-lg);\n  white-space: nowrap;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-1);\n  margin-left: var(--space-4);\n  flex: 1;\n}\n.nav-link[_ngcontent-%COMP%] {\n  padding: var(--space-2) var(--space-3);\n  border-radius: var(--radius-sm);\n  color: var(--color-text-muted);\n  font-size: var(--text-sm);\n  font-weight: 600;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-2);\n  color: var(--color-text);\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  background: var(--color-primary-soft);\n  color: var(--color-primary);\n}\n.nav-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  margin-left: auto;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-pill);\n  background: var(--color-primary);\n  color: var(--color-on-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--text-xs);\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  gap: 4px;\n  width: 44px;\n  height: 44px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 10px;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 2px;\n  background: var(--color-text);\n  border-radius: 2px;\n}\n.content[_ngcontent-%COMP%] {\n  max-width: var(--content-max);\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .nav-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hamburger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .logout-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .brand-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .navbar-inner[_ngcontent-%COMP%] {\n    gap: var(--space-2);\n  }\n}\n/*# sourceMappingURL=shell.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShellComponent, { className: "ShellComponent", filePath: "src/app/layout/shell.component.ts", lineNumber: 21 });
})();
export {
  ShellComponent
};
//# sourceMappingURL=shell.component-2TTTHB62.js.map
