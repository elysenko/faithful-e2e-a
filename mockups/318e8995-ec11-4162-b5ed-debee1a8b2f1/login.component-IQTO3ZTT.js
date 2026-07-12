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
} from "./chunk-GWKRIMRY.js";
import {
  AuthService
} from "./chunk-7JCEHVK2.js";
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
} from "./chunk-POJ4OZZ3.js";

// src/app/features/login/login.component.ts
function LoginComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Enter a valid email.");
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
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  router = inject(Router);
  loading = signal(false);
  errorMessage = signal("");
  loginForm = this.fb.nonNullable.group({
    email: ["shopper@demo", [Validators.required, Validators.email]],
    password: ["Demo1234!", [Validators.required]]
  });
  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.errorMessage.set("");
    const { email, password } = this.loginForm.getRawValue();
    this.auth.login(email, password).subscribe({
      next: (user) => this.router.navigate([user.role === "admin" ? "/admin/products" : "/"]),
      error: () => {
        this.errorMessage.set("Invalid credentials. Please try again.");
        this.loading.set(false);
      }
    });
  }
  demoAdmin() {
    this.auth.demoLogin();
  }
  demoShopper() {
    this.auth.demoLoginShopper();
  }
  static \u0275fac = function LoginComponent_Factory(t) {
    return new (t || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 6, consts: [["data-testid", "app-ready", 1, "auth"], [1, "auth-card", "card"], [1, "auth-brand"], [1, "brand-mark"], [1, "brand-name"], [1, "auth-title"], [1, "muted", "auth-sub"], [3, "ngSubmit", "formGroup"], [1, "field"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "data-testid", "login-email", "placeholder", "you@example.com"], [1, "error"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "current-password", "data-testid", "login-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], [1, "alert", "alert-danger"], ["type", "submit", "data-testid", "login-submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "switch", "muted"], ["routerLink", "/signup"], [1, "demo"], ["type", "button", "data-testid", "demo-mode", 1, "demo-btn", 3, "click"], ["type", "button", 1, "demo-link", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "N");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "Northwind Store");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "h1", 5);
      \u0275\u0275text(8, "Sign in");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10, "Access your account to continue shopping.");
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
      \u0275\u0275text(26, "New here? ");
      \u0275\u0275elementStart(27, "a", 17);
      \u0275\u0275text(28, "Create an account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 18)(30, "button", 19);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_30_listener() {
        return ctx.demoAdmin();
      });
      \u0275\u0275text(31, "Skip login \u2014 Demo Mode (admin)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 20);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_32_listener() {
        return ctx.demoShopper();
      });
      \u0275\u0275text(33, "or browse as a demo shopper");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(16, ctx.loginForm.controls.email.invalid && ctx.loginForm.controls.email.touched ? 16 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(21, ctx.loginForm.controls.password.invalid && ctx.loginForm.controls.password.touched ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(22, ctx.errorMessage() ? 22 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Signing in\u2026" : "Sign in", " ");
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth[_ngcontent-%COMP%] {\n  min-height: 100svh;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--sp-5);\n  background:\n    linear-gradient(\n      160deg,\n      var(--color-brand-900),\n      var(--color-brand-600));\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: var(--sp-6);\n}\n.auth-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: var(--sp-5);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  display: grid;\n  place-items: center;\n  background: var(--color-accent-600);\n  color: #fff;\n  font-weight: 800;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: var(--fs-md);\n}\n.auth-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.auth-sub[_ngcontent-%COMP%] {\n  margin: 4px 0 var(--sp-5);\n}\n.switch[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: var(--sp-4);\n  font-size: var(--fs-sm);\n}\n.demo[_ngcontent-%COMP%] {\n  margin-top: var(--sp-5);\n  padding-top: var(--sp-4);\n  border-top: 1px dashed var(--color-border);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--sp-2);\n}\n.demo-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 44px;\n  border-radius: var(--radius-sm);\n  background: var(--color-surface-2);\n  border: 1px solid var(--color-border-strong);\n  color: var(--color-text-muted);\n  font-weight: 600;\n  font-size: var(--fs-sm);\n  cursor: pointer;\n}\n.demo-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-brand-50);\n  color: var(--color-brand-600);\n}\n.demo-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--color-text-faint);\n  font-size: var(--fs-xs);\n  cursor: pointer;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-IQTO3ZTT.js.map
