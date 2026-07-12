import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-FO3CHQ4J.js";
import {
  AuthService
} from "./chunk-HEI6KB7T.js";
import {
  CommonModule,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-A62IECG2.js";

// src/app/features/login/login.component.ts
function LoginComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Valid email is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
var LoginComponent = class _LoginComponent {
  constructor(fb, auth) {
    this.fb = fb;
    this.auth = auth;
    this.errorMessage = "";
    this.loginForm = this.fb.group({
      email: ["sales@nexuspower.com", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
  }
  onSubmit() {
    if (this.loginForm.invalid)
      return;
    this.auth.mockLogin(this.loginForm.value.email, "admin");
  }
  demo() {
    this.auth.demoLogin();
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 49, vars: 5, consts: [["data-testid", "app-ready", 1, "auth"], [1, "auth-hero"], [1, "hero-inner"], [1, "hero-brand"], [1, "mark"], [1, "hero-title"], [1, "hero-sub"], [1, "hero-points"], [1, "auth-panel"], [1, "auth-card"], [1, "muted"], [1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "data-testid", "login-email", "placeholder", "you@nexuspower.com"], [1, "err"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "current-password", "data-testid", "login-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], [1, "alert", "alert-danger"], ["type", "submit", "data-testid", "login-submit", 1, "btn", "btn-primary", "full", 3, "disabled"], ["data-testid", "demo-mode", 1, "btn", "demo-btn", 3, "click"], [1, "auth-links"], ["routerLink", "/signup"], [1, "dot"], ["routerLink", "/portal/login"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275text(5, "\u25C8");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Nexus Power");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h1", 5);
        \u0275\u0275text(8, "CRM & Customer Portal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, "Relationships, quotes, backlog, forecasting and commissions \u2014 for ABB power distribution through Anixter to your end customers.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "ul", 7)(12, "li");
        \u0275\u0275text(13, "Design-in protection & validation engine");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "li");
        \u0275\u0275text(15, "Delivery slippage & backlog aging");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "li");
        \u0275\u0275text(17, "Email intelligence in your voice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "li");
        \u0275\u0275text(19, "One-click customer QBRs");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(20, "div", 8)(21, "div", 9)(22, "h2");
        \u0275\u0275text(23, "Sign in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p", 10);
        \u0275\u0275text(25, "Welcome back. Sign in to your workspace.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "form", 11);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_26_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(27, "div", 12)(28, "label", 13);
        \u0275\u0275text(29, "Work email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "input", 14);
        \u0275\u0275template(31, LoginComponent_Conditional_31_Template, 2, 0, "span", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 12)(33, "label", 16);
        \u0275\u0275text(34, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(35, "input", 17);
        \u0275\u0275template(36, LoginComponent_Conditional_36_Template, 2, 0, "span", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275template(37, LoginComponent_Conditional_37_Template, 2, 1, "div", 18);
        \u0275\u0275elementStart(38, "button", 19);
        \u0275\u0275text(39, "Sign in");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "button", 20);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_40_listener() {
          return ctx.demo();
        });
        \u0275\u0275text(41, " Skip login \u2014 explore Demo Mode \u2192 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 21)(43, "a", 22);
        \u0275\u0275text(44, "Create an account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "span", 23);
        \u0275\u0275text(46, "\u2022");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "a", 24);
        \u0275\u0275text(48, "Customer portal");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(26);
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(31, ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.touched) ? 31 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(36, ((tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.touched) ? 36 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(37, ctx.errorMessage ? 37 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loginForm.invalid);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.1fr 1fr;\n  min-height: 100svh;\n  min-height: 100vh;\n}\n.auth-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      150deg,\n      var(--color-brand-900),\n      var(--color-brand-700));\n  color: var(--color-text-invert);\n  display: flex;\n  align-items: center;\n  padding: 48px;\n}\n.hero-inner[_ngcontent-%COMP%] {\n  max-width: 460px;\n}\n.hero-brand[_ngcontent-%COMP%] {\n  font-size: var(--fs-lg);\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.hero-brand[_ngcontent-%COMP%]   .mark[_ngcontent-%COMP%] {\n  color: var(--color-accent-500);\n  font-size: 26px;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  margin: 20px 0 12px;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  color: #c6d3de;\n  font-size: var(--fs-md);\n  line-height: 1.5;\n}\n.hero-points[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding-left: 18px;\n  color: #d7e2ec;\n  line-height: 2;\n}\n.auth-panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 24px;\n  background: var(--color-bg);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n}\n.auth-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.auth-form[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.err[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n  font-size: var(--fs-xs);\n  margin-top: 4px;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.demo-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 14px;\n  background: transparent;\n  border: 1px dashed var(--color-border-strong);\n  color: var(--color-text-muted);\n  font-weight: 600;\n}\n.demo-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-brand-500);\n  color: var(--color-brand-600);\n}\n.auth-links[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n  font-size: var(--fs-sm);\n}\n.auth-links[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  color: var(--color-text-faint);\n  margin: 0 10px;\n}\n@media (max-width: 860px) {\n  .auth[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .auth-hero[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-XH5RYY2F.js.map
