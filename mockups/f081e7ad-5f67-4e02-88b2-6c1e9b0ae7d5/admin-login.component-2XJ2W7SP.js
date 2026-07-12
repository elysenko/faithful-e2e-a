import {
  AuthService
} from "./chunk-LHOH6PYM.js";
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
} from "./chunk-BB2CFAA3.js";
import {
  CommonModule,
  Router,
  RouterLink,
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
} from "./chunk-NK42F6RC.js";

// src/app/features/admin-login/admin-login.component.ts
function AdminLoginComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Enter a valid email address");
    \u0275\u0275elementEnd();
  }
}
function AdminLoginComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function AdminLoginComponent_Conditional_22_Template(rf, ctx) {
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
var AdminLoginComponent = class _AdminLoginComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
    this.loading = false;
    this.errorMessage = "";
  }
  onSubmit() {
    if (this.loginForm.invalid)
      return;
    this.loading = true;
    this.errorMessage = "";
    const { email, password } = this.loginForm.value;
    this.auth.login(email, password).subscribe({
      next: () => this.router.navigate(["/admin"]),
      error: (err) => {
        this.errorMessage = err?.error?.message ?? "Invalid credentials. Please try again.";
        this.loading = false;
      }
    });
  }
  demoLogin() {
    this.auth.demoLogin().subscribe();
  }
  static {
    this.\u0275fac = function AdminLoginComponent_Factory(t) {
      return new (t || _AdminLoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLoginComponent, selectors: [["app-admin-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 6, consts: [[1, "auth"], [1, "auth-card", "card"], ["routerLink", "/feed", 1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "lede"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "placeholder", "admin@newswire.local", "data-testid", "login-email", 1, "input"], [1, "error"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "current-password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "data-testid", "login-password", 1, "input"], [1, "banner", "error-banner"], ["type", "submit", "data-testid", "login-submit", 1, "btn", "btn-primary", "full", 3, "disabled"], [1, "divider"], ["type", "button", 1, "demo-btn", 3, "click"], ["routerLink", "/feed", 1, "back-link"]], template: function AdminLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "span", 3);
        \u0275\u0275text(4, "NW");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "NewsWire");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h1");
        \u0275\u0275text(8, "Admin sign in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 5);
        \u0275\u0275text(10, "Manage feed sources and categories.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "form", 6);
        \u0275\u0275listener("ngSubmit", function AdminLoginComponent_Template_form_ngSubmit_11_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(12, "div", 7)(13, "label", 8);
        \u0275\u0275text(14, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 9);
        \u0275\u0275template(16, AdminLoginComponent_Conditional_16_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 7)(18, "label", 11);
        \u0275\u0275text(19, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 12);
        \u0275\u0275template(21, AdminLoginComponent_Conditional_21_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, AdminLoginComponent_Conditional_22_Template, 2, 1, "div", 13);
        \u0275\u0275elementStart(23, "button", 14);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 15)(26, "span");
        \u0275\u0275text(27, "or");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "button", 16);
        \u0275\u0275listener("click", function AdminLoginComponent_Template_button_click_28_listener() {
          return ctx.demoLogin();
        });
        \u0275\u0275text(29, " Skip login \u2014 explore in Demo Mode \u2192 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "a", 17);
        \u0275\u0275text(31, "\u2190 Back to public feed");
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
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['\n\n.auth[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100svh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--sp-4);\n  background:\n    radial-gradient(\n      circle at 15% 0%,\n      var(--color-primary-soft),\n      transparent 45%),\n    radial-gradient(\n      circle at 85% 100%,\n      var(--color-accent-soft),\n      transparent 45%),\n    var(--color-bg);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: var(--sp-6);\n  display: flex;\n  flex-direction: column;\n}\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--sp-2);\n  font-weight: 800;\n  font-size: var(--fs-lg);\n  margin-bottom: var(--sp-5);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  background: var(--color-accent);\n  color: #fff;\n  font-size: var(--fs-sm);\n  font-weight: 800;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  font-weight: 800;\n}\n.lede[_ngcontent-%COMP%] {\n  margin-top: var(--sp-1);\n  margin-bottom: var(--sp-5);\n  color: var(--color-text-muted);\n  font-size: var(--fs-sm);\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--sp-4);\n}\n.error[_ngcontent-%COMP%] {\n  font-size: var(--fs-xs);\n  color: var(--color-danger);\n}\n.banner[_ngcontent-%COMP%] {\n  padding: var(--sp-3);\n  border-radius: var(--radius-md);\n  font-size: var(--fs-sm);\n}\n.error-banner[_ngcontent-%COMP%] {\n  background: var(--color-danger-soft);\n  color: var(--color-danger);\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--sp-3);\n  margin: var(--sp-5) 0 var(--sp-4);\n  color: var(--color-text-subtle);\n  font-size: var(--fs-xs);\n}\n.divider[_ngcontent-%COMP%]::before, .divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--color-border);\n}\n.demo-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 44px;\n  padding: 0 var(--sp-4);\n  border: 1px dashed var(--color-border-strong);\n  border-radius: var(--radius-md);\n  background: transparent;\n  color: var(--color-text-muted);\n  font-size: var(--fs-sm);\n  font-weight: 600;\n  transition: all 0.12s ease;\n}\n.demo-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n  background: var(--color-primary-soft);\n}\n.back-link[_ngcontent-%COMP%] {\n  margin-top: var(--sp-5);\n  text-align: center;\n  font-size: var(--fs-sm);\n  color: var(--color-text-subtle);\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n}\n/*# sourceMappingURL=admin-login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLoginComponent, { className: "AdminLoginComponent", filePath: "src/app/features/admin-login/admin-login.component.ts", lineNumber: 14 });
})();
export {
  AdminLoginComponent
};
//# sourceMappingURL=admin-login.component-2XJ2W7SP.js.map
