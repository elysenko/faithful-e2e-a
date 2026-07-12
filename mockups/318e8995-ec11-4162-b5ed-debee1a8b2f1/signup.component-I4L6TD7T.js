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
    \u0275\u0275text(1, "Enter a valid email.");
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
function passwordsMatch(group) {
  const pw = group.get("password")?.value;
  const confirm = group.get("confirmPassword")?.value;
  return pw && confirm && pw !== confirm ? { mismatch: true } : null;
}
var SignupComponent = class _SignupComponent {
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  router = inject(Router);
  loading = signal(false);
  errorMessage = signal("");
  form = this.fb.nonNullable.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]],
    confirmPassword: ["", [Validators.required]]
  }, { validators: passwordsMatch });
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.errorMessage.set("");
    const { name, email, password } = this.form.getRawValue();
    this.auth.signup(name, email, password).subscribe({
      next: () => this.router.navigate(["/"]),
      error: () => {
        this.errorMessage.set("Could not create the account. Please try again.");
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function SignupComponent_Factory(t) {
    return new (t || _SignupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 8, consts: [["data-testid", "app-ready", 1, "auth"], [1, "auth-card", "card"], [1, "auth-brand"], [1, "brand-mark"], [1, "brand-name"], [1, "auth-title"], [1, "muted", "auth-sub"], [3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name", "autocomplete", "name", "data-testid", "signup-name"], [1, "error"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "data-testid", "signup-email", "placeholder", "you@example.com"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "new-password", "data-testid", "signup-password", "placeholder", "At least 8 characters"], ["for", "confirmPassword"], ["id", "confirmPassword", "type", "password", "formControlName", "confirmPassword", "autocomplete", "new-password", "data-testid", "signup-confirm"], [1, "alert", "alert-danger"], ["type", "submit", "data-testid", "signup-submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "switch", "muted"], ["routerLink", "/login"]], template: function SignupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "N");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "Northwind Store");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "h1", 5);
      \u0275\u0275text(8, "Create your account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10, "Join to track orders and check out faster.");
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
      \u0275\u0275text(36, "Already have an account? ");
      \u0275\u0275elementStart(37, "a", 21);
      \u0275\u0275text(38, "Sign in");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(16, ctx.form.controls.name.invalid && ctx.form.controls.name.touched ? 16 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(21, ctx.form.controls.email.invalid && ctx.form.controls.email.touched ? 21 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(26, ctx.form.controls.password.invalid && ctx.form.controls.password.touched ? 26 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(31, (ctx.form.errors == null ? null : ctx.form.errors["mismatch"]) && ctx.form.controls.confirmPassword.touched ? 31 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(32, ctx.errorMessage() ? 32 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Creating account\u2026" : "Create account", " ");
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth[_ngcontent-%COMP%] {\n  min-height: 100svh;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--sp-5);\n  background:\n    linear-gradient(\n      160deg,\n      var(--color-brand-900),\n      var(--color-brand-600));\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  padding: var(--sp-6);\n}\n.auth-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: var(--sp-5);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-sm);\n  display: grid;\n  place-items: center;\n  background: var(--color-accent-600);\n  color: #fff;\n  font-weight: 800;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: var(--fs-md);\n}\n.auth-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n}\n.auth-sub[_ngcontent-%COMP%] {\n  margin: 4px 0 var(--sp-5);\n}\n.switch[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: var(--sp-4);\n  font-size: var(--fs-sm);\n}\n/*# sourceMappingURL=signup.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/features/signup/signup.component.ts", lineNumber: 20 });
})();
export {
  SignupComponent
};
//# sourceMappingURL=signup.component-I4L6TD7T.js.map
