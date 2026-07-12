import {
  AuthService
} from "./chunk-D5BEFUJZ.js";
import "./chunk-K67ZUJ4Y.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-5HZNPSNZ.js";
import "./chunk-FXZPD3BS.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-N4ECCACJ.js";

// src/app/admin-login/admin-login.component.ts
function AdminLoginComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
var AdminLoginComponent = class _AdminLoginComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.email = signal("");
    this.password = signal("");
    this.error = signal(null);
    this.submitting = signal(false);
  }
  submit() {
    if (!this.email() || !this.password()) {
      this.error.set("Enter your admin email and password.");
      return;
    }
    this.error.set(null);
    this.submitting.set(true);
    this.auth.login(this.email(), this.password()).subscribe({
      next: () => this.submitting.set(false),
      error: () => {
        this.error.set("Invalid email or password.");
        this.submitting.set(false);
      }
    });
  }
  demoLogin() {
    this.auth.demoLogin();
  }
  static {
    this.\u0275fac = function AdminLoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminLoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLoginComponent, selectors: [["app-admin-login"]], decls: 21, vars: 3, consts: [["data-testid", "admin-login-page", 1, "login-page"], [1, "card", 3, "submit"], [1, "card-head"], ["aria-hidden", "true", 1, "brand-mark"], ["role", "alert", "data-testid", "login-error", 1, "form-error"], [1, "field"], ["type", "email", "autocomplete", "username", "placeholder", "admin@noaa-viz.local", "name", "email", "data-testid", "login-email", 3, "ngModelChange", "ngModel"], ["type", "password", "autocomplete", "current-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "name", "password", "data-testid", "login-password", 3, "ngModelChange", "ngModel"], ["type", "submit", "data-testid", "login-submit", 1, "submit"], ["type", "button", "data-testid", "demo-mode", 1, "demo-link", 3, "click"]], template: function AdminLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "form", 1);
        \u0275\u0275listener("submit", function AdminLoginComponent_Template_form_submit_1_listener($event) {
          $event.preventDefault();
          return ctx.submit();
        });
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275element(3, "span", 3);
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "Admin sign in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "Restricted console for ingestion & configuration.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, AdminLoginComponent_Conditional_8_Template, 2, 1, "p", 4);
        \u0275\u0275elementStart(9, "label", 5)(10, "span");
        \u0275\u0275text(11, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 6);
        \u0275\u0275listener("ngModelChange", function AdminLoginComponent_Template_input_ngModelChange_12_listener($event) {
          return ctx.email.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "label", 5)(14, "span");
        \u0275\u0275text(15, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 7);
        \u0275\u0275listener("ngModelChange", function AdminLoginComponent_Template_input_ngModelChange_16_listener($event) {
          return ctx.password.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "button", 8);
        \u0275\u0275text(18, "Sign in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 9);
        \u0275\u0275listener("click", function AdminLoginComponent_Template_button_click_19_listener() {
          return ctx.demoLogin();
        });
        \u0275\u0275text(20, " Skip login \u2014 Demo Mode ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.error() ? 8 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.email());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.password());
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100svh;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-5);\n  background:\n    radial-gradient(\n      120% 80% at 50% -10%,\n      var(--color-surface-3),\n      transparent),\n    var(--color-bg);\n}\n.card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 380px;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  padding: var(--space-6);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.card-head[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius);\n  margin-bottom: var(--space-3);\n  background:\n    linear-gradient(\n      135deg,\n      var(--temp-c1),\n      var(--temp-c4),\n      var(--temp-c6));\n}\n.card-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin: 0;\n}\n.card-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 0;\n  font-size: 0.85rem;\n  color: var(--color-text-muted);\n}\n.form-error[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.82rem;\n  color: var(--color-danger);\n  background: var(--color-danger-soft);\n  padding: var(--space-2) var(--space-3);\n  border-radius: var(--radius-sm);\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--color-text-muted);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  min-height: 44px;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-sm);\n  background: var(--color-surface);\n  color: var(--color-text);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-primary);\n}\n.submit[_ngcontent-%COMP%] {\n  appearance: none;\n  border: none;\n  background: var(--color-primary);\n  color: var(--color-on-primary);\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding: 12px;\n  min-height: 48px;\n  border-radius: var(--radius);\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.submit[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-hover);\n}\n.submit[_ngcontent-%COMP%]:active {\n  transform: scale(0.99);\n}\n.demo-link[_ngcontent-%COMP%] {\n  appearance: none;\n  border: none;\n  background: transparent;\n  color: var(--color-text-faint);\n  font-size: 0.78rem;\n  cursor: pointer;\n  padding: var(--space-2);\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n.demo-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=admin-login.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLoginComponent, [{
    type: Component,
    args: [{ selector: "app-admin-login", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [FormsModule], template: '<div class="login-page" data-testid="admin-login-page">\n  <form class="card" (submit)="$event.preventDefault(); submit()">\n    <div class="card-head">\n      <span class="brand-mark" aria-hidden="true"></span>\n      <h1>Admin sign in</h1>\n      <p>Restricted console for ingestion &amp; configuration.</p>\n    </div>\n\n    @if (error()) {\n      <p class="form-error" role="alert" data-testid="login-error">{{ error() }}</p>\n    }\n\n    <label class="field">\n      <span>Email</span>\n      <input\n        type="email"\n        autocomplete="username"\n        placeholder="admin@noaa-viz.local"\n        [ngModel]="email()"\n        (ngModelChange)="email.set($event)"\n        name="email"\n        data-testid="login-email"\n      />\n    </label>\n\n    <label class="field">\n      <span>Password</span>\n      <input\n        type="password"\n        autocomplete="current-password"\n        placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"\n        [ngModel]="password()"\n        (ngModelChange)="password.set($event)"\n        name="password"\n        data-testid="login-password"\n      />\n    </label>\n\n    <button type="submit" class="submit" data-testid="login-submit">Sign in</button>\n\n    <button\n      type="button"\n      class="demo-link"\n      (click)="demoLogin()"\n      data-testid="demo-mode"\n    >\n      Skip login \u2014 Demo Mode\n    </button>\n  </form>\n</div>\n', styles: ["/* src/app/admin-login/admin-login.component.css */\n:host {\n  display: block;\n}\n.login-page {\n  min-height: 100svh;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-5);\n  background:\n    radial-gradient(\n      120% 80% at 50% -10%,\n      var(--color-surface-3),\n      transparent),\n    var(--color-bg);\n}\n.card {\n  width: 100%;\n  max-width: 380px;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-lg);\n  padding: var(--space-6);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n}\n.card-head {\n  text-align: center;\n}\n.brand-mark {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius);\n  margin-bottom: var(--space-3);\n  background:\n    linear-gradient(\n      135deg,\n      var(--temp-c1),\n      var(--temp-c4),\n      var(--temp-c6));\n}\n.card-head h1 {\n  font-size: 1.3rem;\n  margin: 0;\n}\n.card-head p {\n  margin: var(--space-1) 0 0;\n  font-size: 0.85rem;\n  color: var(--color-text-muted);\n}\n.form-error {\n  margin: 0;\n  font-size: 0.82rem;\n  color: var(--color-danger);\n  background: var(--color-danger-soft);\n  padding: var(--space-2) var(--space-3);\n  border-radius: var(--radius-sm);\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n}\n.field span {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--color-text-muted);\n}\n.field input {\n  padding: 12px 14px;\n  min-height: 44px;\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-sm);\n  background: var(--color-surface);\n  color: var(--color-text);\n}\n.field input:focus {\n  border-color: var(--color-primary);\n}\n.submit {\n  appearance: none;\n  border: none;\n  background: var(--color-primary);\n  color: var(--color-on-primary);\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding: 12px;\n  min-height: 48px;\n  border-radius: var(--radius);\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.submit:hover {\n  background: var(--color-primary-hover);\n}\n.submit:active {\n  transform: scale(0.99);\n}\n.demo-link {\n  appearance: none;\n  border: none;\n  background: transparent;\n  color: var(--color-text-faint);\n  font-size: 0.78rem;\n  cursor: pointer;\n  padding: var(--space-2);\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n.demo-link:hover {\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=admin-login.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLoginComponent, { className: "AdminLoginComponent", filePath: "src/app/admin-login/admin-login.component.ts", lineNumber: 18 });
})();
export {
  AdminLoginComponent
};
//# sourceMappingURL=chunk-IQP5MVFU.js.map
