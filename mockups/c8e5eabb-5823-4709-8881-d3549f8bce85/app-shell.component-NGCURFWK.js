import {
  AuthService
} from "./chunk-HEI6KB7T.js";
import {
  CommonModule,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  signal,
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-A62IECG2.js";

// src/app/components/app-shell/app-shell.component.ts
var _forTrack0 = ($index, $item) => $item.group;
var _forTrack1 = ($index, $item) => $item.route;
var _c0 = () => ({ exact: false });
function AppShellComponent_For_12_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 24)(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.route)("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function AppShellComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, AppShellComponent_For_12_For_4_Template, 5, 5, "a", 24, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const grp_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(grp_r2.group);
    \u0275\u0275advance();
    \u0275\u0275repeater(grp_r2.items);
  }
}
function AppShellComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19)(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r3.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function AppShellComponent_Conditional_39_For_8_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 32);
    \u0275\u0275listener("click", function AppShellComponent_Conditional_39_For_8_For_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.closeDrawer());
    });
    \u0275\u0275elementStart(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r7.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.label);
  }
}
function AppShellComponent_Conditional_39_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, AppShellComponent_Conditional_39_For_8_For_4_Template, 5, 3, "a", 31, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const grp_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(grp_r8.group);
    \u0275\u0275advance();
    \u0275\u0275repeater(grp_r8.items);
  }
}
function AppShellComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", function AppShellComponent_Conditional_39_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.closeDrawer());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "aside", 27)(2, "div", 28)(3, "strong");
    \u0275\u0275text(4, "Menu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function AppShellComponent_Conditional_39_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.closeDrawer());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(7, AppShellComponent_Conditional_39_For_8_Template, 5, 1, "div", 6, _forTrack0);
    \u0275\u0275elementStart(9, "button", 30);
    \u0275\u0275listener("click", function AppShellComponent_Conditional_39_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.logout());
    });
    \u0275\u0275text(10, "Logout");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r4.fullNav);
  }
}
var AppShellComponent = class _AppShellComponent {
  constructor(auth) {
    this.auth = auth;
    this.drawerOpen = signal(false);
    this.primaryNav = [
      { label: "Dashboard", icon: "\u25A6", route: "/dashboard" },
      { label: "Accounts", icon: "\u{1F3E2}", route: "/accounts" },
      { label: "Contacts", icon: "\u{1F464}", route: "/contacts" },
      { label: "Projects", icon: "\u{1F4C1}", route: "/projects" },
      { label: "Email", icon: "\u2709", route: "/email" }
    ];
    this.fullNav = [
      { group: "Relationships", items: [
        { label: "Dashboard", icon: "\u25A6", route: "/dashboard" },
        { label: "Accounts", icon: "\u{1F3E2}", route: "/accounts" },
        { label: "Contacts", icon: "\u{1F464}", route: "/contacts" }
      ] },
      { group: "Pipeline", items: [
        { label: "Projects", icon: "\u{1F4C1}", route: "/projects" },
        { label: "Design-Ins", icon: "\u{1F3AF}", route: "/design-ins" },
        { label: "Quotes", icon: "\u{1F4DD}", route: "/quotes" },
        { label: "Validation", icon: "\u2713", route: "/validation" },
        { label: "Forecasting", icon: "\u{1F4C8}", route: "/forecasting" }
      ] },
      { group: "Fulfilment", items: [
        { label: "Orders & Backlog", icon: "\u{1F4E6}", route: "/orders" },
        { label: "Warranty / RMA", icon: "\u{1F6E0}", route: "/warranty" },
        { label: "Documents / OCR", icon: "\u{1F5CE}", route: "/documents" }
      ] },
      { group: "Revenue", items: [
        { label: "Revenue & Commission", icon: "\u{1F4B0}", route: "/revenue" },
        { label: "Reports & QBR", icon: "\u{1F4CA}", route: "/reports" }
      ] },
      { group: "Workspace", items: [
        { label: "Email Intelligence", icon: "\u2709", route: "/email" },
        { label: "Tasks & Reminders", icon: "\u2714", route: "/tasks" },
        { label: "Catalog", icon: "\u{1F4D5}", route: "/catalog" },
        { label: "Settings", icon: "\u2699", route: "/settings" }
      ] }
    ];
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
  static {
    this.\u0275fac = function AppShellComponent_Factory(t) {
      return new (t || _AppShellComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppShellComponent, selectors: [["app-shell"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 40, vars: 4, consts: [["data-testid", "app-ready", 1, "shell"], [1, "sidebar"], [1, "brand"], [1, "brand-mark"], [1, "brand-text"], [1, "nav", "scroll-y"], [1, "nav-group"], [1, "main"], [1, "topbar"], ["aria-label", "Open menu", 1, "hamburger", 3, "click"], [1, "topbar-title"], [1, "topbar-right"], [1, "user-chip"], [1, "avatar"], [1, "user-name"], [1, "badge", "badge-neutral", "role-badge"], [1, "btn", "btn-sm", 3, "click"], [1, "content", "scroll-y"], [1, "tabbar"], ["routerLinkActive", "active", 1, "tab-item", 3, "routerLink"], [1, "tab-item", 3, "click"], [1, "tab-icon"], [1, "tab-label"], [1, "nav-group-label"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "nav-icon"], [1, "drawer-scrim", 3, "click"], [1, "drawer", "scroll-y"], [1, "drawer-head"], [1, "btn", "btn-sm", "btn-ghost", 3, "click"], [1, "btn", "drawer-logout", 3, "click"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["routerLinkActive", "active", 1, "nav-link", 3, "click", "routerLink"]], template: function AppShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u25C8");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "strong");
        \u0275\u0275text(7, "Nexus Power");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "small");
        \u0275\u0275text(9, "CRM");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "nav", 5);
        \u0275\u0275repeaterCreate(11, AppShellComponent_For_12_Template, 5, 1, "div", 6, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 7)(14, "header", 8)(15, "button", 9);
        \u0275\u0275listener("click", function AppShellComponent_Template_button_click_15_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275text(16, "\u2630");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 10);
        \u0275\u0275text(18, "Nexus Power CRM");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 11)(20, "span", 12)(21, "span", 13);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 14);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 15);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "button", 16);
        \u0275\u0275listener("click", function AppShellComponent_Template_button_click_27_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(28, "Logout");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "main", 17);
        \u0275\u0275element(30, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "nav", 18);
        \u0275\u0275repeaterCreate(32, AppShellComponent_For_33_Template, 5, 3, "a", 19, _forTrack1);
        \u0275\u0275elementStart(34, "button", 20);
        \u0275\u0275listener("click", function AppShellComponent_Template_button_click_34_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275elementStart(35, "span", 21);
        \u0275\u0275text(36, "\u22EF");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "span", 22);
        \u0275\u0275text(38, "More");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(39, AppShellComponent_Conditional_39_Template, 11, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        \u0275\u0275advance(11);
        \u0275\u0275repeater(ctx.fullNav);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate((((tmp_1_0 = ctx.auth.user()) == null ? null : tmp_1_0.name) || "U")[0]);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_2_0 = ctx.auth.user()) == null ? null : tmp_2_0.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_3_0 = ctx.auth.user()) == null ? null : tmp_3_0.role);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.primaryNav);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(39, ctx.drawerOpen() ? 39 : -1);
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100svh;\n  min-height: 100vh;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: var(--sidebar-w);\n  flex-shrink: 0;\n  background: var(--color-sidebar);\n  color: var(--color-text-invert);\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  color: var(--color-accent-500);\n  font-size: 24px;\n}\n.brand-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.brand-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: var(--fs-md);\n}\n.brand-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--color-text-faint);\n  font-size: var(--fs-xs);\n  letter-spacing: 0.15em;\n}\n.nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 12px 24px;\n  overflow-y: auto;\n}\n.nav-group[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.nav-group-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: var(--color-text-faint);\n  padding: 8px 12px 4px;\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 9px 12px;\n  border-radius: var(--radius-sm);\n  color: #c6d3de;\n  font-size: var(--fs-sm);\n  font-weight: 500;\n  min-height: 40px;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-sidebar-hover);\n  color: #fff;\n  text-decoration: none;\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  background: var(--color-brand-600);\n  color: #fff;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  text-align: center;\n  font-size: 15px;\n}\n.main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.topbar[_ngcontent-%COMP%] {\n  height: var(--topbar-h);\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 0 20px;\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  font-size: 22px;\n  cursor: pointer;\n  color: var(--color-text);\n  min-height: 44px;\n  min-width: 44px;\n}\n.topbar-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: var(--fs-md);\n}\n.topbar-right[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--color-brand-600);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--fs-sm);\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-sm);\n  font-weight: 600;\n}\n.role-badge[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.tabbar[_ngcontent-%COMP%], .drawer[_ngcontent-%COMP%], .drawer-scrim[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hamburger[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .user-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .tabbar[_ngcontent-%COMP%] {\n    display: flex;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: var(--color-surface);\n    border-top: 1px solid var(--color-border);\n    padding-bottom: var(--safe-bottom);\n    z-index: 40;\n  }\n  .tab-item[_ngcontent-%COMP%] {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 2px;\n    min-height: 56px;\n    background: none;\n    border: none;\n    color: var(--color-text-muted);\n    font-size: 10px;\n    cursor: pointer;\n  }\n  .tab-item.active[_ngcontent-%COMP%] {\n    color: var(--color-brand-600);\n  }\n  .tab-item.active[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%] {\n    transform: translateY(-1px);\n  }\n  .tab-icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .tab-item[_ngcontent-%COMP%]:active {\n    background: var(--color-surface-2);\n  }\n  .drawer-scrim[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background: rgba(11, 28, 44, 0.5);\n    z-index: 50;\n  }\n  .drawer[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 82%;\n    max-width: 320px;\n    background: var(--color-sidebar);\n    color: var(--color-text-invert);\n    z-index: 60;\n    padding: 12px;\n    overflow-y: auto;\n    overscroll-behavior-y: contain;\n  }\n  .drawer-head[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 8px 12px 14px;\n  }\n  .drawer[_ngcontent-%COMP%]   .nav-group-label[_ngcontent-%COMP%] {\n    color: var(--color-text-faint);\n  }\n  .drawer-logout[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 16px;\n  }\n}\n/*# sourceMappingURL=app-shell.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppShellComponent, { className: "AppShellComponent", filePath: "src/app/components/app-shell/app-shell.component.ts", lineNumber: 15 });
})();
export {
  AppShellComponent
};
//# sourceMappingURL=app-shell.component-NGCURFWK.js.map
