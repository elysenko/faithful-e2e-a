import {
  AuthService
} from "./chunk-UUE5QASQ.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-WJ46E35X.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-BZREI57W.js";

// src/app/shell/shell.component.ts
var _forTrack0 = ($index, $item) => $item.path;
function ShellComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function ShellComponent_Conditional_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDrawer());
    });
    \u0275\u0275elementEnd();
  }
}
function ShellComponent_For_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 20);
    \u0275\u0275listener("click", function ShellComponent_For_18_Conditional_0_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeDrawer());
    });
    \u0275\u0275elementStart(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", item_r4.path);
    \u0275\u0275attribute("data-testid", "nav-" + item_r4.label.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function ShellComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ShellComponent_For_18_Conditional_0_Template, 5, 4, "a", 19);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!item_r4.admin || ctx_r1.isAdmin() ? 0 : -1);
  }
}
var ShellComponent = class _ShellComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.user = this.auth.user;
    this.isAdmin = this.auth.isAdmin;
    this.drawerOpen = signal(false);
    this.nav = [];
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
    this.\u0275fac = function ShellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShellComponent, selectors: [["app-shell"]], decls: 32, vars: 6, consts: [[1, "layout"], [1, "topbar"], ["type", "button", "aria-label", "Menu", "data-testid", "nav-toggle", 1, "hamburger", 3, "click"], [1, "topbar-brand"], [1, "brand-mark"], [1, "topbar-spacer"], [1, "scrim"], ["data-testid", "sidebar", 1, "sidebar"], [1, "sidebar-brand"], [1, "brand-name"], [1, "nav"], [1, "sidebar-footer"], [1, "user-chip"], [1, "avatar"], [1, "user-meta"], [1, "muted"], ["type", "button", "data-testid", "logout", 1, "btn", "btn-sm", 3, "click"], [1, "content"], [1, "scrim", 3, "click"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLink"], ["routerLinkActive", "active", 1, "nav-item", 3, "click", "routerLink"], [1, "nav-icon"]], template: function ShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "button", 2);
        \u0275\u0275listener("click", function ShellComponent_Template_button_click_2_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275text(3, "\u2630");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3)(5, "span", 4);
        \u0275\u0275text(6, "\u2601");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " Cloudline");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "span", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, ShellComponent_Conditional_9_Template, 1, 0, "div", 6);
        \u0275\u0275elementStart(10, "aside", 7)(11, "div", 8)(12, "span", 4);
        \u0275\u0275text(13, "\u2601");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 9);
        \u0275\u0275text(15, "Cloudline CRM");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "nav", 10);
        \u0275\u0275repeaterCreate(17, ShellComponent_For_18_Template, 1, 1, null, null, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 11)(20, "div", 12)(21, "span", 13);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 14)(24, "strong");
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "small", 15);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "button", 16);
        \u0275\u0275listener("click", function ShellComponent_Template_button_click_28_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(29, " Sign out ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "main", 17);
        \u0275\u0275element(31, "router-outlet");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.drawerOpen() ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.drawerOpen());
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.nav);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate((((tmp_3_0 = ctx.user()) == null ? null : tmp_3_0.name) || "?").charAt(0));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate((tmp_4_0 = ctx.user()) == null ? null : tmp_4_0.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.isAdmin() ? "Administrator" : "Member");
      }
    }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n.layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100svh;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: var(--sidebar-width);\n  display: flex;\n  flex-direction: column;\n  background: var(--color-surface);\n  border-right: 1px solid var(--color-border);\n  z-index: 40;\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-4) var(--space-4);\n  font-weight: 700;\n  color: var(--color-primary-dark);\n  border-bottom: 1px solid var(--color-border);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: var(--radius-sm);\n  background: var(--color-primary);\n  color: var(--color-text-inverse);\n}\n.nav[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overscroll-behavior-y: contain;\n  padding: var(--space-3);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-height: 44px;\n  padding: 0 var(--space-3);\n  border-radius: var(--radius-sm);\n  color: var(--color-text-muted);\n  font-weight: 500;\n}\n.nav-item[_ngcontent-%COMP%]:active {\n  background: var(--color-surface-alt);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--color-primary-light);\n  color: var(--color-primary-dark);\n  font-weight: 600;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  text-align: center;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-border);\n  padding: var(--space-3);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.avatar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 999px;\n  background: var(--color-accent);\n  color: var(--color-text-inverse);\n  font-weight: 700;\n}\n.user-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.user-meta[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.topbar[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  gap: var(--space-3);\n  height: var(--topbar-height);\n  padding: 0 var(--space-3);\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n  position: sticky;\n  top: 0;\n  z-index: 30;\n}\n.hamburger[_ngcontent-%COMP%] {\n  min-width: 44px;\n  min-height: 44px;\n  border: none;\n  background: transparent;\n  font-size: 1.4rem;\n  cursor: pointer;\n}\n.topbar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  font-weight: 700;\n  color: var(--color-primary-dark);\n}\n.topbar-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.scrim[_ngcontent-%COMP%] {\n  display: none;\n}\n.content[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-width);\n  padding: var(--space-5);\n  max-width: 1200px;\n}\n@media (max-width: 768px) {\n  .topbar[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .content[_ngcontent-%COMP%] {\n    margin-left: 0;\n    padding: var(--space-4);\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n    transition: transform 0.22s ease;\n    box-shadow: var(--shadow-md);\n  }\n  .sidebar.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .scrim[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background: rgba(22, 32, 47, 0.4);\n    z-index: 35;\n  }\n}\n/*# sourceMappingURL=shell.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShellComponent, [{
    type: Component,
    args: [{ selector: "app-shell", standalone: true, imports: [RouterOutlet, RouterLink, RouterLinkActive], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="layout">
  <!-- Mobile top bar -->
  <header class="topbar">
    <button class="hamburger" type="button" (click)="toggleDrawer()" aria-label="Menu"
      data-testid="nav-toggle">\u2630</button>
    <span class="topbar-brand"><span class="brand-mark">\u2601</span> Cloudline</span>
    <span class="topbar-spacer"></span>
  </header>

  <!-- Scrim for mobile drawer -->
  @if (drawerOpen()) {
    <div class="scrim" (click)="closeDrawer()"></div>
  }

  <!-- Sidebar / drawer -->
  <aside class="sidebar" [class.open]="drawerOpen()" data-testid="sidebar">
    <div class="sidebar-brand">
      <span class="brand-mark">\u2601</span>
      <span class="brand-name">Cloudline CRM</span>
    </div>
    <nav class="nav">
      @for (item of nav; track item.path) {
        @if (!item.admin || isAdmin()) {
          <a class="nav-item" [routerLink]="item.path" routerLinkActive="active"
            (click)="closeDrawer()" [attr.data-testid]="'nav-' + item.label.toLowerCase()">
            <span class="nav-icon">{{ item.icon }}</span>
            <span>{{ item.label }}</span>
          </a>
        }
      }
    </nav>
    <div class="sidebar-footer">
      <div class="user-chip">
        <span class="avatar">{{ (user()?.name || '?').charAt(0) }}</span>
        <span class="user-meta">
          <strong>{{ user()?.name }}</strong>
          <small class="muted">{{ isAdmin() ? 'Administrator' : 'Member' }}</small>
        </span>
      </div>
      <button class="btn btn-sm" type="button" (click)="logout()" data-testid="logout">
        Sign out
      </button>
    </div>
  </aside>

  <!-- Routed content -->
  <main class="content">
    <router-outlet />
  </main>
</div>
`, styles: ["/* src/app/shell/shell.component.css */\n.layout {\n  min-height: 100vh;\n  min-height: 100svh;\n}\n.sidebar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: var(--sidebar-width);\n  display: flex;\n  flex-direction: column;\n  background: var(--color-surface);\n  border-right: 1px solid var(--color-border);\n  z-index: 40;\n}\n.sidebar-brand {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  padding: var(--space-4) var(--space-4);\n  font-weight: 700;\n  color: var(--color-primary-dark);\n  border-bottom: 1px solid var(--color-border);\n}\n.brand-mark {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: var(--radius-sm);\n  background: var(--color-primary);\n  color: var(--color-text-inverse);\n}\n.nav {\n  flex: 1;\n  overflow-y: auto;\n  overscroll-behavior-y: contain;\n  padding: var(--space-3);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-height: 44px;\n  padding: 0 var(--space-3);\n  border-radius: var(--radius-sm);\n  color: var(--color-text-muted);\n  font-weight: 500;\n}\n.nav-item:active {\n  background: var(--color-surface-alt);\n}\n.nav-item.active {\n  background: var(--color-primary-light);\n  color: var(--color-primary-dark);\n  font-weight: 600;\n}\n.nav-icon {\n  width: 20px;\n  text-align: center;\n}\n.sidebar-footer {\n  border-top: 1px solid var(--color-border);\n  padding: var(--space-3);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.user-chip {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.avatar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 999px;\n  background: var(--color-accent);\n  color: var(--color-text-inverse);\n  font-weight: 700;\n}\n.user-meta {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.user-meta small {\n  font-size: 0.75rem;\n}\n.topbar {\n  display: none;\n  align-items: center;\n  gap: var(--space-3);\n  height: var(--topbar-height);\n  padding: 0 var(--space-3);\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n  position: sticky;\n  top: 0;\n  z-index: 30;\n}\n.hamburger {\n  min-width: 44px;\n  min-height: 44px;\n  border: none;\n  background: transparent;\n  font-size: 1.4rem;\n  cursor: pointer;\n}\n.topbar-brand {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  font-weight: 700;\n  color: var(--color-primary-dark);\n}\n.topbar-spacer {\n  flex: 1;\n}\n.scrim {\n  display: none;\n}\n.content {\n  margin-left: var(--sidebar-width);\n  padding: var(--space-5);\n  max-width: 1200px;\n}\n@media (max-width: 768px) {\n  .topbar {\n    display: flex;\n  }\n  .content {\n    margin-left: 0;\n    padding: var(--space-4);\n  }\n  .sidebar {\n    transform: translateX(-100%);\n    transition: transform 0.22s ease;\n    box-shadow: var(--shadow-md);\n  }\n  .sidebar.open {\n    transform: translateX(0);\n  }\n  .scrim {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background: rgba(22, 32, 47, 0.4);\n    z-index: 35;\n  }\n}\n/*# sourceMappingURL=shell.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShellComponent, { className: "ShellComponent", filePath: "src/app/shell/shell.component.ts", lineNumber: 20 });
})();
export {
  ShellComponent
};
//# sourceMappingURL=chunk-W2UUESSN.js.map
