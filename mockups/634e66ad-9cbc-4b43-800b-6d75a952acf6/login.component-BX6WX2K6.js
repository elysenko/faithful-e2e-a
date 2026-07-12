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
} from "./chunk-7F3Y7YLT.js";
import {
  AuthService
} from "./chunk-CVPORU2Z.js";
import {
  Router,
  RouterLink
} from "./chunk-VMQX45X4.js";
import {
  CommonModule,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VZ6O3Y2G.js";

// src/app/features/login/login.component.ts
function LoginComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "Valid email is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
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
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.loading = false;
    this.errorMessage = "";
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
  }
  onSubmit() {
    if (this.loginForm.invalid)
      return;
    this.loading = true;
    this.errorMessage = "";
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: () => this.router.navigate(["/projects"]),
      error: (err) => {
        this.errorMessage = err?.error?.message ?? "Invalid credentials. Please try again.";
        this.loading = false;
      }
    });
  }
  demoMode() {
    this.authService.demoLogin();
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 6, consts: [[1, "auth-page"], [1, "auth-card", "card"], [1, "auth-brand"], [1, "brand-mark"], [1, "auth-tagline"], [3, "ngSubmit", "formGroup"], [1, "field"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "data-testid", "login-email", "placeholder", "you@company.com"], [1, "error"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "current-password", "data-testid", "login-password", "placeholder", "Enter your password"], [1, "error", "form-error"], ["type", "submit", "data-testid", "login-submit", 1, "btn", "btn-primary", "full", 3, "disabled"], ["type", "button", 1, "demo-link", 3, "click"], [1, "auth-alt"], ["routerLink", "/signup"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u25B2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "SiteView");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "Construction project visualization & site oversight");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "form", 5);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(10, "div", 6)(11, "label", 7);
        \u0275\u0275text(12, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 8);
        \u0275\u0275template(14, LoginComponent_Conditional_14_Template, 2, 0, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 6)(16, "label", 10);
        \u0275\u0275text(17, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 11);
        \u0275\u0275template(19, LoginComponent_Conditional_19_Template, 2, 0, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, LoginComponent_Conditional_20_Template, 2, 1, "div", 12);
        \u0275\u0275elementStart(21, "button", 13);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "button", 14);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_23_listener() {
          return ctx.demoMode();
        });
        \u0275\u0275text(24, " Skip login \u2014 explore Demo Mode ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p", 15);
        \u0275\u0275text(26, " New to SiteView? ");
        \u0275\u0275elementStart(27, "a", 16);
        \u0275\u0275text(28, "Create an account");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(9);
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(14, ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.touched) ? 14 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(19, ((tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.touched) ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(20, ctx.errorMessage ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Signing in\u2026" : "Sign in", " ");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100svh;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-5);\n  background:\n    radial-gradient(\n      circle at 20% 15%,\n      var(--color-primary-soft),\n      transparent 45%),\n    radial-gradient(\n      circle at 85% 85%,\n      var(--color-accent-soft),\n      transparent 40%),\n    var(--color-bg);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: var(--space-6);\n}\n.auth-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--space-2);\n  margin-bottom: var(--space-1);\n}\n.auth-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  color: var(--color-primary);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  color: var(--color-accent);\n}\n.auth-tagline[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--color-text-muted);\n  font-size: var(--fs-sm);\n  margin-bottom: var(--space-5);\n}\n.field[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n}\n.form-error[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-3);\n}\n.btn.full[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: var(--space-2);\n}\n.demo-link[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: var(--space-4);\n  padding: var(--space-2);\n  color: var(--color-text-muted);\n  font-size: var(--fs-sm);\n  text-align: center;\n  border-radius: var(--radius-sm);\n}\n.demo-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-inset);\n  color: var(--color-text);\n}\n.auth-alt[_ngcontent-%COMP%] {\n  margin-top: var(--space-5);\n  text-align: center;\n  font-size: var(--fs-sm);\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-BX6WX2K6.js.map
