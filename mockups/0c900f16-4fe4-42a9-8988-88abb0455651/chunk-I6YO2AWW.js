import {
  AuthService
} from "./chunk-MPGY4HOL.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-UP3KEDYR.js";
import "./chunk-B3EMQL3E.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-FGCV4IXY.js";

// src/app/admin-shell/admin-shell.component.ts
var AdminShellComponent = class _AdminShellComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.user = this.auth.user;
  }
  logout() {
    this.auth.logout();
  }
  static {
    this.\u0275fac = function AdminShellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminShellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminShellComponent, selectors: [["app-admin-shell"]], decls: 43, vars: 2, consts: [["data-testid", "admin-shell", 1, "admin-layout"], [1, "rail"], [1, "rail-brand"], ["aria-hidden", "true", 1, "brand-mark"], [1, "rail-title"], [1, "rail-nav"], ["routerLink", "/admin/jobs", "routerLinkActive", "active", "data-testid", "nav-jobs", 1, "nav-item"], ["aria-hidden", "true", 1, "nav-ico"], ["routerLink", "/admin/settings", "routerLinkActive", "active", "data-testid", "nav-settings", 1, "nav-item"], [1, "rail-foot"], [1, "who"], [1, "who-name"], [1, "who-email"], ["type", "button", "data-testid", "logout", 1, "logout", 3, "click"], [1, "admin-content"], ["aria-label", "Admin sections", 1, "tabbar"], ["routerLink", "/admin/jobs", "routerLinkActive", "active", 1, "tab"], ["aria-hidden", "true"], ["routerLink", "/admin/settings", "routerLinkActive", "active", 1, "tab"], ["type", "button", 1, "tab", 3, "click"]], template: function AdminShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2);
        \u0275\u0275element(3, "span", 3);
        \u0275\u0275elementStart(4, "span", 4);
        \u0275\u0275text(5, "Admin Console");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "nav", 5)(7, "a", 6)(8, "span", 7);
        \u0275\u0275text(9, "\u27F3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span");
        \u0275\u0275text(11, "Ingestion jobs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "a", 8)(13, "span", 7);
        \u0275\u0275text(14, "\u2699");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span");
        \u0275\u0275text(16, "Settings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "span", 11);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 12);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "button", 13);
        \u0275\u0275listener("click", function AdminShellComponent_Template_button_click_23_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(24, " Sign out ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "main", 14);
        \u0275\u0275element(26, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "nav", 15)(28, "a", 16)(29, "span", 17);
        \u0275\u0275text(30, "\u27F3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span");
        \u0275\u0275text(32, "Jobs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "a", 18)(34, "span", 17);
        \u0275\u0275text(35, "\u2699");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "span");
        \u0275\u0275text(37, "Settings");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "button", 19);
        \u0275\u0275listener("click", function AdminShellComponent_Template_button_click_38_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(39, "span", 17);
        \u0275\u0275text(40, "\u23FB");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "span");
        \u0275\u0275text(42, "Sign out");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        \u0275\u0275advance(20);
        \u0275\u0275textInterpolate(((tmp_0_0 = ctx.user()) == null ? null : tmp_0_0.name) || "Administrator");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_1_0 = ctx.user()) == null ? null : tmp_1_0.email);
      }
    }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.admin-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 248px minmax(0, 1fr);\n  min-height: 100svh;\n  min-height: 100vh;\n}\n.rail[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-right: 1px solid var(--color-border);\n  display: flex;\n  flex-direction: column;\n  padding: var(--space-4);\n  position: sticky;\n  top: 0;\n  height: 100vh;\n}\n.rail-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-2) var(--space-2) var(--space-5);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: var(--radius-sm);\n  background:\n    linear-gradient(\n      135deg,\n      var(--temp-c1),\n      var(--temp-c4),\n      var(--temp-c6));\n  flex: none;\n}\n.rail-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.95rem;\n}\n.rail-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: 11px 12px;\n  min-height: 44px;\n  border-radius: var(--radius-sm);\n  color: var(--color-text-muted);\n  font-size: 0.88rem;\n  font-weight: 500;\n  transition: background 0.12s ease, color 0.12s ease;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-2);\n  color: var(--color-text);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--color-primary-soft);\n  color: var(--color-primary);\n  font-weight: 600;\n}\n.nav-ico[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 18px;\n  text-align: center;\n}\n.rail-foot[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-border);\n  padding-top: var(--space-3);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.who[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0 var(--space-2);\n}\n.who-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n.who-email[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--color-text-faint);\n}\n.logout[_ngcontent-%COMP%] {\n  appearance: none;\n  border: 1px solid var(--color-border);\n  background: var(--color-surface-2);\n  color: var(--color-text-muted);\n  font-size: 0.82rem;\n  font-weight: 600;\n  padding: 10px;\n  min-height: 44px;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n}\n.logout[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-3);\n  color: var(--color-text);\n}\n.admin-content[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: var(--space-6);\n  overflow-y: auto;\n  overscroll-behavior-y: contain;\n}\n.tabbar[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .admin-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .rail[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .admin-content[_ngcontent-%COMP%] {\n    padding: var(--space-4);\n    padding-bottom: calc(72px + var(--safe-bottom));\n  }\n  .tabbar[_ngcontent-%COMP%] {\n    display: flex;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 20;\n    background: var(--color-surface);\n    border-top: 1px solid var(--color-border);\n    padding-bottom: var(--safe-bottom);\n  }\n  .tab[_ngcontent-%COMP%] {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 2px;\n    min-height: 56px;\n    border: none;\n    background: transparent;\n    color: var(--color-text-muted);\n    font-size: 0.68rem;\n    cursor: pointer;\n  }\n  .tab[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n    font-size: 1.1rem;\n  }\n  .tab.active[_ngcontent-%COMP%] {\n    color: var(--color-primary);\n  }\n  .tab[_ngcontent-%COMP%]:active {\n    background: var(--color-surface-2);\n  }\n}\n/*# sourceMappingURL=admin-shell.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminShellComponent, [{
    type: Component,
    args: [{ selector: "app-admin-shell", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterOutlet, RouterLink, RouterLinkActive], template: `<div class="admin-layout" data-testid="admin-shell">
  <aside class="rail">
    <div class="rail-brand">
      <span class="brand-mark" aria-hidden="true"></span>
      <span class="rail-title">Admin Console</span>
    </div>

    <nav class="rail-nav">
      <a
        routerLink="/admin/jobs"
        routerLinkActive="active"
        class="nav-item"
        data-testid="nav-jobs"
      >
        <span class="nav-ico" aria-hidden="true">\u27F3</span>
        <span>Ingestion jobs</span>
      </a>
      <a
        routerLink="/admin/settings"
        routerLinkActive="active"
        class="nav-item"
        data-testid="nav-settings"
      >
        <span class="nav-ico" aria-hidden="true">\u2699</span>
        <span>Settings</span>
      </a>
    </nav>

    <div class="rail-foot">
      <div class="who">
        <span class="who-name">{{ user()?.name || 'Administrator' }}</span>
        <span class="who-email">{{ user()?.email }}</span>
      </div>
      <button type="button" class="logout" (click)="logout()" data-testid="logout">
        Sign out
      </button>
    </div>
  </aside>

  <main class="admin-content">
    <router-outlet />
  </main>

  <nav class="tabbar" aria-label="Admin sections">
    <a routerLink="/admin/jobs" routerLinkActive="active" class="tab">
      <span aria-hidden="true">\u27F3</span><span>Jobs</span>
    </a>
    <a routerLink="/admin/settings" routerLinkActive="active" class="tab">
      <span aria-hidden="true">\u2699</span><span>Settings</span>
    </a>
    <button type="button" class="tab" (click)="logout()">
      <span aria-hidden="true">\u23FB</span><span>Sign out</span>
    </button>
  </nav>
</div>
`, styles: ["/* src/app/admin-shell/admin-shell.component.css */\n:host {\n  display: block;\n}\n.admin-layout {\n  display: grid;\n  grid-template-columns: 248px minmax(0, 1fr);\n  min-height: 100svh;\n  min-height: 100vh;\n}\n.rail {\n  background: var(--color-surface);\n  border-right: 1px solid var(--color-border);\n  display: flex;\n  flex-direction: column;\n  padding: var(--space-4);\n  position: sticky;\n  top: 0;\n  height: 100vh;\n}\n.rail-brand {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-2) var(--space-2) var(--space-5);\n}\n.brand-mark {\n  width: 28px;\n  height: 28px;\n  border-radius: var(--radius-sm);\n  background:\n    linear-gradient(\n      135deg,\n      var(--temp-c1),\n      var(--temp-c4),\n      var(--temp-c6));\n  flex: none;\n}\n.rail-title {\n  font-weight: 700;\n  font-size: 0.95rem;\n}\n.rail-nav {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n  flex: 1;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: 11px 12px;\n  min-height: 44px;\n  border-radius: var(--radius-sm);\n  color: var(--color-text-muted);\n  font-size: 0.88rem;\n  font-weight: 500;\n  transition: background 0.12s ease, color 0.12s ease;\n}\n.nav-item:hover {\n  background: var(--color-surface-2);\n  color: var(--color-text);\n}\n.nav-item.active {\n  background: var(--color-primary-soft);\n  color: var(--color-primary);\n  font-weight: 600;\n}\n.nav-ico {\n  font-size: 1rem;\n  width: 18px;\n  text-align: center;\n}\n.rail-foot {\n  border-top: 1px solid var(--color-border);\n  padding-top: var(--space-3);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.who {\n  display: flex;\n  flex-direction: column;\n  padding: 0 var(--space-2);\n}\n.who-name {\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n.who-email {\n  font-size: 0.72rem;\n  color: var(--color-text-faint);\n}\n.logout {\n  appearance: none;\n  border: 1px solid var(--color-border);\n  background: var(--color-surface-2);\n  color: var(--color-text-muted);\n  font-size: 0.82rem;\n  font-weight: 600;\n  padding: 10px;\n  min-height: 44px;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n}\n.logout:hover {\n  background: var(--color-surface-3);\n  color: var(--color-text);\n}\n.admin-content {\n  min-width: 0;\n  padding: var(--space-6);\n  overflow-y: auto;\n  overscroll-behavior-y: contain;\n}\n.tabbar {\n  display: none;\n}\n@media (max-width: 768px) {\n  .admin-layout {\n    grid-template-columns: 1fr;\n  }\n  .rail {\n    display: none;\n  }\n  .admin-content {\n    padding: var(--space-4);\n    padding-bottom: calc(72px + var(--safe-bottom));\n  }\n  .tabbar {\n    display: flex;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 20;\n    background: var(--color-surface);\n    border-top: 1px solid var(--color-border);\n    padding-bottom: var(--safe-bottom);\n  }\n  .tab {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 2px;\n    min-height: 56px;\n    border: none;\n    background: transparent;\n    color: var(--color-text-muted);\n    font-size: 0.68rem;\n    cursor: pointer;\n  }\n  .tab span:first-child {\n    font-size: 1.1rem;\n  }\n  .tab.active {\n    color: var(--color-primary);\n  }\n  .tab:active {\n    background: var(--color-surface-2);\n  }\n}\n/*# sourceMappingURL=admin-shell.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminShellComponent, { className: "AdminShellComponent", filePath: "src/app/admin-shell/admin-shell.component.ts", lineNumber: 13 });
})();
export {
  AdminShellComponent
};
//# sourceMappingURL=chunk-I6YO2AWW.js.map
