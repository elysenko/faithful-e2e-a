import {
  AuthService
} from "./chunk-D6W3QKTQ.js";
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
} from "./chunk-TMCGQTI4.js";
import {
  CommonModule,
  Router,
  RouterLink,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S3A6C3F5.js";

// src/app/features/login/login.component.ts
function LoginComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Enter a valid email address.");
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
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
var LoginComponent = class _LoginComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.loading = signal(false);
    this.errorMessage = signal("");
    this.loginForm = this.fb.group({
      email: ["demo@crm.test", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.errorMessage.set("");
    const { email, password } = this.loginForm.value;
    this.auth.login(email, password).subscribe({
      next: () => this.router.navigate(["/dashboard"]),
      error: (err) => {
        this.errorMessage.set(err?.error?.message ?? "Invalid credentials. Try Demo Mode below.");
        this.loading.set(false);
      }
    });
  }
  demoLogin() {
    this.auth.demoLogin();
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 6, consts: [[1, "auth-page"], [1, "auth-card", "card"], [1, "auth-brand"], [1, "auth-mark"], [1, "auth-title"], [1, "auth-heading"], [1, "auth-sub"], [3, "ngSubmit", "formGroup"], [1, "field"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "data-testid", "login-email", "placeholder", "you@company.com", 1, "input"], [1, "field-error"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "current-password", "data-testid", "login-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "input"], [1, "badge", "badge-error", "auth-alert"], ["type", "submit", "data-testid", "login-submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], ["type", "button", "data-testid", "demo-login", 1, "btn", "btn-block", "demo-btn", 3, "click"], [1, "auth-foot"], ["routerLink", "/signup"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u2601");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Nimbus CRM");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h1", 5);
        \u0275\u0275text(8, "Welcome back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, "Sign in to manage your accounts, deals and pipeline.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "form", 7);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(12, "div", 8)(13, "label", 9);
        \u0275\u0275text(14, "Work email");
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
        \u0275\u0275elementStart(25, "button", 16);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_25_listener() {
          return ctx.demoLogin();
        });
        \u0275\u0275text(26, " Skip login \u2014 explore Demo Mode ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "p", 17);
        \u0275\u0275text(28, "New to Nimbus? ");
        \u0275\u0275elementStart(29, "a", 18);
        \u0275\u0275text(30, "Create an account");
        \u0275\u0275elementEnd()()()();
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
        \u0275\u0275conditional(22, ctx.errorMessage() ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Signing in\u2026" : "Sign in", " ");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100svh;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-4);\n  background:\n    linear-gradient(\n      150deg,\n      var(--color-brand-darker),\n      var(--color-brand) 140%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: var(--space-6) var(--space-5);\n}\n.auth-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-bottom: var(--space-5);\n}\n.auth-mark[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.auth-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: var(--text-lg);\n  color: var(--color-brand-darker);\n}\n.auth-heading[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  margin-bottom: var(--space-1);\n}\n.auth-sub[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary);\n  font-size: var(--text-sm);\n  margin: 0 0 var(--space-5);\n}\n.auth-alert[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin-bottom: var(--space-4);\n}\n.demo-btn[_ngcontent-%COMP%] {\n  margin-top: var(--space-3);\n  border-style: dashed;\n  color: var(--color-text-secondary);\n}\n.auth-foot[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: var(--space-5) 0 0;\n  font-size: var(--text-sm);\n  color: var(--color-text-secondary);\n}\n/*# sourceMappingURL=auth.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-3C63TPV7.js.map
