import {
  AuthService
} from "./chunk-VYGALJPV.js";
import {
  Router,
  RouterLink
} from "./chunk-AWJ4GWCF.js";
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
} from "./chunk-RWVAJSBE.js";
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
} from "./chunk-T5L7N4YZ.js";

// src/app/features/login/login.component.ts
function LoginComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Valid email is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
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
        this.router.navigate(["/workspaces"]);
      },
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 6, consts: [[1, "auth-wrap"], [1, "auth-card", "card"], [1, "auth-brand"], [1, "brand-mark"], [1, "auth-title"], [1, "auth-sub"], [3, "ngSubmit", "formGroup"], [1, "field"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "data-testid", "login-email", "placeholder", "you@example.com"], [1, "error"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "current-password", "data-testid", "login-password", "placeholder", "Enter your password"], [1, "error", "auth-error"], ["type", "submit", "data-testid", "login-submit", 1, "btn", "btn-primary", "auth-submit", 3, "disabled"], [1, "auth-alt"], ["routerLink", "/signup", "data-testid", "go-signup"], ["type", "button", "data-testid", "demo-login", 1, "demo-link", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "</>");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, "CodeDeck");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "Sign in to your developer workspace");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "form", 6);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(10, "div", 7)(11, "label", 8);
        \u0275\u0275text(12, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 9);
        \u0275\u0275template(14, LoginComponent_Conditional_14_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7)(16, "label", 11);
        \u0275\u0275text(17, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 12);
        \u0275\u0275template(19, LoginComponent_Conditional_19_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, LoginComponent_Conditional_20_Template, 2, 1, "div", 13);
        \u0275\u0275elementStart(21, "button", 14);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "p", 15);
        \u0275\u0275text(24, " New to CodeDeck? ");
        \u0275\u0275elementStart(25, "a", 16);
        \u0275\u0275text(26, "Create an account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "button", 17);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_27_listener() {
          return ctx.demoLogin();
        });
        \u0275\u0275text(28, " Skip login \u2014 Demo Mode ");
        \u0275\u0275elementEnd()()();
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
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth-wrap[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100svh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-5);\n  background:\n    radial-gradient(\n      1200px 500px at 50% -10%,\n      var(--color-brand-light),\n      transparent),\n    var(--color-bg);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  padding: var(--space-6);\n}\n.auth-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius);\n  background: var(--color-brand);\n  color: #fff;\n  font-family: var(--font-mono);\n}\n.auth-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fs-xl);\n}\n.auth-sub[_ngcontent-%COMP%] {\n  margin: var(--space-2) 0 var(--space-5);\n  color: var(--color-muted);\n}\n.auth-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: var(--space-2);\n}\n.auth-error[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-3);\n}\n.auth-alt[_ngcontent-%COMP%] {\n  margin: var(--space-4) 0 0;\n  text-align: center;\n  color: var(--color-muted);\n  font-size: var(--fs-sm);\n}\n.demo-link[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: var(--space-4);\n  padding: var(--space-2);\n  background: transparent;\n  border: none;\n  color: var(--color-faint);\n  font-size: var(--fs-sm);\n  font-family: inherit;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.demo-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-muted);\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-EHT52QYY.js.map
