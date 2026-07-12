import {
  AuthService
} from "./chunk-REEGUVE2.js";
import {
  AvatarComponent
} from "./chunk-2YFTR47U.js";
import {
  CommonModule,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-4ZKGBDGO.js";

// src/app/layout/shell.component.ts
var _forTrack0 = ($index, $item) => $item.path;
function ShellComponent_For_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", item_r1.path);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("d", item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function ShellComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ShellComponent_For_9_Conditional_0_Template, 5, 3, "a", 22);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, !item_r1.adminOnly || ctx_r1.isAdmin() ? 0 : -1);
  }
}
function ShellComponent_For_35_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", item_r3.path);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("d", item_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function ShellComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ShellComponent_For_35_Conditional_0_Template, 5, 3, "a", 24);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, !item_r3.adminOnly || ctx_r1.isAdmin() ? 0 : -1);
  }
}
var ShellComponent = class _ShellComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.user = this.auth.user;
    this.isAdmin = this.auth.isAdmin;
    this.navItems = [
      {
        label: "Discover",
        path: "/feed",
        icon: "M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6zM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25zM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25z"
      },
      {
        label: "Matches",
        path: "/matches",
        icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      },
      {
        label: "Profile",
        path: "/profile/edit",
        icon: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      },
      {
        label: "Moderation",
        path: "/admin",
        adminOnly: true,
        icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      }
    ];
  }
  logout() {
    this.auth.logout();
  }
  static {
    this.\u0275fac = function ShellComponent_Factory(t) {
      return new (t || _ShellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShellComponent, selectors: [["app-shell"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 4, consts: [["data-testid", "app-ready", 1, "shell"], [1, "sidebar"], ["routerLink", "/feed", 1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "side-nav"], [1, "side-foot"], ["routerLink", "/settings", 1, "user-card"], [3, "name", "size"], [1, "user-meta"], [1, "muted"], [1, "btn", "btn-ghost", "btn-block", 3, "click"], [1, "main"], [1, "topbar"], ["routerLink", "/settings", "aria-label", "Settings", 1, "icon-btn"], ["viewBox", "0 0 24 24", "fill", "none", "aria-hidden", "true"], ["d", "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.076.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.004.827c-.292.24-.437.613-.43.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.281z", "stroke", "currentColor", "stroke-width", "1.6", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z", "stroke", "currentColor", "stroke-width", "1.6", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "content"], [1, "tabbar"], ["routerLink", "/settings", "routerLinkActive", "active", 1, "tab"], ["d", "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z", "stroke", "currentColor", "stroke-width", "1.7", "stroke-linecap", "round", "stroke-linejoin", "round"], ["routerLinkActive", "active", 1, "side-link", 3, "routerLink"], ["stroke", "currentColor", "stroke-width", "1.7", "stroke-linecap", "round", "stroke-linejoin", "round"], ["routerLinkActive", "active", 1, "tab", 3, "routerLink"]], template: function ShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "a", 2)(3, "span", 3);
        \u0275\u0275text(4, "R");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Rapport");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "nav", 5);
        \u0275\u0275repeaterCreate(8, ShellComponent_For_9_Template, 1, 1, null, null, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 6)(11, "a", 7);
        \u0275\u0275element(12, "app-avatar", 8);
        \u0275\u0275elementStart(13, "span", 9)(14, "strong");
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "small", 10);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function ShellComponent_Template_button_click_18_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(19, "Sign out");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 12)(21, "header", 13)(22, "a", 2)(23, "span", 3);
        \u0275\u0275text(24, "R");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 4);
        \u0275\u0275text(26, "Rapport");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "a", 14);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(28, "svg", 15);
        \u0275\u0275element(29, "path", 16)(30, "path", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(31, "main", 18);
        \u0275\u0275element(32, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "nav", 19);
        \u0275\u0275repeaterCreate(34, ShellComponent_For_35_Template, 1, 1, null, null, _forTrack0);
        \u0275\u0275elementStart(36, "a", 20);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(37, "svg", 15);
        \u0275\u0275element(38, "path", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(39, "span");
        \u0275\u0275text(40, "You");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.navItems);
        \u0275\u0275advance(4);
        \u0275\u0275property("name", ((tmp_1_0 = ctx.user()) == null ? null : tmp_1_0.name) || "You")("size", 40);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(((tmp_3_0 = ctx.user()) == null ? null : tmp_3_0.name) || "You");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(((tmp_4_0 = ctx.user()) == null ? null : tmp_4_0.jobTitle) || "Member");
        \u0275\u0275advance(17);
        \u0275\u0275repeater(ctx.navItems);
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, AvatarComponent], styles: ["\n\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  min-height: 100svh;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: var(--color-text);\n  font-weight: 800;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  background: var(--grad-1);\n  color: #fff;\n  font-weight: 800;\n  font-size: 18px;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  letter-spacing: -0.02em;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  align-self: flex-start;\n  height: 100vh;\n  height: 100svh;\n  width: var(--sidebar-width);\n  flex: none;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n  padding: var(--space-5) var(--space-4);\n  background: var(--color-surface);\n  border-right: 1px solid var(--color-border);\n}\n.side-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-top: var(--space-3);\n}\n.side-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-height: 46px;\n  padding: 0 14px;\n  border-radius: var(--radius-md);\n  color: var(--color-text-muted);\n  font-weight: 600;\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.side-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.side-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n  color: var(--color-text);\n}\n.side-link.active[_ngcontent-%COMP%] {\n  background: var(--color-primary-soft);\n  color: var(--color-primary);\n}\n.side-foot[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.user-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px;\n  border-radius: var(--radius-md);\n  color: var(--color-text);\n}\n.user-card[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-alt);\n}\n.user-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.user-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n}\n.user-meta[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overscroll-behavior-y: contain;\n}\n.topbar[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  justify-content: space-between;\n  height: var(--topbar-height);\n  padding: 0 var(--space-4);\n  padding-top: env(safe-area-inset-top);\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-full);\n  color: var(--color-text-muted);\n}\n.icon-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.icon-btn[_ngcontent-%COMP%]:active {\n  background: var(--color-surface-alt);\n}\n.tabbar[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 30;\n  background: var(--color-surface);\n  border-top: 1px solid var(--color-border);\n  padding-bottom: env(safe-area-inset-bottom);\n  box-shadow: 0 -4px 16px rgba(19, 26, 42, 0.06);\n}\n.tab[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3px;\n  min-height: 56px;\n  padding: 6px 0;\n  color: var(--color-text-subtle);\n  font-size: 11px;\n  font-weight: 600;\n  transition: color 0.12s ease;\n}\n.tab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.tab[_ngcontent-%COMP%]:active {\n  background: var(--color-surface-alt);\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .topbar[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .tabbar[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .content[_ngcontent-%COMP%] {\n    padding-bottom: calc(64px + env(safe-area-inset-bottom));\n  }\n}\n/*# sourceMappingURL=shell.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShellComponent, { className: "ShellComponent", filePath: "src/app/layout/shell.component.ts", lineNumber: 22 });
})();
export {
  ShellComponent
};
//# sourceMappingURL=shell.component-ZFYPOILP.js.map
