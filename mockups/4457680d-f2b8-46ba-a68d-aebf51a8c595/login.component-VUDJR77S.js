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

// src/app/features/login/login.component.ts
function LoginComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Please enter a valid email.");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Password is required.");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
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
      next: () => this.router.navigate(["/tasks"]),
      error: (err) => {
        this.errorMessage = err?.error?.message ?? "Invalid credentials. Please try again.";
        this.loading = false;
      }
    });
  }
  demoLogin() {
    this.authService.demoLogin();
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 6, consts: [[1, "auth-screen"], [1, "auth-card"], [1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "auth-title"], [1, "auth-subtitle"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "data-testid", "login-email", "placeholder", "you@example.com"], [1, "error"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "current-password", "data-testid", "login-password", "placeholder", "Enter your password"], ["role", "alert", 1, "form-error"], ["type", "submit", "data-testid", "login-submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "auth-alt"], ["routerLink", "/signup"], ["type", "button", "data-testid", "demo-login", 1, "demo-link", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u2713");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Task Tracker");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h1", 5);
        \u0275\u0275text(8, "Welcome back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, "Sign in to manage your tasks.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "form", 7);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(12, "div", 8)(13, "label", 9);
        \u0275\u0275text(14, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 10);
        \u0275\u0275template(16, LoginComponent_Conditional_16_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 8)(18, "label", 12);
        \u0275\u0275text(19, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 13);
        \u0275\u0275template(21, LoginComponent_Conditional_21_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, LoginComponent_Conditional_22_Template, 2, 1, "div", 14);
        \u0275\u0275elementStart(23, "button", 15);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "p", 16);
        \u0275\u0275text(26, " New here? ");
        \u0275\u0275elementStart(27, "a", 17);
        \u0275\u0275text(28, "Create an account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "button", 18);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_29_listener() {
          return ctx.demoLogin();
        });
        \u0275\u0275text(30, " Skip login \u2014 Demo Mode ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(11);
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(16, ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.touched) ? 16 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(21, ((tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.touched) ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(22, ctx.errorMessage ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Signing in\u2026" : "Sign in", " ");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth-screen[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100svh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-5) var(--space-4);\n  padding-bottom: calc(var(--space-5) + var(--safe-bottom));\n  background:\n    linear-gradient(\n      160deg,\n      var(--color-primary-soft),\n      var(--color-bg) 55%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  padding: var(--space-6) var(--space-5);\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-bottom: var(--space-5);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: var(--radius-md);\n  background: var(--color-primary);\n  color: var(--color-on-primary);\n  font-weight: 700;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: var(--font-size-lg);\n  color: var(--color-text);\n}\n.auth-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n  font-weight: 700;\n  margin-bottom: var(--space-1);\n}\n.auth-subtitle[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: var(--font-size-sm);\n  margin-bottom: var(--space-5);\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-1);\n  margin-bottom: var(--space-4);\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--color-text);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 0 var(--space-3);\n  border: 1px solid var(--color-border-strong);\n  border-radius: var(--radius-md);\n  background: var(--color-surface);\n  color: var(--color-text);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 3px var(--color-primary-soft);\n}\n.error[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n  font-size: var(--font-size-xs);\n}\n.form-error[_ngcontent-%COMP%] {\n  background: var(--color-danger-soft);\n  color: var(--color-danger-hover);\n  border-radius: var(--radius-sm);\n  padding: var(--space-2) var(--space-3);\n  font-size: var(--font-size-sm);\n  margin-bottom: var(--space-4);\n}\n.btn[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 48px;\n  border: none;\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-md);\n  font-weight: 600;\n  transition: background-color 0.15s ease, transform 0.05s ease;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: var(--color-on-primary);\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-primary-hover);\n}\n.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  background: var(--color-primary-active);\n  transform: scale(0.99);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.auth-alt[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: var(--font-size-sm);\n  color: var(--color-text-muted);\n  margin-top: var(--space-4);\n}\n.demo-link[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: var(--space-4);\n  padding: var(--space-2);\n  min-height: 44px;\n  background: transparent;\n  border: none;\n  color: var(--color-text-subtle);\n  font-size: var(--font-size-sm);\n  text-decoration: underline;\n}\n.demo-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-VUDJR77S.js.map
