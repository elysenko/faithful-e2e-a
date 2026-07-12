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
} from "./chunk-VXD3V2JR.js";
import {
  AuthService
} from "./chunk-T6HJ4SPB.js";
import {
  Router,
  RouterLink
} from "./chunk-PGTF2OAP.js";
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
  ɵɵtextInterpolate
} from "./chunk-5S2USPPB.js";

// src/app/pages/signup/signup.component.ts
function SignupComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function SignupComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 7);
    \u0275\u0275text(1, "Name is required.");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 7);
    \u0275\u0275text(1, "Enter a valid email address.");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 7);
    \u0275\u0275text(1, "Password must be at least 6 characters.");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 7);
    \u0275\u0275text(1, "Please confirm your password.");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 7);
    \u0275\u0275text(1, "Passwords do not match.");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
  }
}
function SignupComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Create account ");
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
      confirmPassword: ["", [Validators.required]]
    });
  }
  get passwordMismatch() {
    const { password, confirmPassword } = this.form.controls;
    return confirmPassword.touched && confirmPassword.value !== password.value && !!confirmPassword.value;
  }
  submit() {
    if (this.form.invalid || this.passwordMismatch) {
      this.form.markAllAsTouched();
      return;
    }
    const { name, email, password, confirmPassword } = this.form.getRawValue();
    if (password !== confirmPassword) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.errorMessage.set("");
    this.auth.signup(name, email, password).subscribe({
      next: () => {
        this.router.navigate(["/dashboard"]);
      },
      error: () => {
        this.errorMessage.set("Could not create account. Please try again.");
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 40, vars: 8, consts: [[1, "auth-shell"], [1, "auth-card", "card"], [1, "brand"], [1, "brand-mark"], [1, "brand-name"], [1, "muted", "brand-tagline"], [1, "stack", 3, "ngSubmit", "formGroup"], [1, "error"], [1, "stack"], ["type", "text", "formControlName", "name", "autocomplete", "name", "placeholder", "Your full name", 1, "field"], ["type", "email", "formControlName", "email", "autocomplete", "email", "placeholder", "you@example.com", 1, "field"], ["type", "password", "formControlName", "password", "autocomplete", "new-password", "placeholder", "At least 6 characters", 1, "field"], ["type", "password", "formControlName", "confirmPassword", "autocomplete", "new-password", "placeholder", "Re-enter your password", 1, "field"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "spinner"], [1, "auth-footer", "stack"], [1, "muted", "note"], ["routerLink", "/login", 1, "signin-link"]], template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "R");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, "RentDesk");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "Create your account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "form", 6);
        \u0275\u0275listener("ngSubmit", function SignupComponent_Template_form_ngSubmit_9_listener() {
          return ctx.submit();
        });
        \u0275\u0275template(10, SignupComponent_Conditional_10_Template, 2, 1, "p", 7);
        \u0275\u0275elementStart(11, "label", 8)(12, "span");
        \u0275\u0275text(13, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "input", 9);
        \u0275\u0275template(15, SignupComponent_Conditional_15_Template, 2, 0, "small", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "label", 8)(17, "span");
        \u0275\u0275text(18, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "input", 10);
        \u0275\u0275template(20, SignupComponent_Conditional_20_Template, 2, 0, "small", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "label", 8)(22, "span");
        \u0275\u0275text(23, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "input", 11);
        \u0275\u0275template(25, SignupComponent_Conditional_25_Template, 2, 0, "small", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "label", 8)(27, "span");
        \u0275\u0275text(28, "Confirm password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "input", 12);
        \u0275\u0275template(30, SignupComponent_Conditional_30_Template, 2, 0, "small", 7)(31, SignupComponent_Conditional_31_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 13);
        \u0275\u0275template(33, SignupComponent_Conditional_33_Template, 1, 0, "span", 14)(34, SignupComponent_Conditional_34_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 15)(36, "p", 16);
        \u0275\u0275text(37, " The first account becomes the Manager; later accounts are created by a manager. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "a", 17);
        \u0275\u0275text(39, "Already have an account? Sign in");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275conditional(10, ctx.errorMessage() ? 10 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(15, ctx.form.controls.name.touched && ctx.form.controls.name.invalid ? 15 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(20, ctx.form.controls.email.touched && ctx.form.controls.email.invalid ? 20 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(25, ctx.form.controls.password.touched && ctx.form.controls.password.invalid ? 25 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(30, ctx.form.controls.confirmPassword.touched && ctx.form.controls.confirmPassword.invalid ? 30 : ctx.passwordMismatch ? 31 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(33, ctx.loading() ? 33 : 34);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth-shell[_ngcontent-%COMP%] {\n  min-height: 100svh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-4);\n  background: var(--color-surface);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 26rem;\n  padding: var(--space-6);\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-lg);\n  background: var(--color-brand);\n  color: var(--color-surface);\n  font-weight: 700;\n  font-size: 1.5rem;\n}\n.brand-name[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-brand);\n  font-size: 1.75rem;\n  font-weight: 700;\n}\n.brand-tagline[_ngcontent-%COMP%] {\n  margin: var(--space-2) 0 var(--space-5);\n}\n.auth-footer[_ngcontent-%COMP%] {\n  margin-top: var(--space-5);\n  padding-top: var(--space-4);\n  border-top: 1px solid var(--color-border);\n  text-align: center;\n}\n.note[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n}\n.signin-link[_ngcontent-%COMP%] {\n  color: var(--color-brand);\n  font-weight: 600;\n  text-decoration: none;\n}\n.signin-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=signup.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/pages/signup/signup.component.ts", lineNumber: 14 });
})();
export {
  SignupComponent
};
//# sourceMappingURL=signup.component-HVPYFJ5W.js.map
