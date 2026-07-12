import {
  AuthService
} from "./chunk-WUH3AZNU.js";
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
} from "./chunk-O3VZIQDQ.js";
import {
  Router,
  RouterLink
} from "./chunk-BEE4MSIP.js";
import {
  CommonModule,
  signal,
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
} from "./chunk-VVK4PSXI.js";

// src/app/pages/login/login.component.ts
function LoginComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "A valid email is required");
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
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
var LoginComponent = class _LoginComponent {
  constructor(fb, auth, router) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.loading = signal(false);
    this.errorMessage = signal("");
    this.form = this.fb.group({
      email: ["admin@minierp.dev", [Validators.required, Validators.email]],
      password: ["demo1234", [Validators.required]]
    });
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.errorMessage.set("");
    const { email, password } = this.form.getRawValue();
    this.auth.login(email, password).subscribe({
      next: () => this.router.navigate(["/dashboard"]),
      error: () => {
        this.errorMessage.set("Invalid credentials. Please try again.");
        this.loading.set(false);
      }
    });
  }
  demoLogin() {
    this.auth.demoLogin();
  }
  loginAs(role) {
    this.auth.loginAs(role);
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 6, consts: [[1, "auth-wrap"], [1, "auth-card", "card"], [1, "auth-brand"], [1, "auth-mark"], [1, "auth-name"], [1, "muted", "center"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "placeholder", "you@company.com", 1, "input"], [1, "field-error"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "current-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "input"], [1, "alert", "alert-danger"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "small", "center", 2, "margin-top", "var(--sp-4)"], ["routerLink", "/signup"], [1, "divider"], [1, "text-xs", "muted", "center", 2, "margin-bottom", "var(--sp-2)"], [1, "role-grid"], [1, "btn", "btn-outline", "btn-sm", 3, "click"], [1, "link-btn", "demo-skip", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "M");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "MiniERP");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "Sign in to your ERP workspace");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "form", 6);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
          return ctx.submit();
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
        \u0275\u0275text(24, " No account? ");
        \u0275\u0275elementStart(25, "a", 16);
        \u0275\u0275text(26, "Create one");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(27, "hr", 17);
        \u0275\u0275elementStart(28, "p", 18);
        \u0275\u0275text(29, "Quick demo sign-in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 19)(31, "button", 20);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_31_listener() {
          return ctx.loginAs("admin");
        });
        \u0275\u0275text(32, "Admin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "button", 20);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_33_listener() {
          return ctx.loginAs("sales");
        });
        \u0275\u0275text(34, "Sales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "button", 20);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_35_listener() {
          return ctx.loginAs("purchasing");
        });
        \u0275\u0275text(36, "Purchasing");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "button", 21);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_37_listener() {
          return ctx.demoLogin();
        });
        \u0275\u0275text(38, "Skip login \u2014 Demo Mode \u2192");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(9);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(14, ((tmp_1_0 = ctx.form.get("email")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.form.get("email")) == null ? null : tmp_1_0.touched) ? 14 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(19, ((tmp_2_0 = ctx.form.get("password")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("password")) == null ? null : tmp_2_0.touched) ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(20, ctx.errorMessage() ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Signing in\u2026" : "Sign in", " ");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth-wrap[_ngcontent-%COMP%] {\n  min-height: 100svh;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--sp-5);\n  background:\n    linear-gradient(\n      160deg,\n      var(--color-steel) 0%,\n      var(--color-steel-dark) 100%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: var(--sp-6);\n}\n.auth-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--sp-2);\n  margin-bottom: var(--sp-2);\n}\n.auth-mark[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius);\n  background: var(--color-brand);\n  color: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: var(--fs-lg);\n}\n.auth-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  font-weight: 800;\n}\n.role-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: var(--sp-2);\n}\n.demo-skip[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: center;\n  margin-top: var(--sp-4);\n  color: var(--color-muted);\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/login/login.component.ts", lineNumber: 15 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-X5IPEG2I.js.map
