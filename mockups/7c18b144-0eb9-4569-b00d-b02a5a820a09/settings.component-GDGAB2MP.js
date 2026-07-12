import {
  AuthService
} from "./chunk-WP3WOTWG.js";
import {
  RouterLink
} from "./chunk-Y5LH5DTG.js";
import "./chunk-QKG44OY5.js";
import "./chunk-BTWCFMW5.js";
import {
  CheckboxControlValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-Y254YSMO.js";
import {
  CommonModule,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UGB4PC52.js";

// src/app/features/settings/settings.component.ts
function SettingsComponent_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Admin");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3);
    \u0275\u0275element(1, "img", 13);
    \u0275\u0275elementStart(2, "div", 14)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 15);
    \u0275\u0275text(6, "Signed in with LinkedIn");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, SettingsComponent_Conditional_4_Conditional_7_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", u_r1.pictureUrl, \u0275\u0275sanitizeUrl)("alt", u_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(7, ctx_r1.isAdmin() ? 7 : -1);
  }
}
function SettingsComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "h2", 5);
    \u0275\u0275text(2, "Moderation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 17)(4, "span");
    \u0275\u0275text(5, "Admin dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 9);
    \u0275\u0275text(7, "\u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 18)(9, "span");
    \u0275\u0275text(10, "Reports queue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 9);
    \u0275\u0275text(12, "\u203A");
    \u0275\u0275elementEnd()()();
  }
}
var SettingsComponent = class _SettingsComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.user = this.auth.user;
    this.isAdmin = this.auth.isAdmin;
    this.notifyMatches = signal(true);
    this.notifyMessages = signal(true);
    this.showDistance = signal(true);
  }
  logout() {
    this.auth.logout();
  }
  static {
    this.\u0275fac = function SettingsComponent_Factory(t) {
      return new (t || _SettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 44, vars: 5, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "card", "account"], [1, "card", "group"], [1, "group-title"], [1, "row"], ["type", "checkbox", 1, "switch", 3, "ngModelChange", "ngModel"], ["routerLink", "/profile/edit", 1, "row", "link-row"], [1, "chev"], ["href", "#", 1, "row", "link-row"], ["data-testid", "logout", 1, "btn", "btn-outline", "btn-block", "logout", 3, "click"], [1, "muted", "version"], ["width", "56", "height", "56", 3, "src", "alt"], [1, "account-meta"], [1, "muted"], [1, "badge", "badge-admin"], ["routerLink", "/admin/moderation", 1, "row", "link-row"], ["routerLink", "/admin/reports", 1, "row", "link-row"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Settings");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, SettingsComponent_Conditional_4_Template, 8, 4, "section", 3);
        \u0275\u0275elementStart(5, "section", 4)(6, "h2", 5);
        \u0275\u0275text(7, "Notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "label", 6)(9, "span");
        \u0275\u0275text(10, "New match alerts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "input", 7);
        \u0275\u0275listener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_11_listener($event) {
          return ctx.notifyMatches.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "label", 6)(13, "span");
        \u0275\u0275text(14, "New message alerts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "input", 7);
        \u0275\u0275listener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_15_listener($event) {
          return ctx.notifyMessages.set($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "section", 4)(17, "h2", 5);
        \u0275\u0275text(18, "Discovery");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "label", 6)(20, "span");
        \u0275\u0275text(21, "Show my distance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 7);
        \u0275\u0275listener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_22_listener($event) {
          return ctx.showDistance.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "a", 8)(24, "span");
        \u0275\u0275text(25, "Edit profile & photos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 9);
        \u0275\u0275text(27, "\u203A");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(28, SettingsComponent_Conditional_28_Template, 13, 0, "section", 4);
        \u0275\u0275elementStart(29, "section", 4)(30, "a", 10)(31, "span");
        \u0275\u0275text(32, "Community guidelines");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 9);
        \u0275\u0275text(34, "\u203A");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "a", 10)(36, "span");
        \u0275\u0275text(37, "Privacy policy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span", 9);
        \u0275\u0275text(39, "\u203A");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "button", 11);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_40_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(41, "Log out");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "p", 12);
        \u0275\u0275text(43, "ProLink \xB7 v0.1.0 mockup");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(4);
        \u0275\u0275conditional(4, (tmp_0_0 = ctx.user()) ? 4 : -1, tmp_0_0);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngModel", ctx.notifyMatches());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.notifyMessages());
        \u0275\u0275advance(7);
        \u0275\u0275property("ngModel", ctx.showDistance());
        \u0275\u0275advance(6);
        \u0275\u0275conditional(28, ctx.isAdmin() ? 28 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, CheckboxControlValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.account[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-4);\n  margin-bottom: var(--space-4);\n}\n.account[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: var(--radius-pill);\n  object-fit: cover;\n}\n.account-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.account-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n}\n.group[_ngcontent-%COMP%] {\n  padding: var(--space-2) var(--space-4);\n  margin-bottom: var(--space-4);\n}\n.group-title[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: var(--color-text-faint);\n  padding: var(--space-3) 0 var(--space-1);\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 52px;\n  border-top: 1px solid var(--color-border);\n  font-size: var(--text-base);\n}\n.group-title[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%] {\n  border-top: none;\n}\n.link-row[_ngcontent-%COMP%]:active {\n  color: var(--color-primary);\n}\n.chev[_ngcontent-%COMP%] {\n  color: var(--color-text-faint);\n  font-size: var(--text-lg);\n}\n.switch[_ngcontent-%COMP%] {\n  appearance: none;\n  width: 46px;\n  height: 28px;\n  border-radius: var(--radius-pill);\n  background: var(--color-border-strong);\n  position: relative;\n  transition: background 0.15s ease;\n  flex: 0 0 auto;\n}\n.switch[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 22px;\n  height: 22px;\n  border-radius: var(--radius-pill);\n  background: var(--color-surface);\n  box-shadow: var(--shadow-sm);\n  transition: transform 0.15s ease;\n}\n.switch[_ngcontent-%COMP%]:checked {\n  background: var(--color-success);\n}\n.switch[_ngcontent-%COMP%]:checked::after {\n  transform: translateX(18px);\n}\n.logout[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n  color: var(--color-danger);\n  border-color: var(--color-danger);\n}\n.version[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: var(--text-xs);\n  margin-top: var(--space-4);\n}\n/*# sourceMappingURL=settings.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/features/settings/settings.component.ts", lineNumber: 14 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=settings.component-GDGAB2MP.js.map
