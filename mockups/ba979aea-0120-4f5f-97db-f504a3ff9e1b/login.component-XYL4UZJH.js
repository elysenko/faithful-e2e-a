import {
  AuthService
} from "./chunk-PWDBURR2.js";
import "./chunk-YUSCFUEV.js";
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
} from "./chunk-ZBJUN66K.js";
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
} from "./chunk-RUEYC2SA.js";

// src/app/features/login/login.component.ts
function LoginComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "Valid email is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
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
        this.router.navigate(["/catalog"]);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 6, consts: [[1, "center-screen"], [1, "card", "auth-card"], [1, "muted"], [3, "ngSubmit", "formGroup"], [1, "field"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "data-testid", "login-email", "placeholder", "you@example.com"], [1, "error"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "current-password", "data-testid", "login-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], [1, "alert", "alert-error"], ["type", "submit", "data-testid", "login-submit", 1, "btn", "btn-block", 3, "disabled"], [1, "muted", "mt-4", 2, "text-align", "center"], ["routerLink", "/signup", "data-testid", "login-to-signup"], [1, "demo-row"], ["type", "button", "data-testid", "login-demo", 1, "btn-ghost", "demo-link", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Welcome back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Sign in to your storefront account.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "form", 3);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(7, "div", 4)(8, "label", 5);
        \u0275\u0275text(9, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "input", 6);
        \u0275\u0275template(11, LoginComponent_Conditional_11_Template, 2, 0, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 4)(13, "label", 8);
        \u0275\u0275text(14, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 9);
        \u0275\u0275template(16, LoginComponent_Conditional_16_Template, 2, 0, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, LoginComponent_Conditional_17_Template, 2, 1, "div", 10);
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "p", 12);
        \u0275\u0275text(21, " New here? ");
        \u0275\u0275elementStart(22, "a", 13);
        \u0275\u0275text(23, "Create an account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 14)(25, "button", 15);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_25_listener() {
          return ctx.demoMode();
        });
        \u0275\u0275text(26, " Skip login \u2014 Demo Mode ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(6);
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(11, ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.touched) ? 11 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(16, ((tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.touched) ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(17, ctx.errorMessage ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Signing in\u2026" : "Sign in", " ");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/login/login.component.ts", lineNumber: 13 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-XYL4UZJH.js.map
