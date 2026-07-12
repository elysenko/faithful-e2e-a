import {
  AuthService
} from "./chunk-JCBFPNP7.js";
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
} from "./chunk-TBK5QOPH.js";
import {
  Router,
  RouterLink
} from "./chunk-GPQOFHD2.js";
import {
  CommonModule,
  inject,
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
} from "./chunk-2VXAXVQ7.js";

// src/app/pages/login/login.component.ts
function LoginComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "A valid email is required");
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
  constructor() {
    this.fb = inject(FormBuilder);
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.loading = false;
    this.errorMessage = "";
    this.loginForm = this.fb.group({
      email: ["shopper@demo", [Validators.required, Validators.email]],
      password: ["Demo1234!", [Validators.required]]
    });
  }
  onSubmit() {
    if (this.loginForm.invalid)
      return;
    this.loading = true;
    this.errorMessage = "";
    const { email, password } = this.loginForm.value;
    this.auth.login(email, password).subscribe({
      next: () => this.router.navigate(["/catalog"]),
      error: (err) => {
        this.errorMessage = err?.error?.message ?? "Invalid credentials. Please try again.";
        this.loading = false;
      }
    });
  }
  demoMode() {
    this.auth.demoLogin();
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 6, consts: [[1, "auth-page"], [1, "auth-card", "card"], [1, "auth-head"], [1, "brand-mark"], [1, "muted"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "data-testid", "login-email", "placeholder", "you@example.com"], [1, "error"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "current-password", "data-testid", "login-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], [1, "alert", "alert-danger"], ["type", "submit", "data-testid", "login-submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "auth-alt"], ["routerLink", "/signup"], [1, "demo-row"], ["type", "button", "data-testid", "demo-mode", 1, "link-btn", "demo-btn", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "IFS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "Sign in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "Intermountain Fuse Supply storefront");
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
        \u0275\u0275elementStart(23, "p", 14);
        \u0275\u0275text(24, " New here? ");
        \u0275\u0275elementStart(25, "a", 15);
        \u0275\u0275text(26, "Create an account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 16)(28, "button", 17);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_28_listener() {
          return ctx.demoMode();
        });
        \u0275\u0275text(29, " Skip login \u2014 Demo Mode ");
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
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100svh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--sp-4);\n  background:\n    linear-gradient(\n      160deg,\n      var(--color-steel-dark),\n      var(--color-steel));\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: var(--sp-6);\n}\n.auth-head[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: var(--sp-5);\n}\n.auth-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: var(--sp-3) 0 var(--sp-1);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  background: var(--color-brand);\n  color: #fff;\n  font-weight: 800;\n  border-radius: var(--radius);\n  letter-spacing: .04em;\n}\n.auth-alt[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: var(--sp-4);\n  font-size: var(--fs-sm);\n}\n.demo-row[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: var(--sp-5);\n  padding-top: var(--sp-4);\n  border-top: 1px solid var(--color-border);\n}\n.demo-btn[_ngcontent-%COMP%] {\n  color: var(--color-muted);\n  font-size: var(--fs-sm);\n  min-height: 44px;\n}\n/*# sourceMappingURL=auth.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-SI4OBCOI.js.map
