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

// src/app/features/signup/signup.component.ts
function SignupComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Valid email is required");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Password must be at least 6 characters");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Passwords do not match");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
var SignupComponent = class _SignupComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.loading = false;
    this.errorMessage = "";
    this.signupForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required]]
    }, { validators: this.passwordsMatch });
  }
  passwordsMatch(group) {
    const pw = group.get("password")?.value;
    const cpw = group.get("confirmPassword")?.value;
    return pw && cpw && pw !== cpw ? { mismatch: true } : null;
  }
  onSubmit() {
    if (this.signupForm.invalid)
      return;
    this.loading = true;
    this.errorMessage = "";
    const { name, email, password } = this.signupForm.value;
    this.authService.signup(name, email, password).subscribe({
      next: () => {
        this.router.navigate(["/dashboard"]);
      },
      error: (err) => {
        this.errorMessage = err?.error?.message ?? "Could not create account. Please try again.";
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function SignupComponent_Factory(t) {
      return new (t || _SignupComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 8, consts: [[1, "auth-wrap"], [1, "auth-card", "card"], [1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "auth-title"], [1, "auth-sub", "muted"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name", "autocomplete", "name", "data-testid", "signup-name", "placeholder", "Jane Doe", 1, "input"], [1, "error-text"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "data-testid", "signup-email", "placeholder", "you@company.com", 1, "input"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "new-password", "data-testid", "signup-password", "placeholder", "At least 6 characters", 1, "input"], ["for", "confirmPassword"], ["id", "confirmPassword", "type", "password", "formControlName", "confirmPassword", "autocomplete", "new-password", "data-testid", "signup-confirm", "placeholder", "Re-enter password", 1, "input"], [1, "error-text", "form-error"], ["type", "submit", "data-testid", "signup-submit", 1, "btn", "btn-primary", "block", 3, "disabled"], [1, "switch", "muted"], ["routerLink", "/login", "data-testid", "signup-to-login"]], template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u25C6");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Nimbus CRM");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h1", 5);
        \u0275\u0275text(8, "Create your account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, "Start managing your pipeline in minutes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "form", 7);
        \u0275\u0275listener("ngSubmit", function SignupComponent_Template_form_ngSubmit_11_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(12, "div", 8)(13, "label", 9);
        \u0275\u0275text(14, "Full name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 10);
        \u0275\u0275template(16, SignupComponent_Conditional_16_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 8)(18, "label", 12);
        \u0275\u0275text(19, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 13);
        \u0275\u0275template(21, SignupComponent_Conditional_21_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 8)(23, "label", 14);
        \u0275\u0275text(24, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "input", 15);
        \u0275\u0275template(26, SignupComponent_Conditional_26_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 8)(28, "label", 16);
        \u0275\u0275text(29, "Confirm password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "input", 17);
        \u0275\u0275template(31, SignupComponent_Conditional_31_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, SignupComponent_Conditional_32_Template, 2, 1, "div", 18);
        \u0275\u0275elementStart(33, "button", 19);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "p", 20);
        \u0275\u0275text(36, " Already have an account? ");
        \u0275\u0275elementStart(37, "a", 21);
        \u0275\u0275text(38, "Sign in");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance(11);
        \u0275\u0275property("formGroup", ctx.signupForm);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(16, ((tmp_1_0 = ctx.signupForm.get("name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.signupForm.get("name")) == null ? null : tmp_1_0.touched) ? 16 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(21, ((tmp_2_0 = ctx.signupForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.signupForm.get("email")) == null ? null : tmp_2_0.touched) ? 21 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(26, ((tmp_3_0 = ctx.signupForm.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.signupForm.get("password")) == null ? null : tmp_3_0.touched) ? 26 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(31, (ctx.signupForm.errors == null ? null : ctx.signupForm.errors["mismatch"]) && ((tmp_4_0 = ctx.signupForm.get("confirmPassword")) == null ? null : tmp_4_0.touched) ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(32, ctx.errorMessage ? 32 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.signupForm.invalid || ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Creating account\u2026" : "Create account", " ");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  min-height: 100svh;\n  background:\n    radial-gradient(\n      1200px 500px at 50% -10%,\n      var(--color-primary-soft),\n      transparent),\n    var(--color-bg);\n}\n.auth-wrap[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-height: 100svh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-5);\n  padding-bottom: calc(var(--space-5) + var(--safe-bottom));\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: var(--space-6);\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-bottom: var(--space-5);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: var(--text-xl);\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: var(--text-lg);\n}\n.auth-title[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n}\n.auth-sub[_ngcontent-%COMP%] {\n  margin: var(--space-1) 0 var(--space-5);\n}\n.block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-error[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-3);\n}\n.switch[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: var(--space-4);\n  font-size: var(--text-sm);\n}\n/*# sourceMappingURL=signup.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/features/signup/signup.component.ts", lineNumber: 14 });
})();
export {
  SignupComponent
};
//# sourceMappingURL=signup.component-FU6JTTIV.js.map
