import {
  AuthService
} from "./chunk-2Y3HOCZI.js";
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
} from "./chunk-56EPECIG.js";
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
} from "./chunk-UJBMV62H.js";

// src/app/features/login/login.component.ts
function LoginComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Valid email is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Password is required");
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
      next: () => {
        this.router.navigate(["/dashboard"]);
      },
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 6, consts: [[1, "auth-wrap"], [1, "auth-card", "card"], [1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "auth-title"], [1, "auth-sub", "muted"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "data-testid", "login-email", "placeholder", "you@company.com", 1, "input"], [1, "error-text"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "current-password", "data-testid", "login-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "input"], [1, "error-text", "form-error"], ["type", "submit", "data-testid", "login-submit", 1, "btn", "btn-primary", "block", 3, "disabled"], [1, "switch", "muted"], ["routerLink", "/signup", "data-testid", "login-to-signup"], ["type", "button", "data-testid", "login-demo", 1, "demo-btn", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u25C6");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Nimbus CRM");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h1", 5);
        \u0275\u0275text(8, "Welcome back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, "Sign in to your workspace");
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
          return ctx.demoMode();
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
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  min-height: 100svh;\n  background:\n    radial-gradient(\n      1200px 500px at 50% -10%,\n      var(--color-primary-soft),\n      transparent),\n    var(--color-bg);\n}\n.auth-wrap[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100svh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-5);\n  padding-bottom: calc(var(--space-5) + var(--safe-bottom));\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: var(--space-6);\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-bottom: var(--space-5);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: var(--text-xl);\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: var(--text-lg);\n}\n.auth-title[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n}\n.auth-sub[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 var(--space-5);\n}\n.block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-error[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-3);\n}\n.switch[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: var(--space-4);\n  font-size: var(--text-sm);\n}\n.demo-btn[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: var(--space-4);\n  padding: var(--space-2);\n  min-height: 44px;\n  background: none;\n  border: 1px dashed var(--color-border-strong);\n  border-radius: var(--radius-sm);\n  color: var(--color-text-muted);\n  font-size: var(--text-sm);\n  cursor: pointer;\n}\n.demo-btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  border-color: var(--color-primary);\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-N7R3LS4Y.js.map
