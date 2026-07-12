import {
  AuthService
} from "./chunk-HSLVF4RF.js";
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
} from "./chunk-BFWEJMPJ.js";
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
} from "./chunk-JG2HHNQL.js";

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
      next: () => this.router.navigate(["/catalog"]),
      error: (err) => {
        this.errorMessage = err?.error?.message ?? "Invalid credentials. Please try again.";
        this.loading = false;
      }
    });
  }
  fillDemo(role) {
    this.loginForm.patchValue({
      email: role === "admin" ? "admin@demo" : "shopper@demo",
      password: "Demo1234!"
    });
  }
  demoLogin() {
    this.authService.demoLogin("admin");
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 6, consts: [[1, "auth-shell"], [1, "auth-card", "card"], [1, "auth-head"], [1, "auth-mark"], [1, "muted"], [3, "ngSubmit", "formGroup"], [1, "field"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "data-testid", "login-email", "placeholder", "you@example.com"], [1, "error"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "current-password", "data-testid", "login-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], ["data-testid", "login-error", 1, "error"], ["type", "submit", "data-testid", "login-submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "demo-hints"], ["type", "button", "data-testid", "fill-shopper", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["type", "button", "data-testid", "fill-admin", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "auth-alt"], ["routerLink", "/signup", "data-testid", "to-signup"], ["type", "button", "data-testid", "demo-mode", 1, "skip-link", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u{1F6CD}\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "Welcome back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "Sign in to your Storefront account");
        \u0275\u0275elementEnd()();
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
        \u0275\u0275elementStart(23, "div", 14)(24, "span", 4);
        \u0275\u0275text(25, "Quick fill:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 15);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_26_listener() {
          return ctx.fillDemo("shopper");
        });
        \u0275\u0275text(27, "Shopper");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 16);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_28_listener() {
          return ctx.fillDemo("admin");
        });
        \u0275\u0275text(29, "Admin");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "p", 17);
        \u0275\u0275text(31, " New here? ");
        \u0275\u0275elementStart(32, "a", 18);
        \u0275\u0275text(33, "Create an account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "button", 19);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_34_listener() {
          return ctx.demoLogin();
        });
        \u0275\u0275text(35, " Skip login \u2014 Demo Mode ");
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
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth-shell[_ngcontent-%COMP%] {\n  min-height: calc(100svh - var(--navbar-height));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-5) var(--space-4) calc(var(--space-8) + 64px);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  padding: var(--space-6);\n}\n.auth-head[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: var(--space-5);\n}\n.auth-mark[_ngcontent-%COMP%] {\n  font-size: 34px;\n}\n.auth-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: var(--space-2) 0 var(--space-1);\n  font-size: var(--text-2xl);\n}\n.field[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n}\n.demo-hints[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-top: var(--space-4);\n  font-size: var(--text-sm);\n}\n.auth-alt[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: var(--space-5);\n  color: var(--color-text-muted);\n  font-size: var(--text-sm);\n}\n.skip-link[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: var(--space-4);\n  padding: var(--space-2);\n  background: transparent;\n  border: none;\n  color: var(--color-text-subtle);\n  font-size: var(--text-sm);\n  text-decoration: underline;\n}\n.skip-link[_ngcontent-%COMP%]:active {\n  color: var(--color-primary);\n}\n/*# sourceMappingURL=auth.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-TYT2KKDH.js.map
