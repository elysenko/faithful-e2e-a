import {
  AuthService
} from "./chunk-REEGUVE2.js";
import {
  AvatarComponent
} from "./chunk-2YFTR47U.js";
import {
  CommonModule,
  Router,
  __spreadProps,
  __spreadValues,
  inject,
  signal,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-4ZKGBDGO.js";

// src/app/features/settings/settings.component.ts
var _forTrack0 = ($index, $item) => $item.key;
function SettingsComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 21)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 22);
    \u0275\u0275listener("click", function SettingsComponent_For_23_Template_button_click_6_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(t_r2.key));
    });
    \u0275\u0275element(7, "span", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.desc);
    \u0275\u0275advance();
    \u0275\u0275classProp("on", t_r2.on);
    \u0275\u0275attribute("aria-checked", t_r2.on)("aria-label", t_r2.label);
  }
}
function SettingsComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 12)(1, "h2", 13);
    \u0275\u0275text(2, "Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 24);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_24_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openAdmin());
    });
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 9);
    \u0275\u0275element(6, "path", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span", 27)(8, "strong");
    \u0275\u0275text(9, "Moderation dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small", 6);
    \u0275\u0275text(11, "Review reports and manage members");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 9);
    \u0275\u0275element(14, "path", 10);
    \u0275\u0275elementEnd()()()();
  }
}
var SettingsComponent = class _SettingsComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.user = this.auth.user;
    this.isAdmin = this.auth.isAdmin;
    this.preferences = signal([
      { key: "discoverable", label: "Show me in Discover", desc: "Pause to hide your profile from the feed.", on: true },
      { key: "onlineStatus", label: "Show active status", desc: "Let matches see when you were last online.", on: true },
      { key: "readReceipts", label: "Read receipts", desc: "Show matches when you have read their message.", on: false },
      { key: "notifications", label: "Match & message alerts", desc: "Get notified about new matches and messages.", on: true }
    ]);
  }
  toggle(key) {
    this.preferences.update((list) => list.map((t) => t.key === key ? __spreadProps(__spreadValues({}, t), { on: !t.on }) : t));
  }
  editProfile() {
    this.router.navigate(["/profile/edit"]);
  }
  openAdmin() {
    this.router.navigate(["/admin"]);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 7, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "card", "account", 3, "click"], [3, "name", "size"], [1, "account-meta"], [1, "muted"], [1, "subtle"], ["aria-hidden", "true", 1, "chevron"], ["viewBox", "0 0 24 24", "fill", "none"], ["d", "m8.25 4.5 7.5 7.5-7.5 7.5", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "btn", "btn-outline", "btn-block", "edit-btn", 3, "click"], [1, "group"], [1, "group-title"], [1, "card", "toggle-list"], [1, "toggle-row"], [1, "card", "links"], [1, "link-row"], [1, "link-row", "danger"], [1, "btn", "btn-ghost", "btn-block", "signout", 3, "click"], [1, "version", "subtle", "center"], [1, "toggle-text"], ["role", "switch", 1, "switch", 3, "click"], [1, "knob"], [1, "card", "admin-row", 3, "click"], [1, "admin-icon"], ["d", "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", "stroke", "currentColor", "stroke-width", "1.6", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "admin-text"], [1, "chevron"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Settings");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "section", 3);
        \u0275\u0275listener("click", function SettingsComponent_Template_section_click_4_listener() {
          return ctx.editProfile();
        });
        \u0275\u0275element(5, "app-avatar", 4);
        \u0275\u0275elementStart(6, "div", 5)(7, "strong");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "small", 6);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "small", 7);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(14, "svg", 9);
        \u0275\u0275element(15, "path", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(16, "button", 11);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_16_listener() {
          return ctx.editProfile();
        });
        \u0275\u0275text(17, "Edit profile & photos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "section", 12)(19, "h2", 13);
        \u0275\u0275text(20, "Discovery & privacy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 14);
        \u0275\u0275repeaterCreate(22, SettingsComponent_For_23_Template, 8, 6, "div", 15, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(24, SettingsComponent_Conditional_24_Template, 15, 0, "section", 12);
        \u0275\u0275elementStart(25, "section", 12)(26, "h2", 13);
        \u0275\u0275text(27, "Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 16)(29, "button", 17);
        \u0275\u0275text(30, "Help & support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "button", 17);
        \u0275\u0275text(32, "Privacy policy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "button", 18);
        \u0275\u0275text(34, "Delete account");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "button", 19);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_35_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(36, "Sign out");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "p", 20);
        \u0275\u0275text(38, "Rapport \xB7 v0.1.0 mockup");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance(5);
        \u0275\u0275property("name", ((tmp_0_0 = ctx.user()) == null ? null : tmp_0_0.name) || "You")("size", 56);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(((tmp_2_0 = ctx.user()) == null ? null : tmp_2_0.name) || "You");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", (tmp_3_0 = ctx.user()) == null ? null : tmp_3_0.jobTitle, " \xB7 ", (tmp_3_0 = ctx.user()) == null ? null : tmp_3_0.employer, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_4_0 = ctx.user()) == null ? null : tmp_4_0.email);
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.preferences());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(24, ctx.isAdmin() ? 24 : -1);
      }
    }, dependencies: [CommonModule, AvatarComponent], styles: ["\n\n.account[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-4);\n  cursor: pointer;\n}\n.account-meta[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.account-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n}\n.account-meta[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chevron[_ngcontent-%COMP%] {\n  color: var(--color-text-subtle);\n}\n.chevron[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  margin-top: var(--space-3);\n}\n.group[_ngcontent-%COMP%] {\n  margin-top: var(--space-6);\n}\n.group-title[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--color-text-subtle);\n  margin-bottom: var(--space-3);\n}\n.toggle-list[_ngcontent-%COMP%] {\n  padding: var(--space-2) var(--space-4);\n}\n.toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: var(--space-3) 0;\n  min-height: 56px;\n}\n.toggle-row[_ngcontent-%COMP%]    + .toggle-row[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-border);\n}\n.toggle-text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.toggle-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n}\n.switch[_ngcontent-%COMP%] {\n  flex: none;\n  width: 48px;\n  height: 28px;\n  border-radius: var(--radius-full);\n  border: none;\n  background: var(--color-border-strong);\n  position: relative;\n  transition: background 0.18s ease;\n  padding: 0;\n}\n.switch.on[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n}\n.knob[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #fff;\n  box-shadow: var(--shadow-sm);\n  transition: transform 0.18s ease;\n}\n.switch.on[_ngcontent-%COMP%]   .knob[_ngcontent-%COMP%] {\n  transform: translateX(20px);\n}\n.admin-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  width: 100%;\n  padding: var(--space-4);\n  text-align: left;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n}\n.admin-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius-md);\n  background: var(--color-primary-soft);\n  color: var(--color-primary);\n}\n.admin-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.admin-text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.links[_ngcontent-%COMP%] {\n  padding: 0 var(--space-4);\n}\n.link-row[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: left;\n  background: none;\n  border: none;\n  min-height: 52px;\n  font-size: var(--text-base);\n  color: var(--color-text);\n  font-weight: 500;\n}\n.link-row[_ngcontent-%COMP%]    + .link-row[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-border);\n}\n.link-row.danger[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n.signout[_ngcontent-%COMP%] {\n  margin-top: var(--space-6);\n}\n.version[_ngcontent-%COMP%] {\n  margin-top: var(--space-3);\n  font-size: var(--text-xs);\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/features/settings/settings.component.ts", lineNumber: 21 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=settings.component-7I7NXCMO.js.map
