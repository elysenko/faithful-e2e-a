import {
  AuthService
} from "./chunk-2ZMDFIT5.js";
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
} from "./chunk-6WBQSCB2.js";
import {
  Router,
  RouterLink
} from "./chunk-JU25ONEJ.js";
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
} from "./chunk-DARMOPX2.js";

// src/app/features/signup/signup.component.ts
function SignupComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Valid email is required");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Password must be at least 6 characters");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Passwords do not match");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_35_Template(rf, ctx) {
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
      confirm: ["", [Validators.required]]
    }, { validators: matchPasswords });
  }
  onSubmit() {
    if (this.signupForm.invalid)
      return;
    this.loading = true;
    this.errorMessage = "";
    const { name, email, password } = this.signupForm.value;
    this.authService.signup(name, email, password).subscribe({
      next: () => this.router.navigate(["/items"]),
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 8, consts: [[1, "auth-wrap"], [1, "auth-card", "card"], [1, "auth-brand"], [1, "brand-mark"], [1, "brand-name"], [1, "auth-sub", "muted"], [1, "hint", "muted", "text-sm"], [3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name", "autocomplete", "name", "placeholder", "Jane Clerk"], [1, "field-error"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "placeholder", "you@company.com"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "new-password", "placeholder", "At least 6 characters"], ["for", "confirm"], ["id", "confirm", "type", "password", "formControlName", "confirm", "autocomplete", "new-password", "placeholder", "Re-enter password"], ["role", "alert", 1, "field-error"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "auth-foot", "muted"], ["routerLink", "/login"]], template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u25A3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "StockRoom");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "Create your account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, "The first account created becomes the ");
        \u0275\u0275elementStart(11, "strong");
        \u0275\u0275text(12, "Manager");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, ".");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "form", 7);
        \u0275\u0275listener("ngSubmit", function SignupComponent_Template_form_ngSubmit_14_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(15, "div", 8)(16, "label", 9);
        \u0275\u0275text(17, "Full name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 10);
        \u0275\u0275template(19, SignupComponent_Conditional_19_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 8)(21, "label", 12);
        \u0275\u0275text(22, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 13);
        \u0275\u0275template(24, SignupComponent_Conditional_24_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 8)(26, "label", 14);
        \u0275\u0275text(27, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "input", 15);
        \u0275\u0275template(29, SignupComponent_Conditional_29_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 8)(31, "label", 16);
        \u0275\u0275text(32, "Confirm password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(33, "input", 17);
        \u0275\u0275template(34, SignupComponent_Conditional_34_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(35, SignupComponent_Conditional_35_Template, 2, 1, "div", 18);
        \u0275\u0275elementStart(36, "button", 19);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "p", 20);
        \u0275\u0275text(39, " Already have an account? ");
        \u0275\u0275elementStart(40, "a", 21);
        \u0275\u0275text(41, "Sign in");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance(14);
        \u0275\u0275property("formGroup", ctx.signupForm);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(19, ((tmp_1_0 = ctx.signupForm.get("name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.signupForm.get("name")) == null ? null : tmp_1_0.touched) ? 19 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(24, ((tmp_2_0 = ctx.signupForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.signupForm.get("email")) == null ? null : tmp_2_0.touched) ? 24 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(29, ((tmp_3_0 = ctx.signupForm.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.signupForm.get("password")) == null ? null : tmp_3_0.touched) ? 29 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(34, ctx.signupForm.hasError("mismatch") && ((tmp_4_0 = ctx.signupForm.get("confirm")) == null ? null : tmp_4_0.touched) ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(35, ctx.errorMessage ? 35 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.signupForm.invalid || ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Creating\u2026" : "Create account", " ");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth-wrap[_ngcontent-%COMP%] {\n  min-height: 100svh;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-4);\n  background:\n    radial-gradient(\n      1200px 600px at 50% -10%,\n      var(--color-primary-soft),\n      transparent),\n    var(--color-bg);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  padding: var(--space-6);\n}\n.auth-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  font-size: 26px;\n  font-weight: 700;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.auth-sub[_ngcontent-%COMP%] {\n  margin-top: var(--space-1);\n  margin-bottom: var(--space-2);\n}\n.hint[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-5);\n}\n.auth-foot[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: var(--space-4);\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=signup.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/features/signup/signup.component.ts", lineNumber: 14 });
})();
function matchPasswords(group) {
  const pw = group.get("password")?.value;
  const confirm = group.get("confirm")?.value;
  return pw && confirm && pw !== confirm ? { mismatch: true } : null;
}
export {
  SignupComponent
};
//# sourceMappingURL=signup.component-DZIJ57O5.js.map
