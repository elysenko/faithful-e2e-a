import {
  AuthService
} from "./chunk-HSLVF4RF.js";
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
} from "./chunk-BFWEJMPJ.js";
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
} from "./chunk-JG2HHNQL.js";

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
    \u0275\u0275text(1, "Password must be at least 8 characters");
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
function passwordsMatch(group) {
  const pw = group.get("password")?.value;
  const conf = group.get("confirm")?.value;
  return pw && conf && pw !== conf ? { mismatch: true } : null;
}
var SignupComponent = class _SignupComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.loading = false;
    this.errorMessage = "";
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirm: ["", [Validators.required]]
    }, { validators: passwordsMatch });
  }
  onSubmit() {
    if (this.form.invalid)
      return;
    this.loading = true;
    this.errorMessage = "";
    const { name, email, password } = this.form.value;
    this.authService.signup(name, email, password).subscribe({
      next: () => this.router.navigate(["/catalog"]),
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 8, consts: [[1, "auth-shell"], [1, "auth-card", "card"], [1, "auth-head"], [1, "auth-mark"], [1, "muted"], [3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name", "autocomplete", "name", "data-testid", "signup-name", "placeholder", "Jane Doe"], [1, "error"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "data-testid", "signup-email", "placeholder", "you@example.com"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "new-password", "data-testid", "signup-password", "placeholder", "At least 8 characters"], ["for", "confirm"], ["id", "confirm", "type", "password", "formControlName", "confirm", "autocomplete", "new-password", "data-testid", "signup-confirm", "placeholder", "Re-enter password"], ["data-testid", "signup-error", 1, "error"], ["type", "submit", "data-testid", "signup-submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "auth-alt"], ["routerLink", "/login", "data-testid", "to-login"]], template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u{1F6CD}\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "Create your account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "Join Storefront and start shopping");
        \u0275\u0275elementEnd()();
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
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(14, ((tmp_1_0 = ctx.form.get("name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.form.get("name")) == null ? null : tmp_1_0.touched) ? 14 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(19, ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.touched) ? 19 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(24, ((tmp_3_0 = ctx.form.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("password")) == null ? null : tmp_3_0.touched) ? 24 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(29, (ctx.form.errors == null ? null : ctx.form.errors["mismatch"]) && ((tmp_4_0 = ctx.form.get("confirm")) == null ? null : tmp_4_0.touched) ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(30, ctx.errorMessage ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.form.invalid || ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Creating account\u2026" : "Create account", " ");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth-shell[_ngcontent-%COMP%] {\n  min-height: calc(100svh - var(--navbar-height));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-5) var(--space-4) calc(var(--space-8) + 64px);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  padding: var(--space-6);\n}\n.auth-head[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: var(--space-5);\n}\n.auth-mark[_ngcontent-%COMP%] {\n  font-size: 34px;\n}\n.auth-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: var(--space-2) 0 var(--space-1);\n  font-size: var(--text-2xl);\n}\n.field[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-4);\n}\n.demo-hints[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-top: var(--space-4);\n  font-size: var(--text-sm);\n}\n.auth-alt[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: var(--space-5);\n  color: var(--color-text-muted);\n  font-size: var(--text-sm);\n}\n.skip-link[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: var(--space-4);\n  padding: var(--space-2);\n  background: transparent;\n  border: none;\n  color: var(--color-text-subtle);\n  font-size: var(--text-sm);\n  text-decoration: underline;\n}\n.skip-link[_ngcontent-%COMP%]:active {\n  color: var(--color-primary);\n}\n/*# sourceMappingURL=auth.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/features/signup/signup.component.ts", lineNumber: 20 });
})();
export {
  SignupComponent
};
//# sourceMappingURL=signup.component-M6G7GEAR.js.map
