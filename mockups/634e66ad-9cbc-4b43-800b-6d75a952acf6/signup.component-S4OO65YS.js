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
} from "./chunk-7F3Y7YLT.js";
import {
  AuthService
} from "./chunk-CVPORU2Z.js";
import {
  Router,
  RouterLink
} from "./chunk-VMQX45X4.js";
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
} from "./chunk-VZ6O3Y2G.js";

// src/app/features/signup/signup.component.ts
function SignupComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "Valid email is required");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "Password must be at least 6 characters");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "Passwords do not match");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
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
      passwordconf: ["", [Validators.required]]
    }, { validators: [this.matchPasswords] });
  }
  matchPasswords(group) {
    const pw = group.get("password")?.value;
    const conf = group.get("passwordconf")?.value;
    return pw && conf && pw !== conf ? { mismatch: true } : null;
  }
  onSubmit() {
    if (this.signupForm.invalid)
      return;
    this.loading = true;
    this.errorMessage = "";
    const { name, email, password, passwordconf } = this.signupForm.value;
    this.authService.register(name, email, password, passwordconf).subscribe({
      next: () => this.router.navigate(["/projects"]),
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 8, consts: [[1, "auth-page"], [1, "auth-card", "card"], [1, "auth-brand"], [1, "brand-mark"], [1, "auth-tagline"], [3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name", "autocomplete", "name", "placeholder", "Jane Builder"], [1, "error"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "placeholder", "you@company.com"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "new-password", "placeholder", "At least 6 characters"], ["for", "passwordconf"], ["id", "passwordconf", "type", "password", "formControlName", "passwordconf", "autocomplete", "new-password", "placeholder", "Re-enter password"], [1, "error", "form-error"], ["type", "submit", 1, "btn", "btn-primary", "full", 3, "disabled"], [1, "auth-alt"], ["routerLink", "/login"]], template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u25B2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "SiteView");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "Create your viewer account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "form", 5);
        \u0275\u0275listener("ngSubmit", function SignupComponent_Template_form_ngSubmit_9_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(10, "div", 6)(11, "label", 7);
        \u0275\u0275text(12, "Full name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 8);
        \u0275\u0275template(14, SignupComponent_Conditional_14_Template, 2, 0, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 6)(16, "label", 10);
        \u0275\u0275text(17, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 11);
        \u0275\u0275template(19, SignupComponent_Conditional_19_Template, 2, 0, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 6)(21, "label", 12);
        \u0275\u0275text(22, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 13);
        \u0275\u0275template(24, SignupComponent_Conditional_24_Template, 2, 0, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 6)(26, "label", 14);
        \u0275\u0275text(27, "Confirm password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "input", 15);
        \u0275\u0275template(29, SignupComponent_Conditional_29_Template, 2, 0, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, SignupComponent_Conditional_30_Template, 2, 1, "div", 16);
        \u0275\u0275elementStart(31, "button", 17);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "p", 18);
        \u0275\u0275text(34, " Already have an account? ");
        \u0275\u0275elementStart(35, "a", 19);
        \u0275\u0275text(36, "Sign in");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance(9);
        \u0275\u0275property("formGroup", ctx.signupForm);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(14, ((tmp_1_0 = ctx.signupForm.get("name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.signupForm.get("name")) == null ? null : tmp_1_0.touched) ? 14 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(19, ((tmp_2_0 = ctx.signupForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.signupForm.get("email")) == null ? null : tmp_2_0.touched) ? 19 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(24, ((tmp_3_0 = ctx.signupForm.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.signupForm.get("password")) == null ? null : tmp_3_0.touched) ? 24 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(29, (ctx.signupForm.errors == null ? null : ctx.signupForm.errors["mismatch"]) && ((tmp_4_0 = ctx.signupForm.get("passwordconf")) == null ? null : tmp_4_0.touched) ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(30, ctx.errorMessage ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.signupForm.invalid || ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Creating account\u2026" : "Create account", " ");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100svh;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-5);\n  background:\n    radial-gradient(\n      circle at 20% 15%,\n      var(--color-primary-soft),\n      transparent 45%),\n    radial-gradient(\n      circle at 85% 85%,\n      var(--color-accent-soft),\n      transparent 40%),\n    var(--color-bg);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: var(--space-6);\n}\n.auth-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--space-2);\n  margin-bottom: var(--space-1);\n}\n.auth-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-2xl);\n  color: var(--color-primary);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  color: var(--color-accent);\n}\n.auth-tagline[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--color-text-muted);\n  font-size: var(--fs-sm);\n  margin-bottom: var(--space-5);\n}\n.field[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n}\n.form-error[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-3);\n}\n.btn.full[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: var(--space-2);\n}\n.auth-alt[_ngcontent-%COMP%] {\n  margin-top: var(--space-5);\n  text-align: center;\n  font-size: var(--fs-sm);\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=signup.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/features/signup/signup.component.ts", lineNumber: 14 });
})();
export {
  SignupComponent
};
//# sourceMappingURL=signup.component-S4OO65YS.js.map
