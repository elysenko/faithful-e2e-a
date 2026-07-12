import {
  AuthService
} from "./chunk-X5DHVSOG.js";
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
} from "./chunk-BFQPTTOK.js";
import {
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
} from "./chunk-QZ7UG3YY.js";

// src/app/features/admin/login/admin-login.component.ts
function AdminLoginComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function AdminLoginComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Username is required");
    \u0275\u0275elementEnd();
  }
}
function AdminLoginComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
var AdminLoginComponent = class _AdminLoginComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.loading = false;
    this.errorMessage = "";
    this.loginForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }
  onSubmit() {
    if (this.loginForm.invalid)
      return;
    this.loading = true;
    this.errorMessage = "";
    const { username, password } = this.loginForm.value;
    this.authService.adminLogin(username, password).subscribe({
      next: () => this.router.navigate(["/admin"]),
      error: (err) => {
        this.errorMessage = err?.error?.message ?? "Invalid credentials. Please try again.";
        this.loading = false;
      }
    });
  }
  /** Skip login and enter the authenticated admin UI in Demo Mode. */
  demoMode() {
    this.authService.demoLogin();
  }
  static {
    this.\u0275fac = function AdminLoginComponent_Factory(t) {
      return new (t || _AdminLoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLoginComponent, selectors: [["app-admin-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 6, consts: [[1, "auth"], ["routerLink", "/", 1, "auth-back"], [1, "auth-card", "card"], [1, "auth-head"], ["aria-hidden", "true", 1, "brand-mark"], [1, "auth-title"], [1, "auth-sub"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["role", "alert", 1, "auth-error"], [1, "form-row"], ["for", "username", 1, "field-label"], ["id", "username", "type", "text", "autocomplete", "username", "formControlName", "username", "placeholder", "admin", 1, "text-input"], [1, "field-error"], ["for", "password", 1, "field-label"], ["id", "password", "type", "password", "autocomplete", "current-password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "text-input"], ["type", "submit", 1, "btn", "btn-primary", "auth-submit", 3, "disabled"], [1, "auth-divider"], ["type", "button", 1, "demo-btn", 3, "click"]], template: function AdminLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275text(2, "\u2039 Back to feed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "span", 4);
        \u0275\u0275text(6, "\u25B2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h1", 5);
        \u0275\u0275text(8, "Admin sign in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, "Manage feed sources, categories, and refreshes.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "form", 7);
        \u0275\u0275listener("ngSubmit", function AdminLoginComponent_Template_form_ngSubmit_11_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275template(12, AdminLoginComponent_Conditional_12_Template, 2, 1, "div", 8);
        \u0275\u0275elementStart(13, "div", 9)(14, "label", 10);
        \u0275\u0275text(15, "Username");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "input", 11);
        \u0275\u0275template(17, AdminLoginComponent_Conditional_17_Template, 2, 0, "span", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 9)(19, "label", 13);
        \u0275\u0275text(20, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "input", 14);
        \u0275\u0275template(22, AdminLoginComponent_Conditional_22_Template, 2, 0, "span", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 15);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 16)(26, "span");
        \u0275\u0275text(27, "or");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "button", 17);
        \u0275\u0275listener("click", function AdminLoginComponent_Template_button_click_28_listener() {
          return ctx.demoMode();
        });
        \u0275\u0275text(29, " Skip login \u2014 explore Demo Mode ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        \u0275\u0275advance(11);
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance();
        \u0275\u0275conditional(12, ctx.errorMessage ? 12 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(17, ((tmp_2_0 = ctx.loginForm.get("username")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.loginForm.get("username")) == null ? null : tmp_2_0.touched) ? 17 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(22, ((tmp_3_0 = ctx.loginForm.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.loginForm.get("password")) == null ? null : tmp_3_0.touched) ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Signing in\u2026" : "Sign in", " ");
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['\n\n.auth[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100svh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-5);\n  background:\n    radial-gradient(\n      1200px 600px at 50% -10%,\n      rgba(18, 38, 63, 0.08),\n      transparent),\n    var(--color-bg);\n}\n.auth-back[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  position: absolute;\n  top: var(--space-5);\n  left: var(--space-5);\n  min-height: 44px;\n  display: inline-flex;\n  align-items: center;\n  padding: 0 var(--space-3);\n  font-size: var(--text-sm);\n  font-weight: var(--font-semibold);\n  color: var(--color-text-muted);\n}\n.auth-back[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: var(--space-6);\n}\n.auth-head[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: var(--space-5);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1.5rem;\n  color: var(--color-primary);\n  margin-bottom: var(--space-2);\n}\n.auth-title[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: var(--text-2xl);\n  font-weight: var(--font-bold);\n}\n.auth-sub[_ngcontent-%COMP%] {\n  margin: var(--space-2) 0 0;\n  color: var(--color-text-muted);\n  font-size: var(--text-sm);\n}\n.form-row[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n}\n.field-error[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: var(--space-2);\n  font-size: var(--text-xs);\n  color: var(--color-danger);\n}\n.auth-error[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n  padding: var(--space-3) var(--space-4);\n  border-radius: var(--radius-md);\n  background: var(--color-danger-soft);\n  color: var(--color-danger);\n  font-size: var(--text-sm);\n  font-weight: var(--font-medium);\n}\n.auth-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: var(--space-2);\n}\n.auth-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  margin: var(--space-5) 0;\n  color: var(--color-text-faint);\n  font-size: var(--text-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.auth-divider[_ngcontent-%COMP%]::before, .auth-divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--color-border);\n}\n.demo-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 44px;\n  background: transparent;\n  border: 1px dashed var(--color-border-strong);\n  border-radius: var(--radius-md);\n  color: var(--color-text-muted);\n  font-size: var(--text-sm);\n  font-weight: var(--font-medium);\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n.demo-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-surface-sunken);\n  color: var(--color-text);\n}\n/*# sourceMappingURL=admin-login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLoginComponent, { className: "AdminLoginComponent", filePath: "src/app/features/admin/login/admin-login.component.ts", lineNumber: 14 });
})();
export {
  AdminLoginComponent
};
//# sourceMappingURL=admin-login.component-CT5YJT7K.js.map
