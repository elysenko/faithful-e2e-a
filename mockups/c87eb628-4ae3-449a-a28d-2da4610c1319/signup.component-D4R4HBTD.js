import {
  AuthService
} from "./chunk-WUH3AZNU.js";
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
} from "./chunk-O3VZIQDQ.js";
import {
  Router,
  RouterLink
} from "./chunk-BEE4MSIP.js";
import {
  CommonModule,
  signal,
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
} from "./chunk-VVK4PSXI.js";

// src/app/pages/signup/signup.component.ts
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
    \u0275\u0275text(1, "A valid email is required");
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
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
var SignupComponent = class _SignupComponent {
  constructor(fb, auth, router) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.loading = signal(false);
    this.errorMessage = signal("");
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirm: ["", [Validators.required]]
    }, { validators: [this.matchPasswords] });
  }
  matchPasswords(group) {
    const pw = group.get("password")?.value;
    const confirm = group.get("confirm")?.value;
    return pw && confirm && pw !== confirm ? { mismatch: true } : null;
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.errorMessage.set("");
    const { email, password } = this.form.getRawValue();
    this.auth.signup(email, password).subscribe({
      next: () => this.router.navigate(["/dashboard"]),
      error: () => {
        this.errorMessage.set("Could not create account. Try again.");
        this.loading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function SignupComponent_Factory(t) {
      return new (t || _SignupComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 8, consts: [[1, "auth-wrap"], [1, "auth-card", "card"], [1, "auth-brand"], [1, "auth-mark"], [1, "auth-name"], [1, "muted", "center"], [1, "alert", "alert-info", 2, "margin-bottom", "var(--sp-4)"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name", "autocomplete", "name", "placeholder", "Jane Doe", 1, "input"], [1, "field-error"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "placeholder", "you@company.com", 1, "input"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "new-password", "placeholder", "At least 6 characters", 1, "input"], ["for", "confirm"], ["id", "confirm", "type", "password", "formControlName", "confirm", "autocomplete", "new-password", "placeholder", "Re-enter password", 1, "input"], [1, "alert", "alert-danger"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "small", "center", 2, "margin-top", "var(--sp-4)"], ["routerLink", "/login"]], template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "M");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "MiniERP");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "Create your account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275text(10, " The first account created becomes the workspace ");
        \u0275\u0275elementStart(11, "strong");
        \u0275\u0275text(12, "admin");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "form", 7);
        \u0275\u0275listener("ngSubmit", function SignupComponent_Template_form_ngSubmit_14_listener() {
          return ctx.submit();
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
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(19, ((tmp_1_0 = ctx.form.get("name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.form.get("name")) == null ? null : tmp_1_0.touched) ? 19 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(24, ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.touched) ? 24 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(29, ((tmp_3_0 = ctx.form.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("password")) == null ? null : tmp_3_0.touched) ? 29 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(34, (ctx.form.errors == null ? null : ctx.form.errors["mismatch"]) && ((tmp_4_0 = ctx.form.get("confirm")) == null ? null : tmp_4_0.touched) ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(35, ctx.errorMessage() ? 35 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Creating\u2026" : "Create account", " ");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth-wrap[_ngcontent-%COMP%] {\n  min-height: 100svh;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--sp-5);\n  background:\n    linear-gradient(\n      160deg,\n      var(--color-steel) 0%,\n      var(--color-steel-dark) 100%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: var(--sp-6);\n}\n.auth-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--sp-2);\n  margin-bottom: var(--sp-2);\n}\n.auth-mark[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius);\n  background: var(--color-brand);\n  color: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: var(--fs-lg);\n}\n.auth-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  font-weight: 800;\n}\n/*# sourceMappingURL=signup.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/pages/signup/signup.component.ts", lineNumber: 14 });
})();
export {
  SignupComponent
};
//# sourceMappingURL=signup.component-D4R4HBTD.js.map
