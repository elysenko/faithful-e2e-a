import {
  AuthService
} from "./chunk-PWDBURR2.js";
import "./chunk-YUSCFUEV.js";
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
} from "./chunk-ZBJUN66K.js";
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
} from "./chunk-RUEYC2SA.js";

// src/app/features/signup/signup.component.ts
function SignupComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "Valid email is required");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "Password must be at least 6 characters");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "Passwords do not match");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
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
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirm: ["", [Validators.required]]
    }, { validators: [_SignupComponent.passwordsMatch] });
  }
  static passwordsMatch(group) {
    const pw = group.get("password")?.value;
    const confirm = group.get("confirm")?.value;
    return pw && confirm && pw !== confirm ? { mismatch: true } : null;
  }
  onSubmit() {
    if (this.signupForm.invalid)
      return;
    this.loading = true;
    this.errorMessage = "";
    const { name, email, password } = this.signupForm.value;
    this.authService.signup(name, email, password).subscribe({
      next: () => {
        this.router.navigate(["/catalog"]);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 8, consts: [[1, "center-screen"], [1, "card", "auth-card"], [1, "muted"], [3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name", "autocomplete", "name", "data-testid", "signup-name", "placeholder", "Jane Doe"], [1, "error"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "data-testid", "signup-email", "placeholder", "you@example.com"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "new-password", "data-testid", "signup-password", "placeholder", "At least 6 characters"], ["for", "confirm"], ["id", "confirm", "type", "password", "formControlName", "confirm", "autocomplete", "new-password", "data-testid", "signup-confirm", "placeholder", "Re-enter password"], [1, "alert", "alert-error"], ["type", "submit", "data-testid", "signup-submit", 1, "btn", "btn-block", 3, "disabled"], [1, "muted", "mt-4", 2, "text-align", "center"], ["routerLink", "/login", "data-testid", "signup-to-login"]], template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Create account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Join the storefront and start shopping.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "form", 3);
        \u0275\u0275listener("ngSubmit", function SignupComponent_Template_form_ngSubmit_6_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(7, "div", 4)(8, "label", 5);
        \u0275\u0275text(9, "Full name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "input", 6);
        \u0275\u0275template(11, SignupComponent_Conditional_11_Template, 2, 0, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 4)(13, "label", 8);
        \u0275\u0275text(14, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 9);
        \u0275\u0275template(16, SignupComponent_Conditional_16_Template, 2, 0, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 4)(18, "label", 10);
        \u0275\u0275text(19, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 11);
        \u0275\u0275template(21, SignupComponent_Conditional_21_Template, 2, 0, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 4)(23, "label", 12);
        \u0275\u0275text(24, "Confirm password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "input", 13);
        \u0275\u0275template(26, SignupComponent_Conditional_26_Template, 2, 0, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, SignupComponent_Conditional_27_Template, 2, 1, "div", 14);
        \u0275\u0275elementStart(28, "button", 15);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "p", 16);
        \u0275\u0275text(31, " Already have an account? ");
        \u0275\u0275elementStart(32, "a", 17);
        \u0275\u0275text(33, "Sign in");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance(6);
        \u0275\u0275property("formGroup", ctx.signupForm);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(11, ((tmp_1_0 = ctx.signupForm.get("name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.signupForm.get("name")) == null ? null : tmp_1_0.touched) ? 11 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(16, ((tmp_2_0 = ctx.signupForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.signupForm.get("email")) == null ? null : tmp_2_0.touched) ? 16 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(21, ((tmp_3_0 = ctx.signupForm.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.signupForm.get("password")) == null ? null : tmp_3_0.touched) ? 21 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(26, (ctx.signupForm.errors == null ? null : ctx.signupForm.errors["mismatch"]) && ((tmp_4_0 = ctx.signupForm.get("confirm")) == null ? null : tmp_4_0.touched) ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(27, ctx.errorMessage ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.signupForm.invalid || ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Creating\u2026" : "Create account", " ");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/features/signup/signup.component.ts", lineNumber: 13 });
})();
export {
  SignupComponent
};
//# sourceMappingURL=signup.component-RGCZJYRN.js.map
