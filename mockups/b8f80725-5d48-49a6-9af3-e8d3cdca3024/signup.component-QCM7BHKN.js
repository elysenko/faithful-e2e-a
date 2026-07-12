import {
  AuthService
} from "./chunk-D6W3QKTQ.js";
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
} from "./chunk-TMCGQTI4.js";
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
} from "./chunk-S3A6C3F5.js";

// src/app/features/signup/signup.component.ts
function SignupComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Name is required.");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Enter a valid email address.");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Password must be at least 8 characters.");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "Passwords do not match.");
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
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
var SignupComponent = class _SignupComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.loading = signal(false);
    this.errorMessage = signal("");
    this.signupForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirm: ["", [Validators.required]]
    }, { validators: [this.matchValidator] });
  }
  matchValidator(group) {
    const pw = group.get("password")?.value;
    const cf = group.get("confirm")?.value;
    return pw && cf && pw !== cf ? { mismatch: true } : null;
  }
  onSubmit() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.errorMessage.set("");
    const { name, email, password } = this.signupForm.value;
    this.auth.signup({ name, email, password }).subscribe({
      next: () => this.router.navigate(["/dashboard"]),
      error: (err) => {
        this.errorMessage.set(err?.error?.message ?? "Could not create account. Try Demo Mode.");
        this.loading.set(false);
      }
    });
  }
  demoLogin() {
    this.auth.demoLogin();
  }
  static {
    this.\u0275fac = function SignupComponent_Factory(t) {
      return new (t || _SignupComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 8, consts: [[1, "auth-page"], [1, "auth-card", "card"], [1, "auth-brand"], [1, "auth-mark"], [1, "auth-title"], [1, "auth-heading"], [1, "auth-sub"], [3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name", "autocomplete", "name", "placeholder", "Jane Rivera", 1, "input"], [1, "field-error"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "placeholder", "you@company.com", 1, "input"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "new-password", "placeholder", "At least 8 characters", 1, "input"], ["for", "confirm"], ["id", "confirm", "type", "password", "formControlName", "confirm", "autocomplete", "new-password", "placeholder", "Re-enter password", 1, "input"], [1, "badge", "badge-error", "auth-alert"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], ["type", "button", 1, "btn", "btn-block", "demo-btn", 3, "click"], [1, "auth-foot"], ["routerLink", "/login"]], template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u2601");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Nimbus CRM");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h1", 5);
        \u0275\u0275text(8, "Create your account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, "Start tracking accounts, contacts and deals in minutes.");
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
        \u0275\u0275text(19, "Work email");
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
        \u0275\u0275elementStart(35, "button", 20);
        \u0275\u0275listener("click", function SignupComponent_Template_button_click_35_listener() {
          return ctx.demoLogin();
        });
        \u0275\u0275text(36, " Skip \u2014 explore Demo Mode ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "p", 21);
        \u0275\u0275text(38, "Already have an account? ");
        \u0275\u0275elementStart(39, "a", 22);
        \u0275\u0275text(40, "Sign in");
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
        \u0275\u0275conditional(31, ctx.signupForm.hasError("mismatch") && ((tmp_4_0 = ctx.signupForm.get("confirm")) == null ? null : tmp_4_0.touched) ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(32, ctx.errorMessage() ? 32 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Creating account\u2026" : "Create account", " ");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100svh;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-4);\n  background:\n    linear-gradient(\n      150deg,\n      var(--color-brand-darker),\n      var(--color-brand) 140%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: var(--space-6) var(--space-5);\n}\n.auth-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-bottom: var(--space-5);\n}\n.auth-mark[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.auth-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: var(--text-lg);\n  color: var(--color-brand-darker);\n}\n.auth-heading[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n  margin-bottom: var(--space-1);\n}\n.auth-sub[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary);\n  font-size: var(--text-sm);\n  margin: 0 0 var(--space-5);\n}\n.auth-alert[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin-bottom: var(--space-4);\n}\n.demo-btn[_ngcontent-%COMP%] {\n  margin-top: var(--space-3);\n  border-style: dashed;\n  color: var(--color-text-secondary);\n}\n.auth-foot[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: var(--space-5) 0 0;\n  font-size: var(--text-sm);\n  color: var(--color-text-secondary);\n}\n/*# sourceMappingURL=auth.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/features/signup/signup.component.ts", lineNumber: 14 });
})();
export {
  SignupComponent
};
//# sourceMappingURL=signup.component-QCM7BHKN.js.map
