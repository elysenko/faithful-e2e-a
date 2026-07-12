import {
  AuthService,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-UKEMHCBE.js";
import {
  CommonModule,
  Router,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KNIBP2U6.js";

// src/app/features/signup/signup.component.ts
function SignupComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Name is required.");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Please enter a valid email.");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Password must be at least 6 characters.");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Passwords do not match.");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_32_Template(rf, ctx) {
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
var SignupComponent = class _SignupComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.loading = false;
    this.errorMessage = "";
    this.signupForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required]]
    }, { validators: [this.passwordsMatch] });
  }
  passwordsMatch(group) {
    const password = group.get("password")?.value;
    const confirm = group.get("confirmPassword")?.value;
    return password && confirm && password !== confirm ? { mismatch: true } : null;
  }
  onSubmit() {
    if (this.signupForm.invalid)
      return;
    this.loading = true;
    this.errorMessage = "";
    const { email, password } = this.signupForm.value;
    this.authService.signup(email, password).subscribe({
      next: () => this.router.navigate(["/tasks"]),
      error: (err) => {
        this.errorMessage = err?.error?.message ?? "Could not create account. Please try again.";
        this.loading = false;
      }
    });
  }
  demoLogin() {
    this.authService.demoLogin();
  }
  static {
    this.\u0275fac = function SignupComponent_Factory(t) {
      return new (t || _SignupComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 8, consts: [[1, "auth-screen"], [1, "auth-card"], [1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "auth-title"], [1, "auth-subtitle"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name", "autocomplete", "name", "data-testid", "signup-name", "placeholder", "Jane Doe"], [1, "error"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "data-testid", "signup-email", "placeholder", "you@example.com"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "new-password", "data-testid", "signup-password", "placeholder", "At least 6 characters"], ["for", "confirmPassword"], ["id", "confirmPassword", "type", "password", "formControlName", "confirmPassword", "autocomplete", "new-password", "data-testid", "signup-confirm", "placeholder", "Re-enter your password"], ["role", "alert", 1, "form-error"], ["type", "submit", "data-testid", "signup-submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "auth-alt"], ["routerLink", "/login"], ["type", "button", "data-testid", "demo-login", 1, "demo-link", 3, "click"]], template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u2713");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Task Tracker");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h1", 5);
        \u0275\u0275text(8, "Create your account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, "The first account created becomes the workspace admin.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "form", 7);
        \u0275\u0275listener("ngSubmit", function SignupComponent_Template_form_ngSubmit_11_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(12, "div", 8)(13, "label", 9);
        \u0275\u0275text(14, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 10);
        \u0275\u0275template(16, SignupComponent_Conditional_16_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 8)(18, "label", 12);
        \u0275\u0275text(19, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 13);
        \u0275\u0275template(21, SignupComponent_Conditional_21_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 8)(23, "label", 14);
        \u0275\u0275text(24, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "input", 15);
        \u0275\u0275template(26, SignupComponent_Conditional_26_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 8)(28, "label", 16);
        \u0275\u0275text(29, "Confirm password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "input", 17);
        \u0275\u0275template(31, SignupComponent_Conditional_31_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, SignupComponent_Conditional_32_Template, 2, 1, "div", 18);
        \u0275\u0275elementStart(33, "button", 19);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "p", 20);
        \u0275\u0275text(36, " Already have an account? ");
        \u0275\u0275elementStart(37, "a", 21);
        \u0275\u0275text(38, "Sign in");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "button", 22);
        \u0275\u0275listener("click", function SignupComponent_Template_button_click_39_listener() {
          return ctx.demoLogin();
        });
        \u0275\u0275text(40, " Skip signup \u2014 Demo Mode ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance(11);
        \u0275\u0275property("formGroup", ctx.signupForm);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(16, ((tmp_1_0 = ctx.signupForm.get("name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.signupForm.get("name")) == null ? null : tmp_1_0.touched) ? 16 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(21, ((tmp_2_0 = ctx.signupForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.signupForm.get("email")) == null ? null : tmp_2_0.touched) ? 21 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(26, ((tmp_3_0 = ctx.signupForm.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.signupForm.get("password")) == null ? null : tmp_3_0.touched) ? 26 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(31, (ctx.signupForm.errors == null ? null : ctx.signupForm.errors["mismatch"]) && ((tmp_4_0 = ctx.signupForm.get("confirmPassword")) == null ? null : tmp_4_0.touched) ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(32, ctx.errorMessage ? 32 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.signupForm.invalid || ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Creating account\u2026" : "Create account", " ");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth-screen[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100svh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-5) var(--space-4);\n  padding-bottom: calc(var(--space-5) + var(--safe-bottom));\n  background:\n    linear-gradient(\n      160deg,\n      var(--color-primary-soft),\n      var(--color-bg) 55%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  padding: var(--space-6) var(--space-5);\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-bottom: var(--space-5);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-md);\n  background: var(--color-primary);\n  color: var(--color-on-primary);\n  font-weight: 700;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: var(--font-size-lg);\n  color: var(--color-text);\n}\n.auth-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n  font-weight: 700;\n  margin-bottom: var(--space-1);\n}\n.auth-subtitle[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: var(--font-size-sm);\n  margin-bottom: var(--space-5);\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n  margin-bottom: var(--space-4);\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--color-text);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 0 var(--space-3);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-md);\n  background: var(--color-surface);\n  color: var(--color-text);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 3px var(--color-primary-soft);\n}\n.error[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n  font-size: var(--font-size-xs);\n}\n.form-error[_ngcontent-%COMP%] {\n  background: var(--color-danger-soft);\n  color: var(--color-danger-hover);\n  border-radius: var(--radius-sm);\n  padding: var(--space-2) var(--space-3);\n  font-size: var(--font-size-sm);\n  margin-bottom: var(--space-4);\n}\n.btn[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 48px;\n  border: none;\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-md);\n  font-weight: 600;\n  transition: background-color 0.15s ease, transform 0.05s ease;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: var(--color-on-primary);\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-primary-hover);\n}\n.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  background: var(--color-primary-active);\n  transform: scale(0.99);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.auth-alt[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: var(--font-size-sm);\n  color: var(--color-text-muted);\n  margin-top: var(--space-4);\n}\n.demo-link[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: var(--space-4);\n  padding: var(--space-2);\n  min-height: 44px;\n  background: transparent;\n  border: none;\n  color: var(--color-text-subtle);\n  font-size: var(--font-size-sm);\n  text-decoration: underline;\n}\n.demo-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=signup.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/features/signup/signup.component.ts", lineNumber: 21 });
})();
export {
  SignupComponent
};
//# sourceMappingURL=signup.component-RBDZ2MCR.js.map
