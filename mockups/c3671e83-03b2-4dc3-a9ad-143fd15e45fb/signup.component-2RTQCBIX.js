import {
  AuthService
} from "./chunk-GASQOZOB.js";
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
} from "./chunk-7PVF4TBR.js";
import {
  Router,
  RouterLink
} from "./chunk-5PRKSMZW.js";
import {
  CommonModule,
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
} from "./chunk-LLQROSRE.js";

// src/app/features/signup/signup.component.ts
function SignupComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "A valid email is required");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "At least 8 characters");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Passwords do not match");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function matchPassword(group) {
  const pw = group.get("password")?.value;
  const confirm = group.get("confirm")?.value;
  return pw === confirm ? null : { mismatch: true };
}
var SignupComponent = class _SignupComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.loading = signal(false);
    this.errorMessage = signal("");
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirm: ["", [Validators.required]]
    }, { validators: matchPassword });
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.errorMessage.set("");
    const { name, email, password } = this.form.value;
    this.auth.signup(name, email, password).subscribe({
      next: () => this.router.navigate(["/catalog"]),
      error: (err) => {
        this.errorMessage.set(err?.error?.message ?? "Could not create account. Please try again.");
        this.loading.set(false);
      }
    });
  }
  demoMode() {
    this.auth.demoLogin();
  }
  static {
    this.\u0275fac = function SignupComponent_Factory(t) {
      return new (t || _SignupComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 8, consts: [[1, "auth-wrap"], [1, "auth-card", "card"], ["routerLink", "/catalog", 1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "muted"], [3, "ngSubmit", "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "formControlName", "name", "autocomplete", "name", "data-testid", "signup-name", 1, "input"], [1, "alert", "alert-error"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "autocomplete", "email", "data-testid", "signup-email", 1, "input"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "autocomplete", "new-password", "data-testid", "signup-password", 1, "input"], ["for", "confirm"], ["id", "confirm", "type", "password", "formControlName", "confirm", "autocomplete", "new-password", "data-testid", "signup-confirm", 1, "input"], ["type", "submit", "data-testid", "signup-submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "switch"], ["routerLink", "/login"], ["data-testid", "demo-mode", 1, "btn", "btn-block", "demo", 3, "click"]], template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u26A1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Storefront");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h1");
        \u0275\u0275text(8, "Create account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 5);
        \u0275\u0275text(10, "Sign up to start shopping.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "form", 6);
        \u0275\u0275listener("ngSubmit", function SignupComponent_Template_form_ngSubmit_11_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(12, "div", 7)(13, "label", 8);
        \u0275\u0275text(14, "Full name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 9);
        \u0275\u0275template(16, SignupComponent_Conditional_16_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 7)(18, "label", 11);
        \u0275\u0275text(19, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 12);
        \u0275\u0275template(21, SignupComponent_Conditional_21_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 7)(23, "label", 13);
        \u0275\u0275text(24, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "input", 14);
        \u0275\u0275template(26, SignupComponent_Conditional_26_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 7)(28, "label", 15);
        \u0275\u0275text(29, "Confirm password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "input", 16);
        \u0275\u0275template(31, SignupComponent_Conditional_31_Template, 2, 0, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, SignupComponent_Conditional_32_Template, 2, 1, "div", 10);
        \u0275\u0275elementStart(33, "button", 17);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "p", 18);
        \u0275\u0275text(36, "Already have an account? ");
        \u0275\u0275elementStart(37, "a", 19);
        \u0275\u0275text(38, "Sign in");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "button", 20);
        \u0275\u0275listener("click", function SignupComponent_Template_button_click_39_listener() {
          return ctx.demoMode();
        });
        \u0275\u0275text(40, " Skip login \u2014 Demo Mode ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance(11);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(16, ((tmp_1_0 = ctx.form.get("name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.form.get("name")) == null ? null : tmp_1_0.touched) ? 16 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(21, ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.touched) ? 21 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(26, ((tmp_3_0 = ctx.form.get("password")) == null ? null : tmp_3_0.hasError("minlength")) && ((tmp_3_0 = ctx.form.get("password")) == null ? null : tmp_3_0.touched) ? 26 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(31, ctx.form.hasError("mismatch") && ((tmp_4_0 = ctx.form.get("confirm")) == null ? null : tmp_4_0.touched) ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(32, ctx.errorMessage() ? 32 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Creating account\u2026" : "Create account", " ");
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth-wrap[_ngcontent-%COMP%] {\n  min-height: 100svh;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--sp-4);\n  background:\n    linear-gradient(\n      160deg,\n      var(--color-steel-dark),\n      var(--color-steel));\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: var(--sp-6);\n}\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--sp-2);\n  font-weight: 800;\n  font-size: var(--fs-lg);\n  margin-bottom: var(--sp-4);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  color: var(--color-brand);\n  font-size: 1.3em;\n}\n.auth-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--fs-xl);\n  margin-bottom: var(--sp-1);\n}\n.auth-card[_ngcontent-%COMP%]    > .muted[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: var(--sp-5);\n}\n.switch[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: var(--sp-4) 0 var(--sp-2);\n  font-size: var(--fs-sm);\n}\n.switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-info);\n  font-weight: 600;\n}\n.demo[_ngcontent-%COMP%] {\n  margin-top: var(--sp-2);\n  color: var(--color-muted);\n  background: transparent;\n  border-color: var(--color-border);\n  font-weight: 500;\n  font-size: var(--fs-sm);\n  min-height: 40px;\n}\n.demo[_ngcontent-%COMP%]:hover {\n  color: var(--color-ink);\n}\n/*# sourceMappingURL=signup.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/features/signup/signup.component.ts", lineNumber: 20 });
})();
export {
  SignupComponent
};
//# sourceMappingURL=signup.component-2RTQCBIX.js.map
